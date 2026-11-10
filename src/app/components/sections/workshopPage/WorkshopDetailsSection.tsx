import { ArrowUpRight } from "lucide-react";

interface WorkshopDetailsSectionProps {
  isDark: boolean;
}

const REGISTER_URL = "https://forms.gle/RBzvyMP4jUHtAMCB9";

const eventFacts = [
  {
    label: "Thời gian",
    value: "18:00 – 20:30, ngày 06/10/2026",
  },
  {
    label: "Địa điểm",
    value: "Hội trường Trường CNTT&TT – Đại học Cần Thơ",
  },
  {
    label: "Quyền lợi",
    value:
      "Cộng 03 điểm mục V.b trong học kỳ I, năm học 2026 – 2027 (dành cho SV Trường CNTT&TT – ĐHCT)",
  },
  {
    label: "Link đăng ký",
    value: REGISTER_URL,
    isLink: true,
  },
];

export function WorkshopDetailsSection({
  isDark,
}: WorkshopDetailsSectionProps) {
  return (
    <section
      id="event-info"
      className={`py-20 sm:py-28 px-6 sm:px-8 border-t ${
        isDark
          ? "border-white/10 bg-[#081524]"
          : "border-slate-200/80 bg-slate-50/70"
      }`}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Heading */}
        <div className="lg:col-span-5">
          <p
            className={`text-xs font-semibold tracking-[0.18em] uppercase mb-3 ${
              isDark ? "text-cyan-400" : "text-blue-600"
            }`}
          >
            Thông tin chi tiết
          </p>
          <h2
            className={`text-3xl sm:text-4xl font-bold tracking-tight leading-[1.15] ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Lịch trình &{" "}
            <span className="font-editorial italic font-normal">
              Quyền lợi.
            </span>
          </h2>
          <p
            className={`mt-4 text-sm sm:text-base leading-relaxed ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            Sự kiện mở cửa tự do và hoàn toàn miễn phí cho các bạn sinh viên,
            đặc biệt là Tân binh K52 Trường CNTT&TT – ĐHCT.
          </p>
        </div>

        {/* Right Clean Specification List */}
        <div
          className={`lg:col-span-7 divide-y border-y ${
            isDark
              ? "divide-white/10 border-white/10"
              : "divide-slate-200 border-slate-200"
          }`}
        >
          {eventFacts.map((fact) => (
            <div
              key={fact.label}
              className="py-5 sm:py-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-8"
            >
              <span
                className={`text-xs sm:text-sm font-medium uppercase tracking-wider shrink-0 sm:w-36 ${
                  isDark ? "text-slate-400" : "text-slate-500"
                }`}
              >
                {fact.label}
              </span>

              {fact.isLink ? (
                <a
                  href={fact.value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold underline underline-offset-4 sm:text-right break-all ${
                    isDark
                      ? "text-cyan-300 hover:text-white"
                      : "text-blue-600 hover:text-blue-800"
                  }`}
                >
                  <span>{fact.value}</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0" />
                </a>
              ) : (
                <span
                  className={`text-base sm:text-lg font-semibold sm:text-right ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}
                >
                  {fact.value}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
