document.addEventListener('DOMContentLoaded', () => {
  // Элемент ввода для поиска
  const searchInput = document.querySelector('input[type="search"]');

  // Добавляем обработчик события для поиска
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();

    // Все карточки блюд
    const foodCards = document.querySelectorAll('.foodCard');

    // Переменная для проверки, найдено ли совпадение
    let found = false;

    // Сбрасываем предыдущую подсветку
    foodCards.forEach(card => card.classList.remove('highlight'));

    // Поиск по названию блюда
    foodCards.forEach(card => {
      const foodName = card.querySelector('.foodName');
      if (foodName && foodName.textContent.toLowerCase().includes(query)) {
        // Подсвечиваем найденный блок
        card.classList.add('highlight');

        // Прокручиваем к найденной карточке
        if (!found) {
          card.scrollIntoView({ behavior: 'smooth', block: 'center' });
          found = true;
        }
      }
    });

  });
});