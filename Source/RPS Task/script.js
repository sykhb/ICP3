 
    const options = document.querySelectorAll(".options");
    let myScore = 0;
    let computerScore = 0;

    options.forEach((option) => {
      option.addEventListener("click", function () {
        const myInput = this.value;

        const computerOptions = ["Rock", "Paper", "Scissors"];
        const computerInput = computerOptions[Math.floor(Math.random() * 3)];
        
        updateMoves(myInput, computerInput);
        compareInputs(myInput, computerInput);
        updateScore();
        if(checkWinner()){
          myScore = computerScore= 0;
          updateScore();
        }
      });
    });

    function updateMoves(myInput, computerInput){
      document.getElementById("my-move").src = `./images/${myInput}.svg`;
      document.getElementById("computer-move").src = `./images/${computerInput}.svg`;
    }


    function compareInputs(myInput, computerInput) {
      const currentMatch = `${myInput} vs ${computerInput}`;
      if (myInput === computerInput) {
        alert(`${currentMatch} is a Tie`);
        return;
      }
// Rock possibilities
      if (myInput === "Rock") {
        if (computerInput === "Scissors") {
          alert(`${currentMatch} = You Win`);
          myScore++;
        } else {
          alert(`${currentMatch} = Computer Wins`);
          computerScore++;
        }
      }
      //Paper possibility
      else if (myInput === "Paper") {
        if (computerInput === "Rock") {
          alert(`${currentMatch} = You Win`);
          myScore++;
        } else {
          alert(`${currentMatch} = Computer Wins`);
          computerScore++;
        }
      }
      //Scissors possibility
      else {
        if (computerInput === "Paper") {
          alert(`${currentMatch} = You Win`);
          myScore++;
        } else {
          alert(`${currentMatch} = Computer Wins`);
          computerScore++;
        }
      }
    }

    function updateScore() {
      document.getElementById("my-score").textContent = myScore;
      document.getElementById("computer-score").textContent = computerScore;
    }

    function checkWinner() {
      if (myScore === 5 || computerScore === 5) {
        const winner =
          myScore === 5
            ? "You win the game! Congratulations!"
            : "Computer wins the game! Try again next time!";
        alert(winner);
        return true;
      }
      return false;
    }
  