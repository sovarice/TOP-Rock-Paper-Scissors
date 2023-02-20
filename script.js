const game = () => {
	let pScore = 0;
	let cScore = 0;
	
	const playRound = () => {
	const options = ['rock', 'paper', 'scissors'];

	const computerNumber = Math.floor(Math.random() * 3);
	console.log(computerNumber);
	};
	playRound();
};
// Computer will play first
// A function getComputerChoice() will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.

// Now it's the player's turn
// A function playRound() will take two parameters: playerSelection and computerSelection 
// playerSelection will prompt the user to enter "Rock, Paper or Scissors"
// playRound() will run conditions:
// 		IF playerSelection strictly equals getComputerChoice() THEN playRound() returns a string "It's a tie!"
// A function playRound() will return a string that declares the winner: "You Lose! Paper beats Rock"
// A new function game() will loop function playRound() 5 times and declare winner and loser
//
game ();
