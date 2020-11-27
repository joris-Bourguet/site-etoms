function blog() {
    const blogContainer = document.querySelector(".blogContainer");
    const headerHeight = document.querySelector('#header').clientHeight;
    let startTop = headerHeight + 50;
    $(blogContainer).css("margin-top", startTop + "px");
}

export { blog }