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
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
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
const option1Element = document.querySelector("#option1");
const option2Element = document.querySelector("#option2");
const option3Element = document.querySelector("#option3");
const option4Element = document.querySelector("#option4");
const scoreElement = document.querySelector("#score");

// Dichiariamo le variabili per tenere traccia del quiz
let questionNumberIndex = 0;
let score = 0;


/*
// Creiamo una funzione che permetta alle domande di presentarsi sempre in ordine casuale
function setRandomOrder(questions) {
  for (let i = 0; i < questions.length; i++) {
    const shuffle = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[shuffle]] = [questions[shuffle], questions[i]];
  }
}
// Chiamiamo la variabile che detta un ordine casuale per il display delle domande subito prima di avviare la funzione che le mostra
setRandomOrder(questions);
*/


// Creaimo una funzione per visualizzare la domanda corrente
function displayQuestion() {
  const questionNumber = questions[questionNumberIndex];
  questionElement.innerHTML = questionNumber.question;
  option1Element.innerHTML = questionNumber.incorrect_answers[0];
  option2Element.innerHTML = questionNumber.incorrect_answers[1];
  option3Element.innerHTML = questionNumber.incorrect_answers[2];
  option4Element.innerHTML = questionNumber.correct_answer;
}

displayQuestion();

// Creiamo una funzione per gestire la risposta dell'utente
function handleAnswer(event) {
  const selectedAnswer = event.target.innerHTML;
  const questionNumber = questions[questionNumberIndex];
  
  if (selectedAnswer === questionNumber.correct_answer) {
    score++;
  }
  
  questionNumberIndex++;
  
  if (questionNumberIndex < questions.length) {
    displayQuestion();
  } else {
    // Quiz completato, visualizziamo il punteggio finale
    questionElement.innerHTML = "Quiz completato!";
    option1Element.style.display = "none";
    option2Element.style.display = "none";
    option3Element.style.display = "none";
    option4Element.style.display = "none";
    scoreElement.innerHTML = `Punteggio finale: ${score} su ${questions.length}`;
  }
}
// Aggiungiamo un evento onclick a ciascuna opzione per gestire la risposta
option1Element.addEventListener("click", handleAnswer);
option2Element.addEventListener("click", handleAnswer);
option3Element.addEventListener("click", handleAnswer);
option4Element.addEventListener("click", handleAnswer);

