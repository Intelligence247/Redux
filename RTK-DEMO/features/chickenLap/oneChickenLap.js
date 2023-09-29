const createSlice = require("@reduxjs/toolkit").createSlice

const initialState = {
    numOfChickenLap: 14,
}

const oneChickenlap = createSlice({
    name: 'chickenLap',
    initialState,
    reducers: {
        ordered: (state) => {
          state.numOfChickenLap--
        },
        restocked: (state, action) => {
           state.numOfChickenLap += action.payload 
        }
    }
})

module.exports = oneChickenlap.reducer
module.exports.chickenlapActions = oneChickenlap.actions