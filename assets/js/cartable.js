function cartable() {
    const headerHeight = document.querySelector('#header').clientHeight;
    const cartableSection = document.querySelector('#cartable')

    let startTop = headerHeight + 50;
    $(cartableSection).css("margin-top", startTop + "px");

}

export { cartable }