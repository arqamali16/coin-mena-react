import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { resetContext, Provider } from "kea";

import Repositories from "./Pages/Repositories";
import Developers from "./Pages/Developers";

import "./App.css";
import "antd/dist/antd.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Repositories />} />
        <Route path="/developers" element={<Developers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
