import React from 'react';
import styles from './FileUpload.module.css';

const FileLinks = ({ url }) => (
  <div className={styles.successGroup}>
    <p className={styles.success}><span className={styles.check}>✓</span> File uploaded successfully!</p>
    <a className={styles.link} href={url} target="_blank" rel="noopener noreferrer">Open in new tab</a>
    <br />
    <a className={styles.link} href={url} download>Download</a>
  </div>
);

export default FileLinks;