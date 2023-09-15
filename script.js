// Получаем ссылки на кнопки и секции
const catsButton = document.getElementById("cats-button");
const collectionButton = document.getElementById("collection-button");
const sectionCats = document.getElementById("section-cats");
const sectionCollection = document.getElementById("section-collection");

// Обработчики событий для кнопок
catsButton.addEventListener("click", () => {
    sectionCats.scrollIntoView({ behavior: "smooth" });
});

collectionButton.addEventListener("click", () => {
    sectionCollection.scrollIntoView({ behavior: "smooth" });
});
