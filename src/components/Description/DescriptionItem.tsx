import React from 'react';
import { DescriptionItemProps } from './description.props';

import styles from './Description.module.css';

const DescriptionItem: React.FC<DescriptionItemProps> = ({title, text, imageSrc}) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        <img src={imageSrc} alt={`Icon ${title}`}/>
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default DescriptionItem;
