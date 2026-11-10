import { Lightbulb, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface IntroItem {
  name: string;
  icon: LucideIcon;
  description: string;
}

/**
 * Trả về danh sách mục giới thiệu (Sứ mệnh, Tầm nhìn).
 * Hiện tại: data tĩnh.
 * Sau khi có backend: đổi thành fetch('/api/intro').
 */
export function getIntroItems(): IntroItem[] {
  return [
    {
      name: "Sứ mệnh",
      icon: Rocket,
      description:
        "Tạo ra một cộng đồng năng động cho những người đam mê công nghệ thông tin, mang đến trải nghiệm học tập phong phú và cơ hội phát triển toàn diện.",
    },
    {
      name: "Tầm nhìn",
      icon: Lightbulb,
      description:
        "Trở thành một trong những câu lạc bộ công nghệ hàng đầu, nơi các thành viên có thể phát triển kỹ năng, chia sẻ kiến thức và cùng nhau tạo ra những giá trị tích cực cho cộng đồng.",
    },
  ];
}
