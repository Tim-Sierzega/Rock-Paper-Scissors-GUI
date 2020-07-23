function computerPlay(options) {

    return options[Math.floor(Math.random() * options.length)];
}
var options = ['rock', 'paper', 'scissors'];
function game() {

    while (playerScore < 5 && compScore < 5) {
        let playerScore = [0];
        let compScore = [0];
        playRound();

        function playRound() {
            const playerPick = prompt();
            let playerSelection = playerPick.toLowerCase();


            let computerSelection = computerPlay(options);
            if (playerSelection === 'rock' && computerSelection === 'scissors') {
                return 'You Win ' + playerScore.push(1);
            }
            if (playerSelection === 'paper' && computerSelection === 'rock') {
                return 'You Win! ' + playerScore.push(1);
            }
            if (playerSelection === 'scissors' && computerSelection === 'paper') {
                return 'You Win! ' + playerScore.push(1);
            }
            if (playerSelection === 'paper' && computerSelection === 'scissors') {
                return 'You Win! ' + compScore.push(1);
            }
            if (playerSelection === 'scissors' && computerSelection === 'rock') {
                return 'Computer Wins ' + compScore.push(1);
            }
            if (playerSelection === 'rock' && computerSelection === 'paper') {
                return 'Computer Wins ' + compScore.push(1);
            }
            else if (playerSelection === computerSelection) {
                return 'draw';
            }

        }

    }

}
