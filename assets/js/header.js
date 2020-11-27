function header() {
    const titlePage = document.querySelector('.titlePage') || "";
    const header = document.querySelector('#header');
    const btnForm = document.querySelector('#header form button');
    let title = "";
    if (document.URL.includes("index")) {
        $(header).css("background-color", "#fff");
    } else if (document.URL.includes("blog")) {
        title = "Blog"
    } else if (document.URL.includes("boutique")) {
        title = "Boutique en ligne"
    } else if (document.URL.includes("contact")) {
        title = "Contactez-nous"
    }
    if (titlePage) {
        titlePage.textContent = title
    }
}

export { header }