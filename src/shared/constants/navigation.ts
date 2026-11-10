export interface NavItem {
  label: string;
  to: string;
}

export const navItems: NavItem[] = [
  { label: "Trang chủ", to: "/" },
  { label: "Giới thiệu", to: "/about" },
  { label: "Nhân sự", to: "/staff" },
  { label: "Hoạt động", to: "/activities" },
];
