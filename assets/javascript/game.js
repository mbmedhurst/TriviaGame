let timeLeft = 30
let elem = document.getElementById('timer')

// countdown timer
let countDown = _ => {
    let timer = setTimeout(countDown, 1000)
    if (timeLeft === -1) {
        clearTimeout(timer)
    } else {
        elem.innerHTML = `Time Remaining: ${timeLeft} seconds`
        timeLeft--
    }
}

// question set array
let questionSet = [

    {
        question: `How many donuts in a Baker's Dozen?`,
        answerA: 'Eleven',
        answerB: 'Thirteen',
        answerC: 'Twelve',
        answerD: `There is no such thing as a Baker's Dozen`,
        correct: 'B',
        display: `In the 1260s, British breadmakers were notorious for shorting customers with skimpy loaves. King Henry III was so irked by the problem that he implemented a new law to standardize the weight of a loaf—selling puny loaves could result in beatings or jail time. Since bakers wanted to stay on the right side of the law, one common trick was to give 13 loaves to any customer buying a dozen. Even if the loaves were light, the extra would cover the shortfall.`
    },

    {
        question: 'What kind of animal was Lassie?',
        answerA: 'Dog',
        answerB: 'Dolphin',
        answerC: 'Cat',
        answerD: 'Bear',
        correct: 'A',
        displayImage: '<img src="./assets/images/lassie.jpg">',
        displayText: 'Yes! Lassie was a dog.',
    },

    {
        question: 'In which city would you find the Tower of London?',
        answerA: 'Paris',
        answerB: 'Los Angeles',
        answerC: 'Frankfurt',
        answerD: 'London',
        correct: 'D',
        display: '<img src="./assets/images/tower-of-london.jpg">'
    },

    {
        question: 'What sound does an Anteater make?',
        answerA: 'Zoom Zoom',
        answerB: 'Yum Yum',
        answerC: 'Zot Zot',
        answerD: 'Meow',
        correct: 'C',
        displayText: 'Correct!',
        displayImage: '<img src="./assets/images/anteater.jpg">',
    }
]

// identifies index position of last question in array
let lasQuestion = questionSet.length - 1

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
    document.querySelector('#timer').innerHTML = ``
    document.querySelector('#question').innerHTML = ``
    document.querySelector('#A').innerHTML = ``
    document.querySelector('#B').innerHTML = ``
    document.querySelector('#C').innerHTML = ``
    document.querySelector('#D').innerHTML = ``
}

let startGame = _ => {
    document.querySelector('#startBtn').innerHTML = ``
    countDown()
    currentQuestion = 1
    renderQuestion()

}

let checkAnswer = (answer) => {
    if (questionSet[currentQuestion].correct === answer) {
        clearPage() // the timer is not clearing
        clearTimeout(timer) // the timer is restarting when the results page is displayed
        document.querySelector('#question').innerHTML = `${questionSet[currentQuestion].displayText}`
        document.querySelector('.answerList').innerHTML = `${questionSet[currentQuestion].displayImage}`
    } else {
        alert('WRONG!!!')
        console.log(answer)
    }
}

let init = _ => {
    document.querySelector('#startBtn').innerHTML = `<button>Start</button`
    document.querySelector('#startBtn').addEventListener('click', startGame)
}

init()