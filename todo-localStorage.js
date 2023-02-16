/* eslint-disable no-plusplus */
const form = document.querySelector('#form-container');
const results = document.querySelector('#results');

// Retrive from localStorage
const savedTodos = localStorage.getItem('todos') || [];
for (let i = 0; i < savedTodos.length; i++) {
  const item = document.createElement('h2');
  item.innerText = savedTodos[i].task;
  item.isCompleted = !!savedTodos[i].isCompleted;
  // item.isCompleted = savedTodos[i].isCompleted ? true : false;
  if (item.isCompleted) {
    item.style.textDecoration = 'line-through';
  }
  results.appendChild(item);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const item = document.createElement('h2');
  const taskValue = document.getElementById('task').value;
  item.innerText = taskValue;
  item.isCompleted = false;
  form.reset();
  results.appendChild(item);

  // Save to localStorage
  savedTodos.push({ task: item.innerText, isCompleted: false });
  localStorage.setItem('todos', JSON.stringify(savedTodos));
});

results.addEventListener('click', (e) => {
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
