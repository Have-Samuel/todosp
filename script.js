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
  const choice = makeNewTodo(newTodo.value);
  // const checkedInput = document.createElement('input[type="checkbox"]');
  // choice.appendChild(checkedInput);
  results.appendChild(choice);
  newTodo.value = '';
  console.log(e);
});

// todoRemover.item.remove();