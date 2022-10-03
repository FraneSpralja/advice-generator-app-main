const url = "https://api.adviceslip.com/advice"
const App = document.querySelector('#App');

eventListener()

function eventListener(){
    document.addEventListener('DOMContentLoaded', () => {
        HTMLModalAdvice()
    })
}

function HTMLModalAdvice() {
    
    getAdvice()

    const divAdvice = document.createElement('div');
    divAdvice.classList.add('main-advice');

    const headAdvice = document.createElement('div');
    headAdvice.classList.add('head-advice')

    const titleIdAdvice = document.createElement('span');
    titleIdAdvice.classList.add('title-id-advice');
    titleIdAdvice.textContent = `ADVICE #0`;
    titleIdAdvice.dataset.id = `${1}`;

    const bodyAdvice = document.createElement('div');
    bodyAdvice.classList.add('body-advice');
    
    const  paragraphAdvice = document.createElement('q');
    paragraphAdvice.classList.add('paragraph-advice');
    paragraphAdvice.textContent = ""

    const imagePattern = document.createElement('div');
    imagePattern.classList.add('background-image');
    
    const footerAdvice = document.createElement('div');
    footerAdvice.classList.add('footer-advice');

    const buttonRandomeAdvice = document.createElement('button');
    buttonRandomeAdvice.classList.add('btn-random-advice');

    buttonRandomeAdvice.onclick = function() {
        getAdvice()
    }

    // APPEND ELEMENT

    headAdvice.appendChild(titleIdAdvice);

    bodyAdvice.appendChild(paragraphAdvice);
    bodyAdvice.appendChild(imagePattern);

    footerAdvice.appendChild(buttonRandomeAdvice)

    divAdvice.appendChild(headAdvice);
    divAdvice.appendChild(bodyAdvice);
    divAdvice.appendChild(footerAdvice);

    App.appendChild(divAdvice)
}

async function getAdvice() {
    const response = await fetch(`${url}`);
    const advice = await response.json();

    printAdvice(advice)
}

function printAdvice(adviceObj) {
    const titleAdvice = document.querySelector('.title-id-advice');
    const paragraph = document.querySelector('.paragraph-advice');
    const { slip:{id, advice} } = adviceObj;

    titleAdvice.textContent = `ADVICE #${id}`;
    paragraph.textContent = `${advice}`;
}