import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { API_URL } from '../../../apiUrl'

const initialState = {
    currency: {},
    prodList: [],
    rate: '',
}

export const getCurrency = createAsyncThunk('products', async () => {
    const { data } = await axios(`${API_URL}/api/v1/currency`)
    // console.log(data)
    return data
})

export const getProductList = createAsyncThunk(
    'products',
    async (/* _, { getState } */) => {
        // const { prodList } = getState().products
        // console.log(prodList)
        const { data } = await axios(`${API_URL}/api/v1/products`)
        // console.log(data)
        return data
    }
)

export const prodListSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getRate(state, action) {
            state.rate = action.payload
        },
    },
    extraReducers: {
        [getCurrency.fulfilled]: (state, action) => {
            state.currency = action.payload
        },
        [getProductList.fulfilled]: (state, action) => {
            state.prodList = action.payload
        },
    },
})

export const { getRate } = prodListSlice.actions
export default prodListSlice.reducer
