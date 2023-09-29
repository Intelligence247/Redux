const createSlice = require('@reduxjs/toolkit').createSlice


const initialState = {
    numOfIcreams: 30
}
const iceCreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfIcreams--
        },
        restocked: (state, action) => {
            state.numOfIcreams += action.payload
        },
    },
})

module.exports = iceCreamSlice.reducer
module.exports.icecreamActions = iceCreamSlice.actions