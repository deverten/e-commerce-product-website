import './App.css';
import React, { useState } from 'react';
import Leftside from './Components/Leftside/Leftside';
import Navbar from './Components/Navbar/Navbar';
import Rightside from './Components/Rightside/Rightside';
import Modal from './Components/Modal.jsx';
import previous from './Components/Images/icon-previous.svg';
import next from './Components/Images/icon-next.svg';
import close from './Components/Images/icon-close.svg';
import product1 from './Components/Images/image-product-1.jpg';
import product2 from './Components/Images/image-product-2.jpg';
import product3 from './Components/Images/image-product-3.jpg';
import product4 from './Components/Images/image-product-4.jpg';
import thumbnail1 from './Components/Images/image-product-1-thumbnail.jpg';
import thumbnail2 from './Components/Images/image-product-2-thumbnail.jpg';
import thumbnail3 from './Components/Images/image-product-3-thumbnail.jpg';
import thumbnail4 from './Components/Images/image-product-4-thumbnail.jpg';

function App() {
  const thumbNails = [
    {
      name: thumbnail1,
    },
    {
      name: thumbnail2,
    },
    {
      name: thumbnail3,
    },
    {
      name: thumbnail4,
    },
  ];
  const productImages = [
    {
      src: product1,
      place: 0,
    },
    {
      src: product2,
      place: 1,
    },
    {
      src: product3,
      place: 2,
    },
    {
      src: product4,
      place: 3,
    },
  ];

  const [isOpen, setisOpen] = useState(false);
  const [smallImgs, setSmallImgs] = useState(thumbNails);
  const [prods, setProds] = useState(productImages);
  const [selected, setSelected] = useState(0);
  const [itemNumbers, setItemNumbers] = useState(0);

  const nextImg = () => {
    if (selected < prods.length - 1) setSelected((selected) => selected + 1);
  };
  const prevImg = () => {
    if (selected > 0 && selected < prods.length)
      setSelected((selected) => selected - 1);
  };
  const increase = () => {
    setItemNumbers((itemNumbers) => itemNumbers + 1);
  };
  const decrease = () => {
    if (itemNumbers > 0) {
      setItemNumbers((itemNumbers) => itemNumbers - 1);
    }
  };
  const calculate = () => {
    return 125 * itemNumbers;
  };

  return (
    <div className='App'>
      <Navbar />
      <div className='section'>
        <Leftside
          handleClick={() => {
            setisOpen(true);
          }}
        />

        <Rightside
          value={itemNumbers}
          add={increase}
          subtract={decrease}
          total={calculate}
        />
      </div>
      <Modal open={isOpen}>
        <div className='bottom'>
          <img src={close} alt='' />
          <div className='carousel'>
            <img src={previous} alt='' className='prev' onClick={prevImg} />
            <img className='product1' src={prods[selected].src} alt='' />
            <img src={next} alt='' className='next' onClick={nextImg} />
          </div>

          <div className='bottom-products'>
            {smallImgs.map((smallImgs, index) => {
              return (
                <img
                  src={smallImgs.name}
                  alt=''
                  className='select'
                  onClick={() => {
                    setSelected(index);
                  }}
                />
              );
            })}
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default App;
