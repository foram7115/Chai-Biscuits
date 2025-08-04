import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { FiArrowLeft, FiMapPin, FiPlus, FiMoreVertical, FiEdit3, FiSave } from 'react-icons/fi';

function Address() {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [savedAddresses, setSavedAddresses] = useState([]);
  const [selectedAddressIndex, setSelectedAddressIndex] = useState(0);
  const [editIndex, setEditIndex] = useState(null); // index of address being edited
  const [editedAddress, setEditedAddress] = useState('');

  // Load addresses from localStorage on mount
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('savedAddresses')) || [];
    setSavedAddresses(stored);
  }, []);

  // Save to localStorage whenever addresses change
  useEffect(() => {
    localStorage.setItem('savedAddresses', JSON.stringify(savedAddresses));
  }, [savedAddresses]);

  // Dummy suggestions – replace with actual API later
  const allLocations = [
    "MG Road, Bangalore",
    "Brigade Road, Bangalore",
    "Indiranagar, Bangalore",
    "Koramangala, Bangalore",
    "HSR Layout, Bangalore"
  ];

  const handleSearchChange = async (e) => {
  const value = e.target.value;
  setSearchQuery(value);

  if (value.length > 2) {
    try {
      const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(value)}&key=f772a5f1bab443d589a9a03bc3dd9004&limit=5`);
      const data = await response.json();
      const results = data.results.map(item => item.formatted);
      setSuggestions(results);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
      setSuggestions([]);
    }
  } else {
    setSuggestions([]);
  }
};


  const handleAddAddress = (address) => {
    if (!address.trim()) return;
    setSavedAddresses(prev => [...prev, address]);
    setSearchQuery('');
    setSuggestions([]);
  };

  const handleSetPrimary = (index) => {
    setSelectedAddressIndex(index);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditedAddress(savedAddresses[index]);
  };

  const handleSaveEdit = () => {
    const updated = [...savedAddresses];
    updated[editIndex] = editedAddress;
    setSavedAddresses(updated);
    setEditIndex(null);
    setEditedAddress('');
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#fceeea] text-[#4b2c20] flex justify-center items-center px-4 py-5">
        <div className="w-full max-w-lg">

          <div className="flex items-center gap-3 mb-6">
            <FiArrowLeft size={24} className="cursor-pointer" />
            <h1 className="text-xl font-semibold">Select Location</h1>
          </div>

          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search Address"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white placeholder-gray-500 mb-2"
          />

          {/* Suggestions */}
          {suggestions.length > 0 && (
            <div className="bg-white border border-gray-300 rounded-lg mb-4 max-h-40 overflow-y-auto">
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleAddAddress(suggestion)}
                >
                  {suggestion}
                </div>
              ))}
            </div>
          )}

          {/* Add manually */}
          <div
            className="flex items-center justify-between bg-white rounded-lg px-4 py-3 shadow-sm mb-6 cursor-pointer"
            onClick={() => handleAddAddress(searchQuery)}
          >
            <div className="flex items-center gap-3 text-[#d12c6a] font-semibold">
              <FiPlus size={20} />
              Add New Address
            </div>
            <span className="text-[#d12c6a] text-xl">{'>'}</span>
          </div>

          {/* Saved Addresses */}
          <h2 className="mt-4 mb-2 font-semibold text-lg">Saved Addresses</h2>
          <div className="space-y-4">
            {savedAddresses.map((address, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 shadow-sm"
              >
                <div className="flex justify-between items-start gap-2">
                  <div className="w-full">
                    <h3 className="font-bold flex items-center justify-between">
                      Address {index + 1}
                      {selectedAddressIndex === index && (
                        <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded ml-2">
                          Selected
                        </span>
                      )}
                    </h3>

                    {/* Editable or Static Address Text */}
                    {editIndex === index ? (
                      <input
                        type="text"
                        className="w-full mt-2 p-2 border border-gray-300 rounded"
                        value={editedAddress}
                        onChange={(e) => setEditedAddress(e.target.value)}
                      />
                    ) : (
                      <p className="text-sm mt-1 cursor-pointer" onClick={() => handleSetPrimary(index)}>
                        {address}
                      </p>
                    )}
                  </div>

                  {/* Action Icons */}
                  <div className="flex flex-col gap-2">
                    {editIndex === index ? (
                      <button
                        className="text-green-600 hover:text-green-800"
                        onClick={handleSaveEdit}
                        title="Save"
                      >
                        <FiSave size={18} />
                      </button>
                    ) : (
                      <button
                        className="text-blue-600 hover:text-blue-800"
                        onClick={() => handleEdit(index)}
                        title="Edit"
                      >
                        <FiEdit3 size={18} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {savedAddresses.length === 0 && (
              <p className="text-sm text-gray-500">No addresses saved yet.</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Address;
