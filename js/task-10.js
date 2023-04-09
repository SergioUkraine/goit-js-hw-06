function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

/*
Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і 
натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, 
скільки вказано в amount і додає їх у div#boxes.

  1.  Розміри найпершого <div> - 30px на 30px.
  
  2.  Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
  
  3.  Всі елементи повинні мати випадковий колір фону у форматі HEX. 
      Використовуй готову функцію getRandomHexColor для отримання кольору.

Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.
*/

function createBoxes(amount) {
    destroyBoxes()
    let result = [];
    console.log(amount);
    for (let i = 0; i < amount; i++) {
      result[i] = document.createElement("div");
      result[i].style.width = `${30 + (10 * i)}px`;
      result[i].style.height = `${30 + (10 * i)}px`;
      result[i].style.backgroundColor = getRandomHexColor();
    }
    refs.boxesContainer.append(...result);
}

function destroyBoxes(){
  refs.boxesContainer.innerHTML = "";
}

const refs = {
  boxesContainer: document.querySelector('#boxes'),
  btnCreate: document.querySelector('button[data-create]'),
  btnDestroy: document.querySelector('button[data-destroy]'),
  input: document.querySelector('input[type="number"]'),
}

let amountBoxes = 0;


refs.input.addEventListener('input', () => {
  amountBoxes = refs.input.value;
});

refs.btnCreate.addEventListener('click', () => {
  createBoxes(amountBoxes);
});

refs.btnDestroy.addEventListener('click', destroyBoxes);
