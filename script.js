const game = () => {
	let playerSelection;
	let computerSelection;
	let pScore = 0;
	let cScore = 0;
	let result;

	//Computer chooses 'Rock', 'Paper' or 'Scissors'
	function getComputerChoice () {
		const computerOptions = ['rock', 'paper', 'scissors'];
		const computerNumber = Math.floor(Math.random() * 3);
		const computerChoice = computerOptions[computerNumber];
		return computerChoice.toLowerCase();
	};

	//console.log(getComputerChoice());

	//Player chooses 'Rock', 'Paper' or 'Scissors'
	function getPlayerChoice () {
		const playerChoice = prompt ('Choose Rock, Paper or Scissors');
		return playerChoice; 
	};

	playerSelection = getPlayerChoice().trim().toLowerCase();
	computerSelection = getComputerChoice ();



	//Play one round and compare the winner
	function playRound (playerSelection, computerSelection) {
		
		//Checking for a tie
		if (playerSelection === computerSelection) {
	 			return 'It\'s a tie!'
 		};
		//Check for rock
		if (playerSelection === 'rock') {
			if (computerSelection === 'scissors') {
				return 'Player wins!'
			} else {
				return 'Computer wins!'
			};
		};

		//Check for paper
		if (playerSelection === 'paper') {
			if (computerSelection === 'scissors') {
				return 'Computer wins!'
			} else {
				return 'Player wins!'
			};
		};

		//Check for scissors
		if (playerSelection === 'scissors') {
			if (computerSelection === 'rock') {
				return 'Computer wins!'
			} else {
				return 'Player wins!'
			};
		};

	};
	console.log(playerSelection, computerSelection);
 console.log(playRound(playerSelection, computerSelection));
	// playRound(playerSelection, computerSelection);

	// function playRound (playerSelection, computerSelection) {
	// 	playerSelection = prompt ('Choose Rock, Paper or Scissors').toLowerCase();
	// 	computerSelection = getComputerChoice();

	// 		if (playerSelection === computerSelection) {
	// 			return 'It\'s a tie!'
	// 		}
	// 		
	// 		
	// 		checkResult();
	// 	};


	// 	function checkResult () {
	// 		result = `Player: ${pScore} - Computer: ${cScore}`;
	// 		return result;
	// 	}

	};

game();
