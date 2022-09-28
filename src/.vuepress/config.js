module.exports = {
  base: "/",
  serviceWorker: true,
  head: [["link", { rel: "icon", href: "/favicon.png" }]],
  locales: {
    "/": {
      lang: "en-US",
      title: "Accomu",
      description:
        "🚀 Production Ready, Carefully Crafted, Tailwind 3 Admin Template 🚀",
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
