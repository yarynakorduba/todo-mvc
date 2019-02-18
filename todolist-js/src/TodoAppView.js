import EventEmitter from './EventEmitter'

class TodoAppView extends EventEmitter {
  constructor(model) {
    super()
    this._model = model

    document.querySelector('.TodoApp__form').addEventListener('submit', ev => {
      ev.preventDefault()
    })
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
      .on('todoAdded', () => this.renderList())
      .on('todoRemoved', () => this.renderList())
      .on('todoToggled', () => this.renderList())
  }

  show() {
    this.renderList()
  }

  renderList() {
    const todos = this._model.getTodos()
    document.querySelector('.TodoApp__list').innerHTML = todos
      .map(
        (todoItem, index) =>
          `<li id=${index}><input id=${index} type="checkbox" class="TodoApp__complete-checkbox" value=${
            todoItem.completed
          }>` +
          todoItem.todo +
          `<button id=${index} class="TodoApp__delete-button">x</button></li>`
      )
      .join('\n')
    document
      .querySelectorAll('.TodoApp__delete-button')
      .forEach(button =>
        button.addEventListener('click', ev =>
          this.emit('delButtonClicked', ev.target.id)
        )
      )

    document
      .querySelectorAll('.TodoApp__complete-checkbox')
      .forEach(button =>
        button.addEventListener('click', ev =>
          this.emit('todoToggled', ev.target.id)
        )
      )
  }
}
export default TodoAppView
