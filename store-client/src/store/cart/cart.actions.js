import { ADD_TO_CART, TOGGLE_CART_VISIBILITY } from './cart.types';

export const toggleCartVisibility = () => ({
  type: TOGGLE_CART_VISIBILITY
});

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product
});