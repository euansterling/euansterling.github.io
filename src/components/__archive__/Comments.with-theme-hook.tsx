import Giscus, { type Theme } from "@giscus/react";
import { GISCUS } from "@/constants";
import { useEffect, useState } from "react";

export default function Comments() {
  // 현재 Giscus에서 사용할 테마 상태를 관리 (기본값은 "light")
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    // 현재 public/toggle-theme.js => <html>의 data-theme 값을 기반으로 테마 결정
    const getTheme = () =>
      document.documentElement.getAttribute("data-theme") === "dark"
        ? "dark"
        : "light";

    // 초기 테마 설정
    setTheme(getTheme());

    // <html> 요소의 data-theme 속성이 바뀌는 것을 감지
    const observer = new MutationObserver(() => {
      setTheme(getTheme());
    });

    // 감시 시작
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    // 컴포넌트 언마운트 시 옵저버 해제
    return () => observer.disconnect();
  }, []);

  return (
    <div className="mt-8">
      <Giscus theme={theme} {...GISCUS} />
    </div>
  );
}
