import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Orders.css';

function Order() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const userId = '650302a848402d166cfd9d51';

  const handleGetPass = (order) => {
    axios
      .post('http://localhost:4000/getPass', {
        name: order.name,
        productName: order.productName,
        price: order.price,
        id: order._id,
        src: order.src,
        size: order.size,
        country: order.country,
        date: order.date,
      })
      .then((response) => {
        console.log('Response from server:', response.data);
      })
      .catch((error) => {
        console.error('There was an error:', error);
      });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:4000/orders?userId=${userId}`)
      .then((response) => {
        setOrders(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <Header />
      <div className="orders-block">
        <div className="orders-content">
          <h2>YOUR ORDERS</h2>
          <ul className="order-list">
            {orders.map((order) => (
              <li key={order._id} className="single-order">
                <img src={order.src} alt={order.productName} width="100" />
                <div className="order-table">
                  <p className="order-colum first">
                    <span className="order-detail-name ">Product Brand:</span>{' '}
                    <span className="order-details">{order.name}</span>
                  </p>
                  <p className="order-colum second">
                    <span className="order-detail-name">Product Name:</span>
                    <span className="order-details">
                      {order.productName}
                    </span>{' '}
                  </p>
                  <p className="order-colum">
                    <span className="order-detail-name">Price: </span>
                    <span className="order-details">$ {order.price}</span>
                  </p>
                  <button
                    className="get-pass-button"
                    id="getPass"
                    onClick={() => handleGetPass(order)}
                  >
                    Get pass
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Order;
