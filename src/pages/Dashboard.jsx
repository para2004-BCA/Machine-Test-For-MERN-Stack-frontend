import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import AgentForm from '../components/AgentFrom'; // ✅ fix typo!
import FileUpload from '../components/FileUpload';
import AgentDistribution from '../components/AgentDistribution';
import axios from 'axios';
import { useAuth } from '../context/AuthContext'; // ✅
import './Dashboard.css';


const Dashboard = () => {
  const { user } = useAuth(); // ✅
  const [agents, setAgents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  useEffect(() => {
    if (!user) return;
    const fetchAgents = async () => {
      try {
        const res = await axios.get('http://localhost:8080/agent');
        setAgents(res.data);
      } catch (err) {
        console.error('Fetch agents error:', err);
      }
    };
    fetchAgents();
  }, [user]);

  if (!user) return null;

  return (
  <>
    <Navbar />
    <div className="dashboard-container" style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
      <div className="dashboard-header">
        <h2>Dashboard</h2>
        <p>Welcome, <strong>{user.name}</strong></p>
      </div>

      <div className="dashboard-section">
        <h3>Add Agent</h3>
        <AgentForm />
      </div>

      <div className="dashboard-section">
        <h3>Upload File</h3>
        <FileUpload />
      </div>

      <div className="dashboard-section">
        <h3>Agent Distribution</h3>
        {agents.length > 0 ? (
          agents.map(agent => (
            <div key={agent._id} className="agent-box" style={{
              backgroundColor: '#fff',
              padding: '1rem',
              border: '1px solid #ddd',
              marginBottom: '1rem',
              borderRadius: '6px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
            }}>
              <h4>{agent.agentName}</h4>
              <AgentDistribution agentId={agent._id} />
            </div>
          ))
        ) : (
          <p>No agents yet.</p>
        )}
      </div>
    </div>
  </>
);

};

export default Dashboard;
