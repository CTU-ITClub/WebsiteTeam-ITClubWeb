import { useLayoutEffect, useRef, useState, type CSSProperties } from "react";
import { useTheme } from "../../../providers/ThemeProvider";

interface LogoCarousel_Props {
  direction: "left" | "right";
  LOGOS: string[];
  title: string;
}

export default function LogoCarousel({
  LOGOS,
  direction,
  title,
}: LogoCarousel_Props) {
  const { isDark } = useTheme();
  const animationName = direction === "left" ? "marquee-left" : "marquee-right";
  const groupRef = useRef<HTMLDivElement | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const [marqueeDistance, setMarqueeDistance] = useState(0);
  const [isImageHovered, setIsImageHovered] = useState(false);

  useLayoutEffect(() => {
    const groupElement = groupRef.current;

    if (!groupElement) {
      return;
    }

    const updateDistance = () => {
      setMarqueeDistance(groupElement.scrollWidth);
    };

    updateDistance();

    const resizeObserver = new ResizeObserver(updateDistance);
    resizeObserver.observe(groupElement);

    return () => resizeObserver.disconnect();
  }, [LOGOS]);

  const renderLogos = (groupKey: string) =>
    LOGOS.map((logo, index) => (
      <div
        key={`${direction}-${groupKey}-${index}`}
        className="shrink-0 transition-all duration-400 cursor-pointer relative group"
        onMouseEnter={() => {
          setIsImageHovered(true);
        }}
        onMouseLeave={() => {
          setIsImageHovered(false);
        }}
      >
        <img
          src={logo}
          alt={`image-${index}`}
          className="w-full max-w-100 h-48 sm:h-52 md:h-60 object-cover rounded-2xl transition-transform duration-400 ease-in-out group-hover:scale-110 transform-gpu"
        />
      </div>
    ));

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 relative py-5">
      <div className="flex flex-col gap-4 relative">
        <h3
          className={`text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 sm:mb-6 font-sans ${
            isDark ? "text-cyan-300" : "text-blue-900"
          }`}
        >
          {title}
        </h3>
        <div className="relative overflow-visible">
          <div
            ref={viewportRef}
            className="flex overflow-hidden py-4 sm:py-6"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
            }}
          >
            <div
              className="flex items-center w-max"
              style={
                {
                  animation: `${animationName} 30s linear infinite`,
                  animationPlayState: isImageHovered ? "paused" : "running",
                  willChange: "transform",
                  ["--marquee-distance" as unknown as string]: `${marqueeDistance}px`,
                } as CSSProperties
              }
            >
              <div
                ref={groupRef}
                className="flex shrink-0 items-center gap-8 md:gap-14 pr-8 md:pr-14"
              >
                {renderLogos("a")}
              </div>
              <div
                className="flex shrink-0 items-center gap-8 md:gap-14"
                aria-hidden="true"
              >
                {renderLogos("b")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
