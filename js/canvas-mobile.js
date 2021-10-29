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
  console.log("PC");
}

function initMobile() {
  fix_dpi();
  particles = [];

  for (let i = 0; i < 200; i++) {
    const radius = Math.random() * 2 + 6;
    particles.push(
      new Particle(
        canvas.width / 3.5,
        canvas.height / 2,
        radius,
        randomColor(colors),
        randomIntFromRange(100, 900)
        // "blue"
      )
    );
  }
  console.log("mobile");
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

if (canvas.width <= 640) {
  initMobile();
} else {
  init();
}

animate();

// -----------------------
// --------------------------
// --------------------------

Letters = function () {
  this.lettersDOM = null;
  this.active = null;
  this.letters = [];
  this.alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "i",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "~",
    "&",
    "|",
    "^",
    "ç",
    "@",
    "]",
    "[",
    "{",
    "}",
    "ù",
    "*",
    "µ",
    "¤",
    "$",
    "£",
    "€",
    "°",
    ")",
    "(",
    "+",
    "-",
    "/",
    "<",
    ">",
    "²",
    "`",
    "é",
    "è",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
  ];

  return this;
};

Letters.prototype.init = function (word) {
  this.lettersDOM = document.querySelectorAll(".letter");
  this.active = true;
  var i;
  var nextChar;
  var lettersMax = this.lettersDOM.length;

  for (i = 0; i < this.lettersDOM.length; i++) {
    if (word.charAt(i) != "") nextChar = word.charAt(i);
    else nextChar = false;

    this.letters.push(new Letter(this.lettersDOM[i], nextChar));
  }

  if (word.length > lettersMax) {
    var wordContainer = document.getElementById("word");

    for (i = lettersMax; i < word.length; i++) {
      var letterSpan = document.createElement("span");
      letterSpan.innerHTML = "";
      letterSpan.classList.add("letter");
      wordContainer.appendChild(letterSpan);
      this.letters.push(new Letter(letterSpan, word.charAt(i)));
    }
  }

  this.animate();

  return this;
};

Letters.prototype.animate = function () {
  var i;
  var random;
  var char;

  if (this.active) {
    window.requestAnimationFrame(this.animate.bind(this));

    var indexes = [];

    for (i = 0; i < this.letters.length; i++) {
      var current = this.letters[i];

      if (!current.isDead) {
        random = Math.floor(Math.random() * (this.alphabet.length - 0));
        char = this.alphabet[random];
        current.render(char);
      } else {
        indexes.push(i);
      }
    }

    for (i = 0; i < indexes.length; i++) {
      this.letters.splice(indexes[i], 1);
    }

    if (this.letters.length == 0) {
      this.stop();
    }
  }
};

Letters.prototype.start = function (word) {
  this.init(word);
};

Letters.prototype.stop = function () {
  this.active = false;
};

Letter = function (DOMElement, nextChar) {
  var scope = this;

  this.DOMEl = DOMElement;
  this.char = DOMElement.innerHTML;
  this.next = nextChar;
  this.speed = Math.floor(Math.random() * (300 - 50));
  this.total = 0;
  this.duration = 2000;
  this.animating = true;
  this.isDead = false;

  this.timer = setInterval(function () {
    if (scope.animating === true) {
      scope.total += scope.speed;
    }
    scope.animating = !scope.animating;
  }, this.speed);

  this.animate();

  return this;
};

Letter.prototype.animate = function () {
  var i;
  var random;

  if (!this.isDead) {
    window.requestAnimationFrame(this.animate.bind(this));
  }

  if (this.total < this.duration) {
    if (this.animating) {
      this.DOMEl.innerHTML = this.char;
    }
  } else {
    this.isDead = true;

    if (!this.next) {
      var parent = document.getElementById("word");
      parent.removeChild(this.DOMEl);
      return;
    }

    this.DOMEl.innerHTML = this.next;
  }
};

Letter.prototype.render = function (char) {
  if (!this.animating) {
    this.char = char;
  }
};

var clientWidth = document.getElementById("center").clientWidth;
if (clientWidth <= 640) {
  var word = ["js", "Git", "npm", "...", "DC", "Sql"];
} else {
  var word = ["React", "Node.js", "MongoDb", "GitHub", "Next.js", "Batman"];
}

console.log(clientWidth);

var nextWord = 1;

var letters = new Letters();

setTimeout(function () {
  letters.start(word[nextWord]);

  setInterval(function () {
    nextWord++;
    if (nextWord >= word.length) nextWord = 0;

    letters.start(word[nextWord]);
  }, 10000);
}, 2000);
