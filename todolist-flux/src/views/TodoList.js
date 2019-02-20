import TodoItem from './TodoItem'
import React from 'react'

const TodoList = props => {
  return (
    <section className={'TodoList'}>
      <form
        id={'todoForm'}
        onSubmit={ev => {
          ev.preventDefault()
          props.onAddTodo(document.querySelector('.TodoList__input').value)
          document.querySelector('.TodoList__input').value = ''
        }}
      >
        <button type="button" onClick={() => props.onToggleAllTodos()}>
          &#10003;
        </button>
        <input className={'TodoList__input'} />
      </form>
      {props.todos.size !== 0 && (
        <ul id={'todoList'} className={'TodoList__list'}>
          {[...props.todos.values()]
            .reverse()
            .map(
              todo => (
                  <TodoItem
                    key={todo.id}
                    todo={todo}
                    isEditing={props.editing}
                    {...props}
                    handleClick={props.onStartEditingTodo}
                  />
                )
            )}
        </ul>
      )}
    </section>
  )
}
export default TodoList
