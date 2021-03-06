// import utils from "./utils";

const canvas = document.querySelector(".canvas");
const c = canvas.getContext("2d");
const dpi = window.devicePixelRatio;

function fix_dpi() {
  //create a style object that returns width and height
  let style = {
    height() {
      return +getComputedStyle(canvas).getPropertyValue("height").slice(0, -2);
    },
    width() {
      return +getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);
    },
  };

  if (canvas.width <= 640) {
    canvas.setAttribute("width", (style.width() * dpi) / 2);
    canvas.setAttribute("height", (style.height() * dpi) / 2);
  } else {
    canvas.setAttribute("width", style.width() * dpi);
    canvas.setAttribute("height", style.height() * dpi);
  }

  //set the correct attributes for a crystal clear image!
}

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

// addEventListener("resize", () => {
//   canvas.width = innerWidth;
//   canvas.height = innerHeight;

//   init();
// });

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

function Particle(x, y, radius, color, distance) {
  // fix_dpi();
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;
  this.radians = Math.random() * Math.PI * 2;
  this.velocity = 0.02;

  this.distanceFromCenter = distance;

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
  fix_dpi();
  particles = [];

  for (let i = 0; i < 200; i++) {
    const radius = Math.random() * 2 + 7;
    particles.push(
      new Particle(
        canvas.width / 2.5,
        canvas.height / 2,
        radius,
        randomColor(colors),
        randomIntFromRange(50, 800)
        // "blue"
      )
    );
  }
  console.log("PC1");
}

function initMobile() {
  fix_dpi();
  particles = [];

  for (let i = 0; i < 300; i++) {
    const radius = Math.random() * 2 + 9;
    particles.push(
      new Particle(
        canvas.width / 3.5,
        canvas.height / 2,
        radius,
        randomColor(colors),
        randomIntFromRange(100, 1200)
        // "blue"
      )
    );
  }
  console.log("Mobile");
}

console.log(canvas.width * 2);
console.log(canvas.width);
console.log(canvas.width + canvas.width);

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  // c.globalAlpha = 0.0;
  c.fillStyle = "rgba(0,0,0,0.05)";
  c.fillRect(0, 0, canvas.width, canvas.height);

  // c.fillText("HTML CANVAS BOILERPLATE", mouse.x, mouse.y);
  particles.forEach((particle) => {
    particle.update();
  });
}

if (canvas.width <= 640) {
  initMobile();
} else {
  init();
}

animate();

// -----------------------
// --------------------------
// --------------------------
