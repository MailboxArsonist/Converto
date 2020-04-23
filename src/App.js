import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Navbar from "./components/Nav/Navbar";
import UrlEncoder from "./components/convertors/UrlEncoder";
import UrlDecoder from "./components/convertors/UrlDecoder";
import ColorConvertor from "./components/convertors/ColorConvertor";
import ColorPicker from "./components/convertors/ColorPicker";
import ImgBase64Encoder from "./components/convertors/ImgBase64Encoder";

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
          <Route path="/color-convertor">
            <ColorConvertor />
          </Route>
          <Route path="/color-picker">
            <ColorPicker />
          </Route>
          <Route path="/img-to-base64">
            <ImgBase64Encoder />
          </Route>
        </Switch>
      </main>
    </Router>

  );
}

export default App;
