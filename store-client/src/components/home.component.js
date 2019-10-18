import React from 'react';
import ProductCard from './product/product-card.component';
import { data } from '../data';

const Home = () => {
  return (
    <section>
      <h2>Home</h2>
      <div style={{ display: 'flex', alignItems: 'space-between' }}>
        {data.map(item => <ProductCard key={item._id} item={item} />)}
      </div>
    </section>
  )
}

export default Home;
