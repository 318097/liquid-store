import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';

import { addToCart } from '../../store/cart/cart.actions';
import './product-card.styles.scss';

const ProductCard = ({ item, addToCart }) => {
  const [url, setUrl] = useState(null);

  useEffect(() => {
    fetch('https://api.unsplash.com/photos/random?client_id=f2e1b0faaad5e5c469fc832355985d7416627cacb4bf1feacee1f60159c4d24b&orientation=squarish')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setUrl(data.urls.small);
      })
  }, []);

  return (
    <div className="card">
      <div className="image">
        <img alt="product" src={url} />
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
