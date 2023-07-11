import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

import portfolioCardImage1 from './images/portfolio_1.png';
import portfolioCardImage2 from './images/portfolio_2.png';
import portfolioCardImage3 from './images/portfolio_3.png';
import portfolioCardImage4 from './images/portfolio_4.png';
import portfolioCardImage5 from './images/portfolio_5.png';
import portfolioCardImage6 from './images/portfolio_6.png';

import styles from './Portfolio.module.css';
import { imagesData } from './portfolio.data';
import Title from '../UI/Title/Title';
import PortfolioCard from './PortfolioCard';
import Modal from '../Modal/Modal';

const Portfolio = () => {
  const [showModal, setShowModal] = useState(false);
  const [type, setType] = useState('classic');
  const openModal = (type: string) => {
    setShowModal(true);
    setType(type);
  }

  const closeModal = () => setShowModal(false);
  const data = imagesData();

  return (
    <div className={styles.portfolio} id="gallery">
      <Title tag="h1">Portfolio</Title>

      <div className={styles.portfolioContainer}>
        <PortfolioCard openModal={openModal} title="Класичний манікюр" imageSrc={portfolioCardImage1}
                       type="classic"/>
        <PortfolioCard openModal={openModal} title="Кольорова база" imageSrc={portfolioCardImage2} type="gel"/>
        <PortfolioCard openModal={openModal} title="Нарощування нігтів" imageSrc={portfolioCardImage4}
                       type="strengtheningGel"/>
        <PortfolioCard openModal={openModal} title="Укріплення гель" imageSrc={portfolioCardImage5} type="buildUp"/>
        <PortfolioCard openModal={openModal} title="Дизайн" imageSrc={portfolioCardImage3} type="design"/>
        <PortfolioCard openModal={openModal} title="Педикюр" imageSrc={portfolioCardImage6} type="pedicure"/>
      </div>

      <Modal show={showModal} closeModal={closeModal}>
        <ImageGallery
          // @ts-ignore
          items={data[type]}
          showPlayButton={false}
          showFullscreenButton={false}
          showThumbnails={false}
        />
      </Modal>
    </div>
  );
};

export default Portfolio;
