
import React from 'react';
import Counter from './components/Counter';
import ShoppingCart from './components/ShoppingCart';

const App: React.FC = () => {
  return (
    <div>
      <Counter />
      <ShoppingCart />
    </div>
  );
};

export default App;
