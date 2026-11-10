import { useState } from "react";
import {
  BrainCircuit,
  ChevronDown,
  Code2,
  Gamepad2,
  Network,
  ShieldCheck,
  Smartphone,
  Sparkles,
  UserRound,
  UsersRound,
} from "lucide-react";
import { usePageMeta } from "../../shared/hooks/usePageMeta";
import { useTheme } from "../providers/ThemeProvider";

interface MemberProfile {
  name: string;
  roles: string[];
  department?: string;
}

interface TermData {
  id: string;
  label: string;
  leader: MemberProfile;
  technicalVice: MemberProfile;
  secretary: MemberProfile;
  operationVice: MemberProfile;
  technicalMembers: MemberProfile[];
  operationMembers: MemberProfile[];
}

const makePlaceholder = (
  roles: string[],
  department?: string,
): MemberProfile => ({
  name: "Đang cập nhật hồ sơ",
  roles,
  department,
});

const terms: TermData[] = [
  {
    id: "2025-2026",
    label: "Nhiệm kỳ 2025–2026",
    leader: makePlaceholder(["Chủ nhiệm"]),
    technicalVice: makePlaceholder(
      ["Phó Chủ nhiệm", "Trưởng Ban Technical"],
      "Ban Technical",
    ),
    secretary: makePlaceholder(["Thư ký", "Thủ quỹ"]),
    operationVice: makePlaceholder(
      ["Phó Chủ nhiệm", "Trưởng Ban Operation"],
      "Ban Operation",
    ),
    technicalMembers: Array.from({ length: 4 }, () =>
      makePlaceholder(["Thành viên"], "Ban Technical"),
    ),
    operationMembers: Array.from({ length: 4 }, () =>
      makePlaceholder(["Thành viên"], "Ban Operation"),
    ),
  },
  {
    id: "2024-2025",
    label: "Nhiệm kỳ 2024–2025",
    leader: makePlaceholder(["Chủ nhiệm"]),
    technicalVice: makePlaceholder(
      ["Phó Chủ nhiệm", "Trưởng Ban Technical"],
      "Ban Technical",
    ),
    secretary: makePlaceholder(["Thư ký", "Thủ quỹ"]),
    operationVice: makePlaceholder(
      ["Phó Chủ nhiệm", "Trưởng Ban Operation"],
      "Ban Operation",
    ),
    technicalMembers: Array.from({ length: 3 }, () =>
      makePlaceholder(["Thành viên"], "Ban Technical"),
    ),
    operationMembers: Array.from({ length: 3 }, () =>
      makePlaceholder(["Thành viên"], "Ban Operation"),
    ),
  },
];

const teams = [
  {
    name: "AI",
    icon: BrainCircuit,
    description: "Khám phá dữ liệu, machine learning và các sản phẩm ứng dụng AI.",
  },
  {
    name: "Web",
    icon: Code2,
    description: "Biến ý tưởng thành trải nghiệm web rõ ràng, nhanh và hữu ích.",
  },
  {
    name: "Game",
    icon: Gamepad2,
    description: "Kết hợp lập trình, thiết kế và storytelling trong sản phẩm tương tác.",
  },
  {
    name: "Mobile",
    icon: Smartphone,
    description: "Xây dựng ứng dụng di động phục vụ học tập và đời sống sinh viên.",
  },
];

function PersonCard({
  member,
  prominent = false,
  isDark,
}: {
  member: MemberProfile;
  prominent?: boolean;
  isDark: boolean;
}) {
  return (
    <article
      className={`relative mx-auto w-full rounded-3xl border text-center transition-transform duration-300 hover:-translate-y-1 ${
        prominent ? "max-w-sm p-7" : "max-w-xs p-5"
      } ${
        isDark
          ? "border-[#1e4059] bg-[#0d2137] shadow-[0_18px_60px_rgba(0,0,0,0.18)]"
          : "border-[#dce8f0] bg-white shadow-[0_18px_60px_rgba(8,35,62,0.08)]"
      }`}
    >
      <div
        className={`mx-auto flex items-center justify-center rounded-full border ${
          prominent ? "h-24 w-24" : "h-20 w-20"
        } ${
          isDark
            ? "border-cyan-300/20 bg-cyan-300/10 text-cyan-200"
            : "border-blue-100 bg-blue-50 text-[#087f9c]"
        }`}
      >
        <UserRound className={prominent ? "h-10 w-10" : "h-8 w-8"} />
      </div>
      <p
        className={`mt-5 text-sm font-medium ${
          isDark ? "text-slate-400" : "text-slate-500"
        }`}
      >
        {member.name}
      </p>
      <div className="mt-3 space-y-1">
        {member.roles.map((role) => (
          <h3
            key={role}
            className={`font-display font-bold leading-snug ${
              prominent ? "text-xl" : "text-base"
            } ${isDark ? "text-white" : "text-[#08233e]"}`}
          >
            {role}
          </h3>
        ))}
      </div>
      {member.department && (
        <span
          className={`mt-4 inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${
            isDark
              ? "border-cyan-300/20 bg-cyan-300/5 text-cyan-200"
              : "border-cyan-100 bg-cyan-50 text-[#087f9c]"
          }`}
        >
          {member.department}
        </span>
      )}
    </article>
  );
}

