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
import EmployeeFleet from "./Components/OScomponents/EmployeeFleet";
import CarFleet from "./Components/OScomponents/CarFleet";
import DedicatedFleet from "./Components/OScomponents/DedicatedFleet"
import SchoolFleet from "./Components/OScomponents/SchoolFleet"
import Electricfleet from "./Components/OScomponents/Electricfleet"
import FleetOverview from "./pages/FleetOverview";
import Footer from "./Components/Footer";
import Careers from "./pages/Careers";
import Quote from "./pages/Quote";

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
        <Route path="/quote" element={<Quote />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
