import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from './pages/home_page/HomePage'
import "./App.css";
import Navbar from "./components/navbar/NavbarCustom";


function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
