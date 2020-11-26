function contact() {
    const headerHeight = document.querySelector("#header").clientHeight
    const formContact = document.querySelector(".form-container");
    const sectionContact = document.querySelector('#contact').clientHeight;
    let top = ((sectionContact + headerHeight) / 2) / 2;
    console.log(top);

    formContact.style.top = top + 'px';

}

export { contact }