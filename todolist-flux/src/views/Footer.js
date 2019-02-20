import React from 'react'

const Footer = props => {
  if (props.todos.size === 0) {
    return null
  }
  const remainingTodos = props.todos.filter(todo => !todo.complete).size
  const phrase = remainingTodos === 1 ? ' item left' : ' items left'
  return (
    <footer id={'footer'}>
      <span id={'todoCount'}>
        <strong>{remainingTodos}</strong>
        {phrase}
      </span>
      <span className={'TodoList__clear-completed'}>
        <button onClick={() => props.onClearCompletedTodos()}>
          Clear Completed
        </button>
      </span>
    </footer>
  )
}
export default Footer
