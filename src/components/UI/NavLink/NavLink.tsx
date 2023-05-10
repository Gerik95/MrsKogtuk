import React from 'react';
import { Link } from 'react-scroll';

import styles from '../../Header/Header.module.css';
import { NavLinkProps } from './navLink.props';

const NavLink: React.FC<NavLinkProps> = ({ path, children }) => {
  return (
    <div className={styles.navigationItem}>
      <Link
        to={path}
        smooth={true}
        duration={500}
        spy={true}
        offset={-70}
      >
        {children}
      </Link>
    </div>
  );
};

export default NavLink;
