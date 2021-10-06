var nameAndScore = document.getElementById("nameAndScore");
var listHighScores = document.getElementById("listHighScores");

function viewHighScore () {
    //  //get High Score
    //  var scoreFormList = document.getElementById("listHighScores");
    //  // get the current value of the form display property
    //  var displaySetting = scoreForm.style.display;
    //  // also get the clock button, so we can change what it says
    //  // var clickHere = document.getElementById('clickHere');
    //  if (displaySetting == "block") {
    //      scoreFormList.style.display = "none";
    //      //clickHere.innerHTML = "Click Here";
    //  }
    //  else {
    //      scoreFormList.style.display = "block";
    //      // clickHere.innerHTML = "Hide Click Here"
    //  }
    //let highscores= [];
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