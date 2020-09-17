let selected = document.querySelector('.selected');
const randColors = document.querySelectorAll('.pick');
for (let i = 0; i < randColors.length; i += 1) {
  randColors[i].style.backgroundColor = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`;
}

const colors = document.querySelectorAll('.color');

function colorize(event) {
  selected.classList.remove('selected');
  event.target.classList.add('selected');
  selected = event.target;
}

for (let i = 0; i < colors.length; i += 1) {
  colors[i].addEventListener('click', colorize);
}
document.querySelector('#clear-board').addEventListener('click', function () {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
});

function chcolor(event) {
  event.target.style.backgroundColor = getComputedStyle(selected).backgroundColor;
}
function attribute() {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
    pixels[i].addEventListener('click', chcolor);
  }
}

function generateBoard(num) {
  const board = document.createElement('div');
  for (let i = 0; i < num; i += 1) {
    const line = document.createElement('div');
    for (let j = 0; j < num; j += 1) {
      const px = document.createElement('div');
      px.className = 'pixel';
      px.id = 'pixel';
      line.appendChild(px);
    }
    board.appendChild(line);
  }
  const pxb = document.querySelector('#pixel-board');
  pxb.innerHTML = '';
  pxb.appendChild(board);
  attribute();
}

document
  .querySelector('#generate-board')
  .addEventListener('click', function () {
    const board = document.querySelector('#board-size');
    if (parseInt(board.value, 10) > 50) {
      generateBoard(50);
    } else if (parseInt(board.value, 10) < 5) {
      generateBoard(5);
    } else if (board.value !== '') {
      generateBoard(board.value);
    } else {
      alert('Board inválido!');
    }
  });

generateBoard(5);
