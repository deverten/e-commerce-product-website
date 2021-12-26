import React from 'react';
import './Rightside.css';
import icon from '../Images/icon-cart.svg';
import CartContent from '../CartContent/CartContent';
import Svgicons from '../Svgicons';

function Rightside({
  value,
  add,
  onAdd,
  subtract,
  total,
  smallImgs,
  itemNumbers,
  ids,
}) {
  return (
    <div className='rightside'>
      <h5>SNEAKER COMPANY</h5>
      <h2>Fall Limited Edition Sneakers</h2>
      <p>
        These low-profile sneakers are your casual wear companion. Featuring a
        durable rubber outer sole, they'll withstand everything the weather can
        offer.
      </p>
      <div className='price'>
        <h4>$125.00</h4>
        <span>50%</span>
      </div>
      <p className='slashed'>$250.00</p>
      <div className='buttons'>
        <div className='increment'>
          <button onClick={subtract}>-</button>
          <p className='count'>{value}</p>
          <button onClick={add}>+</button>
        </div>
        <button className='add' onClick={onAdd}>
          <div className='svg'>
            <Svgicons className='cart' fill='#fff' />
            Add to cart
          </div>
        </button>
      </div>
    </div>
  );
}

export default Rightside;
