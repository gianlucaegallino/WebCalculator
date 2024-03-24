let firstNumber = null;
let operatorCharacter = null;
let secondNumber = null;
let currentDisplay;

addButtonListeners();

function operate(first, operator, second) {
  //check if both numbers are numbers
  if (
    typeof first !== "number" ||
    typeof second !== "number" ||
    typeof operator !== string
  ) {
    return "Error in input";
  }
  switch (operator) {
    case "+":
      return add(first, second);
      break;
    case "-":
      return subtract(first, second);
      break;
    case "*":
      return multiply(first, second);
      break;
    case "/":
      return divide(first, second);
      break;
    default:
      return "Sorry, thats not a supported operator.";
  }
}

function addButtonListeners() {
  // Object mapping button IDs to their corresponding values
  const buttonValueMap = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    equals: "=",
    plus: "+",
    minus: "-",
    division: "/",
    multiplication: "*",
    clear: "CD",
  };

  // Iterate over each button ID and add event listener
  Object.keys(buttonValueMap).forEach((buttonId) => {
    const button = document.getElementById(buttonId);
    const buttonValue = buttonValueMap[buttonId];

    button.addEventListener("click", function () {
      updateDisplay(buttonValue);
    });
  });

  // Special case for equals button
  const equalsButton = document.getElementById("equals");
  equalsButton.addEventListener("click", function () {
    operate(firstNumber, operatorCharacter, secondNumber);
  });
}

function updateDisplay(input) {
  let display = document.getElementById("visibleDisplay");
  if (typeof input !== "number") {
    if (input === "CD") {
      //resets screen and variables
      display.innerText = 0;
      firstNumber = null;
      operatorCharacter = null;
      secondNumber = null;
    }
    //Saves text to a variable
    //deletes text from display
    display.innerText;
  } else {
    if (display.innerText == 0) {
      display.innerText = input;
    } else display.innerText += input;
  }
}

function add(a, b) {
  //returns number rounded to 2 decimal places
  return Math.round((a + b) * 100) / 100;
}

function subtract(a, b) {
  //returns number rounded to 2 decimal places
  return Math.round((a - b) * 100) / 100;
}

function multiply(a, b) {
  //returns number rounded to 2 decimal places
  return Math.round(a * b * 100) / 100;
}

function divide(a, b) {
  //returns number rounded to 2 decimal places
  return Math.round((a / b) * 100) / 100;
}
