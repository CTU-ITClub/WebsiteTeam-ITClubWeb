import { useMemo, useState } from "react";
import {
  ArrowRight,
  ArrowUpDown,
  CalendarDays,
  Clock3,
  MapPin,
  RotateCcw,
  SearchX,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  activities,
  activityStatusMeta,
  type Activity,
  type ActivityCategory,
  type ActivityStatus,
} from "../../features/activities/activities.data";
import { usePageMeta } from "../../shared/hooks/usePageMeta";
import { useTheme } from "../providers/ThemeProvider";

type CategoryFilter = "all" | ActivityCategory;
type StatusFilter = "all" | ActivityStatus;
type SortOption = "smart" | "newest" | "oldest";

function StatusBadge({
  status,
  isDark,
}: {
  status: ActivityStatus;
  isDark: boolean;
}) {
  const meta = activityStatusMeta[status];
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-bold ${
        isDark ? meta.darkClass : meta.lightClass
      }`}
    >
      {meta.label}
    </span>
  );
}

function FeaturedActivityCard({
  activity,
  isDark,
}: {
  activity: Activity;
  isDark: boolean;
}) {
  return (
    <article
      className={`group overflow-hidden rounded-[28px] border transition-all duration-300 hover:-translate-y-1 ${
        isDark
          ? "border-[#1e4059] bg-[#0d2137] shadow-[0_24px_70px_rgba(0,0,0,0.18)]"
          : "border-[#dce8f0] bg-white shadow-[0_24px_70px_rgba(8,35,62,0.08)]"
      }`}
    >
      <Link
        to={`/activities/${activity.slug}`}
        className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-500"
      >
        <div className="relative aspect-video overflow-hidden">
          <img
            src={activity.cover}
            alt={activity.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#041525]/75 via-transparent to-transparent" />
          <div className="absolute left-5 top-5">
            <StatusBadge status={activity.status} isDark={isDark} />
          </div>
          <span className="absolute bottom-5 left-5 rounded-full border border-white/25 bg-[#071522]/65 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-md">
            {activity.category}
          </span>
        </div>
        <div className="p-6 sm:p-8">
          <div
            className={`flex flex-wrap gap-x-5 gap-y-2 text-sm ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            <span className="inline-flex items-center gap-2">
              <CalendarDays className="h-4 w-4" /> {activity.date}
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" /> {activity.location}
            </span>
          </div>
          <h3
            className={`font-display mt-5 text-2xl sm:text-3xl font-bold leading-tight ${
              isDark ? "text-white" : "text-[#08233e]"
            }`}
          >
            {activity.title}
          </h3>
          <p
            className={`mt-4 line-clamp-2 leading-7 ${
              isDark ? "text-[#b8c9d9]" : "text-[#52677b]"
            }`}
          >
            {activity.summary}
          </p>
          <span
            className={`mt-6 inline-flex items-center gap-2 font-bold ${
              isDark ? "text-cyan-300" : "text-[#087f9c]"
            }`}
          >
            Xem chi tiết
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </article>
  );
}

