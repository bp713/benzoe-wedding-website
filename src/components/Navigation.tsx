import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Details", to: "/details" },
  { label: "The Venue", to: "/venue" },
  { label: "Accommodation", to: "/accommodation" },
  { label: "RSVP", to: "/rsvp" },
];

function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <div className="mt-3">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={isOpen}
        aria-label="Toggle navigation menu"
        className="flex h-12 w-12 items-center justify-center rounded-full border border-[#85BDCC]/40 bg-white/80 text-[#85BDCC] shadow-sm transition hover:bg-white sm:hidden"
      >
        <div className="flex w-5 flex-col items-center gap-1.5">
          <span
            className={[
              "block h-0.5 w-full rounded-full bg-current transition-all duration-200",
              isOpen ? "translate-y-2 rotate-45" : "",
            ].join(" ")}
          />
          <span
            className={[
              "block h-0.5 w-full rounded-full bg-current transition-all duration-200",
              isOpen ? "opacity-0" : "opacity-100",
            ].join(" ")}
          />
          <span
            className={[
              "block h-0.5 w-full rounded-full bg-current transition-all duration-200",
              isOpen ? "-translate-y-2 -rotate-45" : "",
            ].join(" ")}
          />
        </div>
      </button>

      <nav
        className={[
          "overflow-hidden transition-all duration-300 ease-out",
          isOpen
            ? "mt-2 flex flex-col rounded-2xl border border-[#85BDCC]/20 bg-white/85 shadow-lg backdrop-blur-sm"
            : "hidden",
          "sm:mt-0 sm:flex sm:flex-row sm:items-center sm:justify-center sm:gap-5 sm:border-0 sm:bg-transparent sm:shadow-none sm:backdrop-blur-none",
        ].join(" ")}
      >
        {navItems.map(({ label, to }) => (
          <Link
            key={to}
            to={to}
            onClick={() => setIsOpen(false)}
            className={[
              "block px-4 py-3 text-center text-sm transition-colors sm:px-1 sm:py-1 sm:text-base",
              "hover:bg-[#85BDCC]/10 hover:text-[#6ca7b6] sm:hover:bg-transparent sm:hover:text-inherit",
              location.pathname === to
                ? "font-semibold underline sm:underline"
                : "",
            ].join(" ")}
          >
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default Navigation;