function MemberGrid({
  title,
  members,
  isDark,
}: {
  title: string;
  members: MemberProfile[];
  isDark: boolean;
}) {
  return (
    <div
      className={`rounded-[28px] border p-5 sm:p-7 ${
        isDark
          ? "border-[#1e4059] bg-[#0a1929]/80"
          : "border-[#dce8f0] bg-[#f7fafc]"
      }`}
    >
      <div className="flex items-center gap-3">
        <UsersRound
          className={`h-5 w-5 ${isDark ? "text-cyan-300" : "text-[#087f9c]"}`}
        />
        <h3
          className={`font-display text-lg font-bold ${
            isDark ? "text-white" : "text-[#08233e]"
          }`}
        >
          {title}
        </h3>
      </div>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {members.map((member, index) => (
          <div
            key={`${title}-${index}`}
            className={`flex items-center gap-3 rounded-2xl border p-3 ${
              isDark
                ? "border-white/8 bg-white/3"
                : "border-blue-100 bg-white"
            }`}
          >
            <div
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${
                isDark
                  ? "bg-cyan-300/10 text-cyan-200"
                  : "bg-blue-50 text-blue-700"
              }`}
            >
              <UserRound className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <p
                className={`truncate text-sm font-semibold ${
                  isDark ? "text-slate-200" : "text-[#08233e]"
                }`}
              >
                {member.name}
              </p>
              <p
                className={`mt-0.5 text-xs ${
                  isDark ? "text-slate-400" : "text-slate-500"
                }`}
              >
                Thành viên
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function StaffPage() {
  const { isDark } = useTheme();
  const [selectedTermId, setSelectedTermId] = useState(terms[0].id);
  const selectedTerm =
    terms.find((term) => term.id === selectedTermId) ?? terms[0];

  usePageMeta(
    "Nhân sự",
    "Khám phá cơ cấu Ban Chủ nhiệm, hai ban vận hành và các team chuyên môn của IT Club qua từng nhiệm kỳ.",
  );

  const primaryText = isDark ? "text-[#f7fcff]" : "text-[#08233e]";
  const secondaryText = isDark ? "text-[#b8c9d9]" : "text-[#52677b]";

  return (
    <main
      className={`overflow-hidden ${
        isDark ? "bg-[#071522]" : "bg-[#f7fafc]"
      }`}
    >
      <section className="relative border-b border-white/5 bg-linear-to-br from-[#041525] via-[#07345e] to-[#087f9c]">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:28px_28px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-24 lg:py-28 text-white">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold tracking-[0.16em] text-cyan-100 uppercase">
                <Network className="h-4 w-4" /> Con người IT Club
              </span>
              <h1 className="font-display mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Cùng một tập thể,
                <span className="block text-cyan-300">đa dạng thế mạnh.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base sm:text-lg leading-8 text-blue-50/90">
                Khám phá cơ cấu Ban Chủ nhiệm, hai ban vận hành và các team cấp
                câu lạc bộ trong từng nhiệm kỳ.
              </p>
            </div>
            <label className="block w-full max-w-sm">
              <span className="mb-2 block text-sm font-semibold text-cyan-100">
                Xem theo nhiệm kỳ
              </span>
              <div className="relative">
                <select
                  value={selectedTermId}
                  onChange={(event) => setSelectedTermId(event.target.value)}
                  className="min-h-12 w-full appearance-none rounded-2xl border border-white/25 bg-white/10 px-4 py-3 pr-11 font-semibold text-white backdrop-blur-md outline-none transition focus:border-cyan-200 focus:ring-4 focus:ring-cyan-300/15"
                >
                  {terms.map((term) => (
                    <option
                      key={term.id}
                      value={term.id}
                      className="bg-[#0a1929] text-white"
                    >
                      {term.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-cyan-100" />
              </div>
            </label>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p
            className={`text-sm font-bold tracking-[0.18em] uppercase ${
              isDark ? "text-cyan-300" : "text-[#087f9c]"
            }`}
          >
            Cơ cấu tổ chức · {selectedTerm.label}
          </p>
          <h2
            className={`font-display mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold ${primaryText}`}
          >
            Kết nối vai trò bằng trách nhiệm chung.
          </h2>
          <p className={`mt-5 leading-8 ${secondaryText}`}>
            Bố cục bên dưới thể hiện đúng quan hệ giữa Ban Chủ nhiệm, hai ban
            và bộ phận Thư ký – Thủ quỹ. Thông tin cá nhân sẽ được cập nhật khi
            có dữ liệu chính thức.
          </p>
        </div>

        <div className="mt-14">
          <PersonCard
            member={selectedTerm.leader}
            prominent
            isDark={isDark}
          />
          <div
            className={`mx-auto hidden h-10 w-px lg:block ${
              isDark ? "bg-[#28516d]" : "bg-[#b9d4e3]"
            }`}
          />
          <div
            className={`mx-auto hidden h-px w-[66.66%] lg:block ${
              isDark ? "bg-[#28516d]" : "bg-[#b9d4e3]"
            }`}
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {[
              selectedTerm.technicalVice,
              selectedTerm.secretary,
              selectedTerm.operationVice,
            ].map((member, index) => (
              <div key={member.roles.join("-")}>
                <div
                  className={`mx-auto hidden h-8 w-px lg:block ${
                    isDark ? "bg-[#28516d]" : "bg-[#b9d4e3]"
                  }`}
                />
                <PersonCard
                  member={member}
                  prominent={index === 1}
                  isDark={isDark}
                />
              </div>
            ))}
          </div>

          <div className="mt-8 grid lg:grid-cols-2 gap-6">
            <MemberGrid
              title="Thành viên Ban Technical"
              members={selectedTerm.technicalMembers}
              isDark={isDark}
            />
            <MemberGrid
              title="Thành viên Ban Operation"
              members={selectedTerm.operationMembers}
              isDark={isDark}
            />
          </div>
        </div>
      </section>

      <section className={isDark ? "bg-[#0a1929]" : "bg-white"}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-28">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-3xl">
              <p
                className={`text-sm font-bold tracking-[0.18em] uppercase ${
                  isDark ? "text-cyan-300" : "text-[#087f9c]"
                }`}
              >
                Các team cấp câu lạc bộ
              </p>
              <h2
                className={`font-display mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold ${primaryText}`}
              >
                Chọn hướng đi, cùng nhau phát triển.
              </h2>
            </div>
            <p className={`max-w-xl leading-7 ${secondaryText}`}>
              Team là không gian chuyên môn chung của CLB. Thành viên từ cả Ban
              Technical và Operation đều có thể tham gia một hoặc nhiều team.
            </p>
          </div>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {teams.map((team, index) => {
              const Icon = team.icon;
              return (
                <article
                  key={team.name}
                  className={`group relative overflow-hidden rounded-[28px] border p-6 transition-all duration-300 hover:-translate-y-1 ${
                    isDark
                      ? "border-[#1e4059] bg-[#0d2137] hover:border-cyan-300/50"
                      : "border-[#dce8f0] bg-[#f7fafc] hover:border-cyan-300"
                  }`}
                >
                  <div
                    className={`absolute right-5 top-4 font-display text-5xl font-bold opacity-5 ${primaryText}`}
                  >
                    0{index + 1}
                  </div>
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                      isDark
                        ? "bg-cyan-300/10 text-cyan-300"
                        : "bg-cyan-50 text-[#087f9c]"
                    }`}
                  >
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3
                    className={`font-display mt-8 text-2xl font-bold ${primaryText}`}
                  >
                    {team.name}
                  </h3>
                  <p className={`mt-3 text-sm leading-7 ${secondaryText}`}>
                    {team.description}
                  </p>
                  <div
                    className={`mt-6 flex items-center gap-2 text-sm font-semibold ${
                      isDark ? "text-cyan-300" : "text-[#087f9c]"
                    }`}
                  >
                    <Sparkles className="h-4 w-4" /> Danh sách đang cập nhật
                  </div>
                </article>
              );
            })}
          </div>

          <div
            className={`mt-10 flex items-start gap-4 rounded-2xl border p-5 ${
              isDark
                ? "border-cyan-300/15 bg-cyan-300/5"
                : "border-blue-100 bg-blue-50"
            }`}
          >
            <ShieldCheck
              className={`mt-0.5 h-5 w-5 shrink-0 ${
                isDark ? "text-cyan-300" : "text-blue-700"
              }`}
            />
            <p className={`text-sm leading-6 ${secondaryText}`}>
              Giao diện đang dùng avatar trung tính và dữ liệu khung để không
              suy đoán thông tin cá nhân. Ảnh, họ tên và vai trò chính thức sẽ
              được đưa vào sau khi Ban Chủ nhiệm xác nhận quyền công bố.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
