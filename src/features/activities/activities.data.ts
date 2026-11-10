import image1 from "../../assets/images/ui/image1.webp";
import image2 from "../../assets/images/ui/image2.webp";
import image3 from "../../assets/images/ui/image3.webp";
import image5 from "../../assets/images/ui/image5.webp";
import image7 from "../../assets/images/ui/image7.webp";
import image9 from "../../assets/images/ui/image9.webp";

export type ActivityCategory = "Workshop" | "Game" | "Cuộc thi";
export type ActivityStatus = "ongoing" | "upcoming" | "past" | "cancelled";

export interface Activity {
  slug: string;
  title: string;
  category: ActivityCategory;
  status: ActivityStatus;
  year: number;
  date: string;
  location: string;
  audience: string;
  registrationDeadline?: string;
  summary: string;
  description: string[];
  agenda: string[];
  benefits: string[];
  cover: string;
  registrationUrl?: string;
  resultUrl?: string;
}

// Dữ liệu minh họa cho giai đoạn phát triển UI. Thay bằng nội dung đã được
// Ban Chủ nhiệm duyệt trước khi phát hành production.
export const activities: Activity[] = [
  {
    slug: "workshop-web-foundations-2026",
    title: "Workshop Web Foundations 2026",
    category: "Workshop",
    status: "upcoming",
    year: 2026,
    date: "03/10/2026 · 08:00–11:30",
    location: "Phòng thực hành CICT",
    audience: "Sinh viên yêu thích phát triển web",
    registrationDeadline: "30/09/2026",
    summary:
      "Buổi học thực hành giúp người mới xây dựng nền tảng HTML, CSS và JavaScript qua một sản phẩm nhỏ.",
    description: [
      "Workshop được thiết kế theo hướng học qua thực hành, đi từ cấu trúc giao diện đến cách tổ chức mã nguồn dễ đọc và dễ mở rộng.",
      "Người tham gia làm việc theo nhóm nhỏ, nhận hỗ trợ từ thành viên CLB và hoàn thiện một trang web ngay trong buổi học.",
    ],
    agenda: [
      "Làm quen với cấu trúc một dự án web",
      "Thực hành dựng giao diện responsive",
      "Hoàn thiện sản phẩm và chia sẻ kết quả",
    ],
    benefits: [
      "Có lộ trình học tiếp sau workshop",
      "Kết nối với cộng đồng học tập của CLB",
      "Nhận tài liệu và source code thực hành",
    ],
    cover: image5,
  },
  {
    slug: "cict-icpc-training",
    title: "CICT ICPC Training Series",
    category: "Cuộc thi",
    status: "ongoing",
    year: 2026,
    date: "20/09–28/09/2026",
    location: "Kết hợp trực tiếp và trực tuyến",
    audience: "Sinh viên quan tâm lập trình thi đấu",
    summary:
      "Chuỗi luyện tập theo đội, tập trung vào tư duy thuật toán, chiến thuật thi đấu và kỹ năng phối hợp.",
    description: [
      "Mỗi buổi tập gồm phần khởi động, bộ bài theo chủ đề và phiên giải bài có hướng dẫn.",
      "Nội dung phù hợp cho cả người mới làm quen với lập trình thi đấu và các đội đang chuẩn bị cho vòng thi tiếp theo.",
    ],
    agenda: [
      "Ôn cấu trúc dữ liệu và thuật toán nền tảng",
      "Thi thử theo đội trong thời gian giới hạn",
      "Phân tích lời giải và chiến thuật submit",
    ],
    benefits: [
      "Làm quen môi trường thi đấu",
      "Rèn kỹ năng phân chia bài trong đội",
      "Theo dõi tiến bộ qua từng buổi luyện tập",
    ],
    cover: image2,
  },
  {
    slug: "game-tuyen-thanh-vien-2026",
    title: "Game tuyển thành viên IT Club",
    category: "Game",
    status: "upcoming",
    year: 2026,
    date: "12/10/2026 · 18:00–21:00",
    location: "Khuôn viên CICT",
    audience: "Sinh viên Đại học Cần Thơ",
    summary:
      "Một buổi kết nối nhẹ nhàng để khám phá các team, làm quen thành viên và tìm vai trò phù hợp trong CLB.",
    description: [
      "Hoạt động kết hợp thử thách công nghệ ngắn với các trạm trải nghiệm của AI, Web, Game và Mobile.",
      "Người tham gia không cần có kinh nghiệm lập trình trước và có thể trò chuyện trực tiếp với thành viên các ban.",
    ],
    agenda: [
      "Check-in và ghép đội",
      "Vượt trạm công nghệ",
      "Giao lưu cùng các team và hướng dẫn đăng ký",
    ],
    benefits: [
      "Hiểu rõ cách CLB hoạt động",
      "Khám phá team phù hợp với sở thích",
      "Kết nối với bạn bè cùng quan tâm công nghệ",
    ],
    cover: image3,
  },
  {
    slug: "javascript-practice-day",
    title: "JavaScript Practice Day",
    category: "Workshop",
    status: "past",
    year: 2026,
    date: "17/08/2026 · 08:00–11:30",
    location: "Phòng máy CICT",
    audience: "Sinh viên mới học lập trình web",
    summary:
      "Buổi thực hành JavaScript thông qua bài tập tương tác và hoạt động hỗ trợ theo nhóm.",
    description: [
      "Chương trình tập trung vào cách JavaScript làm thay đổi nội dung và hành vi của một trang web.",
      "Các nhóm cùng giải bài tập, review cách tiếp cận và hoàn thiện sản phẩm nhỏ cuối buổi.",
    ],
    agenda: ["Khởi động với DOM", "Bài tập tương tác", "Review sản phẩm"],
    benefits: ["Củng cố kiến thức", "Nhận source code tham khảo"],
    cover: image7,
  },
  {
    slug: "olp-tin-hoc-sinh-vien-2025",
    title: "Hành trình OLP Tin học Sinh viên",
    category: "Cuộc thi",
    status: "past",
    year: 2025,
    date: "09/12/2025",
    location: "Thành phố Hồ Chí Minh",
    audience: "Đội tuyển sinh viên CICT",
    summary:
      "Nhìn lại hành trình chuẩn bị, thi đấu và những trải nghiệm đáng nhớ của đội tuyển.",
    description: [
      "Hoạt động ghi dấu quá trình luyện tập nghiêm túc và tinh thần hỗ trợ lẫn nhau của các thành viên.",
    ],
    agenda: ["Chuẩn bị", "Thi đấu", "Giao lưu và tổng kết"],
    benefits: ["Kinh nghiệm thi đấu", "Kết nối cộng đồng sinh viên công nghệ"],
    cover: image2,
  },
  {
    slug: "ngay-hoi-tu-van-tuyen-sinh-2026",
    title: "Ngày hội tư vấn tuyển sinh 2026",
    category: "Game",
    status: "past",
    year: 2026,
    date: "15/03/2026",
    location: "Đại học Cần Thơ",
    audience: "Học sinh và phụ huynh",
    summary:
      "IT Club đồng hành giới thiệu môi trường học tập, hoạt động học thuật và cộng đồng sinh viên CICT.",
    description: [
      "Gian hàng mang đến góc nhìn gần gũi về ngành công nghệ thông tin thông qua sản phẩm và hoạt động của sinh viên.",
    ],
    agenda: ["Giới thiệu CLB", "Trưng bày sản phẩm", "Tư vấn và giao lưu"],
    benefits: ["Thông tin học tập thực tế", "Gặp gỡ sinh viên CICT"],
    cover: image1,
  },
  {
    slug: "mini-game-tech-connect",
    title: "Mini Game Tech Connect",
    category: "Game",
    status: "cancelled",
    year: 2025,
    date: "22/11/2025",
    location: "Khuôn viên CICT",
    audience: "Thành viên và sinh viên quan tâm",
    summary:
      "Hoạt động giao lưu công nghệ đã được hủy; thông tin được lưu lại để người xem tiện tra cứu.",
    description: ["Hoạt động không diễn ra theo kế hoạch ban đầu."],
    agenda: [],
    benefits: [],
    cover: image9,
  },
];

export const activityStatusMeta: Record<
  ActivityStatus,
  { label: string; lightClass: string; darkClass: string }
> = {
  ongoing: {
    label: "Đang diễn ra",
    lightClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
    darkClass: "bg-emerald-400/10 text-emerald-300 border-emerald-400/30",
  },
  upcoming: {
    label: "Sắp diễn ra",
    lightClass: "bg-amber-50 text-amber-700 border-amber-200",
    darkClass: "bg-amber-400/10 text-amber-200 border-amber-400/30",
  },
  past: {
    label: "Đã diễn ra",
    lightClass: "bg-slate-100 text-slate-600 border-slate-200",
    darkClass: "bg-white/5 text-slate-300 border-white/10",
  },
  cancelled: {
    label: "Đã hủy",
    lightClass: "bg-rose-50 text-rose-700 border-rose-200",
    darkClass: "bg-rose-400/10 text-rose-300 border-rose-400/30",
  },
};

export function getActivityBySlug(slug: string | undefined) {
  return activities.find((activity) => activity.slug === slug);
}
