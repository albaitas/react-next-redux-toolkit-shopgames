import Link from 'next/link';
import styles from '../styles/Header.module.css';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigation = [
    { id: 1, title: 'Home', path: '/' },
    { id: 2, title: 'Shop', path: '/shop' },
    { id: 3, title: 'Cart', path: '/cart' }
  ];

  const { pathname } = useRouter();
  const cart = useSelector((state) => state.cart);

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>GAMES SHOP</div>
      <div className={styles.navlinks}>
        {navigation.map(({ id, title, path }) =>
          title === 'Cart' ? (
            <Link key={id} href={path}>
              <div className={pathname === path ? styles.active : ''}>
                {title}
                {cart.length > 0 && <span className={styles.quantity}>{cart.reduce((a, c) => a + c.quantity, 0)}</span>}
              </div>
            </Link>
          ) : (
            <Link key={id} href={path}>
              <div className={pathname === path ? styles.active : ''}>{title}</div>
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default Header;
