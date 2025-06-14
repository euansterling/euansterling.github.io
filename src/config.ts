export const SITE = {
  website: "https://euansterling.github.io/", // replace this with your deployed domain
  author: "Euan Ster. Lee",
  profile: "https://github.com/euansterling/",
  desc: "세상을 벗어난 마음으로(出世之心) 세상에 얽매인 일을 하라(入世之事).",
  title: "Euan Ster. Lee",
  ogImage: "og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Suggest Changes",
    url: "https://github.com/euansterling/euansterling.github.io/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "ko", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Seoul", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
