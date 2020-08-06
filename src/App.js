import React from 'react';
import './App.css';
import Dinner from "./dinner"
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Dinner dishname="Chicken"/>
       <Dinner dishname="Meat"/>
      </header>
    </div>
  );
}

export default App;
