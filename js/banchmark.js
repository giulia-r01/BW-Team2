/*ANNA:Js Timer*/
const ctx = document.getElementById("timer").getContext("2d");

// Tempo iniziale del timer
let timeRemaining = 60;

// Dati grafico
let data = {
  datasets: [
    {
      label: "Conto alla rovescia",
      data: [timeRemaining, 60 - timeRemaining], // Parte rimanente e parte già trascorsa
      backgroundColor: ["rgba(0,0,255,0.0)", "#00FFFF"], // Colore del timer
      borderColor: ["#rgba(0,0,255,0.0)", "#00FFFF"], // Colore dei bordi
      borderWidth: 0,
    },
  ],
};

// Opzioni per il grafico a ciambella
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    tooltip: {
      enabled: true,
    },
  },
  // Apertura centrale grafico a ciambella
  cutout: "80%", //  Dimensione della striscia
  rotation: 0, // Rotazione del grafico
  circumference: 360, // Circonferenza del grafico
};

// Crea il grafico a ciambella
const doughnutChart = new Chart(ctx, {
  type: "doughnut",
  data: data,
  options: options,
});

// Funzione per aggiornare il timer e il grafico
function updateTimer() {
  // Decrementa il tempo rimanente
  if (timeRemaining > 0) {
    timeRemaining--;
  } else {
    clearInterval(timerInterval); // Ferma il timer quando arriva a zero
    alert("Tempo scaduto! Passa alla prossima domanda");
  }

  // Testo del timer
  document.getElementById(
    "contatore-numero"
  ).textContent = ` ${timeRemaining} `;

  // Aggiorna i dati del grafico
  data.datasets[0].data = [timeRemaining, 60 - timeRemaining];

  // Aggiorno solo la sezione del timer
  doughnutChart.update();
}

// Timer che aggiorna il grafico e il timer ogni secondo (1000 MS)
const timerInterval = setInterval(updateTimer, 1000);
/*Fine js timer*/

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

window.onload = function () {};

const setNewQuestion = function (questionInput) {
  let question = document.getElementById("question");
  question.innerText = questionInput.question;

  // inizializzazione
  let num = [];
  for (let i = 1; i <= 4; i++) {
    num.push(i);
  }

  let x = Math.floor(Math.random() * num.length);

  let correctAnswer = document.getElementById("answer-" + num[x]);
  correctAnswer.innerText = questionInput.correct_answer;
  num.splice(x, 1);

  for (let i = 0; i < questionInput.incorrect_answers.length; i++) {
    x = Math.floor(Math.random() * num.length);
    let incorrect_answers = document.getElementById("answer-" + num[x]);
    incorrect_answers.innerText = questionInput.incorrect_answers[i];
    num.splice(x, 1);
  }
};
setNewQuestion(questions[0]);
