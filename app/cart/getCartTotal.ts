type Product = {
  price: number;
  quantity: number;
};

export default function getCartTotal(product: Product[]) {
  const productsInCart = product;
  return productsInCart.reduce(
    (accumulator, item) => accumulator + item.price * item.quantity,
    0,
  );
}
