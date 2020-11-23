const btnScroll = document.querySelector(".scrollBot");
const topDiv2 = document.querySelector("#team")
const topDiv3 = document.querySelector("#test")

btnScroll.addEventListener("click", () => {
    window.scrollTo(0, topDiv2.offsetTop);
})