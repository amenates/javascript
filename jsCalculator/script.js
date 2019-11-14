function plus() {
  let int1 = parseInt(document.getElementById('int1').value);
  let int2 = parseInt(document.getElementById('int2').value);
  let pOut = document.getElementById('out');
  // console.log(int1, int2);
  pOut.innerHTML = int1 + int2;
}

function minus() {
  let int1 = document.getElementById('int1').value;
  int1 = parseInt(int1);
  let int2 = document.getElementById('int2').value;
  int2 = parseInt(int2);
  let pOut = document.getElementById('out');

  pOut.innerHTML = int1 - int2;
}

function multi() {
  let int1 = document.getElementById('int1').value;
  int1 = parseInt(int1);
  let int2 = document.getElementById('int2').value;
  int2 = parseInt(int2);
  let pOut = document.getElementById('out');

  pOut.innerHTML = int1 * int2;
}

function division() {
  let int1 = document.getElementById('int1').value;
  int1 = parseInt(int1);
  let int2 = document.getElementById('int2').value;
  int2 = parseInt(int2);
  let pOut = document.getElementById('out');

  pOut.innerHTML = int1 / int2;
}

function test() {
  let num1 = document.getElementById('num1').value;
  num1 = parseInt(num1);
  let num2 = document.getElementById('num2').value;
  num2 = parseInt(num2);
  let pOut2 = document.getElementById('out2');

  pOut2.innerHTML = (num1 / 100) * num2; // вычисляет процент
}