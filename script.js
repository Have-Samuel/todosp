const form = document.querySelector('#form-container');
const newTodo = document.querySelector('input[name="item"]');
const results = document.querySelector('#results');

// Retrive from localStorage
const savedTodos = localStorage.getItem('todos') || [];
for (let i = 0; i < savedTodos.length; i++) {
  const item = document.createElement('h2');
  item.innerText = savedTodos[i].task;
  // item.isCompleted = !!savedTodos[i].isCompleted;
  item.isCompleted = savedTodos[i].isCompleted ? true : false;
  if (item.isCompleted) {
    item.style.textDecoration = 'line-through';
  }
  results.appendChild(item);
}

function makeNewTodo(todo) {
  const item = document.createElement('h2');
  item.innerText = todo;
  return item;
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const todoRemover = document.createElement('button');
  todoRemover.innerText = 'DELETE';
  const choice = makeNewTodo(newTodo.value);
  choice.appendChild(todoRemover);
  results.appendChild(choice);
  newTodo.value = '';
  form.reset();

  // Save to localStorage
  savedTodos.push({ task: item.innerText, isCompleted: false });
  localStorage.setItem('todos', JSON.stringify(savedTodos));
});

results.addEventListener('click', (e) => {
  const targetTag = e.target.tagName.toLowerCase();
  if (targetTag === 'h2') {
    e.target.style.textDecoration = 'line-through';
  } else if (targetTag === 'button') {
    e.target.parentNode.remove();
  }
});
