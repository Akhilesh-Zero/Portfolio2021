// import utils from "./utils";

const canvas = document.querySelector(".canvas-mobile");
const c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2,
};

const colors = ["#ff5f6d", "#ffc371", "#5cf8c7", "#f71054"];

// Event Listeners
addEventListener("mousemove", (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  init();
});

function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

function distance(x1, y1, x2, y2) {
  const xDist = x2 - x1;
  const yDist = y2 - y1;

  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}

function Particle(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;
  this.radians = Math.random() * Math.PI * 2;
  this.velocity = 0.02;
  this.distanceFromCenter = randomIntFromRange(10, 400);

  this.update = () => {
    const lastPoint = { x: this.x, y: this.y };
    //Move points over time
    this.radians += this.velocity;
    this.x = x + Math.cos(this.radians) * this.distanceFromCenter;
    this.y = y + Math.sin(this.radians) * this.distanceFromCenter;
    this.draw(lastPoint);
  };

  this.draw = (lastPoint) => {
    c.beginPath();
    c.strokeStyle = this.color;
    c.lineWidth = this.radius;
    c.moveTo(lastPoint.x, lastPoint.y);
    c.lineTo(this.x, this.y);
    c.stroke();
    c.closePath();
  };
}

// Implementation
let particles;
function init() {
  particles = [];

  for (let i = 0; i < 150; i++) {
    const radius = Math.random() * 2 + 2;
    particles.push(
      new Particle(
        canvas.width,
        canvas.height / 2,
        radius,
        randomColor(colors)
        // "blue"
      )
    );
  }
}
console.log(canvas.width * 2);
console.log(canvas.width + canvas.width);
// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  // c.globalAlpha = 0.0;
  c.fillStyle = "rgba(0,0,0,0.05";
  c.fillRect(0, 0, canvas.width, canvas.height);

  // c.fillText("HTML CANVAS BOILERPLATE", mouse.x, mouse.y);
  particles.forEach((particle) => {
    particle.update();
  });
}

init();
animate();
