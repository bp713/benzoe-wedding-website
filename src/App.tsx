import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Marquee from "./components/Marquee";
import riseHallSketch from "./assets/rise-hall-sketch.PNG";

export default function App() {
  return (
    <Router>
      <div className="bg-[#FAFAF7] text-[#85BDCC] font-serif flex flex-col">
        <header className="p-6 text-center shadow-md ">
          <a href="https://www.dine.co.uk/venues/rise-hall/" target="_blank" rel="noopener noreferrer">
            <img
              src={riseHallSketch}
              alt="Rise Hall Sketch"
              className="mx-auto mb-4 h-24 hover:opacity-80 transition-opacity"
            />
          </a>
          <h1 className="text-6xl">Zoe & Ben</h1>
          <nav className="mt-2 space-x-6">
            <a href="/" className="hover:underline">
              Home
            </a>
            <a href="/details" className="hover:underline">
              Details
            </a>
          </nav>
        </header>
        <main className="flex-1">
          <Marquee></Marquee>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details" element={<Details />} />
          </Routes>
        </main>
        <footer className="text-center p-4 text-sm text-[#85BDCC]/70">
          © {new Date().getFullYear()} Ben & Zoe
        </footer>
      </div>
    </Router>
  );
}
