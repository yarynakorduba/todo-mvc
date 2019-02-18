import Model from './TodoAppModel'
import Controller from './TodoAppController'
import View from './TodoAppView'

const model = new Model()
const view = new View(model)
new Controller(model, view)
view.show()
