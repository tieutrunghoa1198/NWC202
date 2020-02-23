import React from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './Template/NavBar'
import Record from './Record/Record'
function App() {
  return (
    <>
      <div className="App">
        <NavBar/>
      </div>
      <div className="container">
        <Record/>
      </div>
    </>
  );
}

export default App;
