let questionsArray = []
let timeLeft = 30
let elem = document.getElementById('timer')

// countdown timer
let countDown = _ => {
    let timer = setTimeout(countDown, 1000)
    if (timeLeft === -1) {
        clearTimeout(timer)
        alert('times up')
    } else {
        elem.innerHTML = `Time Remaining: ${timeLeft} seconds`
        timeLeft--
    }
}

let questionSet = {

    'Question 1': {
        question: `How many donuts in a Baker's Dozen?`,
        answer1: 'Eleven',
        rightAnswer: 'Thirteen',
        answer2: 'Twelve',
        answer3: `There is no such thing as a Baker's Dozen.`,
    },

    'Question 2': {
        question: 'What kind of animal was Lassie?',
        rightAnswer: 'Dog',
        answer1: 'Dolphin',
        answer2: 'Cat',
        answer3: 'Bear',
    },

    'Question 3': {
        question: 'In which city would you find the Tower of London?',
        answer1: 'Paris',
        answer2: 'Los Angeles',
        answer3: 'Frankfurt',
        rightAnswer: 'London',
    },

    'Question 4': {
        question: 'What sound does an Anteater make?',
        answer1: 'Zoom Zoom',
        answer2: 'Yum Yum',
        rightAnswer: 'Zot Zot',
        answer3: 'Meow',
    }
}

let init = _ => {

}

init()