import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({ product }) => {
    return (
        <div>
            <Card style={{ marginBottom: '40px' }}>
                <Card.Body>
                    <Link to={`/product/${product._id}`}>
                        <Card.Img src={product.image} />
                    
                        <Card.Title className='card__title' style={{ fontSize: '15px', marginTop:'10px' }}>
                            {product.name}
                        </Card.Title>
                    </Link>

                    <Card.Text>
                        <Rating 
                            value={product.rating}
                        />
                        <p className='text-light' style={{ fontSize: '15px' }}>{product.numReviews} reviews</p>
                    </Card.Text>
                    <Card.Text>$<strong>{product.price}</strong></Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Product
