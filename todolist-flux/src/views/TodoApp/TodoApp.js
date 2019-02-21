import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import TodoList from '../TodoList'
import TodoForm from '../TodoForm'

import './TodoApp.scss'

const TodoApp = props => (
  <div className={'TodoApp'}>
    <Header {...props} />
    <div className={'TodoApp__container'}>
      <TodoForm {...props} />
      <TodoList {...props} />
      <Footer {...props} />
    </div>
  </div>
)

export default TodoApp
