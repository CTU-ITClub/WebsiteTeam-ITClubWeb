interface WorkshopBenefitsSectionProps {
  isDark: boolean;
}

const highlights = [
  {
    number: "01",
    title: "Kế hoạch học tập & GPA",
    description:
      "Chia sẻ cách đăng ký học phần, lập kế hoạch học tập và hiểu đúng tầm quan trọng của GPA, điểm rèn luyện.",
  },
  {
    number: "02",
    title: "Học bổng & Trao đổi",
    description:
      "Tìm hiểu các nguồn học bổng phù hợp, cách chuẩn bị hồ sơ và định hướng cơ hội học tập, trao đổi quốc tế.",
  },
  {
    number: "03",
    title: "Dự án & Hackathon",
    description:
      "Biết cách bắt đầu dự án thực tế, hackathon và cuộc thi ngay từ năm nhất dù đang ở giai đoạn chưa biết nhiều.",
  },
  {
    number: "04",
    title: "Giải đáp trực tiếp",
    description:
      "Trực tiếp đặt câu hỏi và tháo gỡ những băn khoăn cùng các anh chị đi trước tại CLB Tin học.",
  },
];

export function WorkshopBenefitsSection({
  isDark,
}: WorkshopBenefitsSectionProps) {
  return (
    <section
      id="highlights"
      className="py-24 sm:py-32 px-6 sm:px-8 scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto">
        {/* Minimal Editorial Section Heading */}
        <div className="max-w-2xl mb-16 sm:mb-20">
          <p
            className={`text-xs font-semibold tracking-[0.18em] uppercase mb-3 ${
              isDark ? "text-cyan-400" : "text-blue-600"
            }`}
          >
            Nội dung trọng tâm
          </p>
          <h2
            className={`text-3xl sm:text-4xl md:text-[2.65rem] font-bold tracking-tight leading-[1.15] ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Học như thế nào để 4 năm sau không chỉ có mỗi{" "}
            <span className="font-editorial italic font-normal">
              GPA để kể?
            </span>
          </h2>
        </div>

        {/* 4 Minimalist Editorial Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8">
          {highlights.map((item) => (
            <div
              key={item.number}
              className={`pt-6 border-t transition-colors duration-300 ${
                isDark
                  ? "border-white/15 hover:border-cyan-400/60"
                  : "border-slate-200 hover:border-blue-600"
              }`}
            >
              <span
                className={`font-display text-xs font-semibold tracking-widest ${
                  isDark ? "text-cyan-400" : "text-blue-600"
                }`}
              >
                {item.number}
              </span>
              <h3
                className={`mt-4 text-lg sm:text-xl font-bold tracking-tight ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                {item.title}
              </h3>
              <p
                className={`mt-2.5 text-sm sm:text-base leading-relaxed ${
                  isDark ? "text-slate-300" : "text-slate-600"
                }`}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
