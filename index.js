function computerPlay(options) {

    return options[Math.floor(Math.random() * options.length)];
  
  }
  var options = ['rock', 'paper', 'scissors'];
  
  let playerSelection;
  let playerScore = 0;
  let compScore = 0;
  

  document.getElementById('rock').addEventListener('click', function(){  // checks to see if the rock button was clicked then gives player rock selection
    playerSelection = 'rock';
    if (playerScore != 5 && compScore != 5){
      playRound();
    }
 return;
  });
  document.getElementById('paper').addEventListener('click', function(){ // checks to see if the rock button was clicked then gives player paper selection
    playerSelection = 'paper';
    if (playerScore != 5 && compScore != 5){
      playRound();
    }
 return;
  });

  document.getElementById('scissors').addEventListener('click', function(){ // checks to see if the rock button was clicked then gives player scissors selection
    playerSelection = 'scissors';
    if (playerScore != 5 && compScore != 5){
        playRound();
      }
   return;
  });


  function playRound() {
    let computerSelection = computerPlay(options);
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
      document.getElementById("results").innerHTML = "You Win! Rock beats Scissors ";
      ++playerScore
      setPscore();
      setCscore();
      return result = true ;
    } if (playerSelection === 'paper' && computerSelection === 'rock') {
      document.getElementById("results").innerHTML = "You Win! Paper beats Rock ";
      ++playerScore
      setPscore();
      setCscore();
      return result = true;
    } if (playerSelection === 'scissors' && computerSelection === 'paper') {
      document.getElementById("results").innerHTML = "You Win! Scissors beats Paper ";
      ++playerScore
      setPscore();
      setCscore();
      return result = true;
    } if (playerSelection === 'paper' && computerSelection === 'scissors') {
      document.getElementById("results").innerHTML = "Computer Wins! Scissors beats Paper";
      ++compScore;
      setPscore();
      setCscore();
      return result = false;
    }  if (playerSelection === 'scissors' && computerSelection === 'rock') {
      document.getElementById("results").innerHTML = "Computer Wins! Rock beats Scissors ";
      ++compScore;
      setPscore();
      setCscore();
      return result = false;
    }  if (playerSelection === 'rock' && computerSelection === 'paper') {
      document.getElementById("results").innerHTML = "Computer Wins! Paper beats Rock ";
      ++compScore;
      setPscore();
      setCscore();
      return result = false;
    } else if (playerSelection === computerSelection) {
      document.getElementById("results").innerHTML = "Draw, no points for you! (or the computer)";
      console.log('draw')
      return result = null;
    }

  }



  const pScore = document.querySelector('#player-score');
  const currentPScore = document.createElement('h4');
  const cScore = document.querySelector('#computer-score');
  const currentCScore = document.createElement('h4');

function setPscore(){
  currentPScore.textContent ='Player Score: '+ playerScore;
  pScore.appendChild(currentPScore)
  if (playerScore === 5){
    document.getElementById("results").innerHTML = "Congratulations, you beat the computer!";
   }
}
function setCscore(){
  currentCScore.textContent ='Player Score: '+ compScore;
  cScore.appendChild(currentCScore)
  if (compScore === 5){
    document.getElementById("results").innerHTML = "<h1>GAME OVER! YOU LOSE!</h1>";
   }
}


