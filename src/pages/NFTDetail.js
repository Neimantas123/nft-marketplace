import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import { useLocation, Navigate } from 'react-router';
import Card from '../components/base/Card';
import '../styles/NFTDetail.css';
import { ColorExtractor } from 'react-color-extractor';
import Button from '../components/base/Button';
import { useMobile } from '../hooks/isMobile';
import { useARStatus } from '../hooks/isARStatus';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';

import 'reactjs-popup/dist/index.css';

const NFTDetail = () => {
  const isMobile = useMobile();

  const [colors, setColors] = useState([]);

  const [isLike, setIsLike] = useState(false);

  const like = () => setIsLike(!isLike);

  const getColors = (colors) => {
    setColors((c) => [...c, ...colors]);
  };

  const navigate = useNavigate();

  const { state } = useLocation();

  useEffect(() => {
    setColors([]);
  }, [state]);

  const isARSupport = useARStatus(state.item.src);

  console.log(state.item);

  //!! aciklama karakter sayisi sinirlanmali.
  //!! scroll sorununa cozum bulunmali.

  return (
    <>
      <div>
        <Header />
        <div id="nft-detail-card-wrapper">
          <Card
            width={isMobile ? '100%' : '65vw'}
            height={isMobile ? '700px' : 'auto'}
            blurColor={colors[0]}
            child={
              //Detail Content
              <div id="detail-content">
                {isARSupport ? (
                  <model-viewer
                    ar-scale="auto"
                    ar
                    ar-modes="webxr scene-viewer quick-look"
                    id="arDetail"
                    loading="eager"
                    camera-controls
                    auto-rotate
                    src={state.item.src}
                  >
                    {' '}
                  </model-viewer>
                ) : (
                  <>
                    {' '}
                    <ColorExtractor getColors={getColors}>
                      <img id="detail-image" src={state.item.src} />
                    </ColorExtractor>
                  </>
                )}
                <span className="close">
                  <Link to="/explore">X</Link>
                </span>
                <div id="detail-info" style={{}}>
                  <div id="detail-info-container">
                    <p id="collection">
                      {' '}
                      {state.item.name}, {state.item.productName}
                    </p>

                    {state.item.composition &&
                      state.item.composition.map((comp, index) => (
                        <p className="composition-description" key={index}>
                          {comp}
                        </p>
                      ))}
                    <div className="space-between">
                      <div>
                        Price: <b>{state.item.price}</b> EUR
                      </div>
                    </div>
                    <div className="space-between">
                      <div>Size: {state.item.size}</div>
                    </div>
                    <div className="space-between">
                      <div>Color: {state.item.color}</div>
                    </div>
                    <div className="space-between">
                      <div>
                        Pass Link:{' '}
                        <a
                          className="pass-link"
                          target="blank"
                          href={state.item.link}
                        >
                          {state.item.link}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div id="detail-controls">
                    <Popup
                      trigger={<button id="wiew">Wiew Pass</button>}
                      modal
                      nested
                    >
                      {(close) => (
                        <div className="modal">
                          {/* <button className="modal-close" onClick={close}>
                            &times;
                          </button>
                          <div className="modal-header">
                            {' '}
                            {state.item.name}, {state.item.productName}
                          </div>
                          <div className="modal-content">
                            <img id="detail-image-modal" src={state.item.src} />
                          </div>
                          <div className="modal-actions">
                            <a
                              className="modal-link"
                              href="https://etherscan.io/"
                              target="blank"
                            >
                              <button className="button"> Etherscan </button>
                            </a>
                          </div> */}
                          <img
                            src={`/passes/${state.item._id}.jpg`}
                            alt="certificate"
                          />
                        </div>
                      )}
                    </Popup>
                  </div>
                </div>
              </div>
            }
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NFTDetail;
