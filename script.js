const accessKey = 'keloJAFHG1UCuNkWCQ8lfrn9MS2kdzWQUtbbVdXBSJY';

const catsButton = document.getElementById("cats-button");
const collectionButton = document.getElementById("collection-button");
const sectionCats = document.getElementById("section-cats");
const sectionCollection = document.getElementById("section-collection");
const randomCatContainer = document.getElementById('random-cat-container');
const pawsContainer = document.createElement('div');
pawsContainer.id = 'paws-container';
document.body.appendChild(pawsContainer);

const modal = document.getElementById("modal");
const modalYesButton = document.getElementById("modal-yes-button");
const modalNoButton = document.getElementById("modal-no-button");
const userAnswer = localStorage.getItem("catLoveAnswer");

if (userAnswer === null) {
    modal.style.display = "block";
    document.body.classList.add("modal-open");

    modalYesButton.addEventListener("click", () => {
        localStorage.setItem("catLoveAnswer", "yes");
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
    });

    modalNoButton.addEventListener("click", () => {
        localStorage.setItem("catLoveAnswer", "no");
        window.history.back();
    });
}

// Получаем сохраненные URL картинок из localStorage
let savedCats = JSON.parse(localStorage.getItem('catCollection')) || [];

// Обновление localStorage при добавлении новой картинки
function addToCollection(catImageUrl) {
    savedCats.push(catImageUrl);
    localStorage.setItem('catCollection', JSON.stringify(savedCats));
}

// Функция для загрузки случайного изображения котика с Unsplash API
function fetchRandomCatImage() {
    fetch(`https://api.unsplash.com/photos/random?query=cats&client_id=${accessKey}`)
        .then(response => response.json())
        .then(data => {
            const catImageUrl = data.urls.regular;
            const img = document.createElement('img');
            img.src = catImageUrl;
            img.alt = "Котик";
            randomCatContainer.innerHTML = ''; // Очищаем контейнер перед новой картинкой
            randomCatContainer.appendChild(img);

            // Сохраняем картинку в localStorage
            addToCollection(catImageUrl);
        })
        .catch(error => console.error('Ошибка загрузки изображения:', error));
}

// Добавляем обработчик на кнопку для показа случайного котика
const randomCatButton = document.getElementById('random-cat-btn');
randomCatButton.addEventListener('click', fetchRandomCatImage);

// Функция для отображения сохраненных картинок в разделе "My collection"
function loadCollection() {
    const collectionContainer = document.getElementById('collection-container');
    collectionContainer.innerHTML = ''; // Очищаем контейнер перед загрузкой картинок
    savedCats.forEach(catUrl => {
        const img = document.createElement('img');
        img.src = catUrl;
        img.alt = "Моя коллекция котиков";
        collectionContainer.appendChild(img);
    });
}

// Обработчик для кнопки перехода в коллекцию
collectionButton.addEventListener('click', () => {
    loadCollection(); // Загружаем коллекцию при нажатии на кнопку
    sectionCollection.scrollIntoView({ behavior: "smooth" });
});

catsButton.addEventListener("click", () => {
    sectionCats.scrollIntoView({ behavior: "smooth" });
});

// Функция для создания и добавления "лапок"
function createPaw() {
    const paw = document.createElement('div');
    paw.className = 'cat-paw';

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    const rotation = Math.random() * 360;

    paw.style.left = `${x}px`;
    paw.style.top = `${y}px`;
    paw.style.transform = `rotate(${rotation}deg)`;

    pawsContainer.appendChild(paw);

    setTimeout(() => {
        paw.remove();
    }, 500);
}

setInterval(createPaw, 300); // Генерация лапок каждые 300 мс
