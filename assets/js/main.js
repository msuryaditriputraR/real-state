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
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");
        const sectionLink = document.querySelector(
            `.nav__menu a[href*=${sectionId}]`
        );

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionLink.classList.add("active-link");
        } else {
            sectionLink.classList.remove("active-link");
        }
    });
}

window.addEventListener("scroll", scrollActive);

/*=============== SHOW SCROLL UP ===============*/
function toggleElement(elementId, elementClass) {
    const element = document.getElementById(elementId);

    element.classList[this.scrollY >= 350 ? "add" : "remove"](elementClass);
}

window.addEventListener("scroll", () => {
    /* === Show Scroll === */
    toggleElement("scroll-up", "show-scroll");
});

/*=============== DARK LIGHT THEME ===============*/
const themeToggle = document.getElementById("theme-toggle");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

// get previous theme selected
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// validate if user selected theme previously
if (selectedTheme) {
    // change the theme according to the previous user's choice
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
        darkTheme
    );
    themeToggle.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
        iconTheme
    );
}

// create function to get current theme to save in local storage
const getCurrentTheme = () =>
    document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
    themeToggle.classList.contains(iconTheme) ? "bx-moon" : "bx-sun";

// Activate / deactivate the theme with the button
themeToggle.addEventListener("click", () => {
    // ADD or remove dark class
    document.body.classList.toggle(darkTheme);
    themeToggle.classList.toggle(iconTheme);

    // save to localstorage what theme user choose
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
