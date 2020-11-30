function navigation() {
    const btnScroll = document.querySelector(".scrollBot");
    const btnScroll_ = document.querySelector(".scrollBtn");
    const topDiv2 = document.querySelector("#team")
    const topDiv3 = document.querySelector("#botPage")
    const scrollTop = document.getElementById("topBtn")
    const landingPageSection = document.querySelector('#landingPage')
    const headerHeight = document.querySelector('#header').clientHeight;

    console.log(landingPageSection, headerHeight);

    let startTop = headerHeight + 50;
    $(landingPageSection).css("padding-top", startTop + "px");

    // click = scroll to top
    scrollTop.addEventListener('click', () => {
        scrollToTop()
    })

    function scrollToTop() {
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
}

export { navigation }