const accessKey = 'keloJAFHG1UCuNkWCQ8lfrn9MS2kdzWQUtbbVdXBSJY'; // Твой ключ API Unsplash

// Получаем ссылки на кнопки и секции
const catsButton = document.getElementById("cats-button");
const collectionButton = document.getElementById("collection-button");
const sectionCats = document.getElementById("section-cats");
const sectionCollection = document.getElementById("section-collection");
const randomCatContainer = document.getElementById('random-cat-container');
const pawsContainer = document.createElement('div');
pawsContainer.id = 'paws-container';
document.body.appendChild(pawsContainer); // Добавляем контейнер для лапок в body

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

// Обработчики событий для кнопок
catsButton.addEventListener("click", () => {
    sectionCats.scrollIntoView({ behavior: "smooth" });
});

collectionButton.addEventListener("click", () => {
    sectionCollection.scrollIntoView({ behavior: "smooth" });
});

// Функция для загрузки случайного изображения котика с Unsplash API
function fetchRandomCatImage() {
    fetch(`https://api.unsplash.com/photos/random?query=cats&client_id=${accessKey}`)
        .then(response => response.json())
        .then(data => {
            const catImageUrl = data.urls.regular;
            const img = document.createElement('img');
            img.src = catImageUrl;
            img.alt = "Котик";
            randomCatContainer.innerHTML = '';
            randomCatContainer.appendChild(img);
        })
        .catch(error => console.error('Ошибка загрузки изображения:', error));
}

// Добавляем обработчик события на кнопку для показа случайного котика
const randomCatButton = document.getElementById('random-cat-btn');
randomCatButton.addEventListener('click', fetchRandomCatImage);

// Функция для создания и добавления "лапок"
function createPaw() {
    const paw = document.createElement('div');
    paw.className = 'cat-paw';

    // Случайная позиция лапки
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    // Случайный угол поворота лапки от -45 до 45 градусов
    const rotation = Math.random() * 360; // Поворот от 0 до 360 градусов

    // Устанавливаем позиции и угол поворота лапки
    paw.style.left = `${x}px`;
    paw.style.top = `${y}px`;
    paw.style.transform = `rotate(${rotation}deg)`; // Применение рандомного угла

    pawsContainer.appendChild(paw);

    // Удаляем лапку через 5 секунд
    setTimeout(() => {
        paw.remove();
    }, 500); // Время исчезновения 500 мс
}

// Генерация лапок каждые несколько секунд
setInterval(createPaw, 300); // Интервал 500 мс для появления новой лапки

