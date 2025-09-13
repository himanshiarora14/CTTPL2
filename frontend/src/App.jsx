import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Homepage";
import AboutPage from "./pages/AboutPage";
import SafteyAndTech from "./pages/SafetyAndTech";
import Contactus from "./pages/ContactUs";
import FleetOverview from "./pages/FleetOverview";
import Footer from "./Components/Footer";
import ScrollToTop from "../ScrollToTop";
import OurServices from "./pages/OurServices";

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/safety" element={<SafteyAndTech/>}/>
        <Route path="/contact" element={<Contactus />} />
        <Route path="/overview" element={<FleetOverview />} />
        <Route path="/services" element={<OurServices />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
