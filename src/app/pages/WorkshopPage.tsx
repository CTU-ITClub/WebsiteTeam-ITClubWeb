import {
  WorkshopBenefitsSection,
  WorkshopDetailsSection,
  WorkshopHeroSection,
  WorkshopInspirationSection,
} from "../components/sections/workshopPage";

interface WorkshopPageProps {
  isDark: boolean;
}

export default function WorkshopPage({ isDark }: WorkshopPageProps) {
  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "dark bg-[#0a1929] text-white" : "bg-white text-slate-900"
      }`}
    >
      <WorkshopHeroSection />

      <main>
        <WorkshopBenefitsSection isDark={isDark} />
        <WorkshopDetailsSection isDark={isDark} />
        <WorkshopInspirationSection isDark={isDark} />
      </main>
    </div>
  );
}
