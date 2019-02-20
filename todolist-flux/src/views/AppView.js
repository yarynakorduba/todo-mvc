import React from 'react'
import Footer from './Footer'
import Header from './Header'
import TodoList from './TodoList'

const AppView = props => (
  <div>
    <Header {...props} />
    <TodoList {...props} />
    <Footer {...props} />
  </div>
)

export default AppView
