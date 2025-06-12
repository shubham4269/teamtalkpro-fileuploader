import React, { useState } from 'react';
import styles from './FileUpload.module.css';
import axios from 'axios';
import { isValidFile } from './FileUtils';
import ProgressBar from './ProgressBar';
import FileLinks from './FileLinks';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [progress, setProgress] = useState(0);
  const [success, setSuccess] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState('');

  const handleChange = (e) => {
    const selected = e.target.files[0];
    const { valid, message } = isValidFile(selected);  // <-- Corrected here!
    if (!valid) {
      setError(message);
      setFile(null);
      setSuccess(false);
      setProgress(0);
      setUploadedUrl('');
      return;
    }
    setFile(selected);
    setError('');
    setSuccess(false);
    setProgress(0);
    setUploadedUrl('');
  };

  const handleUpload = async () => {
    if (!file) {
      setError('Please select a valid file.');
      setSuccess(false);
      return;
    }
    setError('');
    setProgress(0);
    setSuccess(false);
    setUploadedUrl('');

    const formData = new FormData();
    formData.append('file', file);
   
     try {
      const res = await axios.post('http://localhost:5000/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
        onUploadProgress: (e) => {
          setProgress(Math.round((e.loaded * 100) / e.total));
        }
      });
      setSuccess(true);
      setUploadedUrl(res.data.fileUrl); // backend must return { fileUrl }
    } catch (err) {
      setError('Upload failed.');
    }
    
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.heading}>🖨️ Upload a File</h2>
      <input type="file" onChange={handleChange} className={styles.input} />
      {error && <p className={styles.error}>{error}</p>}
      <button className={styles.button} onClick={handleUpload}>Upload File</button>
      {progress > 0 && progress < 100 && <ProgressBar progress={progress} />}
      {success && <FileLinks url={uploadedUrl} />}
    </div>
  );
};

export default FileUpload;





