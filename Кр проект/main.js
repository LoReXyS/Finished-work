// header

// header-end

// main
const field = document.getElementById('field');
const ball = document.getElementById('ball');
const ballRadius = ball.offsetWidth / 2;
field.addEventListener('click', ({ clientX, clientY }) => {
    const { left, top, width, height } = field.getBoundingClientRect();
    const x = Math.min(Math.max(clientX - left - ballRadius, 0), width - ball.offsetWidth);
    const y = Math.min(Math.max(clientY - top - ballRadius, 0), height - ball.offsetHeight);
    Object.assign(ball.style, { left: `${x}px`, top: `${y}px` });
});
// main-end

// section
let butOne = document.querySelector('button[id="button_1"]');
let butTwo = document.querySelector('button[id="button_2"]');
let butThree = document.querySelector('button[id="button_3"]');
let numbers = [];
function fullNumberFinds(promptPov, index) {
    let num = prompt(promptPov, 0);
    if (!isNaN(num) && num.trim() !== "") {
        num = parseFloat(num);
        // alert(`Ви ввели число ${num}`);
        console.log(`Введене число ${num}`);
        numbers[index] = num;
        if (numbers.length === 3 && numbers.every(n => n !== undefined)) {
            let maxNumb = Math.max(...numbers);
            // alert(`Найбільше число: ${maxNumb}`)
            console.log(`Найбільше число ${maxNumb}`);
            let textP = document.querySelector('p[class="largest-number"]');
            textP.innerHTML = `Найбільше число, яке ви ввели - (${maxNumb})`;
            console.log(textP);
        }
    } else {
        alert('Ви ввели не число!');
        console.log('Число не зараховане!');
    }
}
butOne.addEventListener('click', () => fullNumberFinds('Введіть перше число', 0));
butTwo.addEventListener('click', () => fullNumberFinds('Введіть друге число', 1));
butThree.addEventListener('click', () => fullNumberFinds('Введіть третє число', 2));
console.log(butOne);
console.log(butTwo);
console.log(butThree);
// section-end

// slider(footer)
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    console.log("Changing slide by: " + n);
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    console.log("Setting current slide to: " + n);
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    let prev = document.querySelector('.prev');
    let next = document.querySelector('.next');
    
    console.log("Showing slide: " + n);

    if (n > slides.length) { slideIndex = slides.length; }
    if (n < 1) { slideIndex = 1; }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "flex"; 
    slides[slideIndex-1].style.justifyContent = "center"; 
    slides[slideIndex-1].style.flexDirection = "column"; 
    slides[slideIndex-1].style.alignItems = "center"; 
    slides[slideIndex-1].style.gap = "20px"; 
    dots[slideIndex-1].className += " active";

    if (slideIndex === 1) {
        prev.style.display = "block";
    } else {
        prev.style.display = "block";
    }

    if (slideIndex === slides.length) {
        next.style.display = "block";
    } else {
        next.style.display = "block";
    }
}
// slider(footer)-end