import React from 'react'
import './Footer.scss'

const Footer = props => {
  if (props.todos.size === 0) {
    return null
  }
  const remainingTodos = props.todos.filter(todo => !todo.complete).size
  const phrase = remainingTodos === 1 ? ' item left' : ' items left'
  return (
    <footer className={'Footer'}>
      <span className={'Footer__count'}>
        <strong>{remainingTodos}</strong>
        {phrase}
      </span>
      <button
        className={'Footer__clear'}
        onClick={() => props.onClearCompletedTodos()}
      >
        Clear Completed
      </button>
    </footer>
  )
}
export default Footer
