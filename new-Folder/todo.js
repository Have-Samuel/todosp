document.addEventListener('DOMContentLoaded', () => {
  const todoForm = document.getElementById('newTodoForm');
  const todoList = document.getElementById('todoList');

  todoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const removeButton = document.createElement('button');
    removeButton.innerText = 'X';

    const newTodo = document.createElement('li');
    newTodo.innerText = document.getElementById('task').value;

    todoList.appendChild(newTodo);
    newTodo.appendChild(removeButton);

    todoForm.reset();
  });

  todoList.addEventListener('click', (event) => {
    const targetTagToLowerCase = event.target.tagName.toLowerCase();
    if (targetTagToLowerCase === 'li') {
      event.target.style.textDecoration = 'line-through';
    } else if (targetTagToLowerCase === 'button') {
      event.target.parentNode.remove();
    }
  });
});
