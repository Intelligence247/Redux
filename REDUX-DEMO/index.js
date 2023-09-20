// import redux from 'redux'
const redux = require('redux')
const createStore = redux.createStore
// Actions
const CAKE_ORDERED = 'CAKE_ORDERED';

function OrderCake(){ 
    return {
    type: CAKE_ORDERED,
    quantity: 1,
}
}
 
const initialState = {
    numOfCake: 10,
}

// (previousState, action) => newState
// Reducers
const reducer = (state = initialState, action) => {
    
    switch (action.type) {
        case CAKE_ORDERED:
        return{
            ...state,
            numOfCake: state.numOfCake - 1,
        };
        default: {
            return state
        }
    }
}

 const store = createStore(reducer)

 console.log("initial state", store.getState())

 const unsubscribe = store.subscribe(() => 
 console.log('update state', store.getState())
 )

 store.dispatch(OrderCake())
 store.dispatch(OrderCake())
 store.dispatch(OrderCake())
 store.dispatch(OrderCake())

 unsubscribe()
