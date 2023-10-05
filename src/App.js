// App.js
import React, { useState } from 'react';
import DepenseItem from './components/DepenseItem';
import NouvelleDepenseForm from './components/NouvelleDepenseForm';

function App() {
  const [items, setItems] = useState([
    { id: 1, date: new Date(2023, 8, 24), title: "assurance", amount: 105 },
    { id: 2, date: new Date(2023, 8, 24), title: "nouriture", amount: 200 },
    { id: 3, date: new Date(2023, 8, 24), title: "loyer", amount: 350 }
  ]);

  const addDepense = (newDepense) => {
    console.log(newDepense)
    // Erstelle eine Kopie der aktuellen Ausgabenliste und füge das neue Element hinzu
    setItems = (prevItems) => {
      return [newDepense, ...prevItems];

    }

  };

  return (
    <div className="app">
      <h1>Depense Tracker</h1>
      {items.map(item => (
        <DepenseItem key={item.id} date={item.date} titel={item.title} amount={item.amount} />
      ))}
      <NouvelleDepenseForm onAddDepense={addDepense} />
    </div>
  );
}

export default App;
