import { NavLink } from "react-router-dom";
import { useTheme } from "../../providers/ThemeProvider";
import { navItems } from "../../../shared/constants/navigation";

const socials = ["facebook", "github"] as const;
const linkSocials: Record<(typeof socials)[number], string> = {
  facebook: "https://www.facebook.com/ctuit.club",
  github: "https://github.com/CTU-ITClub",
};

export function FooterSection() {
  const { isDark } = useTheme();

  return (
    <footer
      className={`${
        isDark ? "bg-[#0a1929]" : "bg-blue-50 border-t border-blue-100"
      } py-16`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3
              className={`text-2xl sm:text-3xl font-extrabold mb-4 sm:mb-6 font-sans ${
                isDark ? "text-cyan-400" : "text-blue-800"
              }`}
            >
              Liên hệ
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:itc.cit.ctu@gmail.com"
                className={`flex items-center gap-3 transition-colors group ${
                  isDark
                    ? "text-white hover:text-cyan-400"
                    : "text-slate-700 hover:text-blue-600"
                }`}
              >
                <div
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors ${
                    isDark
                      ? "bg-cyan-400/20 group-hover:bg-cyan-400/30"
                      : "bg-blue-200 group-hover:bg-blue-300"
                  }`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <span className="font-semibold text-base sm:text-lg">
                  itc.cit.ctu@gmail.com
                </span>
              </a>
            </div>
          </div>

          <div>
            <h3
              className={`text-2xl sm:text-3xl font-extrabold mb-4 sm:mb-6 font-sans ${
                isDark ? "text-cyan-400" : "text-blue-800"
              }`}
            >
              Liên kết
            </h3>
            <nav className="space-y-3 flex flex-col items-start">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.to}
                  className={`block text-base sm:text-lg transition-colors transform duration-200 font-stretch-semi-expanded ${
                    isDark
                      ? "text-white hover:text-cyan-400"
                      : "text-slate-700 hover:text-blue-600"
                  }`}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>

          <div>
            <h3
              className={`text-2xl sm:text-3xl font-extrabold mb-4 sm:mb-6 font-sans ${
                isDark ? "text-cyan-400" : "text-blue-800"
              }`}
            >
              Kết nối
            </h3>
            <div className="flex gap-4">
              {socials.map((social) => (
                <a
                  key={social}
                  href={linkSocials[social]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isDark
                      ? "bg-cyan-400/20 hover:bg-cyan-400 text-cyan-400 hover:text-white"
                      : "bg-blue-200 hover:bg-blue-600 text-blue-700 hover:text-white hover:scale-110"
                  }`}
                  aria-label={social}
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                    {social === "facebook" ? (
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                    ) : (
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.094.682-.217.682-.483 0-.237-.008-.866-.013-1.699-2.782.605-3.369-1.343-3.369-1.343-.454-1.157-1.11-1.466-1.11-1.466-.908-.62.069-.607.069-.607 1.004.071 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.271.097-2.649 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.706.115 2.504.337 1.909-1.295 2.748-1.026 2.748-1.026.545 1.378.202 2.396.1 2.649.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .269.18.582.688.483A10.017 10.017 0 0022 12.017C22 6.484 17.523 2 12 2z" />
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          className={`pt-8 border-t ${
            isDark ? "border-cyan-400/20" : "border-blue-200"
          }`}
        >
          <p
            className={`text-center text-base sm:text-lg ${
              isDark ? "text-white/70" : "text-slate-600"
            }`}
          >
            © 2026 Can Tho IT Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
