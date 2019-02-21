import {
  ADD_TODO,
  DELETE_COMPLETED_TODOS,
  DELETE_TODO,
  EDIT_TODO,
  START_EDITING_TODO,
  STOP_EDITING_TODO,
  TOGGLE_ALL_TODOS,
  TOGGLE_TODO
} from './TodoActionTypes'
import TodoDispatcher from './TodoDispatcher'

const Actions = {
  addTodo(text) {
    TodoDispatcher.dispatch({
      type: ADD_TODO,
      text
    })
  },
  deleteTodo(id) {
    TodoDispatcher.dispatch({
      type: DELETE_TODO,
      id
    })
  },
  deleteCompletedTodos() {
    TodoDispatcher.dispatch({
      type: DELETE_COMPLETED_TODOS
    })
  },

  toggleTodo(id) {
    TodoDispatcher.dispatch({
      type: TOGGLE_TODO,
      id
    })
  },
  toggleAllTodos() {
    TodoDispatcher.dispatch({ type: TOGGLE_ALL_TODOS })
  },
  editTodo(id, text) {
    TodoDispatcher.dispatch({ type: EDIT_TODO, id, text })
  },

  startEditingTodo(id) {
    TodoDispatcher.dispatch({
      type: START_EDITING_TODO,
      id
    })
  },
  stopEditingTodo() {
    TodoDispatcher.dispatch({
      type: STOP_EDITING_TODO
    })
  }
}

export default Actions
