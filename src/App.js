import React from "react";
import Home from "./components/Home";
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="container">
        <Route path="/" exact component={Home} />
      </div>
    </Router>
  );
}

export default App;
