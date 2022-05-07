import React from 'react'

import pic1 from './pic1.jpg'
import pic2 from './pic2.jpg'
import pic3 from './pic3.jpg'

import './Best.css'

const Best = () => {
    return (
        <div className='Best'>
            <h1>Find Best Rated Properties</h1>
            <div>
                <p><span className='bold'>All</span></p>
                <p>Commercial</p>
                <p>Residential</p>
                <p>Agricultural</p>
            </div>
            <div className='container'>
                <img src={pic1} alt='' />
                <img src={pic2} alt='' />
                <img src={pic3} alt='' />
            </div>
            <button className='btn'>View All</button>
        </div>
    )
}

export default Best