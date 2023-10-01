const configureStore = require('@reduxjs/toolkit').configureStore
// const reduxLogger = require('redux-logger')
const cakeReducer = require('../features/cake/CakeSlice')
const iceCreamReducer = require('../features/icecream/icecreamSlice')
const chickenlabReducer = require('../features/chickenLap/oneChickenLap')
const userReducer = require('../features/users/userSlice')
// const logger = reduxLogger.createLogger()

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: iceCreamReducer,
        chickenlab: chickenlabReducer,
        users: userReducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

module.exports = store