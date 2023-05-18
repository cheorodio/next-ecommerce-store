import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getJewelleryByName } from '../../../database/products';

export const dynamic = 'force-dynamic';

export default function ProductPage({ params }) {
  const singleProduct = getJewelleryByName(params.name);

  if (!singleProduct) {
    notFound();
  }

  return (
    <main>
      <h1>{singleProduct.name}</h1>
      <Image
        src={`/images/${singleProduct.name}.png`}
        width={200}
        height={200}
      />
      this is a {singleProduct.type} carrying.
    </main>
  );
}
