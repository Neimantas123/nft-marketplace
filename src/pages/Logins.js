import React, { useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';
import '../styles/logins.css';

const Logins = () => {
  const { logIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/login', {
        email,
        password,
      });

      if (response.status === 200) {
        logIn();
      }

      goHome();
    } catch (err) {
      setError(err.response.data || 'Error logging in');
    }
  };

  return (
    <>
      <Header />
      <div className="login-block">
        <div className="login-card">
          {/* {error && <div style={{ color: 'red' }}>{error}</div>} */}
          <h2 className="login">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="input">
              <label>Email</label>
              <input
                className="login-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input">
              <label>Password</label>
              <input
                className="login-input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div>
              <div className="login-button-block">
                <button type="submit" className="login-button">
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Logins;
