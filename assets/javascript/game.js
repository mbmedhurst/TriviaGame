let questionsArr = []
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

let mouseOver = _ => {
    document.getElementById('start').style.color = 'red'
}

let start = _ => {
    // this is not working yet
    document.querySelector('#start').addEventListener('click', countDown)
}



let init = _ => {
    // countDown()
    document.querySelector('#startBtn').innerHTML = `<button>Start</button`
}

init()