import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProductById, products } from '../../../database/products';
import AddToCartForm from './AddToCartForm';
import styles from './page.module.scss';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: { default: 'Vida | Handmade Jewellery' },
  description: 'Dedicated for best quality handmade jewellery',
};

export default function SingleProductPage({ params }) {
  const singleProduct = getProductById(Number(params.productId));
  console.log(singleProduct);

  if (!singleProduct) {
    notFound();
  }
  return (
    <main>
      <section className={styles.productContainer}>
        <div>
          <Image
            data-test-id="product-image"
            src={`/images/${singleProduct.name}.jpg`}
            width={500}
            height={500}
            className={styles.productImage}
          />
        </div>

        <div className={styles.productInfoContainer}>
          <h1>{singleProduct.name}</h1>
          <h5>{singleProduct.description}</h5>
          <h6 data-test-id="product-price">€ {singleProduct.price}</h6>
          <p className={styles.quantityTitle}>Quantity</p>
          <div>
            <AddToCartForm productId={singleProduct.id} />
          </div>
        </div>
      </section>

      <section className={styles.youMayAlsoLikeContainer}>
        <h2>You may also like</h2>
        <div className={styles.productCardsContainer}>
          {products.map((product) => {
            return (
              <div
                key={`product-div-${product.id}`}
                className={styles.productCard}
              >
                <Link
                  data-test-id="product-<product id>"
                  href={`/products/${product.id}`}
                  className={styles.categoryTitle}
                >
                  <Image
                    src={`/images/${product.name}.jpg`}
                    width={200}
                    height={200}
                    alt=""
                  />
                </Link>
                <div>
                  <Link
                    data-test-id="product-<product id>"
                    href={`/products/${product.id}`}
                    className={styles.categoryTitle}
                  >
                    {product.category}
                  </Link>
                  <div>
                    <Link href={`/products/${product.id}`}>{product.name}</Link>
                    <Link href={`/products/${product.id}`}>
                      <p>€ {product.price}</p>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
