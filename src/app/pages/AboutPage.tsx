import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import image2 from "../../assets/images/ui/image2.webp";
import image3 from "../../assets/images/ui/image3.webp";
import image5 from "../../assets/images/ui/image5.webp";
import image7 from "../../assets/images/ui/image7.webp";
import image8 from "../../assets/images/ui/image8.webp";
import image9 from "../../assets/images/ui/image9.webp";
import { usePageMeta } from "../../shared/hooks/usePageMeta";
import { useTheme } from "../providers/ThemeProvider";

const coreValues = [
  {
    number: "01",
    title: "Chuyên môn",
    description:
      "Duy trì chất lượng học thuật trong từng nội dung và hoạt động.",
  },
  {
    number: "02",
    title: "Hợp tác",
    description: "Trao đổi kiến thức và phối hợp giữa các thành viên.",
  },
  {
    number: "03",
    title: "Thực tiễn",
    description: "Gắn kiến thức với workshop, cuộc thi và xây dựng sản phẩm.",
  },
  {
    number: "04",
    title: "Trách nhiệm",
    description:
      "Đề cao sự chủ động, cam kết và tinh thần trách nhiệm trong tập thể.",
  },
];

const departments = [
  {
    name: "Ban Operation",
    image: image3,
    description:
      "Phụ trách công tác tổ chức, truyền thông, đối ngoại và vận hành các chương trình của câu lạc bộ.",
    areas: ["Sự kiện", "Truyền thông", "Đối ngoại"],
  },
  {
    name: "Ban Technical",
    image: image7,
    description:
      "Phụ trách nội dung học thuật, workshop, dự án công nghệ và các hoạt động phát triển chuyên môn.",
    areas: ["Workshop", "Dự án", "Cuộc thi"],
  },
];

