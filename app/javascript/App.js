import {BrowserRouter, Route, Routes} from "react-router-dom";
import Greeting from "./components/Greeting";
import React from "react";

const App = () => {
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Greeting/>}/>
    </Routes>
  </BrowserRouter>
}

export default App;