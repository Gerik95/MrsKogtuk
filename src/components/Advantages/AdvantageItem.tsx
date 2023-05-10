import React from 'react';
import styles from './AdvantageItem.module.css';
import { AdvantageItemProps } from './AdvantageItem.props';
import classNames from 'classnames';

const AdvantageItem: React.FC<AdvantageItemProps> = ({ label, style, src }) => {
  return (
    <div className={styles.advantages}>
      <div className={styles.image}>
        <img src={src} alt={label}/>
        {/*<Image src={props} alt={props.alt} width={220} height={300}/>*/}
      </div>
      <div className={classNames(styles.label, {
        [styles.safely]: style === 'safely',
        [styles.sterile]: style === 'sterile',
        [styles.comfort]: style === 'comfort',
      })}>{label}</div>
    </div>
  );
};

export default AdvantageItem;
