import riseHallSketch from "../assets/rise-hall-sketch.jpg";
import Image from "next/image";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="px-2 pb-4 pt-6 text-center sm:px-4 sm:pb-6 lg:pt-8">
      <a
        href="https://www.dine.co.uk/venues/rise-hall/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={riseHallSketch}
          alt="Rise Hall Sketch"
          width={240}
          height={120}
          className="mx-auto mb-4 h-20 w-auto transition-opacity hover:opacity-80 sm:h-24"
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
