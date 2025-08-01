import React, { useState } from 'react';
import API from '../utils/api';
import './AgentFrom.css'; // 👈 import the CSS here

const AgentForm = () => {
  const [formData, setFormData] = useState({
    agentName: '',
    email: '',
    phone: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/agents/create', formData);
      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.error || 'Error adding agent');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="agent-form">
      <h3>Add Agent</h3>
      <input name="agentName" placeholder="Name" onChange={handleChange} required />
      <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
      <input name="phone" placeholder="Phone" onChange={handleChange} required />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Create Agent</button>
    </form>
  );
};

export default AgentForm;
