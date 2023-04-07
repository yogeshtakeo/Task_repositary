function cal() {
  let opr1 = Number(document.getElementById('data').value)
  let opr2 = Number(document.getElementById('data1').value)
  let operator = document.getElementById('opt').value

  if (operator == '+') {
    result = opr1 + opr2
  }
  if (operator == '-') {
    result = opr1 - opr2
  }
  if (operator == '*') {
    result = opr1 * opr2
  }
  if (operator == '/') {
    result = opr1 / opr2
  }
  document.getElementById('res').value = result
}
