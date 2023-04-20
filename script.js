let result = document.getElementById('result');

function inputNumber(num) {
  result.value += num;
}

function inputOperator(operator) {
  result.value += operator;
}

function calculateResult() {
  result.value = eval(result.value);
}

function clearResult() {
  result.value = '';
}

function backspace() {
  result.value = result.value.slice(0, -1);
}
