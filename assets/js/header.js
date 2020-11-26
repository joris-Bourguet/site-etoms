function header() {
    const header = document.querySelector('.header');
    const titlePage = document.querySelector('.titlePage');
    let firstSplit = document.URL.split('/')
    let titleHtml = firstSplit[3].split('.')
    let title = titleHtml[0]
}

export { header }