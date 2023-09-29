const store = require('./App/store')
const cakeActions = require('./features/cake/CakeSlice').cakeActions
console.log("Initial state", store.getState())
const unsubscribe = store.subscribe(()=> {
    console.log('Updated state ', store.getState())
})

store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered(2))
store.dispatch(cakeActions.restocked(5))
unsubscribe()