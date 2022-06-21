import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// import { updateInput } from ''

import Buttons from './buttons'
import SortButtons from './sort-buttons'

const Header = () => {
    return (
        <Container>
            <div className="container">
                <div className="brand">
                    <div>Ecommerce</div>
                    <div>
                        <Link id="brand-name" to="/">
                            Brand
                        </Link>
                    </div>
                </div>
                <div className="sort-buttons">
                    <SortButtons />
                </div>
                <div className="currency-buttons">
                    <Buttons />
                </div>
                <div id="order-count" className="basket-link">
                    <Link to="/basket">
                        <div>0</div>
                    </Link>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    .container {
        background-color: lightblue;
        height: 4rem;
        display: flex;
        .sort-buttons {
            margin: 1rem 1rem auto auto;
        }
        .currency-buttons {
            margin: 1rem 1rem auto auto;
        }
        .basket-link {
            margin: 1rem 0.25rem auto 1rem;
            Link {
                text-decoration: none;
            }
        }
    }
`

export default Header