export default function AboutPage() {
  const { isDark } = useTheme();
  usePageMeta(
    "Giới thiệu",
    "Tìm hiểu về Câu lạc bộ Tin học CICT, giá trị cốt lõi và cơ cấu hoạt động.",
  );

  const primaryText = isDark ? "text-[#f7fcff]" : "text-[#08233e]";
  const secondaryText = isDark ? "text-[#b8c9d9]" : "text-[#52677b]";

  return (
    <main className={isDark ? "bg-[#071522]" : "bg-[#f7fafc]"}>
      <section className="relative flex min-h-[50svh] items-center overflow-hidden">
        <img
          src={image5}
          alt="Không gian workshop của IT Club"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#041525]/90 via-[#062b50]/75 to-[#087f9c]/35" />
        <div className="absolute inset-0 bg-linear-to-t from-[#041525]/50 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-6">
          <h1 className="max-w-xl font-sans text-4xl font-extrabold leading-[1.16] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Nơi đam mê công
            <br />
            nghệ trở thành
            <br />
            <span className="text-cyan-300">hành trình chung.</span>
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-24 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-12">
            <p className="font-sans text-xl font-bold tracking-[0.15em] text-cyan-400 uppercase">
              Chúng tôi là ai?
            </p>
            <h2
              className={`mt-5 font-sans text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl ${primaryText}`}
            >
              <span className="block">
                Câu lạc bộ trực thuộc Trường Công nghệ
              </span>
              <span className="mt-2 block lg:whitespace-nowrap">
                Thông tin và Truyền thông{" "}
                <span className="text-cyan-400">- Đại học Cần Thơ</span>
              </span>
            </h2>
          </div>
        </div>

        <div className="mt-14 grid items-end gap-5 sm:mt-20 md:grid-cols-12">
          <div className="relative md:col-span-8">
            <img
              src={image8}
              alt="Thành viên IT Club cùng hoàn thành một buổi workshop"
              className="aspect-[16/10] w-full rounded-[28px] object-cover sm:rounded-[36px]"
            />
            <div className="absolute -bottom-5 right-5 bg-cyan-300 px-5 py-4 text-[#052b4e] shadow-xl sm:-bottom-7 sm:right-8 sm:px-7 sm:py-5">
              <span className="block font-sans text-2xl font-black sm:text-3xl">
                Học thuật
              </span>
              <span className="mt-1 block text-xs  font-bold tracking-[0.16em] uppercase">
                gắn với thực tiễn
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#052b4e] text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-24">
          <div className="grid gap-8 border-b border-white/15 pb-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <h2 className="mt-4 font-sans text-4xl font-extrabold tracking-tight sm:text-5xl">
                Giá trị cốt lõi
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value) => (
              <article
                key={value.title}
                className="group border-b border-white/15 py-8 md:px-7 lg:border-b-0 lg:border-r lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
              >
                <span className="font-mono text-3xl text-cyan-300">
                  /{value.number}
                </span>
                <h3 className="mt-10 font-sans text-4xl font-bold transition-transform duration-300 group-hover:translate-x-2">
                  {value.title}
                </h3>
                <p className="mt-4 text-md leading-7 text-blue-100">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto flex min-h-[100svh] max-w-7xl items-center">
        <div className="grid h-[62svh] min-h-[420px] max-h-[620px] w-full grid-cols-2 grid-rows-2 gap-3 sm:h-[68svh] sm:grid-rows-12 sm:gap-5">
          <img
            src={image9}
            alt="Cộng đồng sinh viên tại cuộc thi lập trình"
            className="h-full w-full rounded-[20px] object-cover sm:row-span-7 sm:rounded-[28px]"
          />
          <img
            src={image7}
            alt="Thành viên IT Club làm việc trong không gian công nghệ"
            className="h-full w-full rounded-[20px] object-cover sm:col-start-2 sm:row-span-5 sm:rounded-[28px]"
          />
          <img
            src={image2}
            alt="Thành viên IT Club trao đổi cùng nhau"
            className="h-full w-full rounded-[20px] object-cover sm:row-span-5 sm:row-start-8 sm:rounded-[28px]"
          />
          <img
            src={image3}
            alt="Hoạt động học thuật của IT Club"
            className="h-full w-full rounded-[20px] object-cover sm:col-start-2 sm:row-span-7 sm:row-start-6 sm:rounded-[28px]"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-6 sm:pb-24 lg:pb-32">
        <div>
          <h2
            className={`mt-4 font-sans text-5xl font-extrabold tracking-tight sm:text-6 xl ${primaryText}`}
          >
            Cơ cấu hoạt động
          </h2>

          <div className="mt-8 sm:mt-10">
            {departments.map((department, index) => (
              <article
                key={department.name}
                className={`grid gap-8 border-t py-10 first:border-cyan-500/60 last:border-b sm:py-14 lg:grid-cols-12 lg:items-center lg:gap-10 ${
                  isDark ? "border-[#24445b]" : "border-[#cbdbe5]"
                }`}
              >
                <div
                  className={`lg:col-span-7 ${index % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <img
                    src={department.image}
                    alt={`Thành viên ${department.name} trong một hoạt động của câu lạc bộ`}
                    className="aspect-[16/9] w-full rounded-[28px] object-cover"
                  />
                </div>
                <div
                  className={`lg:col-span-5 ${index % 2 === 1 ? "lg:order-1 lg:pr-10" : "lg:pl-10"}`}
                >
                  <h3
                    className={`mt-8 font-sans text-4xl font-extrabold tracking-tight sm:text-5xl ${primaryText}`}
                  >
                    {department.name}
                  </h3>
                  <p className={`mt-5 text-base leading-8 ${secondaryText}`}>
                    {department.description}
                  </p>
                  <div
                    className={`mt-7 flex flex-wrap gap-x-3 gap-y-2 text-sm font-bold ${primaryText}`}
                  >
                    {department.areas.map((area, areaIndex) => (
                      <span key={area} className="flex items-center gap-3">
                        {areaIndex > 0 && (
                          <span className="text-cyan-500">/</span>
                        )}
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 lg:pb-28">
        <div className="relative overflow-hidden rounded-[32px] bg-linear-to-br from-[#023263] via-[#075985] to-[#087f9c] px-6 py-12 text-white sm:px-12 lg:px-16 lg:py-16">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/20" />
          <div className="absolute -right-5 -top-5 h-40 w-40 rounded-full border border-white/20" />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-sans text-3xl font-extrabold sm:text-4xl">
                Xem IT Club đang tạo nên điều gì.
              </h2>
              <p className="mt-4 leading-7 text-blue-50">
                Khám phá workshop, cuộc thi và các chương trình học thuật do câu
                lạc bộ tổ chức.
              </p>
            </div>
            <Link
              to="/activities"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 font-bold text-[#023263] transition hover:bg-cyan-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Khám phá hoạt động <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
