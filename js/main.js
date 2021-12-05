window.addEventListener("load", () => {
  document.querySelector(".main").classList.remove("hidden");
  document.querySelector(".nav").classList.remove("hidden");
  // document.querySelector(".home-section").classList.add("active");
  // ---------------Page lOader -----------
  document.querySelector(".page-loader").classList.add("fade-out");
  setTimeout(() => {
    document.querySelector(".page-loader").style.display = "none";
  }, 1000);
});

const tabsContainer = document.querySelector(".about-tabs"),
  aboutSection = document.querySelector("#about");

tabsContainer.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("tab-item") &&
    !e.target.classList.contains("active")
  ) {
    tabsContainer.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    const target = e.target.getAttribute("data-target");
    // console.log(target);
    aboutSection
      .querySelector(".tab-content.active")
      .classList.remove("active");
    aboutSection.querySelector(target).classList.add("active");
  }
});

// Portfolio PopUP -------------------------------
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("view-project-btn")) {
    togglePortfolioPopup();
    document.querySelector(".portfolio-popup").scrollTo(0, 0);
    portfolioItemDetails(e.target.parentElement);
  }
});
function togglePortfolioPopup() {
  document.querySelector(".portfolio-popup").classList.toggle("open");
  document.body.classList.toggle("hide-scrolling");
  document.querySelector(".main").classList.toggle("fade-out");
  document.querySelector(".nav").classList.toggle("fade-out");
}
document
  .querySelector(".pp-close")
  .addEventListener("click", togglePortfolioPopup);

// hide popup when clicking outside of it
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("pp-inner")) {
    togglePortfolioPopup();
  }
});

function portfolioItemDetails(portfolioItem) {
  document.querySelector(".pp-thumbnail img").src = portfolioItem.querySelector(
    ".portfolio-item-thumbnail img"
  ).src;

  document.querySelector(".pp-header h3").innerHTML =
    portfolioItem.querySelector(".portfolio-item h3").innerHTML;

  document.querySelector(".pp-body").innerHTML = portfolioItem.querySelector(
    ".portfolio-item-details"
  ).innerHTML;
}

//NavBar Hamburger
// const navSlide = () => {
//   const burger = document.querySelector(".burger");
//   const nav = document.querySelector(".nav-links");
//   const navLinks = document.querySelectorAll(".nav-links li");

//   burger.addEventListener("click", () => {
//     //Burger Animation
//     burger.classList.toggle("toggle");
//     //Toggle Nav
//     nav.classList.toggle("nav-active");

//     // Animate Links
//     navLinks.forEach((link, index) => {
//       if (link.style.animation) {
//         link.style.animation = "";
//       } else {
//         link.style.animation = `navLinkFade 0.5s ease forwards ${
//           index / 7 + 0.3
//         }s`;
//       }
//     });
//   });
// };

// navSlide();

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
