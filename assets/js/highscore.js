var nameAndScore = document.getElementById("nameAndScore");
var listHighScores = document.getElementById("listHighScores");

function viewHighScore () {
    //get High Score
    let highscores = JSON.parse(window.localStorage.getItem("user")) || [];
    console.log(highscores);
    highscores.sort(function (a,b){ 
       return(b.Score-a.Score);
   })
    highscores.forEach(function (Score){
       let li= document.createElement("li");
       li.textContent= Score.Name + " - " + Score.Score; 
       let list = document.getElementById("nameAndScore");
       list.appendChild(li);
   })
 }   
function clear (){
    window.localStorage.removeItem("user");
    window.location.reload();
}
document.getElementById("clearHighScore").onclick= clear;

 viewHighScore();