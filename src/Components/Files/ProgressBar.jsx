import React from 'react';
import styles from './FileUpload.module.css';

const ProgressBar = ({ progress }) => (
  <div className={styles.progressBarWrapper}>
    <div className={styles.progressBar} style={{ width: `${progress}%` }} />
  </div>
);

export default ProgressBar;