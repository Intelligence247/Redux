const redux = require('redux')
const produce =  require("immer").produce
const initialState = {
    name: "Abdullahi",
    address: {
        street: 'Odo Eri Street',
        city: "Ilorin",
        state: 'Kwara',
    },
}

const  STREET_UPDATE = 'STREET_UPDATE'

const actionUpdateStreet = (street) => {
    return {
        type: STREET_UPDATE,
        payload: street,
    }
} 

const reducer = (state = initialState, action)=>{
switch (action.type){
    case STREET_UPDATE:
        // return {
        //     ...state,
        //     address: {
        //         ...state.address,
        //         street: action.payload
        //     },
    // }


        return produce(state, (draft)=>{
            draft.address.street = action.payload
        })
           
    default:
        return state

}
}

const store = redux.createStore(reducer)
console.log("initial State", store.getState())
const unsubscribe = store.subscribe(()=> {
    console.log("Updated State", store.getState())
})
store.dispatch(actionUpdateStreet("NIgeria"))
store.dispatch(actionUpdateStreet("I don't even know"))
unsubscribe()