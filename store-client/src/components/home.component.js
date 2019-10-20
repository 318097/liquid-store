import React, { useState, useEffect } from 'react';
import ProductCard from './product/product-card.component';
import { addCollectionAndDocuments, firestore } from '../firebase/firebase.utils';

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // setTimeout(() => addCollectionAndDocuments(), 3000);
    setTimeout(() => {
      const collectionRef = firestore.collection('products');
      collectionRef.onSnapshot(snapshot => {
        const d = snapshot.docs.map(doc => ({ ...doc.data(), _id: doc.id }));
        // console.log(d);
        setData(d);
      });
    }, 3000);
  }, []);

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
