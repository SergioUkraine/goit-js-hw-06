/*
Завдання 1

Напиши скрипт, який:

    1.  Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.

    2.  Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку 
        елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

    Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.
*/


const items = document.querySelectorAll('.item');
console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
    console.log(`\nCategory: ${item.querySelector('h2').textContent}`);
    console.log(`Elements: ${item.querySelectorAll('li').length}`);
});
