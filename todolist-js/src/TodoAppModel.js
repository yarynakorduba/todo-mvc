import EventEmitter from './EventEmitter'

class TodoAppModel extends EventEmitter {
  constructor(todos) {
    super()
    this._todos = todos || []
  }

  getTodos() {
    return this._todos.slice()
  }

  addTodo(todo) {
    this._todos = [...this._todos, { todo: todo, completed: false }]
    this.emit('todoAdded', todo)
  }

  removeTodo(todoIndex) {
    this._todos.splice(todoIndex, 1)
    this.emit('todoRemoved')
  }
  toggleTodo(todoIndex) {
    this._todos[todoIndex] = {
      ...this._todos[todoIndex],
      completed: !this._todos[todoIndex].completed
    }
  }
}
export default TodoAppModel
