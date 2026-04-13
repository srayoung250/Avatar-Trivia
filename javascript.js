const avatarData = [
  {
    question:
      "What is the scientific name for the mineral that humans are mining on Pandora?",
    options: ["Adamantium", "Unobtanium", "Vibranium", "Dilithium"],
    answer: 1,
  },
  {
    question: "How many fingers do the native Na'vi have on each hand?",
    options: ["Two", "Three", "Four", "Five"],
    answer: 2,
  },
  {
    question:
      " When Jake and his family flee the rainforest, which oceanic clan gives them sanctuary?",
    options: ["The Tipani", " The Tayrangi", " The Metkayina", "The Omaticaya"],
    answer: 2,
  },
  {
    question:
      "What is the name of the (outcast) Tulkun (whale-like creature) that bonds with Lo'ak?",
    options: ["Akula", "Payakan", "Roa", " Nalutsa"],
    answer: 1,
  },
  {
    question:
      "The third film will introduce a more aggressive tribe of Na'vi known as what?",
    options: [
      "The Shadow Clan",
      "The Ash People",
      "The Ember Tribe",
      "The Magma Riders",
    ],
    answer: 1,
  },
  {
    question:
      "Who is the leader of this new (fire) tribe, played by actress Oona Chaplin?",
    options: ["Mo'at", "Ronal", "Tsireya", "Varang"],
    answer: 3,
  },
  {
    question:
      "What is the name of the 'soul tree' that serves as the biological hub for the Omaticaya clan?",
    options: [
      "The Tree of Voices",
      "The Tree of Souls",
      "The Hometree",
      "The Life Root",
    ],
    answer: 1,
  },
  {
    question:
      "What unique substance is harvested from the Tulkun in 'The Way of Water'?",
    options: ["Unobtanium", "Na'vi Blood", "Amrita", "Biolume"],
    answer: 2,
  },
  {
    question:
      "What was Jake Sully's rank in the Marines before he arrived on Pandora?",
    options: ["Sergeant", "Lieutenant", "Captain", "Corporal"],
    answer: 3,
  },
  {
    question: "What is the name of Kiri's biological mother?",
    options: ["Neytiri", "Trudy Chacón", "Ronal", "Dr. Grace Augustine"],
    answer: 3,
  },
];

let currentQuestionIndex = 0;
let score = 0;

const optionsContainer = document.getElementById("options-container"),
  feedbackText = document.getElementById("feedback-message"),
  resultsScreen = document.getElementById("results-screen"),
  finalScoreText = document.getElementById("final-score"),
  restartButton = document.getElementById("restart-button"),
  nextButton = document.getElementById("next-button"),
  startButton = document.getElementById("start-button"),
  startScreen = document.getElementById("start-screen"),
  quizContainer = document.getElementById("quiz-container"),
  questionHeading = document.querySelector("#quiz-container h2");

// The Start Event
startButton.addEventListener("click", () => {
  startScreen.classList.add("hidden");
  quizContainer.classList.remove("hidden");
  showQuestion();
});

// Function to Handle Clicks & Answers
function selectOption(index) {
  const currentQuestion = avatarData[currentQuestionIndex],
    buttons = optionsContainer.querySelectorAll("button");

  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === currentQuestion.answer) {
      btn.classList.add("correct");
    } else if (i === index) {
      btn.classList.add("wrong");
    }
  });
  if (index === currentQuestion.answer) {
    score++;
    feedbackText.textContent = "Correct! I see you. 🏹";
  } else {
    feedbackText.textContent = "Wrong! You are like a baby, making noise.";
  }
  nextButton.classList.remove("hidden");
}

// The Next Button Event Ending
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < avatarData.length) {
    showQuestion();
  } else {
    showResults();
  }
});

// Function to Build the Question
function showQuestion() {
  const currentQuestion = avatarData[currentQuestionIndex];

  optionsContainer.innerHTML = "";
  feedbackText.textContent = "";
  nextButton.classList.add("hidden");

  questionHeading.textContent = currentQuestion.question;

  currentQuestion.options.forEach((optionText, index) => {
    const btn = document.createElement("button");
    btn.classList.add("option-btn");
    btn.textContent = optionText;
    btn.addEventListener("click", () => selectOption(index));
    optionsContainer.appendChild(btn);
  });
}
// Show the Final Score
function showResults() {
  quizContainer.classList.add("hidden");
  resultsScreen.classList.remove("hidden");
  finalScoreText.textContent = `You scored ${score} out of ${avatarData.length}!`;
}
// Restart Button for the end
restartButton.addEventListener("click", () => {
  score = 0;
  currentQuestionIndex = 0;
  resultsScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");
});
