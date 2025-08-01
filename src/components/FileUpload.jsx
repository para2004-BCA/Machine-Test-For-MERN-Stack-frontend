import React, { useState } from 'react';
import API from '../utils/api';

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!file) {
      alert('Please upload a file.');
      return;
    }

    const allowedTypes = ['text/csv', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
    if (!allowedTypes.includes(file.type)) {
      alert('Only CSV, XLS, or XLSX files are allowed.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      await API.post('/upload/csv', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('File uploaded and distributed successfully.');
    } catch (err) {
      console.error(err);
      alert('File upload failed.');
    }
  };

  return (
    <form onSubmit={handleUpload} style={styles.form}>
      <h3 style={styles.title}>Upload CSV</h3>
      <input
        type="file"
        accept=".csv,.xlsx,.xls"
        onChange={(e) => setFile(e.target.files[0])}
        required
        style={styles.inputFile}
      />
      <button type="submit" style={styles.button}>
        Upload
      </button>
    </form>
  );
};

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '400px',
    margin: '40px auto',
    padding: '30px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  },
  title: {
    marginBottom: '20px',
    textAlign: 'center',
  },
  inputFile: {
    marginBottom: '20px',
  },
  button: {
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default FileUpload;
