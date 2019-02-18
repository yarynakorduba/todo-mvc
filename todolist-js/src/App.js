import React, { Component } from 'react'
import { hot } from 'react-hot-loader'


class App extends Component {

  UNSAFE_componentWillMount() {
    return 0
  }
  render() {
    return (
      <div>
        <h1>Hello World :) from dev server</h1>
      </div>
    )
  }
}

const hotFunction = hot(module)
export default hotFunction(App)
