import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./AssignedDeliveries.css";

const AssignedDeliveries = () => {
  const [deliveries, setDeliveries] = useState([]);
  const [activeTab, setActiveTab] = useState('today');
  const navigate = useNavigate();

  return (
    <div className="assigned-deliveries-container">
      {/* Title */}
      <h2>Assigned Deliveries</h2>

      {/* Filter Tabs */}
      <div className="tabs">
        {['today', 'completed'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`tab-btn ${activeTab === tab ? 'active' : 'inactive'}`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Deliveries List */}
      {deliveries.length === 0 ? (
        <p className="empty-message">No deliveries found.</p>
      ) : (
        <div className="deliveries-list">
          {deliveries.map((delivery) => (
            <div key={delivery.id} className="delivery-card">
              <p><strong>Order ID:</strong> #{delivery.id}</p>
              <p><strong>Pickup:</strong> {delivery.pickup_address}</p>
              <p><strong>Drop-off:</strong> {delivery.drop_address}</p>
              <p><strong>Status:</strong> {delivery.status}</p>
              <p><strong>Scheduled Time:</strong> {new Date(delivery.scheduled_time).toLocaleTimeString()}</p>
              <button
                onClick={() => handleViewDetails(delivery.id)}
                className="view-btn"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AssignedDeliveries;
