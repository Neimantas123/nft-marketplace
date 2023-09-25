import React from 'react';
import NFTCard from '../components/NFTCard';
import { useNavigate } from 'react-router-dom';
import '../styles/base/AllProducts.css';
import Footer from '../components/Footer';

function AllProducts({ list }) {
  let navigate = useNavigate();
  return (
    <>
      <h2 className="all-products">PRODUCTS</h2>
      <div className="all-products-block">
        {list.map((item, index) => (
          <NFTCard
            username={item.name}
            productname={item.productName}
            price={item.price}
            nftSrc={item.src}
            id={item._id}
            key={index}
            onClick={() => navigate('/detail', { state: { item: item } })}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default AllProducts;
