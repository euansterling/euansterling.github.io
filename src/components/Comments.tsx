import Giscus from "@giscus/react";
import { GISCUS } from "@/constants";
import { useThemeFromHtml } from "@/hooks/useThemeFromHtml";

export default function Comments() {
  const theme = useThemeFromHtml();

  return (
    <div className="mt-8">
      <Giscus theme={theme} {...GISCUS} />
    </div>
  );
}
