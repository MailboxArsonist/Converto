import React from "react";
import {
  BrowserRouter as Router,
  // Switch,
  // Route,
  // Link
} from 'react-router-dom';

import Navbar from './components/Nav/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
    </Router>

  );
}

export default App;
