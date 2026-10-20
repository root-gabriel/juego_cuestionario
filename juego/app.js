const questions = [
  {
    question: "¿Cuál es la capital de Francia?",
    options: ["París", "Madrid", "Roma", "Lisboa"],
    correctIndex: 0
  },
  {
    question: "¿En qué año se descubrió América?",
    options: ["1472", "1394", "1492", "1482"],
    correctIndex: 2
  },
  {
    question: "¿Cuántas comunidades autónomas tiene España?",
    options: ["27", "19", "16", "17"],
    correctIndex: 3
  },
  {
    question: "¿Cuál es el río más largo del mundo?",
    options: ["Tajo", "Amazonas", "Nilo", "Sena"],
    correctIndex: 1
  },
  {
    question: "¿Qué tipo de animal es la ballena?",
    options: ["Pez", "Reptil", "Ave", "Mamífero"],
    correctIndex: 3
  },
  {
    question: "¿Quién es el autor de Don Quijote de la Mancha?",
    options: ["Rubén Darío", "William Shakespeare", "Miguel de Cervantes", "Lope de Vega"],
    correctIndex: 2
  },
  {
    question: "¿Quién pintó La Última Cena?",
    options: ["Rafael Sanzio", "Miguel Ángel Buonarroti", "Leonardo da Vinci", "Sandro Botticelli"],
    correctIndex: 2
  },
  {
    question: "¿Cuál fue el primer metal que empleó el hombre?",
    options: ["Oro", "Estaño", "Cobre", "Hierro"],
    correctIndex: 2
  },
  {
    question: "¿Cuál es el primer número primo?",
    options: ["3", "1", "2", "0"],
    correctIndex: 2
  },
  {
    question: "¿Cuál es el planeta con más lunas?",
    options: ["Júpiter", "Saturno", "Urano", "Tierra"],
    correctIndex: 1
  }
];

const POINTS_PER_QUESTION = 10;
const MAX_SCORE = 100;

let currentQuestionIndex = 0;
let score = 0;

// Referencias a elementos del DOM
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const questionHeading = document.getElementById("question-heading");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const feedbackContainer = document.getElementById("feedback-container");
const feedbackText = document.getElementById("feedback-text");
const currentScoreText = document.getElementById("current-score");
const nextBtn = document.getElementById("next-btn");
const finalScoreText = document.getElementById("final-score-text");
const restartBtn = document.getElementById("restart-btn");

function renderQuestion() {
  const currentData = questions[currentQuestionIndex];

  // Actualizar encabezados y texto de la pregunta
  questionHeading.textContent = `Pregunta ${currentQuestionIndex + 1} de ${questions.length}`;
  questionText.textContent = currentData.question;

  // Limpiar opciones anteriores
  optionsContainer.innerHTML = "";

  // Ocultar mensaje de resultado y botón de avance
  feedbackContainer.hidden = true;
  feedbackContainer.className = "feedback-box";
  nextBtn.hidden = true;

  // Crear botones de opción con etiqueta visible
  currentData.options.forEach((optionText, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-button";
    button.textContent = optionText;
    button.addEventListener("click", () => handleSelectAnswer(index, button));
    optionsContainer.appendChild(button);
  });

  // Situar el foco en la primera opción al cargar la pregunta
  const firstOption = optionsContainer.querySelector(".option-button");
  if (firstOption) {
    firstOption.focus();
  }
}

function handleSelectAnswer(selectedIndex, selectedButton) {
  const currentData = questions[currentQuestionIndex];
  const isCorrect = selectedIndex === currentData.correctIndex;
  const allButtons = optionsContainer.querySelectorAll(".option-button");

  // Desactivar el resto de opciones
  allButtons.forEach((button) => {
    button.disabled = true;
  });

  // Evaluar respuesta y actualizar puntuación con texto legible
  if (isCorrect) {
    score += POINTS_PER_QUESTION;
    selectedButton.classList.add("selected-correct");
    feedbackContainer.classList.add("is-correct");
    feedbackText.textContent = "Respuesta correcta.";
  } else {
    selectedButton.classList.add("selected-incorrect");
    allButtons[currentData.correctIndex].classList.add("selected-correct");
    feedbackContainer.classList.add("is-incorrect");
    feedbackText.textContent = `Respuesta incorrecta. La respuesta correcta es: ${currentData.options[currentData.correctIndex]}.`;
  }

  // Mostrar puntuación actual después de responder
  currentScoreText.textContent = `Puntuación actual: ${score} de ${MAX_SCORE} puntos.`;
  feedbackContainer.hidden = false;

  // Cuando se responda la última pregunta el botón cambia para ver la puntuación final
  if (currentQuestionIndex === questions.length - 1) {
    nextBtn.textContent = "Ver puntuación final";
  } else {
    nextBtn.textContent = "Siguiente pregunta";
  }

  nextBtn.hidden = false;

  // Cambiar el foco de las opciones al botón de siguiente
  nextBtn.focus();
}

function handleNextQuestion() {
  currentQuestionIndex += 1;

  if (currentQuestionIndex < questions.length) {
    renderQuestion();
  } else {
    showFinalResults();
  }
}

function showFinalResults() {
  quizScreen.hidden = true;
  resultScreen.hidden = false;
  finalScoreText.textContent = `Puntuación final: ${score} de ${MAX_SCORE} puntos.`;
  restartBtn.focus();
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  resultScreen.hidden = true;
  quizScreen.hidden = false;
  renderQuestion();
}

// Navegación por teclado con flechas o WASD entre las opciones de respuesta
optionsContainer.addEventListener("keydown", (event) => {
  const activeButtons = Array.from(
    optionsContainer.querySelectorAll(".option-button:not(:disabled)")
  );

  if (activeButtons.length === 0) {
    return;
  }

  const currentIndex = activeButtons.indexOf(document.activeElement);
  const key = event.key;

  const isPrevKey =
    key === "ArrowUp" ||
    key === "ArrowLeft" ||
    key === "w" ||
    key === "W" ||
    key === "a" ||
    key === "A";

  const isNextKey =
    key === "ArrowDown" ||
    key === "ArrowRight" ||
    key === "s" ||
    key === "S" ||
    key === "d" ||
    key === "D";

  if (isPrevKey) {
    event.preventDefault();
    const prevIndex =
      currentIndex <= 0 ? activeButtons.length - 1 : currentIndex - 1;
    activeButtons[prevIndex].focus();
  } else if (isNextKey) {
    event.preventDefault();
    const nextIndex =
      currentIndex === -1 || currentIndex === activeButtons.length - 1
        ? 0
        : currentIndex + 1;
    activeButtons[nextIndex].focus();
  }
});

nextBtn.addEventListener("click", handleNextQuestion);
restartBtn.addEventListener("click", restartQuiz);

// Inicializar juego al cargar
renderQuestion();