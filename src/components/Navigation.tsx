import { Link, useLocation } from "react-router-dom";

function Navigation() {
  const location = useLocation();

  return (
    <nav className="mt-2 space-x-6">
      <Link
        to="/"
        className={`hover:underline ${location.pathname === "/" ? "underline" : ""}`}
      >
        Home
      </Link>
      <Link
        to="/details"
        className={`hover:underline ${location.pathname === "/details" ? "underline" : ""}`}
      >
        Details
      </Link>
      <Link
        to="/venue"
        className={`hover:underline ${location.pathname === "/venue" ? "underline" : ""}`}
      >
        The Venue
      </Link>
      <Link
        to="/accommodation"
        className={`hover:underline ${location.pathname === "/accommodation" ? "underline" : ""}`}
      >
        Accommodation
      </Link>
    </nav>
  );
}

export default Navigation;
