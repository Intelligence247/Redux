const { cakeActions } = require('../cake/CakeSlice')

const createSlice = require('@reduxjs/toolkit').createSlice


const initialState = {
    numOfIcecreams: 30
}
const iceCreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfIcecreams--
        },
        restocked: (state, action) => {
            state.numOfIcecreams += action.payload
        },
    },
    // extraReducers: ({
    //     ['cake/ordered']: (state) => {
    //         state.numOfIcecreams--
    //     }
    //    })
    extraReducers: (builder) => {
        builder.addCase(cakeActions.ordered, (state) => {
            state.numOfIcecreams--
        })
    }
})

module.exports = iceCreamSlice.reducer
module.exports.icecreamActions = iceCreamSlice.actions