import React from 'react'
import './Banner.css'
function Banner() {
    return (
        <div>
            <div className='banner'>
                <div className='content'>
                    <span className='title'>Stranger Things</span>
                    <div className='banner-buttons'>
                        <button className='button'>Play</button>
                        <button className='button'>My List</button>
                    </div>
                    <div className='description'>
                        <span className='description-body'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</span>
                    </div>
                </div>
                <div className="fade"></div>
            </div>
        </div>
    )
}

export default Banner
