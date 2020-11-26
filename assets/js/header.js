function header() {
    const header = document.querySelector('#header');
    const titlePage = document.querySelector('.titlePage') || "";
    let title = "";
    if (document.URL.includes("blog")) {
        title = "Blog"
    } else if (document.URL.includes("contact")) {
        title = "Contactez-nous"
    } else if (document.URL.includes("contact")) {
        title = "Contactez-nous"
    }
    if (titlePage) {
        titlePage.textContent = title
    }
}

export { header }