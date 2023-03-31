// Server-side code in Node.js using Express
const express = require("express");
const app = express();
const path = require("path");
const axios = require("axios");
const knex = require("knex")({
  client: "pg",
  connection: {
    host: "localhost",
    user: "postgres",
    password: "admin",
    database: "golfteams",
    port: 5434,
  },
});

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

// axios({
//   method: 'get',
//   url: 'https://golf-leaderboard-data.p.rapidapi.com/world-rankings',
//   headers: {
//     'x-rapidapi-key': 'f1b03e4d97mshb8a45884ad8e8a2p1ce2dajsn5be73edaa2b3',
//     'x-rapidapi-host': 'golf-leaderboard-data.p.rapidapi.com'
//   }
// })
//   .then((response) => {
//     const data = response.data.results.rankings;
//     const golfers = data.map((entry) => {
//       return {
//         id: entry.player_id,
//         name: entry.player_name
//       };
//     });
//     return knex('golfers').insert(golfers);
//   })
//   .then(() => {
//     console.log('Data inserted into golfers table.');
//     knex.destroy();
//   })
//   .catch((err) => {
//     console.log('Error:', err);
//     knex.destroy();
//   });

app.get("/", (req, res) => res.sendFile(path.join(__dirname + "/index.html")));

app.get("/theOpen", (req, res) =>
  res.sendFile(path.join(__dirname + "/theOpen.html"))
);

app.get("/tournament", (req, res) =>
  res.sendFile(path.join(__dirname + "/tournament.html"))
);

app.get("/masters", (req, res) => {
  knex("teams")
    .select("teams.owner", "golfers.name AS golfer_name")
    .join("team_golfers", "teams.id", "=", "team_golfers.team_id")
    .join("golfers", "team_golfers.golfer_id", "=", "golfers.id")
    .orderBy("teams.owner")
    .then((rows) => {
      const teams = {};
      rows.forEach((row) => {
        if (!teams[row.owner]) {
          teams[row.owner] = {
            owner: row.owner,
            golfers: [],
          };
        }
        teams[row.owner].golfers.push(row.golfer_name);
      });
      res.render("masters", { teams: Object.values(teams) });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

app.post("/newTeam", async (req, res) => {
  const teamName = req.body.teamName;
  const golferNames = req.body.golfers;

  const golferIds = [];
  for (const name of golferNames) {
    let golfer = await knex("golfers").where({ name: name }).first();
    // if (!golfer) {
    //   golfer = await knex('golfers').insert({name: name}).returning(['id', 'name']);
    // }
    golferIds.push(golfer.id);
  }

  const team = await knex("teams").insert({ owner: teamName }).returning("*");
  for (const golferId of golferIds) {
    await knex("team_golfers").insert({
      team_id: team[0].id,
      golfer_id: golferId,
    });
  }

  res.redirect("/masters");
});

app.get("/newTeam", function (req, res) {
  // Query the golfers table to get all golfers
  knex
    .select("*")
    .from("golfers")
    .orderBy("name")
    .then(function (results) {
      // Pass the results to the newTeam template
      res.render("newTeam", { golfers: results });
    })
    .catch(function (error) {
      console.error(error);
      res.sendStatus(500);
    });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
