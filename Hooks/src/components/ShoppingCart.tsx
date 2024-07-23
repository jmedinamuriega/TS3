
import React, { useReducer } from 'react';
import { ShoppingCartItem, shoppingCartReducer } from '../reducers/shoppingCartReducer';

const initialCartState: ShoppingCartItem[] = [];

const ShoppingCart: React.FC = () => {
  const [cart, dispatch] = useReducer(shoppingCartReducer, initialCartState);

  const addItem = (item: ShoppingCartItem) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  const removeItem = (id: number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const totalCost = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <h2>Total Cost: ${totalCost.toFixed(2)}</h2>
      <button onClick={() => addItem({ id: Date.now(), name: 'New Item', price: 10 })}>Add Item</button>
    </div>
  );
};

export default ShoppingCart;
