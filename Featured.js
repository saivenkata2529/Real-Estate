import React from 'react'

import './Featured.css'

import House1 from './house1.jpg'
import Bed1 from './bed1.jpg'
import Bed2 from './bed2.jpg'
import Kitchen from './kitchen1.jpg'
import Bathroom from './Bathroom1.jpg'

import House2 from './house2.jpg'
import Bed3 from './Bed3.jpg'
import Bed4 from './Bed4.jpg'
import Bathroom2 from './Bathroom2.jpg'
import LivingRoom from './Livingroom.jpg'

const Featured = () => {
    return (
        <div className='Featured'>
            <h1 className='Featured-text'>Top Featured Listings</h1>
            <p className='Featured-text'>Selected listings by City, State, & pincode based on views.</p>
            <div className='container'>
                <img className='span-3 image-grid-row-2' src={House1} alt='' />
                <img src={Bed1} alt='' />
                <img src={Bed2} alt='' />
                <img src={Kitchen} alt='' />
                <img src={Bathroom} alt='' />
                <div className='span-3 img-details'>
                    <div className='top'>
                        <h2>123 Andhra Pradesh, Gnt</h2>
                        <p>House for Sale</p>
                        <p className='price'>20L</p>
                    </div>
                    <div className='info-grid'>
                        <div>
                            <div className='info'>
                                <p className='bold'>Bedrooms:</p><p>5</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>Bathrooms:</p><p>4</p>
                            </div>
                        </div>
                        <div>
                            <div className='info'>
                                <p className='bold'>Square Feet:</p><p>8,138</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>Est Payment:</p><p>14,797/mo</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='span-2 right-img-details'>
                    <p>A beautiful modern day home in the city with a full-size pool. Spacious and luxurious home located in Andhra Pradesh. Including media room, workout facility, and built-in Gnt. </p>
                    <button className='btn'>View Listing</button>
                </div>
            </div>

 
            <div className='container'>
                <img className='order-2' src={Bed3} alt='' />
                <img className='order-3' src={Bed4} alt='' />

                <img className='span-3 image-grid-row-2 order-1' src={House2} alt='' />


                <img className='order-4' src={Bathroom2} alt='' />
                <img className='order-5' src={LivingRoom} alt='' />

                <div className='span-2 right-img-details order-7'>
                    <p>A beautiful modern day home in the city with a full-size pool. Spacious and luxurious home located in Andhra Pradesh. Including media room, workout facility, and built-in Gnt. </p>
                    <button className='btn'>View Listing</button>
                </div>


                <div className='span-3 img-details order-6'>
                    <div className='top'>
                        <h2>123 Andhra Pradesh, Gnt</h2>
                        <p>House for Sale</p>
                        <p className='price'>2,677,000</p>
                    </div>
                    <div className='info-grid'>
                        <div>
                            <div className='info'>
                                <p className='bold'>Bedrooms:</p><p>5</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>Bathrooms:</p><p>4</p>
                            </div>
                        </div>
                        <div>
                            <div className='info'>
                                <p className='bold'>Square Feet:</p><p>8,138</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>Est Payment:</p><p>14,797/mo</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Featured