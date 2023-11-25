// Set a specific secret number for demonstration
const secretNumber = 17 ;

function checkGuess() {
  // Get the user's guess
  const userGuess = document.getElementById("guessInput").value;

  // Check if the guess is correct
  if (userGuess == secretNumber) {
    document.getElementById("result").innerHTML = "Congratulations! You guessed the correct number!";
  } else if (userGuess < secretNumber) {
    document.getElementById("result").innerHTML = "Too low! Try again.";
  } else {
    document.getElementById("result").innerHTML = "Too high! Try again.";
  }
}
