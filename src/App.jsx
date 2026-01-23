import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Navigation bar/Navbar";
import Footer from "./Footer/footer";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Residences from "./Pages/Residences";
import Testimonials from "./Pages/Testimonials";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/residences" element={<Residences />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
