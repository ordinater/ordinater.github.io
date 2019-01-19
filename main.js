function scrollTo(id) {
    el = document.getElementById(id)
    el.scrollIntoView({behavior: "smooth"})
}

function scrollToContact() {
    scrollTo("contact")
}