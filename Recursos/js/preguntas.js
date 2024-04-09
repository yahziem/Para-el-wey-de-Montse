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
  {
    question: " ¿Cuál es tu recuerdo favorito de nuestro tiempo juntos?",
    choices: ["en el cerro","cuando nos quedamos platicando hasta tarde", "no me acuerdo"],
    correctAnswer: "cuando nos quedamos platicando hasta tarde"
  },
  {
    question: " ¿Cuál crees que es nuestro mayor desafío como pareja y cómo lo superamos?",
    choices: ["La Majo","el mayor desafío la distancia, lo superamos aprovechando el tiempo cuando nos vemos", "alch no me acuerdo"],
    correctAnswer: "el mayor desafío la distancia, lo superamos aprovechando el tiempo cuando nos vemos"
  },
  {
    question: " ¿Hay algo que te arrepientas de no haber hecho en nuestra relación? ",
    choices: ["si, todavía no tener una cita asterik","Tomar en el tronco", "alch no se"],
    correctAnswer: "si, todavía no tener una cita asterik"
  },
  {
    question: " ¿Cómo crees que hemos cambiado el uno al otro desde que nos conocimos?  ",
    choices: ["Nuestra forma de amar","Tomar en el tronco", "cambios mentales, es decir, teniendo una perspectiva ya de un futuro y el controlar impulsos de ambos"],
    correctAnswer: "cambios mentales, es decir, teniendo una perspectiva ya de un futuro y el controlar impulsos de ambos"
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