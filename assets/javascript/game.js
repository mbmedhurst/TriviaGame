// borrowed heavily from this youtube video: https://www.youtube.com/watch?v=49pYIMygIcU
// especially for figuring out how to identify right answers

// question set array
let questionSet = [

    {
        question: `How many donuts in a Baker's Dozen?`,
        answerA: 'Eleven',
        answerB: 'Thirteen',
        answerC: 'Twelve',
        answerD: `There is no such thing as a Baker's Dozen`,
        correct: 'B',
        correctText: `Yes!<br /> A Baker's Dozen would be 13 donuts.`,
        wrongText: `Wrong!<br /> A Baker's Dozen would be 13 donuts.`,
        timesUpText: `Time's Up!<br /> A Baker's Dozen would be 13 donuts.`,
        image: `<img src="./assets/images/donuts.jpg">`,
    },

    {
        question: 'What kind of animal was Lassie?',
        answerA: 'Dog',
        answerB: 'Dolphin',
        answerC: 'Cat',
        answerD: 'Bear',
        correct: 'A',
        correctText: 'Yes!<br /> Lassie was a dog.',
        wrongText: 'Wrong!<br /> Lassie was a dog.',
        timesUpText: `Time's Up!<br /> Lassie was a dog.`,
        image: '<img src="./assets/images/lassie.png">',
    },

    {
        question: 'In which city would you find the Tower of London?',
        answerA: 'Paris',
        answerB: 'Los Angeles',
        answerC: 'Frankfurt',
        answerD: 'London',
        correct: 'D',
        correctText: 'Yes!<br /> The Tower of London is in London.',
        wrongText: 'Wrong!<br /> The Tower of London is in London (duh).',
        timesUpText: `Time's Up!<br /> The Tower of London is in London (duh).`,
        image: '<img src="./assets/images/tower-of-london.jpg">',
    },

    {
        question: 'What sound does an Anteater make?',
        answerA: 'Zoom Zoom',
        answerB: 'Yum Yum',
        answerC: 'Zot Zot',
        answerD: 'Meow',
        correct: 'C',
        correctText: 'Correct!',
        wrongText: 'Wrong!<br /> The answer is "Zot Zot" <br /> (As an Anteater yourself you really ought to know this.)',
        timesUpText: `Time's Up!<br /> The answer is "Zot Zot" <br /> (As an Anteater yourself you really ought to know this.)`,
        image: '<img src="./assets/images/anteater.jpg">',

    }
]

let correctAnswers = 0
let incorrectAnswers = 0
let notAnswered = 0

// identifies index position of last question in array
let lastQuestion = questionSet.length - 1

// sets current question to index 0
let currentQuestion = 0

let renderQuestion = () => {
    document.querySelector('#question').innerHTML = `${questionSet[currentQuestion].question}`
    document.querySelector('#A').innerHTML = `${questionSet[currentQuestion].answerA}`
    document.querySelector('#B').innerHTML = `${questionSet[currentQuestion].answerB}`
    document.querySelector('#C').innerHTML = `${questionSet[currentQuestion].answerC}`
    document.querySelector('#D').innerHTML = `${questionSet[currentQuestion].answerD}`
}

const clearPage = _ => {
    document.querySelector('#question').innerHTML = ``
    document.querySelector('#A').innerHTML = ``
    document.querySelector('#B').innerHTML = ``
    document.querySelector('#C').innerHTML = ``
    document.querySelector('#D').innerHTML = ``
    document.querySelector('#imageHolder').innerHTML = ``
}

const clearTimer = _ => {
    document.querySelector('#timer').innerHTML = ``
}

let displayTimesUp = _ => {
    clearPage()
    document.querySelector('#question').innerHTML = `${questionSet[currentQuestion].timesUpText}`
    document.querySelector('#imageHolder').innerHTML = `${questionSet[currentQuestion].image}`
    notAnswered++
    setTimeout(nextQuestion, 5000)
}

let nextQuestion = _ => {
    clearTimeout(nextQuestion)
    clearPage()
    if (currentQuestion !== lastQuestion) {
        currentQuestion++
        renderQuestion()
        startTimer()
    } else {
        clearPage()
        clearTimer()
        document.querySelector('#summary').innerHTML = `
        Summary:<br />
        Correct Answers: ${correctAnswers}<br />
        Incorrect Answers: ${incorrectAnswers}<br />
        Not Answered: ${notAnswered}
        `
    }
}

// function countDown() {
//     elem.innerHTML = `Time Remaining: ${timeLeft} seconds`
//     timeLeft--
//     document.querySelector('.answer').addEventListener('click', clearInterval(countdown))
// } if (timeLeft === -1) {
//     stopTimer()
//     displayTimesUp()
// }

let displayWrong = _ => {
    clearPage()
    document.querySelector('#question').innerHTML = `${questionSet[currentQuestion].wrongText}`
    document.querySelector('#imageHolder').innerHTML = `${questionSet[currentQuestion].image}`
    incorrectAnswers++
    // setTimeout(nextQuestion, 5000)
}

let displayCorrect = _ => {
    clearPage()
    document.querySelector('#question').innerHTML = `${questionSet[currentQuestion].correctText}`
    document.querySelector('#imageHolder').innerHTML = `${questionSet[currentQuestion].image}`
    correctAnswers++
    // setTimeout(nextQuestion, 5000)
}

let checkAnswer = (answer) => {
    if (questionSet[currentQuestion].correct === answer) {
        displayCorrect()
    } else {
        displayWrong()
    }
}

let startTimer = () => {
    let timeLeft = 10
    let elem = document.getElementById('timer')
    let countDown = setInterval(function () {
        document.querySelector('#timer').innerHTML = `Time Remaining: ${timeLeft} seconds`
        timeLeft--
        document.querySelector('.answerList').addEventListener('click', checkAnswer)
        if (timeLeft === -1) {
            clearInterval(countDown)
            displayTimesUp()
        }
    }, 1000)
}

let startQuiz = _ => {
    document.querySelector('#startBtn').innerHTML = ``
    renderQuestion()
    startTimer()
}

let init = _ => {
    document.querySelector('#startBtn').innerHTML = `<button>Start</button`
    document.querySelector('#startBtn').addEventListener('click', startQuiz)
}

init()