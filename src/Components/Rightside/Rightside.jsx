import React from 'react'
import './Rightside.css'
import icon from '../Images/icon-cart.svg'

function Rightside() {
    return (
        <div className="rightside">
            <h5>SNEAKER COMPANY</h5>
            <h2>Fall Limited Edition Sneakers</h2>
            <p>These low-profile sneakers are your casual wear companion. 
                Featuring a durable rubber outer sole, they'll withstand everything the 
                weather can offer.
            </p>
            <div className="price">
                <h4>$125.00</h4><span>50%</span>
            </div>
            <p className='slashed'>$250.00</p>
            <div className="buttons">
                <div className="increment">
                    <button>-</button>
                    <p className='count'>0</p>
                    <button>+</button>
                </div>
                <button className='add'><img src={icon} fill="#fff" alt="cart" className="cart"/> Add to cart</button>
            </div>
            
        </div>
    )
}

export default Rightside
