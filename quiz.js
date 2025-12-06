// Function to check the user's answer
function checkAnswer() {
    // The correct answer
    let correctAnswer = "4";

    // Get the selected radio button
    let selectedOption = document.querySelector('input[name="quiz"]:checked');

    // If no option is selected
    if (!selectedOption) {
        document.getElementById("feedback").textContent = "Please select an answer.";
        return;
    }

    // Get the user's answer value
    let userAnswer = selectedOption.value;

    // Compare with correct answer
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
