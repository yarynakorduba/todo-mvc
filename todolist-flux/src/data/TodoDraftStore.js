import React from 'react'
import TodoDispatcher from './TodoDispatcher'
import { ADD_TODO } from './TodoActionTypes'

class TodoDraftStore extends ReduceStore {
  constructor() {
    super(TodoDispatcher)
  }
  getInitialState() {
    return ""
  }
  reduce = (state, action) => {
    switch (action.type) {
    case ADD_TODO:
      return null
    default:
      return state
    }
  }
}

export default new TodoDraftStore()
