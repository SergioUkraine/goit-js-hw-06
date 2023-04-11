/*
Завдання 2

Напиши скрипт, який для кожного елемента масиву ingredients:

    1.  Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().

    2.  Додасть назву інгредієнта як його текстовий вміст.
    
    3.  Додасть елементу клас item.

    4.  Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
*/

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

let listContainer = ingredients.map((item, index) => {
  item = document.createElement('li');
  item.textContent = ingredients[index]; 
  item.classList.add('item');
  return item;
});

console.log(listContainer);

list.append(...listContainer);




