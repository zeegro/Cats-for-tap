// Получаем ссылки на кнопки и секции
const catsButton = document.getElementById("cats-button");
const collectionButton = document.getElementById("collection-button");
const sectionCats = document.getElementById("section-cats");
const sectionCollection = document.getElementById("section-collection");

// Получаем ссылки на модальное окно и кнопки в нем
const modal = document.getElementById("modal");
const modalYesButton = document.getElementById("modal-yes-button");
const modalNoButton = document.getElementById("modal-no-button");

// Проверяем, был ли уже ответ пользователя
const userAnswer = localStorage.getItem("catLoveAnswer");

if (userAnswer === null) {
    // Если ответа нет, отображаем модальное окно и блокируем скроллинг
    modal.style.display = "block";
    document.body.classList.add("modal-open");

    // Обработчики событий для кнопок "Да" и "Нет"
    modalYesButton.addEventListener("click", () => {
        // Если пользователь выбрал "Да", убираем модальное окно и сохраняем ответ
        localStorage.setItem("catLoveAnswer", "yes");
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
    });

    modalNoButton.addEventListener("click", () => {
        // Если пользователь выбрал "Нет", перенаправляем его на предыдущую страницу
        localStorage.setItem("catLoveAnswer", "no");
        window.history.back();
    });
}

// Обработчики событий для кнопок навигации
catsButton.addEventListener("click", () => {
    sectionCats.scrollIntoView({ behavior: "smooth" });
});

collectionButton.addEventListener("click", () => {
    sectionCollection.scrollIntoView({ behavior: "smooth" });
});

// Функция для создания и добавления картинок лапок с задержкой
function createPaws(containerId) {
    const container = document.getElementById(containerId);
    const pawSize = 60; // Размер лапки

    // Генерируем случайное количество лапок (от 5 до 10)
    const pawCount = Math.floor(Math.random() * 6) + 10;

    for (let i = 0; i < pawCount; i++) {
        const paw = document.createElement('div');
        paw.className = 'cat-paw';

        // Генерируем случайные начальные координаты равномерно по экрану
        const x = Math.random() * (window.innerWidth - pawSize);
        const y = Math.random() * (window.innerHeight - pawSize);

        // Генерируем случайный угол поворота
        const rotation = Math.random() * 360;

        // Устанавливаем начальную позицию и поворот
        paw.style.left = `${x}px`;
        paw.style.top = `${y}px`;
        paw.style.transform = `rotate(${rotation}deg)`;

        // Генерируем случайную задержку перед появлением лапки (от 0 до 10 секунд)
        const delay = Math.random() * 10000;

        setTimeout(() => {
            container.appendChild(paw);
        }, delay);
    }
}

// Вызываем функцию для генерации лапок в обеих секциях
createPaws('cat-paws-cats'); // В секции "Cats for tap!"
createPaws('cat-paws-collection'); // В секции "My collection"
