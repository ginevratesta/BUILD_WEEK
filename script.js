const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

// Selezioniamo gli elementi HTML
const questionElement = document.querySelector("#question");
const answerButtons = document.querySelectorAll(".button");
const scoreElement = document.querySelector("#score");
const toAddTimer = document.querySelector("#countdown");
const counterTitle = document.querySelector("#contatore");
const numericTimer = document.querySelector(".animation");
const circle = document.querySelector(".circle");

// Dichiariamo le variabili per tenere traccia del quiz
let questionNumberIndex = 0;
let answerIndex = 0;
let score = 0;
const MAXTIMERVALUE = 30;
let countTimer = MAXTIMERVALUE;
let timer;
let contatore = 1;
var lauAudio = new Audio('./assets/laugh.mp3');
var appAudio = new Audio('./assets/applause.wav')

// Creiamo una funzione che permetta alle domande di presentarsi sempre in ordine casuale
function setRandomOrder(questions) {
  for (let i = 0; i < questions.length; i++) {
    const shuffle = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[shuffle]] = [questions[shuffle], questions[i]];
  }
}

//Settiamo la gestione del countdown. La funzione viene richiamata ogni volta che termina il timer avviato con la setInterval()
const setUpTimer = function () {
  if (countTimer > 0) {
    countTimer--;
    circle.classList.add("animatedCircle");
  }
  if (countTimer <= 10) {
    circle.style.stroke = "red";
  }
  if (countTimer === 0) {
    circle.style.stroke = "rgb(108, 248, 248)";
    toAddTimer.innerText = 0;
    handleAnswer();
    pageCounter();
    restartAnimation();
  } else {
    toAddTimer.innerHTML = countTimer;
  }
};



//Creiamo una funzione che fa ripartire l'animazione del timer circolare da 0
function restartAnimation() {
  circle.classList.remove("animatedCircle");

  circle.style.stroke = "rgb(108, 248, 248)";

  void circle.offsetWidth;

  setTimeout(function () {
    circle.classList.add("animatedCircle");
  }, 10);
}

//Creiamo una funzione che indica a che domanda si è arrivati
function pageCounter() {
  if (contatore < 10) {
    contatore++;
    counterTitle.innerHTML =
      "QUESTION " + contatore + '<span class="dark-pink"> / 10</span>';
  }
}

// Creaimo una funzione per visualizzare la domanda corrente
function randomAnswers() {
  restartAnimation();
  clearInterval(timer);
  countTimer = MAXTIMERVALUE;
  toAddTimer.innerText = countTimer;
  timer = setInterval(setUpTimer, 1000);
  const questionNumber = questions[questionNumberIndex];
  questionElement.innerText = questionNumber.question;

  let wrongAnswersIndex = 0;
  let singleWrongAnswer = false;

  answerIndex = Math.round(Math.random() * (answerButtons.length - 1));
  for (let l = 0; l < answerButtons.length; l++) {
    answerButtons[l].style.display = "none";
    if (l === answerIndex) {
      answerButtons[l].innerText = questionNumber.correct_answer;
      answerButtons[l].style.display = "block";
    } else {
      const numberOfWrongAnswers = questionNumber.incorrect_answers.length;
      if (numberOfWrongAnswers === 1) {
        if (singleWrongAnswer === false) {
          answerButtons[l].innerText = questionNumber.incorrect_answers;
          answerButtons[l].style.display = "block";
          singleWrongAnswer = true;
        }
      } else {
        answerButtons[l].innerText =
          questionNumber.incorrect_answers[wrongAnswersIndex];
        wrongAnswersIndex += 1;
        answerButtons[l].style.display = "block";
      }
    }
  }
}

// Creiamo una funzione per gestire la risposta dell'utente
function handleAnswer(event) {
  let selectedAnswer;
  const questionNumber = questions[questionNumberIndex];
  if (event === undefined) {
    selectedAnswer = "";
  } else {
    selectedAnswer = event.target.innerHTML;
  }

  if (selectedAnswer === questionNumber.correct_answer) {
    score++;
    appAudio.play()
  } else {
    lauAudio.play();
  }

  questionNumberIndex++;

  if (questionNumberIndex < questions.length) {
    randomAnswers();
  } else {
    // Quiz completato, visualizziamo il punteggio finale
    questionElement.innerText = "Quiz completed!";
    for (let i = 0; i < answerButtons.length; i++) {
      answerButtons[i].style.display = "none";
    }
    scoreElement.innerText = `Final score: ${score} out of ${questions.length}`;
    numericTimer.style.display = "none";
    counterTitle.style.display = "none";
    circle.style.display = "none";
  }
}

function setUpPage() {
  setRandomOrder(questions);
  randomAnswers();
  for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].addEventListener("click", handleAnswer);
    answerButtons[i].addEventListener("click", pageCounter);
  }
}

//Triggeriamo le funzioni al load della pagina e aggiungiamo l'evento onclick ai bottoni per gestire la risposta e conteggiare il numero di domande
window.addEventListener("load", setUpPage);
