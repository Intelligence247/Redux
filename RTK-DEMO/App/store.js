const configureStore = require('@reduxjs/toolkit').configureStore
const cakeReducer = require('../features/cake/CakeSlice')
const store = configureStore({
    reducer: {
        cake: cakeReducer,
    }
})

module.exports = store