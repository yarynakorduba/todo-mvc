import TodoApp from '../views/TodoApp'
import { Container } from 'flux/utils'
import TodoStore from '../data/TodoStore'
import TodoActions from '../data/TodoActions'
import TodoEditStore from '../data/TodoEditStore'

const getStores = () => [TodoStore, TodoEditStore]
const getState = () => ({
  todos: TodoStore.getState(),
  editing: TodoEditStore.getState(),
  onDeleteTodo: TodoActions.deleteTodo,
  onToggleTodo: TodoActions.toggleTodo,
  onUpdateDraft: TodoActions.updateDraft,
  onAddTodo: TodoActions.addTodo,
  onClearCompletedTodos: TodoActions.deleteCompletedTodos,
  onToggleAllTodos: TodoActions.toggleAllTodos,
  onEditTodo: TodoActions.editTodo,
  onStartEditingTodo: TodoActions.startEditingTodo,
  onStopEditingTodo: TodoActions.stopEditingTodo
})

export default Container.createFunctional(TodoApp, getStores, getState)
