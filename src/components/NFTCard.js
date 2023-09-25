import React, { useEffect, useState } from 'react';
import '../styles/NFTCard.css';
import { FaEthereum } from 'react-icons/fa';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { ColorExtractor } from 'react-color-extractor';
import Card from './base/Card';
import Button from './base/Button';
import { Colors } from '../constants/Colors';

import { ModelViewerElement } from '@google/model-viewer';
import { useARStatus } from '../hooks/isARStatus';

const NFTCard = ({ username, productname, price, nftSrc, onClick }) => {
  const [isLike, setIsLike] = useState(false);
  const [colors, setColors] = useState([]);

  const isARSupport = useARStatus(nftSrc);

  useEffect(() => {
    console.log(isARSupport);
  }, []);

  const like = () => setIsLike(!isLike);

  const getColors = (colors) => {
    setColors((c) => [...c, ...colors]);
    //console.log(colors);
  };

  return (
    <Card
      blurColor={colors[0]}
      onClick={onClick}
      child={
        <>
          {isARSupport ? (
            <model-viewer
              ar-scale="auto"
              ar
              ar-modes="webxr scene-viewer quick-look"
              id="reveal"
              loading="eager"
              camera-controls
              auto-rotate
              src={nftSrc}
            >
              {' '}
            </model-viewer>
          ) : (
            <>
              <ColorExtractor getColors={getColors}>
                <img className="nft-image" src={nftSrc} />
              </ColorExtractor>
            </>
          )}
          <div className="wrapper">
            <div className="info-container">
              <p className="owner"> {username}</p>
              <p className="name">{productname}</p>
            </div>

            <div className="price-container"></div>
          </div>
          <div className="buttons">
            {/* <button className="buy-now">Buy Now</button> */}
            <Button
              color={Colors.buttons.primary}
              textContent="Check"
              onClick={onClick}
            />
            <div className="like-container">
              <p className="price"> € {price}</p>
              {/* <button className="like" onClick={like}>
                {!isLike ? (
                  <AiOutlineHeart size="30" color="black" />
                ) : (
                  <AiFillHeart
                    size="30"
                    style={{
                      stroke: `-webkit-linear-gradient(
                    to bottom,
                    #38ef7d,
                    #11998e
                  );`,
                    }}
                    color="#00f5c966"
                  />
                )}
              </button> */}
            </div>
          </div>
        </>
      }
    ></Card>
  );
};

export default NFTCard;
