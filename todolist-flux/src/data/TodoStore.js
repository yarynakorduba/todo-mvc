import Immutable from 'immutable'
import { ReduceStore } from 'flux/utils'
import {
  ADD_TODO,
  DELETE_COMPLETED_TODOS,
  DELETE_TODO,
  EDIT_TODO,
  TOGGLE_ALL_TODOS,
  TOGGLE_TODO
} from './TodoActionTypes'
import TodoDispatcher from './TodoDispatcher'
import Counter from './Counter'
import Todo from './Todo'

class TodoStore extends ReduceStore {
  constructor() {
    super(TodoDispatcher)
  }
  getInitialState() {
    return Immutable.OrderedMap()
  }

  reduce(state, action) {
    switch (action.type) {
      case ADD_TODO:
        if (!action.text) {
          return state
        }
        const id = Counter.increment()
        return state.set(
          id,
          new Todo({
            id,
            text: action.text,
            complete: false
          })
        )
      case DELETE_TODO:
        return state.delete(action.id)
      case DELETE_COMPLETED_TODOS:
        return state.filter(todo => !todo.complete)
      case TOGGLE_TODO:
        return state.update(action.id, todo =>
          todo.set('complete', !todo.complete)
        )
      case TOGGLE_ALL_TODOS:
        return state.filter(todo => !todo.complete).size
          ? state.map(todo => todo.set('complete', true))
          : state.map(todo => todo.set('complete', !todo.complete))

      case EDIT_TODO:
        return state.update(action.id, todo => todo.set('text', action.text))
      default:
        return state
    }
  }
}

export default new TodoStore()
