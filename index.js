const stickyElement = document.getElementById("navbar");
const carousel = document.getElementById("carousel");
const carouselOffer = document.getElementById("carousel-offer");
const carouselHeading = document.getElementById("carousel-heading");
const thirdBanner = document.getElementById("third-banner");
const fourthBanner = document.getElementById("fourth-banner");
const fifthBanner = document.getElementById("fifth-banner");
const trendingFirstBanner = document.getElementById("trending-one");
const trendingFirstBannerOptions = document.getElementById(
  "trending-one-options"
);
const trendingSecondBanner = document.getElementById("trending-two");
const trendingSecondBannerOptions = document.getElementById(
  "trending-two-options"
);
const trendingThirdBanner = document.getElementById("trending-three");
const trendingThirdBannerOptions = document.getElementById(
  "trending-three-options"
);

const carouselArray = [
  {
    image: "imageOne",
    offer: "50% off",
    header: "new cocktail dresses",
  },
  {
    image: "imageTwo",
    offer: "spring/summer '19",
    header: "the weekent gateway",
  },
  {
    image: "imageThree",
    offer: "summer '19",
    header: "night summer dresses",
  },
];
let currentCarouselItem = 0;

function windowScrollHandler() {
  const scrollPosition = window.scrollY;
  if (scrollPosition > 48) {
    stickyElement.classList.add("bg-white");
  } else if (scrollPosition < 48) {
    stickyElement.classList.remove("bg-white");
  }

  console.log(scrollPosition);
}

function carouselAnimationHandler() {
  if (currentCarouselItem > carouselArray.length - 1) {
    currentCarouselItem = 0;
  }

  carousel.classList.remove("bg-imagaOne", "bg-imageTwo", "bg-imageThree");

  carousel.classList.add(`bg-${carouselArray[currentCarouselItem].image}`);

  carouselOffer.innerText = carouselArray[currentCarouselItem].offer;

  carouselHeading.innerText = carouselArray[currentCarouselItem].header;

  currentCarouselItem++;

  console.log(currentCarouselItem);
}

function thirdMouseOverHandler() {
  thirdBanner.setAttribute("src", "./images/banner-three-two.webp");
}

function thirdMouseOutHandler() {
  thirdBanner.setAttribute("src", "./images/banner-three-one.webp");
}

function fourthMouseOverHandler() {
  fourthBanner.setAttribute("src", "./images/banner-four-two.webp");
}

function fourthMouseOutHandler() {
  fourthBanner.setAttribute("src", "./images/banner-four-one.webp");
}

function fifthMouseOverHandler() {
  fifthBanner.setAttribute("src", "./images/banner-five-two.webp");
}

function fifthMouseOutHandler() {
  fifthBanner.setAttribute("src", "./images/banner-five-one.webp");
}

// Trending section

function trendingFirstMouseOverHandler() {
  trendingFirstBanner.setAttribute("src", "./images/banner-three-two.webp");

  trendingFirstBannerOptions.classList.remove("hidden");
  trendingFirstBannerOptions.classList.add("flex", "animate-on-load");
}

function trendingFirstMouseOutHandler() {
  trendingFirstBanner.setAttribute("src", "./images/banner-three-one.webp");

  trendingFirstBannerOptions.classList.remove("flex");
  trendingFirstBannerOptions.classList.add("hidden");
}

function trendingSecondMouseOverHandler() {
  trendingSecondBanner.setAttribute("src", "./images/banner-four-two.webp");

  trendingSecondBannerOptions.classList.remove("hidden");
  trendingSecondBannerOptions.classList.add("flex");
}

function trendingSecondMouseOutHandler() {
  trendingSecondBanner.setAttribute("src", "./images/banner-four-one.webp");

  trendingSecondBannerOptions.classList.remove("flex");
  trendingSecondBannerOptions.classList.add("hidden");
}

function trendingThirdMouseOverHandler() {
  trendingThirdBanner.setAttribute("src", "./images/banner-five-two.webp");

  trendingThirdBannerOptions.classList.remove("hidden");
  trendingThirdBannerOptions.classList.add("flex");
}

function trendingThirdMouseOutHandler() {
  trendingThirdBanner.setAttribute("src", "./images/banner-five-one.webp");

  trendingThirdBannerOptions.classList.remove("flex");
  trendingThirdBannerOptions.classList.add("hidden");
}

document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("scroll", windowScrollHandler);

  // Best selling section
  thirdBanner.addEventListener("mouseover", thirdMouseOverHandler);
  thirdBanner.addEventListener("mouseout", thirdMouseOutHandler);

  fourthBanner.addEventListener("mouseover", fourthMouseOverHandler);
  fourthBanner.addEventListener("mouseout", fourthMouseOutHandler);

  fifthBanner.addEventListener("mouseover", fifthMouseOverHandler);
  fifthBanner.addEventListener("mouseout", fifthMouseOutHandler);

  // Trending section

  trendingFirstBanner.addEventListener(
    "mouseover",
    trendingFirstMouseOverHandler
  );
  trendingFirstBanner.addEventListener(
    "mouseout",
    trendingFirstMouseOutHandler
  );

  trendingSecondBanner.addEventListener(
    "mouseover",
    trendingSecondMouseOverHandler
  );
  trendingSecondBanner.addEventListener(
    "mouseout",
    trendingSecondMouseOutHandler
  );

  trendingThirdBanner.addEventListener(
    "mouseover",
    trendingThirdMouseOverHandler
  );
  trendingThirdBanner.addEventListener(
    "mouseout",
    trendingThirdMouseOutHandler
  );

  setInterval(carouselAnimationHandler, 2000);
});
