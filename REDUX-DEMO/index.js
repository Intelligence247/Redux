// import redux from 'redux'
const redux = require('redux')
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators
const combinReducers = redux.combineReducers

const applyMiddleware = redux.applyMiddleware
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()

// Actions
const CAKE_ORDERED = 'CAKE_ORDERED';
const RESTOCK_CAKE = 'RESTOCK_CAKE';
const ICE_CREAM_ORDERED = 'ICE_CREAM_ORDERED'
const RESTOCK_ICE_CREAM = 'RESTOCK_ICE_CREAM'

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

 function OrderIceCream (qty=1){
    return{
        type: ICE_CREAM_ORDERED,
        payload: qty,
    }
 }

 function RestockIceCream(qty=1){
    return {
        type: RESTOCK_ICE_CREAM,
        payload: qty
    }
 }
// const initialState = {
//     numOfCake: 10,
//     numOfIceCream: 30,
// }

// (previousState, action) => newState
// Reducers
// const reducer = (state = initialState, action) => {
    
//     switch (action.type) {
//         case CAKE_ORDERED:
//         return{
//             ...state,
//             numOfCake: state.numOfCake - action.payload,
//         };
//         case RESTOCK_CAKE:
//             return{
//                 ...state,
//                 numOfCake: state.numOfCake + action.payload
//             }
//             case ICE_CREAM_ORDERED:
//                 return{
//                     ...state,
//                     numOfIceCream: state.numOfIceCream - action.payload
//                 }
//                 case RESTOCK_ICE_CREAM:
//                     return{
//                         ...state,
//                         numOfIceCream: state.numOfIceCream + action.payload
//                     }
//         default: {
//             return state
//         }
//     }
// }

const initialCakeState = {
    numOfCake: 10,

}
const initialIcecreamState = {
    numOfIceCream: 30,
    
}

const CakeReducer = (state = initialCakeState, action) => {
    switch(action.type){

    case CAKE_ORDERED:
        return{
            ...state,
            numOfCake: state.numOfCake - action.payload
        }
        case RESTOCK_CAKE:
            return {
                ...state,
                numOfCake: state.numOfCake + action.payload
            }
            default: return state
                
}
}

const IceCreamReducer = (state = initialIcecreamState, action) => {
    switch(action.type){
        case ICE_CREAM_ORDERED:
            return{
                ...state,
                numOfIceCream: state.numOfIceCream - action.payload
            }
            case RESTOCK_ICE_CREAM:
                return{
                    ...state,
                    numOfIceCream: state.numOfIceCream + action.payload

                }
            case CAKE_ORDERED: 
            return{
                ...state,
                numOfIceCream: state.numOfIceCream - action.payload
            }
                default: return state
    }
}
const rootReducers = combinReducers({
    cake: CakeReducer,
    iceCream: IceCreamReducer,
})
 const store = createStore(rootReducers/*, applyMiddleware(logger)*/)

 console.log("initial state", store.getState())

 const unsubscribe = store.subscribe(() => {
 console.log('update state', store.getState())
 }
 )

// store.dispatch(OrderCake(2))
// store.dispatch(RestockCake(3))

const actions = bindActionCreators({OrderCake, RestockCake, OrderIceCream, RestockIceCream}, store.dispatch)
actions.OrderCake(6)
actions.OrderCake()
actions.RestockCake()
actions.OrderIceCream()
actions.RestockIceCream()
 unsubscribe()
