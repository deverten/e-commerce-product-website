import React from 'react'
import './Leftside.css'
import product1 from '../Images/image-product-1.jpg'
import product2 from '../Images/image-product-2.jpg'
import product3 from '../Images/image-product-3.jpg'
import product4 from '../Images/image-product-4.jpg'
import thumbnail1 from '../Images/image-product-1-thumbnail.jpg'
import thumbnail2 from '../Images/image-product-2-thumbnail.jpg'
import thumbnail3 from '../Images/image-product-3-thumbnail.jpg'
import thumbnail4 from '../Images/image-product-4-thumbnail.jpg'

function Leftside({handleClick}) {


    
    const thumbNails = [
        {
            src: "thumbnail1"
        },
        {
            src: "thumbnail2"
        },
        {
            src: "thumbnail3"
        },
        {
            src: "thumbnail4"
        }
    ];
    console.log(thumbNails[0].src)
    
    const productImages = [
        {
            src: 'product1'
        },
        {
            src: 'product2'
        },
        {
            src: 'product3'
        },
        {
            src: 'product4'
        }
    ]

    
    return (
        <div className="leftside">
            <img className="product1" src={product1} alt=""
            onClick={handleClick} />
            <div className="products">
                <img src={thumbnail1} alt="" className="select"
                     />
                <img src={thumbnail2} alt="" className="select" />
                <img src={thumbnail3} alt="" className="select" />
                <img src={thumbnail4} alt="" className="select" />
            </div>
        </div>
    )
}

export default Leftside
