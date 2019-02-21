import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import TodoList from '../TodoList'
import TodoForm from '../TodoForm'

import './TodoApp.scss'
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

const TodoApp = ({ location, ...props }) => (
  <div className={'TodoApp'}>
    <Header />
    <div className={'TodoApp__container'}>
      <TodoForm {...props} />
      <TodoList location={location} {...props} />
      <Footer location={location} {...props} />
    </div>
  </div>
)

const RoutedTodoApp = ({ location, ...props }) => (
  <BrowserRouter>
    <Switch>
      <Route
        exact={true}
        path={'/'}
        render={({ ...rest }) => (
          <TodoApp location={location} {...props} {...rest} />
        )}
      />
    </Switch>
  </BrowserRouter>
)

export default RoutedTodoApp
