const questions = [
  {
    question: " ¿Quién dijo el primer te amo? ",
    choices: ["ángel","montse", "alch no me acuerdo"],
    correctAnswer: "alch no me acuerdo"
  },
  {
    question: " ¿Donde nos conocimos?",
    choices: ["en el cerro","en san luis", "no me acuerdo"],
    correctAnswer: "en el cerro"
  },
];

let currentQuestion = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const resultElement = document.getElementById('result');
const submitButton = document.getElementById('submit');
const finalResultElement = document.getElementById('finalResult'); 

function displayQuestion() {
  const q = questions[currentQuestion];
  questionElement.textContent = q.question;
  choicesElement.innerHTML = '';
  q.choices.forEach(choice => {
    const button = document.createElement('button');
    button.textContent = choice;
    button.addEventListener('click', () => checkAnswer(choice));
    choicesElement.appendChild(button);
  });
}

function checkAnswer(choice) {
  const q = questions[currentQuestion];
  if (choice === q.correctAnswer) {
    resultElement.textContent = "¡Respuesta correcta!";
    resultElement.style.color = "green";
    correctAnswers++;
  } else {
    resultElement.textContent = "Respuesta incorrecta. La respuesta correcta es: " + q.correctAnswer;
    resultElement.style.color = "red";
    incorrectAnswers++;
  }
  // Deshabilitar botones después de que se seleccione una respuesta
  const buttons = document.querySelectorAll('#choices button');
  buttons.forEach(button => {
    button.disabled = true;
  });
}

submitButton.addEventListener('click', () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    displayQuestion();
    resultElement.textContent = '';
  } else {
    questionElement.textContent = '';
    choicesElement.textContent = '';
    submitButton.style.display = 'none';
    resultElement.textContent = '¡Has completado el test!';
    finalResultElement.textContent = `Respuestas correctas: ${correctAnswers}. Respuestas incorrectas: ${incorrectAnswers}.`;
  }
});

displayQuestion();