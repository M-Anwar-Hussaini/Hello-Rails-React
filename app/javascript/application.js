import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import store from "./redux/store";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Greeting from "./components/Greeting";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Provider store={store}>
  <App/>
</Provider>)