import { configureStore } from '@reduxjs/toolkit'
// const reduxLogger = require('redux-logger')
import cakeReducer from "../features/cake/CakeSlice"
import iceCreamReducer from '../features/icecream/icecreamSlice'
import chickenlabReducer from '../features/chickenLap/oneChickenLap'
import userReducer from '../features/users/userSlice'
// const logger = reduxLogger.createLogger()

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: iceCreamReducer,
        chickenlap: chickenlabReducer,
        users: userReducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})
export default store