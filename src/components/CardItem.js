import React from 'react';
import { Button } from './Button';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <a className='cards__item__link' href={props.path}>
          <figure className='cards__item__pic-wrap'>
            <p className='reg'></p>
            <img
              className='cards__item__img'
              alt='TravelImage'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5>{props.h5text}</h5>
            <h4 className='cards__item__text'>{props.h4text}</h4>
            <div className='card__icons'>
              <div className='col-4'>
                <i class='far fa-clock'>6 Months</i>
              </div>
              <div className='col-4'>
                <i class='fas fa-user-friends'>24 Seats</i>
              </div>
              <div className='col-4'>
                <i class='far fa-calendar-minus'>20 Oct, 2021</i>
              </div>
            </div>
            <div>
              <Button
                className='btns'
                buttonStyle='btn--primary'
                buttonSize='btn--medium'
              >
                ENROLL NOW
              </Button>
            </div>
          </div>
        </a>
      </li>
    </>
  );
}

export default CardItem;
