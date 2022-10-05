
		
 // GETTING INPUTS FORM COMPUTER AND PLAYER


let playerWin   = 0;
let computerWin = 0;
			

		function getComputerChoice(){
			let Choices   = ['rock', 'paper', 'scissors'];
			let comChoice = Choices[Math.floor(Math.random() * Choices.length)]; //picks a random strings from the list of stings
			return(comChoice);
			
		}

		// function getPlayerChoice(){
		// 	let playChoice =  prompt( 'rock , paper or scissors? ');
		// 	let playerChoice = playChoice.toLowerCase();
		// 	return (playerChoice);
		// }

		// GETTING CHOICE FROM USER VIA BUTTONS

		const btns 		  = document.querySelectorAll('button');
		const playerDiv   = document.querySelector('.player');
		const computerDiv = document.querySelector('.computer');
		const finalText	  = document.querySelector('.finalText');
		console.log	(btns.forEach(btn => btn.addEventListener('click', playRound)));
		
		playerDiv.textContent   = `${ playerWin }`;
		computerDiv.textContent = `${ computerWin }`;


// GAME RULES 

		function playRound( e, computerSelection ){

			computerSelection = getComputerChoice();
			playerSelection   = this.classList.value;
			e.stopPropagation();

			if (computerSelection === 'rock' & playerSelection === 'paper') {
			
				playerWin++;
				playerDiv.textContent = `${ playerWin }`;
				finalText.textContent = "You Won! Paper beats Rock";
				// return("You Won! Paper beats Rock");
			}
			else if (computerSelection === 'paper' & playerSelection === 'rock') {
				
				computerWin++;
				computerDiv.textContent = `${ computerWin }`;
				finalText.textContent   = "You Lost! Paper beats Rock";
				// return("Youn Lost! Paper beats Rock");
			}
			else if (computerSelection === 'rock' & playerSelection === 'scissors') {
				
				computerWin++;
				computerDiv.textContent = `${ computerWin }`;
				finalText.textContent   = "You Lost! Rock beats Scissors";
				// return("You Lost! Rock beats Scissors");
			}
			else if (computerSelection === 'scissors' & playerSelection === 'rock') {
				
				playerWin++;
				playerDiv.textContent = `${ playerWin }`;
				finalText.textContent = "You Won! Rock beats Scissors";
				// return("You Won! Rock beats Scissors");
			}
			else if (computerSelection === 'paper' & playerSelection === 'scissors') {
				
				playerWin++;
				playerDiv.textContent = `${ playerWin }`;
				finalText.textContent = "You Won! Scissors beats paper";
				// return("You Won! Scissors beats paper");
			}
			else if (computerSelection === 'scissors' & playerSelection === 'paper') {
				
				computerWin++;
				computerDiv.textContent = `${ computerWin }`;
				finalText.textContent   = "You Lost! Scissors beats paper.";
				// return("You Lost! Scissors beats paper.");
			}
			else if(computerSelection === playerSelection){
				
				playerWin++;
				computerWin++;
				finalText.textContent = "It's a Draw!";

				playerDiv.textContent   = `${ playerWin }`;
				computerDiv.textContent = `${ computerWin }`;
				// return("It's a Draw!");
			}
			if (computerWin == 5 || playerWin == 5) {


				//CHECK FOR FINAL WINNER AND DISPLAY RESULTS

				if (computerWin > playerWin) {

					playerDiv.textContent   = `${ playerWin }`;
					computerDiv.textContent = `${ computerWin }`;
						
					finalText.textContent = "You lost! Computer Wins";
					//return('You lost! Computer Wins');

				}
				else if (computerWin < playerWin) {

					playerDiv.textContent   = `${ playerWin }`;
					computerDiv.textContent = `${ computerWin }`;

					finalText.textContent = "You Won! Play Again!!";
					//return('You Won! Play Again!!');
				}
				else if( computerWin === playerWin){

					

					finalText.textContent = "It's a Draw!";
					//return("It's a Draw!");

				}
					
			

				playerWin   = 0;
				computerWin = 0;

				playerDiv.textContent   = `${ playerWin }`;
				computerDiv.textContent = `${ computerWin }`;

			}
		};

// //PLAY FIVE ROUNDS OF GAME		

// 		function game(){
			
// 			let playerWin = 0;
// 			let computerWin =0;
			

// 			for (let i = 0; i < 5; i++) {	//Loop for five times

// 				let a = playRound();       //Play the game


// 										  //Checking the game results to pick a winner
// 				if ( a === " You Won! Paper beats Rock" ||
// 					 a === "You Won! Rock beats Scissors" || 
// 					 a === "You Won! Scissors beats paper") {

// 					 playerWin = playerWin + 1;

// 				}
// 				else if (a === "It's a Draw!" ){ 
// 					playerWin = playerWin + 1;
// 					computerWin = computerWin + 1;
// 				}
// 				else
// 					computerWin = computerWin + 1;
				
// 			}
				
// //DISPLAY FINAL SCORES
			
// 			console.log( playerWin );
// 			console.log( computerWin);

		
