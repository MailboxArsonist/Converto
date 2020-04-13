import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navbar from "./components/Nav/Navbar";
import UrlEncoder from "./components/convertors/UrlEncoder";
import UrlDecoder from "./components/convertors/UrlDecoder";

function App() {
  return (
    <Router>
      {/* Navbar */}
      <Navbar />
      <main className="container mx-auto my-12">
        <Switch>
          <Route path="/url-encoder">
            <UrlEncoder />
          </Route>
          <Route path="/url-decoder">
            <UrlDecoder />
          </Route>
        </Switch>
      </main>
    </Router>

  );
}

export default App;
