import riseHallSketch from "../assets/rise-hall-sketch.jpg";
import Navigation from "./Navigation";

const Header = () => {
  return (
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
      <Navigation />
    </header>
  );
};

export default Header;
