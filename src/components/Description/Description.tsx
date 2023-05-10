import React from 'react';
import classNames from 'classnames';

import flowerLeft from '../../assets/images/flower-left.png';
import flowerRight from '../../assets/images/flower-right.png';

import styles from './Description.module.css';
import { DescriptionsProps } from './description.props';
import useMediaQuery from '../hooks/useMediaQuery';
import DescriptionItem from './DescriptionItem';
import { descriptionData } from './description.data';

const Description: React.FC<DescriptionsProps> = () => {
  const isMobile = useMediaQuery('(max-width: 500px)');
  return (
    <div className={styles.description} id='services'>
      <img className={classNames(`${styles.flower}`, {
        [styles.flowerLeft]: true
      })} src={flowerLeft} alt="Flower" />
      <div className={styles.descriptionWrap}>
        {descriptionData.map((item) => {
          return (
            <DescriptionItem key={item.title} title={item.title} imageSrc={item.imageSrc} text={item.text} />
          )
        })}

      </div>
      {!isMobile && (
        <img className={
          classNames(`${styles.flower}`, {
            [styles.flowerRight]: true
          })
        } src={flowerRight} alt="Flower"/>
      )}
    </div>
  );
};

export default Description;
