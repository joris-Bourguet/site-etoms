const btnScroll = document.querySelector(".scrollBot");
const btnScroll_ = document.querySelector(".scrollBtn");
const topDiv2 = document.querySelector("#team")
const topDiv3 = document.querySelector("#test")
mybutton = document.getElementById("topBtn");

// BOUTON RETOURNER AU TOP
mybutton = document.getElementById("topBtn");

function topFunction() {
    document.documentElement.scrollTop = 0;
}

// SCROLL VERS SECTION 2
btnScroll.addEventListener("click", () => {
    window.scrollTo(0, topDiv2.offsetTop);
})


// SCROLL VERS SECTION 3
btnScroll_.addEventListener("click", () => {
    window.scrollTo(0, topDiv3.offsetTop);
})