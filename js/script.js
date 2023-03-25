'use strict'
/* Ладно, что я хочу здесь увидеть.
1. поле ввода инпут и кнопка добавить +
2. Задачи добавляются в контейнерах серого цвета +
3. Задачи можно отметить выполненной, а второе нажатие отменяет
   Галочка перед текстом зеленого цвета. Бокс пустой при добавлении.
   Частично.
4. Задачу можно удалить корзина в конце
5. Задаче можно дать цвет
6. Задачу можно редактировать
7.  */

const addButton = document.querySelector('.add-button');

addButton.addEventListener('click', () => {
    addTask();
})

function addTask() {
    const tasksList = document.querySelector('.checklist__list');
    const taskInput = document.querySelector('.checklist__input');
    let li = document.createElement('li');
    li.classList.add('checklist__task');

    let checkButton = document.createElement('span');
    checkButton.classList.add('checklist__check-button');
    let taskText = document.createElement('span');
    taskText.classList.add('checklist__task-text');
    taskText.textContent = taskInput.value;

    li.appendChild(checkButton);   
    li.appendChild(taskText);    

    tasksList.appendChild(li);
    taskInput.value = '';
}

function addTaskListener() {
    const tasks = document.querySelectorAll('.checklist__task');

}
