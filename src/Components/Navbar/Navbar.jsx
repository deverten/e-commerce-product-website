import React, { useState } from 'react';
import './Navbar.css';
import icon from '../Images/icon-cart.svg';
import close from '../Images/icon-close.svg';
import avatar from '../Images/image-avatar.png';
import logo from '../Images/logo.svg';
import CartContent from '../CartContent/CartContent';

export default function Navbar({ smallImgs, cartItems, onAdd, calculate }) {
  return (
    <>
      <div className='navbar'>
        <div className='left-nav'>
          <div className='hamburger'>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
          </div>
          <div>
            <img className='logo' src={logo} alt='' />
          </div>
          <nav className='menu hidden'>
            <div className='slide-menu'>
              <div>
                <img id='menuCloseBtn' src={close} alt='' />
              </div>

              <ul>
                <li>
                  <a href='collection'>Collections</a>
                </li>
                <li>
                  <a href='men'>Men</a>
                </li>
                <li>
                  <a href='kids'>Women</a>
                </li>
                <li>
                  <a href='collection'>About</a>
                </li>
                <li>
                  <a href='collection'>Contact</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className='right-nav'>
          <div className='cart-div'>
            <img className='cart' src={icon} alt='' />
            <span className='cart-num'>{cartItems}</span>
          </div>
          <img className='avatar' src={avatar} alt='' />

          <CartContent
            className='cartcontent'
            onAdd={onAdd}
            // onRemove={onRemove}
            cartItems={cartItems}
            calculate={calculate}
          />
        </div>
      </div>
    </>
  );
}
