import { ArrowLeft, Home, SearchX } from "lucide-react";
import { Link } from "react-router-dom";
import { usePageMeta } from "../../shared/hooks/usePageMeta";
import { useTheme } from "../providers/ThemeProvider";

export default function NotFoundPage({ compact = false }: { compact?: boolean }) {
  const { isDark } = useTheme();
  usePageMeta(
    "Không tìm thấy trang",
    "Trang bạn tìm kiếm không tồn tại hoặc đã được di chuyển.",
  );

  return (
    <main
      className={`flex items-center justify-center px-4 sm:px-6 ${
        compact ? "min-h-[70vh]" : "min-h-screen"
      } ${isDark ? "bg-[#071522]" : "bg-[#f7fafc]"}`}
    >
      <div className="max-w-xl text-center">
        <div
          className={`mx-auto flex h-20 w-20 items-center justify-center rounded-3xl ${
            isDark
              ? "bg-cyan-300/10 text-cyan-300"
              : "bg-cyan-50 text-[#087f9c]"
          }`}
        >
          <SearchX className="h-9 w-9" />
        </div>
        <p
          className={`font-display mt-6 text-sm font-bold tracking-[0.2em] ${
            isDark ? "text-cyan-300" : "text-[#087f9c]"
          }`}
        >
          LỖI 404
        </p>
        <h1
          className={`font-display mt-3 text-4xl sm:text-5xl font-bold ${
            isDark ? "text-white" : "text-[#08233e]"
          }`}
        >
          Trang này chưa có mặt.
        </h1>
        <p
          className={`mt-5 leading-7 ${
            isDark ? "text-[#b8c9d9]" : "text-[#52677b]"
          }`}
        >
          Liên kết có thể đã thay đổi hoặc nội dung chưa được công bố. Bạn có
          thể quay lại trang trước hoặc tiếp tục từ trang chủ.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
          <button
            type="button"
            onClick={() => window.history.back()}
            className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border px-5 py-3 font-bold transition ${
              isDark
                ? "border-[#28516d] text-cyan-300 hover:bg-cyan-300/10"
                : "border-[#b9d4e3] text-[#087f9c] hover:bg-cyan-50"
            }`}
          >
            <ArrowLeft className="h-5 w-5" /> Quay lại
          </button>
          <Link
            to="/"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-[#087f9c] px-5 py-3 font-bold text-white transition hover:bg-[#066d86]"
          >
            <Home className="h-5 w-5" /> Về trang chủ
          </Link>
        </div>
      </div>
    </main>
  );
}
