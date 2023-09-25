import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useEthers, useEtherBalance } from '@usedapp/core';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import '../styles/Header.css';

const Header = () => {
  const { isLoggedIn, logOut } = useAuth();
  const { activateBrowserWallet, account } = useEthers();
  const etherBalance = useEtherBalance(account);
  let navigate = useNavigate();
  const goExplore = () => {
    navigate('/explore');
  };

  const handleLogout = () => {
    logOut();

    navigate('/');
  };

  const handleWallet = () => {
    activateBrowserWallet();
  };

  return (
    <div id="header">
      <Link to="/" id="logo">
        <h1>Marketplace</h1>
      </Link>

      <div id="link-containers">
        <Link
          style={{ textDecoration: 'none', marginLeft: '0px' }}
          to="/explore"
        >
          Products
        </Link>

        <Link style={{ textDecoration: 'none', marginLeft: '0px' }} to="/about">
          About
        </Link>
        {isLoggedIn ? (
          <>
            <Link to="/orders">Orders</Link>
            <Link to="/" id="connect-wallet" onClick={handleLogout}>
              Logout
            </Link>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}

        <button id="connect-wallet" onClick={handleWallet}>
          {!account ? 'Connect Wallet' : account}
        </button>
      </div>
    </div>
  );
};

export default Header;
