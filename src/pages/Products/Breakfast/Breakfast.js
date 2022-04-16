import React from 'react';

const Breakfast = ({product}) => {
    const {name, description, img, price} = product;
    return (
        <div>
            <h2>{name}</h2>
        </div>
    );
};

export default Breakfast;