import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import EventsPage from "./pages/EventsPage";
import Donate from "./pages/Donate";
import ApplyIntern from "./pages/ApplyIntern";
import Contact from "./pages/Contact";
import Certificates from "./pages/Certificates";
import VerifyCertificate from "./pages/VerifyCertificate";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import GoToTop from "./components/GoToTop";

import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="overflow-hidden">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/internship" element={<ApplyIntern />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/verify-certificate" element={<VerifyCertificate />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
      <GoToTop />
      <Footer />
    </div>
  );
}

export default App;
