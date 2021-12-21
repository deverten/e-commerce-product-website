import React, { useState } from 'react';
import './Leftside.css';
import product1 from '../Images/image-product-1.jpg';
import product2 from '../Images/image-product-2.jpg';
import product3 from '../Images/image-product-3.jpg';
import product4 from '../Images/image-product-4.jpg';
import thumbnail1 from '../Images/image-product-1-thumbnail.jpg';
import thumbnail2 from '../Images/image-product-2-thumbnail.jpg';
import thumbnail3 from '../Images/image-product-3-thumbnail.jpg';
import thumbnail4 from '../Images/image-product-4-thumbnail.jpg';

function Leftside({ handleClick, smallImgs, onAdd, setIds, ids }) {
  return (
    <div className='leftside'>
      <img className='product1' src={product1} alt='' onClick={handleClick} />
      <div className='products'>
        {smallImgs.map((product) => {
          return (
            <img
              src={product.name}
              alt=''
              className='select'
              key={product.id}
              product={product}
              // onAdd={onAdd}
              onClick={() => {
                setIds(() => `{id: ${product.id}, name: ${product.name} }`);
                console.log(ids);
                // onAdd(product)
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Leftside;
