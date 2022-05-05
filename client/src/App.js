import React from "react";
import Header from "./Containers/Header";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.scss";

import Login from "./features/login/Login";
import Home from "./features/home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
