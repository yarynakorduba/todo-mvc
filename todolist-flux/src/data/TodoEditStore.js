import { ReduceStore } from 'flux/utils'
import TodoDispatcher from './TodoDispatcher'
import { START_EDITING_TODO, STOP_EDITING_TODO } from './TodoActionTypes'

class TodoEditStore extends ReduceStore {
  constructor() {
    super(TodoDispatcher)
  }

  getInitialState() {
    return ''
  }

  reduce(state, action) {
    switch (action.type) {
      case START_EDITING_TODO:
        return action.id
      case STOP_EDITING_TODO:
        return ''
      default:
        return state
    }
  }
}

export default new TodoEditStore()
