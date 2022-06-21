import React from 'react'
import { useDispatch } from 'react-redux'

import { getCurrency, getRate } from '../redux/features/Products/productsList'

const Buttons = () => {
    const dispatch = useDispatch()

    const onClick = (str) => {
        dispatch(getCurrency())
        dispatch(getRate(str))
    }

    return (
        <div>
            <button type="button" onClick={() => onClick('USD')}>
                USD
            </button>
            <button type="button" onClick={() => onClick('CAD')}>
                CAD
            </button>
            <button type="button" onClick={() => onClick('EUR')}>
                EUR
            </button>
        </div>
    )
}

export default Buttons
