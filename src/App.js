import React from 'react';
import './App.css';
import NavBar from './Template/NavBar'
import Record from './Record/Record'
import About from './Components/About'
import Footer from './Template/Footer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
function App() {
  return (
      <Router>
        <div className="container-fluid">
          <NavBar />
          <Route exact path="/" component={Record} />
          <Route path="/about" component={About} />
          <Footer/>
        </div>
      </Router>
  );
}

export default App;
