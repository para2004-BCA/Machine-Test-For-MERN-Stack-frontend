import React, { useState } from 'react';
import API from '../utils/api';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // ✅

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const { login } = useAuth(); // ✅

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/users/login', form);
      login(res.data); // Save token and user
      alert('Login successful');
      navigate('/dashboard');
    } catch (err) {
      alert(err.response?.data?.error || 'Login failed');
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.formContainer}>
        <h2 style={styles.heading}>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            style={styles.input}
            placeholder="Email"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <input
            style={styles.input}
            type="password"
            placeholder="Password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
          <button type="submit" style={styles.button}>Login</button>
        </form>
        <span style={styles.linkText}>
          Don’t have an account? <a href="/register" style={styles.link}>Register</a>
        </span>
      </div>
    </div>
  );
};

const styles = {
  page: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(135deg, #2b5876, #4e4376)',
  },
  formContainer: {
    background: '#fff',
    padding: '2.5rem',
    borderRadius: '12px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
    width: '350px',
    textAlign: 'center',
  },
  heading: {
    marginBottom: '1.5rem',
    fontSize: '24px',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '0.7rem',
    margin: '0.7rem 0',
    border: '1px solid #ccc',
    borderRadius: '6px',
    fontSize: '14px',
    outline: 'none',
  },
  button: {
    width: '100%',
    padding: '0.7rem',
    background: '#2b5876',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    marginTop: '1rem',
    fontSize: '15px',
  },
  linkText: {
    display: 'block',
    marginTop: '1rem',
    fontSize: '14px',
  },
  link: {
    color: '#2b5876',
    textDecoration: 'none',
  },
};

export default Login;
