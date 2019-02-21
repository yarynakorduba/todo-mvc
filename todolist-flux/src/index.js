import React from 'react'
import ReactDOM from 'react-dom'
import AppContainer from './containers/AppContainer'
import './styles.scss'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <AppContainer />
  </Router>,
  document.getElementById('app')
)
