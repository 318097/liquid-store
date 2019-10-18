export const addToCart = (cart, product) => {
  const findProductById = cart.find(item => item._id === product._id);
  if (findProductById) {
    return cart.map(item => {
      if (item._id === product._id) {
        return {
          ...item,
          quantity: item.quantity + 1
        };
      }
    })
  }

  return [...cart, { ...product, quantity: 1 }];
};
