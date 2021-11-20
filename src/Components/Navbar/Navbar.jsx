import React from 'react';
import './Navbar.css';
import icon from '../Images/icon-cart.svg'
import avatar from '../Images/image-avatar.png'

export default function Navbar() {
    return (
        <div className="navbar">
            <h1>sneakers</h1>
            <ul>
                <li><a href="collection">Collections</a></li>
                <li><a href="men">Men</a></li>
                <li><a href="kids">Women</a></li>
                <li><a href="collection">About</a></li>
                <li><a href="collection">Contact</a></li>
            </ul>
            <div className="right-nav">
                <img className='cart' src={icon} alt="" />
                <img className='avatar' src={avatar} alt="" />
            </div>
        </div>
    )
}
 