/*
Payton Lutterman
Quiz App
Last Updated 11-16-23
*/

const start_button = document.getElementById('start-btn');
const next_button = document.getElementById('next-btn');
const question_container = document.getElementById('question-container');
const question_element = document.getElementById('question')
const answer_buttons_element = document.getElementById('answer-buttons')
let shuffled_questions, current_question_index

start_button.addEventListener('click', start_game);
next_button.addEventListener('click', () => {
    current_question_index++;
    set_next_question()
})

function start_game() {
    start_button.classList.add('hide');
    shuffled_questions = questions.sort(() => Math.random() -.5)
    current_question_index = 0
    question_container.classList.remove('hide');
    set_next_question()
}

function set_next_question() {
    reset_state()
    show_question(shuffled_questions[current_question_index])
}

function show_question(question) {
    question_element.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', select_answer)
        answer_buttons_element.appendChild(button)
    })
}

function reset_state() {
    clear_status_class(document.body)
    next_button.classList.add('hide')
    while (answer_buttons_element.firstChild) {
        answer_buttons_element.removeChild(answer_buttons_element.firstChild)
    }
}

function select_answer(e) {
    const select_button = e.target
    const correct = select_button.dataset.correct
    set_status_class(document.body, correct)
    Array.from(answer_buttons_element.children).forEach(button => {
        set_status_class(button, button.dataset.correct)
    })
    if (shuffled_questions.length > current_question_index +1) {
        next_button.classList.remove('hide')
    } else {
        start_button.innerText = 'Restart'
        start_button.classList.remove('hide')
    }
}

function set_status_class(element, correct){
    clear_status_class(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }

}

function clear_status_class(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [ 
    {
    question: 'What is 2+2?',
    answers: [
        { text: '4', correct: true},
        { text: '22', correct: false},
        { text: '6', correct: false},
        { text: '8', correct: false},
        ],
    },
    {
    question: 'What is 8x8',
    answers: [
        { text: '64', correct: true},
        { text: '22', correct: false},
        { text: '88', correct: false},
        { text: '16', correct: false}
    ]
    },
    {
        question: 'What is 9x9',
        answers: [
            { text: '81', correct: true},
            { text: '22', correct: false},
            { text: '88', correct: false},
            { text: '99', correct: false}
    ]
    },
    {
        question: 'What is 10x10',
        answers: [
            { text: '100', correct: true},
            { text: '22', correct: false},
            { text: '88', correct: false},
            { text: '99', correct: false}
    ]
    },
]