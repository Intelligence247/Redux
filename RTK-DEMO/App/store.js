const configureStore = require('@reduxjs/toolkit').configureStore
const cakeReducer = require('../features/cake/CakeSlice')
const iceCreamReducer = require('../features/icecream/icecreamSlice')
const chickenlabReducer = require('../features/chickenLap/oneChickenLap')
const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: iceCreamReducer,
        chickenlab: chickenlabReducer,
    }
})

module.exports = store