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

// Функция для создания и добавления картинок лапок с анимацией
function createPaws(containerId) {
    const container = document.getElementById(containerId);
    const pawSize = 60; // Размер лапки

    // Увеличим количество лапок (от 10 до 20)
    const pawCount = Math.floor(Math.random() * 11) + 10;

    for (let i = 0; i < pawCount; i++) {
        const paw = document.createElement('div');
        paw.className = 'cat-paw';

        // Генерируем случайные начальные координаты
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;

        // Генерируем случайный угол поворота
        const rotation = Math.random() * 360;

        // Устанавливаем начальную позицию и поворот
        paw.style.left = `${x}px`;
        paw.style.top = `${y}px`;
        paw.style.transform = `rotate(${rotation}deg)`;

        // Генерируем случайную задержку перед появлением лапки (от 0 до 5 секунд)
        const delay = Math.random() * 5000;

        // Добавляем обработчик события animationiteration
        paw.addEventListener('animationiteration', () => {
            // Генерируем новые координаты и угол поворота для следующего появления
            const newX = Math.random() * window.innerWidth;
            const newY = Math.random() * window.innerHeight;
            const newRotation = Math.random() * 360;

            // Устанавливаем новые координаты и угол поворота
            paw.style.left = `${newX}px`;
            paw.style.top = `${newY}px`;
            paw.style.transform = `rotate(${newRotation}deg)`;
        });

        // Добавляем задержку перед появлением лапки
        setTimeout(() => {
            container.appendChild(paw);
        }, delay);
    }
}

// Вызываем функцию для генерации лапок в обеих секциях
createPaws('cat-paws-cats'); // В секции "Cats for tap!"
createPaws('cat-paws-collection'); // В секции "My collection"
