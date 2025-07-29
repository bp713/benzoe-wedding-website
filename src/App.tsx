import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Accommodation from "./pages/Accommodation";
import EmailSubscribe from "./components/EmailSubscribe";
import Venue from "./pages/Venue";
import Header from "./components/Header";

export default function App() {
  return (
    <Router>
      <div className="bg-[#FAFAF7] text-[#85BDCC] font-serif flex flex-col min-h-screen">
        <Header></Header>
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details" element={<Details />} />
            <Route path="/venue" element={<Venue />} />
            <Route path="/accommodation" element={<Accommodation />} />
          </Routes>
        </main>
        <footer className="text-center p-6 text-sm text-[#85BDCC]/70">
          <EmailSubscribe />© {new Date().getFullYear()} Ben & Zoe
        </footer>
      </div>
    </Router>
  );
}
