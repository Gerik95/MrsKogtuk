import React from 'react';
import classNames from 'classnames';

import logoImage from './logo.png';

import { phoneIcon, portfolioIcon, priceIcon } from './icons';

import styles from './Header.module.css';
import { HeaderProps } from './header.props';
import useMediaQuery from '../hooks/useMediaQuery';
import NavLink from '../UI/NavLink/NavLink';
import TelegramIcon from '../../svg/Telegram';
import InstagramIcon from '../../svg/Instagram';
import FacebookIcon from '../../svg/Facebook';

const Header: React.FC<HeaderProps> = ({ scrollTop }) => {
  const isMobile = useMediaQuery('(max-width: 500px)');

  return (
    <div className={classNames(styles.header, {
      [styles.bgBlack]: scrollTop >= 100
    })}>
      <div className={styles.headerWrap}>
        {( !isMobile ) && (
          <nav className={styles.navigation}>
            <NavLink path="price">Прайс-лист</NavLink>
            <NavLink path="gallery">Портфоліо</NavLink>
            <NavLink path="contacts">Контакти</NavLink>
          </nav>
        )}
        {isMobile && (
          <nav className={styles.mobileNavigation}>
            <NavLink path="price">
              <div className={styles.mobileNavigationItem}>
                <img src={priceIcon} alt="Price icon" width={35} height={35}/>
                <p className={styles.mobileNavigationText}>Прайс-лист</p>
              </div>
            </NavLink>
            <NavLink path="gallery">
              <div className={styles.mobileNavigationItem}>
                <img src={portfolioIcon} alt="Price icon" width={35} height={35}/>
                <p className={styles.mobileNavigationText}>Портфоліо</p>
              </div>
            </NavLink>
            <NavLink path="contacts">
              <div className={styles.mobileNavigationItem}>
                <img src={phoneIcon} alt="Price icon" width={35} height={35}/>
                <p className={styles.mobileNavigationText}>Контакти</p>
              </div>
            </NavLink>
          </nav>
        )}
        {( scrollTop >= 100 || isMobile ) && (
          <div className={styles.logo}>
            <NavLink path="home">
              <img src={logoImage} alt="Logo" width={50} height={50}/>
            </NavLink>
          </div>
        )}
        {!isMobile && (
          <div className={styles.socialIcons}>
            <a href="https://t.me/l_a_andreevna"><TelegramIcon/></a>
            <a href="https://instagram.com/mrs.kogtuk?igshid=YmMyMTA2M2Y="><InstagramIcon/></a>
            <a href="https://www.facebook.com/profile.php?id=100010697550526"> <FacebookIcon/></a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
