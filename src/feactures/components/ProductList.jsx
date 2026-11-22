import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../features/CartSlice';

const ProductList = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);
  
  const plantsArray = [
    {
      img: "https://images.unsplash.com/photo-1546448174-671c819a5375?w=300",
      name: "Monstera",
      description: "Planta tropical de interior",
      cost: 45
    },
    {
      img: "https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?w=300",
      name: "Suculenta",
      description: "Fácil de cuidar",
      cost: 15
    },
    {
      img: "https://images.unsplash.com/photo-1518609797731-5348c4e0f245?w=300",
      name: "Palmera",
      description: "Elegante y resistente",
      cost: 65
    }
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div className="product-grid">
      <h2>Nuestras Plantas</h2>
      {plantsArray.map((plant, index) => (
        <div key={index} className="product-card">
          <img src={plant.img} alt={plant.name} />
          <h3>{plant.name}</h3>
          <p>{plant.description}</p>
          <p className="price">${plant.cost}</p>
          <button onClick={() => handleAddToCart(plant)}>Agregar al carrito</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
