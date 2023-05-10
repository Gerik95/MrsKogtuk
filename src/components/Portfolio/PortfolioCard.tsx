import React from 'react';
import styles from './Portfolio.module.css';
import classNames from 'classnames';
import { PortfolioCardProps } from './portfolio.props';

const PortfolioCard: React.FC<PortfolioCardProps> = ({imageSrc, title, openModal, type}) => {
  return (
    <div className={classNames(styles.card)} onClick={() =>openModal && openModal(type)} >
      <div className={styles.cardImage}>
        <img src={imageSrc} alt={title} />
      </div>
      <div className={styles.cardTitle}>{title}</div>
    </div>
  );
};

export default PortfolioCard;
