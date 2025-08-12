import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const AssignedDeliveries = () => {
    const [deliveries, setDeliveries] = useState([]);
    const [activeTab, setActiveTab] = useState('today');
    const navigate = useNavigate();

    const handleViewDetails = (id) => {
        navigate(`/delivery/${id}`);
    };

    return (
        <>
            <Header />
            <div className="max-w-6xl mx-auto px-4 py-6 mt-20 text-center">
                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Assigned Deliveries
                </h2>

                {/* Grey Centered Box */}
                <div className="bg-gray-100 rounded-lg shadow-inner p-6 flex flex-col items-center justify-center min-h-[200px]">
                    {/* Tabs */}
                    <div className="flex gap-4 mb-6">
                        {['today', 'completed'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-5 py-2 rounded-full font-medium transition ${
                                    activeTab === tab
                                        ? 'bg-blue-600 text-white shadow-md'
                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>

                    {/* Deliveries List or Empty Message */}
                    {deliveries.length === 0 ? (
                        <p className="text-gray-500 italic">No deliveries found.</p>
                    ) : (
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 w-full">
                            {deliveries.map((delivery) => (
                                <div
                                    key={delivery.id}
                                    className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 hover:shadow-md transition"
                                >
                                    <p className="text-sm text-gray-700">
                                        <strong>Order ID:</strong> #{delivery.id}
                                    </p>
                                    <p className="text-sm text-gray-700">
                                        <strong>Pickup:</strong> {delivery.pickup_address}
                                    </p>
                                    <p className="text-sm text-gray-700">
                                        <strong>Drop-off:</strong> {delivery.drop_address}
                                    </p>
                                    <p className="text-sm text-gray-700">
                                        <strong>Status:</strong> {delivery.status}
                                    </p>
                                    <p className="text-sm text-gray-700">
                                        <strong>Scheduled Time:</strong>{' '}
                                        {new Date(delivery.scheduled_time).toLocaleTimeString()}
                                    </p>
                                    <button
                                        onClick={() => handleViewDetails(delivery.id)}
                                        className="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                                    >
                                        View Details
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AssignedDeliveries;
