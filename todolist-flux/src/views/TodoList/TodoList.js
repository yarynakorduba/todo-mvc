import React from 'react'
import TodoItem from '../TodoItem'
import './TodoList.scss'
import { withRouter } from 'react-router'

const TodoList = props => {
  const { todos, location } = props
  const todoValues = [...todos.values()]
  const filteredTodos =
    location.hash === '#/completed'
      ? todoValues.filter(todo => todo.complete)
      : location.hash === '#/active'
      ? todoValues.filter(todo => !todo.complete)
      : todoValues
  return (
    <section className={'TodoList'}>
      {filteredTodos.size !== 0 && (
        <ul className={'TodoList__list'}>
          {filteredTodos.reverse().map(todo => (
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
export default withRouter(TodoList)
