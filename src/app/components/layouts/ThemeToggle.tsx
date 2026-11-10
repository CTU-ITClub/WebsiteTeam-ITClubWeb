import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../providers/ThemeProvider";

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`fixed top-20 right-4 sm:top-24 sm:right-8 z-50 p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 ${
        isDark
          ? "bg-blue-500 hover:bg-blue-600 text-white"
          : "bg-white hover:bg-blue-50 text-blue-600 border border-blue-100"
      }`}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="w-5 h-5 sm:w-6 sm:h-6" />
      ) : (
        <Moon className="w-5 h-5 sm:w-6 sm:h-6" />
      )}
    </button>
  );
}
