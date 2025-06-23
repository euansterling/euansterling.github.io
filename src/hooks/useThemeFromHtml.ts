import { useEffect, useState } from "react";
import type { Theme } from "@giscus/react";

/**
 * 커스텀 훅: <html> 엘리먼트의 data-theme 속성을 기반으로 현재 테마(light 또는 dark)를 감지한다.
 *
 * - SSR-safe: 서버 렌더링 시 document 접근을 피함
 * - 클라이언트에서 MutationObserver를 사용하여 data-theme 변경을 실시간으로 감지
 * - Giscus의 theme prop에 사용할 수 있음
 */
export function useThemeFromHtml(): Theme {
  // 초기 상태를 설정한다.
  // - SSR 환경에서는 document가 없으므로 항상 "light"로 설정하여 hydration mismatch 방지
  // - 클라이언트에서는 data-theme 값을 기반으로 초기값을 설정
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof document !== "undefined") {
      const attr = document.documentElement.getAttribute("data-theme");
      return attr === "dark" ? "dark" : "light";
    }

    // SSR 환경에서는 기본값으로 "light" 반환
    return "light";
  });

  useEffect(() => {
    // 현재 테마를 가져오는 함수
    const getTheme = (): Theme =>
      document.documentElement.getAttribute("data-theme") === "dark"
        ? "dark"
        : "light_protanopia";

    // mount 시 초기 테마를 다시 한 번 동기화
    setTheme(getTheme());

    // MutationObserver를 통해 <html data-theme="..."> 속성 변경을 감지
    const observer = new MutationObserver(() => {
      setTheme(getTheme()); // 변경될 때마다 상태 업데이트
    });

    // <html> 요소의 data-theme 속성만 감지
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    // 컴포넌트 unmount 시 observer 해제 (메모리 누수 방지)
    return () => observer.disconnect();
  }, []);

  // 현재 테마 반환 (Giscus 등에 사용할 수 있음)
  return theme;
}
