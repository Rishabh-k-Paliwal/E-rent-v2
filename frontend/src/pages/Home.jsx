import React from 'react';
import { Link } from 'react-router-dom';
import ProductList from '../components/products/ProductList';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content container">
          <div className="hero-text fade-in">
            <h1>
              Experience Premium Tech <br />
              <span className="text-gradient">Without the Price Tag</span>
            </h1>
            <p>
              Rent the latest cameras, laptops, and gaming consoles for your next project or adventure.
              Flexible plans, verified quality, and instant booking.
            </p>
            <div className="hero-buttons">
              <Link to="/" className="btn-primary">
                Start Renting
              </Link>
              <Link to="/register" className="btn-secondary">
                List Your Gear
              </Link>
            </div>
          </div>
          <div className="hero-image fade-in">
            <div className="hero-glow"></div>
            <img
              src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Premium Electronics"
              className="hero-img-main"
            />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section container">
        <div className="section-header">
          <h2>Trending Gear</h2>
          <Link to="/" className="view-all-link">View All Products →</Link>
        </div>
        <ProductList />
      </section>
    </div>
  );
};

export default Home;