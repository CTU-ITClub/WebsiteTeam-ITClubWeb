import { useEffect, useRef, useState } from "react";

/**
 * Hook tạo hiệu ứng fade-in khi element xuất hiện trong viewport.
 * Dùng IntersectionObserver để detect, chỉ trigger một lần.
 */
export function useFadeInObserver(threshold = 0.1) {
  const [isVisible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}
