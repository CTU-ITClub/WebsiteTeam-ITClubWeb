import { useState, useEffect } from "react";
import LogoCarousel from "./LogoCarousel";
import { useTheme } from "../../../providers/ThemeProvider";
import {
  fetchCloudinaryImageList,
  CLOUDINARY_TAGS,
} from "../../../../services/cloudinary.service";

export function ActivitiesSection() {
  const { isDark } = useTheme();
  const [logosWorkshop, setLogosWorkshop] = useState<string[]>([]);
  const [logosGame, setLogosGame] = useState<string[]>([]);
  const [logosExam, setLogosExam] = useState<string[]>([]);

  useEffect(() => {
    fetchCloudinaryImageList(CLOUDINARY_TAGS.activitiesWorkshop)
      .then((urls) => urls.length && setLogosWorkshop(urls))
      .catch((err) => console.error("Error fetching workshop images:", err));

    fetchCloudinaryImageList(CLOUDINARY_TAGS.activitiesGame)
      .then((urls) => urls.length && setLogosGame(urls))
      .catch((err) => console.error("Error fetching game images:", err));

    fetchCloudinaryImageList(CLOUDINARY_TAGS.activitiesExam)
      .then((urls) => urls.length && setLogosExam(urls))
      .catch((err) => console.error("Error fetching exam images:", err));
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
      <h2
        className={`text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 sm:mb-10 text-center font-sans ${
          isDark ? "text-white" : "text-blue-950"
        }`}
      >
        Hoạt động
      </h2>
      <div className="mb-10">
        <LogoCarousel
          LOGOS={logosWorkshop}
          direction="left"
          title="Workshop"
        />
        <LogoCarousel
          LOGOS={logosGame}
          direction="right"
          title="Game và tuyển sinh"
        />
        <LogoCarousel
          LOGOS={logosExam}
          direction="left"
          title="Các cuộc thi"
        />
      </div>
    </section>
  );
}
