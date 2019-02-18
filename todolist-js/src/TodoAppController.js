class TodoAppController {
  constructor(model, view) {
    this._model = model
    view.on('delButtonClicked', idx => this.deleteTodo(idx))
    view.on('newTodoAdded', todo => this.addTodo(todo))
    view.on('todoToggled', todo => this.toggleTodo(todo))
    view.on('todoEdited', (todo) => this.editTodo(todo))
  }

  addTodo = (todo) => this._model.addTodo(todo)
  deleteTodo = (idx) => this._model.removeTodo(idx)
  toggleTodo = (idx) => this._model.toggleTodo(idx)
  editTodo = (todo) => this._model.editTodo(todo)

}
export default TodoAppController
