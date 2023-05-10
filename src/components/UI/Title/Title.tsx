import React, { ReactNode } from 'react';
import classNames from 'classnames';

import styles from './Title.module.css';

interface TitleProps {
  tag: 'h1' | 'h2' | 'h3';
  children: ReactNode;
}

const Title: React.FC<TitleProps> = ({ tag, children }) => {
  switch(tag) {
    case 'h1':
      return <h1 className={classNames(styles.title, styles.h1)}>{children}</h1>
    case 'h2':
      return <h2 className={classNames(styles.title, styles.h2)}>{children}</h2>
    case 'h3':
      return <h3 className={classNames(styles.title, styles.h3)}>{children}</h3>
    default:
      return <></>
  }
};

export default Title;
