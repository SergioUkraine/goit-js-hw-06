/*
Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

    1.  Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
    
    2.  Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
    
    3.  Оновлюй інтерфейс новим значенням змінної counterValue.
*/

let counterValue = 0;

const buttonIncriment = document.querySelector('[data-action="increment"]');
const buttonDecrement = document.querySelector('[data-action="decrement"]');
const spamCounter = document.querySelector('#value');

buttonIncriment.addEventListener('click', () => { ++counterValue; spamCounter.textContent = counterValue;});
buttonDecrement.addEventListener('click', () => { --counterValue; spamCounter.textContent = counterValue;});
