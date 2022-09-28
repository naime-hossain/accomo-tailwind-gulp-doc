(window.webpackJsonp = window.webpackJsonp || []).push([
  [13],
  {
    396: function(t, a, l) {
      "use strict";
      l.r(a);
      var e = l(50),
        n = Object(e.a)(
          {},
          function() {
            var t = this,
              a = t.$createElement,
              l = t._self._c || a;
            return l(
              "ContentSlotsDistributor",
              { attrs: { "slot-key": t.$parent.slotKey } },
              [
                l("h1", { attrs: { id: "installation" } }, [
                  l(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#installation" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" Installation"),
                ]),
                t._v(" "),
                l("h2", { attrs: { id: "compatibility" } }, [
                  l(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#compatibility" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" Compatibility"),
                ]),
                t._v(" "),
                l("ul", [
                  l("li", [t._v("Pug")]),
                  t._v(" "),
                  l("li", [t._v("Tailwind 3")]),
                  t._v(" "),
                  l("li", [t._v("Gulp")]),
                ]),
                t._v(" "),
                l("p", [
                  t._v("Demo: "),
                  l(
                    "a",
                    {
                      attrs: {
                        href: "https://octavia-vue.netlify.app/landingpage",
                        target: "_blank",
                        rel: "noopener noreferrer",
                      },
                    },
                    [t._v("X tailwind"), l("OutboundLink")],
                    1
                  ),
                  t._v("."),
                ]),
                t._v(" "),
                l("h2", { attrs: { id: "manual-installation" } }, [
                  l(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#manual-installation" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" Manual installation"),
                ]),
                t._v(" "),
                l("blockquote", [
                  l("p", [
                    t._v(
                      '⚠️ you have to use any type of npm, yarn or gulp command inside "customer-src/build-tools/"'
                    ),
                  ]),
                ]),
                t._v(" "),
                l("div", { staticClass: "language-shell extra-class" }, [
                  l("pre", { pre: !0, attrs: { class: "language-shell" } }, [
                    l("code", [
                      l(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("npm")]
                      ),
                      t._v(" "),
                      l(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("install")]
                      ),
                      t._v("\n"),
                    ]),
                  ]),
                ]),
                l("p", [t._v("Or:")]),
                t._v(" "),
                l("div", { staticClass: "language-shell extra-class" }, [
                  l("pre", { pre: !0, attrs: { class: "language-shell" } }, [
                    l("code", [
                      l(
                        "span",
                        { pre: !0, attrs: { class: "token function" } },
                        [t._v("yarn")]
                      ),
                      t._v("\n"),
                    ]),
                  ]),
                ]),
                l("p", [
                  t._v(
                    "Now to run development server of Accomu run below command:"
                  ),
                ]),
                t._v(" "),
                l("h2", { attrs: { id: "gulp-quick-start" } }, [
                  l(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#gulp-quick-start" },
                    },
                    [t._v("#")]
                  ),
                  t._v(" Gulp Quick Start"),
                ]),
                t._v(" "),
                l("ol", [
                  l("li", [
                    l("p", [
                      t._v(
                        "Download Accomu latest source files from Themeforst"
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  l("li", [
                    l("p", [
                      t._v("Download and install Node.js from "),
                      l(
                        "a",
                        {
                          attrs: {
                            href: "https://nodejs.org/en/download/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                          },
                        },
                        [t._v("nodejs.org"), l("OutboundLink")],
                        1
                      ),
                      t._v("\n& Git from "),
                      l(
                        "a",
                        {
                          attrs: {
                            href: "https://git-scm.com/downloads",
                            target: "_blank",
                            rel: "noopener noreferrer",
                          },
                        },
                        [t._v("git-scm.com"), l("OutboundLink")],
                        1
                      ),
                    ]),
                  ]),
                  t._v(" "),
                  l("li", [
                    l("p", [
                      t._v("Open your command prompt or terminal at "),
                      l("code", [t._v("downloaded_folder")]),
                    ]),
                  ]),
                  t._v(" "),
                  l("li", [
                    l("p", [
                      t._v("Install the latest version of npm "),
                      l("code", [t._v("npm install --global npm@latest")]),
                    ]),
                  ]),
                  t._v(" "),
                  l("li", [
                    l("p", [
                      t._v(
                        "Install gulp to automate your SCSS and js code compilation. "
                      ),
                      l("code", [t._v("npm install --global gulp")]),
                    ]),
                  ]),
                  t._v(" "),
                  l("li", [
                    l("p", [
                      t._v("Verify the gulp is installed and it's version."),
                      l("code", [t._v("gulp -v")]),
                    ]),
                  ]),
                  t._v(" "),
                  l("li", [
                    l("p", [
                      t._v("Install yarn globally. "),
                      l("code", [t._v("npm install --global yarn")]),
                    ]),
                  ]),
                  t._v(" "),
                  l("li", [
                    l("p", [
                      t._v("Install dependencies. "),
                      l("code", [t._v("yarn")]),
                    ]),
                  ]),
                  t._v(" "),
                  l("li", [
                    l("p", [
                      t._v(
                        "Complile all the assests(SCSS, JS, Images, fonts, icons etc). "
                      ),
                      l("code", [t._v("yarn build")]),
                    ]),
                  ]),
                  t._v(" "),
                  l("li", [
                    l("p", [
                      t._v(
                        "Start localhost(Dev Server) and watch file change. "
                      ),
                      l("code", [t._v("yarn dev")]),
                    ]),
                  ]),
                ]),
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      a.default = n.exports;
    },
  },
]);
