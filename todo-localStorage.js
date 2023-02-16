/* eslint-disable no-plusplus */
const todoForm = document.querySelector('#todoForm');
const todoResults = document.querySelector('#results');

// Retrive from localStorage
const savedTodos = JSON.parse(localStorage.getItem('todos'));
for (let i = 0; i < savedTodos.length; i++) {
  const newTodo = document.createElement('h2');
  newTodo.innerText = savedTodos[i].task;
  newTodo.isCompleted = !!savedTodos[i].isCompleted;
  // item.isCompleted = savedTodos[i].isCompleted ? true : false;
  if (newTodo.isCompleted) {
    newTodo.style.textDecoration = 'line-through';
  }
  todoResults.appendChild(newTodo);
}

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const newTodo = document.createElement('h2');
  const taskValue = document.getElementById('task').value;
  newTodo.innerText = taskValue;
  newTodo.isCompleted = false;
  todoForm.reset();
  todoResults.appendChild(newTodo);

  // Save to localStorage
  savedTodos.push({ task: newTodo.innerText, isCompleted: false });
  localStorage.setItem('todos', JSON.stringify(savedTodos));
});

todoResults.addEventListener('click', (e) => {
  const clickedListItem = e.target;

  if (!clickedListItem.isCompleted) {
    clickedListItem.style.textDecoration = 'line-through';
    clickedListItem.isCompleted = true;
  } else {
    clickedListItem.style.textDecoration = 'none';
    clickedListItem.isCompleted = false;
  }

  // breaks for duplicates - another option is to have dynamic IDs
  for (let i = 0; i < savedTodos.length; i++) {
    if (savedTodos[i].task === clickedListItem.innerText) {
      savedTodos(i.isCompleted = !savedTodos[i].isCompleted);
      localStorage.setItem('todos', JSON.stringify(savedTodos));
    }
  }
});
