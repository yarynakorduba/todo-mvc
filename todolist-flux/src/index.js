import React from 'react'
import ReactDOM from 'react-dom'
import AppContainer from './containers/AppContainer'
import TodoActions from './data/TodoActions'
import './styles.css'

ReactDOM.render(<AppContainer />, document.getElementById('app'))
// TodoActions.addTodo('My first task')
// TodoActions.addTodo('My second task')
// TodoActions.addTodo('My third task')
