let int1 = document.getElementById('int1').value;
int1 = parseInt(int1);
let int2 = document.getElementById('int2').value;
int2 = parseInt(int2);
let pOut = document.getElementById('out');

function plus() {
  pOut.innerHTML = int1 + int2;
}