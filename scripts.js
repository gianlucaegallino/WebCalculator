function add(a, b) {
  //check if they are both numbers
  if (typeof a !== "number" || typeof b !== "number") {
    return "Error in input";
  }
  //returns number rounded to 2 decimal places
  return Math.round((a + b) * 100) / 100;
}

function subtract(a, b) {
  //check if they are both numbers
  if (typeof a !== "number" || typeof b !== "number") {
    return "Error in input";
  }
  //returns number rounded to 2 decimal places
  return Math.round((a - b) * 100) / 100;
}

function multiply(a, b) {
  //check if they are both numbers
  if (typeof a !== "number" || typeof b !== "number") {
    return "Error in input";
  }
  //returns number rounded to 2 decimal places
  return Math.round(a * b * 100) / 100;
}

function divide(a, b) {
  //check if they are both numbers
  if (typeof a !== "number" || typeof b !== "number") {
    return "Error in input";
  }
  //returns number rounded to 2 decimal places
  return Math.round((a / b) * 100) / 100;
}
