import style from './landing.module.scss';

function CoffeeItem({ coffee }) {
  return (
    <div className={style.item}>
      <div>
        <img src={coffee.img} alt="coffee" />
      </div>
      <div className={style.itemInfo}>
        <h3>{coffee.title}</h3>
        <p>{coffee.description}</p>
        <p>{coffee.price}</p>
        <button>Order Now</button>
      </div>
    </div>
  );
}

export default CoffeeItem;
