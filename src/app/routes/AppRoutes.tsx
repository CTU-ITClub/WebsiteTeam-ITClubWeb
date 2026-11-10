import { Route, Routes } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import AboutPage from "../pages/AboutPage";
import ActivityDetailPage from "../pages/ActivityDetailPage";
import ActivitiesPage from "../pages/ActivitiesPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import StaffPage from "../pages/StaffPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="staff" element={<StaffPage />} />
        <Route path="activities" element={<ActivitiesPage />} />
        <Route path="activities/:slug" element={<ActivityDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
