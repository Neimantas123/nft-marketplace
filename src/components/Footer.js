import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className="footer-block">
      <div className="footer">
        <div className="logo">
          <h1>Marketplace</h1>
          <p>
            A new global platform for the physical and digital <br /> luxury
            fashion and art industry.
          </p>
        </div>
        {/* <div className="social">
          <h4>FOLLOW US</h4>
          <div className="icons-block">
            <a
              target="blank"
              href="https://twitter.com/Futugoapp?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
            >
              <img
                className="fotter-icon"
                src="https://shop.futugoapp.com/cdn/shop/files/twitter_pilkas.png?v=1664376303"
                alt="twitter"
              />
            </a>
            <a target="blank" href="https://www.instagram.com/futugoapp/">
              <img
                className="fotter-icon"
                src="https://shop.futugoapp.com/cdn/shop/files/INSTA_pilkas.png?v=1664435057"
                alt="instagram"
              />
            </a>
            <a
              target="blank"
              className="third-icon"
              href="https://disboard.org/server/924997353323237416"
            >
              <img
                className="fotter-icon"
                src="https://shop.futugoapp.com/cdn/shop/files/diskrads.png?v=1665585817"
                alt="discord"
              />
            </a>
          </div>
        </div> */}
      </div>
      <div className="footer-line"></div>
      <p className="copyright">Copyright © 2023</p>
    </div>
  );
}

export default Footer;
