import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import ProdCard from '../components/prod-card'
import {
    getProductList,
    getCurrency,
} from '../redux/features/Products/productsList'

const Main = () => {
    const dispatch = useDispatch()
    const { prodList } = useSelector((s) => s.products)
    const { currency } = useSelector((s) => s.products)
    console.log('currency', currency)

    useEffect(() => {
        dispatch(getProductList())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // useEffect(() => {
    //     dispatch(getCurrency())
    // })

    return (
        <Container>
            <div className="prod-card">
                {prodList.length > 0 &&
                    prodList?.map((prod) => (
                        <div key={prod.id}>
                            <ProdCard prod={prod} />
                        </div>
                    ))}
            </div>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    .prod-card {
        display: flex;
        flex-flow: row wrap;
        background-color: lightgreen;
    }
`

export default Main
