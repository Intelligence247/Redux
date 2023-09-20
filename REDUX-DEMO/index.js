// import redux from 'redux'
const redux = require('redux')
const createStore = redux.createStore
// Actions
const CAKE_ORDERED = 'CAKE_ORDERED';
const RESTOCK_CAKE = 'RESTOCK_CAKE';

function OrderCake(qty=1){ 
    return {
    type: CAKE_ORDERED,
    payload: qty,
}
}
 function RestockCake(qty=1){
    return{
        type: RESTOCK_CAKE,
        payload: qty
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
            numOfCake: state.numOfCake - action.payload,
        };
        case RESTOCK_CAKE:
            return{
                ...state,
                numOfCake: state.numOfCake + action.payload
            }
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

 store.dispatch(OrderCake(2))
store.dispatch(RestockCake(3))
 unsubscribe()


//  SSH-KEY Process 
// 1. ssh-keygen -o
// 2.  