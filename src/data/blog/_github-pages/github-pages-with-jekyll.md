---
author: Euan Sterling Lee
pubDatetime: 2025-06-07T11:56:00+09
title: Jekyll을 사용하여 GitHub Pages 사이트 만들기
slug: github-pages-with-jekyll
featured: false
draft: false
tags: [github, jekyll, ssg]
description: GitHub Pages, Jekyll, 그리고 설치법 몇가지와 문서오류에 대해
---

GitHub Pages, Jekyll, 그리고 설치법 몇가지와 문서오류에 대해

<figure>
  <img
    src="https://jekyllrb.com/img/logo-2x.png"
    alt=""
  />
  <figcaption class="text-center">
    <a href="https://jekyllrb.com">jekyllrb.com</a>
  </figcaption>
</figure>

## Table of contents

## GitHub Pages

[https://docs.github.com/ko/pages](https://docs.github.com/ko/pages)

GitHub를 통해 호스트되고 게시되는 퍼블릭 웹 페이지로서,\
문서에 따르면 저장소를 먼저 만들라고 하지만, 테마를 사용할 경우 건너뛰도록 한다.

<div class='unimportant'>

### ~~Create a new repository~~

저장소 이름을 _username_.github.io 으로 지정하면, “특별한” GitHub Pages 저장소로 사용된다.

1. 새 저장소 만들기 : `+` 클릭/ New repository
   - _owner_/_username_.github.io
   - main 브랜치를 사용
   - 프로젝트일 경우 : _owner_.github.io/_projectname,_ gh-pages 브랜치를 사용
2. 저장소 공개여부 : Public
3. README로 초기화
4. `Create repository` 클릭

GitHub Pages는 GitHub Actions를 사용하여 내부의 Jekyll 빌드를 실행하여 사이트를 게시한다.\
게시 소스 구성은 기본적으로 **Deploy from a branch** 으로 설정되며, 시작파일 (README.md) 을 콘텐츠로 하여 자동빌드 및 배포된다.

- _repository_/ Settings/ Code and automation - Pages/ Build and deployment/ Deploy from a branch: **main, /root**
- _repository_/ Actions/ pages build and deployment (1 workflow run !)

</div>

### Adding a theme

<div class='unimportant'>

#### ~~Theme Chooser~~

기능 삭제되었다. (deprecated, 2022.8.22)

</div>

<aside class='callout'>
❗Jekyll theme 관련 변경이 불가하다 :

[GitHub Docs Quickstart for GitHub Pages - GitHub Docs](https://docs.github.com/en/pages/quickstart#changing-the-title-and-description),\
[https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/adding-a-theme-to-your-github-pages-site-using-jekyll](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/adding-a-theme-to-your-github-pages-site-using-jekyll),\
[https://github.com/skills/github-pages](https://github.com/skills/github-pages) (Step 2)

위 문서에서 말하는 \_config.yml 파일이 보이지 않는다.\
아마도 Theme Chooser 기능 삭제 이후, 문서 업데이트를 제대로 하지 않은 듯 하다.

</aside>

<aside class='callout'>
❗GitHub Pages에서 지원되는 테마는 대부분 오래되었다 (2021.7.27) :

[https://pages.github.com/themes/](https://pages.github.com/themes/) — Architect, Cayman, Dinky, Hacker, Leap day, ..  
그나마 Minima (Jekyll default theme) 는 업데이트 중이긴 하다. (2024.9.6)

</aside>

<div class='unimportant'>

#### ~~Theme template (repository)~~

테마 커스터마이징에 제한이 있을 수 있다.

https://github.com/cotes2020/chirpy-starter \
https://github.com/gwenneg/blog-jekyll-asciidoc-template (Minimal Mistakes)

`Use this template` → Create a new repository: _owner_/_username_.github.io

</div>

#### Fork or clone a theme (repository)

https://github.com/cotes2020/jekyll-theme-chirpy

- Create a new fork → _owner_/_username_.github.io
- master → main
- 테마 초기화 : 로컬에서 `tools/init.sh` 혹은 직접 삭제 — Gemfile.lock, .travis.tml, \_posts/, docs/, .github/workflows/pages-deploy.yml.hook 외 (pages-deploy.yml 으로 변경)

```bash
# 로컬 작업시,
git clone https://github.com/owner/username.github.io.git

cd username.github.io
bash tools/init.sh
bundle
npm install && npm run build
```

### Configure a publishing source

게시 소스 구성을 **GitHub Actions**으로 변경하여, 미리 설치된 Jekyll 사이트를 패키징하거나 정적 HTML을 배포할 수 있다.

<aside class='callout'>
📖 GitHub Actions :

- workflow를 자동화할 수 있는 도구로서 테스트, 배포(CI), 데이터수집 등을 할 수 있다. (2019.11)
- 구조 : workflow, event, job, step, action, runner
</aside>

- _repository_/ Settings/ Code and automaiton - Pages/ Build and deployment/ GitHub Actions
- [https://github.com/actions/starter-workflows/tree/main/pages](https://github.com/actions/starter-workflows/tree/main/pages)

---

## Jekyll

[https://jekyllrb.com/docs/](https://jekyllrb.com/docs/)

지킬은 간단한 정적 사이트 생성기이다. 복잡함 없는 파일 기반 CMS.\
콘텐츠를 가져와 Markdown 및 Liquid 템플릿을 렌더링하여 정적 웹사이트를 생성한다.\
GitHub Pages의 엔진으로 GitHub 저장소에서 바로 사이트를 호스팅하는데 사용되고 있다.

### Install

#### Requirements

- Ruby 2.7.0+
  - _Moncef Belyamani, [Why You Shouldn't Use the System Ruby to Install Gems on a Mac](https://www.moncefbelyamani.com/why-you-shouldn-t-use-the-system-ruby-to-install-gems-on-a-mac/)_
  - [asdf](https://asdf-vm.com/) | [chruby](https://github.com/postmodern/chruby) | [rbenv](https://github.com/rbenv/rbenv) | [rvm](https://rvm.io/)
- RubyGems
- GCC and Make

#### Instructions

```bash
gem install jekyll bundler
jekyll -v     # jekyll 4.4.1
bundler -v    # Bundler version 2.6.8

# 지킬을 구성한다. 테마를 사용할 경우 git clone 한다.
jekyll new username.github.io
cd username.github.io
# ├── _config.yml
# ├── _posts/
# │   └── 2025-06-07-welcome-to-jekyll.markdown
# ├── .gitignore
# ├── 404.html
# ├── about.markdown
# ├── Gemfile
# ├── Gemfile.lock
# └── index.markdown

bundle exec jekyll serve --livereload
# browse to http://localhost:4000
# press ctrl-c to stop.

# ├── _site/
# │   ├── 404.html
# │   ├── about
# │   │   └── index.html
# │   ├── assets
# │   │   ├── main.css
# │   │   ├── main.css.map
# │   │   └── minima-social-icons.svg
# │   ├── feed.xml
# │   ├── index.html
# │   └── jekyll
# │       └── update
# │           └── 2025
# │               └── 06
# │                   └── 07
# │                       └── welcome-to-jekyll.html
# └── .jekyll-cache

# If you are using Ruby version 3.0.0 or higher, step 5 may fail.
# You may fix it by adding webrick to your dependencies: bundle add webrick
bundle add webrick
```

\_config.yml

```yaml
url: https://username.github.io
baseurl:
title:
description:
theme: jekyll-theme-minimal
permalink: none
# date    to /:categories/:year/:month/:day/:title:output_ext (default)
# pretty  to /:categories/:year/:month/:day/:title/
# ordinal to /:categories/:year/:y_day/:title.html
# none    to /:categories/:title.html
# page와 collection은 시간이나 범주가 없기 때문에 permalink는 무시된다.

markdown: GFM # or kramdown, GFM(GitHub Flavored Markdown), https://github.github.com/gfm/
comments: true
plugins:
  - jekyll-asciidoc
  - jekyll-target-blank
  ...
```

Gemfile

```ruby
# frozen_string_literal: true
source "<https://rubygems.org>"
gemspec
gem "jekyll-theme-chirpy", "~> 7.2", ">= 7.2.4"
gem "html-proofer", "~> 5.0", group: :test
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end
gem "wdm", "~> 0.2.0", :platforms => [:mingw, :x64_mingw, :mswin]
gem 'jekyll-target-blank'
```

### Creating posts

- `_posts/` 디렉토리에 새로운 _YEAR-MONTH-DAY-NAME-OF-POST.MARKUP_ 파일을 만든다.
- frontmatter는 yaml 형식으로 작성한다.

\_posts/yyyy-mm-dd-a-post.md

```markdown
---
layout: post
permalink:
published:
title:
date: YYYY-MM-DD hh:mm:ss +0900
categories: blog
tags: []

custom-variable:
---

이하 본문

{% highlight javascript %}
{% endhighlight %}

[Jekyll docs][links-1]
[Post-1]({% post_url yyyy-mm-dd-post %})

[links-1]: {% link /assets/files/doc.pdf %}
```

### Git sync

.gitignore

```bash
# Bundler cache
.bundle
vendor
# if publishing your site with GitHub Pages, you can match production version of Jekyll
# by using the github-pages gem instead of jekyll in your Gemfile.
# In this scenario you may also want to exclude Gemfile.lock from your repository
# because GitHub Pages ignores that file.
Gemfile.lock

# Jekyll cache
.jekyll-cache
.jekyll-metadata
.sass-cache
_site

# RubyGems
*.gem

# NPM dependencies
node_modules
package-lock.json

# IDE configurations
.idea
.vscode

# Misc
_sass/vendors
assets/js/dist
```

```bash
git add *
git status
git commit -m 'Initial commit'
git remote add origin https://github.com/owner/repository.git
git remote -v
git push origin main
```

---

_ref._

- _Namhoon Kim, jekyll, 2017.2, [https://namhoon.kim/categories/jekyll/](https://namhoon.kim/categories/jekyll/)_
- _Chulgil Lee, 블로그 만들기 GitHub편 총정리, 2019, [https://blog.chulgil.me/how-to-make-blog-using-github/](https://blog.chulgil.me/how-to-make-blog-using-github/)_
- _Gwenneg Lepage, Blogging on GitHub Pages with minimal effort, 2024.8, [https://gwenneg.com/2024/08/17/blogging-with-minimal-effort.html](https://gwenneg.com/2024/08/17/blogging-with-minimal-effort.html)_
