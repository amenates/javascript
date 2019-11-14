function f1() {
  let p = document.getElementById('out_f1');
  let i;

// цикл FOR с заданным количеством повторений
  for (i = 0; i < 100; i++) {
    // i++ this is i = i + 1
    // начальный старт цикла; условие при котором цикл выполняется; шаг цикла
    p.innerHTML += i + ' ';
  }
}

// цикл WHILE (пока) с пред условием
function f2() {
  let p = document.getElementById('out_f2');

  let j = 0;
  while (j < 50) {
    // j++; начнется с 1
    p.innerHTML += j + ' ';
    j++; // начнется с 0
  }
}

// цикл DO WHILE (делать (выполнять) пока) с пост условием
function f3() {
  let p = document.getElementById('out_f3');

  let x = 100;
  do {
    p.innerHTML += x + ' ';
    x--;
  }
  while (x > 0);
}