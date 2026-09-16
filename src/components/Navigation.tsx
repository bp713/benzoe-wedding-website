import { Link, useLocation } from "react-router-dom";

function Navigation() {
  const location = useLocation();

  return (
    <nav className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm sm:gap-x-6 sm:text-base">
      <Link
        to="/"
        className={`px-1 py-1 hover:underline ${location.pathname === "/" ? "underline" : ""}`}
      >
        Home
      </Link>
      <Link
        to="/details"
        className={`px-1 py-1 hover:underline ${location.pathname === "/details" ? "underline" : ""}`}
      >
        Details
      </Link>
      <Link
        to="/venue"
        className={`px-1 py-1 hover:underline ${location.pathname === "/venue" ? "underline" : ""}`}
      >
        The Venue
      </Link>
      <Link
        to="/accommodation"
        className={`px-1 py-1 hover:underline ${location.pathname === "/accommodation" ? "underline" : ""}`}
      >
        Accommodation
      </Link>
    </nav>
  );
}

export default Navigation;
