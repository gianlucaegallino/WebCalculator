let firstNumber = null;
let operatorCharacter = null;
let secondNumber = null;
let justOperated = true;

addButtonListeners();

function operate(first, operator, second) {
  //check if both numbers are numbers
  if (
    typeof first !== "number" ||
    typeof second !== "number" ||
    typeof operator !== "string"
  ) {
    return "Error in input";
  }
  switch (operator) {
    case "+":
      if (add(first, second).toString().length >= 7)
        return add(first, second).toExponential();
      else return add(first, second);
    case "-":
      if (subtract(first, second).toString().length >= 7)
        return subtract(first, second).toExponential();
      else return subtract(first, second);
    case "*":
      if (multiply(first, second).toString().length >= 7)
        return multiply(first, second).toExponential();
    case "/":
      if (second === 0) {
        firstNumber = null;
        operatorCharacter = null;
        secondNumber = null;
        justOperated = false;
        return "haha no";
      }
      if (divide(first, second).toString().length >= 7)
        return divide(first, second).toExponential();
      else return divide(first, second);
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
      justOperated = false;
    } else {
      if (input === "=") {
        if (firstNumber === null) {
          firstNumber = null;
          operatorCharacter = null;
          secondNumber = null;
        } else {
          display.innerText = operate(
            Number(firstNumber),
            operatorCharacter,
            Number(display.innerText)
          );
          justOperated = true;
          firstNumber = null;
          operatorCharacter = null;
          secondNumber = null;
        }
      } else {
        if (firstNumber === null) {
          firstNumber = Number(display.innerText);
          operatorCharacter = input;
          display.innerText = 0;
        } else {
          display.innerText = firstNumber = operate(
            Number(firstNumber),
            operatorCharacter,
            Number(display.innerText)
          );
          justOperated = true;
          operatorCharacter = input;
          secondNumber = null;
        }
      }
    }
  } else {
    if (
      display.innerText == 0 ||
      display.innerText == "haha no" ||
      justOperated == true
    ) {
      display.innerText = input;
      justOperated = false;
    } else if (display.innerText.toString().length < 15) {
      display.innerText += input;
    }
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
