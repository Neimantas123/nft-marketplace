import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import '../styles/Home.css';
import CardList from '../components/CardList';
import { exploreList } from '../constants/MockupData';
import Footer from '../components/Footer';
import axios from 'axios';

const Home = () => {
  const [firstCarusel, setFirstCarusel] = useState([]);
  const [secondCarusel, setSecondCarusel] = useState([]);
  useEffect(() => {
    const fetchedProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/products`);
        if (Array.isArray(response.data)) {
          const middleIndex = Math.ceil(response.data.length / 2);
          setFirstCarusel(response.data.slice(0, middleIndex));
          setSecondCarusel(response.data.slice(middleIndex));
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
    <>
      <div id="home">
        <Hero list={exploreList} />
        <div id="list-container">
          <CardList
            list={firstCarusel}
            list1={secondCarusel}
            blockName1={'NEW IN'}
            blockName2={'PRODUCTS'}
          />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
