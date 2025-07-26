import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import EmailSubscribe from "./components/EmailSubscribe";
import riseHallSketch from "./assets/rise-hall-sketch.jpg";
import Venue from "./pages/Venue";

export default function App() {
  return (
    <Router>
      <div className="bg-[#FAFAF7] text-[#85BDCC] font-serif flex flex-col min-h-screen">
        <header className="p-6 text-center">
          <a
            href="https://www.dine.co.uk/venues/rise-hall/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={riseHallSketch}
              alt="Rise Hall Sketch"
              className="mx-auto mb-4 h-24 hover:opacity-80 transition-opacity"
            />
          </a>
          <div
            className="text-7xl"
            style={{ fontWeight: 200, fontFamily: "Cormorant Infant, serif" }}
          >
            Zoe & Ben
          </div>
          <nav className="mt-2 space-x-6">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/details" className="hover:underline">
              Details
            </Link>
            <Link to="/venue" className="hover:underline">
              Venue
            </Link>
          </nav>
        </header>
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details" element={<Details />} />
            <Route path="/venue" element={<Venue />} />
          </Routes>
        </main>
        <footer className="text-center p-6 text-sm text-[#85BDCC]/70">
          <EmailSubscribe />© {new Date().getFullYear()} Ben & Zoe
        </footer>
      </div>
    </Router>
  );
}
