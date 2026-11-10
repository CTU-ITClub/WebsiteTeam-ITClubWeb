export interface Faq {
  question: string;
  answer: string;
}

/**
 * Trả về danh sách câu hỏi thường gặp.
 * Hiện tại: data tĩnh.
 * Sau khi có backend: đổi thành fetch('/api/faqs').
 */
export async function getFaqs(): Promise<Faq[]> {
  return [
    {
      question: "Câu lạc bộ tin học là gì?",
      answer:
        "Câu lạc bộ Tin học là nơi tập hợp những sinh viên đam mê công nghệ thông tin, cùng nhau học hỏi và phát triển kỹ năng lập trình.",
    },
    {
      question: "Làm thế nào để tham gia CLB?",
      answer:
        "Bạn có thể đăng ký tham gia thông qua form đăng ký trực tuyến hoặc liên hệ trực tiếp với ban quản trị CLB qua email hoặc fanpage.",
    },
    {
      question: "CLB có những hoạt động gì?",
      answer:
        "CLB tổ chức các workshop, game tuyển sinh, cuộc thi lập trình như CICT, ICPC và nhiều hoạt động học thuật khác.",
    },
    {
      question: "Có cần kinh nghiệm lập trình không?",
      answer:
        "Không nhất thiết! CLB chào đón tất cả các bạn từ người mới bắt đầu đến những người đã có kinh nghiệm.",
    },
    {
      question: "Liên hệ CLB như thế nào?",
      answer:
        "Bạn có thể liên hệ qua email itc.cit.ctu@gmail.com hoặc fanpage chính thức của CLB.",
    },
  ];
}
