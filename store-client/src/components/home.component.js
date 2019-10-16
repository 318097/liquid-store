import React from 'react'
import ProductCard from './product/product-card.component';

const Home = () => {
  const data = Array(10).fill(0);
  return (
    <section>
      <h2>Home</h2>
      {data.map((item, index) => <ProductCard key={index} />)}
    </section>
  )
}

export default Home;