function PastActivityCard({
  activity,
  isDark,
}: {
  activity: Activity;
  isDark: boolean;
}) {
  return (
    <article
      className={`group overflow-hidden rounded-3xl border transition-all duration-300 hover:-translate-y-1 ${
        isDark
          ? "border-[#1e4059] bg-[#0d2137]"
          : "border-[#dce8f0] bg-white"
      }`}
    >
      <Link
        to={`/activities/${activity.slug}`}
        className="block h-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-500"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={activity.cover}
            alt={activity.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute left-4 top-4">
            <StatusBadge status={activity.status} isDark={isDark} />
          </div>
        </div>
        <div className="p-5 sm:p-6">
          <div className="flex items-center justify-between gap-4">
            <span
              className={`text-xs font-bold uppercase tracking-wider ${
                isDark ? "text-cyan-300" : "text-[#087f9c]"
              }`}
            >
              {activity.category}
            </span>
            <span
              className={`text-xs ${
                isDark ? "text-slate-400" : "text-slate-500"
              }`}
            >
              {activity.year}
            </span>
          </div>
          <h3
            className={`font-display mt-3 text-xl font-bold leading-snug ${
              isDark ? "text-white" : "text-[#08233e]"
            }`}
          >
            {activity.title}
          </h3>
          <p
            className={`mt-3 text-sm leading-6 ${
              isDark ? "text-[#b8c9d9]" : "text-[#52677b]"
            }`}
          >
            {activity.date}
          </p>
        </div>
      </Link>
    </article>
  );
}

export default function ActivitiesPage() {
  const { isDark } = useTheme();
  const [category, setCategory] = useState<CategoryFilter>("all");
  const [status, setStatus] = useState<StatusFilter>("all");
  const [year, setYear] = useState("all");
  const [sort, setSort] = useState<SortOption>("smart");

  usePageMeta(
    "Hoạt động",
    "Khám phá workshop, game, cuộc thi và các hoạt động nổi bật của IT Club CICT.",
  );

  const years = [...new Set(activities.map((activity) => activity.year))].sort(
    (a, b) => b - a,
  );

  const filteredActivities = useMemo(() => {
    const result = activities.filter((activity) => {
      const matchesCategory =
        category === "all" || activity.category === category;
      const matchesStatus = status === "all" || activity.status === status;
      const matchesYear = year === "all" || activity.year === Number(year);
      return matchesCategory && matchesStatus && matchesYear;
    });

    if (sort === "newest") return [...result].sort((a, b) => b.year - a.year);
    if (sort === "oldest") return [...result].sort((a, b) => a.year - b.year);
    return result;
  }, [category, sort, status, year]);

  const featured = filteredActivities.filter(
    (activity) => activity.status === "ongoing" || activity.status === "upcoming",
  );
  const history = filteredActivities.filter(
    (activity) => activity.status === "past" || activity.status === "cancelled",
  );
  const hasFilters =
    category !== "all" || status !== "all" || year !== "all" || sort !== "smart";

  const resetFilters = () => {
    setCategory("all");
    setStatus("all");
    setYear("all");
    setSort("smart");
  };

  const selectClass = `min-h-12 w-full appearance-none rounded-2xl border px-4 py-3 text-sm font-semibold outline-none transition focus:ring-4 ${
    isDark
      ? "border-[#28516d] bg-[#0a1929] text-white focus:border-cyan-300 focus:ring-cyan-300/10"
      : "border-[#dce8f0] bg-white text-[#08233e] focus:border-[#087f9c] focus:ring-cyan-100"
  }`;

  return (
    <main
      className={`min-h-screen ${
        isDark ? "bg-[#071522]" : "bg-[#f7fafc]"
      }`}
    >
      <section className="relative overflow-hidden bg-linear-to-br from-[#041525] via-[#07345e] to-[#087f9c]">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full border border-white/10" />
        <div className="absolute right-10 top-10 h-64 w-64 rounded-full border border-white/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-24 lg:py-28 text-white">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold tracking-[0.16em] text-cyan-100 uppercase">
            <Sparkles className="h-4 w-4" /> Học · Làm · Kết nối
          </span>
          <div className="mt-7 grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:items-end">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05]">
              Mỗi hoạt động là một
              <span className="block text-cyan-300">cơ hội để tiến xa hơn.</span>
            </h1>
            <p className="max-w-xl text-base sm:text-lg leading-8 text-blue-50/90 lg:justify-self-end">
              Tìm workshop để học kỹ năng mới, thử sức trong cuộc thi hoặc gặp
              gỡ những người bạn cùng đam mê công nghệ.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 -mt-6 relative z-10">
        <div
          className={`rounded-[28px] border p-5 sm:p-6 shadow-xl ${
            isDark
              ? "border-[#1e4059] bg-[#0d2137] shadow-black/15"
              : "border-[#dce8f0] bg-white shadow-blue-950/8"
          }`}
        >
          <div className="mb-5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <SlidersHorizontal
                className={`h-5 w-5 ${
                  isDark ? "text-cyan-300" : "text-[#087f9c]"
                }`}
              />
              <h2
                className={`font-display font-bold ${
                  isDark ? "text-white" : "text-[#08233e]"
                }`}
              >
                Lọc hoạt động
              </h2>
            </div>
            {hasFilters && (
              <button
                type="button"
                onClick={resetFilters}
                className={`inline-flex min-h-11 items-center gap-2 rounded-xl px-3 text-sm font-bold transition ${
                  isDark
                    ? "text-cyan-300 hover:bg-cyan-300/10"
                    : "text-[#087f9c] hover:bg-cyan-50"
                }`}
              >
                <RotateCcw className="h-4 w-4" /> Xóa bộ lọc
              </button>
            )}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <label>
              <span
                className={`mb-2 block text-xs font-bold uppercase tracking-wider ${
                  isDark ? "text-slate-400" : "text-slate-500"
                }`}
              >
                Loại hoạt động
              </span>
              <select
                value={category}
                onChange={(event) =>
                  setCategory(event.target.value as CategoryFilter)
                }
                className={selectClass}
              >
                <option value="all">Tất cả loại</option>
                <option value="Workshop">Workshop</option>
                <option value="Game">Game</option>
                <option value="Cuộc thi">Cuộc thi</option>
              </select>
            </label>
            <label>
              <span
                className={`mb-2 block text-xs font-bold uppercase tracking-wider ${
                  isDark ? "text-slate-400" : "text-slate-500"
                }`}
              >
                Trạng thái
              </span>
              <select
                value={status}
                onChange={(event) =>
                  setStatus(event.target.value as StatusFilter)
                }
                className={selectClass}
              >
                <option value="all">Tất cả trạng thái</option>
                <option value="ongoing">Đang diễn ra</option>
                <option value="upcoming">Sắp diễn ra</option>
                <option value="past">Đã diễn ra</option>
                <option value="cancelled">Đã hủy</option>
              </select>
            </label>
            <label>
              <span
                className={`mb-2 block text-xs font-bold uppercase tracking-wider ${
                  isDark ? "text-slate-400" : "text-slate-500"
                }`}
              >
                Năm
              </span>
              <select
                value={year}
                onChange={(event) => setYear(event.target.value)}
                className={selectClass}
              >
                <option value="all">Tất cả năm</option>
                {years.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
            <label>
              <span
                className={`mb-2 flex items-center gap-1 text-xs font-bold uppercase tracking-wider ${
                  isDark ? "text-slate-400" : "text-slate-500"
                }`}
              >
                <ArrowUpDown className="h-3.5 w-3.5" /> Sắp xếp
              </span>
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value as SortOption)}
                className={selectClass}
              >
                <option value="smart">Ưu tiên nổi bật</option>
                <option value="newest">Năm mới nhất</option>
                <option value="oldest">Năm cũ nhất</option>
              </select>
            </label>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-24">
        {filteredActivities.length === 0 ? (
          <div
            className={`rounded-[28px] border px-6 py-16 text-center ${
              isDark
                ? "border-[#1e4059] bg-[#0d2137]"
                : "border-[#dce8f0] bg-white"
            }`}
          >
            <SearchX
              className={`mx-auto h-12 w-12 ${
                isDark ? "text-cyan-300" : "text-[#087f9c]"
              }`}
            />
            <h2
              className={`font-display mt-5 text-2xl font-bold ${
                isDark ? "text-white" : "text-[#08233e]"
              }`}
            >
              Chưa có hoạt động phù hợp
            </h2>
            <p
              className={`mt-3 ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}
            >
              Hãy thử thay đổi điều kiện lọc hoặc quay lại toàn bộ danh sách.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-2xl bg-[#087f9c] px-5 py-3 font-bold text-white transition hover:bg-[#066d86]"
            >
              <RotateCcw className="h-5 w-5" /> Xem tất cả hoạt động
            </button>
          </div>
        ) : (
          <div className="space-y-20">
            {featured.length > 0 && (
              <div>
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                  <div>
                    <p
                      className={`text-sm font-bold uppercase tracking-[0.18em] ${
                        isDark ? "text-cyan-300" : "text-[#087f9c]"
                      }`}
                    >
                      <Clock3 className="mr-2 inline h-4 w-4" /> Đang và sắp
                      diễn ra
                    </p>
                    <h2
                      className={`font-display mt-3 text-3xl sm:text-4xl font-bold ${
                        isDark ? "text-white" : "text-[#08233e]"
                      }`}
                    >
                      Hoạt động nổi bật
                    </h2>
                  </div>
                  <span
                    className={`text-sm ${
                      isDark ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    {featured.length} hoạt động phù hợp
                  </span>
                </div>
                <div className="mt-8 grid lg:grid-cols-2 gap-6">
                  {featured.map((activity) => (
                    <FeaturedActivityCard
                      key={activity.slug}
                      activity={activity}
                      isDark={isDark}
                    />
                  ))}
                </div>
              </div>
            )}

            {history.length > 0 && (
              <div>
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                  <div>
                    <p
                      className={`text-sm font-bold uppercase tracking-[0.18em] ${
                        isDark ? "text-cyan-300" : "text-[#087f9c]"
                      }`}
                    >
                      Kho lưu trữ
                    </p>
                    <h2
                      className={`font-display mt-3 text-3xl sm:text-4xl font-bold ${
                        isDark ? "text-white" : "text-[#08233e]"
                      }`}
                    >
                      Hoạt động đã diễn ra
                    </h2>
                  </div>
                  <p
                    className={`max-w-md text-sm leading-6 ${
                      isDark ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    Nhìn lại workshop, cuộc thi và những khoảnh khắc đã tạo nên
                    hành trình của IT Club.
                  </p>
                </div>
                <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {history.map((activity) => (
                    <PastActivityCard
                      key={activity.slug}
                      activity={activity}
                      isDark={isDark}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        <div
          className={`mt-16 flex items-start gap-4 rounded-2xl border p-5 ${
            isDark
              ? "border-cyan-300/15 bg-cyan-300/5"
              : "border-blue-100 bg-blue-50"
          }`}
        >
          <CalendarDays
            className={`mt-0.5 h-5 w-5 shrink-0 ${
              isDark ? "text-cyan-300" : "text-blue-700"
            }`}
          />
          <p
            className={`text-sm leading-6 ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            Danh sách hiện dùng dữ liệu minh họa để hoàn thiện giao diện và
            luồng lọc. Ngày, địa điểm và liên kết đăng ký cần được thay bằng dữ
            liệu đã duyệt trước khi phát hành.
          </p>
        </div>
      </section>
    </main>
  );
}
