function marque() {
    const marqueSection = document.querySelector('#marque')
    const headerHeight = document.querySelector('#header').clientHeight;

    let startTop = headerHeight + 50;
    $(marqueSection).css("margin-top", startTop + "px");
}

export { marque }