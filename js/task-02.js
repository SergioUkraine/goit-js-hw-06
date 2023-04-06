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
let listContainer = [];

ingredients.forEach((item, index) => {
  listContainer[index] = document.createElement("li");
  listContainer[index].textContent = item;
  listContainer[index].classList.add("item");
});

list.append(...listContainer);




