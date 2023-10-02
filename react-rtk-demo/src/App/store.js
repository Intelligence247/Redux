import { configureStore } from '@reduxjs/toolkit'
// const reduxLogger = require('redux-logger')
import cakeReducer from "../features/cake/CakeSlice"
import iceCreamReducer from '../features/icecream/icecreamSlice'
import chickenlapReducer from '../features/chickenLap/oneChickenLap'
import userReducer from '../features/users/userSlice'
// const logger = reduxLogger.createLogger()

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: iceCreamReducer,
        chickenlap: chickenlapReducer,
        user: userReducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})
export default store