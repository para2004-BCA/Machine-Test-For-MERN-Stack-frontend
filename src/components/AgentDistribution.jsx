// src/components/AgentDistribution.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AgentDistribution = ({ agentId }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDistribution = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/agents/${agentId}/distribution`);
        setItems(res.data);
      } catch (err) {
        console.error('Error fetching distribution', err);
      } finally {
        setLoading(false);
      }
    };

    if (agentId) {
      fetchDistribution();
    }
  }, [agentId]);

  return (
    <div style={styles.container}>
      <h2>Files Distributed to Agent</h2>
      {loading ? (
        <p>Loading...</p>
      ) : items.length === 0 ? (
        <p>No files assigned to this agent.</p>
      ) : (
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>First Name</th>
              <th style={styles.th}>Phone</th>
              <th style={styles.th}>Notes</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, idx) => (
              <tr key={idx}>
                <td style={styles.td}>{item.firstName}</td>
                <td style={styles.td}>{item.phone}</td>
                <td style={styles.td}>{item.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    marginTop: '20px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    backgroundColor: '#eee',
    border: '1px solid #ccc',
    padding: '10px',
    textAlign: 'left',
  },
  td: {
    border: '1px solid #ccc',
    padding: '10px',
  },
};

export default AgentDistribution;
