const canvas = document.querySelector('#etch-a-sketch');
const shakeButton = document.querySelector('.shake');
const ctx = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;

let xStartPoint = Math.floor(Math.random() * width);
let yStartPoint = Math.floor(Math.random() * height);
console.log(xStartPoint, yStartPoint);

ctx.linJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 30;
let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.beginPath();
ctx.moveTo(xStartPoint, yStartPoint);
ctx.lineTo(xStartPoint, yStartPoint);
ctx.stroke();

function draw({key}) {
  hue = hue + 5;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  if (key === 'ArrowUp') {
    ctx.beginPath();
    ctx.moveTo(xStartPoint, yStartPoint);
    yStartPoint = yStartPoint - 10;
    ctx.lineTo(xStartPoint, yStartPoint);
    ctx.stroke();
  } else if (key === 'ArrowDown') {
    ctx.beginPath();
    ctx.moveTo(xStartPoint, yStartPoint);
    yStartPoint = yStartPoint + 10;
    ctx.lineTo(xStartPoint, yStartPoint);
    ctx.stroke();
  } else if (key === 'ArrowLeft') {
    ctx.beginPath();
    ctx.moveTo(xStartPoint, yStartPoint);
    xStartPoint = xStartPoint - 10;
    ctx.lineTo(xStartPoint, yStartPoint);
    ctx.stroke();
  } else if (key === 'ArrowRight') {
    ctx.beginPath();
    ctx.moveTo(xStartPoint, yStartPoint);
    xStartPoint = xStartPoint + 10;
    ctx.lineTo(xStartPoint, yStartPoint);
    ctx.stroke(); 
  }
}

function handleKey(e) {
  if (e.key === 'ArrowUp' || 'ArrowDown' || 'ArrowLeft' || 'ArrowRight') {
    draw({key: e.key});
  }
}

function clearCanvas() {
  canvas.classList.add('shake');
  ctx.clearRect(0, 0, width, height);
  canvas.addEventListener(
    'animationend',
    () => {
      canvas.classList.remove('shake');
    },
    { once: true }
  );
  ctx.beginPath();
  ctx.moveTo(xStartPoint, yStartPoint);
  ctx.lineTo(xStartPoint, yStartPoint);
  ctx.stroke();
}

window.addEventListener('keydown', handleKey);
shakeButton.addEventListener('click', clearCanvas);