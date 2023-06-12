import Image from 'next/image';
// import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProductById } from '../../../database/products';
import AddToCart from './AddToCart';
import styles from './page.module.scss';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: { default: 'Vida | Handmade Jewellery' },
  description: 'Dedicated for best quality handmade jewellery',
};

export type CookieQuantityItem = {
  id: number;
  quantity: number;
};

type Props = {
  params: { productId: string }; // this is a string because the productId is in the url
};

export default async function SingleProductPage(props: Props) {
  const singleProduct = await getProductById(Number(props.params.productId));
  // const products = await getProducts();
  console.log({ singleProduct });

  if (!singleProduct) {
    notFound();
  }

  return (
    <main>
      <section className={styles.productContainer}>
        {/* <div> */}
        <Image
          data-test-id="product-image"
          src={`/images/products/${singleProduct.name}.avif`}
          width={500}
          height={500}
          className={styles.productImage}
          alt={singleProduct.name}
          // priority={true}
          unoptimized={true}
        />
        {/* </div> */}
        <div className={styles.productInfoContainer}>
          <h1>{singleProduct.name}</h1>
          <h5>{singleProduct.description}</h5>
          <h6>
            Price:{' '}
            <span data-test-id="product-price">{singleProduct.price}</span> EUR
          </h6>
          <p className={styles.quantityTitle}>Quantity</p>
          <div>
            <AddToCart productId={singleProduct.id} />
          </div>
        </div>
      </section>

      {/* <section className={styles.youMayAlsoLikeContainer}>
        <h2>You may also like</h2>
        <div className={styles.productCardsContainer}>
          {products.map((product) => {
            return (
              <div
                key={`product-div-${product.id}`}
                className={styles.productCard}
              >
                <Link
                  data-test-id={`product-${product.id}`}
                  href={`/products/${product.id}`}
                  className={styles.categoryTitle}
                >
                  <Image
                    src={`/images/${product.name}.jpg`}
                    width={200}
                    height={200}
                    alt={product.name}
                    priority
                    unoptimized
                  />
                </Link>
                <div>
                  <Link
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
      </section> */}
    </main>
  );
}
