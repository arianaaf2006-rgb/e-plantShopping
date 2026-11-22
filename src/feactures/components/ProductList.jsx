import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../features/CartSlice';

const ProductList = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);
  const [addedToCart, setAddedToCart] = useState({});

  const plantsByCategory = {
    "Plantas de Interior": [
      { id: 1, img: "https://images.unsplash.com/photo-1546448174-671c819a5375?w=300", name: "Monstera", description: "Planta tropical", cost: 45 },
      { id: 2, img: "https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?w=300", name: "Suculenta", description: "Fácil de cuidar", cost: 15 },
      { id: 3, img: "https://images.unsplash.com/photo-1518609797731-5348c4e0f245?w=300", name: "Palmera", description: "Elegante", cost: 65 }
    ],
    "Plantas Colgantes": [
      { id: 4, img: "https://images.unsplash.com/photo-1611069174310-9b0b0d3e0498?w=300", name: "Pothos", description: "Resistente", cost: 20 },
      { id: 5, img: "https://images.unsplash.com/photo-1601390389945-73c090c65e45?w=300", name: "Cadenas", description: "Única", cost: 18 },
      { id: 6, img: "https://images.unsplash.com/photo-1597055181325-3845e0d8295a?w=300", name: "Hiedra", description: "Clásica", cost: 22 }
    ],
    "Plantas Florales": [
      { id: 7, img: "https://images.unsplash.com/photo-1566873259357-489190b598b4?w=300", name: "Orquídea", description: "Elegante flor", cost: 55 },
      { id: 8, img: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=300", name: "Geranio", description: "Colorido", cost: 25 },
      { id: 9, img: "https://images.unsplash.com/photo-1518882605630-8ada2c1b7f2c?w=300", name: "Jazmín", description: "Aromático", cost: 30 }
    ]
  };

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart(prev => ({ ...prev, [plant.name]: true }));
  };

  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div>
      <nav className="navbar">
        <Link to="/">Inicio</Link>
        <Link to="/plants">Plantas</Link>
        <Link to="/cart">Carrito ({totalQuantity})</Link>
      </nav>

      <div className="product-grid">
        <h2>Nuestras Plantas</h2>
        
        {Object.entries(plantsByCategory).map(([category, plants]) => (
          <div key={category} className="category-section">
            <h3>{category}</h3>
            <div className="category-grid">
              {plants.map((plant) => (
                <div key={plant.id} className="product-card">
                  <img src={plant.img} alt={plant.name} />
                  <h4>{plant.name}</h4>
                  <p>{plant.description}</p>
                  <p className="price">${plant.cost}</p>
                  <button 
                    onClick={() => handleAddToCart(plant)}
                    disabled={addedToCart[plant.name]}
                  >
                    {addedToCart[plant.name] ? "✓ En el carrito" : "Agregar al Carrito"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
