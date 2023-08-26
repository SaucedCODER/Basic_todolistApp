const addtodobtn = document.querySelector('form');
const placeithere = document.querySelector('#todo-container');
let todos = [];

function loadTodos() {
  const savedTodos = localStorage.getItem('todos');
  if (savedTodos) {
    todos = JSON.parse(savedTodos);
    todos.forEach(todo => {
        console.log(todo);
      const liEl = createTodoElement(todo);
      placeithere.appendChild(liEl);
    });
  }
}

function createTodoElement(todo) {
  const liEl = document.createElement('li');
  const check_box_El = document.createElement('input');
  check_box_El.type = 'checkbox';
  check_box_El.checked = todo.completed;
 
  const li_del_btn = document.createElement('button');
  li_del_btn.textContent = 'trash';
  const liText = document.createElement('span');
  liText.textContent = todo.text;
  if(todo.completed) {
    liText.style.fontStyle = 'italic';
    liText.style.textDecoration = 'line-through';
  }
  liEl.append(check_box_El);
  liEl.append(liText);
  liEl.append(li_del_btn);

  check_box_El.addEventListener('change',() => {
    todo.completed = check_box_El.checked;
    saveTodos();
    if (check_box_El.checked) {
      liText.style.fontStyle = 'italic';
      liText.style.textDecoration = 'line-through';
    } else {
      liText.style.fontStyle = 'normal';
      liText.style.textDecoration = 'none';
    };
  });

  li_del_btn.addEventListener('click',() => {
    liEl.remove();
    todos = todos.filter(item => item.id !== todo.id);
    saveTodos();
  });

  return liEl;
}

function addTodoItem(text) {
  const todo = {
    id: Date.now()+'zeus',
    text: text,
    completed: false
  };
  const liEl = createTodoElement(todo);
  placeithere.prepend(liEl);
  todos.unshift(todo);
  saveTodos();
}

function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

function addingtodos(e) { 
  e.preventDefault();
  const inputvalue = document.querySelector('#todo-textbox');
  if (inputvalue.value.trim() !== '') {
    addTodoItem(inputvalue.value.toString());
    inputvalue.value = '';
  }
}

addtodobtn.addEventListener('submit', addingtodos);

loadTodos();
