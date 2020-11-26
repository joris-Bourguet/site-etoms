function contact() {
    const formContact = document.querySelector(".form-container");
    let formContainerHeight = formContact.clientHeight
    formContact.style.transform = "translateY(-" + formContainerHeight / 2 + "px)";
}

export { contact }