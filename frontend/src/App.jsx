import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./pages/Homepage";
import AboutPage from "./pages/AboutPage";
import OurServices from "./pages/OurServices";
import ScrollToTop from "../ScrollToTop";
import SafetyAndTech from "./pages/SafetyAndTech";
import ContactUs from "./pages/ContactUs";
import Ourservices from "./Components/Ourservices";
import CarFleet from "./Components/OScomponents/CarFleet";
import DedicatedFleet from "./Components/OScomponents/DedicatedFleet";
import SchoolFleet from "./Components/OScomponents/SchoolFleet";
import FleetOverview from "./pages/FleetOverview";
import Footer from "./Components/Footer";
import Careers from "./pages/Careers";
import Quote from "./pages/Quote";
import OurStructure from "./pages/OurStructure";
import SchoolFleetService from "./pages/SchoolFleetService";
import EmployeeTransportService from "./Components/EmployeeTransportService";
import Gallery from "./pages/Gallery";
import NotFoundPage from "./pages/NotFoundPage";
import ElectricFleetServices from "./Components/ElectricFleetServices";

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/overview" element={<FleetOverview />} />
        <Route path="/employee-fleet" element={<EmployeeTransportService  />} />
        <Route path="/car-leasing" element={<CarFleet />} />
        <Route path="/dedicated-fleet" element={<DedicatedFleet />} />
        <Route path="/electric-fleet" element={<ElectricFleetServices />} />
        <Route path="/school-fleet" element={<SchoolFleet />} />
        <Route path="/employee-transport-service" element={<EmployeeTransportService />} />
        <Route path="/electric-fleet-service" element={<ElectricFleetServices />} />
        <Route path="/safety" element={<SafetyAndTech />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/structure" element={<OurStructure />} />
        <Route path="/school-fleet-service" element={<SchoolFleetService />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
