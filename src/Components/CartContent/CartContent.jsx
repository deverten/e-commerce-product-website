import React from 'react';
import './CartContent.css';
import thumbnail1 from '../Images/image-product-1-thumbnail.jpg';
import del from '../Images/icon-delete.svg';

function CartContent({ onAdd, onRemove, cartItems, calculate }) {
  return (
    <div className='content'>
      <h3>Cart</h3>
      <hr />
      <div className='content-2'>
        {cartItems === 0 ? (
          <p>Cart is Empty</p>
        ) : (
          <div className='content2'>
            <img className='thumb' src={thumbnail1} alt='' />
            <p>
              Fall Limited Edition Sneakers $125.00 * {cartItems}
              <span className='amount'>${calculate}</span>
            </p>
            <img className='del' src={del} alt='' />{' '}
          </div>
        )}
      </div>
      <button className='check'>Checkout</button>
    </div>
  );
}

export default CartContent;
