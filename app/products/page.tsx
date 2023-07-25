import { getProducts } from '../../database/products';
import FilterProducts from './FilteredProducts';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: { default: 'Vida | Handmade Jewellery' },
  description: 'Dedicated for best quality handmade jewellery',
};

export default async function ProductsPage() {
  const products = await getProducts();

  return <FilterProducts products={products} />;
}
