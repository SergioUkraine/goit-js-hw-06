/*
Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), 
підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".
*/
const refs = {
    nameInput: document.querySelector('#name-input'),
    nameOutput: document.querySelector('#name-output'),
    defaultName: document.querySelector('#name-output').textContent, //'Anonymous',
}
    
refs.nameInput.addEventListener("input", (event) => {
    if (event.currentTarget.value === "") {
        refs.nameOutput.textContent = refs.defaultName;
    }
    else {
        refs.nameOutput.textContent = event.currentTarget.value;
    }
});