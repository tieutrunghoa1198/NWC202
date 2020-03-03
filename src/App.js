import React from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './Template/NavBar'
import Record from './Record/Record'
import About from './Components/About'
import { BrowserRouter as Router, Route } from 'react-router-dom'
function App() {
  return (
    <>
      <Router>
        <div className="App">
          <NavBar />
        </div>
        <div className="container">
          <Route exact path="/" component={Record} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    </>
  );
}

export default App;
