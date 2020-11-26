function menu() {
    const hamburger = document.querySelector('.hamburger')
    const liens = document.querySelector('.nav-links')
    const line = document.querySelectorAll('.line')

    function changeColor(params) {
        if (document.URL.includes('index') && !liens.classList.contains('open')) {
            $(line).css("background-color", "#8b615e");
        } else {
            $(line).css("background-color", "#f7eedf");
        }
    }
    hamburger.addEventListener('click', () => {
        liens.classList.toggle('open');
        changeColor()
    })

    changeColor()
}

export { menu }