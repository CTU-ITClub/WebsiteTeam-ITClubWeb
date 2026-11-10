import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTheme } from "../../../providers/ThemeProvider";
import {
  fetchCloudinaryImageList,
  CLOUDINARY_TAGS,
} from "../../../../services/cloudinary.service";

export function HeroSection() {
  const { isDark } = useTheme();
  const [heroImages, setHeroImages] = useState<string[]>([]);
  const [currentHeroImg, setCurrentHeroImg] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    const loadHeroImages = async () => {
      try {
        const images = await fetchCloudinaryImageList(
          CLOUDINARY_TAGS.heroSection,
          controller.signal
        );
        setHeroImages(images);
        setCurrentHeroImg(0);
      } catch {
        if (!controller.signal.aborted) {
          setHeroImages([]);
        }
      }
    };

    void loadHeroImages();

    return () => controller.abort();
  }, []);

  const nextHeroImg = useCallback(() => {
    if (heroImages.length === 0) return;
    setCurrentHeroImg((prev) => (prev + 1) % heroImages.length);
  }, [heroImages.length]);

  const prevHeroImg = () => {
    if (heroImages.length === 0) return;
    setCurrentHeroImg((prev) =>
      prev === 0 ? heroImages.length - 1 : prev - 1
    );
  };

  const selectHeroImg = (index: number) => {
    setCurrentHeroImg(index);
  };

  useEffect(() => {
    if (heroImages.length === 0) return;
    const timer = setInterval(nextHeroImg, 5000);
    return () => clearInterval(timer);
  }, [nextHeroImg, heroImages.length]);

  return (
    <section className="relative h-[90svh] md:h-dvh min-h-[90svh] md:min-h-screen overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0">
        {heroImages.map((img, idx) => (
          <img
            key={img}
            src={img}
            alt={`Hero ${idx + 1}`}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
              currentHeroImg === idx ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div
          className={`absolute inset-0 ${
            isDark
              ? "bg-linear-to-b from-[#0a1929]/70 to-[#0d2137]/90"
              : "bg-linear-to-r from-blue-700/80 to-cyan-500/70"
          }`}
        />
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <button
          onClick={prevHeroImg}
          className="hidden md:inline-flex p-3 rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors backdrop-blur-sm"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>

        <div className="max-w-2xl text-center md:text-left flex-1 mx-4 sm:mx-6 md:mx-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 sm:mb-6 drop-shadow-lg font-sans">
            IT CLUB
          </h1>
          <p
            className={`text-lg sm:text-xl md:text-2xl font-semibold mb-4 drop-shadow-md ${
              isDark ? "text-cyan-300" : "text-blue-50"
            }`}
          >
            Câu lạc bộ Tin học - CICT
          </p>
          <div className="flex gap-3 mt-6 sm:mt-8 justify-center md:justify-start">
            {heroImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => selectHeroImg(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentHeroImg === idx
                    ? "w-10 sm:w-14 bg-cyan-400"
                    : "w-3 sm:w-4 bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        <button
          onClick={nextHeroImg}
          className="hidden md:inline-flex p-3 rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors backdrop-blur-sm"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
}
