import { createSlice } from "@reduxjs/toolkit"

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

export default oneChickenlap.reducer
export const {ordered, restocked} = oneChickenlap.actions