const questions = [
  {
    topic: "Science",
    question: "What color is the sky?",
    possibleAnswers: ["blue", "green", "yellow"],
    correctAnswer: "blue",
  },
  {
    topic: "tech",
    question: "What is  your favourite language to learn?",
    possibleAnswers: ["javascript", "python", "ruby"],
    correctAnswer: "javascript",
  },
];

const quizProgress = document.getElementById("quizProgress");
const questionContainer = document.getElementById("questionContainer");
const answerContainer = document.getElementById("answerContainer");
let currentQuestionIndex = 0; // when the page loads, the question will be the first question.

function handleQuestion(index) {
  // handle quiz process section
  quizProgress.innerHTML = "";
  questions.forEach((question) => {
    quizProgress.innerHTML += "<span></span>";
  });
  let spans = document.querySelectorAll("span");
  for (let i = 0; i <= index; i++) {
    spans[i].classList.add("seen");
  }

  // topic/question
  questionContainer.innerHTML = `<p>${questions[index].topic}</p>
    <p>${questions[index].question}</p>`;

  // answers
  answerContainer.innerHTML = "";
  questions[index].possibleAnswers.forEach((answer) => {
    answerContainer.innerHTML += `(<button>${answer}</button>`;
  });

  let answers = document.querySelectorAll("button");
  answers.forEach((answer) => {
    answer.addEventListener("click", (e) => {
      if (e.target.textContent == questions[index].correctAnswer) {
        console.log("CORRECT!");
      } else {
        console.log("WRONG");
      }
      if (currentQuestionIndex == questions.length - 1) {
        currentQuestionIndex = 0;
      } else {
        currentQuestionIndex++;
      }
      handleQuestion(currentQuestionIndex);
    });
  });
}

handleQuestion(currentQuestionIndex);
