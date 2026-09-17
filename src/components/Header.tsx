import riseHallSketch from "../assets/rise-hall-sketch.jpg";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="px-2 pb-4 pt-6 text-center sm:px-4 sm:pb-6 lg:pt-8">
      <a
        href="https://www.dine.co.uk/venues/rise-hall/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={riseHallSketch}
          alt="Rise Hall Sketch"
          className="mx-auto mb-4 h-20 transition-opacity hover:opacity-80 sm:h-24"
        />
      </a>
      <div
        className="text-5xl sm:text-6xl lg:text-7xl font-serif"
        style={{ fontWeight: 200 }}
      >
        Zoe & Ben
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
