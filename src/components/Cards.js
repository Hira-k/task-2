import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/card1.png'
              h5text='Professional Qualification Program'
              h4text='CILT International Certificate in Logistics and Transport'
              path='/services'
            />
            <CardItem
              src='/images/card2.png'
              h5text='Professional Qualification Program'
              h4text='Incoterms® 2020'
              path='/services'
            />
            <CardItem
              src='/images/card1.png'
              h5text='Professional Qualification Program'
              h4text='CILT International Certificate in Logistics and Transport'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
