function handleButtonClick(func) {
  const firstNumber = parseFloat(document.getElementById("firstNumber").value);
  const secondNumber = parseFloat(
    document.getElementById("secondNumber").value,
  );
  return func(firstNumber, secondNumber);
}

function add(x, y) {
  answer = Math.round((x + y) * 100) / 100;
  document.getElementById("answer").textContent = answer;
  return answer;
}

function multiply(x, y) {
  answer = Math.round(x * y * 100) / 100;
  document.getElementById("answer").textContent = answer;
  return answer;
}

function square(x, y) {
  answer = Math.round(multiply(x, x) * 100) / 100;
  document.getElementById("answer").textContent = answer;
  return answer;
}

function add_squares(x, y) {
  answer = Math.round(add(multiply(x, x), multiply(y, y)) * 100) / 100;
  document.getElementById("answer").textContent = answer;
  return answer;
}
