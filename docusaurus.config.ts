import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "GunKustom Documentation",
  tagline: "Everything you need to know about GunKustom",
  favicon: "img/favicon.ico",

  url: "https://gunkustom.github.io",
  baseUrl: "/GunKustom-docs/",

  organizationName: "gunkustom",
  projectName: "GunKustom-docs",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/gunkustom/GunKustom-docs/tree/main/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/gunkustom/GunKustom-docs/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "GunKustom",
      logo: {
        alt: "GunKustom Logo",
        src: "img/gunkustom.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Documentation",
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
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "X",
              href: "https://x.com/docusaurus",
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
              href: "https://github.com/gunkustom/GunKustom-docs",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} GunKustom. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    [
      "docusaurus-plugin-drawio",
      {
        output: "png", // Choose either "svg" or "png"
        quality: 100,  // Quality only applies to PNG
      },
    ],
  ],
};

export default config;
