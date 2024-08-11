import React, { useState } from 'react';
import Modal from '../../components/Modal/Modal';
import style from './landing.module.scss';

function CoffeeItem({ coffee }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOrderClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={style.item}>
      <div>
        <img src={coffee.img} alt="coffee" />
      </div>
      <div className={style.itemInfo}>
        <h3>{coffee.title}</h3>
        <p>{coffee.description}</p>
        <p>{coffee.price}</p>
        <button className={style.button} onClick={handleOrderClick}>Order Now</button>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2>{coffee.title}</h2>
        <p>{coffee.description}</p>

        <div className={style.itemsSize}>
          <button className={style.count_button}>
            <p className={style.size}>S</p>
            <p className={style.count}>1s</p>
          </button>

          <button className={style.count_button}>
            <p className={style.size}>M</p>
            <p className={style.count}>2s</p>
          </button>

          <button className={style.count_button}>
            <p className={style.size}>L</p>
            <p className={style.count}>3s</p>
          </button>

          <button className={style.count_button}>
            <p className={style.size}>XL</p>
            <p className={style.count}>4s</p>
          </button>
        </div>

        <p>Total price: {coffee.price}</p>
        <button className={style.button}>Confirm Order</button>
      </Modal>
    </div>
  );
}

export default CoffeeItem;
