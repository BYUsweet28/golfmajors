localStorage.clear()

var aiPlayerEarnings = [];
var aiPlayerPosition = [];
var aiPlayerScore = [];

for(let iCount = 1; iCount < 76; iCount++)
{
    aiPlayerEarnings[iCount] = document.getElementById("earnings" + iCount).innerHTML;
    localStorage.setItem("earnings" + iCount, aiPlayerEarnings[iCount]);
    aiPlayerPosition[iCount] = document.getElementById("golfer" + iCount).innerHTML;
    aiPlayerScore[iCount] = document.getElementById("score" + iCount).innerHTML;
}

// function teams()
// {
//     var sTeamOwner = prompt("What is your name?");
//     if(sTeamOwner != "")
//     {
//         var sPlayerName = [];
//         var sOutput = sTeamOwner + "'s Picks: <br><br>" ;
//         var aiTeamPosition = [];
//         var aiTeamEarnings = [];
//         var iSum = 0;
    
//         for(let iCount1 = 1; iCount1 < 21; iCount1++)
//         {
//             if(document.getElementById("teamOutput" + iCount1).innerHTML == "")
//             {
//                 for(let iCount = 0; iCount < 5; iCount++)
//                 {
//                     sPlayerName[iCount] = prompt("Type the last name of a golfer that you would like to add to your team: \n(Be sure not to misspell the name!)");
//                     if(sPlayerName[iCount] != null && sPlayerName[iCount] != "")
//                     {
//                         sOutput += (iCount + 1) +". " + sPlayerName[iCount] + "<br>";
        
//                         if(aiTeamPosition[iCount] = aiPlayerPosition.indexOf(sPlayerName[iCount]) == -1)
//                         {
//                             iSum += 7000
//                         }
//                         else
//                         {
//                             aiTeamPosition[iCount] = parseInt(aiPlayerPosition.indexOf(sPlayerName[iCount]));
//                             aiTeamEarnings[iCount] = parseInt(document.getElementById("earnings" + aiTeamPosition[iCount]).innerHTML.replace(",","").replace(",",""));
//                             iSum += aiTeamEarnings[iCount];
//                         }
//                     }
//                     else if(sPlayerName[iCount] == "")
//                     {
//                         alert("You must insert a player's name")
//                         iCount -= 1
//                     }
//                     else
//                     {
//                         iCount = 5
//                         sOutput = null
//                     }
    
//                 }

//                 if(sOutput != null)
//                 {
//                     sOutput += "<br><br>Projected Team Earnings: $" + iSum.toLocaleString("en-US");

//                     var sConfirm = prompt("This is your team: \n" + sPlayerName[0] + "\n" + sPlayerName[1] + "\n" + sPlayerName[2] + "\n" + sPlayerName[3] + "\n" + sPlayerName[4] + "\n\nWould you like to make changes to your team? (Type Yes or No)").toUpperCase();
                    
//                     if(sConfirm == "NO" || sConfirm == "N")
//                     {
//                         document.getElementById("teamOutput" + iCount1).innerHTML = sOutput;
//                         localStorage.setItem("team" + iCount1, sOutput);
//                     }
//                     else
//                     {
//                         teams();
//                     }
//                 }

//                 iCount1 = 21;
//             }
//         }
//     }
// }

// function edit()
// {
//     var sTeamName = prompt("What is your name?");
//     var sChangeTeam = 0;
//     for(let iCount = 1; iCount < 21; iCount++)
//     {
//         if(document.getElementById("teamOutput" + iCount).innerHTML.includes(sTeamName + "'s") == true)
//         {
//             sChangeTeam = iCount;
//             iCount = 21;
//         }
//     }
//     var sPlayerChange = prompt("Which player on your team would you like to remove?");
//     var sNewPlayer = prompt("Type the last name of the player you would like to add in " + sPlayerChange + "'s place?");
//     var sReplace = document.getElementById("teamOutput" + sChangeTeam).innerHTML;

//     if(sReplace.includes(sPlayerChange) == true)
//     {
//         document.getElementById("teamOutput" + sChangeTeam).innerHTML = sReplace.replace(sPlayerChange, sNewPlayer);
//         localStorage.setItem("team" + sChangeTeam, sReplace.replace(sPlayerChange, sNewPlayer));
//         alert("You have successfully replaced " + sPlayerChange + " with " + sNewPlayer);
//     }
//     else
//     {
//         alert("That player is not on your team. Try again.");
//     }
// }

// // function existingTeams()
// // {
// //     for(let iCount = 1; iCount < 22; iCount++)
// //     {
// //         if(localStorage.getItem("team" + iCount) != "")
// //         {
// //             var sExistingTeams = localStorage.getItem("team" + iCount);
// //             document.getElementById("teamOutput" + iCount).innerHTML = sExistingTeams;
// //         }
// //         else
// //         {
// //             document.getElementById("teamOutput" + iCount).innerHTML = "";
// //         }
// //     }
// // }

// function deleteTeam()
// {
//     var sVerif = prompt("What is your name?");

