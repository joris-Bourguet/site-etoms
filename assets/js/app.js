const btnScroll = document.querySelector(".scrollBot");
const topDiv2 = document.querySelector("#test")

btnScroll.addEventListener("click", () => {
    window.scrollTo(0, topDiv2.offsetTop);
})

console.log(topDiv2.offsetTop)