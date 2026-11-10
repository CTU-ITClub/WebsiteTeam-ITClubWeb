import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../providers/ThemeProvider";
import { navItems } from "../../../shared/constants/navigation";
import logoLight from "../../../assets/images/layouts/logo-light.svg";
import logoDark from "../../../assets/images/layouts/logo-dark.svg";

export default function Header() {
  const { isDark } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);
  const handleClose = () => setIsOpen(false);

  return (
    <header
      className={`sticky top-0 z-40 backdrop-blur-md ${
        isDark
          ? "bg-[#0d2137]/90 border-b-0"
          : "bg-white/90 border-b border-blue-100"
      } shadow-lg`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center justify-between gap-4">
          <img
            src={isDark ? logoDark : logoLight}
            alt="IT Club Logo"
            className="h-10 w-auto sm:h-12"
          />
          <button
            type="button"
            onClick={handleToggle}
            className={`inline-flex md:hidden items-center justify-center rounded-full p-2 transition-colors ${
              isDark
                ? "text-white hover:bg-cyan-400/20"
                : "text-slate-700 hover:bg-blue-100"
            }`}
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        <nav
          className={`flex flex-col md:flex-row md:flex-wrap gap-2 md:gap-6 lg:gap-8 rounded-2xl md:rounded-2xl px-3 md:px-0 py-3 md:py-0 ${
            isDark
              ? "bg-[#0b1c2e]/80 md:bg-transparent border border-cyan-400/20 md:border-0"
              : "bg-white/90 md:bg-transparent border border-blue-100 md:border-0"
          } shadow-xl md:shadow-none ${isOpen ? "flex" : "hidden"} md:flex`}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `relative px-4 py-2 md:px-3 md:py-2 rounded-xl md:rounded-2xl font-semibold text-base sm:text-lg md:text-xl transition-all duration-300 ${
                  isActive
                    ? isDark
                      ? "text-cyan-300 bg-cyan-400/15"
                      : "text-blue-700 bg-blue-100"
                    : isDark
                      ? "text-white/90 hover:text-cyan-200 hover:bg-cyan-400/10"
                      : "text-slate-700 hover:text-blue-700 hover:bg-blue-50"
                }`
              }
              onClick={handleClose}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
