import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.scss'

const isActive = (hash, hrefToCompare) => () => hash === hrefToCompare

class Footer extends React.PureComponent {
  render() {
    const { todos, location, onClearCompletedTodos } = this.props
    if (todos.size === 0) {
      return null
    }
    const remainingTodos = todos.filter(todo => !todo.complete).size
    const phrase = remainingTodos === 1 ? ' item left' : ' items left'
    return (
      <footer className={'Footer'}>
        <span className={'Footer__count'}>
          <strong>{remainingTodos}</strong>
          {phrase}
        </span>
        <span>
          <NavLink
            to={'/#/'}
            isActive={isActive(location.hash, '#/')}
            className={'Footer__navlink'}
            activeClassName={'Footer__navlink_active'}
          >
            All
          </NavLink>
          <NavLink
            to={'/#/active'}
            isActive={isActive(location.hash, '#/active')}
            className={'Footer__navlink'}
            activeClassName={'Footer__navlink_active'}
          >
            Active
          </NavLink>
          <NavLink
            to={'/#/completed'}
            isActive={isActive(location.hash, '#/completed')}
            className={'Footer__navlink'}
            activeClassName={'Footer__navlink_active'}
          >
            Completed
          </NavLink>
        </span>
        <button
          className={'Footer__clear'}
          onClick={() => onClearCompletedTodos()}
        >
          Clear Completed
        </button>
      </footer>
    )
  }
}
export default Footer
