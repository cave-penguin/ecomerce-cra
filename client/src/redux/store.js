import { configureStore } from '@reduxjs/toolkit'

import prodListSlice from './features/Products/productsList'

const store = configureStore({
    reducer: {
        products: prodListSlice,
    },
})

export default store
