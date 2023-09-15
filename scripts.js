document.addEventListener("DOMContentLoaded", function () {
    let currentSection = 0;
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("#top-nav a");

    function scrollToSection(index) {
        window.scrollTo({
            top: sections[index].offsetTop,
            behavior: "smooth",
        });
        currentSection = index;
    }

    navLinks.forEach(function (link, index) {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Предотвращаем переход по ссылке
            const href = this.getAttribute("href");
            const targetSection = document.querySelector(href);
            const targetIndex = Array.from(sections).indexOf(targetSection);
            scrollToSection(targetIndex);
        });
    });
});
