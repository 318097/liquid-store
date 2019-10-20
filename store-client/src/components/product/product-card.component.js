import React from 'react'
import { connect } from 'react-redux';

import { addToCart } from '../../store/cart/cart.actions';
import './product-card.styles.scss';

const ProductCard = ({ item, addToCart }) => {
  return (
    <div className="card">
      <div className="image">
        <img alt="product" src="https://source.unsplash.com/random/200x250" />
      </div>
      <div className="info">
        <span>
          {item.name}
        </span>
        <span>
          Rs/- {item.price}
        </span>
      </div>
      <button onClick={() => addToCart(item)}>Add to Cart</button>
    </div>
  )
}
const mapDispatchToProps = dispatch => ({
  addToCart: item => dispatch(addToCart(item))
});

export default connect(null, mapDispatchToProps)(ProductCard);
