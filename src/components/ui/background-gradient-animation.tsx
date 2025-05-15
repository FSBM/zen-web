import { cn } from "../../lib/utils";
import { useEffect, useRef, useState } from "react";


// Visually diverse background gradient colors
export const BackgroundGradients = [
  "rgb(0, 0, 0)",           // Black
  "rgb(36, 0, 70)",         // Deep Purple
  "rgb(0, 43, 54)",         // Dark Cyan-Blue
    "rgb(25, 25, 112)",       // Midnight Blue
    "rgb(72, 61, 139)",       // Dark Slate Blue
    "rgb(0, 100, 0)",         // Dark Green
    "rgb(139, 0, 139)",       // Dark Magenta
    "rgb(47, 79, 79)",        // Dark Slate Gray
    "rgb(19, 24, 98)",        // Custom Deep Navy
];

export const firstColors = [
  "255, 99, 132",    // Soft Red
  "54, 162, 235",    // Sky Blue
  "255, 206, 86",    // Yellow
  "75, 192, 192",    // Teal
  "153, 102, 255",   // Lavender
  "255, 159, 64",    // Orange
  "199, 199, 199",   // Light Gray
  "255, 99, 71",     // Tomato
  "60, 179, 113",    // Medium Sea Green
  "123, 104, 238",   // Medium Slate Blue
  "106, 90, 205",    // Slate Blue
  "238, 130, 238",   // Violet
  "0, 191, 255",     // Deep Sky Blue
  "255, 140, 0",     // Dark Orange
  "70, 130, 180",    // Steel Blue
  "46, 139, 87",     // Sea Green
  "255, 20, 147",    // Deep Pink
  "34, 139, 34",     // Forest Green
];

export const secondaryColors = firstColors.map(c => {
  const [r, g, b] = c.split(",").map(Number);
  return `${Math.floor(r * 0.85)}, ${Math.floor(g * 0.85)}, ${Math.floor(b * 0.85)}`;
});

export const teritiaryColors = firstColors.map(c => {
  const [r, g, b] = c.split(",").map(Number);
  return `${Math.floor(r * 0.7)}, ${Math.floor(g * 0.7)}, ${Math.floor(b * 0.7)}`;
});

export const fourthColors = firstColors.map(c => {
  const [r, g, b] = c.split(",").map(Number);
  return `${Math.min(r + 40, 255)}, ${Math.min(g + 40, 255)}, ${Math.min(b + 40, 255)}`;
});

export const fifthColors = firstColors.map(c => {
  const [r, g, b] = c.split(",").map(Number);
  return `${Math.floor((r + 255) / 2)}, ${Math.floor((g + 255) / 2)}, ${Math.floor((b + 255) / 2)}`;
});

export const BackgroundGradientAnimation = ({
  gradientBackgroundStart,
  gradientBackgroundEnd,
  firstColor =Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255) + ", " + Math.floor(Math.random() * 255),
  secondColor,
  thirdColor ,
  fourthColor,
  fifthColor ,
  pointerColor = "140, 100, 255",
  size = "80%",
  blendingValue = "hard-light",
  children,
  className,
  interactive = true,
  containerClassName,
}: {
  gradientBackgroundStart: string;
  gradientBackgroundEnd: string;
  firstColor: string;
  secondColor: string;
  thirdColor: string;
  fourthColor: string;
  fifthColor: string;
  pointerColor?: string;
  size?: string;
  blendingValue?: string;
  children?: React.ReactNode;
  className?: string;
  interactive?: boolean;
  containerClassName?: string;
}) => {
  const interactiveRef = useRef<HTMLDivElement>(null);

  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [tgX, setTgX] = useState(0);
  const [tgY, setTgY] = useState(0);

  useEffect(() => {
  document.body.style.setProperty("--gradient-background-start", gradientBackgroundStart);
  document.body.style.setProperty("--gradient-background-end", gradientBackgroundEnd);
  document.body.style.setProperty("--first-color", firstColor);
  document.body.style.setProperty("--second-color", secondColor);
  document.body.style.setProperty("--third-color", thirdColor);
  document.body.style.setProperty("--fourth-color", fourthColor);
  document.body.style.setProperty("--fifth-color", fifthColor);
  document.body.style.setProperty("--pointer-color", pointerColor);
  document.body.style.setProperty("--size", size);
  document.body.style.setProperty("--blending-value", blendingValue);
}, [
  gradientBackgroundStart,
  gradientBackgroundEnd,
  firstColor,
  secondColor,
  thirdColor,
  fourthColor,
  fifthColor,
]);

  useEffect(() => {
    function move() {
      if (!interactiveRef.current) {
        return;
      }
      setCurX(curX + (tgX - curX) / 20);
      setCurY(curY + (tgY - curY) / 20);
      interactiveRef.current.style.transform = `translate(${Math.round(
        curX
      )}px, ${Math.round(curY)}px)`;
    }

    move();
  }, [tgX, tgY]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (interactiveRef.current) {
      const rect = interactiveRef.current.getBoundingClientRect();
      setTgX(event.clientX - rect.left);
      setTgY(event.clientY - rect.top);
    }
  };

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  return (
    <div
      className={cn(
        "h-screen w-screen relative overflow-hidden top-0 left-0 bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]",
        containerClassName
      )}
    >
      <svg className="hidden">
        <defs>
          <filter id="blurMe">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className={cn("", className)}>{children}</div>
      <div
        className={cn(
          "gradients-container h-[800px] w-[800px] blur-lg",
          isSafari ? "blur-2xl" : "[filter:url(#blurMe)_blur(40px)]"
        )}
      >
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_var(--first-color)_0,_var(--first-color)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:center_center]`,
            `animate-first`,
            `opacity-100`
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.8)_0,_rgba(var(--second-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%-400px)]`,
            `animate-second`,
            `opacity-100`
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.8)_0,_rgba(var(--third-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%+400px)]`,
            `animate-third`,
            `opacity-100`
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.8)_0,_rgba(var(--fourth-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%-200px)]`,
            `animate-fourth`,
            `opacity-70`
          )}
        ></div>
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fifth-color),_0.8)_0,_rgba(var(--fifth-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:calc(50%-800px)_calc(50%+800px)]`,
            `animate-fifth`,
            `opacity-100`
          )}
        ></div>

        {interactive && (
          <div
            ref={interactiveRef}
            onMouseMove={handleMouseMove}
            className={cn(
              `absolute [background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.8)_0,_rgba(var(--pointer-color),_0)_50%)_no-repeat]`,
              `[mix-blend-mode:var(--blending-value)] w-full h-full -top-1/2 -left-1/2`,
              `opacity-70`
            )}
          ></div>
        )}
      </div>
    </div>
  );
};
