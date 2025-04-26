import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./components/Home";
import Mission from "./pages/MissionVision";
import Products from "./pages/OurProducts";
import Career from "./pages/Career";
import Investors from "./pages/Investors";
import Expansion from "./pages/ReachAndExpansion";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/products" element={<Products />} />
          <Route path="/career" element={<Career />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/expansion" element={<Expansion />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer /> 
    </div>
  </Router>
  );
}

export default App;
