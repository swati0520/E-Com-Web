const menuBTN = document.getElementById("menu_btn");
const navLinks = document.getElementById("nav_links");
const menuBTNicon = menuBTN.querySelector("i");
menuBTN,
  addEventListener("click", (e) => {
    navLinks.classList.toggle("open");
    const isOpen = navLinks.classList.contains("open");
    menuBTNicon.setAttribute(
      "class",
      isOpen ? "ri-close-line" : "ri-menu-line"
    );
  });
navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBTNicon.setAttribute("class", "ri-menu-line");
});
const navSearch = document.getElementById("nav_search");
navSearch.addEventListener("click", (e) => {
  navSearch.classList.toggle("open");
});
const slides = document.querySelectorAll(".slider-slide");
const dots = document.querySelectorAll(".slider-dot");
let currentIndex = 0;
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
  const sliderWrapper = document.querySelector(".slider-wrapper");
  sliderWrapper.style.transform = `translateX(-${index * 100}%)`;
}
function nextslide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}
dots.forEach((dot, index) => {
  dot.addEventListener("clike", () => {
    currentIndex = index;
    showSlide(currentIndex);
  });
});
showSlide(currentIndex);
const autoSlideInterval = 2000;
setInterval(nextslide, autoSlideInterval);
