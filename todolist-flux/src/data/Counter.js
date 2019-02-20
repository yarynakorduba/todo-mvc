let _counter = 0

const Counter = {
  increment() {
    return 'id-' + String(_counter++)
  }
}

export default Counter