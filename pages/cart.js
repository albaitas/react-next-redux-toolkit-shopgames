import Head from 'next/head';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../redux/cart.slice';
import styles from '../styles/CartPage.module.css';

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity * item.price, 0);
  };

  return (
    <>
      <Head>
        <title>Cart Page</title>
        <meta name='description' content='Cart page' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <div className={styles.container}>
        {cart.length === 0 ? (
          <h2 className={styles.footer}>Your Cart is Empty!</h2>
        ) : (
          <>
            <div className={styles.header}>
              <div>Image</div>
              <div>Product</div>
              <div>Price</div>
              <div>Quantity</div>
              <div>Actions</div>
              <div>Total Price</div>
            </div>
            {cart.map((item) => (
              <div key={item.product} className={styles.body}>
                <div className={styles.image}>
                  <Image src={item.image} alt='images' height='90' width='65' />
                </div>
                <p>{item.product}</p>
                <p>Eur {item.price}</p>
                <p>{item.quantity}</p>
                <div className={styles.buttons}>
                  <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
                  <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
                  <button onClick={() => dispatch(removeFromCart(item.id))}>x</button>
                </div>
                <p>Eur {(item.quantity * item.price).toFixed(2)}</p>
              </div>
            ))}
            <h2 className={styles.footer}>Grand Total: Eur {getTotalPrice().toFixed(2)}</h2>
          </>
        )}
      </div>
    </>
  );
};

export default CartPage;
