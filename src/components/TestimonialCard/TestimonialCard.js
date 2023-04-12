import React from 'react';
import './TestimonialCard.css';
import TestImg from '../../assets/images/testi-1.jpg';

const TestimonialCard = () => {
  return (
    <div className='card'>
        <img src={TestImg} alt='' />
        <h5 className='name'>Adon Musk</h5>
        <p className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        <div className='round'></div>
    </div>
  )
}

export default TestimonialCard