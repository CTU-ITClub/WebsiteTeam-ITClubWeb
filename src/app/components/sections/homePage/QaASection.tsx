import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useTheme } from "../../../providers/ThemeProvider";
import { getFaqs } from "../../../../services/faq.service";
import type { Faq } from "../../../../services/faq.service";

export function QaASection() {
  const { isDark } = useTheme();
  const [faqs, setFaqs] = useState<Faq[]>([]);
  const [openFaqs, setOpenFaqs] = useState<number[]>([]);

  useEffect(() => {
    getFaqs().then(setFaqs);
  }, []);

  const handleToggleFaq = (index: number) => {
    setOpenFaqs((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section
      className={`py-16 md:py-24 ${
        isDark
          ? "bg-linear-to-b from-[#1a365d] to-[#0d2137]"
          : "bg-linear-to-b from-white to-blue-50/50"
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 w-full">
        <div className="text-center mb-12">
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 font-sans ${
              isDark ? "text-white" : "text-blue-950"
            }`}
          >
            Q & A
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={faq.question}
              className={`rounded-2xl border-2 overflow-hidden transition-all duration-300 ${
                isDark
                  ? "bg-[#0d2137]/60 border-cyan-400/40 hover:border-cyan-400/70"
                  : "bg-white border-blue-100 hover:border-blue-300"
              } backdrop-blur-sm shadow-lg`}
            >
              <button
                onClick={() => handleToggleFaq(idx)}
                className="w-full px-5 sm:px-8 py-4 sm:py-6 flex items-center justify-between text-left"
              >
                <span
                  className={`text-lg sm:text-xl md:text-2xl font-bold pr-4 font-sans ${
                    isDark ? "text-white" : "text-blue-900"
                  }`}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 shrink-0 transition-transform duration-300 ${
                    isDark ? "text-cyan-400" : "text-blue-500"
                  } ${openFaqs.includes(idx) ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openFaqs.includes(idx)
                    ? "max-h-48 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-5 sm:px-8 pb-6 pt-2">
                  <p
                    className={`text-base sm:text-lg leading-relaxed font-sans ${
                      isDark ? "text-white/80" : "text-slate-600"
                    }`}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
