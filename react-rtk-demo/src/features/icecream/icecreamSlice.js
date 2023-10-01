import { createSlice } from '@reduxjs/toolkit'
import { ordered as cakeOrdered } from '../cake/CakeSlice'


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
        builder.addCase(cakeOrdered, (state) => {
            state.numOfIcecreams--
        })
    }
})

export default iceCreamSlice.reducer
export const {ordered, restocked} = iceCreamSlice.actions