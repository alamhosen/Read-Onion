import React from 'react';
import {Card } from 'react-bootstrap';
import './Product.css'

const Product = ({ product }) => {
    const { name, description, img, price } = product;
    return (
        <div className='card-container'>
            <Card style={{ width: '18rem' }} className='border-0'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <h4>${price}</h4>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;