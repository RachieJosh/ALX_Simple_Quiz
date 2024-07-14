// Define the checkAnswer function
function checkAnswer() {
  // Correct answer
  const correctAnswer = "4";

  // Retrieve the user’s answer
  const selectedOption = document.querySelector('input[name="quiz"]:checked');
  let userAnswer;
  if (selectedOption) {
    userAnswer = selectedOption.value;
  } else {
    userAnswer = null;
  }

  // Feedback element
  const feedback = document.getElementById("feedback");

  // Compare the user’s answer with the correct answer
  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct! Well done.";
  } else {
    feedback.textContent = "That's incorrect. Try again!";
  }
}

// Add an event listener to the "Submit Answer" button
const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);
