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

function Leftside({ handleClick }) {
  const thumbNails = [
    {
      src: thumbnail1,
      id: 1,
    },
    {
      src: thumbnail2,
      id: 2,
    },
    {
      src: thumbnail3,
      id: 3,
    },
    {
      src: thumbnail4,
      id: 4,
    },
  ];
  console.log(thumbNails[0].src);

  const productImages = [
    {
      src: 'product1',
      id: 1,
    },
    {
      src: 'product2',
      id: 2,
    },
    {
      src: 'product3',
      id: 3,
    },
    {
      src: 'product4',
      id: 4,
    },
  ];
  const [smallImgs, setSmallImgs] = useState(thumbNails);
  const [ids, setIds] = useState(0);

  // const imageFunc = ()=> {
  //   if smallImgs.id ===
  // }
  console.log(ids);
  return (
    <div className='leftside'>
      <img className='product1' src={product1} alt='' onClick={handleClick} />
      <div className='products'>
        {smallImgs.map((product) => {
          return (
            <img
              src={product.src}
              alt=''
              className='select'
              key={product.id}
              onClick={() => {
                return setIds((ids) => product.id);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Leftside;
