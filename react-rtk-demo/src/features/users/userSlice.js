import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    loading: false,
    user: [],
    error: ''
}

// Generates pending, fulfilled and rejected action types
const url = 'https://jsonplaceholder.typicode.com/users'

export const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
   return axios
.get('https://jsonplaceholder.typicode.com/users')
.then((response) => response.data.map((user)=> user.email))
})

const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: (builder) => {
       builder.addCase(fetchUsers.pending, (state) => {
        state.loading = true
       }) 
       builder.addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false
        state.users = action.payload
        state.error = ''
       })
       builder.addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false
        state.user = []
        state.error = action.error.message
       })
    }
})

export default userSlice.reducer
