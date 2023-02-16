const form = document.querySelector('#form-container');
const newTodo = document.querySelector('input[name="item"]');
const results = document.querySelector('#results');
// const todoRemover = document.querySelector('#container-remover');

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
});

results.addEventListener('click', (e) => {
  const targetTag = e.target.tagName.toLowerCase();
  if (targetTag === 'h2') {
    e.target.style.textDecoration = 'line-through';
  } else if (targetTag === 'button') {
    e.target.parentNode.remove();
  }
});