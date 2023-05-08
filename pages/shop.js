import Head from 'next/head';
import ProductCard from '../components/ProductCard';
import styles from '../styles/ShopPage.module.css';
import { getProducts } from './api/products/index';

export async function getStaticProps() {
  const products = await getProducts();
  return { props: { products } };
}

const ShopPage = ({ products }) => {
  return (
    <>
      <Head>
        <title>Shop Page</title>
        <meta name='description' content='Shop page' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <div className={styles.container}>
        <h2 className={styles.title}>All Results</h2>
        <div className={styles.cards}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ShopPage;
