import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Homepage";
import AboutPage from "./pages/AboutPage";
import OurServices from "./pages/OurServices";
import ScrollToTop from "../ScrollToTop"
import SafetyAndTech from "./pages/SafetyAndTech";
import ContactUs from "./pages/ContactUs";
import Ourservices from "./Components/Ourservices";
import EmployeeFleet from "./Components/EmployeeFleet";
import CarFleet from "./Components/CarFleet";
import DedicatedFleet from "./Components/DedicatedFleet"
import SchoolFleet from "./Components/SchoolFleet"
import Electricfleet from "./Components/Electricfleet"
import FleetOverview from "./pages/FleetOverview";
import Footer from "./Components/Footer";
import Careers from "./pages/Careers";

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/overview" element={<FleetOverview />} />
        <Route path="/employee-fleet" element={<EmployeeFleet />} />
        <Route path="/car-leasing" element={<CarFleet />} />
        <Route path="/dedicated-fleet" element={<DedicatedFleet />} />
         <Route path="/electric-fleet" element={<Electricfleet />} />
        <Route path="/school-fleet" element={<SchoolFleet />} />
        <Route path="/safety" element={<SafetyAndTech />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
