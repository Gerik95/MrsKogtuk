import React from 'react';
import styles from './Contacts.module.css';

import telegramIcon from './images/telegram-contact.svg';
import instagramIcon from './images/instagram-contact.svg';
import facebookIcon from './images/facebook-contact.svg';
import classNames from 'classnames';
import Title from '../UI/Title/Title';
import useMediaQuery from '../hooks/useMediaQuery';
import flowerLeft from '../../assets/images/flower-left.png';
import flowerRight from '../../assets/images/flower-right.png';


const Contacts = () => {
  const isMobile = useMediaQuery('(max-width: 500px)');
  let width = isMobile ? 65 : 100;
  let height = isMobile ? 65 : 100;

  return (
    <div className={styles.contacts} id="contacts">
      <img className={classNames(`${styles.flower}`, {
        [styles.flowerLeft]: true
      })} src={flowerLeft} alt="Flower"/>
      <Title tag="h3">Слідкуйте за мною в соціальних мережах</Title>
      <div className={styles.contactsWrap}>
        <a href="https://t.me/l_a_andreevna"><img src={telegramIcon} alt="Telegram icon" width={width} height={height}/></a>
        <a href="https://instagram.com/mrs.kogtuk?igshid=YmMyMTA2M2Y="><img src={instagramIcon} alt="Instagram icon" width={width} height={height}/></a>
        <a href="https://www.facebook.com/profile.php?id=100010697550526"><img src={facebookIcon} alt="Facebook icon" width={width} height={height}/></a>
      </div>
      <img className={
        classNames(`${styles.flower}`, {
          [styles.flowerRight]: true
        })
      } src={flowerRight} alt="Flower"/>
    </div>
  );
};

export default Contacts;
