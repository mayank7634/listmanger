import React, { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]); // items list
  const [inputValue, setInputValue] = useState(''); // input field

  const handleAddItem = () => {
    if (inputValue.trim() !== '') { // Check if input is not empty
      setItems([...items, inputValue]); // Add the input value to the list
      setInputValue(''); // Clear the input field
    }
  };

  return (
    <div className="item-list-manager">
      <h1>Item List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter an item"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} // Update the input state
        />
      </div>
      <button onClick={handleAddItem}>Add Item</button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

