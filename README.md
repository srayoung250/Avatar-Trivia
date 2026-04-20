# Avatar-Trivia

Avatar Trivia 🏹
An interactive web-based trivia game that tests your knowledge of Pandora, the Na'vi, and the events of the Avatar film franchise. Built with vanilla JavaScript, HTML, and CSS.

🚀 Features
Dynamic Question Rendering: Questions and options are generated dynamically from a data object.
Instant Feedback: Includes custom Na'vi-themed feedback messages for correct and incorrect answers.
Visual Validation: Correct and incorrect buttons are styled immediately upon selection to show the right answer.
Score Tracking: Calculates and displays your final score at the end of the journey.
Restart Functionality: Allows users to loop back and try for a perfect score without refreshing the page.

🛠️ Project Structure
The core logic is handled by a central state machine:
avatarData: An array of objects containing the questions, multiple-choice options, and the zero-based index of the correct answer.
showQuestion(): Handles the DOM manipulation to clear previous states and inject new quiz content.
selectOption(): Manages the scoring logic and disables buttons to prevent multiple guesses.

📖 How to Use
Clone the repository:

Bash
git clone https://github.com/srayoung250/Avatar-Trivia.git
Open the project:
Launch index.html in any modern web browser.

Play:
Click Start to begin.
Select your answer. The game will highlight the correct choice in green and incorrect in red.
Click Next to proceed until you reach the final score screen.
