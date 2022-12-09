/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById("header");

    this.scrollY >= 80
        ? header.classList.add("scroll-header")
        : header.classList.remove("scroll-header");
};

window.addEventListener("scroll", scrollHeader);

/*=============== SWIPER POPULAR ===============*/
const popularSwiper = new Swiper(".popular__container", {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

/*=============== VALUE ACCORDION ===============*/
const accordionItems = document.querySelectorAll(".value__accordion-item");

accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector(".value__accordion-header");

    accordionHeader.addEventListener("click", function () {
        item.classList.toggle("accordion-open");
    });
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SHOW SCROLL UP ===============*/

/*=============== DARK LIGHT THEME ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
