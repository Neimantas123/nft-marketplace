import React from 'react';
import NFTCard from './NFTCard';
import '../styles/CardList.css';
import { useNavigate } from 'react-router-dom';
import Carousel from 'react-elastic-carousel';
import { useRef } from 'react';

const CardList = ({
  list,
  list1,
  type = 'horizontal',
  blockName1,
  blockName2,
}) => {
  let navigate = useNavigate();
  const carouselRef = useRef(null);
  let resetTimeout;
  const goExplore = () => {
    navigate('/explore');
  };
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <div className="smth">
      <div
        id="card-list"
        style={{ flexDirection: type == 'horizontal' ? 'row' : 'column' }}
      >
        <div>
          <p id="card-list-header-text"> {blockName1}</p>
          <div className="green-line"></div>
        </div>

        <Carousel
          ref={carouselRef}
          enableAutoPlay={true}
          autoPlaySpeed={4000}
          isRTL={false}
          breakPoints={breakPoints}
          onNextEnd={({ index }) => {
            clearTimeout(resetTimeout);
            resetTimeout = setTimeout(() => {
              carouselRef?.current?.goTo(0);
            }, 4000); // same time
          }}
        >
          {list.map((item, index) => (
            <NFTCard
              username={item.name}
              productname={item.productName}
              price={item.price}
              nftSrc={item.src}
              key={index}
              onClick={() => navigate('/detail', { state: { item: item } })}
            />
          ))}
        </Carousel>
        <button id="explore-home" className="home-explore" onClick={goExplore}>
          More
        </button>
        <div className="marketplaceBlock">
          <div className="marketplaceContetnBlock">
            <img
              className="marketplaceImage"
              src="https://cdn.shopify.com/s/files/1/0658/5542/2698/files/woman-first-page.png?v=1676373559"
              alt="markteplace"
            />
            <div className="marketplaceText">
              <h2>MARKETPLACE IN THE METAVERSE</h2>
              <div className="green-line-meta"></div>
              <p>
                The world‘s first luxury fashion and fine art marketplace that
                is suitable for the metaverse. Only high-end NFT wearables and
                NFT art. We transform the luxury world by making it digital!
              </p>
              <p>
                We have a mission to create the all-in-one platform that is an
                e-commerce platform (web 2.0), a digital marketplace in the
                metaverse (web 3.0) and a social network designed exclusively
                for luxury lovers.
              </p>
              <p>
                It will be a modern marketplace for luxury physical goods and
                digital items, built by using blockchain solutions for product
                authentication, traceability and sustainable shopping. Offering
                the best shopping experience with virtual fitting rooms,
                livestream shopping events, fashion shows & 3D product view. A
                platform where users can not only shop but also learn, connect,
                discuss and interact with others not only in the real world, but
                in the meta world as well.
              </p>

              <p>
                It will be a modern marketplace for luxury physical goods and
                digital items, built by using blockchain solutions for product
                authentication, traceability and sustainable shopping. Offering
                the best shopping experience with virtual fitting rooms,
                livestream shopping events, fashion shows & 3D product view. A
                platform where users can not only shop but also learn, connect,
                discuss and interact with others not only in the real world, but
                in the meta world as well.
              </p>
              <button id="explore-marketplace" onClick={goExplore}>
                Explore
              </button>
            </div>
          </div>
        </div>
        <div>
          <p id="card-list-header-text"> {blockName2}</p>
          <div className="green-line"></div>
        </div>

        <Carousel
          ref={carouselRef}
          enableAutoPlay={true}
          autoPlaySpeed={4000}
          isRTL={false}
          breakPoints={breakPoints}
          onNextEnd={({ index }) => {
            clearTimeout(resetTimeout);
            resetTimeout = setTimeout(() => {
              carouselRef?.current?.goTo(0);
            }, 4000); // same time
          }}
        >
          {list1.map((item, index) => (
            <NFTCard
              username={item.name}
              productname={item.productName}
              price={item.price}
              nftSrc={item.src}
              key={index}
              onClick={() => navigate('/detail', { state: { item: item } })}
            />
          ))}
        </Carousel>
        <button id="explore-home" className="home-explore" onClick={goExplore}>
          More
        </button>
      </div>
    </div>
  );
};

export default CardList;
