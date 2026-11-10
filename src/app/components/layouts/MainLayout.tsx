import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import ThemeToggle from "./ThemeToggle";
import { FooterSection } from "./FooterSection";

export default function MainLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return (
    <div className="min-h-screen">
      <ThemeToggle />
      <Header />
      <Outlet />
      <FooterSection />
    </div>
  );
}
