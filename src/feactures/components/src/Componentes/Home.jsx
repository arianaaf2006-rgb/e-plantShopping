import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      <h1>🌿 Paradise Nursery</h1>
      <p>Tu tienda de confianza de plantas de interior</p>
      <Link to="/plants">
        <button className="get-started-btn">Comenzar</button>
      </Link>
    </div>
  );
};

export default Home;
