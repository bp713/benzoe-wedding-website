import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Accommodation from "./pages/Accommodation";
import EmailSubscribe from "./components/EmailSubscribe";
import Venue from "./pages/Venue";
import Header from "./components/Header";
import RSVP from "./pages/RSVP";

export default function App() {
  return (
    <Router>
      <div className="bg-[#FAFAF7] text-[#85BDCC] font-serif min-h-screen">
        <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 sm:px-6 lg:px-8">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/details" element={<Details />} />
              <Route path="/venue" element={<Venue />} />
              <Route path="/accommodation" element={<Accommodation />} />
              <Route path="/rsvp" element={<RSVP />} />
            </Routes>
          </main>
          <footer className="px-2 py-6 text-center text-sm text-[#85BDCC]/70">
            <EmailSubscribe />© {new Date().getFullYear()} Ben & Zoe
          </footer>
        </div>
      </div>
    </Router>
  );
}
