function boutique() {
    const boutiqueSection = document.querySelector("#boutique");
    const headerHeight = document.querySelector('#header').clientHeight;
    const colGaucheHeight = document.querySelector('.col-gauche').clientHeight;
    const colDroite = document.querySelector('.col-droite');
    const number = document.querySelector('.number')
    const plus = document.querySelector('.plusArticle')
    const moin = document.querySelector('.moinsBtn')

    let counterNumberArticle = 0
    moin.addEventListener('click', () => {
        if (counterNumberArticle > 0) {
            counterNumberArticle--
            number.textContent = counterNumberArticle
        } else {
            number.textContent = 0
        }

    })
    plus.addEventListener('click', () => {
        counterNumberArticle++
        number.textContent = counterNumberArticle
    })
    let startTop = headerHeight + 50;
    $(boutiqueSection).css("margin-top", startTop + "px");
    $(colDroite).css("height", colGaucheHeight + "px");
}

export { boutique }