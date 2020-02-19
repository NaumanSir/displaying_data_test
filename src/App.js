import React from 'react';
import logo from './logo.svg';
import './App.css';
import TeaImpChart from "./components/TeaImpChart"

function App() {
  return (
    <div className="App">
      <h4>Tea Imports by Country</h4>
      <TeaImpChart />
    </div>
  );
}

export default App;
