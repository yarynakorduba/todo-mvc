import React from 'react'

const TodoItem = ({ todo, isEditing, ...props }) => {
  let edit = false
  return (
    <li>
      <input
        type="checkbox"
        className={'TodoList__toggle'}
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
          className={'TodoList__todo-text'}
        >
          {todo.text}
        </label>
      )}
      <button
        className={'TodoList__destroy-todo'}
        onClick={() => props.onDeleteTodo(todo.id)}
      >
        &times;
      </button>
    </li>
  )
}

export default TodoItem
