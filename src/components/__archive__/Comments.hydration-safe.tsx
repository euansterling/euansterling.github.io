import Giscus, { type Theme } from "@giscus/react";
import { GISCUS } from "@/constants";
import { useEffect, useState } from "react";

interface CommentsProps {
  lightTheme?: Theme;
  darkTheme?: Theme;
}

export default function Comments({
  lightTheme = "light",
  darkTheme = "dark",
}: CommentsProps) {
  // 초기값을 고정하여 React hydration mismatch 문제 방지
  const [theme, setTheme] = useState<Theme>("light");

  // 시스템 테마 감지
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as Theme | null;

    if (storedTheme === "light" || storedTheme === "dark") {
      setTheme(storedTheme);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(prefersDark ? "dark" : "light");
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      const stored = localStorage.getItem("theme");
      if (!stored) {
        setTheme(e.matches ? "dark" : "light");
      }
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // 수동 테마 전환용 버튼 감지 (선택적)
  useEffect(() => {
    const button = document.querySelector("#theme-btn");
    if (!button) return;

    const handleClick = () => {
      setTheme(prev => {
        const next = prev === "dark" ? "light" : "dark";
        localStorage.setItem("theme", next);
        return next;
      });
    };

    button.addEventListener("click", handleClick);
    return () => button.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="mt-8">
      <Giscus {...GISCUS} theme={theme === "light" ? lightTheme : darkTheme} />
    </div>
  );
}
