import { ArrowRight } from "lucide-react";

interface WorkshopInspirationSectionProps {
  isDark: boolean;
}

const REGISTER_URL = "https://forms.gle/RBzvyMP4jUHtAMCB9";

export function WorkshopInspirationSection({
  isDark,
}: WorkshopInspirationSectionProps) {
  return (
    <section
      id="cta"
      className={`py-24 sm:py-32 px-6 sm:px-8 border-t ${
        isDark ? "border-white/10" : "border-slate-200/80"
      }`}
    >
      <div className="max-w-3xl mx-auto text-center">
        <p
          className={`text-xs font-semibold tracking-[0.18em] uppercase mb-4 ${
            isDark ? "text-cyan-400" : "text-blue-600"
          }`}
        >
          Đồng hành cùng IT CLUB
        </p>

        <h2
          className={`text-2xl sm:text-4xl md:text-[2.5rem] font-bold tracking-tight leading-[1.25] ${
            isDark ? "text-white" : "text-slate-900"
          }`}
        >
          “Đại học không chỉ là đi học rồi chờ đến ngày tốt nghiệp — đây là
          khoảng thời gian để bạn{" "}
          <span className="font-editorial italic font-normal">
            thử, sai, khám phá
          </span>{" "}
          và tạo ra cơ hội đầu tiên cho chính mình.”
        </h2>

        <p
          className={`mt-5 text-base sm:text-lg ${
            isDark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          Đừng bỏ lỡ cơ hội khởi động hành trình học tập đầy hứng khởi cùng CLB
          Tin học.
        </p>

        <div className="mt-9">
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-semibold text-sm sm:text-base transition-all duration-200 hover:-translate-y-0.5 shadow-md ${
              isDark
                ? "bg-white text-slate-950 hover:bg-sky-50"
                : "bg-blue-600 text-white hover:bg-blue-700 shadow-blue-600/20"
            }`}
          >
            <span>Đăng ký tham gia ngay</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
