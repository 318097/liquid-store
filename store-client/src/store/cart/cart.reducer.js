import { ADD_TO_CART, TOGGLE_CART_VISIBILITY } from './cart.types';
import { addToCart } from './cart.utils';

const initialState = {
  cart: [],
  cartVisibility: false,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: addToCart(state.cart, action.payload)
      }
    case TOGGLE_CART_VISIBILITY:
      return {
        ...state,
        cartVisibility: !state.cartVisibility
      }
    default:
      return state;
  }
}

export default cartReducer;