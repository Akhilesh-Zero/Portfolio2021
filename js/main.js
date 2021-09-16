//NavBar shrink
// const navbar = document.querySelector(".navcontainer");
// const logo = document.querySelector(".logo");

// window.onscroll = () => {
//   if (
//     document.body.scrollTop > 100 ||
//     document.documentElement.scrollTop > 100
//   ) {
//     navbar.style.height = "60px";
//     navbar.style.fontSize = "14px";
//     logo.classList.add("logo-small");
//   } else {
//     navbar.style.height = "100px";
//     navbar.style.fontSize = "16px";
//     logo.classList.remove("logo-small");
//   }
// };

//NavBar Hamburger
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    //Burger Animation
    burger.classList.toggle("toggle");
    //Toggle Nav
    nav.classList.toggle("nav-active");

    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });
  });
};

navSlide();

const tween1 = KUTE.fromTo(
  "#blob1",
  { path: "#blob1" },
  { path: "#blob2" },
  { repeat: 999, duration: 3000, yoyo: true }
);

const tween2 = KUTE.fromTo(
  "#blob3",
  { path: "#blob3" },
  { path: "#blob4" },
  { repeat: 999, duration: 3000, yoyo: true }
);

tween1.start();
tween2.start();

const tween1Mobile = KUTE.fromTo(
  "#blob1-mobile",
  { path: "#blob1-mobile" },
  { path: "#blob2-mobile" },
  { repeat: 999, duration: 3000, yoyo: true }
);

const tween2Mobile = KUTE.fromTo(
  "#blob3-mobile",
  { path: "#blob3-mobile" },
  { path: "#blob4-mobile" },
  { repeat: 999, duration: 3000, yoyo: true }
);

tween1Mobile.start();
tween2Mobile.start();

const tween1Mobile2 = KUTE.fromTo(
  "#blob1-mobile2",
  { path: "#blob1-mobile2" },
  { path: "#blob2-mobile2" },
  { repeat: 999, duration: 3000, yoyo: true }
);

const tween2Mobile2 = KUTE.fromTo(
  "#blob3-mobile2",
  { path: "#blob3-mobile2" },
  { path: "#blob4-mobile2" },
  { repeat: 999, duration: 3000, yoyo: true }
);

tween1Mobile2.start();
tween2Mobile2.start();

(function () {
  var quotes = $(".set1");
  var quoteIndex = -1;

  function showNextQuote() {
    ++quoteIndex;
    quotes
      .eq(quoteIndex % quotes.length)
      .fadeIn(2000)
      .delay(2000)
      .fadeOut(2000, showNextQuote);
  }

  showNextQuote();
})();

(function () {
  var quotes = $(".set2");
  var quoteIndex = -1;

  function showNextQuote() {
    ++quoteIndex;
    quotes
      .eq(quoteIndex % quotes.length)
      .fadeIn(2000)
      .delay(2000)
      .fadeOut(2000, showNextQuote);
  }

  showNextQuote();
})();

(function () {
  var quotes = $(".set3");
  var quoteIndex = -1;

  function showNextQuote() {
    ++quoteIndex;
    quotes
      .eq(quoteIndex % quotes.length)
      .fadeIn(2000)
      .delay(2000)
      .fadeOut(2000, showNextQuote);
  }

  showNextQuote();
})();

(function () {
  var quotes = $(".g1");
  var quoteIndex = -1;

  function showNextQuote() {
    ++quoteIndex;
    quotes
      .eq(quoteIndex % quotes.length)
      .fadeIn(2000)
      .delay(2000)
      .fadeOut(2000, showNextQuote);
  }

  showNextQuote();
})();

(function () {
  var quotes = $(".g2");
  var quoteIndex = -1;

  function showNextQuote() {
    ++quoteIndex;
    quotes
      .eq(quoteIndex % quotes.length)
      .fadeIn(2000)
      .delay(2000)
      .fadeOut(2000, showNextQuote);
  }

  showNextQuote();
})();

(function () {
  var quotes = $(".g3");
  var quoteIndex = -1;

  function showNextQuote() {
    ++quoteIndex;
    quotes
      .eq(quoteIndex % quotes.length)
      .fadeIn(2000)
      .delay(2000)
      .fadeOut(2000, showNextQuote);
  }

  showNextQuote();
})();
