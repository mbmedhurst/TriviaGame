let questionsArr = []
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
let questionSet = {

    'Question1': {
        question: `How many donuts in a Baker's Dozen?`,
        answer1: 'Eleven',
        rightAnswer: 'Thirteen',
        answer2: 'Twelve',
        answer3: `There is no such thing as a Baker's Dozen`,
        display: `In the 1260s, British breadmakers were notorious for shorting customers with skimpy loaves. King Henry III was so irked by the problem that he implemented a new law to standardize the weight of a loaf—selling puny loaves could result in beatings or jail time. Since bakers wanted to stay on the right side of the law, one common trick was to give 13 loaves to any customer buying a dozen. Even if the loaves were light, the extra would cover the shortfall.`
    },

    'Question2': {
        question: 'What kind of animal was Lassie?',
        rightAnswer: 'Dog',
        answer1: 'Dolphin',
        answer2: 'Cat',
        answer3: 'Bear',
        display: '<img src="../images/lassie.jpg">'
    },

    'Question3': {
        question: 'In which city would you find the Tower of London?',
        answer1: 'Paris',
        answer2: 'Los Angeles',
        answer3: 'Frankfurt',
        rightAnswer: 'London',
        display: '<img src="../images/tower-of-london.jpg">'
    },

    'Question4': {
        question: 'What sound does an Anteater make?',
        answer1: 'Zoom Zoom',
        answer2: 'Yum Yum',
        rightAnswer: 'Zot Zot',
        answer3: 'Meow',
        display: '<img src="../images/anteater.jpg">'
    }
}

let renderQ1 = _ => {
    document.querySelector('#startBtn').innerHTML = ``
    document.querySelector('#question').innerHTML = `${questionSet.Question1.question}`
    document.querySelector('#answerA').innerHTML = `${questionSet.Question1.answer1}`
    document.querySelector('#answerB').innerHTML = `${questionSet.Question1.rightAnswer}`
    document.querySelector('#answerC').innerHTML = `${questionSet.Question1.answer2}`
    document.querySelector('#answerD').innerHTML = `${questionSet.Question1.answer3}`
}

let startGame = _ => {
    countDown()
    renderQ1()
    
}

let init = _ => {
    document.querySelector('#startBtn').innerHTML = `<button>Start</button`
    document.querySelector('#startBtn').addEventListener('click', startGame)
}

init()