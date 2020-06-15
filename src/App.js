import React from 'react';
import './App.css';
import Card from './components/Card.jsx';
import data from './data.js';

function App() {
  return (
    <Card 
      object={data}
    />
  );
}

export default App;
