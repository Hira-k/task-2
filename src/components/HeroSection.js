import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h4>Professional Qualification Course</h4>
      <h1>
        CILT International
        <br />
        Certificate in Logistics
        <br /> and Transport
      </h1>
      <p>Registration Deadline: 10 October, 2021</p>
      <p>Course Fee: Tk. 20,000</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          ENROLL NOW
        </Button>
        <a className='link' href='/'>
          LEARN MORE
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