//     if(sVerif == "Nowitzki")
//     {
//         var sDeleteTeam = parseInt(prompt("Which team would you like to delete? (Number 1-20)"));
//         var iPos = document.getElementById("teamOutput" + sDeleteTeam).innerHTML.indexOf("'");
//         var sTeamOwner = document.getElementById("teamOutput" + sDeleteTeam).innerHTML.slice(0, iPos);
//         var sConfirmDelete = prompt("Are you sure you want to delete " + sTeamOwner + "'s team (Team # " + sDeleteTeam +")? (Yes or No)").toUpperCase();

//         if(sConfirmDelete == "YES" || sConfirmDelete == "Y")
//         {
//             document.getElementById("teamOutput" + sDeleteTeam).innerHTML = "";
//             localStorage.setItem("team" + sDeleteTeam, "");
//             alert("You have successfully deleted Team " + sDeleteTeam)
//         }
//     }
//     else
//     {
//         alert("You are not authorized to delete a team. Please reach out to Max if you would like to remove a team.");
//     }
// }

function refresh()
{
    for(let iCount2 = 1; iCount2 < 30; iCount2++)
    {
            var sNameLength = parseInt(document.getElementById("teamOutput" + iCount2).innerHTML.indexOf(":"));
            var sTeamOwner = document.getElementById("teamOutput" + iCount2).innerHTML.slice(0,sNameLength + 1);
            var sPlayerName = [];
            var sOutput = sTeamOwner + " <br><br>" ;
            var aiTeamPosition = [];
            var aiTeamEarnings = [];
            var iSum = 0;
    
                    for(let iCount = 0; iCount < 5; iCount++)
                    {
                        if(iCount == 4)
                        {
                            var sPlayerNameStart = ((document.getElementById("teamOutput" + iCount2).innerHTML.lastIndexOf(iCount + 1)) + 3);
                            var sNextPlayer = (document.getElementById("teamOutput" + iCount2).innerHTML.indexOf("$")) - 37;
                            sPlayerName[iCount] = document.getElementById("teamOutput" + iCount2).innerHTML.slice(sPlayerNameStart,sNextPlayer);
                            sOutput += (iCount + 1) + ". " + sPlayerName[iCount] + "<br>";
                        }
                        else
                        {
                            var sPlayerNameStart = ((document.getElementById("teamOutput" + iCount2).innerHTML.lastIndexOf(iCount + 1)) + 3);
                            var sNextPlayer = ((document.getElementById("teamOutput" + iCount2).innerHTML.lastIndexOf(iCount + 2)) - 4);
                            sPlayerName[iCount] = document.getElementById("teamOutput" + iCount2).innerHTML.slice(sPlayerNameStart,sNextPlayer);
                            sOutput += (iCount + 1) + ". " + sPlayerName[iCount] + "<br>";
                        }
        
                        if(aiTeamPosition[iCount] = aiPlayerPosition.indexOf(sPlayerName[iCount]) == -1)
                        {
                            iSum += 7000
                        }
                        else
                        {
                            aiTeamPosition[iCount] = parseInt(aiPlayerPosition.indexOf(sPlayerName[iCount]));
                            aiTeamEarnings[iCount] = parseInt(document.getElementById("earnings" + aiTeamPosition[iCount]).innerHTML.replace(",","").replace(",",""));
                            iSum += aiTeamEarnings[iCount];
                        } 
                    }
        sOutput += "<br>Projected Team Earnings: $" + iSum.toLocaleString("en-US");
    console.log(sOutput);
        document.getElementById("teamOutput" + iCount2).innerHTML = sOutput;
        // localStorage.setItem("team" + iCount2, sOutput);
    }

    let aiTotalEarnings = [];
    for(let iCounter = 1; iCounter < 30; iCounter++)
    {
        let iEarningsStart = (document.getElementById("teamOutput" + iCounter).innerHTML.indexOf("$")) + 1;
        let iEarningsEnd = document.getElementById("teamOutput" + iCounter).innerHTML.length;
        aiTotalEarnings[iCounter] = parseInt(document.getElementById("teamOutput" + iCounter).innerHTML.slice(iEarningsStart, iEarningsEnd).replace(",","").replace(",",""));
    }
    
    let sHoldTeamName = "";
    let iHoldTeamAmount = 0;
    
    for (let iOuter = 1; iOuter < aiTotalEarnings.length - 1; iOuter++)
    {
        console.log(aiTotalEarnings[iOuter]);
        for (let iInner = iOuter + 1; iInner < aiTotalEarnings.length; iInner++)
        {
            console.log(aiTotalEarnings[iInner]);
            if (aiTotalEarnings[iOuter] < aiTotalEarnings[iInner])
            {
                sHoldTeamName = document.getElementById("teamOutput" + iOuter).innerHTML;
                iHoldTeamAmount = aiTotalEarnings[iOuter];
    
                document.getElementById("teamOutput" + iOuter).innerHTML = document.getElementById("teamOutput" + iInner).innerHTML;
                aiTotalEarnings[iOuter] = aiTotalEarnings[iInner];
    
                document.getElementById("teamOutput" + iInner).innerHTML = sHoldTeamName;
                aiTotalEarnings[iInner] = iHoldTeamAmount;
            }
        }
    } 
}

var n =  new Date();
var y = n.getFullYear();
var m = n.getMonth() + 1;
var d = n.getDate() - 1;
document.getElementById("d").innerHTML = m + "/" + d + "/" + y;
