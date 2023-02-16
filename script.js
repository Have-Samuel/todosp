const todoForm = document.querySelector('#todoForm');
const todoResults = document.querySelector('#results');

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const todoRemover = document.createElement('button');
  todoRemover.innerText = 'DELETE';
  const newTodo = document.createElement('h2');
  newTodo.innerText = document.getElementById('task').value;
  newTodo.appendChild(todoRemover);
  todoResults.appendChild(newTodo);

  todoForm.reset();
});

todoResults.addEventListener('click', (e) => {
  const targetTag = e.target.tagName.toLowerCase();
  if (targetTag === 'h2') {
    e.target.style.textDecoration = 'line-through';
  } else if (targetTag === 'button') {
    e.target.parentNode.remove();
  }
});
