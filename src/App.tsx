import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "./app/providers/ThemeProvider";
import AppRoutes from "./app/routes/AppRoutes";

// HashRouter giữ lại để tương thích với GitHub Pages.
// Khi chuyển hosting, đổi sang BrowserRouter để tốt cho SEO hơn.

export default function App() {
  return (
    <HashRouter>
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </HashRouter>
  );
}
