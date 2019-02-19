import EventEmitter from './EventEmitter'
import './styles.css'
const isCompleted = item => item.completed
const isActive = item => !item.completed

class TodoAppView extends EventEmitter {
  constructor(model) {
    super()
    this._model = model
    this._currentURL = window.location.hash

    document
      .querySelector('.TodoApp__form')
      .addEventListener('submit', ev => ev.preventDefault())
    document
      .querySelector('.TodoApp__input')
      .addEventListener('keypress', ev => {
        const key = ev.which || ev.keyCode
        if (key === 13) {
          this.emit('newTodoAdded', ev.target.value)
          ev.target.value = ''
        }
      })
    model
      .on('todoAdded', ev => this.renderTodoList(ev))
      .on('todoRemoved', ev => this.renderTodoList(ev))
      .on('todoToggled', ev => this.renderTodoList(ev))
      .on('todoEdited', ev => this.renderTodoList(ev))
      .on('completedTodosDeleted', ev => this.renderTodoList(ev))
  }

  editTodoItem = ev => {
    const key = ev.which || ev.keyCode
    if (key === 13) {
      ev.preventDefault()
      this.emit('todoEdited', { id: ev.target.id, text: ev.target.innerHTML })
      ev.target.blur()
    }
  }

  _renderTodoItem = todoItem =>
    `<li id=${todoItem.id} class="TodoApp__todo">` +
    `<input id=${
      todoItem.id
    } type="checkbox" class="TodoApp__complete-checkbox" ${todoItem.completed &&
      'checked'} >` +
    `<span id=${
      todoItem.id
    } class="TodoApp__todo-text" contenteditable="true">${
      todoItem.todo
    }</span>` +
    `<button id=${
      todoItem.id
    } class="TodoApp__delete-button">&times;</button></li>`

  renderTodoList = ev => {
    this._currentURL = ev && ev.target ? ev.target.hash : window.location.hash
    const todos = Object.values(this._model.getTodos())
    const todosAreLeft = todos.filter(isActive).length
    console.log("active are ", todosAreLeft, "todos")
    const filteredTodos =
      this._currentURL === '#/completed'
        ? todos.filter(isCompleted)
        : this._currentURL === '#/active'
        ? todos.filter(isActive)
        : todos
    document.querySelector('.TodoApp__list').innerHTML = filteredTodos
      .map(todoItem => this._renderTodoItem(todoItem))
      .join('\n')
    document
      .querySelectorAll('.TodoApp__delete-button')
      .forEach(button =>
        button.addEventListener('click', ev =>
          this.emit('delButtonClicked', ev.target.id)
        )
      )
    document.querySelectorAll('.TodoApp__todo').forEach(todo => {
      todo.addEventListener('mouseenter', ev =>
        ev.target.children[2].classList.add('TodoApp__delete-button-visible')
      )
      todo.addEventListener('mouseleave', ev =>
        ev.target.children[2].classList.remove('TodoApp__delete-button-visible')
      )
    })


    document
      .querySelectorAll('.TodoApp__complete-checkbox')
      .forEach(button =>
        button.addEventListener('click', ev =>
          this.emit('todoToggled', ev.target.id)
        )
      )

    document.querySelector('.TodoApp__clear').addEventListener('click',
        ev => console.log("clicked to delete compl") ||
          this.emit('completedTodosDeleted', ev))

    document
      .querySelectorAll('.TodoApp__todo-text')
      .forEach(todo =>
        todo.addEventListener('keypress', ev => this.editTodoItem(ev))
      )
    document
      .querySelectorAll('.TodoApp__navlink')
      .forEach(link => {
          link.addEventListener('click', ev => this.renderTodoList(ev))
        console.log("link ===> ", link.hash, link.siblings, link.classList)
          if (this._currentURL === link.hash) {
            link.classList.add("TodoApp__navlink_active")
          }else {
            link.classList.remove("TodoApp__navlink_active")
          }
        }
      )
    document.querySelector(".TodoApp__count").innerHTML = todosAreLeft + " items left"
  }
}
export default TodoAppView
