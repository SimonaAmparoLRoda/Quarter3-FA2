function add (num1, num2) {
    return num1 + num2;
}

function sub (num1, num2) {
    return num1 - num2;
}

function mult (num1, num2) {
    return num1 * num2;
}

function div (num1, num2) {
    if (num2 === 0)
        return "You can't divide by zero, silly.";
    else
        return num1/num2;
}

function mod (num1, num2) {
    if (num2 === 0)
        return "Modulus cannot be used by zero.";
    else
        return num1%num2;
}

function calculate(operation) {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const resultElement = document.getElementById('result');

    if (isNaN(num1) || isNaN(num2)) {
        resultElement.innerHTML = "Please enter valid numbers in both fields.";
        return;
    }

    let result, message

    switch (operation) {
    case '+':
      result = add(num1, num2);
      message = `The sum of ${num1} and ${num2} is ${result}.`;
      break;
    case '-':
      result = sub(num1, num2);
      message = `The difference of ${num1} and ${num2} is ${result}.`;
      break;
    case '*':
      result = mult(num1, num2);
      message = `The product of ${num1} and ${num2} is ${result}.`;
      break;
    case '/':
      result = div(num1, num2);
      message = typeof result === "string" ? result : `The quotient of ${num1} and ${num2} is ${result}.`;
      break;
    case '%':
      result = mod(num1, num2);
      message = typeof result === "string" ? result : `The remainder of ${num1} divided by ${num2} is ${result}.`;
      break;
    default:
      message = "Invalid operation.";
    }

    resultElement.innerHTML = message;
}