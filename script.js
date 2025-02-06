// Функция для открытия модального окна
function openModal(imageSrc) {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("modalImage");
    modal.style.display = "block"; // Показываем модальное окно
    modalImg.src = imageSrc; // Устанавливаем источник изображения
}

// Функция для закрытия модального окна
function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none"; // Скрываем модальное окно
}

// Закрытие модального окна при клике вне изображения
window.onclick = function(event) {
    const modal = document.getElementById("myModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};