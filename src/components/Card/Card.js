import React from 'react'
import ProfileImg from '../../assets/images/profile-teacher.jpg';
import './Card.css';

const Card = () => {
  return (
    <div className='card-profile'>
        <div className='d-flex inner'>
            <div className='img-part'>
                <img src={ProfileImg} alt='' />
                <button className='btn contact-btn'>Get Contact</button>
            </div>
            <div className='content d-flex align-items-start flex-column justify-content-between'>
                <h6 className='name'>Kritti Jayswal</h6>
                <p className='sub-title'>It is not important what the teacher teaches – it is important HOW the teacher teaches.</p>
                <div className='other-detail d-flex align-items-center justify-content-between'>
                    <div className='data'>
                        <h5 className='data-about'>Distance</h5>
                        <p className='value'>578 KM</p>
                    </div>
                    <div className='data'>
                        <h5 className='data-about'>Subject</h5>
                        <p className='value'>Maths</p>
                    </div>
                    <div className='data'>
                        <h5 className='data-about'>Mode</h5>
                        <p className='value'>Online</p>
                    </div>
                    <div className='data'>
                        <h5 className='data-about'>Fees</h5>
                        <p className='value'>500</p>
                    </div>
                    <div className='data'>
                        <h5 className='data-about'>Batch size</h5>
                        <p className='value'>10-20</p>
                    </div>
                    <div className='data'>
                        <h5 className='data-about'>Experience</h5>
                        <p className='value'>1 year</p>
                    </div>
                    <div className='data'>
                        <h5 className='data-about'>Time</h5>
                        <p className='value'>5-6PM</p>
                    </div>
                    <div className='data'>
                        <h5 className='data-about'>Rating</h5>
                        <p className='value'>4.6</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card