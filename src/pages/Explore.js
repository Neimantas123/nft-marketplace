import React, { useEffect, useState } from 'react';
import '../styles/Explore.css';
import Header from '../components/Header';
import AllProducts from './AllProducts';
import axios from 'axios';

const Explore = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchedProducts = async () => {
      try {
        const response = await axios.get('http://localhost:4000/products');
        if (Array.isArray(response.data)) {
          setProducts(response.data);
          console.log(products);
        } else {
          console.error('Unexpected data format received:', response.data);
        }
      } catch (error) {
        console.log(`Error fething products: ${error}`);
      }
    };
    fetchedProducts();
  }, []);
  return (
    <div id="explore">
      <Header />

      <AllProducts list={products} />
    </div>
  );
};

export default Explore;
