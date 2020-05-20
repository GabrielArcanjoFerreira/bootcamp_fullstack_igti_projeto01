window.addEventListener('load', start);

var red = null;
var green = null;
var blue = null;

var tRed = null;
var tGreen = null;
var tBlue = null;

var paleta = null;

function start() {
  paleta = document.querySelector('#paleta');

  red = document.querySelector('#red');
  tRed = document.querySelector('#tRed');
  red.value = 0;
  tRed.value = 0;

  green = document.querySelector('#green');
  tGreen = document.querySelector('#tGreen');
  green.value = 0;
  tGreen.value = 0;

  blue = document.querySelector('#blue');
  tBlue = document.querySelector('#tBlue');
  blue.value = 0;
  tBlue.value = 0;

  document.addEventListener('input', change);
  render();
}

function change(event) {
  if (event.target.id === 'red') {
    tRed.value = event.target.value;
  } else if (event.target.id === 'green') {
    tGreen.value = event.target.value;
  } else if (event.target.id === 'blue') {
    tBlue.value = event.target.value;
  }
  render();
}

function render() {
  paleta.style.background =
    'rgb(' + red.value + ', ' + green.value + ', ' + blue.value + ')';
}
