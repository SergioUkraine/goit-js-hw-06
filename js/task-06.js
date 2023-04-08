/*
Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

    1.  Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.

    2.  Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.

Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.
*/

const inputText = document.querySelector('#validation-input');

inputText.addEventListener('blur', (event) => {
    if (event.currentTarget.value.length >= inputText.getAttribute('data-length')) {
        inputText.classList = 'valid';
    }
    // else if (event.currentTarget.value.length === 0) {
    //     inputText.removeAttribute('class');
    // }
    else {
        inputText.classList = 'invalid';
    }
});