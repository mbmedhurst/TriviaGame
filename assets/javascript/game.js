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
        wrongText: 'Wrong!<br /> The answer is Zot Zot',
        timesUpText: `Time's Up!<br /> The answer is Zot Zot`,
        image: '<img src="./assets/images/anteater.jpg">',

    }
]

// variables for the summary page
let correctAnswers = 0
let incorrectAnswers = 0
let notAnswered = 0

// identifies index position of last question in the question set array
let lastQuestion = questionSet.length - 1

// sets current question to index 0
let currentQuestion = 0

// function to display question & answer choices
let renderQuestion = () => {
    document.querySelector('#question').innerHTML = `${questionSet[currentQuestion].question}`
    document.querySelector('#A').innerHTML = `${questionSet[currentQuestion].answerA}`
    document.querySelector('#B').innerHTML = `${questionSet[currentQuestion].answerB}`
    document.querySelector('#C').innerHTML = `${questionSet[currentQuestion].answerC}`
    document.querySelector('#D').innerHTML = `${questionSet[currentQuestion].answerD}`
}

// function to clear question and answer choices
const clearPage = _ => {
    document.querySelector('#question').innerHTML = ``
    document.querySelector('#A').innerHTML = ``
    document.querySelector('#B').innerHTML = ``
    document.querySelector('#C').innerHTML = ``
    document.querySelector('#D').innerHTML = ``
    document.querySelector('#imageHolder').innerHTML = ``
    document.querySelector('#summary').innerHTML = ``
    document.querySelector('#startOverBtn').innerHTML = ``
}

// thanks again to katie for helping to get the countdown timer to work properly

//Decrements counter
let decrement = () => {
    document.querySelector("#timer").innerHTML = `Time Remaining: ${timeLeft} seconds`
    timeLeft--
    if (timeLeft === -1) {
        displayTimesUp()
        stopTimer()
    }
}

//StarTimer function
let startTimer = () => {
    timeLeft = 20
    increment = setInterval(decrement, 1000)
}

//Stops timer
stopTimer = () => {
    clearInterval(increment)
}

// function to clear the timer when the summary is displayed
const clearTimer = _ => {
    document.querySelector('#timer').innerHTML = ``
}

// this is the text that is displayed when the clock runs out before an answer was selected
// this page is displayed for 5 seconds before moving on to the next question
let displayTimesUp = _ => {
    clearPage()
    document.querySelector('#question').innerHTML = `${questionSet[currentQuestion].timesUpText}`
    document.querySelector('#imageHolder').innerHTML = `${questionSet[currentQuestion].image}`
    notAnswered++
    setTimeout(nextQuestion, 5000)
}

let startOver = _ => {
    clearPage()
    currentQuestion = 0
    correctAnswers = 0
    incorrectAnswers = 0
    notAnswered = 0
    renderQuestion()
    startTimer()
}

// this is the function to display the next question
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
        Not Answered: ${notAnswered}`
        document.querySelector('#startOverBtn').innerHTML = `<button>Start Over</button>`
        document.querySelector('#startOverBtn').addEventListener('click', startOver)
    }
}

// this is the text that is displayed if the wrong answer is selected
// this page is displayed for 5 seconds before moving on to the next question
let displayWrong = _ => {
    clearPage()
    document.querySelector('#question').innerHTML = `${questionSet[currentQuestion].wrongText}`
    document.querySelector('#imageHolder').innerHTML = `${questionSet[currentQuestion].image}`
    incorrectAnswers++
    setTimeout(nextQuestion, 5000)
}

// this is the text that is displayed when the correct answer is selected
// this page is displayed for 5 seconds before moving on to the next question
let displayCorrect = _ => {
    clearPage()
    document.querySelector('#question').innerHTML = `${questionSet[currentQuestion].correctText}`
    document.querySelector('#imageHolder').innerHTML = `${questionSet[currentQuestion].image}`
    correctAnswers++
    setTimeout(nextQuestion, 5000)
}

// this is the function to check if the correct answer has been selected
let checkAnswer = (answer) => {
    stopTimer()
    console.log(answer)
    if (questionSet[currentQuestion].correct === answer) {
        displayCorrect()
    } else {
        displayWrong()
    }
}

//Function to reset timer
let resetTimer = () => {
    let timeLeft = 20
    document.querySelector("#timer").innerHTML = `Time Remaining: ${timeLeft} seconds`
};

// this is the function to start the quiz after the 'start' button is clicked
let startQuiz = _ => {
    document.querySelector('#startBtn').innerHTML = ``
    renderQuestion()
    startTimer()
}

// this is the initial display - just a start button
let init = _ => {
    document.querySelector('#startBtn').innerHTML = `<button>Start</button`
    document.querySelector('#startBtn').addEventListener('click', startQuiz)
}

init()