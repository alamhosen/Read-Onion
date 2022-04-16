import React from 'react';
import './Banner.css'
import background from '../../images/bannerbackground.png'

const Banner = () => {
    return (

        <div className='banner-container'>
            <div className='banner-text'>
            <h1 >Best Food Waiting For Your Belly</h1>
            <div className="input-group mb-3 w-50 mx-auto">
                <input type="text" className="form-control border-0 rounded-pill" placeholder="Search your items" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button class="btn btn-danger rounded" type="button" id="button-addon2">Search</button>
            </div>
            </div>

        </div>

    );
};

export default Banner;