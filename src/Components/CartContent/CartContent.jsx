import React from 'react';
import './CartContent.css';
import thumbnail1 from '../Images/image-product-1-thumbnail.jpg';
import thumbnail2 from '../Images/image-product-2-thumbnail.jpg';
import thumbnail3 from '../Images/image-product-3-thumbnail.jpg';
import thumbnail4 from '../Images/image-product-4-thumbnail.jpg';
import del from '../Images/icon-delete.svg';

function CartContent({ smallImgs, onAdd, onRemove, cartItems }) {
  return (
    <>
      <h3>Cart</h3>
      {cartItems.map((items) => {
        return (
          <div className='content'>
            <img className='thumb' src={thumbnail1} alt='' />
            <p>
              Fall Limited Edition Sneakers $125.00 * 3{' '}
              <span className='amount'>$375.00</span>
            </p>
            <div>
              <img src={del} alt='' />{' '}
            </div>
            <button>Checkout</button>
          </div>
        );
      })}
    </>
  );
}

export default CartContent;
