import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from '../features/CartSlice';

const CartItem = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);

  const calculateTotalAmount = () => {
    return items.reduce((total, item) => total + (item.cost * item.quantity), 0);
  };

  const handleRemove = (name) => {
    dispatch(removeItem(name));
  };

  const handleUpdateQuantity = (name, quantity) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ name, quantity }));
    }
  };

  if (!items.length) {
    return <h2>Tu carrito está vacío</h2>;
  }

  return (
    <div className="cart-container">
      <h2>Tu Carrito de Compras</h2>
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio Unitario</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>${item.cost}</td>
              <td>
                <button onClick={() => handleUpdateQuantity(item.name, item.quantity - 1)}>-</button>
                {item.quantity}
                <button onClick={() => handleUpdateQuantity(item.name, item.quantity + 1)}>+</button>
              </td>
              <td>${item.cost * item.quantity}</td>
              <td>
                <button onClick={() => handleRemove(item.name)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Total: ${calculateTotalAmount()}</h3>
    </div>
  );
};

export default CartItem;
