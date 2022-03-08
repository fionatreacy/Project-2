const game = () => {
    let pScore = 0;
    let cScore = 0; 

    // starting the game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  // playing the game
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
      option.addEventListener("click", function() {
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
        setTimeout(() => {

            // comparing choices
            compareHands(this.textContent, computerChoice);
            playerHand.src = `assets/images/${this.textContent}.png`;
            computerHand.src = `assets/images/${computerChoice}.png`;
          }, 2000);

          // animation
          playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
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
    const winner = document.querySelector(".winner");

    if (playerChoice === computerChoice) {
        alert("It's a tie!");
        return;
      }

      // when player chooses rock
      if (playerChoice === "rock") {
        if (computerChoice === "scissors") {
          alert("Congrats! You won!");
          pScore++;
          updateScore();
          return;
        } else {
          alert("Computer wins :/");
          cScore++;
          updateScore();
          return;
        }
      }