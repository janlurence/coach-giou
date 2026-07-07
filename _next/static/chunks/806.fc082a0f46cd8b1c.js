"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [806],
  {
    2806: (e, l, n) => {
      (n.r(l), n.d(l, { default: () => t }));
      var a = n(5155),
        o = n(6640);
      function t(e) {
        let { playbackId: l, thumbnailTime: n = 1, aspectRatio: t = "4/3" } = e;
        return (0, a.jsx)("div", {
          className: "z-10 aspect-[".concat(
            t,
            "] w-full overflow-clip rounded-lg",
          ),
          children: (0, a.jsx)(o.Ay, {
            playbackId: l,
            thumbnailTime: n,
            autoPlay: "muted",
            muted: !0,
            loop: !0,
            preload: "none",
            playsInline: !0,
            className: "h-full",
            style: {
              aspectRatio: t,
              "--play-button": "none",
              "--volume-range": "none",
              "--controls": "none",
            },
          }),
        });
      }
    },
  },
]);
