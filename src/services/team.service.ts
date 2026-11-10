import { BrainCircuit, Gamepad, LayoutTemplate, Smartphone } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Team {
  name: string;
  icon: LucideIcon;
  description: string;
}

/**
 * Trả về danh sách các team trong CLB.
 * Hiện tại: data tĩnh.
 * Sau khi có backend: đổi thành fetch('/api/teams').
 */
export function getTeams(): Team[] {
  return [
    {
      name: "AI",
      icon: BrainCircuit,
      description:
        "Khám phá dữ liệu, trí tuệ nhân tạo và các sản phẩm ứng dụng thực tế.",
    },
    {
      name: "Web",
      icon: LayoutTemplate,
      description: "Biến ý tưởng thành trải nghiệm mượt mà trên mọi trình duyệt.",
    },
    {
      name: "Mobile",
      icon: Smartphone,
      description:
        "Xây dựng trải nghiệm ứng dụng gọn gàng, hữu ích trên thiết bị di động.",
    },
    {
      name: "Game",
      icon: Gamepad,
      description:
        "Kết hợp lập trình, thiết kế và câu chuyện để tạo nên sản phẩm tương tác.",
    },
  ];
}
