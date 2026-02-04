import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  /**
   * 메타데이터
   */
  title: "AIDIN ROBOTICS Documentation",
  tagline: "One-stop Robotic Solution for Safe Collaboration",
  favicon: "img/favicon.ico",
  url: "https://aidinrobotics.github.io",
  baseUrl: "/",

  /**
   * GitHub Pages 배포 설정
   */
  // 사용자 또는 조직 이름
  organizationName: "aidinrobotics",
  // 저장소 이름
  projectName: "aidinrobotics.github.io",
  // 배포 브랜치명
  deploymentBranch: "main",
  // URL 끝 슬래시 여부
  trailingSlash: false,

  /**
   * 링크 깨짐 처리 설정
   */
  onBrokenLinks: "throw",

  /**
   * 국제화(Internationalization) 설정
   */
  i18n: {
    defaultLocale: "ko",
    locales: ["ko", "en"],
    path: "i18n",
    localeConfigs: {
      ko: {
        label: "한국어",
        direction: "ltr",
        htmlLang: "ko",
      },
      en: {
        label: "English",
        direction: "ltr",
        htmlLang: "en",
      },
    },
  },

  /**
   * 신규 버전 기능 설정
   */
  future: {
    v4: true,
  },

  /**
   * 기능 설정
   */
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/aidinrobotics/aidinrobotics.github.io/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          editUrl: "https://github.com/aidinrobotics/aidinrobotics.github.io/",
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  /**
   * 테마 설정
   */
  themeConfig: {
    // 소셜 미디어 공유 미리보기 이미지
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      // 사용자 시스템 설정 반영 여부
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "AIDIN ROBOTICS",
      logo: {
        alt: "AIDIN ROBOTICS Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Tutorial",
        },
        { to: "/blog", label: "Blog", position: "left" },
        { type: "localeDropdown", position: "right" },
        {
          href: "https://github.com/aidinrobotics",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "YouTube",
              href: "https://www.youtube.com/@AIDINROBOTICS",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/company/aidin-robotics",
            },
            {
              label: "Facebook",
              href: "https://www.facebook.com/aidinrobotics",
            },
            {
              label: "Instagram",
              href: "https://www.instagram.com/aidinrobotics",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/aidinrobotics",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AIDIN ROBOTICS Inc.`,
    },
    // 코드 블록 스타일
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.oneDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
