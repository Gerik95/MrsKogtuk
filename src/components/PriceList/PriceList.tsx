import React from 'react';

import ownerImage from './images/owner-round.png'

import styles from './PriceList.module.css';
import useMediaQuery from '../hooks/useMediaQuery';
import Title from '../UI/Title/Title';
import PriceItem from './PriceItem';
import { design, gelNails, manicureData, pedicure } from './price-list.data';

const PriceList = () => {
  const isMobile = useMediaQuery('(max-width: 500px)');
  const measurement = isMobile ? 150 : 400;
  return (
    <div className={styles.priceList} id="price">
      <Title tag="h1">Price-list</Title>
      <div className={styles.priceListContent}>
        <div className={styles.ownerImage}>
          <img src={ownerImage} alt="Owner" width={measurement} height={measurement}/>
        </div>
        <div className={styles.price}>
          <PriceItem isPrice={true} data={manicureData}/>
          <PriceItem isPrice={false} data={pedicure}/>
          <PriceItem isPrice={false} data={gelNails}/>
          <PriceItem isPrice={false} data={design}/>
        </div>
      </div>
    </div>
  );
};

export default PriceList;
