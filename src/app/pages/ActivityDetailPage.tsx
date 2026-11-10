import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  ExternalLink,
  MapPin,
  UsersRound,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import {
  activityStatusMeta,
  getActivityBySlug,
} from "../../features/activities/activities.data";
import { usePageMeta } from "../../shared/hooks/usePageMeta";
import { useTheme } from "../providers/ThemeProvider";
import NotFoundPage from "./NotFoundPage";

export default function ActivityDetailPage() {
  const { slug } = useParams();
  const activity = getActivityBySlug(slug);
  const { isDark } = useTheme();

  usePageMeta(
    activity?.title ?? "Không tìm thấy hoạt động",
    activity?.summary ?? "Hoạt động bạn tìm kiếm không tồn tại hoặc chưa được công bố.",
  );

  if (!activity) return <NotFoundPage compact />;

  const status = activityStatusMeta[activity.status];
  const primaryText = isDark ? "text-[#f7fcff]" : "text-[#08233e]";
  const secondaryText = isDark ? "text-[#b8c9d9]" : "text-[#52677b]";
  const panel = isDark
    ? "border-[#1e4059] bg-[#0d2137]"
    : "border-[#dce8f0] bg-white";
  const actionUrl =
    activity.status === "past" ? activity.resultUrl : activity.registrationUrl;
  const actionLabel = activity.status === "past" ? "Xem kết quả" : "Đăng ký ngay";

  return (
    <main className={isDark ? "bg-[#071522]" : "bg-[#f7fafc]"}>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 pb-12 lg:pt-12 lg:pb-16">
        <nav
          aria-label="Breadcrumb"
          className={`flex flex-wrap items-center gap-2 text-sm ${secondaryText}`}
        >
          <Link to="/" className="transition hover:text-cyan-500">
            Trang chủ
          </Link>
          <span>/</span>
          <Link to="/activities" className="transition hover:text-cyan-500">
            Hoạt động
          </Link>
          <span>/</span>
          <span className={primaryText}>{activity.title}</span>
        </nav>

        <div className="relative mt-8 overflow-hidden rounded-[32px]">
          <img
            src={activity.cover}
            alt={activity.title}
            className="h-[360px] w-full object-cover sm:h-[480px] lg:h-[560px]"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#041525] via-[#041525]/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 lg:p-14 text-white">
            <div className="flex flex-wrap gap-2">
              <span
                className={`rounded-full border px-3 py-1.5 text-xs font-bold ${status.darkClass}`}
              >
                {status.label}
              </span>
              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-bold backdrop-blur-sm">
                {activity.category}
              </span>
            </div>
            <h1 className="font-display mt-5 max-w-4xl text-3xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              {activity.title}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-blue-50 sm:text-lg sm:leading-8">
              {activity.summary}
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 lg:pb-28">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_360px] gap-8 lg:gap-12 items-start">
          <div className="space-y-12">
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { icon: CalendarDays, label: "Thời gian", value: activity.date },
                { icon: MapPin, label: "Địa điểm", value: activity.location },
                { icon: UsersRound, label: "Đối tượng", value: activity.audience },
              ].map((fact) => {
                const Icon = fact.icon;
                return (
                  <div key={fact.label} className={`rounded-2xl border p-5 ${panel}`}>
                    <Icon
                      className={`h-5 w-5 ${
                        isDark ? "text-cyan-300" : "text-[#087f9c]"
                      }`}
                    />
                    <p className={`mt-4 text-xs font-bold uppercase tracking-wider ${secondaryText}`}>
                      {fact.label}
                    </p>
                    <p className={`mt-2 text-sm font-semibold leading-6 ${primaryText}`}>
                      {fact.value}
                    </p>
                  </div>
                );
              })}
            </div>

            <article>
              <p
                className={`text-sm font-bold uppercase tracking-[0.18em] ${
                  isDark ? "text-cyan-300" : "text-[#087f9c]"
                }`}
              >
                Giới thiệu
              </p>
              <h2 className={`font-display mt-3 text-3xl font-bold ${primaryText}`}>
                Về hoạt động
              </h2>
              <div className={`mt-5 space-y-4 text-base leading-8 ${secondaryText}`}>
                {activity.description.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>

            {activity.agenda.length > 0 && (
              <article>
                <p
                  className={`text-sm font-bold uppercase tracking-[0.18em] ${
                    isDark ? "text-cyan-300" : "text-[#087f9c]"
                  }`}
                >
                  Nội dung
                </p>
                <h2 className={`font-display mt-3 text-3xl font-bold ${primaryText}`}>
                  Chương trình dự kiến
                </h2>
                <ol className="mt-7 space-y-4">
                  {activity.agenda.map((item, index) => (
                    <li key={item} className={`flex gap-4 rounded-2xl border p-5 ${panel}`}>
                      <span
                        className={`font-display flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                          isDark
                            ? "bg-cyan-300/10 text-cyan-300"
                            : "bg-cyan-50 text-[#087f9c]"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className={`pt-1.5 font-semibold ${primaryText}`}>{item}</span>
                    </li>
                  ))}
                </ol>
              </article>
            )}

            {activity.benefits.length > 0 && (
              <article className={`rounded-[28px] border p-6 sm:p-8 ${panel}`}>
                <h2 className={`font-display text-2xl font-bold ${primaryText}`}>
                  Bạn sẽ nhận được gì?
                </h2>
                <ul className="mt-6 grid sm:grid-cols-2 gap-4">
                  {activity.benefits.map((benefit) => (
                    <li key={benefit} className={`flex items-start gap-3 ${secondaryText}`}>
                      <CheckCircle2
                        className={`mt-0.5 h-5 w-5 shrink-0 ${
                          isDark ? "text-emerald-300" : "text-emerald-600"
                        }`}
                      />
                      <span className="text-sm leading-6">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </article>
            )}

            <Link
              to="/activities"
              className={`inline-flex min-h-12 items-center gap-2 rounded-2xl border px-5 py-3 font-bold transition ${
                isDark
                  ? "border-[#28516d] text-cyan-300 hover:bg-cyan-300/10"
                  : "border-[#b9d4e3] text-[#087f9c] hover:bg-cyan-50"
              }`}
            >
              <ArrowLeft className="h-5 w-5" /> Quay lại danh sách
            </Link>
          </div>

          <aside className={`rounded-[28px] border p-6 lg:sticky lg:top-28 ${panel}`}>
            <p className={`text-xs font-bold uppercase tracking-[0.18em] ${secondaryText}`}>
              Thông tin nhanh
            </p>
            <div className="mt-5 space-y-5">
              <div>
                <p className={`text-sm ${secondaryText}`}>Thời gian</p>
                <p className={`mt-1 font-semibold ${primaryText}`}>{activity.date}</p>
              </div>
              <div>
                <p className={`text-sm ${secondaryText}`}>Địa điểm</p>
                <p className={`mt-1 font-semibold ${primaryText}`}>{activity.location}</p>
              </div>
              {activity.registrationDeadline && (
                <div>
                  <p className={`text-sm ${secondaryText}`}>Hạn đăng ký</p>
                  <p className={`mt-1 font-semibold ${primaryText}`}>
                    {activity.registrationDeadline}
                  </p>
                </div>
              )}
            </div>

            {actionUrl ? (
              <a
                href={actionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-[#087f9c] px-5 py-3 font-bold text-white transition hover:bg-[#066d86] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-500"
              >
                {actionLabel} <ExternalLink className="h-5 w-5" />
              </a>
            ) : (
              <button
                type="button"
                disabled
                className={`mt-7 inline-flex min-h-12 w-full cursor-not-allowed items-center justify-center gap-2 rounded-2xl px-5 py-3 font-bold ${
                  isDark
                    ? "bg-white/8 text-slate-400"
                    : "bg-slate-100 text-slate-500"
                }`}
              >
                <Clock3 className="h-5 w-5" /> Liên kết đang cập nhật
              </button>
            )}
            <p className={`mt-3 text-center text-xs leading-5 ${secondaryText}`}>
              Biểu mẫu đăng ký sẽ mở ở tab mới khi có liên kết chính thức.
            </p>
          </aside>
        </div>

        <div className={`mt-20 rounded-[28px] border p-6 sm:p-8 ${panel}`}>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            <div>
              <p className={`text-sm font-bold ${isDark ? "text-cyan-300" : "text-[#087f9c]"}`}>
                Còn nhiều điều để khám phá
              </p>
              <h2 className={`font-display mt-2 text-2xl font-bold ${primaryText}`}>
                Xem các hoạt động khác của IT Club
              </h2>
            </div>
            <Link
              to="/activities"
              className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl px-5 py-3 font-bold transition ${
                isDark
                  ? "bg-cyan-300 text-[#041525] hover:bg-cyan-200"
                  : "bg-[#023263] text-white hover:bg-[#03457f]"
              }`}
            >
              Xem tất cả <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
