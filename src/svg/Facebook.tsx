import React from 'react';
import styles from './SVG.module.css';
import classNames from 'classnames';
const FacebookIcon = () => {
  return (
    <svg className={classNames(styles.svgFacebook, styles.svg)} width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30.9167 15.9542C30.9167 7.65347 24.1967 0.916626 15.9167 0.916626C7.63675 0.916626 0.916748 7.65347 0.916748 15.9542C0.916748 23.2324 6.07675 29.2926 12.9167 30.6911V20.4655H9.91675V15.9542H12.9167V12.1948C12.9167 9.29257 15.2717 6.93166 18.1667 6.93166H21.9167V11.4429H18.9167C18.0917 11.4429 17.4167 12.1196 17.4167 12.9467V15.9542H21.9167V20.4655H17.4167V30.9166C24.9917 30.1647 30.9167 23.7587 30.9167 15.9542Z"
            fill="#BFBFBF"/>
    </svg>
  );
};

export default FacebookIcon;
