import React from 'react';
import './App.css';
import NavBar from './Components/Template/NavBar'
import Record from './Components/Record/Record'
import About from './Components/About/About'
import Footer from './Components/Template/Footer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path="/" component={Record} />
      <Route path="/about" component={About} />
      <Footer />
    </Router>
  );
}

export default App;
