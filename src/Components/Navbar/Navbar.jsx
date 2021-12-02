import React, { useState } from 'react';
import './Navbar.css';
import icon from '../Images/icon-cart.svg';
import avatar from '../Images/image-avatar.png';
import logo from '../Images/logo.svg';
import CartContent from '../CartContent/CartContent';

export default function Navbar() {
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (smallImgs) => {
    const exist = cartItems.find((x) => x.id === smallImgs.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === smallImgs.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...smallImgs, qty: 1 }]);
    }
  };

  const onRemove = (smallImgs) => {
    const exist = cartItems.find((x) => x.id === smallImgs.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== smallImgs.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === smallImgs.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <>
      <div className='navbar'>
        <div className='left-nav'>
          <div>
            <img className='logo' src={logo} alt='' />
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

        <div className='right-nav'>
          <div className='cart-div'>
            <img className='cart' src={icon} alt='' />
            <span className='cart-num'>3</span>
          </div>
          <img className='avatar' src={avatar} alt='' />

          <CartContent
            className='cartcontent'
            onAdd={onAdd}
            onRemove={onRemove}
            cartItems={cartItems}
          />
        </div>
      </div>
    </>
  );
}
