import React from 'react';

import styles from './MainScreen.module.css';
import safetyImage from '../../assets/images/Safety.png';
import sterileImage from '../../assets/images/Steryl.png';
import comfortImage from '../../assets/images/Comfortable.png';
import bigLogoImage from '../../assets/images/big-logo.png';
import AdvantageItem from '../Advantages/AdvantageItem';
import { MainProps } from './main.props';
import useMediaQuery from '../hooks/useMediaQuery';



const MainScreen: React.FC<MainProps> = ({ scrollTop }): JSX.Element => {
  const isMobile = useMediaQuery('(max-width: 500px)');

  return (
    <div className={styles.main} id="home">
      {(!isMobile && scrollTop < 100) && (
        <div className={styles.bigLogo}>
          <img src={bigLogoImage} alt="Big logo"/>
        </div>
      )}
      <div className={styles.mainWrap}>
        <ul className={styles.description}>
          <li className={styles.descriptionItem}>Індивідуальний підхід</li>
          <li className={styles.descriptionItem}>Бачу естетику у всьому</li>
          <li className={styles.descriptionItem}>Обожнюю малювати френч</li>
        </ul>
        {!isMobile && (
          <div className={styles.advantages}>
            <AdvantageItem label="Безпечно" style="safely" src={safetyImage}/>
            <AdvantageItem label="Стерильно" style="sterile" src={sterileImage} />
            <AdvantageItem label="Комфортно" style="comfort" src={comfortImage} />
          </div>
        )}
        {isMobile && (
          <div  className={styles.advantagesMobile}>
            <div className={styles.advantagesItemMobile}>Безпечно</div>
            <div className={styles.advantagesItemMobile}>Стерильно</div>
            <div className={styles.advantagesItemMobile}>Комфортно</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default MainScreen;