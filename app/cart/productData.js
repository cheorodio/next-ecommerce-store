export function productData(products, productsInCookie) {
  const newItemsInCart = [];

  productsInCookie.map((item) => {
    const productWithQuantities = products.find(
      (productObject) => productObject.id === item.id,
    );

    newItemsInCart.push({
      ...item,
      ...productWithQuantities,
    });

    return { ...products, quantity: productWithQuantities.quantity };
  });

  return newItemsInCart;
}
