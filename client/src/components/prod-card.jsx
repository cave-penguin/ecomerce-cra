import React from 'react'
// import { useSelector } from 'react-redux'
import styled from 'styled-components'

const ProdCard = (props) => {
    // const { rate, currency } = useSelector((s) => s.products)
    // console.log(currency, rate)

    return (
        <Container>
            <div>
                <div>
                    <img
                        className="image"
                        src={`${props.prod.image}`}
                        alt={`${props.prod.title}`}
                    />
                </div>
                <div className="prod-attributes">{props.prod.title}</div>
                <div className="prod-attributes">{props.prod.description}</div>
                <div className="prod-attributes">{props.prod.price}</div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    background-color: lightblue;
    border: 2px solid black;
    margin: 1rem;
    width: 10rem;
    max-height: 20rem;
    .prod-attributes {
        padding: 0.25rem;
    }
    .image {
        width: 10rem;
        height: 10rem;
    }
`

export default ProdCard
