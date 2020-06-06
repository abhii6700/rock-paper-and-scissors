const game = () => {
  let pScore = 0;
  let cScore = 0;

  //start game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  //playmatch
  const playmatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        hand.style.animation = "";
      });
    });

    //computer options
    const computeroptions = ["rock", "paper", "scissors"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
        //computer choice
        const computernumber = Math.floor(Math.random() * 3);
        const computerchoice = computeroptions[computernumber];

        playerHand.src = `./assets/rock.png`;
        computerHand.src = `./assets/rock.png`;

        //result timeout
        setTimeout(() => {
          //compare hands
          comparehands(this.textContent, computerchoice);

          //hand image update
          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerchoice}.png`;
        }, 2000);

        //animation
        playerHand.style.animation = "shakeplayer 2s ease";
        computerHand.style.animation = "shakecomputer 2s ease";
      });
    });
  };
  //score update
  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");

    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const comparehands = (playerchoice, computerchoice) => {
    //update text
    const winner = document.querySelector(".winner");
    //for tie
    if (playerchoice == computerchoice) {
      winner.textContent = "it is a tie";
      return;
    }

    //rock
    if (playerchoice == "rock") {
      if (computerchoice == "scissors") {
        winner.textContent = "player wins";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "computer wins";
        cScore++;
        updateScore();
        return;
      }
    }

    //paper
    if (playerchoice == "paper") {
      if (computerchoice == "rock") {
        winner.textContent = "player wins";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "computer wins";
        cScore++;
        updateScore();
        return;
      }
    }

    //scissors
    if (playerchoice == "scissors") {
      if (computerchoice == "rock") {
        winner.textContent = "computer wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "player wins";
        pScore++;
        updateScore();
        return;
      }
    }
  };
  // call all the inner functions
  startGame();
  playmatch();
};

game();
