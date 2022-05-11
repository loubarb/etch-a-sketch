const canvas = document.querySelector('#etch-a-sketch');
const shakeButton = document.querySelector('.shake');
const ctx = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;

let xStartPoint = Math.floor(Math.random() * width);
let yStartPoint = Math.floor(Math.random() * height);

ctx.linJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 20;
ctx.beginPath();
ctx.moveTo(xStartPoint, yStartPoint);
ctx.lineTo(xStartPoint, yStartPoint);
ctx.stroke();

