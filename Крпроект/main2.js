let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "scissors", "paper"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function play(userChoice) {
  const computerChoice = getComputerChoice();
  let result = "";

  if (userChoice === computerChoice) {
    result = "Нічия!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "rock")
  ) {
    result = "Ви виграли раунд!";
    userScore++;
  } else {
    result = "Комп'ютер виграв раунд!";
    computerScore++;
  }

  document.querySelector(".result").textContent = result;
  document.getElementById("user-score").textContent = userScore;
  document.getElementById("computer-score").textContent = computerScore;
}

function computerPlay() {
  const computerChoice = getComputerChoice();
  alert(`Комп'ютер вибрав: ${computerChoice}`);
}
// Калькулятор
function calculate(operation) {
  event.preventDefault();
  let a = parseFloat(document.getElementById("num1").value);
  let b = parseFloat(document.getElementById("num2").value);
  let result;

  if (operation === "plus") {
    result = a + b;
  } else if (operation === "minus") {
    result = a - b;
  } else if (operation === "times") {
    result = a * b;
  } else if (operation === "divide") {
    if (b === 0) {
      result = "Помилка: ділення на нуль";
    } else {
      result = a / b;
    }
  }

  document.getElementById("result").innerHTML = result;
}
// let operator = "";

// function setOperator(op) {
//   operator = op;
// }

// function calculate() {
//   event.preventDefault();
//   const num1 = parseFloat(document.getElementById("num1").value);
//   const num2 = parseFloat(document.getElementById("num2").value);
//   let result = 0;

//   if (isNaN(num1) || isNaN(num2)) {
//     result = "Помилка: введіть числа";
//   } else {
//     switch (operator) {
//       case "+":
//         result = num1 + num2;
//         break;
//       case "-":
//         result = num1 - num2;
//         break;
//       case "*":
//         result = num1 * num2;
//         break;
//       case "/":
//         result = num2 !== 0 ? num1 / num2 : "На нуль ділити не можна";
//         break;
//       default:
//         result = "Оберіть оператор";
//     }
//   }
// }
document.querySelector(".calculator .result span#result").textContent = result;
// Додавання слухачів подій
document.getElementById("plusButton").addEventListener("click", function () {
  calculate("plus");
});

document.getElementById("minusButton").addEventListener("click", function () {
  calculate("minus");
});

document.getElementById("timesButton").addEventListener("click", function () {
  calculate("times");
});

document.getElementById("divideButton").addEventListener("click", function () {
  calculate("divide");
});

// калькулятор часу

function calculateTime() {
  let seconds = parseInt(document.getElementById("inputNumber").value);
  if (isNaN(seconds) || seconds < 0) {
    document.getElementById("outputTime").textContent = "Некоректне значення";
    return;
  }
  let days = Math.floor(seconds / (24 * 3600));
  seconds %= 24 * 3600;
  let hours = Math.floor(seconds / 3600);
  seconds %= 3600;
  let minutes = Math.floor(seconds / 60);
  seconds %= 60;

  document.getElementById(
    "outputTime"
  ).textContent = `${days} дн. ${hours}:${minutes}:${seconds}`;
}
