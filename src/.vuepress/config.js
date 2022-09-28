/*
 * File: config.js
 * Project: private-vue-apollo-docs
 * File Created: Wednesday, 28th September 2022 5:16:23 pm
 * Author: Naime Hossain & ui-lib -> https://ui-lib.com/ (support@ui-lib.com)
 * -----
 * Last Modified: Wednesday, 28th September 2022 5:43:04 pm
 * Modified By: Naime Hossain & ui-lib -> https://ui-lib.com/ (support@ui-lib.com>)
 * -----
 * Copyright 2019 - 2022 ui-lib  , ui-lib  ( https://ui-lib.com/ )
 */

module.exports = {
  base: "/",
  serviceWorker: true,
  head: [["link", { rel: "icon", href: "/favicon.png" }]],
  locales: {
    "/": {
      lang: "en-US",
      title: "Accomu",
      description:
        "🚀 Production Ready, Carefully Crafted, Tailwind 3 Listing Template 🚀",
    },
  },
  plugins: [
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: {
          "/": {
            message: "New content is available.",
            buttonText: "Refresh",
          },
        },
      },
    ],
  ],
  themeConfig: {
    repo: "",
    docsBranch: "v4",
    docsDir: "packages/docs/src",
    editLinks: true,
    locales: {
      "/": {
        selectText: "Languages",
        label: "English",
        lastUpdated: "Last Updated",
        nav: [
          {
            text: "Guide",
            items: [
              {
                text: "Getting started",
                link: "/guide/",
              },
            ],
          },

          // {
          //   text: "Demo",
          //   link: "https://octavia-demo.vercel.app/",
          // },
          // {
          //   text: "Purchase",
          //   link: "https://octavia-demo.vercel.app/",
          // },
        ],
        sidebarDepth: 2,
        sidebar: {
          "/guide/": [
            "",

            "installation",
            "folderstructure",
            "layout",
            "components",
            "plugins",
          ],

          "/migration/": [""],
        },
      },
    },
  },
};
