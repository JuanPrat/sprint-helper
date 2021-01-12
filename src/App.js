import './App.css';
import React, {Component} from 'react';
import AddComponent from "./components/AddComponent"
import huListComponent from "./components/huListComponent"

function App() {
  return (
    <div className="App">
      <AddComponent></AddComponent>
      <huListComponent></huListComponent>
    </div>
  );
}

export default App;
