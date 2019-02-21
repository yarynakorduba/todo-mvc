import React from 'react'
import './TodoItem.scss'

const TodoItem = ({ todo, isEditing, ...props }) => {
  let edit = false
  return (
    <li
      className={'TodoItem'}
      onMouseEnter={() =>
        document
          .querySelector('.TodoItem__destroy')
          .classList.add('TodoItem__destroy_visible')
      }
      onMouseLeave={() =>
        document
          .querySelector('.TodoItem__destroy')
          .classList.remove('TodoItem__destroy_visible')
      }
    >
      <input
        type="checkbox"
        className={'TodoItem__toggle'}
        checked={todo.complete}
        onChange={() => props.onToggleTodo(todo.id)}
      />
      {isEditing === todo.id ? (
        <input
          type="text"
          className={'TodoItem__input'}
          value={todo.text}
          autoFocus
          onChange={ev => props.onEditTodo(todo.id, ev.target.value)}
          onBlur={() => props.onStopEditingTodo()}
          onKeyDown={ev =>
            ev.keyCode === 13 || ev.which === 13
              ? props.onStopEditingTodo() && ev.target.blur()
              : null
          }
        />
      ) : (
        <label
          onDoubleClick={() => {
            props.onStartEditingTodo(todo.id)
          }}
          className={'TodoItem__text'}
        >
          {todo.text}
        </label>
      )}
      <button
        className={'TodoItem__destroy'}
        onClick={() => props.onDeleteTodo(todo.id)}
      >
        &times;
      </button>
    </li>
  )
}

export default TodoItem
