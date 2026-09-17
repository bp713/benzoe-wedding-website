import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

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
    <div className="mt-3 sm:mt-4">
      <IconButton
        onClick={() => setIsOpen(true)}
        aria-label="Open navigation menu"
        className="!fixed !left-3 !top-4 !z-30 !flex !h-12 !w-12 !items-center !justify-center !rounded-full !border !border-[#85BDCC]/40 !bg-white/85 !text-[#85BDCC] !shadow-md !transition hover:!bg-white sm:!hidden"
      >
        <div className="flex w-5 flex-col items-center gap-1.5">
          <span className="block h-0.5 w-full rounded-full bg-current" />
          <span className="block h-0.5 w-full rounded-full bg-current" />
          <span className="block h-0.5 w-full rounded-full bg-current" />
        </div>
      </IconButton>

      <Drawer
        anchor="left"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        variant="temporary"
        ModalProps={{ keepMounted: true }}
        slotProps={{
          paper: {
            sx: {
              width: 220,
              borderTopRightRadius: 18,
              borderBottomRightRadius: 18,
              border: "1px solid rgba(133, 189, 204, 0.2)",
              backgroundColor: "rgba(255,255,255,0.96)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
            },
          },
        }}
      >
        <div className="flex items-center justify-between border-b border-[#85BDCC]/10 px-4 py-3">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#85BDCC]">
            Menu
          </span>
          <IconButton
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation"
            size="small"
            sx={{ color: "#85BDCC" }}
          >
            ×
          </IconButton>
        </div>

        <List sx={{ padding: 0 }}>
          {navItems.map(({ label, to }) => (
            <ListItemButton
              key={to}
              component={Link}
              to={to}
              onClick={() => setIsOpen(false)}
              selected={location.pathname === to}
              sx={{
                px: 2,
                py: 1.5,
                borderBottom: "1px solid rgba(133, 189, 204, 0.15)",
                "&.Mui-selected": {
                  backgroundColor: "rgba(133, 189, 204, 0.08)",
                },
                "&:hover": {
                  backgroundColor: "rgba(133, 189, 204, 0.08)",
                },
              }}
            >
              <ListItemText
                sx={{
                  "& .MuiListItemText-primary": {
                    fontSize: 14,
                    fontWeight: location.pathname === to ? 700 : 500,
                    color: "#85BDCC",
                  },
                }}
              >
                {label}
              </ListItemText>
            </ListItemButton>
          ))}
        </List>
      </Drawer>

      <nav className="hidden sm:flex sm:items-center sm:justify-center sm:gap-5 sm:pt-1">
        {navItems.map(({ label, to }) => (
          <Link
            key={to}
            to={to}
            className={[
              "px-1 py-1 text-base transition-colors hover:underline",
              location.pathname === to ? "font-semibold underline" : "",
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
