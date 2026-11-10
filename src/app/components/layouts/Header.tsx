import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import logoLight from "../../../assets/images/layouts/logo-light.svg";
import logoDark from "../../../assets/images/layouts/logo-dark.svg";

interface HeaderProps {
  isDark: boolean;
}

const REGISTER_URL = "https://forms.gle/RBzvyMP4jUHtAMCB9";

const navItems = [
  { label: "Trang chủ", to: "/" },
  { label: "Giới thiệu", to: "/about" },
  { label: "Nhân sự", to: "/staff" },
  { label: "Hoạt động", to: "/activities" },
];

export default function Header({ isDark }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);
  const handleClose = () => setIsOpen(false);

  return (
    <header
      className={`sticky top-0 z-40 backdrop-blur-md transition-colors duration-300 ${
        isDark
          ? "bg-[#0a1929]/90 border-b border-white/10"
          : "bg-white/90 border-b border-slate-200/70"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center justify-between gap-4">
          <NavLink
            to="/"
            onClick={handleClose}
            className="flex items-center focus:outline-none"
          >
            <img
              src={isDark ? logoDark : logoLight}
              alt="IT Club Logo"
              className="h-9 w-auto sm:h-10"
            />
          </NavLink>

          <div className="flex items-center gap-2 md:hidden">
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full text-xs font-semibold text-white bg-blue-600"
            >
              Đăng ký
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <button
              type="button"
              onClick={handleToggle}
              className={`inline-flex items-center justify-center rounded-full p-2 transition-colors ${
                isDark
                  ? "text-white hover:bg-white/10"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <nav
          className={`flex-col md:flex-row md:items-center gap-1 md:gap-7 ${
            isOpen ? "flex py-2" : "hidden"
          } md:flex`}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-lg text-sm sm:text-base font-medium transition-colors duration-200 ${
                  isActive
                    ? isDark
                      ? "text-cyan-300 font-semibold"
                      : "text-blue-600 font-semibold"
                    : isDark
                      ? "text-slate-300 hover:text-white"
                      : "text-slate-600 hover:text-slate-950"
                }`
              }
              onClick={handleClose}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
              isDark
                ? "bg-white text-slate-950 hover:bg-sky-50"
                : "bg-slate-900 text-white hover:bg-blue-700"
            }`}
          >
            <span>Đăng ký ngay</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
