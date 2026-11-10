import { ArrowRight } from "lucide-react";
import heroBg from "../../../../assets/images/workshop/hero-bg.jpg";

export function WorkshopHeroSection() {
  const scrollToHighlights = () => {
    document
      .getElementById("highlights")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative w-full min-h-[88svh] lg:min-h-[92svh] overflow-hidden flex flex-col justify-start">
      {/* Full-bleed background inspired by Image 1 */}
      <img
        src={heroBg}
        alt="Workshop Chào đón Tân sinh viên K52 - Đại học đừng Học đại"
        className="absolute inset-0 w-full h-full object-cover object-bottom select-none pointer-events-none"
      />

      {/* Subtle top sky veil for effortless text legibility while keeping bottom artwork vivid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(6, 22, 58, 0.62) 0%, rgba(11, 41, 98, 0.34) 42%, rgba(11, 41, 98, 0.08) 72%, rgba(10, 25, 41, 0.18) 100%)",
        }}
      />

      {/* Centered Editorial Content (Inspired by Images 4 & 5) */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-14 sm:pt-20 md:pt-24 pb-48 sm:pb-64 text-center">
        <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-sky-200/95 mb-4">
          Workshop Chào Đón Tân Sinh Viên K52
        </p>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.08] drop-shadow-xs">
          Đại học đừng{" "}
          <span className="font-editorial italic font-semibold text-sky-100">
            “Học đại”.
          </span>
        </h1>

        <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed font-normal">
          Định hướng lộ trình học tập, săn học bổng, trao đổi quốc tế và bắt đầu
          dự án thực tế ngay từ năm nhất cùng CLB Tin học.
        </p>

        {/* Clean Pill CTA Row */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
          <a
            href="https://forms.gle/RBzvyMP4jUHtAMCB9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm sm:text-base shadow-lg shadow-blue-950/30 transition-all duration-200 hover:-translate-y-0.5"
          >
            <span>Đăng ký ngay</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <button
            type="button"
            onClick={scrollToHighlights}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/15 hover:bg-white/25 text-white font-medium text-sm sm:text-base border border-white/35 backdrop-blur-md transition-all duration-200 cursor-pointer"
          >
            <span>Tìm hiểu thêm</span>
          </button>
        </div>

        {/* Minimal inline time & location metadata */}
        <p className="mt-6 text-xs sm:text-sm font-medium text-sky-100/90 tracking-wide">
          18:00 – 20:30, ngày 06/10/2026 &nbsp;•&nbsp; Hội trường Trường CNTT&TT
          – ĐH Cần Thơ
        </p>
      </div>
    </section>
  );
}
