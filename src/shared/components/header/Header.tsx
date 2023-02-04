import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__logo}>
          <h1>Logo</h1>
        </div>
        <div className={styles.header__nav}>
          <ul>
            <li className={styles.header__link}>
              <Link to={'/'}>Home</Link>
            </li>
            <li className={styles.header__link}>
              <Link to={'/no-page'}>About</Link>
            </li>
            <li className={styles.header__link}>
              <Link to={'/no-page'}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;