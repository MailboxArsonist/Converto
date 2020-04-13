import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navbar from "./components/Nav/Navbar";
import UrlEncoder from "./components/convertors/UrlEncoder";

function App() {
  return (
    <Router>
      {/* Navbar */}
      <Navbar />
      <main className="container mx-auto mt-12">
        <Switch>
          <Route path="/url-encoder">
            <UrlEncoder />
          </Route>
        </Switch>
      </main>
    </Router>

  );
}

export default App;
