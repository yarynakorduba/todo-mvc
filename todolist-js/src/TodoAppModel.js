import EventEmitter from './EventEmitter'

class TodoAppModel extends EventEmitter {
  constructor(todos) {
    super()
    this._todos = todos || []
  }

  getTodos = () => Object.assign({}, this._todos)

  addTodo = (todo) => {
    const todoId = Math.random()
    this._todos = {...this._todos, [todoId]: {id: todoId, todo: todo, completed: false }}
    this.emit('todoAdded', todo)
  }

  removeTodo = (todoIndex) => {
    const {[todoIndex]: todo, ...rest} = this._todos
    this._todos = {...rest}
    this.emit('todoRemoved')
  }
  toggleTodo = (todoIndex) => {
    this._todos[todoIndex] = {
      ...this._todos[todoIndex],
      completed: !this._todos[todoIndex].completed
    }
    this.emit('todoToggled')
  }

  editTodo = ({id, text}) => {
    this._todos = {...this._todos, [id]: {...this._todos[id], todo: text}}
  }

  deleteCompletedTodos = () => {
    const updatedTodos = {}
      Object.keys(this._todos).map(id => {if (!this._todos[id].completed) updatedTodos[id] = this._todos[id]})
    this._todos = updatedTodos
  }
}
export default TodoAppModel
