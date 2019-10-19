export const addToCart = (cartItems, product) => {
  const findProductById = cartItems.find(item => item._id === product._id);
  if (findProductById) {
    return cartItems.map(item => {
      if (item._id === product._id) {
        return {
          ...item,
          quantity: item.quantity + 1
        };
      }
    })
  }

  return [...cartItems, { ...product, quantity: 1 }];
};
