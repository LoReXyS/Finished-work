const button = document.getElementById('interactive-button');
const menu = document.getElementById('menu');

button.addEventListener('mouseenter', () => {
    menu.classList.toggle('hide');
});

button.addEventListener('mouseleave', () => {
    menu.classList.add('hide'); 
});






function checkLeapYear() {
    const year = document.getElementById('birthYear').value;
    const result = document.getElementById('result');
    
    const isLeapYear = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    
    if (isLeapYear) {
        result.innerHTML = 'Ви народилися у високосний рік!';
        result.style.color = 'green';
    } else {
        result.innerHTML = 'Ви народилися у звичайному році!';
        result.style.color = 'red';
    }
}



function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1; 
}

let randomNumber = generateRandomNumber();

function checkGuess() {
    let userGuess = parseInt(document.getElementById('guessInput').value);
    let message = document.getElementById('message');

    if (userGuess === randomNumber) {
        message.innerHTML = `<span class="success">Вітаю, ви вгадали число! (${randomNumber})</span>`;
        message.style.color = "green";
    } else {
        message.innerHTML = `<span class="error">Невірно! Спробуйте ще раз. Число було ${randomNumber}.</span>`;
        message.style.color = "red";
    }

    randomNumber = generateRandomNumber(); 
}
