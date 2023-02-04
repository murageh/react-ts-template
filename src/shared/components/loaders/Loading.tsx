import React from 'react';
import { CircularProgress } from '@mui/material';
import styles from './Loading.module.scss';

const Loading = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.loading__container}>
        <p className={styles.loading__text}>Loading...</p>
        <CircularProgress className={styles.loading__spinner} size={20} />
      </div>
    </div>
  );
};

export default Loading;