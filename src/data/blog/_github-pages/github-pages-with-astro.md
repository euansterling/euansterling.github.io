---
author: Euan Sterling Lee
pubDatetime: 2025-06-12T12:36:00+09
title: Astro를 사용하여 GitHub Pages 사이트 만들기
slug: github-pages-with-astro
featured: false
draft: false
tags: [github, astro, ssg]
description: Astro, Themes, GitHub Pages 배포, 그리고 Discussions
---

Astro, Themes, GitHub Pages 배포, 그리고 Discussions

<figure class="flex flex-col items-center">
  <svg xmlns="http://www.w3.org/2000/svg" width="424" height="128" viewBox="0 -6 381 100">
    <path class="flame" fill="currentColor" d="M25.8 85.2c-4.5-4.2-5.9-12.8-4-19.1 3.3 4 7.8 5.2 12.5 6 7.2 1 14.3.6 21-2.7l2.4-1.4c.6 1.8.8 3.7.5 5.6-.5 4.5-2.8 8-6.4 10.7-1.4 1.1-3 2-4.5 3-4.6 3.2-5.8 6.8-4 12.1v.6a12 12 0 0 1-5.3-4.6 13 13 0 0 1-2-7c0-1.2 0-2.5-.2-3.7-.4-3-1.8-4.3-4.5-4.4a5.2 5.2 0 0 0-5.4 4.2l-.1.7Z"></path>
    <path fill="currentColor" d="M0 65s13.4-6.5 26.8-6.5l10.1-31.3c.4-1.5 1.5-2.5 2.7-2.5 1.3 0 2.4 1 2.8 2.5l10 31.3c16 0 26.9 6.5 26.9 6.5L56.5 3c-.6-1.8-1.7-3-3.2-3H26c-1.5 0-2.5 1.2-3.2 3L0 65Zm141-19.9c0 5.5-6.8 8.8-16.2 8.8-6.2 0-8.3-1.5-8.3-4.7 0-3.4 2.6-5 8.8-5 5.5 0 10.3 0 15.7.8v.1Zm.1-6.8a71 71 0 0 0-14.5-1.2c-17.7 0-26 4.2-26 14 0 10.1 5.7 14 18.8 14 11.2 0 18.8-2.8 21.6-9.8h.4l-.1 4.7c0 3.6.6 3.9 3.5 3.9h13.8c-.8-2.2-1.2-8.2-1.2-13.4l.2-15.4c0-11.5-6.9-18.8-28.5-18.8-9.3 0-19.6 1.6-27.5 4 .8 3.1 1.8 9.4 2.3 13.5a61.4 61.4 0 0 1 24-4.5c10.4 0 13.2 2.3 13.2 7.1v2Zm37.9 10c-1.9.3-4.5.3-7 .3a60 60 0 0 1-7.1-.4l-.1 2c0 9.5 6.2 15 28.1 15 20.6 0 27.3-5.5 27.3-15.1 0-9.2-4.4-13.7-24-14.7-15.2-.6-16.6-2.3-16.6-4.2 0-2.2 2-3.4 12.2-3.4 10.6 0 13.4 1.5 13.4 4.5v.7a153 153 0 0 1 14.1 0v-1.7c0-11.2-9.2-14.9-27.2-14.9-20.3 0-27 5-27 14.6 0 8.7 5.4 14.1 24.8 15 14.3.4 16 2 16 4.2 0 2.4-2.4 3.5-12.5 3.5-11.5 0-14.4-1.6-14.4-5v-.4Zm66-40.1a58.2 58.2 0 0 1-20.8 11.6v10.8h5V47c0 10 5.3 17.7 21.8 17.7 7 0 11.6-.8 17.4-2-.6-3.7-1.3-9.4-1.5-13.8a41 41 0 0 1-12.6 1.8c-6.6 0-9.3-1.8-9.3-7.1V30.8c8.6 0 17.1.2 22.1.4 0-4 .1-9.7.3-13.5l-22.1.2.2-9.7h-.5Zm44.7 20.1.3-10.6h-15.1c.2 6.5.2 13.3.2 23 0 10 0 16.7-.2 23.2H292c-.3-4.6-.3-12.3-.3-18.9 0-10.3 4.2-13.3 13.7-13.3 4.4 0 7.6.5 10.3 1.5.1-3.8.9-11.4 1.3-14.7a34 34 0 0 0-9.8-1.4c-8.2 0-14.2 3.3-17 11.3l-.6-.1Zm75.1 12.2c0 8.3-6 12.2-15.4 12.2S334 49 334 40.5c0-8.6 6-11.8 15.4-11.8 9.3 0 15.4 3.5 15.4 11.8Zm15.7-.4c0-16.5-13-24-31.1-24-18.3 0-30.8 7.5-30.8 24s11.6 25.3 30.7 25.3c19.2 0 31.2-8.8 31.2-25.3Z"></path>
    <defs>
      <linearGradient id="gradient" x1="21" x2="64.6" y1="100" y2="79.4" gradientUnits="userSpaceOnUse">
        <stop stop-color="#D83333"></stop>
        <stop offset="1" stop-color="#F041FF"></stop>
      </linearGradient>
    </defs>
  </svg>
  <figcaption>
    <a href="https://astro.build/" target="_blank" aria-label="Astro">astro.build</a>
  </figcaption>  
