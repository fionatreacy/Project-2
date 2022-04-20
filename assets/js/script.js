const game = () => {
    let pScore = 0;
    let cScore = 0;
  
    //Start the Game
    const startGame = () => {
      const playBtn = document.querySelector(".intro button");
      const introScreen = document.querySelector(".intro");
      const match = document.querySelector(".match");
  
      playBtn.addEventListener("click", () => {
        introScreen.classList.add("fadeOut");
        match.classList.add("fadeIn");
      });
    };
    //Play Match
    const playMatch = () => {
      const options = document.querySelectorAll(".options button");
      const playerHand = document.querySelector(".player-hand");
      const computerHand = document.querySelector(".computer-hand");
      const hands = document.querySelectorAll(".hands img");
  
      hands.forEach(hand => {
        hand.addEventListener("animationend", function() {
          this.style.animation = "";
        });
      });

        // computers options and choice
        const computerOptions = ["rock", "paper", "scissors"];

        options.forEach(option => {
            option.addEventListener("click", function () {
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                setTimeout(() => {

                    // comparing choices
                    compareHands(this.textContent, computerChoice);
                    playerHand.src = `assets/images/${this.textContent}.png`;
                    computerHand.src = `assets/images/${computerChoice}.png`;
                }, 2000);


            });
        });
    };

    // updating scores
    const updateScore = () => {
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
      };
    
      const compareHands = (playerChoice, computerChoice) => {
        //Update Text
        const winner = document.querySelector(".winner");
        //Checking for a tie
        if (playerChoice === computerChoice) {
          winner.textContent = "It's a tie!";
          return;
        }
        //Check for Rock
        if (playerChoice === "rock") {
          if (computerChoice === "scissors") {
            winner.textContent = "You Win!";
            pScore++;
            updateScore();
            return;
          } else {
            winner.textContent = "Computer Wins";
            cScore++;
            updateScore();
            return;
          }
        }
        //Check for Paper
        if (playerChoice === "paper") {
          if (computerChoice === "scissors") {
            winner.textContent = "Computer Wins";
            cScore++;
            updateScore();
            return;
          } else {
            winner.textContent = "You Win!";
            pScore++;
            updateScore();
            return;
          }
        }
        //Check for Scissors
        if (playerChoice === "scissors") {
          if (computerChoice === "rock") {
            winner.textContent = "Computer Wins";
            cScore++;
            updateScore();
            return;
          } else {
            winner.textContent = "You Win!";
            pScore++;
            updateScore();
            return;
          }
        }
      };


    //play game
    startGame();
    playMatch();
};
game();