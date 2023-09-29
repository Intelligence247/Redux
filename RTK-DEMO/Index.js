const store = require('./App/store')
const cakeActions = require('./features/cake/CakeSlice').cakeActions
const icecreamActions = require('./features/icecream/icecreamSlice').icecreamActions
const chickenlapActions = require('./features/chickenLap/oneChickenLap').chickenlapActions
console.log("Initial state", store.getState())
const unsubscribe = store.subscribe(()=> {
    console.log('Updated state ', store.getState())
})

store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.restocked(2))

store.dispatch(icecreamActions.ordered())
store.dispatch(icecreamActions.ordered())
store.dispatch(icecreamActions.ordered())
store.dispatch(icecreamActions.restocked(3))

// store.dispatch(chickenlapActions.ordered())
// store.dispatch(chickenlapActions.ordered())
// store.dispatch(chickenlapActions.ordered())
// store.dispatch(chickenlapActions.restocked())


unsubscribe()