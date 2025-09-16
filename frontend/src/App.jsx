import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Homepage";
import AboutPage from "./pages/AboutPage";
import SafteyAndTech from "./pages/SafetyAndTech";
import Contactus from "./pages/ContactUs";
import OurStructure from "./pages/OurStructure";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/safety" element={<SafteyAndTech/>}/>
        <Route path="/contact" element={<Contactus />} />
        <Route path="/structure" element={<OurStructure/>}/>
      </Routes>
    </Router>
  );
}

export default App;
