// variables used to represent and access elements in our document//
const resetBtn = document.getElementById("reset");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const submitBtn = document.getElementById("submit");
const trueBtn = document.getElementById("True");
const falseBtn = document.getElementById("False");
const userScore = document.getElementById("user-score"); 
const questionText = document.getElementById("question-text");
// variables used to create interactivity to current questions,score counter and array of questions//
let currentQuestion = 0;
var score = 0;

let questions = [  
    {
        question:"Which disease is not caused by the improper disposal of sewage waste?",
        answer: [
            { option:"Cholera",answer:false},
            { option:"Heart attack",answer:true},
        ]
    },
    {
        question:"Which disease is not caused by the improper disposal of sewage waste?",
        answer: [
            { option:"Cholera",answer:false},
            { option:"Heart attack",answer:true},
        ]
    },
    {
        question:"Which disease is not caused by the improper disposal of sewage waste?",
        answer: [
            { option:"Cholera",answer:false},
            { option:"Heart attack",answer:true},
        ]
    },
    {
        question:"Which disease is not caused by the improper disposal of sewage waste?",
        answer: [
            { option:"Cholera",answer:false},
            { option:"Heart attack",answer:true},
        ]
    },
    {
        question:"Which disease is not caused by the improper disposal of sewage waste?",
        answer: [
            { option:"Cholera",answer:false},
            { option:"Heart attack",answer:true},
        ]
    },
    {
        question:"Which disease is not caused by the improper disposal of sewage waste?",
        answer: [
            { option:"Cholera",answer:false},
            { option:"Heart attack",answer:true},
        ]
    },
    {
        question:"Which disease is not caused by the improper disposal of sewage waste?",
        answer: [
            { option:"Cholera",answer:false},
            { option:"Heart attack",answer:true},
        ]
    },
    {
        question:"Which disease is not caused by the improper disposal of sewage waste?",
        answer: [
            { option:"Cholera",answer:false},
            { option:"Heart attack",answer:true},
        ]
    },
    {
        question:"Which disease is not caused by the improper disposal of sewage waste?",
        answer: [
            { option:"Cholera",answer:false},
            { option:"Heart attack",answer:true},
        ]
    },
    {
        question:"Which disease is not caused by the improper disposal of sewage waste?",
        answer: [
            { option:"Cholera",answer:false},
            { option:"Heart attack",answer:true},
        ]
    },
    {
        question:"Which disease is not caused by the improper disposal of sewage waste?",
        answer: [
            { option:"Cholera",answer:false},
            { option:"Heart attack",answer:true},
        ]
    },
    {
        question:"Which disease is not caused by the improper disposal of sewage waste?",
        answer: [
            { option:"Cholera",answer:false},
            { option:"Heart attack",answer:true},
        ]
    },
    {
        question:"Which disease is not caused by the improper disposal of sewage waste?",
        answer: [
            { option:"Cholera",answer:false},
            { option:"Heart attack",answer:true},
        ]
    },
    {
        question:"Which disease is not caused by the improper disposal of sewage waste?",
        answer: [
            { option:"Cholera",answer:false},
            { option:"Heart attack",answer:true},
        ]
    },
    {
        question:"Which disease is not caused by the improper disposal of sewage waste?",
        answer: [
            { option:"Cholera",answer:false},
            { option:"Heart attack",answer:true},
        ]
    },
    {
        question:"Which disease is not caused by the improper disposal of sewage waste?",
        answer: [
            { option:"Cholera",answer:false},
            { option:"Heart attack",answer:true},
        ]
    },
    {
        question:"Which disease is not caused by the improper disposal of sewage waste?",
        answer: [
            { option:"Cholera",answer:false},
            { option:"Heart attack",answer:true},
        ]
    },
    {
        question:"Which disease is not caused by the improper disposal of sewage waste?",
        answer: [
            { option:"Cholera",answer:false},
            { option:"Heart attack",answer:true},
        ]
    },
    {
        question:"Which disease is not caused by the improper disposal of sewage waste?",
        answer: [
            { option:"Cholera",answer:false},
            { option:"Heart attack",answer:true},
        ]
    },
    {
        question:"Which disease is not caused by the improper disposal of sewage waste?",
        answer: [
            { option:"Cholera",answer:false},
            { option:"Heart attack",answer:true},
        ]
    },
    {
        question:"Which disease is not caused by the improper disposal of sewage waste?",
        answer: [
            { option:"Cholera",answer:false},
            { option:"Heart attack",answer:true},
        ]
    },
    {
        question:"Which disease is not caused by the improper disposal of sewage waste?",
        answer: [
            { option:"Cholera",answer:false},
            { option:"Heart attack",answer:true},
        ]
    },
    {
        question:"Which disease is not caused by the improper disposal of sewage waste?",
        answer: [
            { option:"Cholera",answer:false},
            { option:"Heart attack",answer:true},
        ]
    },
    {
        question:"Which disease is not caused by the improper disposal of sewage waste?",
        answer: [
            { option:"Cholera",answer:false},
            { option:"Heart attack",answer:true},
        ]
    },
    {
        question:"Which disease is not caused by the improper disposal of sewage waste?",
        answer: [
            { option:"Cholera",answer:false},
            { option:"Heart attack",answer:true},
        ]
    },
]
// code that calls respective functions when a button is clicked,(on click events)//
resetBtn.addEventListener('click',reset);
prevBtn.addEventListener('click',prev);
nextBtn.addEventListener('click',next);
submitBtn.addEventListener('click',submit);
// function that executes when the page loads and script gets executed and jump to the next question once the option is selected//
function beginQuiz(){
    currentQuestion = 0;
    questionText.innerHTML =questions[currentQuestion].question;
    trueBtn.innerHTML =questions[currentQuestion].answer[0].option;
    trueBtn.onclick = () => {
        let ano = 0;
        if(questions[currentQuestion].answers[ano].answer){
            if(score<25){
                score++;
            }

        }
        userScore.innerHTML = score;
        if(currentQuestion<24){
            next();
        }
    }
    falseBtn.innerHTML = questions[currentQuestion].answer[1].option;
    falseBtn.onclick = () => {
        let ano =1;
        if(questions[currentQuestion].answers[ano].answer){
            if(score<25){
                score++;
            }
    }
}
  userScore.innerHTML = score;
  if(currentQuestion<24){
    next();
  }
}
prevBtn.classList.add('hide');
beginQuiz();
//function that will jump to the previous question and decrement the current question and remove the hidden class//
function prev(){
    currentQuestion--;
    if(currentQuestion<=0){
        prevBtn.classList.add('hide');
        nextBtn.classList.remove('hide');
    }
    questionText.innerHTML =questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick =() =>{
        let ano=0;
        if(questions[currentQuestion].answer[ano].answer){
            if(score<25){
                score++;
            }
        }
        userScore.innerHTML= score;
        if(currentQuestion<24){
            next();
        }
    }
    falseBtn.innerHTML =questions[currentQuestion].answers[1].option;
falseBtn.onclick = () => {
    let ano=1;
}
}
