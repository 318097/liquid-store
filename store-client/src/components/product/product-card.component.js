import React from 'react'
import './product-card.styles.scss';

const ProductCard = () => {
  return (
    <div className="container">
      <div className="image">
        <img alt="product" src="https://source.unsplash.com/random/200x250" />
      </div>
      <div className="info">
        Test Product
      </div>
    </div>
  )
}

export default ProductCard
