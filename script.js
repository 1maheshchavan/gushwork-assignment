let header = document.getElementById("header");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  let currentScroll = window.scrollY;

  if (currentScroll > 100) {

    if (currentScroll > lastScroll) {
      header.classList.add("hide");
    } else {
      header.classList.remove("hide");
    }

  } else {
    header.classList.remove("hide");
  }

  lastScroll = currentScroll;
});


const carousel = document.getElementById("carousel");

document.querySelector(".next").addEventListener("click", () => {
  carousel.scrollBy({ left: 300, behavior: "smooth" });
});

document.querySelector(".prev").addEventListener("click", () => {
  carousel.scrollBy({ left: -300, behavior: "smooth" });
});