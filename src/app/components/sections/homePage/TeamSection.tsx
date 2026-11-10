import { useTheme } from "../../../providers/ThemeProvider";
import { getTeams } from "../../../../services/team.service";

export function TeamSection() {
  const { isDark } = useTheme();
  const teams = getTeams();

  return (
    // remove section-level background so it inherits the parent's background
    <section className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full">
        <div className="text-center mb-8">
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 font-sans ${
              isDark ? "text-white" : "text-blue-950"
            }`}
          >
            Teams
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
          {teams.map((t) => {
            const Icon = t.icon;
            return (
              <div
                key={t.name}
                className={`rounded-3xl p-8 sm:p-10 flex flex-col items-center justify-center gap-6 min-h-56 transition-transform duration-400 transform hover:scale-105 hover:shadow-lg cursor-pointer ${
                  isDark
                    ? "bg-[#0d2137]/60 border border-cyan-400/20 hover:border-cyan-400/70 text-white"
                    : "bg-white border border-blue-100 hover:border-blue-300 text-blue-950"
                }`}
              >
                <div
                  className={`w-20 h-20 rounded-full flex items-center justify-center ${isDark ? "bg-cyan-400/10" : "bg-blue-50"}`}
                >
                  <Icon
                    className={`${isDark ? "text-cyan-400" : "text-blue-500"} w-10 h-10`}
                  />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-sans mt-1">
                  {t.name}
                </h3>
                <p
                  className={`text-base text-center ${isDark ? "text-white/80" : "text-slate-600"}`}
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