</figure>

## Table of contents

## Astro

[https://docs.astro.build/](https://docs.astro.build/)

올인원 웹 프레임워크 \
**Content driven (Islands), UI agnostic, Server first, Zero JS, ..** \
v5.9.2 (2024.12-)

<aside class='callout'>
📖 Islands architecture :

- _Katie Sylor-Miller, “component island”, 2019_
- _Jason Miller, Islands Architecture, 2020.8, [https://jasonformat.com/islands-architecture/](https://jasonformat.com/islands-architecture/)_
- 서버에서 HTML을 렌더링하고, 매우 동적인 영역 주위에 플레이스홀더나 슬롯을 두어 선택적으로 상호작용을 한다. — “_Separate Hydration_”
- 컴포넌트에 `client:`, `server:` directives를 사용하여 구분한다.
</aside>

### Install

#### Requirements

- node 18.17.1/20.3.0/22.0.0+
- Astro - VS Code extension, [https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode)

```bash
npm create astro@latest
> Need to install the following packages: create-astro@4.12.1
> Where should we create your new project?
> How would you like to start your new project?
> -- A basic, helpful starter project | Use blog template | Use docs (Starlight) template | Use minimal (empty) template
> Install dependencies?
> Initialize a new git repository?

npm run dev
> http://localhost:4321
```

#### Instructions

```bash
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   ├── styles/
│   └── pages/
│       └── index.astro
├── astro.config.mjs
├── package-lock.json
├── package.json
└── tsconfig.json
```

<aside class='callout'>
❗ <code>npm create astro@latest -- --template example</code> :

테마에 따라 구성이 달라질 수 있다. \
— Astro에서 예약된 유일한 디렉터리는 src/pages/뿐이다. 따라서 다른 모든 디렉터리는 사용자가 재구성할 수 있다.

</aside>

<aside class='callout'>
❗ Astro action은 사용자의 패키지 관리자 (npm, yarn, pnpm, bun, ..) 를 감지하기 위해 잠금 파일을 스캔한다. 따라서 lock 파일을 커밋해야 한다.

— GitHub Pages에서는 이를 무시하는 듯 하다. 명시적으로 GitHub Actions를 설정해주어야 한다.

</aside>

### Deploy to GitHub Pages

[https://docs.astro.build/en/guides/deploy/github/](https://docs.astro.build/en/guides/deploy/github/)

1. astro.config.mjs

```jsx
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://username.github.io", // 혹은 사용자 정의 도메인
  base: "/", // 루트 혹은 username.github.io 경우 비워둔다, 루트를 별도로 처리해야 할 경우 '/repository'
});
```

2. Configure GitHub Actions

[https://github.com/withastro/action/blob/main/README.md](https://github.com/withastro/action/blob/main/README.md) → _repository_/ Settings/ Code and automaiton - Pages/ Build and deployment/ GitHub Actions → .github/workflows/_deploy_.yml

```yaml
name: Deploy to GitHub Pages

on:
  # Trigger the workflow every time you push to the `main` branch
  # Using a different branch name? Replace `main` with your branch’s name
  push:
    branches: [main]
  # Allows you to run this workflow manually from the Actions tab on GitHub.
  workflow_dispatch:

# Allow this job to clone the repo and create a page deployment
permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout your repository using git
        uses: actions/checkout@v4
      - name: Install, build, and upload your site output
        uses: withastro/action@v4
        # with:
        # path: . # The root location of your Astro project inside the repository. (optional)
        # node-version: 22 # The specific version of Node that should be used to build your site. Defaults to 22. (optional)
        # package-manager: pnpm@latest # The Node package manager that should be used to install dependencies and build your site. Automatically detected based on your lockfile. (optional)

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Creating pages and posts

Astro는 파일 기반 라우팅을 한다. `src/pages/` 의 각 파일은 사이트의 endpoint가 된다.

```bash
├── src/
│   └── pages/
│       ├── index.astro
│       ├── about.astro
│       └── posts/
│           └── post.md
```

#### .astro 파일

- 페이지, UI 컴포넌트, 레이아웃 등으로 사용할 수 있다.
- frontmatter script는 JavaScript로 작성한다.
- HTML의 상위집합이다.
- 컴포넌트 구문은 React, Svelte, Vue와 같은 유용한 기능도 결합되어 있다. — **kebab-case**, **Template directives, slot** 등 차이

#### .md 파일

- 콘텐츠를 작성한다.

  posts/_a-post_.md

  ```markdown
  ---
  title:
  description:
  pubDate: YYYY-MM-DD
  author:
  image:
    url:
    alt:
  tags: []
  ---

  <!--- 이하 본문 --->
  ```

## Themes

다음 테마들을 추천한다.

- [Astro Paper](https://github.com/satnaing/astro-paper)
- [NeonMint](https://github.com/EFEELE/NeonMint)
- [Retypeset](https://github.com/radishzzz/astro-theme-retypeset)
- [Astro Citrus](https://github.com/artemkutsan/astro-citrus)
- [Astrowind](https://github.com/onwidget/astrowind)
- [Astro Micro](https://github.com/trevortylerlee/astro-micro)

### Astro Paper

[https://github.com/satnaing/astro-paper](https://github.com/satnaing/astro-paper)

- Stack : astro, tailwindcss, astro-icon, dayjs, lodash.kebabcase, satori, sharp, pagefind

#### Install

```bash
pnpm create astro@latest --template satnaing/astro-paper
# or
git clone https://github.com/satnaing/astro-paper.git
cd astro-paper
pnpm install

# Warning
# Ignored build scripts: esbuild, sharp.
# Run "pnpm approve-builds" to pick which dependencies should be allowed to run scripts.
pnpm approve-builds

pnpm run dev
```

Instructions

```bash
astro-paper/
├── .github/workflows/
│       └── ci.yml
├── public/
├── src/
│   ├── assets/
│   │   └── icons/
│   │   └── images/
│   ├── components/
│   ├── data/blog/
│   │       └── some-posts.md
│   ├── layouts/
│   ├── pages/
│   │   └── index.astro
│   ├── styles/
│   ├── utils/
│   ├── config.ts
│   ├── constants.ts
│   └── content.config.ts
├── astro.config.mjs
├── package-lock.json
├── package.json
└── tsconfig.json
```

src/config.ts

```tsx
export const SITE = {
  website: "https://username.github.io", // replace this with your deployed domain
  author: "Full Name",
  profile: "https://github.com/username",
  desc: "",
  title: "",
  ogImage: "", // public/og.jpg
  lightAndDarkMode: true,
  postPerIndex: 4, // view in Home - Recent section
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true, // 게시물 제목아래 편집링크 제공 여부
    text: "Suggest Changes",
    url: "https://github.com/owner/username.github.io/edit/main/",
  },
  dynamicOgImage: true,
  lang: "ko", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Seoul", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
```

src/constants.ts

```tsx
export const SOCIALS = [
  {
    name: "Github",
    href: "https://github.com/username",
    linkTitle: ` ${SITE.title} on Github`,
    icon: IconGitHub,
  },
  ...
] as const;
```

#### Configure GitHub Actions

.github/workflows/ci.yml

```yaml
name: CI

on:
  pull_request:
    types:
      - opened
      - edited
      - synchronize
      - reopened
  workflow_call:

jobs:
  build:
    name: Code standards & build
    runs-on: ubuntu-latest
    timeout-minutes: 3

    strategy:
      matrix:
        node-version: [22]

    steps:
      - name: "☁️ Checkout repository"
        uses: actions/checkout@v4
      - name: "📦 Install pnpm"
        uses: pnpm/action-setup@v4
        with:
          version: 10
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node-version }}
          cache: "pnpm"
      - name: "📦 Install dependencies"
        run: pnpm install
      - name: "🔎 Lint code"
        run: pnpm run lint
      - name: "📝 Checking code format"
        run: pnpm run format:check
      - name: "🚀 Build the project"
        run: pnpm run build
```

.github/workflows/deploy.yml

[_https://github.com/withastro/action/blob/main/README.md_](https://github.com/withastro/action/blob/main/README.md)

```yaml
...
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout your repository using git
        uses: actions/checkout@v4
      - name: Install, build, and upload your site output
        uses: withastro/action@v4
        with:
          # path: . # The root location of your Astro project inside the repository. (optional)
          # node-version: 22 # The specific version of Node that should be used to build your site. Defaults to 22. (optional)
          package-manager: pnpm@latest # The Node package manager that should be used to install dependencies and build your site. Automatically detected based on your lockfile. (optional)
  ...
```

#### Creating posts

src/data/blog/

- 새 글(.md)을 작성한다.
- 하위에 `_dir/`를 만들어 글들을 묶어 정리해 둘 수 있다. URL에 반영되지 않는다.

```markdown
---
title: # 필수
description: # 필수
pubDate: YYYY-MM-DDThh:mm:ss+09 # 필수 (ISO 8601형식 중 구분자(-,:)와 ss 필수)
modDatetime:
slug:
author:
tags: []
draft:
image:
  url:
  alt:
ogImage:
featured:
canonicalURL:
hideEditPost:
timezone: # 콘텐츠내 시간대 -- new Date().toISOString()
---

<!--- 이하 본문 --->
```

#### Update template and dependencies 😱

```bash
# Updating AstroPaper template
# 테마 원격 추가 및 병합 시도
git remote add astro-paper https://github.com/satnaing/astro-paper.git
git remote -v
git checkout -b update/astro-paper
git pull astro-paper main
# fatal: refusing to merge unrelated histories
git pull astro-paper main --allow-unrelated-histories

# 변경사항 확인 및 conflict 해결 후 커밋
git status
> On branch update/astro-paper
> You have unmerged paths.
> Unmerged paths:
>   both modified: src/styles/base.css
git diff
git add .
git commit -m "Resolve merge conflicts with astro-paper main"

# main으로 병합
git checkout main
git merge update/astro-paper
git push origin main
# 테마 원격 삭제
git remote remove astro-paper
git remote -v
```

```bash
# Updating Package Dependencies
npm install -g npm-check-updates
ncu
ncu -i --target patch
ncu -i
```

### NeonMint

[https://github.com/EFEELE/NeonMint](https://github.com/EFEELE/NeonMint)

- Stack : astro, preact, tailwindcss, astro-icon, prismjs, tailwindcss-animated, @vercel/speed-insights

Install

```bash
npm create astro@latest -- --template EFEELE/neonmint
# or
git clone https://github.com/EFEELE/NeonMint.git
cd NeonMint
npm install
npm run dev
```

Instructions

```bash
NeonMint/
├── public/
│   └── images/
│       └── posts/       # Post images
├── src/
│   ├── components/      # Reusable UI components
│   ├── icons/           # Icons (.svg)
│   ├── layouts/         # Site layouts
│   ├── pages/           # Site pages
│   │   ├── about-me.md           # About-me page
│   │   ├── blog/        # All posts page
│   │   │   ├── index.astro       # Blog home page
│   │   │   ├── posts/            # Blog posts
│   │   │   ├── └── index.astro   # All posts page
│   │   │   ├── tags/             # Blog tags
│   │   │   └── techs/            # Blog technologies
│   │   └── index.astro           # Home page
│   ├── scripts/
│   ├── styles/
│   └── utils/
│       └── languages.ts          # site's capsules
├── astro.config.mjs
├── package-lock.json
├── package.json
└── tsconfig.json
```

Spec capsules: 언어나 기술 스펙을 표현

- src/icons — [https://svgl.app/](https://svgl.app/)
- utils/languages.ts
  ```jsx
  ...
  html: {
      name: "HTML 5",
      iconName: "html",
  }
  ```

---

## Issues

1. 외부 링크에 대해 내부 링크로 처리되는 문제

```html
// src/layouts/Layout.astro
<body>
  <slot />
  <script is:inline data-astro-rerun>
    /* 외부링크를 _blank로 열도록 처리 */
    // DOM이 로드된 후에 스크립트가 실행되도록 보장하고
    // astro 파일이라 그런가 -- DOMContentLoaded (X), data-astro-rerun | astro:page-load (O)
    // document.addEventListener("astro:page-load", () => {
    // 문서 내의 모든 <a> 태그(링크)를 배열로 변환
    Array.from(document.links)
      .filter(link => {
        const href = link.getAttribute("href");
        // 현재 호스트네임과 다르면서 호스트네임이 비어있지 않고,
        // href가 없거나 '#'으로 시작하는 앵커 링크가 아닌 경우만 필터링
        return (
          link.hostname !== window.location.hostname &&
          link.hostname !== "" &&
          (!href || !href.startsWith("#"))
        );
      })
      // 필터링된 각 외부 링크에 대해 다음 작업을 수행
      .forEach(link => {
        link.target = "_blank";
        link.rel = "noopener noreferrer"; // 보안 취약점(Tabnabbing)을 방지
      });
    // });
  </script>
</body>
```

## Discussions

[https://giscus.app](https://giscus.app/)

오픈 소스 또는 내부 프로젝트에 대한 커뮤니티를 위한 협업 커뮤니케이션 포럼

- GitHub 공개저장소
- giscus.app 설치
- 저장소내 토론 활성화 (repository/ Settings/ [v] Discussions) 및 새 카테고리 Comments (Announcement 형식) 생성

```html
// src/layouts/PostDetails.astro
<!-- <div class="giscus"> -->
<script
  src="https://giscus.app/client.js"
  data-repo="owner/username.github.io"
  data-repo-id="R_kgDOOrIEX.."
  data-category="Comments"
  data-category-id="DIC_kwDOOrIEXs4.."
  data-mapping="pathname"
  data-strict="1"
  data-reactions-enabled="1"
  data-emit-metadata="1"
  data-input-position="bottom"
  data-theme="preferred_color_scheme"
  data-lang="ko"
  data-loading="lazy"
  crossorigin="anonymous"
  async
></script>
```
