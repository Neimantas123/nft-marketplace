import React from 'react';
import '../styles/About.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
function About() {
  return (
    <>
      <Header />
      <div className="about-block">
        <div className="about-text-block">
          <h2>_DIGITAL PASS</h2>
          <p className="digital-block-p" style={{ marginTop: '50px' }}>
            App creates a sustainable luxury shopping method by using NFT
            digital pass, that improves second-market performance and eliminates
            all possible human errors, that might occur in the luxury items
            verification process.
          </p>
          <p className="digital-block-p">
            Buyer can purchase 100% authentic items from luxury fashion brands,
            fine art and together with the purchase - buyer will receive NFT
            digital pass certificate for each item. In this way, we support the
            second-life market performance by using digital passes to prove the
            item’s authentication and traceability.
          </p>
          <p className="digital-block-p">
            All our items are registered on blockchain, which offers a
            sustainable way to improve the traceability of luxury items.
          </p>
          {/* <img
            src="https://cdn.shopify.com/s/files/1/0658/5542/2698/files/futugo-01.png?v=1664966863"
            alt="digital-logo"
            className="logo-digital-bottom"
          /> */}
        </div>
        <div className="about-img-block">
          <img
            src="https://cdn.shopify.com/s/files/1/0658/5542/2698/files/telefonas2.png?v=1665056221"
            alt="about"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
