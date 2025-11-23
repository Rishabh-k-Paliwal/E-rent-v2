import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LocationPicker from '../products/LocationPicker';
import { FaTimes } from 'react-icons/fa';
import './SearchModal.css';

const SearchModal = ({ isOpen, onClose }) => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [showLocationPicker, setShowLocationPicker] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Build search params
        const searchParams = new URLSearchParams();
        if (searchQuery) searchParams.set('q', searchQuery);
        if (selectedLocation) {
            searchParams.set('lat', selectedLocation.lat);
            searchParams.set('lng', selectedLocation.lng);
            searchParams.set('radius', selectedLocation.radius || 50);
        }
        if (minPrice) searchParams.set('minPrice', minPrice);
        if (maxPrice) searchParams.set('maxPrice', maxPrice);

        // Navigate to products page with search params
        navigate(`/?${searchParams.toString()}`);
        onClose();

        // Reset form
        setSearchQuery('');
        setSelectedLocation(null);
        setMinPrice('');
        setMaxPrice('');
    };

    const handleLocationSelect = (location) => {
        setSelectedLocation(location);
        setShowLocationPicker(false);
    };

    const clearLocation = () => {
        setSelectedLocation(null);
    };

    if (!isOpen) return null;

    return (
        <>
            <div className="search-modal-overlay" onClick={onClose}></div>
            <div className="search-modal">
                <div className="search-modal-header">
                    <h2>Search Products</h2>
                    <button className="btn-close-modal" onClick={onClose}>
                        <FaTimes />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="search-modal-form">
                    <div className="search-modal-input-group">
                        <input
                            type="text"
                            placeholder="Search for electronics (e.g., laptop, camera, drone)..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="search-modal-input"
                            autoFocus
                        />
                    </div>

                    <div className="price-filters-row">
                        <input
                            type="number"
                            placeholder="Min Price (₹)"
                            value={minPrice}
                            onChange={(e) => setMinPrice(e.target.value)}
                            className="search-modal-price-input"
                            min="0"
                        />
                        <input
                            type="number"
                            placeholder="Max Price (₹)"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(e.target.value)}
                            className="search-modal-price-input"
                            min="0"
                        />
                    </div>

                    <button
                        type="button"
                        onClick={() => setShowLocationPicker(true)}
                        className="btn-modal-location"
                    >
                        📍 {selectedLocation ? 'Change Location' : 'Add Location Filter'}
                    </button>

                    {selectedLocation && (
                        <div className="modal-selected-location">
                            <span className="location-text">
                                📍 Near: {selectedLocation.address || `${selectedLocation.lat.toFixed(2)}, ${selectedLocation.lng.toFixed(2)}`}
                            </span>
                            <span className="location-radius">Within {selectedLocation.radius || 50}km</span>
                            <button type="button" onClick={clearLocation} className="btn-clear-modal-location">
                                ✕
                            </button>
                        </div>
                    )}

                    <button type="submit" className="btn-modal-search">
                        🔍 Search
                    </button>
                </form>

                {showLocationPicker && (
                    <LocationPicker
                        onSelect={handleLocationSelect}
                        onClose={() => setShowLocationPicker(false)}
                    />
                )}
            </div>
        </>
    );
};

export default SearchModal;
