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
