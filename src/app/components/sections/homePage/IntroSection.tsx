import { useState, useEffect } from "react";
import { useTheme } from "../../../providers/ThemeProvider";
import {
  fetchCloudinaryImageList,
  CLOUDINARY_TAGS,
} from "../../../../services/cloudinary.service";
import { getIntroItems } from "../../../../services/intro.service";
import type { IntroItem } from "../../../../services/intro.service";

const FALLBACK_IMAGE =
  "https://res.cloudinary.com/dcvuaqnah/image/upload/v1780765921/image7_yq8igi.png";

export function IntroSection() {
  const { isDark } = useTheme();
  const [imageUrl, setImageUrl] = useState(FALLBACK_IMAGE);
  const items: IntroItem[] = getIntroItems();

  useEffect(() => {
    fetchCloudinaryImageList(CLOUDINARY_TAGS.introSection)
      .then((images) => {
        if (images.length > 0) setImageUrl(images[0]);
      })
      .catch((err) => console.error("Error fetching IntroSection image:", err));
  }, []);

  return (
    <section className="py-20 md:py-28 ">
      <div className="max-w-7xl mx-auto w-full  px-4 sm:px-6">
        <div className="py-10 md:py-18 md:pb-8 flex justify-between flex-col lg:flex-row items-center gap-10">
          <div>
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 font-sans ${
                isDark ? "text-white" : "text-blue-950"
              }`}
            >
              Giới thiệu
            </h2>
            <div className="space-y-4 mt-10 max-w-2xl md:max-w-xl text-lg sm:text-xl md:text-2xl">
              <p
                className={`text-lg sm:text-lg md:text-xl leading-relaxed max-w-3xl ${isDark ? "text-white/90" : "text-slate-700"}`}
              >
                Câu lạc bộ Tin học được thành lập với sứ mệnh tạo ra một cộng
                đồng năng động cho những người đam mê công nghệ thông tin.
              </p>
              <p
                className={`text-lg sm:text-lg md:text-xl leading-relaxed max-w-3xl ${isDark ? "text-white/90" : "text-slate-700"}`}
              >
                Từ những buổi workshop thực hành, các dự án nhóm, các cuộc thi
                CICT ICPC, CLB Tin học luôn mang đến những trải nghiệm học tập
                phong phú và cơ hội phát triển toàn diện cho tất cả mọi người.
              </p>
            </div>
          </div>
          <img
            className="cursor-pointer rounded-2xl shadow-lg w-full max-w-xl h-56 sm:h-64 md:h-92 lg:h-105 object-cover transition-transform duration-400 ease-out hover:scale-105 hover:-translate-y-1 transform-gpu"
            src={imageUrl}
            alt="IT CLUB image"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
          {items.map((t) => {
            const Icon = t.icon;
            return (
              <div
                key={t.name}
                className={`rounded-3xl p-8 sm:p-10 min-h-56 transition-transform duration-400 transform hover:scale-105 hover:shadow-lg cursor-pointer ${
                  isDark
                    ? "bg-[#0d2137]/80 border border-cyan-400/50 hover:border-cyan-400/70"
                    : "bg-white border border-blue-100/60 hover:border-blue-300"
                }`}
              >
                <div className="flex flex-col md:flex-row items-center gap-6 mb-4">
                  <div
                    className={`w-20 h-20 rounded-full flex items-center justify-center ${isDark ? "bg-cyan-400/10" : "bg-blue-50"}`}
                  >
                    <Icon
                      className={`${isDark ? "text-cyan-400" : "text-blue-500"} w-10 h-10`}
                    />
                  </div>
                  <h3
                    className={`text-2xl sm:text-3xl md:text-4xl font-extrabold font-sans ${
                      isDark ? "text-cyan-300" : "text-blue-800"
                    }`}
                  >
                    {t.name}
                  </h3>
                </div>
                <p
                  className={` sm:text-lg md:text-xl leading-relaxed font-sans ${isDark ? "text-white/90" : "text-slate-700"}`}
                >
                  {t.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
