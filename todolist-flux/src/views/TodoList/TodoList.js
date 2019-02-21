import React from 'react'
import TodoItem from '../TodoItem'
import './TodoList.scss'

const TodoList = props => {
  return (
    <section className={'TodoList'}>
      {props.todos.size !== 0 && (
        <ul className={'TodoList__list'}>
          {[...props.todos.values()].reverse().map(todo => (
            <TodoItem
              className={'TodoList__todo'}
              key={todo.id}
              todo={todo}
              isEditing={props.editing}
              {...props}
              handleClick={props.onStartEditingTodo}
            />
          ))}
        </ul>
      )}
    </section>
  )
}
export default TodoList
