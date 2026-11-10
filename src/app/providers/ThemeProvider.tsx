import { createContext, useContext, useEffect, useState } from "react";

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

/**
 * Provider bọc toàn bộ app, quản lý trạng thái dark/light mode.
 * Tự động đọc và lưu vào localStorage để giữ theme sau khi F5.
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState<boolean>(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", isDark);
    document.documentElement.style.colorScheme = isDark ? "dark" : "light";
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * Hook để lấy theme state từ bất kỳ component nào bên trong ThemeProvider.
 * Không cần truyền isDark qua props nữa.
 *
 * eslint-disable-next-line react-refresh/only-export-components -- useTheme phải
 * co-locate với ThemeProvider vì phụ thuộc vào ThemeContext
 */
// eslint-disable-next-line react-refresh/only-export-components
export function useTheme(): ThemeContextType {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme phải được dùng bên trong <ThemeProvider>");
  }
  return ctx;
}
