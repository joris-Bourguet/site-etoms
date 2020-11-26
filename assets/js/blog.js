function blog() {
    const blogContainer = document.querySelector(".blogContainer");
    const headerHeight = document.querySelector('#header').clientHeight;
    let startTop = headerHeight + 20;
    $(blogContainer).css("margin-top", startTop + "px");
}

export { blog }