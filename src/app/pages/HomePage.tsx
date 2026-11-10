import {
  ActivitiesSection,
  TeamSection,
  QaASection,
  HeroSection,
  IntroSection,
} from "../components/sections/homePage/index";
import { useFadeInObserver } from "../../shared/hooks/useFadeInObserver";
import { useTheme } from "../providers/ThemeProvider";

function FadeInSection({ children }: { children: React.ReactNode }) {
  const { ref, isVisible } = useFadeInObserver();

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
    >
      {children}
    </div>
  );
}

export default function HomePage() {
  const { isDark } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${isDark ? "dark bg-[#0a1929]" : "bg-slate-50"}`}
    >
      <HeroSection />

      <div
        className={`${isDark ? "bg-linear-to-b from-[#0d2137] to-[#1a365d]" : "bg-linear-to-b from-slate-50 to-white"} overflow-x-hidden`}
      >
        <FadeInSection>
          <IntroSection />
        </FadeInSection>
        <FadeInSection>
          <ActivitiesSection />
        </FadeInSection>
        <FadeInSection>
          <TeamSection />
        </FadeInSection>
        <FadeInSection>
          <QaASection />
        </FadeInSection>
      </div>
    </div>
  );
}
