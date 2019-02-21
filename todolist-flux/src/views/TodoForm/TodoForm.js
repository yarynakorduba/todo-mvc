import React from 'react'
import './TodoForm.scss'

const TodoForm = ({ ...props }) => (
  <form
    className={'TodoForm'}
    onSubmit={ev => {
      ev.preventDefault()
      props.onAddTodo(document.querySelector('.TodoForm__input').value)
      document.querySelector('.TodoForm__input').value = ''
    }}
  >
    <button
      className={'TodoForm__toggle-all'}
      type="button"
      onClick={() => props.onToggleAllTodos()}
    >
      &#10003;
    </button>
    <input className={'TodoForm__input'} />
  </form>
)

export default TodoForm
