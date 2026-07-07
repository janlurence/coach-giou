"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [640],
  {
    6640: (e, t, i) => {
      let a, r;
      i.d(t, { Ay: () => bD });
      var n = i(2115),
        s = Object.create,
        o = Object.defineProperty,
        l = Object.getOwnPropertyDescriptor,
        d = Object.getOwnPropertyNames,
        u = Object.getPrototypeOf,
        c = Object.prototype.hasOwnProperty,
        h = function (e, t) {
          return function () {
            return (e && (t = e((e = 0))), t);
          };
        },
        m = function (e, t) {
          return function () {
            return (t || e((t = { exports: {} }).exports, t), t.exports);
          };
        },
        p = function (e, t, i, a) {
          if ((t && "object" == typeof t) || "function" == typeof t)
            for (var r, n = d(t), s = 0, u = n.length; s < u; s++)
              ((r = n[s]),
                c.call(e, r) ||
                  r === i ||
                  o(e, r, {
                    get: function (e) {
                      return t[e];
                    }.bind(null, r),
                    enumerable: !(a = l(t, r)) || a.enumerable,
                  }));
          return e;
        },
        E = function (e, t, i) {
          return (
            (i = null != e ? s(u(e)) : {}),
            p(
              !t && e && e.__esModule
                ? i
                : o(i, "default", { value: e, enumerable: !0 }),
              e,
            )
          );
        },
        b = m(function (e, t) {
          t.exports =
            "undefined" != typeof window
              ? window
              : "undefined" != typeof global
                ? global
                : "undefined" != typeof self
                  ? self
                  : {};
        });
      function f(e, t) {
        return null != t &&
          "undefined" != typeof Symbol &&
          t[Symbol.hasInstance]
          ? !!t[Symbol.hasInstance](e)
          : f(e, t);
      }
      var g = h(function () {
        g();
      });
      function _(e) {
        return e && "undefined" != typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      }
      var y = h(function () {}),
        T = m(function (e, t) {
          var i = Array.prototype.slice;
          t.exports = function (e, t) {
            for (("length" in e) || (e = [e]), e = i.call(e); e.length; ) {
              var a = e.shift(),
                r = t(a);
              if (r) return r;
              a.childNodes &&
                a.childNodes.length &&
                (e = i.call(a.childNodes).concat(e));
            }
          };
        }),
        A = m(function (e, t) {
          function i(e, t) {
            if (!f(this, i)) return new i(e, t);
            ((this.data = e),
              (this.nodeValue = e),
              (this.length = e.length),
              (this.ownerDocument = t || null));
          }
          (g(),
            (t.exports = i),
            (i.prototype.nodeType = 8),
            (i.prototype.nodeName = "#comment"),
            (i.prototype.toString = function () {
              return "[object Comment]";
            }));
        }),
        k = m(function (e, t) {
          function i(e, t) {
            if (!f(this, i)) return new i(e);
            ((this.data = e || ""),
              (this.length = this.data.length),
              (this.ownerDocument = t || null));
          }
          (g(),
            (t.exports = i),
            (i.prototype.type = "DOMTextNode"),
            (i.prototype.nodeType = 3),
            (i.prototype.nodeName = "#text"),
            (i.prototype.toString = function () {
              return this.data;
            }),
            (i.prototype.replaceData = function (e, t, i) {
              var a = this.data,
                r = a.substring(0, e),
                n = a.substring(e + t, a.length);
              ((this.data = r + i + n), (this.length = this.data.length));
            }));
        }),
        w = m(function (e, t) {
          t.exports = function (e) {
            var t = this,
              i = e.type;
            (e.target || (e.target = t), t.listeners || (t.listeners = {}));
            var a = t.listeners[i];
            if (a)
              return a.forEach(function (i) {
                ((e.currentTarget = t),
                  "function" == typeof i ? i(e) : i.handleEvent(e));
              });
            t.parentNode && t.parentNode.dispatchEvent(e);
          };
        }),
        S = m(function (e, t) {
          t.exports = function (e, t) {
            (this.listeners || (this.listeners = {}),
              this.listeners[e] || (this.listeners[e] = []),
              -1 === this.listeners[e].indexOf(t) && this.listeners[e].push(t));
          };
        }),
        I = m(function (e, t) {
          t.exports = function (e, t) {
            if (this.listeners && this.listeners[e]) {
              var i = this.listeners[e],
                a = i.indexOf(t);
              -1 !== a && i.splice(a, 1);
            }
          };
        }),
        R = m(function (e, t) {
          (y(),
            (t.exports = function e(t) {
              switch (t.nodeType) {
                case 3:
                  return r(t.data);
                case 8:
                  return "\x3c!--" + t.data + "--\x3e";
                default:
                  var n, s, o;
                  return (
                    (s = []),
                    (o = (n = t).tagName),
                    "http://www.w3.org/1999/xhtml" === n.namespaceURI &&
                      (o = o.toLowerCase()),
                    s.push(
                      "<" +
                        o +
                        (function (e) {
                          var t = [];
                          for (var i in e)
                            (function (e, t) {
                              var i = _(e[t]);
                              return (
                                ("style" === t &&
                                  Object.keys(e.style).length > 0) ||
                                (e.hasOwnProperty(t) &&
                                  ("string" === i ||
                                    "boolean" === i ||
                                    "number" === i) &&
                                  "nodeName" !== t &&
                                  "className" !== t &&
                                  "tagName" !== t &&
                                  "textContent" !== t &&
                                  "innerText" !== t &&
                                  "namespaceURI" !== t &&
                                  "innerHTML" !== t)
                              );
                            })(e, i) && t.push({ name: i, value: e[i] });
                          for (var r in e._attributes)
                            for (var n in e._attributes[r]) {
                              var s = e._attributes[r][n],
                                o = (s.prefix ? s.prefix + ":" : "") + n;
                              t.push({ name: o, value: s.value });
                            }
                          return (
                            e.className &&
                              t.push({ name: "class", value: e.className }),
                            t.length ? a(t) : ""
                          );
                        })(n) +
                        (function (e) {
                          var t = e.dataset,
                            i = [];
                          for (var r in t)
                            i.push({ name: "data-" + r, value: t[r] });
                          return i.length ? a(i) : "";
                        })(n),
                    ),
                    i.indexOf(o) > -1
                      ? s.push(" />")
                      : (s.push(">"),
                        n.childNodes.length
                          ? s.push.apply(s, n.childNodes.map(e))
                          : n.textContent || n.innerText
                            ? s.push(r(n.textContent || n.innerText))
                            : n.innerHTML && s.push(n.innerHTML),
                        s.push("</" + o + ">")),
                    s.join("")
                  );
              }
            }));
          var i = [
            "area",
            "base",
            "br",
            "col",
            "embed",
            "hr",
            "img",
            "input",
            "keygen",
            "link",
            "menuitem",
            "meta",
            "param",
            "source",
            "track",
            "wbr",
          ];
          function a(e) {
            var t = [];
            return (
              e.forEach(function (e) {
                var i = e.name,
                  a = e.value;
                ("style" === i &&
                  (a = (function (e) {
                    if ("string" == typeof e) return e;
                    var t = "";
                    return (
                      Object.keys(e).forEach(function (i) {
                        var a = e[i];
                        ((i = i.replace(/[A-Z]/g, function (e) {
                          return "-" + e.toLowerCase();
                        })),
                          (t += i + ":" + a + ";"));
                      }),
                      t
                    );
                  })(a)),
                  t.push(i + '="' + r(a).replace(/"/g, "&quot;") + '"'));
              }),
              t.length ? " " + t.join(" ") : ""
            );
          }
          function r(e) {
            var t = "";
            return (
              "string" == typeof e ? (t = e) : e && (t = e.toString()),
              t
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
            );
          }
        }),
        C = m(function (e, t) {
          g();
          var i = T(),
            a = w(),
            r = S(),
            n = I(),
            s = R(),
            o = "http://www.w3.org/1999/xhtml";
          function l(e, t, i) {
            if (!f(this, l)) return new l(e);
            var a = void 0 === i ? o : i || null;
            ((this.tagName = a === o ? String(e).toUpperCase() : e),
              (this.nodeName = this.tagName),
              (this.className = ""),
              (this.dataset = {}),
              (this.childNodes = []),
              (this.parentNode = null),
              (this.style = {}),
              (this.ownerDocument = t || null),
              (this.namespaceURI = a),
              (this._attributes = {}),
              "INPUT" === this.tagName && (this.type = "text"));
          }
          ((t.exports = l),
            (l.prototype.type = "DOMElement"),
            (l.prototype.nodeType = 1),
            (l.prototype.appendChild = function (e) {
              return (
                e.parentNode && e.parentNode.removeChild(e),
                this.childNodes.push(e),
                (e.parentNode = this),
                e
              );
            }),
            (l.prototype.replaceChild = function (e, t) {
              e.parentNode && e.parentNode.removeChild(e);
              var i = this.childNodes.indexOf(t);
              return (
                (t.parentNode = null),
                (this.childNodes[i] = e),
                (e.parentNode = this),
                t
              );
            }),
            (l.prototype.removeChild = function (e) {
              var t = this.childNodes.indexOf(e);
              return (this.childNodes.splice(t, 1), (e.parentNode = null), e);
            }),
            (l.prototype.insertBefore = function (e, t) {
              e.parentNode && e.parentNode.removeChild(e);
              var i = null == t ? -1 : this.childNodes.indexOf(t);
              return (
                i > -1
                  ? this.childNodes.splice(i, 0, e)
                  : this.childNodes.push(e),
                (e.parentNode = this),
                e
              );
            }),
            (l.prototype.setAttributeNS = function (e, t, i) {
              var a = null,
                r = t,
                n = t.indexOf(":");
              (n > -1 && ((a = t.substr(0, n)), (r = t.substr(n + 1))),
              "INPUT" === this.tagName && "type" === t)
                ? (this.type = i)
                : ((this._attributes[e] || (this._attributes[e] = {}))[r] = {
                    value: i,
                    prefix: a,
                  });
            }),
            (l.prototype.getAttributeNS = function (e, t) {
              var i = this._attributes[e],
                a = i && i[t] && i[t].value;
              return "INPUT" === this.tagName && "type" === t
                ? this.type
                : "string" != typeof a
                  ? null
                  : a;
            }),
            (l.prototype.removeAttributeNS = function (e, t) {
              var i = this._attributes[e];
              i && delete i[t];
            }),
            (l.prototype.hasAttributeNS = function (e, t) {
              var i = this._attributes[e];
              return !!i && t in i;
            }),
            (l.prototype.setAttribute = function (e, t) {
              return this.setAttributeNS(null, e, t);
            }),
            (l.prototype.getAttribute = function (e) {
              return this.getAttributeNS(null, e);
            }),
            (l.prototype.removeAttribute = function (e) {
              return this.removeAttributeNS(null, e);
            }),
            (l.prototype.hasAttribute = function (e) {
              return this.hasAttributeNS(null, e);
            }),
            (l.prototype.removeEventListener = n),
            (l.prototype.addEventListener = r),
            (l.prototype.dispatchEvent = a),
            (l.prototype.focus = function () {}),
            (l.prototype.toString = function () {
              return s(this);
            }),
            (l.prototype.getElementsByClassName = function (e) {
              var t = e.split(" "),
                a = [];
              return (
                i(this, function (e) {
                  if (1 === e.nodeType) {
                    var i = (e.className || "").split(" ");
                    t.every(function (e) {
                      return -1 !== i.indexOf(e);
                    }) && a.push(e);
                  }
                }),
                a
              );
            }),
            (l.prototype.getElementsByTagName = function (e) {
              e = e.toLowerCase();
              var t = [];
              return (
                i(this.childNodes, function (i) {
                  1 === i.nodeType &&
                    ("*" === e || i.tagName.toLowerCase() === e) &&
                    t.push(i);
                }),
                t
              );
            }),
            (l.prototype.contains = function (e) {
              return (
                i(this, function (t) {
                  return e === t;
                }) || !1
              );
            }));
        }),
        D = m(function (e, t) {
          g();
          var i = C();
          function a(e) {
            if (!f(this, a)) return new a();
            ((this.childNodes = []),
              (this.parentNode = null),
              (this.ownerDocument = e || null));
          }
          ((t.exports = a),
            (a.prototype.type = "DocumentFragment"),
            (a.prototype.nodeType = 11),
            (a.prototype.nodeName = "#document-fragment"),
            (a.prototype.appendChild = i.prototype.appendChild),
            (a.prototype.replaceChild = i.prototype.replaceChild),
            (a.prototype.removeChild = i.prototype.removeChild),
            (a.prototype.toString = function () {
              return this.childNodes
                .map(function (e) {
                  return String(e);
                })
                .join("");
            }));
        }),
        L = m(function (e, t) {
          function i(e) {}
          ((t.exports = i),
            (i.prototype.initEvent = function (e, t, i) {
              ((this.type = e), (this.bubbles = t), (this.cancelable = i));
            }),
            (i.prototype.preventDefault = function () {}));
        }),
        M = m(function (e, t) {
          g();
          var i = T(),
            a = A(),
            r = k(),
            n = C(),
            s = D(),
            o = L(),
            l = w(),
            d = S(),
            u = I();
          function c() {
            if (!f(this, c)) return new c();
            ((this.head = this.createElement("head")),
              (this.body = this.createElement("body")),
              (this.documentElement = this.createElement("html")),
              this.documentElement.appendChild(this.head),
              this.documentElement.appendChild(this.body),
              (this.childNodes = [this.documentElement]),
              (this.nodeType = 9));
          }
          t.exports = c;
          var h = c.prototype;
          ((h.createTextNode = function (e) {
            return new r(e, this);
          }),
            (h.createElementNS = function (e, t) {
              return new n(t, this, null === e ? null : String(e));
            }),
            (h.createElement = function (e) {
              return new n(e, this);
            }),
            (h.createDocumentFragment = function () {
              return new s(this);
            }),
            (h.createEvent = function (e) {
              return new o(e);
            }),
            (h.createComment = function (e) {
              return new a(e, this);
            }),
            (h.getElementById = function (e) {
              return (
                (e = String(e)),
                i(this.childNodes, function (t) {
                  if (String(t.id) === e) return t;
                }) || null
              );
            }),
            (h.getElementsByClassName = n.prototype.getElementsByClassName),
            (h.getElementsByTagName = n.prototype.getElementsByTagName),
            (h.contains = n.prototype.contains),
            (h.removeEventListener = u),
            (h.addEventListener = d),
            (h.dispatchEvent = l));
        }),
        O = m(function (e, t) {
          t.exports = new (M())();
        }),
        N = m(function (e, t) {
          var i,
            a =
              "undefined" != typeof global
                ? global
                : "undefined" != typeof window
                  ? window
                  : {},
            r = O();
          ("undefined" != typeof document
            ? (i = document)
            : (i = a["__GLOBAL_DOCUMENT_CACHE@4"]) ||
              (i = a["__GLOBAL_DOCUMENT_CACHE@4"] = r),
            (t.exports = i));
        });
      function x(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var i = 0, a = Array(t); i < t; i++) a[i] = e[i];
        return a;
      }
      function P(e, t) {
        if (e) {
          if ("string" == typeof e) return x(e, t);
          var i = Object.prototype.toString.call(e).slice(8, -1);
          if (
            ("Object" === i && e.constructor && (i = e.constructor.name),
            "Map" === i || "Set" === i)
          )
            return Array.from(i);
          if (
            "Arguments" === i ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
          )
            return x(e, t);
        }
      }
      function U(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var i =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != i) {
              var a,
                r,
                n = [],
                s = !0,
                o = !1;
              try {
                for (
                  i = i.call(e);
                  !(s = (a = i.next()).done) &&
                  (n.push(a.value), !(t && n.length === t));
                  s = !0
                );
              } catch (e) {
                ((o = !0), (r = e));
              } finally {
                try {
                  s || null == i.return || i.return();
                } finally {
                  if (o) throw r;
                }
              }
              return n;
            }
          })(e, t) ||
          P(e, t) ||
          (function () {
            throw TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      var B = E(b()),
        W = E(b()),
        H = E(b()),
        V = {
          now: function () {
            var e = H.default.performance,
              t = e && e.timing,
              i = t && t.navigationStart;
            return Math.round(
              "number" == typeof i && "function" == typeof e.now
                ? i + e.now()
                : Date.now(),
            );
          },
        },
        F = function () {
          if (
            "function" ==
            typeof (null == (e = W.default.crypto) ? void 0 : e.getRandomValues)
          ) {
            ((i = new Uint8Array(32)), W.default.crypto.getRandomValues(i));
            for (var e, t, i, a = 0; a < 32; a++) i[a] = i[a] % 16;
          } else {
            i = [];
            for (var r = 0; r < 32; r++) i[r] = (16 * Math.random()) | 0;
          }
          var n = 0;
          t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
            /[xy]/g,
            function (e) {
              var t = "x" === e ? i[n] : (3 & i[n]) | 8;
              return (n++, t.toString(16));
            },
          );
          var s = V.now(),
            o = null == s ? void 0 : s.toString(16).substring(3);
          return o ? t.substring(0, 28) + o : t;
        },
        q = function () {
          return (
            "000000" + ((0x81bf1000 * Math.random()) | 0).toString(36)
          ).slice(-6);
        },
        $ = function (e) {
          var t;
          if (e && void 0 !== e.nodeName)
            return (e.muxId || (e.muxId = q()), e.muxId);
          try {
            t = document.querySelector(e);
          } catch (e) {}
          return (
            t && !t.muxId && (t.muxId = e),
            (null == t ? void 0 : t.muxId) || e
          );
        },
        K = function (e) {
          e && void 0 !== e.nodeName
            ? (e = $((t = e)))
            : (t = document.querySelector(e));
          var t,
            i = t && t.nodeName ? t.nodeName.toLowerCase() : "";
          return [t, e, i];
        };
      function Y(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return x(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          P(e) ||
          (function () {
            throw TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      var G = { TRACE: 0, DEBUG: 1, INFO: 2, WARN: 3, ERROR: 4 },
        j = (function (e) {
          var t,
            i,
            a,
            r,
            n,
            s =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 3,
            o = e ? [console, e] : [console],
            l = (t = console.trace).bind.apply(t, Y(o)),
            d = (i = console.info).bind.apply(i, Y(o)),
            u = (a = console.debug).bind.apply(a, Y(o)),
            c = (r = console.warn).bind.apply(r, Y(o)),
            h = (n = console.error).bind.apply(n, Y(o)),
            m = s;
          return {
            trace: function () {
              for (var e = arguments.length, t = Array(e), i = 0; i < e; i++)
                t[i] = arguments[i];
              if (!(m > G.TRACE)) return l.apply(void 0, Y(t));
            },
            debug: function () {
              for (var e = arguments.length, t = Array(e), i = 0; i < e; i++)
                t[i] = arguments[i];
              if (!(m > G.DEBUG)) return u.apply(void 0, Y(t));
            },
            info: function () {
              for (var e = arguments.length, t = Array(e), i = 0; i < e; i++)
                t[i] = arguments[i];
              if (!(m > G.INFO)) return d.apply(void 0, Y(t));
            },
            warn: function () {
              for (var e = arguments.length, t = Array(e), i = 0; i < e; i++)
                t[i] = arguments[i];
              if (!(m > G.WARN)) return c.apply(void 0, Y(t));
            },
            error: function () {
              for (var e = arguments.length, t = Array(e), i = 0; i < e; i++)
                t[i] = arguments[i];
              if (!(m > G.ERROR)) return h.apply(void 0, Y(t));
            },
            get level() {
              return m;
            },
            set level(v) {
              v !== this.level && (m = null != v ? v : s);
            },
          };
        })("[mux]"),
        Q = E(b());
      function Z() {
        return (
          "1" ===
          (Q.default.doNotTrack ||
            (Q.default.navigator && Q.default.navigator.doNotTrack))
        );
      }
      function z(e) {
        if (void 0 === e)
          throw ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return e;
      }
      function X(e, t) {
        if (!f(e, t)) throw TypeError("Cannot call a class as a function");
      }
      function J(e, t) {
        for (var i = 0; i < t.length; i++) {
          var a = t[i];
          ((a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            "value" in a && (a.writable = !0),
            Object.defineProperty(e, a.key, a));
        }
      }
      function ee(e, t, i) {
        return (t && J(e.prototype, t), i && J(e, i), e);
      }
      function et(e, t, i) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = i),
          e
        );
      }
      function ei(e) {
        return (ei = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function ea(e, t, i) {
        return (ea =
          "undefined" != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (e, t, i) {
                var a = (function (e, t) {
                  for (
                    ;
                    !Object.prototype.hasOwnProperty.call(e, t) &&
                    null !== (e = ei(e));

                  );
                  return e;
                })(e, t);
                if (a) {
                  var r = Object.getOwnPropertyDescriptor(a, t);
                  return r.get ? r.get.call(i || e) : r.value;
                }
              })(e, t, i || e);
      }
      function er(e, t) {
        return (er =
          Object.setPrototypeOf ||
          function (e, t) {
            return ((e.__proto__ = t), e);
          })(e, t);
      }
      (g(), y());
      var en = function (e) {
          return es(e)[0];
        },
        es = function (e) {
          if ("string" != typeof e || "" === e) return ["localhost"];
          var t,
            i = (e.match(
              /^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,
            ) || [])[4];
          return (i && (t = (i.match(/[^\.]+\.[^\.]+$/) || [])[0]), [i, t]);
        },
        eo = E(b()),
        el = {
          exists: function () {
            var e = eo.default.performance;
            return void 0 !== (e && e.timing);
          },
          domContentLoadedEventEnd: function () {
            var e = eo.default.performance,
              t = e && e.timing;
            return t && t.domContentLoadedEventEnd;
          },
          navigationStart: function () {
            var e = eo.default.performance,
              t = e && e.timing;
            return t && t.navigationStart;
          },
        };
      function ed(e, t, i) {
        ((i = void 0 === i ? 1 : i), (e[t] = e[t] || 0), (e[t] += i));
      }
      function eu(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(i);
          ("function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
              Object.getOwnPropertySymbols(i).filter(function (e) {
                return Object.getOwnPropertyDescriptor(i, e).enumerable;
              }),
            )),
            a.forEach(function (t) {
              et(e, t, i[t]);
            }));
        }
        return e;
      }
      function ec(e, t) {
        return (
          (t = null != t ? t : {}),
          Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var a = Object.getOwnPropertySymbols(e);
                  i.push.apply(i, a);
                }
                return i;
              })(Object(t)).forEach(function (i) {
                Object.defineProperty(
                  e,
                  i,
                  Object.getOwnPropertyDescriptor(t, i),
                );
              }),
          e
        );
      }
      var eh = ["x-request-id", "cf-ray", "x-amz-cf-id", "x-akamai-request-id"],
        em = ["x-cdn", "content-type"].concat(eh);
      function ep(e) {
        var t = {};
        return (
          (e = e || "")
            .trim()
            .split(/[\r\n]+/)
            .forEach(function (e) {
              if (e) {
                var i = e.split(": "),
                  a = i.shift();
                a &&
                  (em.indexOf(a.toLowerCase()) >= 0 ||
                    0 === a.toLowerCase().indexOf("x-litix-")) &&
                  (t[a] = i.join(": "));
              }
            }),
          t
        );
      }
      function ev(e) {
        if (e) {
          var t = eh.find(function (t) {
            return void 0 !== e[t];
          });
          return t ? e[t] : void 0;
        }
      }
      var eE = function (e) {
          var t = {};
          for (var i in e) {
            var a = e[i];
            -1 !== a["DATA-ID"].search("io.litix.data.") &&
              (t[a["DATA-ID"].replace("io.litix.data.", "")] = a.VALUE);
          }
          return t;
        },
        eb = function (e) {
          if (!e) return {};
          var t = el.navigationStart(),
            i = e.loading,
            a = i ? i.start : e.trequest,
            r = i ? i.first : e.tfirst,
            n = i ? i.end : e.tload;
          return {
            bytesLoaded: e.total,
            requestStart: Math.round(t + a),
            responseStart: Math.round(t + r),
            responseEnd: Math.round(t + n),
          };
        },
        ef = function (e) {
          if (!(!e || "function" != typeof e.getAllResponseHeaders))
            return ep(e.getAllResponseHeaders());
        },
        eg = function (e, t, i) {
          arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          var a = arguments.length > 4 ? arguments[4] : void 0,
            r = e.log,
            n = e.utils.secondsToMs,
            s = function (e) {
              var t,
                i = parseInt(a.version);
              return (
                1 === i &&
                  null !== e.programDateTime &&
                  (t = e.programDateTime),
                0 === i && null !== e.pdt && (t = e.pdt),
                t
              );
            };
          if (!el.exists())
            return void r.warn(
              "performance timing not supported. Not tracking HLS.js.",
            );
          var o = function (i, a) {
              return e.emit(t, i, a);
            },
            l = function (e, t) {
              var i = t.levels,
                a = t.audioTracks,
                r = t.url,
                n = t.stats,
                s = t.networkDetails,
                l = t.sessionData,
                d = {},
                u = {};
              (i.forEach(function (e, t) {
                d[t] = {
                  width: e.width,
                  height: e.height,
                  bitrate: e.bitrate,
                  attrs: e.attrs,
                };
              }),
                a.forEach(function (e, t) {
                  u[t] = { name: e.name, language: e.lang, bitrate: e.bitrate };
                }));
              var c = eb(n),
                h = c.bytesLoaded,
                m = c.requestStart,
                p = c.responseStart,
                E = c.responseEnd;
              o(
                "requestcompleted",
                ec(eu({}, eE(l)), {
                  request_event_type: e,
                  request_bytes_loaded: h,
                  request_start: m,
                  request_response_start: p,
                  request_response_end: E,
                  request_type: "manifest",
                  request_hostname: en(r),
                  request_response_headers: ef(s),
                  request_rendition_lists: { media: d, audio: u, video: {} },
                }),
              );
            };
          i.on(a.Events.MANIFEST_LOADED, l);
          var d = function (e, t) {
            var i = t.details,
              a = t.level,
              r = t.networkDetails,
              l = eb(t.stats),
              d = l.bytesLoaded,
              u = l.requestStart,
              c = l.responseStart,
              h = l.responseEnd,
              m = i.fragments[i.fragments.length - 1],
              p = s(m) + n(m.duration);
            o("requestcompleted", {
              request_event_type: e,
              request_bytes_loaded: d,
              request_start: u,
              request_response_start: c,
              request_response_end: h,
              request_current_level: a,
              request_type: "manifest",
              request_hostname: en(i.url),
              request_response_headers: ef(r),
              video_holdback: i.holdBack && n(i.holdBack),
              video_part_holdback: i.partHoldBack && n(i.partHoldBack),
              video_part_target_duration: i.partTarget && n(i.partTarget),
              video_target_duration: i.targetduration && n(i.targetduration),
              video_source_is_live: i.live,
              player_manifest_newest_program_time: isNaN(p) ? void 0 : p,
            });
          };
          i.on(a.Events.LEVEL_LOADED, d);
          var u = function (e, t) {
            var i = t.details,
              a = t.networkDetails,
              r = eb(t.stats);
            o("requestcompleted", {
              request_event_type: e,
              request_bytes_loaded: r.bytesLoaded,
              request_start: r.requestStart,
              request_response_start: r.responseStart,
              request_response_end: r.responseEnd,
              request_type: "manifest",
              request_hostname: en(i.url),
              request_response_headers: ef(a),
            });
          };
          i.on(a.Events.AUDIO_TRACK_LOADED, u);
          var c = function (e, t) {
            var a = t.stats,
              r = t.networkDetails,
              n = t.frag,
              s = eb((a = a || n.stats)),
              l = s.bytesLoaded,
              d = s.requestStart,
              u = s.responseStart,
              c = s.responseEnd,
              h = r ? ef(r) : void 0,
              m = {
                request_event_type: e,
                request_bytes_loaded: l,
                request_start: d,
                request_response_start: u,
                request_response_end: c,
                request_hostname: r ? en(r.responseURL) : void 0,
                request_id: h ? ev(h) : void 0,
                request_response_headers: h,
                request_media_duration: n.duration,
                request_url: null == r ? void 0 : r.responseURL,
              };
            ("main" === n.type
              ? ((m.request_type = "media"),
                (m.request_current_level = n.level),
                (m.request_video_width = (i.levels[n.level] || {}).width),
                (m.request_video_height = (i.levels[n.level] || {}).height),
                (m.request_labeled_bitrate = (i.levels[n.level] || {}).bitrate))
              : (m.request_type = n.type),
              o("requestcompleted", m));
          };
          i.on(a.Events.FRAG_LOADED, c);
          var h = function (e, t) {
            var i = t.frag,
              a = i.start;
            o("fragmentchange", {
              currentFragmentPDT: s(i),
              currentFragmentStart: n(a),
            });
          };
          i.on(a.Events.FRAG_CHANGED, h);
          var m = function (e, t) {
            var i,
              r = t.type,
              n = t.details,
              s = t.response,
              l = t.fatal,
              d = t.frag,
              u = t.networkDetails,
              c = (null == d ? void 0 : d.url) || t.url || "",
              h = u ? ef(u) : void 0;
            ((n === a.ErrorDetails.MANIFEST_LOAD_ERROR ||
              n === a.ErrorDetails.MANIFEST_LOAD_TIMEOUT ||
              n === a.ErrorDetails.FRAG_LOAD_ERROR ||
              n === a.ErrorDetails.FRAG_LOAD_TIMEOUT ||
              n === a.ErrorDetails.LEVEL_LOAD_ERROR ||
              n === a.ErrorDetails.LEVEL_LOAD_TIMEOUT ||
              n === a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR ||
              n === a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT ||
              n === a.ErrorDetails.SUBTITLE_LOAD_ERROR ||
              n === a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT ||
              n === a.ErrorDetails.KEY_LOAD_ERROR ||
              n === a.ErrorDetails.KEY_LOAD_TIMEOUT) &&
              o("requestfailed", {
                request_error: n,
                request_url: c,
                request_hostname: en(c),
                request_id: h ? ev(h) : void 0,
                request_type:
                  n === a.ErrorDetails.FRAG_LOAD_ERROR ||
                  n === a.ErrorDetails.FRAG_LOAD_TIMEOUT
                    ? "media"
                    : n === a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR ||
                        n === a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT
                      ? "audio"
                      : n === a.ErrorDetails.SUBTITLE_LOAD_ERROR ||
                          n === a.ErrorDetails.SUBTITLE_LOAD_TIMEOUT
                        ? "subtitle"
                        : n === a.ErrorDetails.KEY_LOAD_ERROR ||
                            n === a.ErrorDetails.KEY_LOAD_TIMEOUT
                          ? "encryption"
                          : "manifest",
                request_error_code: null == s ? void 0 : s.code,
                request_error_text: null == s ? void 0 : s.text,
              }),
              l &&
                o("error", {
                  player_error_code: r,
                  player_error_message: n,
                  player_error_context:
                    "".concat(c ? "url: ".concat(c, "\n") : "") +
                    "".concat(
                      s && (s.code || s.text)
                        ? "response: ".concat(s.code, ", ").concat(s.text, "\n")
                        : "",
                    ) +
                    "".concat(
                      t.reason ? "failure reason: ".concat(t.reason, "\n") : "",
                    ) +
                    "".concat(t.level ? "level: ".concat(t.level, "\n") : "") +
                    "".concat(
                      t.parent
                        ? "parent stream controller: ".concat(t.parent, "\n")
                        : "",
                    ) +
                    "".concat(
                      t.buffer ? "buffer length: ".concat(t.buffer, "\n") : "",
                    ) +
                    "".concat(t.error ? "error: ".concat(t.error, "\n") : "") +
                    "".concat(t.event ? "event: ".concat(t.event, "\n") : "") +
                    "".concat(
                      t.err
                        ? "error message: ".concat(
                            null == (i = t.err) ? void 0 : i.message,
                            "\n",
                          )
                        : "",
                    ),
                }));
          };
          i.on(a.Events.ERROR, m);
          var p = function (e, t) {
            var i = t.frag,
              a = (i && i._url) || "";
            o("requestcanceled", {
              request_event_type: e,
              request_url: a,
              request_type: "media",
              request_hostname: en(a),
            });
          };
          i.on(a.Events.FRAG_LOAD_EMERGENCY_ABORTED, p);
          var E = function (e, t) {
            var a = t.level,
              n = i.levels[a];
            if (n && n.attrs && n.attrs.BANDWIDTH) {
              var s,
                l = n.attrs.BANDWIDTH,
                d = parseFloat(n.attrs["FRAME-RATE"]);
              (isNaN(d) || (s = d),
                l
                  ? o("renditionchange", {
                      video_source_fps: s,
                      video_source_bitrate: l,
                      video_source_width: n.width,
                      video_source_height: n.height,
                      video_source_rendition_name: n.name,
                      video_source_codec: null == n ? void 0 : n.videoCodec,
                    })
                  : r.warn(
                      "missing BANDWIDTH from HLS manifest parsed by HLS.js",
                    ));
            }
          };
          (i.on(a.Events.LEVEL_SWITCHED, E),
            (i._stopMuxMonitor = function () {
              (i.off(a.Events.MANIFEST_LOADED, l),
                i.off(a.Events.LEVEL_LOADED, d),
                i.off(a.Events.AUDIO_TRACK_LOADED, u),
                i.off(a.Events.FRAG_LOADED, c),
                i.off(a.Events.FRAG_CHANGED, h),
                i.off(a.Events.ERROR, m),
                i.off(a.Events.FRAG_LOAD_EMERGENCY_ABORTED, p),
                i.off(a.Events.LEVEL_SWITCHED, E),
                i.off(a.Events.DESTROYING, i._stopMuxMonitor),
                delete i._stopMuxMonitor);
            }),
            i.on(a.Events.DESTROYING, i._stopMuxMonitor));
        },
        e_ = function (e) {
          e && "function" == typeof e._stopMuxMonitor && e._stopMuxMonitor();
        },
        ey = function (e, t) {
          if (!e || !e.requestEndDate) return {};
          var i,
            a = en(e.url),
            r = e.url,
            n = e.bytesLoaded,
            s = new Date(e.requestStartDate).getTime(),
            o = new Date(e.firstByteDate).getTime(),
            l = new Date(e.requestEndDate).getTime(),
            d = isNaN(e.duration) ? 0 : e.duration,
            u =
              "function" == typeof t.getMetricsFor
                ? t.getMetricsFor(e.mediaType).HttpList
                : t.getDashMetrics().getHttpRequests(e.mediaType);
          u.length > 0 && (i = ep(u[u.length - 1]._responseHeaders || ""));
          var c = i ? ev(i) : void 0;
          return {
            requestStart: s,
            requestResponseStart: o,
            requestResponseEnd: l,
            requestBytesLoaded: n,
            requestResponseHeaders: i,
            requestMediaDuration: d,
            requestHostname: a,
            requestUrl: r,
            requestId: c,
          };
        },
        eT = function (e, t) {
          var i = t.getQualityFor(e),
            a = t.getCurrentTrackFor(e).bitrateList;
          return a
            ? {
                currentLevel: i,
                renditionWidth: a[i].width || null,
                renditionHeight: a[i].height || null,
                renditionBitrate: a[i].bandwidth,
              }
            : {};
        },
        eA = function (e) {
          var t;
          return null == (t = e.match(/.*codecs\*?="(.*)"/)) ? void 0 : t[1];
        },
        ek = function (e) {
          try {
            var t, i;
            return null == (i = e.getVersion) || null == (t = i.call(e))
              ? void 0
              : t.split(".").map(function (e) {
                  return parseInt(e);
                })[0];
          } catch (e) {
            return !1;
          }
        },
        ew = function (e, t, i) {
          arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          var a = e.log;
          if (!i || !i.on)
            return void a.warn(
              "Invalid dash.js player reference. Monitoring blocked.",
            );
          var r = ek(i),
            n = function (i, a) {
              return e.emit(t, i, a);
            },
            s = function (e) {
              var t = e.type,
                i = (e.data || {}).url;
              n("requestcompleted", {
                request_event_type: t,
                request_start: 0,
                request_response_start: 0,
                request_response_end: 0,
                request_bytes_loaded: -1,
                request_type: "manifest",
                request_hostname: en(i),
                request_url: i,
              });
            };
          i.on("manifestLoaded", s);
          var o = {},
            l = function (e) {
              if ("function" != typeof e.getRequests) return null;
              var t = e.getRequests({ state: "executed" });
              return 0 === t.length ? null : t[t.length - 1];
            },
            d = function (e) {
              var t = e.type,
                a = e.chunk,
                r = e.request,
                s = (a || {}).mediaInfo || {},
                l = s.type,
                d = s.bitrateList,
                u = {};
              ((d = d || []).forEach(function (e, t) {
                ((u[t] = {}),
                  (u[t].width = e.width),
                  (u[t].height = e.height),
                  (u[t].bitrate = e.bandwidth),
                  (u[t].attrs = {}));
              }),
                "video" === l
                  ? (o.video = u)
                  : "audio" === l
                    ? (o.audio = u)
                    : (o.media = u));
              var c = ey(r, i),
                h = c.requestStart,
                m = c.requestResponseStart,
                p = c.requestResponseEnd,
                E = c.requestResponseHeaders,
                b = c.requestMediaDuration,
                f = c.requestHostname,
                g = c.requestUrl;
              n("requestcompleted", {
                request_event_type: t,
                request_start: h,
                request_response_start: m,
                request_response_end: p,
                request_bytes_loaded: -1,
                request_type: l + "_init",
                request_response_headers: E,
                request_hostname: f,
                request_id: c.requestId,
                request_url: g,
                request_media_duration: b,
                request_rendition_lists: o,
              });
            };
          r >= 4
            ? i.on("initFragmentLoaded", d)
            : i.on("initFragmentLoaded", function (e) {
                var t = e.type,
                  i = e.fragmentModel,
                  a = e.chunk;
                d({ type: t, request: l(i), chunk: a });
              });
          var u = function (e) {
            var t = e.type,
              a = e.chunk,
              r = e.request,
              s = a || {},
              o = s.mediaInfo,
              l = s.start,
              d = (o || {}).type,
              u = ey(r, i),
              c = u.requestStart,
              h = u.requestResponseStart,
              m = u.requestResponseEnd,
              p = u.requestBytesLoaded,
              E = u.requestResponseHeaders,
              b = u.requestMediaDuration,
              f = u.requestHostname,
              g = u.requestUrl,
              _ = u.requestId,
              y = eT(d, i),
              T = y.currentLevel,
              A = y.renditionWidth,
              k = y.renditionHeight;
            n("requestcompleted", {
              request_event_type: t,
              request_start: c,
              request_response_start: h,
              request_response_end: m,
              request_bytes_loaded: p,
              request_type: d,
              request_response_headers: E,
              request_hostname: f,
              request_id: _,
              request_url: g,
              request_media_start_time: l,
              request_media_duration: b,
              request_current_level: T,
              request_labeled_bitrate: y.renditionBitrate,
              request_video_width: A,
              request_video_height: k,
            });
          };
          r >= 4
            ? i.on("mediaFragmentLoaded", u)
            : i.on("mediaFragmentLoaded", function (e) {
                var t = e.type,
                  i = e.fragmentModel,
                  a = e.chunk;
                u({ type: t, request: l(i), chunk: a });
              });
          var c = { video: void 0, audio: void 0, totalBitrate: void 0 },
            h = function () {
              if (c.video && "number" == typeof c.video.bitrate) {
                if (!(c.video.width && c.video.height))
                  return void a.warn(
                    "have bitrate info for video but missing width/height",
                  );
                var e = c.video.bitrate;
                if (
                  (c.audio &&
                    "number" == typeof c.audio.bitrate &&
                    (e += c.audio.bitrate),
                  e !== c.totalBitrate)
                )
                  return (
                    (c.totalBitrate = e),
                    {
                      video_source_bitrate: e,
                      video_source_height: c.video.height,
                      video_source_width: c.video.width,
                      video_source_codec: eA(c.video.codec),
                    }
                  );
              }
            },
            m = function (e, t, r) {
              if ("number" != typeof e.newQuality)
                return void a.warn(
                  "missing evt.newQuality in qualityChangeRendered event",
                  e,
                );
              var s = e.mediaType;
              if ("audio" === s || "video" === s) {
                var o = i.getBitrateInfoListFor(s).find(function (t) {
                  return t.qualityIndex === e.newQuality;
                });
                if (!(o && "number" == typeof o.bitrate))
                  return void a.warn("missing bitrate info for ".concat(s));
                c[s] = ec(eu({}, o), { codec: i.getCurrentTrackFor(s).codec });
                var l = h();
                l && n("renditionchange", l);
              }
            };
          i.on("qualityChangeRendered", m);
          var p = function (e) {
            var t = e.request,
              i = e.mediaType;
            n("requestcanceled", {
              request_event_type: (t = t || {}).type + "_" + t.action,
              request_url: t.url,
              request_type: i,
              request_hostname: en(t.url),
            });
          };
          i.on("fragmentLoadingAbandoned", p);
          var E = function (e) {
            var t,
              i,
              a = e.error,
              r =
                (null == a || null == (t = a.data) ? void 0 : t.request) || {},
              s =
                (null == a || null == (i = a.data) ? void 0 : i.response) || {};
            (null == a ? void 0 : a.code) === 27 &&
              n("requestfailed", {
                request_error: r.type + "_" + r.action,
                request_url: r.url,
                request_hostname: en(r.url),
                request_type: r.mediaType,
                request_error_code: s.status,
                request_error_text: s.statusText,
              });
            var o =
              "".concat(null != r && r.url ? "url: ".concat(r.url, "\n") : "") +
              "".concat(
                (null != s && s.status) || (null != s && s.statusText)
                  ? "response: "
                      .concat(null == s ? void 0 : s.status, ", ")
                      .concat(null == s ? void 0 : s.statusText, "\n")
                  : "",
              );
            n("error", {
              player_error_code: null == a ? void 0 : a.code,
              player_error_message: null == a ? void 0 : a.message,
              player_error_context: o,
            });
          };
          (i.on("error", E),
            (i._stopMuxMonitor = function () {
              (i.off("manifestLoaded", s),
                i.off("initFragmentLoaded", d),
                i.off("mediaFragmentLoaded", u),
                i.off("qualityChangeRendered", m),
                i.off("error", E),
                i.off("fragmentLoadingAbandoned", p),
                delete i._stopMuxMonitor);
            }));
        },
        eS = function (e) {
          e && "function" == typeof e._stopMuxMonitor && e._stopMuxMonitor();
        },
        eI = 0,
        eR = (function () {
          function e() {
            (X(this, e), et(this, "_listeners", void 0));
          }
          return (
            ee(e, [
              {
                key: "on",
                value: function (e, t, i) {
                  return (
                    (t._eventEmitterGuid = t._eventEmitterGuid || ++eI),
                    (this._listeners = this._listeners || {}),
                    (this._listeners[e] = this._listeners[e] || []),
                    i && (t = t.bind(i)),
                    this._listeners[e].push(t),
                    t
                  );
                },
              },
              {
                key: "off",
                value: function (e, t) {
                  var i = this._listeners && this._listeners[e];
                  i &&
                    i.forEach(function (e, a) {
                      e._eventEmitterGuid === t._eventEmitterGuid &&
                        i.splice(a, 1);
                    });
                },
              },
              {
                key: "one",
                value: function (e, t, i) {
                  var a = this;
                  t._eventEmitterGuid = t._eventEmitterGuid || ++eI;
                  var r = function () {
                    (a.off(e, r), t.apply(i || this, arguments));
                  };
                  ((r._eventEmitterGuid = t._eventEmitterGuid), this.on(e, r));
                },
              },
              {
                key: "emit",
                value: function (e, t) {
                  var i = this;
                  if (this._listeners) {
                    t = t || {};
                    var a = this._listeners["before*"] || [],
                      r = this._listeners[e] || [],
                      n = this._listeners["after" + e] || [],
                      s = function (t, a) {
                        (t = t.slice()).forEach(function (t) {
                          t.call(i, { type: e }, a);
                        });
                      };
                    (s(a, t), s(r, t), s(n, t));
                  }
                },
              },
            ]),
            e
          );
        })(),
        eC = E(b()),
        eD = (function () {
          function e(t) {
            var i = this;
            (X(this, e),
              et(this, "_playbackHeartbeatInterval", void 0),
              et(this, "_playheadShouldBeProgressing", void 0),
              et(this, "pm", void 0),
              (this.pm = t),
              (this._playbackHeartbeatInterval = null),
              (this._playheadShouldBeProgressing = !1),
              t.on("playing", function () {
                i._playheadShouldBeProgressing = !0;
              }),
              t.on("play", this._startPlaybackHeartbeatInterval.bind(this)),
              t.on("playing", this._startPlaybackHeartbeatInterval.bind(this)),
              t.on(
                "adbreakstart",
                this._startPlaybackHeartbeatInterval.bind(this),
              ),
              t.on("adplay", this._startPlaybackHeartbeatInterval.bind(this)),
              t.on(
                "adplaying",
                this._startPlaybackHeartbeatInterval.bind(this),
              ),
              t.on(
                "devicewake",
                this._startPlaybackHeartbeatInterval.bind(this),
              ),
              t.on(
                "viewstart",
                this._startPlaybackHeartbeatInterval.bind(this),
              ),
              t.on(
                "rebufferstart",
                this._startPlaybackHeartbeatInterval.bind(this),
              ),
              t.on("pause", this._stopPlaybackHeartbeatInterval.bind(this)),
              t.on("ended", this._stopPlaybackHeartbeatInterval.bind(this)),
              t.on("viewend", this._stopPlaybackHeartbeatInterval.bind(this)),
              t.on("error", this._stopPlaybackHeartbeatInterval.bind(this)),
              t.on("aderror", this._stopPlaybackHeartbeatInterval.bind(this)),
              t.on("adpause", this._stopPlaybackHeartbeatInterval.bind(this)),
              t.on("adended", this._stopPlaybackHeartbeatInterval.bind(this)),
              t.on(
                "adbreakend",
                this._stopPlaybackHeartbeatInterval.bind(this),
              ),
              t.on("seeked", function () {
                t.data.player_is_paused
                  ? i._stopPlaybackHeartbeatInterval()
                  : i._startPlaybackHeartbeatInterval();
              }),
              t.on("timeupdate", function () {
                null !== i._playbackHeartbeatInterval &&
                  t.emit("playbackheartbeat");
              }),
              t.on("devicesleep", function (e, a) {
                null !== i._playbackHeartbeatInterval &&
                  (eC.default.clearInterval(i._playbackHeartbeatInterval),
                  t.emit("playbackheartbeatend", {
                    viewer_time: a.viewer_time,
                  }),
                  (i._playbackHeartbeatInterval = null));
              }));
          }
          return (
            ee(e, [
              {
                key: "_startPlaybackHeartbeatInterval",
                value: function () {
                  var e = this;
                  null === this._playbackHeartbeatInterval &&
                    (this.pm.emit("playbackheartbeat"),
                    (this._playbackHeartbeatInterval = eC.default.setInterval(
                      function () {
                        e.pm.emit("playbackheartbeat");
                      },
                      this.pm.playbackHeartbeatTime,
                    )));
                },
              },
              {
                key: "_stopPlaybackHeartbeatInterval",
                value: function () {
                  ((this._playheadShouldBeProgressing = !1),
                    null !== this._playbackHeartbeatInterval &&
                      (eC.default.clearInterval(
                        this._playbackHeartbeatInterval,
                      ),
                      this.pm.emit("playbackheartbeatend"),
                      (this._playbackHeartbeatInterval = null)));
                },
              },
            ]),
            e
          );
        })(),
        eL = function e(t) {
          var i = this;
          (X(this, e),
            et(this, "viewErrored", void 0),
            t.on("viewinit", function () {
              i.viewErrored = !1;
            }),
            t.on("error", function (e, a) {
              try {
                var r = t.errorTranslator({
                  player_error_code: a.player_error_code,
                  player_error_message: a.player_error_message,
                  player_error_context: a.player_error_context,
                  player_error_severity: a.player_error_severity,
                  player_error_business_exception:
                    a.player_error_business_exception,
                });
                r &&
                  ((t.data.player_error_code =
                    r.player_error_code || a.player_error_code),
                  (t.data.player_error_message =
                    r.player_error_message || a.player_error_message),
                  (t.data.player_error_context =
                    r.player_error_context || a.player_error_context),
                  (t.data.player_error_severity =
                    r.player_error_severity || a.player_error_severity),
                  (t.data.player_error_business_exception =
                    r.player_error_business_exception ||
                    a.player_error_business_exception),
                  (i.viewErrored = !0));
              } catch (e) {
                (t.mux.log.warn("Exception in error translator callback.", e),
                  (i.viewErrored = !0));
              }
            }),
            t.on("aftererror", function () {
              var e, i, a, r, n;
              (null == (e = t.data) || delete e.player_error_code,
                null == (i = t.data) || delete i.player_error_message,
                null == (a = t.data) || delete a.player_error_context,
                null == (r = t.data) || delete r.player_error_severity,
                null == (n = t.data) ||
                  delete n.player_error_business_exception);
            }));
        },
        eM = (function () {
          function e(t) {
            (X(this, e),
              et(this, "_watchTimeTrackerLastCheckedTime", void 0),
              et(this, "pm", void 0),
              (this.pm = t),
              (this._watchTimeTrackerLastCheckedTime = null),
              t.on("playbackheartbeat", this._updateWatchTime.bind(this)),
              t.on(
                "playbackheartbeatend",
                this._clearWatchTimeState.bind(this),
              ));
          }
          return (
            ee(e, [
              {
                key: "_updateWatchTime",
                value: function (e, t) {
                  var i = t.viewer_time;
                  (null === this._watchTimeTrackerLastCheckedTime &&
                    (this._watchTimeTrackerLastCheckedTime = i),
                    ed(
                      this.pm.data,
                      "view_watch_time",
                      i - this._watchTimeTrackerLastCheckedTime,
                    ),
                    (this._watchTimeTrackerLastCheckedTime = i));
                },
              },
              {
                key: "_clearWatchTimeState",
                value: function (e, t) {
                  (this._updateWatchTime(e, t),
                    (this._watchTimeTrackerLastCheckedTime = null));
                },
              },
            ]),
            e
          );
        })(),
        eO = (function () {
          function e(t) {
            var i = this;
            (X(this, e),
              et(this, "_playbackTimeTrackerLastPlayheadPosition", void 0),
              et(this, "_lastTime", void 0),
              et(this, "_isAdPlaying", void 0),
              et(this, "_callbackUpdatePlaybackTime", void 0),
              et(this, "pm", void 0),
              (this.pm = t),
              (this._playbackTimeTrackerLastPlayheadPosition = -1),
              (this._lastTime = V.now()),
              (this._isAdPlaying = !1),
              (this._callbackUpdatePlaybackTime = null));
            var a = this._startPlaybackTimeTracking.bind(this);
            (t.on("playing", a), t.on("adplaying", a), t.on("seeked", a));
            var r = this._stopPlaybackTimeTracking.bind(this);
            (t.on("playbackheartbeatend", r),
              t.on("seeking", r),
              t.on("adplaying", function () {
                i._isAdPlaying = !0;
              }),
              t.on("adended", function () {
                i._isAdPlaying = !1;
              }),
              t.on("adpause", function () {
                i._isAdPlaying = !1;
              }),
              t.on("adbreakstart", function () {
                i._isAdPlaying = !1;
              }),
              t.on("adbreakend", function () {
                i._isAdPlaying = !1;
              }),
              t.on("adplay", function () {
                i._isAdPlaying = !1;
              }),
              t.on("viewinit", function () {
                ((i._playbackTimeTrackerLastPlayheadPosition = -1),
                  (i._lastTime = V.now()),
                  (i._isAdPlaying = !1),
                  (i._callbackUpdatePlaybackTime = null));
              }));
          }
          return (
            ee(e, [
              {
                key: "_startPlaybackTimeTracking",
                value: function () {
                  null === this._callbackUpdatePlaybackTime &&
                    ((this._callbackUpdatePlaybackTime =
                      this._updatePlaybackTime.bind(this)),
                    (this._playbackTimeTrackerLastPlayheadPosition =
                      this.pm.data.player_playhead_time),
                    this.pm.on(
                      "playbackheartbeat",
                      this._callbackUpdatePlaybackTime,
                    ));
                },
              },
              {
                key: "_stopPlaybackTimeTracking",
                value: function () {
                  this._callbackUpdatePlaybackTime &&
                    (this._updatePlaybackTime(),
                    this.pm.off(
                      "playbackheartbeat",
                      this._callbackUpdatePlaybackTime,
                    ),
                    (this._callbackUpdatePlaybackTime = null),
                    (this._playbackTimeTrackerLastPlayheadPosition = -1));
                },
              },
              {
                key: "_updatePlaybackTime",
                value: function () {
                  var e = this.pm.data.player_playhead_time,
                    t = V.now(),
                    i = -1;
                  (this._playbackTimeTrackerLastPlayheadPosition >= 0 &&
                  e > this._playbackTimeTrackerLastPlayheadPosition
                    ? (i = e - this._playbackTimeTrackerLastPlayheadPosition)
                    : this._isAdPlaying && (i = t - this._lastTime),
                    i > 0 &&
                      i <= 1e3 &&
                      ed(this.pm.data, "view_content_playback_time", i),
                    (this._playbackTimeTrackerLastPlayheadPosition = e),
                    (this._lastTime = t));
                },
              },
            ]),
            e
          );
        })(),
        eN = (function () {
          function e(t) {
            (X(this, e), et(this, "pm", void 0), (this.pm = t));
            var i = this._updatePlayheadTime.bind(this);
            (t.on("playbackheartbeat", i),
              t.on("playbackheartbeatend", i),
              t.on("timeupdate", i),
              t.on("destroy", function () {
                t.off("timeupdate", i);
              }));
          }
          return (
            ee(e, [
              {
                key: "_updateMaxPlayheadPosition",
                value: function () {
                  this.pm.data.view_max_playhead_position =
                    void 0 === this.pm.data.view_max_playhead_position
                      ? this.pm.data.player_playhead_time
                      : Math.max(
                          this.pm.data.view_max_playhead_position,
                          this.pm.data.player_playhead_time,
                        );
                },
              },
              {
                key: "_updatePlayheadTime",
                value: function (e, t) {
                  var i = this,
                    a = function () {
                      i.pm.currentFragmentPDT &&
                        i.pm.currentFragmentStart &&
                        (i.pm.data.player_program_time =
                          i.pm.currentFragmentPDT +
                          i.pm.data.player_playhead_time -
                          i.pm.currentFragmentStart);
                    };
                  if (t && t.player_playhead_time)
                    ((this.pm.data.player_playhead_time =
                      t.player_playhead_time),
                      a(),
                      this._updateMaxPlayheadPosition());
                  else if (this.pm.getPlayheadTime) {
                    var r = this.pm.getPlayheadTime();
                    void 0 !== r &&
                      ((this.pm.data.player_playhead_time = r),
                      a(),
                      this._updateMaxPlayheadPosition());
                  }
                },
              },
            ]),
            e
          );
        })(),
        ex = function e(t) {
          if ((X(this, e), !t.disableRebufferTracking)) {
            var i,
              a = function (e, t) {
                (r(t), (i = void 0));
              },
              r = function (e) {
                if (i) {
                  var a = e.viewer_time - i;
                  (ed(t.data, "view_rebuffer_duration", a),
                    (i = e.viewer_time),
                    t.data.view_rebuffer_duration > 3e5 &&
                      (t.emit("viewend"),
                      t.send("viewend"),
                      t.mux.log.warn(
                        "Ending view after rebuffering for longer than ".concat(
                          3e5,
                          "ms, future events will be ignored unless a programchange or videochange occurs.",
                        ),
                      )));
                }
                t.data.view_watch_time >= 0 &&
                  t.data.view_rebuffer_count > 0 &&
                  ((t.data.view_rebuffer_frequency =
                    t.data.view_rebuffer_count / t.data.view_watch_time),
                  (t.data.view_rebuffer_percentage =
                    t.data.view_rebuffer_duration / t.data.view_watch_time));
              };
            (t.on("playbackheartbeat", function (e, t) {
              return r(t);
            }),
              t.on("rebufferstart", function (e, r) {
                i ||
                  (ed(t.data, "view_rebuffer_count", 1),
                  (i = r.viewer_time),
                  t.one("rebufferend", a));
              }),
              t.on("viewinit", function () {
                ((i = void 0), t.off("rebufferend", a));
              }));
          }
        },
        eP = (function () {
          function e(t) {
            var i = this;
            (X(this, e),
              et(this, "_lastCheckedTime", void 0),
              et(this, "_lastPlayheadTime", void 0),
              et(this, "_lastPlayheadTimeUpdatedTime", void 0),
              et(this, "_rebuffering", void 0),
              et(this, "pm", void 0),
              (this.pm = t),
              t.disableRebufferTracking ||
                t.disablePlayheadRebufferTracking ||
                ((this._lastCheckedTime = null),
                (this._lastPlayheadTime = null),
                (this._lastPlayheadTimeUpdatedTime = null),
                t.on("playbackheartbeat", this._checkIfRebuffering.bind(this)),
                t.on(
                  "playbackheartbeatend",
                  this._cleanupRebufferTracker.bind(this),
                ),
                t.on("seeking", function () {
                  i._cleanupRebufferTracker(null, { viewer_time: V.now() });
                })));
          }
          return (
            ee(e, [
              {
                key: "_checkIfRebuffering",
                value: function (e, t) {
                  if (
                    this.pm.seekingTracker.isSeeking ||
                    this.pm.adTracker.isAdBreak ||
                    !this.pm.playbackHeartbeat._playheadShouldBeProgressing
                  )
                    return void this._cleanupRebufferTracker(e, t);
                  if (null === this._lastCheckedTime)
                    return void this._prepareRebufferTrackerState(
                      t.viewer_time,
                    );
                  if (
                    this._lastPlayheadTime !== this.pm.data.player_playhead_time
                  )
                    return void this._cleanupRebufferTracker(e, t, !0);
                  var i = t.viewer_time - this._lastPlayheadTimeUpdatedTime;
                  ("number" == typeof this.pm.sustainedRebufferThreshold &&
                    i >= this.pm.sustainedRebufferThreshold &&
                    (this._rebuffering ||
                      ((this._rebuffering = !0),
                      this.pm.emit("rebufferstart", {
                        viewer_time: this._lastPlayheadTimeUpdatedTime,
                      }))),
                    (this._lastCheckedTime = t.viewer_time));
                },
              },
              {
                key: "_clearRebufferTrackerState",
                value: function () {
                  ((this._lastCheckedTime = null),
                    (this._lastPlayheadTime = null),
                    (this._lastPlayheadTimeUpdatedTime = null));
                },
              },
              {
                key: "_prepareRebufferTrackerState",
                value: function (e) {
                  ((this._lastCheckedTime = e),
                    (this._lastPlayheadTime =
                      this.pm.data.player_playhead_time),
                    (this._lastPlayheadTimeUpdatedTime = e));
                },
              },
              {
                key: "_cleanupRebufferTracker",
                value: function (e, t) {
                  var i =
                    arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2];
                  if (this._rebuffering)
                    ((this._rebuffering = !1),
                      this.pm.emit("rebufferend", {
                        viewer_time: t.viewer_time,
                      }));
                  else {
                    if (null === this._lastCheckedTime) return;
                    var a =
                        this.pm.data.player_playhead_time -
                        this._lastPlayheadTime,
                      r = t.viewer_time - this._lastPlayheadTimeUpdatedTime;
                    "number" == typeof this.pm.minimumRebufferDuration &&
                      a > 0 &&
                      r - a > this.pm.minimumRebufferDuration &&
                      ((this._lastCheckedTime = null),
                      this.pm.emit("rebufferstart", {
                        viewer_time: this._lastPlayheadTimeUpdatedTime,
                      }),
                      this.pm.emit("rebufferend", {
                        viewer_time: this._lastPlayheadTimeUpdatedTime + r - a,
                      }));
                  }
                  i
                    ? this._prepareRebufferTrackerState(t.viewer_time)
                    : this._clearRebufferTrackerState();
                },
              },
            ]),
            e
          );
        })(),
        eU = (function () {
          function e(t) {
            var i = this;
            (X(this, e),
              et(this, "NAVIGATION_START", void 0),
              et(this, "pm", void 0),
              (this.pm = t),
              t.on("viewinit", function () {
                var e = t.data,
                  a = e.view_id;
                if (!e.view_program_changed) {
                  var r = function (e, r) {
                    var n = r.viewer_time;
                    "playing" === e.type &&
                    void 0 === t.data.view_time_to_first_frame
                      ? i.calculateTimeToFirstFrame(n || V.now(), a)
                      : "adplaying" === e.type &&
                        (void 0 === t.data.view_time_to_first_frame ||
                          i._inPrerollPosition()) &&
                        i.calculateTimeToFirstFrame(n || V.now(), a);
                  };
                  (t.one("playing", r),
                    t.one("adplaying", r),
                    t.one("viewend", function () {
                      (t.off("playing", r), t.off("adplaying", r));
                    }));
                }
              }));
          }
          return (
            ee(e, [
              {
                key: "_inPrerollPosition",
                value: function () {
                  return (
                    void 0 === this.pm.data.view_content_playback_time ||
                    this.pm.data.view_content_playback_time <= 1e3
                  );
                },
              },
              {
                key: "calculateTimeToFirstFrame",
                value: function (e, t) {
                  t === this.pm.data.view_id &&
                    (this.pm.watchTimeTracker._updateWatchTime(null, {
                      viewer_time: e,
                    }),
                    (this.pm.data.view_time_to_first_frame =
                      this.pm.data.view_watch_time),
                    (this.pm.data.player_autoplay_on ||
                      this.pm.data.video_is_autoplay) &&
                      this.NAVIGATION_START &&
                      (this.pm.data.view_aggregate_startup_time =
                        this.pm.data.view_start +
                        this.pm.data.view_watch_time -
                        this.NAVIGATION_START));
                },
              },
            ]),
            e
          );
        })(),
        eB = function e(t) {
          var i = this;
          (X(this, e),
            et(this, "_lastPlayerHeight", void 0),
            et(this, "_lastPlayerWidth", void 0),
            et(this, "_lastPlayheadPosition", void 0),
            et(this, "_lastSourceHeight", void 0),
            et(this, "_lastSourceWidth", void 0),
            t.on("viewinit", function () {
              i._lastPlayheadPosition = -1;
            }),
            [
              "pause",
              "rebufferstart",
              "seeking",
              "error",
              "adbreakstart",
              "hb",
              "renditionchange",
              "orientationchange",
              "viewend",
            ].forEach(function (e) {
              t.on(e, function () {
                if (
                  i._lastPlayheadPosition >= 0 &&
                  t.data.player_playhead_time >= 0 &&
                  i._lastPlayerWidth >= 0 &&
                  i._lastSourceWidth > 0 &&
                  i._lastPlayerHeight >= 0 &&
                  i._lastSourceHeight > 0
                ) {
                  var e = t.data.player_playhead_time - i._lastPlayheadPosition;
                  if (e < 0) {
                    i._lastPlayheadPosition = -1;
                    return;
                  }
                  var a = Math.min(
                      i._lastPlayerWidth / i._lastSourceWidth,
                      i._lastPlayerHeight / i._lastSourceHeight,
                    ),
                    r = Math.max(0, a - 1),
                    n = Math.max(0, 1 - a);
                  ((t.data.view_max_upscale_percentage = Math.max(
                    t.data.view_max_upscale_percentage || 0,
                    r,
                  )),
                    (t.data.view_max_downscale_percentage = Math.max(
                      t.data.view_max_downscale_percentage || 0,
                      n,
                    )),
                    ed(t.data, "view_total_content_playback_time", e),
                    ed(t.data, "view_total_upscaling", r * e),
                    ed(t.data, "view_total_downscaling", n * e));
                }
                i._lastPlayheadPosition = -1;
              });
            }),
            ["playing", "hb", "renditionchange", "orientationchange"].forEach(
              function (e) {
                t.on(e, function () {
                  ((i._lastPlayheadPosition = t.data.player_playhead_time),
                    (i._lastPlayerWidth = t.data.player_width),
                    (i._lastPlayerHeight = t.data.player_height),
                    (i._lastSourceWidth = t.data.video_source_width),
                    (i._lastSourceHeight = t.data.video_source_height));
                });
              },
            ));
        },
        eW = function e(t) {
          var i = this;
          (X(this, e), et(this, "isSeeking", void 0), (this.isSeeking = !1));
          var a = -1,
            r = function () {
              var e = V.now(),
                r = (t.data.viewer_time || e) - (a || e);
              (ed(t.data, "view_seek_duration", r),
                (t.data.view_max_seek_time = Math.max(
                  t.data.view_max_seek_time || 0,
                  r,
                )),
                (i.isSeeking = !1),
                (a = -1));
            };
          (t.on("seeking", function (e, n) {
            if (
              (Object.assign(t.data, n),
              i.isSeeking && n.viewer_time - a <= 2e3)
            ) {
              a = n.viewer_time;
              return;
            }
            (i.isSeeking && r(),
              (i.isSeeking = !0),
              (a = n.viewer_time),
              ed(t.data, "view_seek_count", 1),
              t.send("seeking"));
          }),
            t.on("seeked", function () {
              r();
            }),
            t.on("viewend", function () {
              (i.isSeeking && (r(), t.send("seeked")),
                (i.isSeeking = !1),
                (a = -1));
            }));
        },
        eH = function (e, t) {
          (e.push(t),
            e.sort(function (e, t) {
              return e.viewer_time - t.viewer_time;
            }));
        },
        eV = [
          "adbreakstart",
          "adrequest",
          "adresponse",
          "adplay",
          "adplaying",
          "adpause",
          "adended",
          "adbreakend",
          "aderror",
          "adclicked",
          "adskipped",
        ],
        eF = (function () {
          function e(t) {
            var i = this;
            (X(this, e),
              et(this, "_adHasPlayed", void 0),
              et(this, "_adRequests", void 0),
              et(this, "_adResponses", void 0),
              et(this, "_currentAdRequestNumber", void 0),
              et(this, "_currentAdResponseNumber", void 0),
              et(this, "_prerollPlayTime", void 0),
              et(this, "_wouldBeNewAdPlay", void 0),
              et(this, "isAdBreak", void 0),
              et(this, "pm", void 0),
              (this.pm = t),
              t.on("viewinit", function () {
                ((i.isAdBreak = !1),
                  (i._currentAdRequestNumber = 0),
                  (i._currentAdResponseNumber = 0),
                  (i._adRequests = []),
                  (i._adResponses = []),
                  (i._adHasPlayed = !1),
                  (i._wouldBeNewAdPlay = !0),
                  (i._prerollPlayTime = void 0));
              }),
              eV.forEach(function (e) {
                return t.on(e, i._updateAdData.bind(i));
              }));
            var a = function () {
              i.isAdBreak = !1;
            };
            (t.on("adbreakstart", function () {
              i.isAdBreak = !0;
            }),
              t.on("play", a),
              t.on("playing", a),
              t.on("viewend", a),
              t.on("adrequest", function (e, a) {
                ((a = Object.assign(
                  {
                    ad_request_id:
                      "generatedAdRequestId" + i._currentAdRequestNumber++,
                  },
                  a,
                )),
                  eH(i._adRequests, a),
                  ed(t.data, "view_ad_request_count"),
                  i.inPrerollPosition() &&
                    ((t.data.view_preroll_requested = !0),
                    i._adHasPlayed ||
                      ed(t.data, "view_preroll_request_count")));
              }),
              t.on("adresponse", function (e, a) {
                ((a = Object.assign(
                  {
                    ad_request_id:
                      "generatedAdRequestId" + i._currentAdResponseNumber++,
                  },
                  a,
                )),
                  eH(i._adResponses, a));
                var r = i.findAdRequest(a.ad_request_id);
                r &&
                  ed(
                    t.data,
                    "view_ad_request_time",
                    Math.max(0, a.viewer_time - r.viewer_time),
                  );
              }),
              t.on("adplay", function (e, a) {
                ((i._adHasPlayed = !0),
                  i._wouldBeNewAdPlay &&
                    ((i._wouldBeNewAdPlay = !1),
                    ed(t.data, "view_ad_played_count")),
                  i.inPrerollPosition() &&
                    !t.data.view_preroll_played &&
                    ((t.data.view_preroll_played = !0),
                    i._adRequests.length > 0 &&
                      (t.data.view_preroll_request_time = Math.max(
                        0,
                        a.viewer_time - i._adRequests[0].viewer_time,
                      )),
                    t.data.view_start &&
                      (t.data.view_startup_preroll_request_time = Math.max(
                        0,
                        a.viewer_time - t.data.view_start,
                      )),
                    (i._prerollPlayTime = a.viewer_time)));
              }),
              t.on("adplaying", function (e, a) {
                i.inPrerollPosition() &&
                  void 0 === t.data.view_preroll_load_time &&
                  void 0 !== i._prerollPlayTime &&
                  ((t.data.view_preroll_load_time =
                    a.viewer_time - i._prerollPlayTime),
                  (t.data.view_startup_preroll_load_time =
                    a.viewer_time - i._prerollPlayTime));
              }),
              t.on("adclicked", function (e, a) {
                i._wouldBeNewAdPlay || ed(t.data, "view_ad_clicked_count");
              }),
              t.on("adskipped", function (e, a) {
                i._wouldBeNewAdPlay || ed(t.data, "view_ad_skipped_count");
              }),
              t.on("adended", function () {
                i._wouldBeNewAdPlay = !0;
              }),
              t.on("aderror", function () {
                i._wouldBeNewAdPlay = !0;
              }));
          }
          return (
            ee(e, [
              {
                key: "inPrerollPosition",
                value: function () {
                  return (
                    void 0 === this.pm.data.view_content_playback_time ||
                    this.pm.data.view_content_playback_time <= 1e3
                  );
                },
              },
              {
                key: "findAdRequest",
                value: function (e) {
                  for (var t = 0; t < this._adRequests.length; t++)
                    if (this._adRequests[t].ad_request_id === e)
                      return this._adRequests[t];
                },
              },
              {
                key: "_updateAdData",
                value: function (e, t) {
                  if (this.inPrerollPosition()) {
                    if (
                      !this.pm.data.view_preroll_ad_tag_hostname &&
                      t.ad_tag_url
                    ) {
                      var i = U(es(t.ad_tag_url), 2),
                        a = i[0],
                        r = i[1];
                      ((this.pm.data.view_preroll_ad_tag_domain = r),
                        (this.pm.data.view_preroll_ad_tag_hostname = a));
                    }
                    if (
                      !this.pm.data.view_preroll_ad_asset_hostname &&
                      t.ad_asset_url
                    ) {
                      var n = U(es(t.ad_asset_url), 2),
                        s = n[0],
                        o = n[1];
                      ((this.pm.data.view_preroll_ad_asset_domain = o),
                        (this.pm.data.view_preroll_ad_asset_hostname = s));
                    }
                  }
                  ((this.pm.data.ad_asset_url =
                    null == t ? void 0 : t.ad_asset_url),
                    (this.pm.data.ad_tag_url =
                      null == t ? void 0 : t.ad_tag_url),
                    (this.pm.data.ad_creative_id =
                      null == t ? void 0 : t.ad_creative_id),
                    (this.pm.data.ad_id = null == t ? void 0 : t.ad_id),
                    (this.pm.data.ad_universal_id =
                      null == t ? void 0 : t.ad_universal_id));
                },
              },
            ]),
            e
          );
        })(),
        eq = E(b()),
        e$ = function e(t) {
          X(this, e);
          var i,
            a,
            r = function () {
              t.disableRebufferTracking ||
                (ed(t.data, "view_waiting_rebuffer_count", 1),
                (i = V.now()),
                (a = eq.default.setInterval(function () {
                  if (i) {
                    var e = V.now();
                    (ed(t.data, "view_waiting_rebuffer_duration", e - i),
                      (i = e));
                  }
                }, 250)));
            },
            n = function () {
              t.disableRebufferTracking ||
                (i &&
                  (ed(t.data, "view_waiting_rebuffer_duration", V.now() - i),
                  (i = !1),
                  eq.default.clearInterval(a)));
            },
            s = !1,
            o = function () {
              s = !0;
            },
            l = function () {
              ((s = !1), n());
            };
          (t.on("waiting", function () {
            s && r();
          }),
            t.on("playing", function () {
              (n(), o());
            }),
            t.on("pause", l),
            t.on("seeking", l));
        },
        eK = function e(t) {
          var i = this;
          (X(this, e), et(this, "lastWallClockTime", void 0));
          var a = function () {
              ((i.lastWallClockTime = V.now()), t.on("before*", r));
            },
            r = function (e) {
              var a = V.now(),
                r = i.lastWallClockTime;
              ((i.lastWallClockTime = a),
                a - r > 3e4 &&
                  (t.emit("devicesleep", { viewer_time: r }),
                  Object.assign(t.data, { viewer_time: r }),
                  t.send("devicesleep"),
                  t.emit("devicewake", { viewer_time: a }),
                  Object.assign(t.data, { viewer_time: a }),
                  t.send("devicewake")));
            };
          (t.one("playbackheartbeat", a),
            t.on("playbackheartbeatend", function () {
              (t.off("before*", r), t.one("playbackheartbeat", a));
            }));
        },
        eY = E(b()),
        eG = (function () {
          var e = function () {
            for (var e = 0, t = {}; e < arguments.length; e++) {
              var i = arguments[e];
              for (var a in i) t[a] = i[a];
            }
            return t;
          };
          return (function t(i) {
            function a(t, r, n) {
              var s;
              if ("undefined" != typeof document) {
                if (arguments.length > 1) {
                  if (
                    "number" ==
                    typeof (n = e({ path: "/" }, a.defaults, n)).expires
                  ) {
                    var o = new Date();
                    (o.setMilliseconds(o.getMilliseconds() + 864e5 * n.expires),
                      (n.expires = o));
                  }
                  try {
                    ((s = JSON.stringify(r)), /^[\{\[]/.test(s) && (r = s));
                  } catch (e) {}
                  return (
                    (r = i.write
                      ? i.write(r, t)
                      : encodeURIComponent(String(r)).replace(
                          /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                          decodeURIComponent,
                        )),
                    (t = (t = (t = encodeURIComponent(String(t))).replace(
                      /%(23|24|26|2B|5E|60|7C)/g,
                      decodeURIComponent,
                    )).replace(/[\(\)]/g, escape)),
                    (document.cookie = [
                      t,
                      "=",
                      r,
                      n.expires ? "; expires=" + n.expires.toUTCString() : "",
                      n.path ? "; path=" + n.path : "",
                      n.domain ? "; domain=" + n.domain : "",
                      n.secure ? "; secure" : "",
                    ].join(""))
                  );
                }
                t || (s = {});
                for (
                  var l = document.cookie ? document.cookie.split("; ") : [],
                    d = /(%[0-9A-Z]{2})+/g,
                    u = 0;
                  u < l.length;
                  u++
                ) {
                  var c = l[u].split("="),
                    h = c.slice(1).join("=");
                  '"' === h.charAt(0) && (h = h.slice(1, -1));
                  try {
                    var m = c[0].replace(d, decodeURIComponent);
                    if (
                      ((h = i.read
                        ? i.read(h, m)
                        : i(h, m) || h.replace(d, decodeURIComponent)),
                      this.json)
                    )
                      try {
                        h = JSON.parse(h);
                      } catch (e) {}
                    if (t === m) {
                      s = h;
                      break;
                    }
                    t || (s[m] = h);
                  } catch (e) {}
                }
                return s;
              }
            }
            return (
              (a.set = a),
              (a.get = function (e) {
                return a.call(a, e);
              }),
              (a.getJSON = function () {
                return a.apply({ json: !0 }, [].slice.call(arguments));
              }),
              (a.defaults = {}),
              (a.remove = function (t, i) {
                a(t, "", e(i, { expires: -1 }));
              }),
              (a.withConverter = t),
              a
            );
          })(function () {});
        })(),
        ej = "muxData",
        eQ = function () {
          var e;
          try {
            e = (eG.get(ej) || "").split("&").reduce(function (e, t) {
              var i = U(t.split("="), 2),
                a = i[0],
                r = i[1],
                n = +r;
              return ((e[a] = r && n == r ? n : r), e);
            }, {});
          } catch (t) {
            e = {};
          }
          return e;
        },
        eZ = function (e) {
          try {
            eG.set(
              ej,
              Object.entries(e)
                .map(function (e) {
                  var t = U(e, 2),
                    i = t[0],
                    a = t[1];
                  return "".concat(i, "=").concat(a);
                })
                .join("&"),
              { expires: 365 },
            );
          } catch (e) {}
        },
        ez = function () {
          var e = eQ();
          return (
            (e.mux_viewer_id = e.mux_viewer_id || F()),
            (e.msn = e.msn || Math.random()),
            eZ(e),
            { mux_viewer_id: e.mux_viewer_id, mux_sample_number: e.msn }
          );
        },
        eX = function () {
          var e = eQ(),
            t = V.now();
          return (
            e.session_start &&
              ((e.sst = e.session_start), delete e.session_start),
            e.session_id && ((e.sid = e.session_id), delete e.session_id),
            e.session_expires &&
              ((e.sex = e.session_expires), delete e.session_expires),
            (!e.sex || e.sex < t) && ((e.sid = F()), (e.sst = t)),
            (e.sex = t + 15e5),
            eZ(e),
            { session_id: e.sid, session_start: e.sst, session_expires: e.sex }
          );
        },
        eJ = E(b()),
        e0 = function () {
          var e;
          switch (e1()) {
            case "cellular":
              e = "cellular";
              break;
            case "ethernet":
              e = "wired";
              break;
            case "wifi":
              e = "wifi";
              break;
            case void 0:
              break;
            default:
              e = "other";
          }
          return e;
        },
        e1 = function () {
          var e = eJ.default.navigator,
            t = e && (e.connection || e.mozConnection || e.webkitConnection);
          return t && t.type;
        };
      e0.getConnectionFromAPI = e1;
      var e2 = e4({
          a: "env",
          b: "beacon",
          c: "custom",
          d: "ad",
          e: "event",
          f: "experiment",
          i: "internal",
          m: "mux",
          n: "response",
          p: "player",
          q: "request",
          r: "retry",
          s: "session",
          t: "timestamp",
          u: "viewer",
          v: "video",
          w: "page",
          x: "view",
          y: "sub",
        }),
        e3 = e4({
          ad: "ad",
          af: "affiliate",
          ag: "aggregate",
          ap: "api",
          al: "application",
          ao: "audio",
          ar: "architecture",
          as: "asset",
          au: "autoplay",
          av: "average",
          bi: "bitrate",
          bn: "brand",
          br: "break",
          bw: "browser",
          by: "bytes",
          bz: "business",
          ca: "cached",
          cb: "cancel",
          cc: "codec",
          cd: "code",
          cg: "category",
          ch: "changed",
          ci: "client",
          ck: "clicked",
          cl: "canceled",
          cn: "config",
          co: "count",
          ce: "counter",
          cp: "complete",
          cq: "creator",
          cr: "creative",
          cs: "captions",
          ct: "content",
          cu: "current",
          cx: "connection",
          cz: "context",
          dg: "downscaling",
          dm: "domain",
          dn: "cdn",
          do: "downscale",
          dr: "drm",
          dp: "dropped",
          du: "duration",
          dv: "device",
          dy: "dynamic",
          eb: "enabled",
          ec: "encoding",
          ed: "edge",
          en: "end",
          eg: "engine",
          em: "embed",
          er: "error",
          ep: "experiments",
          es: "errorcode",
          et: "errortext",
          ee: "event",
          ev: "events",
          ex: "expires",
          ez: "exception",
          fa: "failed",
          fi: "first",
          fm: "family",
          ft: "format",
          fp: "fps",
          fq: "frequency",
          fr: "frame",
          fs: "fullscreen",
          ha: "has",
          hb: "holdback",
          he: "headers",
          ho: "host",
          hn: "hostname",
          ht: "height",
          id: "id",
          ii: "init",
          in: "instance",
          ip: "ip",
          is: "is",
          ke: "key",
          la: "language",
          lb: "labeled",
          le: "level",
          li: "live",
          ld: "loaded",
          lo: "load",
          ls: "lists",
          lt: "latency",
          ma: "max",
          md: "media",
          me: "message",
          mf: "manifest",
          mi: "mime",
          ml: "midroll",
          mm: "min",
          mn: "manufacturer",
          mo: "model",
          mx: "mux",
          ne: "newest",
          nm: "name",
          no: "number",
          on: "on",
          or: "origin",
          os: "os",
          pa: "paused",
          pb: "playback",
          pd: "producer",
          pe: "percentage",
          pf: "played",
          pg: "program",
          ph: "playhead",
          pi: "plugin",
          pl: "preroll",
          pn: "playing",
          po: "poster",
          pp: "pip",
          pr: "preload",
          ps: "position",
          pt: "part",
          py: "property",
          px: "pop",
          pz: "plan",
          ra: "rate",
          rd: "requested",
          re: "rebuffer",
          rf: "rendition",
          rg: "range",
          rm: "remote",
          ro: "ratio",
          rp: "response",
          rq: "request",
          rs: "requests",
          sa: "sample",
          sd: "skipped",
          se: "session",
          sh: "shift",
          sk: "seek",
          sm: "stream",
          so: "source",
          sq: "sequence",
          sr: "series",
          ss: "status",
          st: "start",
          su: "startup",
          sv: "server",
          sw: "software",
          sy: "severity",
          ta: "tag",
          tc: "tech",
          te: "text",
          tg: "target",
          th: "throughput",
          ti: "time",
          tl: "total",
          to: "to",
          tt: "title",
          ty: "type",
          ug: "upscaling",
          un: "universal",
          up: "upscale",
          ur: "url",
          us: "user",
          va: "variant",
          vd: "viewed",
          vi: "video",
          ve: "version",
          vw: "view",
          vr: "viewer",
          wd: "width",
          wa: "watch",
          wt: "waiting",
        });
      function e4(e) {
        var t = {};
        for (var i in e) e.hasOwnProperty(i) && (t[e[i]] = i);
        return t;
      }
      function e5(e) {
        var t = {},
          i = {};
        return (
          Object.keys(e).forEach(function (a) {
            var r = !1;
            if (e.hasOwnProperty(a) && void 0 !== e[a]) {
              var n = a.split("_"),
                s = n[0],
                o = e2[s];
              (o ||
                (j.info("Data key word `" + n[0] + "` not expected in " + a),
                (o = s + "_")),
                n.splice(1).forEach(function (e) {
                  ("url" === e && (r = !0),
                    e3[e]
                      ? (o += e3[e])
                      : Number.isInteger(Number(e))
                        ? (o += e)
                        : (j.info(
                            "Data key word `" + e + "` not expected in " + a,
                          ),
                          (o += "_" + e + "_")));
                }),
                r ? (i[o] = e[a]) : (t[o] = e[a]));
            }
          }),
          Object.assign(t, i)
        );
      }
      var e9 = E(b()),
        e8 = E(N()),
        e6 = {
          maxBeaconSize: 300,
          maxQueueLength: 3600,
          baseTimeBetweenBeacons: 1e4,
          maxPayloadKBSize: 500,
        },
        e7 = ["hb", "requestcompleted", "requestfailed", "requestcanceled"],
        te = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          ((this._beaconUrl = e || "https://img.litix.io"),
            (this._eventQueue = []),
            (this._postInFlight = !1),
            (this._resendAfterPost = !1),
            (this._failureCount = 0),
            (this._sendTimeout = !1),
            (this._options = Object.assign({}, e6, t)));
        };
      ((te.prototype.queueEvent = function (e, t) {
        var i = Object.assign({}, t);
        return (
          (this._eventQueue.length <= this._options.maxQueueLength ||
            "eventrateexceeded" === e) &&
          (this._eventQueue.push(i),
          this._sendTimeout || this._startBeaconSending(),
          this._eventQueue.length <= this._options.maxQueueLength)
        );
      }),
        (te.prototype.flushEvents = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (e && 1 === this._eventQueue.length)
            return void this._eventQueue.pop();
          (this._eventQueue.length && this._sendBeaconQueue(),
            this._startBeaconSending());
        }),
        (te.prototype.destroy = function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          ((this.destroyed = !0),
            e ? this._clearBeaconQueue() : this.flushEvents(),
            e9.default.clearTimeout(this._sendTimeout));
        }),
        (te.prototype._clearBeaconQueue = function () {
          var e =
              this._eventQueue.length > this._options.maxBeaconSize
                ? this._eventQueue.length - this._options.maxBeaconSize
                : 0,
            t = this._eventQueue.slice(e);
          e > 0 &&
            Object.assign(
              t[t.length - 1],
              e5({ mux_view_message: "event queue truncated" }),
            );
          var i = this._createPayload(t);
          ta(this._beaconUrl, i, !0, function () {});
        }),
        (te.prototype._sendBeaconQueue = function () {
          var e = this;
          if (this._postInFlight) {
            this._resendAfterPost = !0;
            return;
          }
          var t = this._eventQueue.slice(0, this._options.maxBeaconSize);
          ((this._eventQueue = this._eventQueue.slice(
            this._options.maxBeaconSize,
          )),
            (this._postInFlight = !0));
          var i = this._createPayload(t),
            a = V.now();
          ta(this._beaconUrl, i, !1, function (i, r) {
            (r
              ? ((e._eventQueue = t.concat(e._eventQueue)),
                (e._failureCount += 1),
                j.info("Error sending beacon: " + r))
              : (e._failureCount = 0),
              (e._roundTripTime = V.now() - a),
              (e._postInFlight = !1),
              e._resendAfterPost &&
                ((e._resendAfterPost = !1),
                e._eventQueue.length > 0 && e._sendBeaconQueue()));
          });
        }),
        (te.prototype._getNextBeaconTime = function () {
          if (!this._failureCount) return this._options.baseTimeBetweenBeacons;
          var e = Math.pow(2, this._failureCount - 1);
          return (
            (1 + (e *= Math.random())) * this._options.baseTimeBetweenBeacons
          );
        }),
        (te.prototype._startBeaconSending = function () {
          var e = this;
          (e9.default.clearTimeout(this._sendTimeout),
            this.destroyed ||
              (this._sendTimeout = e9.default.setTimeout(function () {
                (e._eventQueue.length && e._sendBeaconQueue(),
                  e._startBeaconSending());
              }, this._getNextBeaconTime())));
        }),
        (te.prototype._createPayload = function (e) {
          var t = this,
            i = { transmission_timestamp: Math.round(V.now()) };
          this._roundTripTime && (i.rtt_ms = Math.round(this._roundTripTime));
          var a,
            r,
            n,
            s = function () {
              n =
                (a = JSON.stringify({ metadata: i, events: r || e })).length /
                1024;
            },
            o = function () {
              return n <= t._options.maxPayloadKBSize;
            };
          return (
            s(),
            o() ||
              (j.info(
                "Payload size is too big (" +
                  n +
                  " kb). Removing unnecessary events.",
              ),
              (r = e.filter(function (e) {
                return -1 === e7.indexOf(e.e);
              })),
              s()),
            o() ||
              (j.info(
                "Payload size still too big (" + n + " kb). Cropping fields..",
              ),
              r.forEach(function (e) {
                for (var t in e) {
                  var i = e[t];
                  "string" == typeof i &&
                    i.length > 51200 &&
                    (e[t] = i.substring(0, 51200));
                }
              }),
              s()),
            a
          );
        }));
      var tt,
        ti =
          "function" == typeof e8.default.exitPictureInPicture
            ? function (e) {
                return e.length <= 57344;
              }
            : function (e) {
                return !1;
              },
        ta = function (e, t, i, a) {
          if (
            i &&
            navigator &&
            navigator.sendBeacon &&
            navigator.sendBeacon(e, t)
          )
            return void a();
          if (e9.default.fetch)
            return void e9.default
              .fetch(e, {
                method: "POST",
                body: t,
                headers: { "Content-Type": "text/plain" },
                keepalive: ti(t),
              })
              .then(function (e) {
                return a(null, e.ok ? null : "Error");
              })
              .catch(function (e) {
                return a(null, e);
              });
          if (e9.default.XMLHttpRequest) {
            var r = new e9.default.XMLHttpRequest();
            ((r.onreadystatechange = function () {
              if (4 === r.readyState)
                return a(null, 200 !== r.status ? "error" : void 0);
            }),
              r.open("POST", e),
              r.setRequestHeader("Content-Type", "text/plain"),
              r.send(t));
            return;
          }
          a();
        },
        tr = [
          "env_key",
          "view_id",
          "view_sequence_number",
          "player_sequence_number",
          "beacon_domain",
          "player_playhead_time",
          "viewer_time",
          "mux_api_version",
          "event",
          "video_id",
          "player_instance_id",
          "player_error_code",
          "player_error_message",
          "player_error_context",
          "player_error_severity",
          "player_error_business_exception",
        ],
        tn = [
          "adplay",
          "adplaying",
          "adpause",
          "adfirstquartile",
          "admidpoint",
          "adthirdquartile",
          "adended",
          "adresponse",
          "adrequest",
        ],
        ts = ["ad_id", "ad_creative_id", "ad_universal_id"],
        to = ["viewstart", "error", "ended", "viewend"],
        tl = (function () {
          function e(t, i) {
            var a,
              r,
              n,
              s,
              o,
              l,
              d,
              u,
              c,
              h,
              m,
              p,
              E,
              b,
              f,
              g,
              _,
              y,
              T,
              A =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
            (X(this, e),
              et(this, "mux", void 0),
              et(this, "envKey", void 0),
              et(this, "options", void 0),
              et(this, "eventQueue", void 0),
              et(this, "sampleRate", void 0),
              et(this, "disableCookies", void 0),
              et(this, "respectDoNotTrack", void 0),
              et(this, "previousBeaconData", void 0),
              et(this, "lastEventTime", void 0),
              et(this, "rateLimited", void 0),
              et(this, "pageLevelData", void 0),
              et(this, "viewerData", void 0),
              (this.mux = t),
              (this.envKey = i),
              (this.options = A),
              (this.previousBeaconData = null),
              (this.lastEventTime = 0),
              (this.rateLimited = !1),
              (this.eventQueue = new te(
                ((a = this.envKey),
                (n = (r = this.options).beaconCollectionDomain),
                (s = r.beaconDomain),
                n
                  ? "https://" + n
                  : (a = a || "inferred").match(/^[a-z0-9]+$/)
                    ? "https://" + a + "." + (s || "litix.io")
                    : "https://img.litix.io/a.gif"),
              )),
              (this.sampleRate = null != (_ = this.options.sampleRate) ? _ : 1),
              (this.disableCookies =
                null != (y = this.options.disableCookies) && y),
              (this.respectDoNotTrack =
                null != (T = this.options.respectDoNotTrack) && T),
              (this.previousBeaconData = null),
              (this.lastEventTime = 0),
              (this.rateLimited = !1),
              (this.pageLevelData = {
                mux_api_version: this.mux.API_VERSION,
                mux_embed: this.mux.NAME,
                mux_embed_version: this.mux.VERSION,
                viewer_application_name:
                  null == (o = this.options.platform) ? void 0 : o.name,
                viewer_application_version:
                  null == (l = this.options.platform) ? void 0 : l.version,
                viewer_application_engine:
                  null == (d = this.options.platform) ? void 0 : d.layout,
                viewer_device_name:
                  null == (u = this.options.platform) ? void 0 : u.product,
                viewer_device_category: "",
                viewer_device_manufacturer:
                  null == (c = this.options.platform) ? void 0 : c.manufacturer,
                viewer_os_family:
                  null == (m = this.options.platform) || null == (h = m.os)
                    ? void 0
                    : h.family,
                viewer_os_architecture:
                  null == (E = this.options.platform) || null == (p = E.os)
                    ? void 0
                    : p.architecture,
                viewer_os_version:
                  null == (f = this.options.platform) || null == (b = f.os)
                    ? void 0
                    : b.version,
                viewer_connection_type: e0(),
                page_url:
                  null === eY.default ||
                  void 0 === eY.default ||
                  null == (g = eY.default.location)
                    ? void 0
                    : g.href,
              }),
              (this.viewerData = this.disableCookies ? {} : ez()));
          }
          return (
            ee(e, [
              {
                key: "send",
                value: function (e, t) {
                  if (!(!e || !(null != t && t.view_id))) {
                    if (this.respectDoNotTrack && Z())
                      return j.info(
                        "Not sending `" +
                          e +
                          "` because Do Not Track is enabled",
                      );
                    if (!t || "object" != typeof t)
                      return j.error(
                        "A data object was expected in send() but was not provided",
                      );
                    var i = this.disableCookies ? {} : eX(),
                      a = ec(
                        eu({}, this.pageLevelData, t, i, this.viewerData),
                        { event: e, env_key: this.envKey },
                      );
                    a.user_id &&
                      ((a.viewer_user_id = a.user_id), delete a.user_id);
                    var r,
                      n =
                        (null != (r = a.mux_sample_number) ? r : 0) >=
                        this.sampleRate,
                      s = e5(this._deduplicateBeaconData(e, a));
                    if (((this.lastEventTime = this.mux.utils.now()), n))
                      return j.info(
                        "Not sending event due to sample rate restriction",
                        e,
                        a,
                        s,
                      );
                    if (
                      (this.envKey ||
                        j.info(
                          "Missing environment key (envKey) - beacons will be dropped if the video source is not a valid mux video URL",
                          e,
                          a,
                          s,
                        ),
                      !this.rateLimited)
                    ) {
                      if (
                        (j.info("Sending event", e, a, s),
                        (this.rateLimited = !this.eventQueue.queueEvent(e, s)),
                        this.mux.WINDOW_UNLOADING && "viewend" === e)
                      )
                        this.eventQueue.destroy(!0);
                      else if (
                        (this.mux.WINDOW_HIDDEN && "hb" === e
                          ? this.eventQueue.flushEvents(!0)
                          : to.indexOf(e) >= 0 && this.eventQueue.flushEvents(),
                        this.rateLimited)
                      )
                        return (
                          (a.event = "eventrateexceeded"),
                          (s = e5(a)),
                          this.eventQueue.queueEvent(a.event, s),
                          j.error("Beaconing disabled due to rate limit.")
                        );
                    }
                  }
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.eventQueue.destroy(!1);
                },
              },
              {
                key: "_deduplicateBeaconData",
                value: function (e, t) {
                  var i = this,
                    a = {},
                    r = t.view_id;
                  if (
                    "-1" === r ||
                    "viewstart" === e ||
                    "viewend" === e ||
                    !this.previousBeaconData ||
                    this.mux.utils.now() - this.lastEventTime >= 6e5
                  )
                    ((a = eu({}, t)),
                      r && (this.previousBeaconData = a),
                      r && "viewend" === e && (this.previousBeaconData = null));
                  else {
                    var n = 0 === e.indexOf("request");
                    Object.entries(t).forEach(function (t) {
                      var r = U(t, 2),
                        s = r[0],
                        o = r[1];
                      i.previousBeaconData &&
                        (o !== i.previousBeaconData[s] ||
                          tr.indexOf(s) > -1 ||
                          i.objectHasChanged(
                            n,
                            s,
                            o,
                            i.previousBeaconData[s],
                          ) ||
                          i.eventRequiresKey(e, s)) &&
                        ((a[s] = o), (i.previousBeaconData[s] = o));
                    });
                  }
                  return a;
                },
              },
              {
                key: "objectHasChanged",
                value: function (e, t, i, a) {
                  return (
                    !!e &&
                    0 === t.indexOf("request_") &&
                    ("request_response_headers" === t ||
                      "object" != typeof i ||
                      "object" != typeof a ||
                      Object.keys(i || {}).length !==
                        Object.keys(a || {}).length)
                  );
                },
              },
              {
                key: "eventRequiresKey",
                value: function (e, t) {
                  return !!(
                    ("renditionchange" === e &&
                      0 === t.indexOf("video_source_")) ||
                    (ts.includes(t) && tn.includes(e))
                  );
                },
              },
            ]),
            e
          );
        })(),
        td = function e(t) {
          X(this, e);
          var i = 0,
            a = 0,
            r = 0,
            n = 0,
            s = 0,
            o = 0,
            l = 0;
          (t.on("requestcompleted", function (e, o) {
            var l,
              d,
              u = o.request_start,
              c = o.request_response_start,
              h = o.request_response_end,
              m = o.request_bytes_loaded;
            if (
              (n++,
              c
                ? ((l = c - (null != u ? u : 0)), (d = (null != h ? h : 0) - c))
                : (d = (null != h ? h : 0) - (null != u ? u : 0)),
              d > 0 && m && m > 0)
            ) {
              var p = (m / d) * 8e3;
              (s++,
                (a += m),
                (r += d),
                (t.data.view_min_request_throughput = Math.min(
                  t.data.view_min_request_throughput || 1 / 0,
                  p,
                )),
                (t.data.view_average_request_throughput = (a / r) * 8e3),
                (t.data.view_request_count = n),
                l > 0 &&
                  ((i += l),
                  (t.data.view_max_request_latency = Math.max(
                    t.data.view_max_request_latency || 0,
                    l,
                  )),
                  (t.data.view_average_request_latency = i / s)));
            }
          }),
            t.on("requestfailed", function (e, i) {
              (n++,
                o++,
                (t.data.view_request_count = n),
                (t.data.view_request_failed_count = o));
            }),
            t.on("requestcanceled", function (e, i) {
              (n++,
                l++,
                (t.data.view_request_count = n),
                (t.data.view_request_canceled_count = l));
            }));
        },
        tu = function e(t) {
          var i = this;
          (X(this, e),
            et(this, "_lastEventTime", void 0),
            t.on("before*", function (e, a) {
              var r = a.viewer_time,
                n = V.now(),
                s = i._lastEventTime;
              if (((i._lastEventTime = n), s && n - s > 36e5)) {
                var o = Object.keys(t.data).reduce(function (e, i) {
                  return 0 === i.indexOf("video_")
                    ? Object.assign(e, et({}, i, t.data[i]))
                    : e;
                }, {});
                t.mux.log.info(
                  "Received event after at least an hour inactivity, creating a new view",
                );
                var l = t.playbackHeartbeat._playheadShouldBeProgressing;
                (t._resetView(Object.assign({ viewer_time: r }, o)),
                  (t.playbackHeartbeat._playheadShouldBeProgressing = l),
                  t.playbackHeartbeat._playheadShouldBeProgressing &&
                    "play" !== e.type &&
                    "adbreakstart" !== e.type &&
                    (t.emit("play", { viewer_time: r }),
                    "playing" !== e.type &&
                      t.emit("playing", { viewer_time: r })));
              }
            }));
        },
        tc = [
          "viewstart",
          "ended",
          "loadstart",
          "pause",
          "play",
          "playing",
          "ratechange",
          "waiting",
          "adplay",
          "adpause",
          "adended",
          "aderror",
          "adplaying",
          "adrequest",
          "adresponse",
          "adbreakstart",
          "adbreakend",
          "adfirstquartile",
          "admidpoint",
          "adthirdquartile",
          "rebufferstart",
          "rebufferend",
          "seeked",
          "error",
          "hb",
          "requestcompleted",
          "requestfailed",
          "requestcanceled",
          "renditionchange",
        ],
        th = new Set(["requestcompleted", "requestfailed", "requestcanceled"]),
        tm = (function (e) {
          if ("function" != typeof e && null !== e)
            throw TypeError(
              "Super expression must either be null or a function",
            );
          ((a.prototype = Object.create(e && e.prototype, {
            constructor: { value: a, writable: !0, configurable: !0 },
          })),
            e && er(a, e));
          var t,
            i =
              ((t = (function () {
                if (
                  "undefined" == typeof Reflect ||
                  !Reflect.construct ||
                  Reflect.construct.sham
                )
                  return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return (
                    Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {}),
                    ),
                    !0
                  );
                } catch (e) {
                  return !1;
                }
              })()),
              function () {
                var e,
                  i = ei(a);
                return (
                  (e = t
                    ? Reflect.construct(i, arguments, ei(this).constructor)
                    : i.apply(this, arguments)),
                  e && ("object" === _(e) || "function" == typeof e)
                    ? e
                    : z(this)
                );
              });
          function a(e, t, r) {
            (X(this, a),
              et(z((n = i.call(this))), "DOM_CONTENT_LOADED_EVENT_END", void 0),
              et(z(n), "NAVIGATION_START", void 0),
              et(z(n), "_destroyed", void 0),
              et(z(n), "_heartBeatTimeout", void 0),
              et(z(n), "adTracker", void 0),
              et(z(n), "dashjs", void 0),
              et(z(n), "data", void 0),
              et(z(n), "disablePlayheadRebufferTracking", void 0),
              et(z(n), "disableRebufferTracking", void 0),
              et(z(n), "errorTracker", void 0),
              et(z(n), "errorTranslator", void 0),
              et(z(n), "emitTranslator", void 0),
              et(z(n), "getAdData", void 0),
              et(z(n), "getPlayheadTime", void 0),
              et(z(n), "getStateData", void 0),
              et(z(n), "stateDataTranslator", void 0),
              et(z(n), "hlsjs", void 0),
              et(z(n), "id", void 0),
              et(z(n), "longResumeTracker", void 0),
              et(z(n), "minimumRebufferDuration", void 0),
              et(z(n), "mux", void 0),
              et(z(n), "playbackEventDispatcher", void 0),
              et(z(n), "playbackHeartbeat", void 0),
              et(z(n), "playbackHeartbeatTime", void 0),
              et(z(n), "playheadTime", void 0),
              et(z(n), "seekingTracker", void 0),
              et(z(n), "sustainedRebufferThreshold", void 0),
              et(z(n), "watchTimeTracker", void 0),
              et(z(n), "currentFragmentPDT", void 0),
              et(z(n), "currentFragmentStart", void 0),
              (n.DOM_CONTENT_LOADED_EVENT_END = el.domContentLoadedEventEnd()),
              (n.NAVIGATION_START = el.navigationStart()),
              (n.mux = e),
              (n.id = t),
              null != r &&
                r.beaconDomain &&
                n.mux.log.warn(
                  "The `beaconDomain` setting has been deprecated in favor of `beaconCollectionDomain`. Please change your integration to use `beaconCollectionDomain` instead of `beaconDomain`.",
                ),
              ((r = Object.assign(
                {
                  debug: !1,
                  minimumRebufferDuration: 250,
                  sustainedRebufferThreshold: 1e3,
                  playbackHeartbeatTime: 25,
                  beaconDomain: "litix.io",
                  sampleRate: 1,
                  disableCookies: !1,
                  respectDoNotTrack: !1,
                  disableRebufferTracking: !1,
                  disablePlayheadRebufferTracking: !1,
                  errorTranslator: function (e) {
                    return e;
                  },
                  emitTranslator: function () {
                    for (
                      var e = arguments.length, t = Array(e), i = 0;
                      i < e;
                      i++
                    )
                      t[i] = arguments[i];
                    return t;
                  },
                  stateDataTranslator: function (e) {
                    return e;
                  },
                },
                r,
              )).data = r.data || {}),
              r.data.property_key &&
                ((r.data.env_key = r.data.property_key),
                delete r.data.property_key),
              (j.level = r.debug ? G.DEBUG : G.WARN),
              (n.getPlayheadTime = r.getPlayheadTime),
              (n.getStateData =
                r.getStateData ||
                function () {
                  return {};
                }),
              (n.getAdData = r.getAdData || function () {}),
              (n.minimumRebufferDuration = r.minimumRebufferDuration),
              (n.sustainedRebufferThreshold = r.sustainedRebufferThreshold),
              (n.playbackHeartbeatTime = r.playbackHeartbeatTime),
              (n.disableRebufferTracking = r.disableRebufferTracking),
              n.disableRebufferTracking &&
                n.mux.log.warn(
                  "Disabling rebuffer tracking. This should only be used in specific circumstances as a last resort when your player is known to unreliably track rebuffering.",
                ),
              (n.disablePlayheadRebufferTracking =
                r.disablePlayheadRebufferTracking),
              (n.errorTranslator = r.errorTranslator),
              (n.emitTranslator = r.emitTranslator),
              (n.stateDataTranslator = r.stateDataTranslator),
              (n.playbackEventDispatcher = new tl(e, r.data.env_key, r)),
              (n.data = {
                player_instance_id: F(),
                mux_sample_rate: r.sampleRate,
                beacon_domain: r.beaconCollectionDomain || r.beaconDomain,
              }),
              (n.data.view_sequence_number = 1),
              (n.data.player_sequence_number = 1));
            var n,
              s = function () {
                void 0 === this.data.view_start &&
                  ((this.data.view_start = this.mux.utils.now()),
                  this.emit("viewstart"));
              }.bind(z(n));
            if (
              (n.on("viewinit", function (e, t) {
                (this._resetVideoData(),
                  this._resetViewData(),
                  this._resetErrorData(),
                  this._updateStateData(),
                  Object.assign(this.data, t),
                  this._initializeViewData(),
                  this.one("play", s),
                  this.one("adbreakstart", s));
              }),
              n.on("videochange", function (e, t) {
                this._resetView(t);
              }),
              n.on("programchange", function (e, t) {
                (this.data.player_is_paused &&
                  this.mux.log.warn(
                    "The `programchange` event is intended to be used when the content changes mid playback without the video source changing, however the video is not currently playing. If the video source is changing please use the videochange event otherwise you will lose startup time information.",
                  ),
                  this._resetView(
                    Object.assign(t, { view_program_changed: !0 }),
                  ),
                  s(),
                  this.emit("play"),
                  this.emit("playing"));
              }),
              n.on("fragmentchange", function (e, t) {
                ((this.currentFragmentPDT = t.currentFragmentPDT),
                  (this.currentFragmentStart = t.currentFragmentStart));
              }),
              n.on("destroy", n.destroy),
              "undefined" != typeof window &&
                "function" == typeof window.addEventListener &&
                "function" == typeof window.removeEventListener)
            ) {
              var o = function () {
                var e = void 0 !== n.data.view_start;
                ((n.mux.WINDOW_HIDDEN = "hidden" === document.visibilityState),
                  e &&
                    n.mux.WINDOW_HIDDEN &&
                    (n.data.player_is_paused || n.emit("hb")));
              };
              window.addEventListener("visibilitychange", o, !1);
              var l = function (e) {
                e.persisted || n.destroy();
              };
              (window.addEventListener("pagehide", l, !1),
                n.on("destroy", function () {
                  (window.removeEventListener("visibilitychange", o),
                    window.removeEventListener("pagehide", l));
                }));
            }
            return (
              n.on("playerready", function (e, t) {
                Object.assign(this.data, t);
              }),
              tc.forEach(function (e) {
                (n.on(e, function (t, i) {
                  (0 !== e.indexOf("ad") && this._updateStateData(),
                    Object.assign(this.data, i),
                    this._sanitizeData());
                }),
                  n.on("after" + e, function () {
                    ("error" !== e || this.errorTracker.viewErrored) &&
                      this.send(e);
                  }));
              }),
              n.on("viewend", function (e, t) {
                Object.assign(n.data, t);
              }),
              n.one("playerready", function (e) {
                var t = this.mux.utils.now();
                (this.data.player_init_time &&
                  (this.data.player_startup_time =
                    t - this.data.player_init_time),
                  !this.mux.PLAYER_TRACKED &&
                    this.NAVIGATION_START &&
                    ((this.mux.PLAYER_TRACKED = !0),
                    (this.data.player_init_time ||
                      this.DOM_CONTENT_LOADED_EVENT_END) &&
                      (this.data.page_load_time =
                        Math.min(
                          this.data.player_init_time || 1 / 0,
                          this.DOM_CONTENT_LOADED_EVENT_END || 1 / 0,
                        ) - this.NAVIGATION_START)),
                  this.send("playerready"),
                  delete this.data.player_startup_time,
                  delete this.data.page_load_time);
              }),
              (n.longResumeTracker = new tu(z(n))),
              (n.errorTracker = new eL(z(n))),
              new eK(z(n)),
              (n.seekingTracker = new eW(z(n))),
              (n.playheadTime = new eN(z(n))),
              (n.playbackHeartbeat = new eD(z(n))),
              new eB(z(n)),
              (n.watchTimeTracker = new eM(z(n))),
              new eO(z(n)),
              (n.adTracker = new eF(z(n))),
              new eP(z(n)),
              new ex(z(n)),
              new eU(z(n)),
              new e$(z(n)),
              new td(z(n)),
              r.hlsjs && n.addHLSJS(r),
              r.dashjs && n.addDashJS(r),
              n.emit("viewinit", r.data),
              n
            );
          }
          return (
            ee(a, [
              {
                key: "emit",
                value: function (e, t) {
                  var i,
                    r = Object.assign({ viewer_time: this.mux.utils.now() }, t),
                    n = [e, r];
                  if (this.emitTranslator)
                    try {
                      n = this.emitTranslator(e, r);
                    } catch (e) {
                      this.mux.log.warn(
                        "Exception in emit translator callback.",
                        e,
                      );
                    }
                  null != n &&
                    n.length &&
                    (i = ea(ei(a.prototype), "emit", this)).call.apply(
                      i,
                      [this].concat(Y(n)),
                    );
                },
              },
              {
                key: "destroy",
                value: function () {
                  this._destroyed ||
                    ((this._destroyed = !0),
                    void 0 !== this.data.view_start &&
                      (this.emit("viewend"), this.send("viewend")),
                    this.playbackEventDispatcher.destroy(),
                    this.removeHLSJS(),
                    this.removeDashJS(),
                    window.clearTimeout(this._heartBeatTimeout));
                },
              },
              {
                key: "send",
                value: function (e) {
                  if (this.data.view_id) {
                    var t = Object.assign({}, this.data);
                    if (
                      (void 0 === t.video_source_is_live &&
                        (t.player_source_duration === 1 / 0 ||
                        t.video_source_duration === 1 / 0
                          ? (t.video_source_is_live = !0)
                          : (t.player_source_duration > 0 ||
                              t.video_source_duration > 0) &&
                            (t.video_source_is_live = !1)),
                      t.video_source_is_live ||
                        [
                          "player_program_time",
                          "player_manifest_newest_program_time",
                          "player_live_edge_program_time",
                          "player_program_time",
                          "video_holdback",
                          "video_part_holdback",
                          "video_target_duration",
                          "video_part_target_duration",
                        ].forEach(function (e) {
                          t[e] = void 0;
                        }),
                      (t.video_source_url =
                        t.video_source_url || t.player_source_url),
                      t.video_source_url)
                    ) {
                      var i = U(es(t.video_source_url), 2),
                        a = i[0];
                      ((t.video_source_domain = i[1]),
                        (t.video_source_hostname = a));
                    }
                    (delete t.ad_request_id,
                      this.playbackEventDispatcher.send(e, t),
                      this.data.view_sequence_number++,
                      this.data.player_sequence_number++,
                      th.has(e) || this._restartHeartBeat(),
                      "viewend" === e && delete this.data.view_id);
                  }
                },
              },
              {
                key: "_resetView",
                value: function (e) {
                  (this.emit("viewend"),
                    this.send("viewend"),
                    this.emit("viewinit", e));
                },
              },
              {
                key: "_updateStateData",
                value: function () {
                  var e = this.getStateData();
                  if ("function" == typeof this.stateDataTranslator)
                    try {
                      e = this.stateDataTranslator(e);
                    } catch (e) {
                      this.mux.log.warn(
                        "Exception in stateDataTranslator translator callback.",
                        e,
                      );
                    }
                  (Object.assign(this.data, e),
                    this.playheadTime._updatePlayheadTime(),
                    this._sanitizeData());
                },
              },
              {
                key: "_sanitizeData",
                value: function () {
                  var e = this;
                  ([
                    "player_width",
                    "player_height",
                    "video_source_width",
                    "video_source_height",
                    "player_playhead_time",
                    "video_source_bitrate",
                  ].forEach(function (t) {
                    var i = parseInt(e.data[t], 10);
                    e.data[t] = isNaN(i) ? void 0 : i;
                  }),
                    ["player_source_url", "video_source_url"].forEach(
                      function (t) {
                        if (e.data[t]) {
                          var i = e.data[t].toLowerCase();
                          (0 === i.indexOf("data:") ||
                            0 === i.indexOf("blob:")) &&
                            (e.data[t] = "MSE style URL");
                        }
                      },
                    ));
                },
              },
              {
                key: "_resetVideoData",
                value: function () {
                  var e = this;
                  Object.keys(this.data).forEach(function (t) {
                    0 === t.indexOf("video_") && delete e.data[t];
                  });
                },
              },
              {
                key: "_resetViewData",
                value: function () {
                  var e = this;
                  (Object.keys(this.data).forEach(function (t) {
                    0 === t.indexOf("view_") && delete e.data[t];
                  }),
                    (this.data.view_sequence_number = 1));
                },
              },
              {
                key: "_resetErrorData",
                value: function () {
                  (delete this.data.player_error_code,
                    delete this.data.player_error_message,
                    delete this.data.player_error_context,
                    delete this.data.player_error_severity,
                    delete this.data.player_error_business_exception);
                },
              },
              {
                key: "_initializeViewData",
                value: function () {
                  var e = this,
                    t = (this.data.view_id = F()),
                    i = function () {
                      t === e.data.view_id &&
                        ed(e.data, "player_view_count", 1);
                    };
                  this.data.player_is_paused ? this.one("play", i) : i();
                },
              },
              {
                key: "_restartHeartBeat",
                value: function () {
                  var e = this;
                  (window.clearTimeout(this._heartBeatTimeout),
                    (this._heartBeatTimeout = window.setTimeout(function () {
                      e.data.player_is_paused || e.emit("hb");
                    }, 1e4)));
                },
              },
              {
                key: "addHLSJS",
                value: function (e) {
                  return e.hlsjs
                    ? this.hlsjs
                      ? void this.mux.log.warn(
                          "An instance of HLS.js is already being monitored for this player.",
                        )
                      : void ((this.hlsjs = e.hlsjs),
                        eg(this.mux, this.id, e.hlsjs, {}, e.Hls || window.Hls))
                    : void this.mux.log.warn(
                        "You must pass a valid hlsjs instance in order to track it.",
                      );
                },
              },
              {
                key: "removeHLSJS",
                value: function () {
                  this.hlsjs && (e_(this.hlsjs), (this.hlsjs = void 0));
                },
              },
              {
                key: "addDashJS",
                value: function (e) {
                  return e.dashjs
                    ? this.dashjs
                      ? void this.mux.log.warn(
                          "An instance of Dash.js is already being monitored for this player.",
                        )
                      : void ((this.dashjs = e.dashjs),
                        ew(this.mux, this.id, e.dashjs))
                    : void this.mux.log.warn(
                        "You must pass a valid dashjs instance in order to track it.",
                      );
                },
              },
              {
                key: "removeDashJS",
                value: function () {
                  this.dashjs && (eS(this.dashjs), (this.dashjs = void 0));
                },
              },
            ]),
            a
          );
        })(eR),
        tp = E(N()),
        tv = [
          "loadstart",
          "pause",
          "play",
          "playing",
          "seeking",
          "seeked",
          "timeupdate",
          "ratechange",
          "stalled",
          "waiting",
          "error",
          "ended",
        ],
        tE = {
          1: "MEDIA_ERR_ABORTED",
          2: "MEDIA_ERR_NETWORK",
          3: "MEDIA_ERR_DECODE",
          4: "MEDIA_ERR_SRC_NOT_SUPPORTED",
        },
        tb = E(b());
      tb.default && tb.default.WeakMap && (tt = new WeakMap());
      var tf = {
          TARGET_DURATION: "#EXT-X-TARGETDURATION",
          PART_INF: "#EXT-X-PART-INF",
          SERVER_CONTROL: "#EXT-X-SERVER-CONTROL",
          INF: "#EXTINF",
          PROGRAM_DATE_TIME: "#EXT-X-PROGRAM-DATE-TIME",
          VERSION: "#EXT-X-VERSION",
          SESSION_DATA: "#EXT-X-SESSION-DATA",
        },
        tg = function (e) {
          return (
            (this.buffer = ""),
            (this.manifest = {
              segments: [],
              serverControl: {},
              sessionData: {},
            }),
            (this.currentUri = {}),
            this.process(e),
            this.manifest
          );
        };
      ((tg.prototype.process = function (e) {
        var t;
        for (
          this.buffer += e, t = this.buffer.indexOf("\n");
          t > -1;
          t = this.buffer.indexOf("\n")
        )
          (this.processLine(this.buffer.substring(0, t)),
            (this.buffer = this.buffer.substring(t + 1)));
      }),
        (tg.prototype.processLine = function (e) {
          var t = e.indexOf(":"),
            i = tS(e, t),
            a = i[0],
            r = 2 === i.length ? tT(i[1]) : void 0;
          if ("#" !== a[0])
            ((this.currentUri.uri = a),
              this.manifest.segments.push(this.currentUri),
              !this.manifest.targetDuration ||
                "duration" in this.currentUri ||
                (this.currentUri.duration = this.manifest.targetDuration),
              (this.currentUri = {}));
          else
            switch (a) {
              case tf.TARGET_DURATION:
                if (!isFinite(r) || r < 0) return;
                ((this.manifest.targetDuration = r), this.setHoldBack());
                break;
              case tf.PART_INF:
                (t_(this.manifest, i),
                  this.manifest.partInf.partTarget &&
                    (this.manifest.partTargetDuration =
                      this.manifest.partInf.partTarget),
                  this.setHoldBack());
                break;
              case tf.SERVER_CONTROL:
                (t_(this.manifest, i), this.setHoldBack());
                break;
              case tf.INF:
                0 === r
                  ? (this.currentUri.duration = 0.01)
                  : r > 0 && (this.currentUri.duration = r);
                break;
              case tf.PROGRAM_DATE_TIME:
                var n = new Date(r);
                (this.manifest.dateTimeString ||
                  ((this.manifest.dateTimeString = r),
                  (this.manifest.dateTimeObject = n)),
                  (this.currentUri.dateTimeString = r),
                  (this.currentUri.dateTimeObject = n));
                break;
              case tf.VERSION:
                t_(this.manifest, i);
                break;
              case tf.SESSION_DATA:
                var s = eE(tI(i[1]));
                Object.assign(this.manifest.sessionData, s);
            }
        }),
        (tg.prototype.setHoldBack = function () {
          var e = this.manifest,
            t = e.serverControl,
            i = e.targetDuration,
            a = e.partTargetDuration;
          if (t) {
            var r = "holdBack",
              n = "partHoldBack",
              s = i && 3 * i,
              o = a && 2 * a;
            (i && !t.hasOwnProperty(r) && (t[r] = s),
              s && t[r] < s && (t[r] = s),
              a && !t.hasOwnProperty(n) && (t[n] = 3 * a),
              a && t[n] < o && (t[n] = o));
          }
        }));
      var t_ = function (e, t) {
          var i,
            a = ty(t[0].replace("#EXT-X-", ""));
          (tw(t[1])
            ? ((i = {}), (i = Object.assign(tk(t[1]), i)))
            : (i = tT(t[1])),
            (e[a] = i));
        },
        ty = function (e) {
          return e.toLowerCase().replace(/-(\w)/g, function (e) {
            return e[1].toUpperCase();
          });
        },
        tT = function (e) {
          if ("yes" === e.toLowerCase() || "no" === e.toLowerCase())
            return "yes" === e.toLowerCase();
          var t = -1 !== e.indexOf(":") ? e : parseFloat(e);
          return isNaN(t) ? e : t;
        },
        tA = function (e) {
          var t = {},
            i = e.split("=");
          return (i.length > 1 && (t[ty(i[0])] = tT(i[1])), t);
        },
        tk = function (e) {
          for (var t = e.split(","), i = {}, a = 0; t.length > a; a++)
            i = Object.assign(tA(t[a]), i);
          return i;
        },
        tw = function (e) {
          return e.indexOf("=") > -1;
        },
        tS = function (e, t) {
          return -1 === t ? [e] : [e.substring(0, t), e.substring(t + 1)];
        },
        tI = function (e) {
          var t = {};
          if (e) {
            var i = e.search(",");
            return (
              [e.slice(0, i), e.slice(i + 1)].forEach(function (e, i) {
                for (
                  var a = e.replace(/['"]+/g, "").split("="), r = 0;
                  r < a.length;
                  r++
                )
                  ("DATA-ID" === a[r] && (t["DATA-ID"] = a[1 - r]),
                    "VALUE" === a[r] && (t.VALUE = a[1 - r]));
              }),
              { data: t }
            );
          }
        },
        tR = {
          safeCall: function (e, t, i, a) {
            var r = a;
            if (e && "function" == typeof e[t])
              try {
                r = e[t].apply(e, i);
              } catch (e) {
                j.info("safeCall error", e);
              }
            return r;
          },
          safeIncrement: ed,
          getComputedStyle: function (e, t) {
            var i;
            return e &&
              t &&
              tb.default &&
              "function" == typeof tb.default.getComputedStyle
              ? (tt && tt.has(e) && (i = tt.get(e)),
                i ||
                  ((i = tb.default.getComputedStyle(e, null)),
                  tt && tt.set(e, i)),
                i.getPropertyValue(t))
              : "";
          },
          secondsToMs: function (e) {
            return Math.floor(1e3 * e);
          },
          assign: Object.assign,
          headersStringToObject: ep,
          cdnHeadersToRequestId: ev,
          extractHostnameAndDomain: es,
          extractHostname: en,
          manifestParser: tg,
          generateShortID: q,
          generateUUID: F,
          now: V.now,
          findMediaElement: K,
        },
        tC = {},
        tD = function (e) {
          var t = arguments;
          "string" == typeof e
            ? tD.hasOwnProperty(e)
              ? B.default.setTimeout(function () {
                  ((t = Array.prototype.splice.call(t, 1)),
                    tD[e].apply(null, t));
                }, 0)
              : j.warn("`" + e + "` is an unknown task")
            : "function" == typeof e
              ? B.default.setTimeout(function () {
                  e(tD);
                }, 0)
              : j.warn("`" + e + "` is invalid.");
        },
        tL = {
          loaded: V.now(),
          NAME: "mux-embed",
          VERSION: "5.9.0",
          API_VERSION: "2.1",
          PLAYER_TRACKED: !1,
          monitor: function (e, t) {
            return (function (e, t, i) {
              var a = U(K(t), 3),
                r = a[0],
                n = a[1],
                s = a[2],
                o = e.log,
                l = e.utils.getComputedStyle,
                d = e.utils.secondsToMs;
              if (!r)
                return o.error(
                  "No element was found with the `" + n + "` query selector.",
                );
              if ("video" !== s && "audio" !== s)
                return o.error(
                  "The element of `" + n + "` was not a media element.",
                );
              (r.mux &&
                (r.mux.destroy(),
                delete r.mux,
                o.warn(
                  "Already monitoring this video element, replacing existing event listeners",
                )),
                ((i = Object.assign({ automaticErrorTracking: !0 }, i, {
                  getPlayheadTime: function () {
                    return d(r.currentTime);
                  },
                  getStateData: function () {
                    var e,
                      t,
                      i =
                        (null == (e = this.getPlayheadTime)
                          ? void 0
                          : e.call(this)) || d(r.currentTime),
                      a = this.hlsjs && this.hlsjs.url,
                      n =
                        this.dashjs &&
                        "function" == typeof this.dashjs.getSource &&
                        this.dashjs.getSource(),
                      s = {
                        player_is_paused: r.paused,
                        player_width: parseInt(l(r, "width")),
                        player_height: parseInt(l(r, "height")),
                        player_autoplay_on: r.autoplay,
                        player_preload_on: r.preload,
                        player_language_code: r.lang,
                        player_is_fullscreen:
                          tp.default &&
                          !!(
                            tp.default.fullscreenElement ||
                            tp.default.webkitFullscreenElement ||
                            tp.default.mozFullScreenElement ||
                            tp.default.msFullscreenElement
                          ),
                        video_poster_url: r.poster,
                        video_source_url: a || n || r.currentSrc,
                        video_source_duration: d(r.duration),
                        video_source_height: r.videoHeight,
                        video_source_width: r.videoWidth,
                        view_dropped_frame_count:
                          null == r || null == (t = r.getVideoPlaybackQuality)
                            ? void 0
                            : t.call(r).droppedVideoFrames,
                      };
                    if (r.getStartDate && i > 0) {
                      var o = r.getStartDate();
                      if (o && "function" == typeof o.getTime && o.getTime()) {
                        var u = o.getTime();
                        ((s.player_program_time = u + i),
                          r.seekable.length > 0 &&
                            (s.player_live_edge_program_time =
                              u + r.seekable.end(r.seekable.length - 1)));
                      }
                    }
                    return s;
                  },
                })).data = Object.assign(
                  {
                    player_software: "HTML5 Video Element",
                    player_mux_plugin_name: "VideoElementMonitor",
                    player_mux_plugin_version: e.VERSION,
                  },
                  i.data,
                )),
                (r.mux = r.mux || {}),
                (r.mux.deleted = !1),
                (r.mux.emit = function (t, i) {
                  e.emit(n, t, i);
                }),
                (r.mux.updateData = function (e) {
                  r.mux.emit("hb", e);
                }));
              var u = function () {
                o.error(
                  "The monitor for this video element has already been destroyed.",
                );
              };
              ((r.mux.destroy = function () {
                (Object.keys(r.mux.listeners).forEach(function (e) {
                  r.removeEventListener(e, r.mux.listeners[e], !1);
                }),
                  delete r.mux.listeners,
                  (r.mux.destroy = u),
                  (r.mux.swapElement = u),
                  (r.mux.emit = u),
                  (r.mux.addHLSJS = u),
                  (r.mux.addDashJS = u),
                  (r.mux.removeHLSJS = u),
                  (r.mux.removeDashJS = u),
                  (r.mux.updateData = u),
                  (r.mux.setEmitTranslator = u),
                  (r.mux.setStateDataTranslator = u),
                  (r.mux.setGetPlayheadTime = u),
                  (r.mux.deleted = !0),
                  e.emit(n, "destroy"));
              }),
                (r.mux.swapElement = function (t) {
                  var i = U(K(t), 3),
                    a = i[0],
                    n = i[1],
                    s = i[2];
                  return a
                    ? "video" !== s && "audio" !== s
                      ? e.log.error(
                          "The element of `" + n + "` was not a media element.",
                        )
                      : void ((a.muxId = r.muxId),
                        delete r.muxId,
                        (a.mux = a.mux || {}),
                        (a.mux.listeners = Object.assign({}, r.mux.listeners)),
                        delete r.mux.listeners,
                        Object.keys(a.mux.listeners).forEach(function (e) {
                          (r.removeEventListener(e, a.mux.listeners[e], !1),
                            a.addEventListener(e, a.mux.listeners[e], !1));
                        }),
                        (a.mux.swapElement = r.mux.swapElement),
                        (a.mux.destroy = r.mux.destroy),
                        delete r.mux,
                        (r = a))
                    : e.log.error(
                        "No element was found with the `" +
                          n +
                          "` query selector.",
                      );
                }),
                (r.mux.addHLSJS = function (t) {
                  e.addHLSJS(n, t);
                }),
                (r.mux.addDashJS = function (t) {
                  e.addDashJS(n, t);
                }),
                (r.mux.removeHLSJS = function () {
                  e.removeHLSJS(n);
                }),
                (r.mux.removeDashJS = function () {
                  e.removeDashJS(n);
                }),
                (r.mux.setEmitTranslator = function (t) {
                  e.setEmitTranslator(n, t);
                }),
                (r.mux.setStateDataTranslator = function (t) {
                  e.setStateDataTranslator(n, t);
                }),
                (r.mux.setGetPlayheadTime = function (t) {
                  (t || (t = i.getPlayheadTime), e.setGetPlayheadTime(n, t));
                }),
                e.init(n, i),
                e.emit(n, "playerready"),
                r.paused ||
                  (e.emit(n, "play"), r.readyState > 2 && e.emit(n, "playing")),
                (r.mux.listeners = {}),
                tv.forEach(function (t) {
                  ("error" !== t || i.automaticErrorTracking) &&
                    ((r.mux.listeners[t] = function () {
                      var i = {};
                      if ("error" === t) {
                        if (!r.error || 1 === r.error.code) return;
                        ((i.player_error_code = r.error.code),
                          (i.player_error_message =
                            tE[r.error.code] || r.error.message));
                      }
                      e.emit(n, t, i);
                    }),
                    r.addEventListener(t, r.mux.listeners[t], !1));
                }));
            })(tD, e, t);
          },
          destroyMonitor: function (e) {
            var t = U(K(e), 1)[0];
            t && t.mux && "function" == typeof t.mux.destroy
              ? t.mux.destroy()
              : j.error(
                  "A video element monitor for `" +
                    e +
                    "` has not been initialized via `mux.monitor`.",
                );
          },
          addHLSJS: function (e, t) {
            var i = $(e);
            tC[i]
              ? tC[i].addHLSJS(t)
              : j.error("A monitor for `" + i + "` has not been initialized.");
          },
          addDashJS: function (e, t) {
            var i = $(e);
            tC[i]
              ? tC[i].addDashJS(t)
              : j.error("A monitor for `" + i + "` has not been initialized.");
          },
          removeHLSJS: function (e) {
            var t = $(e);
            tC[t]
              ? tC[t].removeHLSJS()
              : j.error("A monitor for `" + t + "` has not been initialized.");
          },
          removeDashJS: function (e) {
            var t = $(e);
            tC[t]
              ? tC[t].removeDashJS()
              : j.error("A monitor for `" + t + "` has not been initialized.");
          },
          init: function (e, t) {
            Z() &&
              t &&
              t.respectDoNotTrack &&
              j.info(
                "The browser's Do Not Track flag is enabled - Mux beaconing is disabled.",
              );
            var i = $(e);
            tC[i] = new tm(tD, i, t);
          },
          emit: function (e, t, i) {
            var a = $(e);
            tC[a]
              ? (tC[a].emit(t, i), "destroy" === t && delete tC[a])
              : j.error("A monitor for `" + a + "` has not been initialized.");
          },
          updateData: function (e, t) {
            var i = $(e);
            tC[i]
              ? tC[i].emit("hb", t)
              : j.error("A monitor for `" + i + "` has not been initialized.");
          },
          setEmitTranslator: function (e, t) {
            var i = $(e);
            tC[i]
              ? (tC[i].emitTranslator = t)
              : j.error("A monitor for `" + i + "` has not been initialized.");
          },
          setStateDataTranslator: function (e, t) {
            var i = $(e);
            tC[i]
              ? (tC[i].stateDataTranslator = t)
              : j.error("A monitor for `" + i + "` has not been initialized.");
          },
          setGetPlayheadTime: function (e, t) {
            var i = $(e);
            tC[i]
              ? (tC[i].getPlayheadTime = t)
              : j.error("A monitor for `" + i + "` has not been initialized.");
          },
          checkDoNotTrack: Z,
          log: j,
          utils: tR,
          events: {
            PLAYER_READY: "playerready",
            VIEW_INIT: "viewinit",
            VIDEO_CHANGE: "videochange",
            PLAY: "play",
            PAUSE: "pause",
            PLAYING: "playing",
            TIME_UPDATE: "timeupdate",
            SEEKING: "seeking",
            SEEKED: "seeked",
            REBUFFER_START: "rebufferstart",
            REBUFFER_END: "rebufferend",
            ERROR: "error",
            ENDED: "ended",
            RENDITION_CHANGE: "renditionchange",
            ORIENTATION_CHANGE: "orientationchange",
            AD_REQUEST: "adrequest",
            AD_RESPONSE: "adresponse",
            AD_BREAK_START: "adbreakstart",
            AD_PLAY: "adplay",
            AD_PLAYING: "adplaying",
            AD_PAUSE: "adpause",
            AD_FIRST_QUARTILE: "adfirstquartile",
            AD_MID_POINT: "admidpoint",
            AD_THIRD_QUARTILE: "adthirdquartile",
            AD_ENDED: "adended",
            AD_BREAK_END: "adbreakend",
            AD_ERROR: "aderror",
            REQUEST_COMPLETED: "requestcompleted",
            REQUEST_FAILED: "requestfailed",
            REQUEST_CANCELLED: "requestcanceled",
            HEARTBEAT: "hb",
            DESTROY: "destroy",
          },
          WINDOW_HIDDEN: !1,
          WINDOW_UNLOADING: !1,
        };
      (Object.assign(tD, tL),
        void 0 !== B.default &&
          "function" == typeof B.default.addEventListener &&
          B.default.addEventListener(
            "pagehide",
            function (e) {
              e.persisted || (tD.WINDOW_UNLOADING = !0);
            },
            !1,
          ));
      var tM = i(9588).Ay,
        tO = { VIDEO: "video", DRM: "drm" },
        tN = {
          NETWORK_OFFLINE: 2000002,
          NETWORK_UNKNOWN_ERROR: 2e6,
          NETWORK_INVALID_URL: 24e5,
          NETWORK_NOT_FOUND: 2404e3,
          NETWORK_NOT_READY: 2412e3,
          NETWORK_TOKEN_MISSING: 2403201,
          NETWORK_TOKEN_MALFORMED: 2412202,
          NETWORK_TOKEN_EXPIRED: 2403210,
          NETWORK_TOKEN_AUD_MISSING: 2403221,
          NETWORK_TOKEN_AUD_MISMATCH: 2403222,
          NETWORK_TOKEN_SUB_MISMATCH: 2403232,
          ENCRYPTED_ERROR: 5e6,
          ENCRYPTED_UNSUPPORTED_KEY_SYSTEM: 5000001,
          ENCRYPTED_GENERATE_REQUEST_FAILED: 5000002,
          ENCRYPTED_UPDATE_LICENSE_FAILED: 5000003,
          ENCRYPTED_UPDATE_SERVER_CERT_FAILED: 5000004,
          ENCRYPTED_CDM_ERROR: 5000005,
          ENCRYPTED_OUTPUT_RESTRICTED: 5000006,
          ENCRYPTED_MISSING_TOKEN: 5000002,
        },
        tx = (e) => (e === tO.VIDEO ? "playback" : e),
        tP = class e extends Error {
          constructor(t, i = e.MEDIA_ERR_CUSTOM, a, r) {
            var n;
            (super(t),
              (this.name = "MediaError"),
              (this.code = i),
              (this.context = r),
              (this.fatal =
                null != a
                  ? a
                  : i >= e.MEDIA_ERR_NETWORK && i <= e.MEDIA_ERR_ENCRYPTED),
              this.message ||
                (this.message =
                  null != (n = e.defaultMessages[this.code]) ? n : ""));
          }
        };
      ((tP.MEDIA_ERR_ABORTED = 1),
        (tP.MEDIA_ERR_NETWORK = 2),
        (tP.MEDIA_ERR_DECODE = 3),
        (tP.MEDIA_ERR_SRC_NOT_SUPPORTED = 4),
        (tP.MEDIA_ERR_ENCRYPTED = 5),
        (tP.MEDIA_ERR_CUSTOM = 100),
        (tP.defaultMessages = {
          1: "You aborted the media playback",
          2: "A network error caused the media download to fail.",
          3: "A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.",
          4: "An unsupported error occurred. The server or network failed, or your browser does not support this format.",
          5: "The media is encrypted and there are no keys to decrypt it.",
        }));
      var tU = (e) => null == e,
        tB = (e, t) => !tU(t) && e in t,
        tW = { ANY: "any", MUTED: "muted" },
        tH = { ON_DEMAND: "on-demand", LIVE: "live", UNKNOWN: "unknown" },
        tV = { MSE: "mse", NATIVE: "native" },
        tF = { HEADER: "header", QUERY: "query", NONE: "none" },
        tq = Object.values(tF),
        t$ = { M3U8: "application/vnd.apple.mpegurl", MP4: "video/mp4" },
        tK = { HLS: t$.M3U8 };
      (Object.keys(tK), [...Object.values(t$)]);
      var tY = { code: "en" },
        tG = (e, t, i, a, r = e) => {
          (r.addEventListener(t, i, a),
            e.addEventListener(
              "teardown",
              () => {
                r.removeEventListener(t, i);
              },
              { once: !0 },
            ));
        },
        tj = (e) => {
          let t = e.indexOf("?");
          return t < 0 ? [e] : [e.slice(0, t), e.slice(t)];
        },
        tQ = (e) => {
          let { type: t } = e;
          if (t) {
            let e = t.toUpperCase();
            return tB(e, tK) ? tK[e] : t;
          }
          return tX(e);
        },
        tZ = (e) => ("VOD" === e ? tH.ON_DEMAND : tH.LIVE),
        tz = (e) =>
          "EVENT" === e
            ? Number.POSITIVE_INFINITY
            : "VOD" === e
              ? Number.NaN
              : 0,
        tX = (e) => {
          let { src: t } = e;
          if (!t) return "";
          let i = "";
          try {
            i = new URL(t).pathname;
          } catch {
            console.error("invalid url");
          }
          let a = i.lastIndexOf(".");
          if (a < 0) return t0(e) ? t$.M3U8 : "";
          let r = i.slice(a + 1).toUpperCase();
          return tB(r, t$) ? t$[r] : "";
        },
        tJ = "mux.com",
        t0 = ({ src: e, customDomain: t = tJ }) => {
          let i;
          try {
            i = new URL(`${e}`);
          } catch {
            return !1;
          }
          let a = "https:" === i.protocol,
            r = i.hostname === `stream.${t}`.toLowerCase(),
            n = i.pathname.split("/"),
            s = 2 === n.length,
            o = !(null != n && n[1].includes("."));
          return a && r && s && o;
        },
        t1 = (e) => {
          let t = (null != e ? e : "").split(".")[1];
          if (t)
            try {
              let e = t.replace(/-/g, "+").replace(/_/g, "/"),
                i = decodeURIComponent(
                  atob(e)
                    .split("")
                    .map(function (e) {
                      return (
                        "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
                      );
                    })
                    .join(""),
                );
              return JSON.parse(i);
            } catch {
              return;
            }
        },
        t2 = ({ exp: e }, t = Date.now()) => !e || 1e3 * e < t,
        t3 = ({ sub: e }, t) => e !== t,
        t4 = ({ aud: e }, t) => !e,
        t5 = ({ aud: e }, t) => e !== t;
      function t9(e, t = !0) {
        var i;
        return new t8(
          t && null != (i = null == tY ? void 0 : tY[e]) ? i : e,
          t ? tY.code : "en",
        );
      }
      var t8 = class {
          constructor(e, t = ((e) => (null != (e = tY) ? e : "en"))()) {
            ((this.message = e), (this.locale = t));
          }
          format(e) {
            return this.message.replace(/\{(\w+)\}/g, (t, i) => {
              var a;
              return null != (a = e[i]) ? a : "";
            });
          }
          toString() {
            return this.message;
          }
        },
        t6 = Object.values(tW),
        t7 = (e) =>
          "boolean" == typeof e || ("string" == typeof e && t6.includes(e)),
        ie = (e, t, i) => {
          let { autoplay: a } = e,
            r = !1,
            n = !1,
            s = t7(a) ? a : !!a,
            o = () => {
              r ||
                tG(
                  t,
                  "playing",
                  () => {
                    r = !0;
                  },
                  { once: !0 },
                );
            };
          if (
            (o(),
            tG(
              t,
              "loadstart",
              () => {
                ((r = !1), o(), it(t, s));
              },
              { once: !0 },
            ),
            tG(
              t,
              "loadstart",
              () => {
                (i ||
                  (n =
                    e.streamType && e.streamType !== tH.UNKNOWN
                      ? e.streamType === tH.LIVE
                      : !Number.isFinite(t.duration)),
                  it(t, s));
              },
              { once: !0 },
            ),
            i &&
              i.once(tM.Events.LEVEL_LOADED, (t, i) => {
                var a;
                n =
                  e.streamType && e.streamType !== tH.UNKNOWN
                    ? e.streamType === tH.LIVE
                    : null != (a = i.details.live) && a;
              }),
            !s)
          ) {
            let a = () => {
              !n ||
                Number.isFinite(e.startTime) ||
                (null != i && i.liveSyncPosition
                  ? (t.currentTime = i.liveSyncPosition)
                  : Number.isFinite(t.seekable.end(0)) &&
                    (t.currentTime = t.seekable.end(0)));
            };
            i &&
              tG(
                t,
                "play",
                () => {
                  "metadata" === t.preload
                    ? i.once(tM.Events.LEVEL_UPDATED, a)
                    : a();
                },
                { once: !0 },
              );
          }
          return (e) => {
            r || it(t, (s = t7(e) ? e : !!e));
          };
        },
        it = (e, t) => {
          if (!t) return;
          let i = e.muted,
            a = () => (e.muted = i);
          switch (t) {
            case tW.ANY:
              e.play().catch(() => {
                ((e.muted = !0), e.play().catch(a));
              });
              break;
            case tW.MUTED:
              ((e.muted = !0), e.play().catch(a));
              break;
            default:
              e.play().catch(() => {});
          }
        },
        ii = ({ preload: e, src: t }, i, a) => {
          let r = (e) => {
            null != e && ["", "none", "metadata", "auto"].includes(e)
              ? i.setAttribute("preload", e)
              : i.removeAttribute("preload");
          };
          if (!a) return (r(e), r);
          let n = !1,
            s = !1,
            o = a.config.maxBufferLength,
            l = a.config.maxBufferSize,
            d = (e) => {
              r(e);
              let t = null != e ? e : i.preload;
              s ||
                "none" === t ||
                ("metadata" === t
                  ? ((a.config.maxBufferLength = 1),
                    (a.config.maxBufferSize = 1))
                  : ((a.config.maxBufferLength = o),
                    (a.config.maxBufferSize = l)),
                u());
            },
            u = () => {
              !n && t && ((n = !0), a.loadSource(t));
            };
          return (
            tG(
              i,
              "play",
              () => {
                ((s = !0),
                  (a.config.maxBufferLength = o),
                  (a.config.maxBufferSize = l),
                  u());
              },
              { once: !0 },
            ),
            d(e),
            d
          );
        },
        ia = (e) => ("time" in e ? e.time : e.startTime);
      function ir(e, t, i, a, r, n) {
        let s = document.createElement("track");
        return (
          (s.kind = t),
          (s.label = i),
          a && (s.srclang = a),
          r && (s.id = r),
          n && (s.default = !0),
          (s.track.mode = ["subtitles", "captions"].includes(t)
            ? "disabled"
            : "hidden"),
          s.setAttribute("data-removeondestroy", ""),
          e.append(s),
          s.track
        );
      }
      function is(e, t, i) {
        var a;
        return null ==
          (a = Array.from(e.querySelectorAll("track")).find(
            (e) => e.track.label === t && e.track.kind === i,
          ))
          ? void 0
          : a.track;
      }
      async function io(e, t, i, a) {
        let r = is(e, i, a);
        return (
          r ||
            (((r = ir(e, a, i)).mode = "hidden"),
            await new Promise((e) => setTimeout(() => e(void 0), 0))),
          "hidden" !== r.mode && (r.mode = "hidden"),
          [...t]
            .sort((e, t) => ia(t) - ia(e))
            .forEach((t) => {
              var i, n;
              let s = t.value,
                o = ia(t);
              if ("endTime" in t && null != t.endTime)
                null == r ||
                  r.addCue(
                    new VTTCue(
                      o,
                      t.endTime,
                      "chapters" === a
                        ? s
                        : JSON.stringify(null != s ? s : null),
                    ),
                  );
              else {
                let t = Array.prototype.findIndex.call(
                    null == r ? void 0 : r.cues,
                    (e) => e.startTime >= o,
                  ),
                  l = null == (i = null == r ? void 0 : r.cues) ? void 0 : i[t],
                  d = l
                    ? l.startTime
                    : Number.isFinite(e.duration)
                      ? e.duration
                      : Number.MAX_SAFE_INTEGER,
                  u =
                    null == (n = null == r ? void 0 : r.cues)
                      ? void 0
                      : n[t - 1];
                (u && (u.endTime = o),
                  null == r ||
                    r.addCue(
                      new VTTCue(
                        o,
                        d,
                        "chapters" === a
                          ? s
                          : JSON.stringify(null != s ? s : null),
                      ),
                    ));
              }
            }),
          e.textTracks.dispatchEvent(
            new Event("change", { bubbles: !0, composed: !0 }),
          ),
          r
        );
      }
      var il = "cuepoints",
        id = Object.freeze({ label: il });
      async function iu(e, t, i = id) {
        return io(e, t, i.label, "metadata");
      }
      var ic = (e) => ({ time: e.startTime, value: JSON.parse(e.text) });
      function ih(e, t = { label: il }) {
        var i, a;
        let r = is(e, t.label, "metadata");
        if (!(null != (i = null == r ? void 0 : r.activeCues) && i.length))
          return;
        if (1 === r.activeCues.length) return ic(r.activeCues[0]);
        let { currentTime: n } = e;
        return ic(
          Array.prototype.find.call(
            null != (a = r.activeCues) ? a : [],
            ({ startTime: e, endTime: t }) => e <= n && t > n,
          ) || r.activeCues[0],
        );
      }
      async function im(e, t = id) {
        return new Promise((i) => {
          tG(e, "loadstart", async () => {
            let a = await iu(e, [], t);
            (tG(
              e,
              "cuechange",
              () => {
                let t = ih(e);
                if (t) {
                  let i = new CustomEvent("cuepointchange", {
                    composed: !0,
                    bubbles: !0,
                    detail: t,
                  });
                  e.dispatchEvent(i);
                }
              },
              {},
              a,
            ),
              i(a));
          });
        });
      }
      var ip = "chapters",
        iv = Object.freeze({ label: ip }),
        iE = (e) => ({
          startTime: e.startTime,
          endTime: e.endTime,
          value: e.text,
        });
      async function ib(e, t, i = iv) {
        return io(e, t, i.label, "chapters");
      }
      function ig(e, t = { label: ip }) {
        var i, a;
        let r = is(e, t.label, "chapters");
        if (!(null != (i = null == r ? void 0 : r.activeCues) && i.length))
          return;
        if (1 === r.activeCues.length) return iE(r.activeCues[0]);
        let { currentTime: n } = e;
        return iE(
          Array.prototype.find.call(
            null != (a = r.activeCues) ? a : [],
            ({ startTime: e, endTime: t }) => e <= n && t > n,
          ) || r.activeCues[0],
        );
      }
      async function i_(e, t = iv) {
        return new Promise((i) => {
          tG(e, "loadstart", async () => {
            let a = await ib(e, [], t);
            (tG(
              e,
              "cuechange",
              () => {
                let t = ig(e);
                if (t) {
                  let i = new CustomEvent("chapterchange", {
                    composed: !0,
                    bubbles: !0,
                    detail: t,
                  });
                  e.dispatchEvent(i);
                }
              },
              {},
              a,
            ),
              i(a));
          });
        });
      }
      var iy = { VIDEO: "v", THUMBNAIL: "t", STORYBOARD: "s", DRM: "d" },
        iT = (e) =>
          e === tO.VIDEO ? iy.VIDEO : e === tO.DRM ? iy.DRM : void 0,
        iA = (e, t) => {
          var i, a;
          let r = tx(e),
            n = `${r}Token`;
          return null != (i = t.tokens) && i[r]
            ? null == (a = t.tokens)
              ? void 0
              : a[r]
            : tB(n, t)
              ? t[n]
              : void 0;
        },
        ik = (
          e,
          t,
          i,
          a,
          r = !1,
          n = !((e) =>
            null == (e = globalThis.navigator) ? void 0 : e.onLine)(),
        ) => {
          var s, o;
          if (n) {
            let i = t9("Your device appears to be offline", r),
              a = tP.MEDIA_ERR_NETWORK,
              n = new tP(i, a, !1, void 0);
            return (
              (n.errorCategory = t),
              (n.muxCode = tN.NETWORK_OFFLINE),
              (n.data = e),
              n
            );
          }
          let l = "status" in e ? e.status : e.code,
            d = Date.now(),
            u = tP.MEDIA_ERR_NETWORK;
          if (200 === l) return;
          let c = tx(t),
            h = iA(t, i),
            m = iT(t),
            [p] = tj(null != (s = i.playbackId) ? s : "");
          if (!l || !p) return;
          let E = t1(h);
          if (h && !E) {
            let i = new tP(
              t9(
                "The {tokenNamePrefix}-token provided is invalid or malformed.",
                r,
              ).format({ tokenNamePrefix: c }),
              u,
              !0,
              t9("Compact JWT string: {token}", r).format({ token: h }),
            );
            return (
              (i.errorCategory = t),
              (i.muxCode = tN.NETWORK_TOKEN_MALFORMED),
              (i.data = e),
              i
            );
          }
          if (l >= 500) {
            let e = new tP("", u, null == a || a);
            return (
              (e.errorCategory = t),
              (e.muxCode = tN.NETWORK_UNKNOWN_ERROR),
              e
            );
          }
          if (403 === l)
            if (E) {
              if (t2(E, d)) {
                let i = { timeStyle: "medium", dateStyle: "medium" },
                  a = new tP(
                    t9(
                      "The video’s secured {tokenNamePrefix}-token has expired.",
                      r,
                    ).format({ tokenNamePrefix: c }),
                    u,
                    !0,
                    t9(
                      "Expired at: {expiredDate}. Current time: {currentDate}.",
                      r,
                    ).format({
                      expiredDate: new Intl.DateTimeFormat("en", i).format(
                        null != (o = E.exp) ? o : 0,
                      ),
                      currentDate: new Intl.DateTimeFormat("en", i).format(d),
                    }),
                  );
                return (
                  (a.errorCategory = t),
                  (a.muxCode = tN.NETWORK_TOKEN_EXPIRED),
                  (a.data = e),
                  a
                );
              }
              if (t3(E, p)) {
                let i = new tP(
                  t9(
                    "The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",
                    r,
                  ).format({ tokenNamePrefix: c }),
                  u,
                  !0,
                  t9(
                    "Specified playback ID: {playbackId} and the playback ID encoded in the {tokenNamePrefix}-token: {tokenPlaybackId}",
                    r,
                  ).format({
                    tokenNamePrefix: c,
                    playbackId: p,
                    tokenPlaybackId: E.sub,
                  }),
                );
                return (
                  (i.errorCategory = t),
                  (i.muxCode = tN.NETWORK_TOKEN_SUB_MISMATCH),
                  (i.data = e),
                  i
                );
              }
              if (t4(E, m)) {
                let i = new tP(
                  t9(
                    "The {tokenNamePrefix}-token is formatted with incorrect information.",
                    r,
                  ).format({ tokenNamePrefix: c }),
                  u,
                  !0,
                  t9(
                    "The {tokenNamePrefix}-token has no aud value. aud value should be {expectedAud}.",
                    r,
                  ).format({ tokenNamePrefix: c, expectedAud: m }),
                );
                return (
                  (i.errorCategory = t),
                  (i.muxCode = tN.NETWORK_TOKEN_AUD_MISSING),
                  (i.data = e),
                  i
                );
              }
              if (t5(E, m)) {
                let i = new tP(
                  t9(
                    "The {tokenNamePrefix}-token is formatted with incorrect information.",
                    r,
                  ).format({ tokenNamePrefix: c }),
                  u,
                  !0,
                  t9(
                    "The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.",
                    r,
                  ).format({ tokenNamePrefix: c, expectedAud: m, aud: E.aud }),
                );
                return (
                  (i.errorCategory = t),
                  (i.muxCode = tN.NETWORK_TOKEN_AUD_MISMATCH),
                  (i.data = e),
                  i
                );
              }
            } else {
              let i = new tP(
                t9(
                  "Authorization error trying to access this {category} URL. If this is a signed URL, you might need to provide a {tokenNamePrefix}-token.",
                  r,
                ).format({ tokenNamePrefix: c, category: t }),
                u,
                null == a || a,
                t9("Specified playback ID: {playbackId}", r).format({
                  playbackId: p,
                }),
              );
              return (
                (i.errorCategory = t),
                (i.muxCode = tN.NETWORK_TOKEN_MISSING),
                (i.data = e),
                i
              );
            }
          if (412 === l) {
            let i = new tP(
              t9(
                "This playback-id may belong to a live stream that is not currently active or an asset that is not ready.",
                r,
              ),
              u,
              null == a || a,
              t9("Specified playback ID: {playbackId}", r).format({
                playbackId: p,
              }),
            );
            return (
              (i.errorCategory = t),
              (i.muxCode = tN.NETWORK_NOT_READY),
              (i.data = e),
              i
            );
          }
          if (404 === l) {
            let i = new tP(
              t9(
                "This URL or playback-id does not exist. You may have used an Asset ID or an ID from a different resource.",
                r,
              ),
              u,
              null == a || a,
              t9("Specified playback ID: {playbackId}", r).format({
                playbackId: p,
              }),
            );
            return (
              (i.errorCategory = t),
              (i.muxCode = tN.NETWORK_NOT_FOUND),
              (i.data = e),
              i
            );
          }
          if (400 === l) {
            let i = new tP(
              t9(
                "The URL or playback-id was invalid. You may have used an invalid value as a playback-id.",
              ),
              u,
              null == a || a,
              t9("Specified playback ID: {playbackId}", r).format({
                playbackId: p,
              }),
            );
            return (
              (i.errorCategory = t),
              (i.muxCode = tN.NETWORK_INVALID_URL),
              (i.data = e),
              i
            );
          }
          let b = new tP("", u, null == a || a);
          return (
            (b.errorCategory = t),
            (b.muxCode = tN.NETWORK_UNKNOWN_ERROR),
            (b.data = e),
            b
          );
        },
        iw = tM.DefaultConfig.capLevelController,
        iS = class e extends iw {
          constructor(e) {
            super(e);
          }
          get levels() {
            var e;
            return null != (e = this.hls.levels) ? e : [];
          }
          getValidLevels(e) {
            return this.levels.filter(
              (t, i) => this.isLevelAllowed(t) && i <= e,
            );
          }
          getMaxLevel(t) {
            let i = super.getMaxLevel(t),
              a = this.getValidLevels(t);
            if (!a[i]) return i;
            let r = Math.min(a[i].width, a[i].height),
              n = e.minMaxResolution;
            return r >= n ? i : iw.getMaxLevelByMediaSize(a, (16 / 9) * n, n);
          }
        };
      iS.minMaxResolution = 720;
      var iI,
        iR,
        iC,
        iD,
        iL,
        iM,
        iO = {
          FAIRPLAY: "fairplay",
          PLAYREADY: "playready",
          WIDEVINE: "widevine",
        },
        iN = (e) =>
          e.includes("fps")
            ? iO.FAIRPLAY
            : e.includes("playready")
              ? iO.PLAYREADY
              : e.includes("widevine")
                ? iO.WIDEVINE
                : void 0,
        ix = async (e) =>
          fetch(e)
            .then((e) => (200 !== e.status ? Promise.reject(e) : e.text()))
            .then((e) =>
              fetch(
                e
                  .split(
                    `
`,
                  )
                  .find(
                    (e, t, i) => t && i[t - 1].startsWith("#EXT-X-STREAM-INF"),
                  ),
              )
                .then((e) => (200 !== e.status ? Promise.reject(e) : e.text()))
                .then((e) =>
                  e.split(`
`),
                ),
            ),
        iP = (e) => {
          var t, i, a;
          let r =
              null ==
              (i = (
                null !=
                (t = e.find((e) => e.startsWith("#EXT-X-PLAYLIST-TYPE")))
                  ? t
                  : ""
              ).split(":")[1])
                ? void 0
                : i.trim(),
            n = tZ(r),
            s = tz(r),
            o;
          if (n === tH.LIVE) {
            let t = e.find((e) => e.startsWith("#EXT-X-PART-INF"));
            if (t) o = 2 * t.split(":")[1].split("=")[1];
            else {
              let t = e.find((e) => e.startsWith("#EXT-X-TARGETDURATION")),
                i =
                  null == (a = null == t ? void 0 : t.split(":"))
                    ? void 0
                    : a[1];
              o = (null != i ? i : 6) * 3;
            }
          }
          return { streamType: n, targetLiveWindow: s, liveEdgeStartOffset: o };
        },
        iU = async (e, t) =>
          t === t$.MP4
            ? {
                streamType: tH.ON_DEMAND,
                targetLiveWindow: Number.NaN,
                liveEdgeStartOffset: void 0,
              }
            : t === t$.M3U8
              ? iP(await ix(e))
              : (console.error(
                  `Media type ${t} is an unrecognized or unsupported type for src ${e}.`,
                ),
                {
                  streamType: void 0,
                  targetLiveWindow: void 0,
                  liveEdgeStartOffset: void 0,
                }),
        iB = async (e, t, i = tQ({ src: e })) => {
          var a, r, n;
          let {
            streamType: s,
            targetLiveWindow: o,
            liveEdgeStartOffset: l,
          } = await iU(e, i);
          (((null != (a = i$.get(t)) ? a : {}).liveEdgeStartOffset = l),
            ((null != (r = i$.get(t)) ? r : {}).targetLiveWindow = o),
            t.dispatchEvent(
              new CustomEvent("targetlivewindowchange", {
                composed: !0,
                bubbles: !0,
              }),
            ),
            ((null != (n = i$.get(t)) ? n : {}).streamType = s),
            t.dispatchEvent(
              new CustomEvent("streamtypechange", {
                composed: !0,
                bubbles: !0,
              }),
            ));
        },
        iW = (e) => {
          var t;
          let i = e.type,
            a = tZ(i),
            r = tz(i),
            n,
            s = !!(null != (t = e.partList) && t.length);
          return (
            a === tH.LIVE && (n = s ? 2 * e.partTarget : 3 * e.targetduration),
            {
              streamType: a,
              targetLiveWindow: r,
              liveEdgeStartOffset: n,
              lowLatency: s,
            }
          );
        },
        iH = (e, t, i) => {
          var a, r, n, s, o, l, d, u;
          let {
            streamType: c,
            targetLiveWindow: h,
            liveEdgeStartOffset: m,
            lowLatency: p,
          } = iW(e);
          if (c === tH.LIVE) {
            p
              ? ((i.config.backBufferLength =
                  null != (a = i.userConfig.backBufferLength) ? a : 4),
                (i.config.maxFragLookUpTolerance =
                  null != (r = i.userConfig.maxFragLookUpTolerance)
                    ? r
                    : 0.001),
                (i.config.abrBandWidthUpFactor =
                  null != (n = i.userConfig.abrBandWidthUpFactor)
                    ? n
                    : i.config.abrBandWidthFactor))
              : (i.config.backBufferLength =
                  null != (s = i.userConfig.backBufferLength) ? s : 8);
            let e = Object.freeze({
              get length() {
                return t.seekable.length;
              },
              start: (e) => t.seekable.start(e),
              end(e) {
                var a;
                return e > this.length || e < 0 || Number.isFinite(t.duration)
                  ? t.seekable.end(e)
                  : null != (a = i.liveSyncPosition)
                    ? a
                    : t.seekable.end(e);
              },
            });
            (null != (o = i$.get(t)) ? o : {}).seekable = e;
          }
          (((null != (l = i$.get(t)) ? l : {}).liveEdgeStartOffset = m),
            ((null != (d = i$.get(t)) ? d : {}).targetLiveWindow = h),
            t.dispatchEvent(
              new CustomEvent("targetlivewindowchange", {
                composed: !0,
                bubbles: !0,
              }),
            ),
            ((null != (u = i$.get(t)) ? u : {}).streamType = c),
            t.dispatchEvent(
              new CustomEvent("streamtypechange", {
                composed: !0,
                bubbles: !0,
              }),
            ));
        },
        iV =
          null !=
          (iR =
            null == (iI = null == globalThis ? void 0 : globalThis.navigator)
              ? void 0
              : iI.userAgent)
            ? iR
            : "",
        iF =
          null !=
          (iL =
            null ==
            (iD =
              null == (iC = null == globalThis ? void 0 : globalThis.navigator)
                ? void 0
                : iC.userAgentData)
              ? void 0
              : iD.platform)
            ? iL
            : "",
        iq =
          iV.toLowerCase().includes("android") ||
          ["x11", "android"].some((e) => iF.toLowerCase().includes(e)),
        i$ = new WeakMap(),
        iK = "mux.com",
        iY = null == (iM = tM.isSupported) ? void 0 : iM.call(tM),
        iG = () => tD.utils.now(),
        ij = tD.utils.generateUUID,
        iQ = ({
          playbackId: e,
          customDomain: t = iK,
          maxResolution: i,
          minResolution: a,
          renditionOrder: r,
          programStartTime: n,
          programEndTime: s,
          assetStartTime: o,
          assetEndTime: l,
          playbackToken: d,
          tokens: { playback: u = d } = {},
          extraSourceParams: c = {},
        } = {}) => {
          if (!e) return;
          let [h, m = ""] = tj(e),
            p = new URL(`https://stream.${t}/${h}.m3u8${m}`);
          return (
            u || p.searchParams.has("token")
              ? (p.searchParams.forEach((e, t) => {
                  "token" != t && p.searchParams.delete(t);
                }),
                u && p.searchParams.set("token", u))
              : (i && p.searchParams.set("max_resolution", i),
                a &&
                  (p.searchParams.set("min_resolution", a),
                  i &&
                    +i.slice(0, -1) < +a.slice(0, -1) &&
                    console.error(
                      "minResolution must be <= maxResolution",
                      "minResolution",
                      a,
                      "maxResolution",
                      i,
                    )),
                r && p.searchParams.set("rendition_order", r),
                n && p.searchParams.set("program_start_time", `${n}`),
                s && p.searchParams.set("program_end_time", `${s}`),
                o && p.searchParams.set("asset_start_time", `${o}`),
                l && p.searchParams.set("asset_end_time", `${l}`),
                Object.entries(c).forEach(([e, t]) => {
                  null != t && p.searchParams.set(e, t);
                })),
            p.toString()
          );
        },
        iZ = (e) => {
          if (!e) return;
          let [t] = e.split("?");
          return t || void 0;
        },
        iz = (e) => {
          if (!e || !e.startsWith("https://stream.")) return;
          let [t] = new URL(e).pathname.slice(1).split(".m3u8");
          return t || void 0;
        },
        iX = (e) => {
          var t, i, a;
          return null != (t = null == e ? void 0 : e.metadata) && t.video_id
            ? e.metadata.video_id
            : ac(e) &&
                null != (a = null != (i = iZ(e.playbackId)) ? i : iz(e.src))
              ? a
              : e.src;
        },
        iJ = (e) => {
          var t;
          return null == (t = i$.get(e)) ? void 0 : t.error;
        },
        i0 = (e) => {
          var t, i;
          return null != (i = null == (t = i$.get(e)) ? void 0 : t.streamType)
            ? i
            : tH.UNKNOWN;
        },
        i1 = (e) => {
          var t, i;
          return null !=
            (i = null == (t = i$.get(e)) ? void 0 : t.targetLiveWindow)
            ? i
            : Number.NaN;
        },
        i2 = (e) => {
          var t, i;
          return null != (i = null == (t = i$.get(e)) ? void 0 : t.seekable)
            ? i
            : e.seekable;
        },
        i3 = (e) => {
          var t;
          let i = null == (t = i$.get(e)) ? void 0 : t.liveEdgeStartOffset;
          if ("number" != typeof i) return Number.NaN;
          let a = i2(e);
          return a.length ? a.end(a.length - 1) - i : Number.NaN;
        },
        i4 = 0.034,
        i5 = (e, t, i = i4) => Math.abs(e - t) <= i,
        i9 = (e, t, i = i4) => e > t || i5(e, t, i),
        i8 = (e, t = i4) => e.paused && i9(e.currentTime, e.duration, t),
        i6 = (e, t) => {
          var i, a, r;
          if (!t || !e.buffered.length) return;
          if (e.readyState > 2) return !1;
          let n =
            t.currentLevel >= 0
              ? null ==
                (a = null == (i = t.levels) ? void 0 : i[t.currentLevel])
                ? void 0
                : a.details
              : null == (r = t.levels.find((e) => !!e.details))
                ? void 0
                : r.details;
          if (!n || n.live) return;
          let { fragments: s } = n;
          if (!(null != s && s.length)) return;
          if (e.currentTime < e.duration - (n.targetduration + 0.5)) return !1;
          let o = s[s.length - 1];
          if (e.currentTime <= o.start) return !1;
          let l = o.start + o.duration / 2,
            d = e.buffered.start(e.buffered.length - 1),
            u = e.buffered.end(e.buffered.length - 1);
          return l > d && l < u;
        },
        i7 = (e, t) =>
          e.ended || e.loop ? e.ended : !!(t && i6(e, t)) || i8(e),
        ae = (e, t, i) => {
          at(t, i);
          let { metadata: a = {} } = e,
            { view_session_id: r = ij() } = a,
            n = iX(e);
          ((a.view_session_id = r),
            (a.video_id = n),
            (e.metadata = a),
            (e.drmTypeCb = (e) => {
              var i;
              null == (i = t.mux) || i.emit("hb", { view_drm_type: e });
            }),
            i$.set(t, {}));
          let s = aa(e, t),
            o = ii(e, t, s);
          (ah(e, t, s), am(e, t, s), im(t), i_(t));
          let l = ie(e, t, s);
          return { engine: s, setAutoplay: l, setPreload: o };
        },
        at = (e, t) => {
          let i = null == t ? void 0 : t.engine;
          (i && (i.detachMedia(), i.destroy()),
            null != e &&
              e.mux &&
              !e.mux.deleted &&
              (e.mux.destroy(), delete e.mux),
            e &&
              (e.removeAttribute("src"),
              e.load(),
              e.removeEventListener("error", av),
              e.removeEventListener("error", ab),
              e.removeEventListener("durationchange", ap),
              i$.delete(e),
              e.dispatchEvent(new Event("teardown"))));
        };
      function ai(e, t) {
        var i;
        let a = tQ(e);
        if (a !== t$.M3U8) return !0;
        let r = !a || null == (i = t.canPlayType(a)) || i,
          { preferPlayback: n } = e,
          s = n === tV.MSE,
          o = n === tV.NATIVE;
        return r && (o || !(iY && (s || iq)));
      }
      var aa = (e, t) => {
          let {
              debug: i,
              streamType: a,
              startTime: r = -1,
              metadata: n,
              preferCmcd: s,
              _hlsConfig: o = {},
            } = e,
            l = tQ(e) === t$.M3U8,
            d = ai(e, t);
          if (l && !d && iY) {
            let t = ar(a),
              l = an(e);
            return new tM({
              debug: i,
              startPosition: r,
              cmcd:
                s !== tF.NONE
                  ? {
                      useHeaders: s === tF.HEADER,
                      sessionId: null == n ? void 0 : n.view_session_id,
                      contentId: null == n ? void 0 : n.video_id,
                    }
                  : void 0,
              xhrSetup: (e, t) => {
                var i, a;
                if (s && s !== tF.QUERY) return;
                let r = new URL(t);
                if (!r.searchParams.has("CMCD")) return;
                let n = (
                  null !=
                  (a =
                    null == (i = r.searchParams.get("CMCD"))
                      ? void 0
                      : i.split(","))
                    ? a
                    : []
                )
                  .filter((e) => e.startsWith("sid") || e.startsWith("cid"))
                  .join(",");
                (r.searchParams.set("CMCD", n), e.open("GET", r));
              },
              capLevelController: iS,
              ...{
                backBufferLength: 30,
                renderTextTracksNatively: !1,
                liveDurationInfinity: !0,
                capLevelToPlayerSize: !0,
                capLevelOnFPSDrop: !0,
              },
              ...t,
              ...l,
              ...o,
            });
          }
        },
        ar = (e) => (e === tH.LIVE ? { backBufferLength: 8 } : {}),
        an = (e) => {
          let { tokens: { drm: t } = {}, playbackId: i, drmTypeCb: a } = e,
            r = iZ(i);
          return t && r
            ? {
                emeEnabled: !0,
                drmSystems: {
                  "com.apple.fps": {
                    licenseUrl: ad(e, "fairplay"),
                    serverCertificateUrl: au(e, "fairplay"),
                  },
                  "com.widevine.alpha": { licenseUrl: ad(e, "widevine") },
                  "com.microsoft.playready": { licenseUrl: ad(e, "playready") },
                },
                requestMediaKeySystemAccessFunc: (e, t) => (
                  "com.widevine.alpha" === e &&
                    (t = [
                      ...t.map((e) => {
                        var t;
                        let i =
                          null == (t = e.videoCapabilities)
                            ? void 0
                            : t.map((e) => ({
                                ...e,
                                robustness: "HW_SECURE_ALL",
                              }));
                        return { ...e, videoCapabilities: i };
                      }),
                      ...t,
                    ]),
                  navigator.requestMediaKeySystemAccess(e, t).then((t) => {
                    let i = iN(e);
                    return (null == a || a(i), t);
                  })
                ),
              }
            : {};
        },
        as = async (e) => {
          let t = await fetch(e);
          return 200 !== t.status ? Promise.reject(t) : await t.arrayBuffer();
        },
        ao = async (e, t) => {
          let i = await fetch(t, {
            method: "POST",
            headers: { "Content-type": "application/octet-stream" },
            body: e,
          });
          return 200 !== i.status
            ? Promise.reject(i)
            : new Uint8Array(await i.arrayBuffer());
        },
        al = (e, t) => {
          tG(t, "encrypted", async (i) => {
            try {
              let a = i.initDataType;
              if ("skd" !== a)
                return void console.error(
                  `Received unexpected initialization data type "${a}"`,
                );
              if (!t.mediaKeys) {
                let i = await navigator
                  .requestMediaKeySystemAccess("com.apple.fps", [
                    {
                      initDataTypes: [a],
                      videoCapabilities: [
                        {
                          contentType: "application/vnd.apple.mpegurl",
                          robustness: "",
                        },
                      ],
                      distinctiveIdentifier: "not-allowed",
                      persistentState: "not-allowed",
                      sessionTypes: ["temporary"],
                    },
                  ])
                  .then((t) => {
                    var i;
                    return (
                      null == (i = e.drmTypeCb) || i.call(e, iO.FAIRPLAY),
                      t
                    );
                  })
                  .catch(() => {
                    let e = t9(
                        "Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser.",
                      ),
                      i = new tP(e, tP.MEDIA_ERR_ENCRYPTED, !0);
                    ((i.errorCategory = tO.DRM),
                      (i.muxCode = tN.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM),
                      aE(t, i));
                  });
                if (!i) return;
                let r = await i.createMediaKeys();
                try {
                  let t = await as(au(e, "fairplay")).catch((t) => {
                    if (t instanceof Response) {
                      let i = ik(t, tO.DRM, e);
                      return (
                        console.error(
                          "mediaError",
                          null == i ? void 0 : i.message,
                          null == i ? void 0 : i.context,
                        ),
                        i
                          ? Promise.reject(i)
                          : Promise.reject(
                              Error("Unexpected error in app cert request"),
                            )
                      );
                    }
                    return Promise.reject(t);
                  });
                  await r.setServerCertificate(t).catch(() => {
                    let e = t9(
                        "Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate.",
                      ),
                      t = new tP(e, tP.MEDIA_ERR_ENCRYPTED, !0);
                    return (
                      (t.errorCategory = tO.DRM),
                      (t.muxCode = tN.ENCRYPTED_UPDATE_SERVER_CERT_FAILED),
                      Promise.reject(t)
                    );
                  });
                } catch (e) {
                  aE(t, e);
                  return;
                }
                await t.setMediaKeys(r);
              }
              let r = i.initData;
              if (null == r)
                return void console.error(
                  `Could not start encrypted playback due to missing initData in ${i.type} event`,
                );
              let n = t.mediaKeys.createSession();
              n.addEventListener("keystatuseschange", () => {
                n.keyStatuses.forEach((e) => {
                  let i;
                  if ("internal-error" === e) {
                    let e = t9(
                      "The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser.",
                    );
                    (((i = new tP(
                      e,
                      tP.MEDIA_ERR_ENCRYPTED,
                      !0,
                    )).errorCategory = tO.DRM),
                      (i.muxCode = tN.ENCRYPTED_CDM_ERROR));
                  } else if (
                    "output-restricted" === e ||
                    "output-downscaled" === e
                  ) {
                    let e = t9(
                      "DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen.",
                    );
                    (((i = new tP(
                      e,
                      tP.MEDIA_ERR_ENCRYPTED,
                      !1,
                    )).errorCategory = tO.DRM),
                      (i.muxCode = tN.ENCRYPTED_OUTPUT_RESTRICTED));
                  }
                  i && aE(t, i);
                });
              });
              let s = await Promise.all([
                  n.generateRequest(a, r).catch(() => {
                    let e = t9(
                        "Failed to generate a DRM license request. This may be an issue with the player or your protected content.",
                      ),
                      i = new tP(e, tP.MEDIA_ERR_ENCRYPTED, !0);
                    ((i.errorCategory = tO.DRM),
                      (i.muxCode = tN.ENCRYPTED_GENERATE_REQUEST_FAILED),
                      aE(t, i));
                  }),
                  new Promise((e) => {
                    n.addEventListener(
                      "message",
                      (t) => {
                        e(t.message);
                      },
                      { once: !0 },
                    );
                  }),
                ]).then(([, e]) => e),
                o = await ao(s, ad(e, "fairplay")).catch((t) => {
                  if (t instanceof Response) {
                    let i = ik(t, tO.DRM, e);
                    return (
                      console.error(
                        "mediaError",
                        null == i ? void 0 : i.message,
                        null == i ? void 0 : i.context,
                      ),
                      i
                        ? Promise.reject(i)
                        : Promise.reject(
                            Error("Unexpected error in license key request"),
                          )
                    );
                  }
                  return Promise.reject(t);
                });
              await n.update(o).catch(() => {
                let e = t9(
                    "Failed to update DRM license. This may be an issue with the player or your protected content.",
                  ),
                  t = new tP(e, tP.MEDIA_ERR_ENCRYPTED, !0);
                return (
                  (t.errorCategory = tO.DRM),
                  (t.muxCode = tN.ENCRYPTED_UPDATE_LICENSE_FAILED),
                  Promise.reject(t)
                );
              });
            } catch (e) {
              aE(t, e);
              return;
            }
          });
        },
        ad = (
          { playbackId: e, tokens: { drm: t } = {}, customDomain: i = iK },
          a,
        ) => {
          let r = iZ(e);
          return `https://license.${i.toLocaleLowerCase().endsWith(iK) ? i : iK}/license/${a}/${r}?token=${t}`;
        },
        au = (
          { playbackId: e, tokens: { drm: t } = {}, customDomain: i = iK },
          a,
        ) => {
          let r = iZ(e);
          return `https://license.${i.toLocaleLowerCase().endsWith(iK) ? i : iK}/appcert/${a}/${r}?token=${t}`;
        },
        ac = ({ playbackId: e, src: t, customDomain: i }) => {
          if (e) return !0;
          if ("string" != typeof t) return !1;
          let a = new URL(
            t,
            null == window ? void 0 : window.location.href,
          ).hostname.toLocaleLowerCase();
          return a.includes(iK) || (!!i && a.includes(i.toLocaleLowerCase()));
        },
        ah = (e, t, i) => {
          var a;
          let { envKey: r, disableTracking: n } = e,
            s = ac(e);
          if (!n && (r || s)) {
            let {
                playerInitTime: n,
                playerSoftwareName: s,
                playerSoftwareVersion: o,
                beaconCollectionDomain: l,
                debug: d,
                disableCookies: u,
              } = e,
              c = {
                ...e.metadata,
                video_title:
                  (null == (a = null == e ? void 0 : e.metadata)
                    ? void 0
                    : a.video_title) || void 0,
              };
            tD.monitor(t, {
              debug: d,
              beaconCollectionDomain: l,
              hlsjs: i,
              Hls: i ? tM : void 0,
              automaticErrorTracking: !1,
              errorTranslator: (t) =>
                "string" != typeof t.player_error_code &&
                ("function" == typeof e.errorTranslator
                  ? e.errorTranslator(t)
                  : t),
              disableCookies: u,
              data: {
                ...(r ? { env_key: r } : {}),
                player_software_name: s,
                player_software: s,
                player_software_version: o,
                player_init_time: n,
                ...c,
              },
            });
          }
        },
        am = (e, t, i) => {
          var a, r;
          let n = ai(e, t),
            { src: s } = e,
            o = () => {
              t.ended ||
                !i7(t, i) ||
                (i6(t, i)
                  ? (t.currentTime = t.buffered.end(t.buffered.length - 1))
                  : t.dispatchEvent(new Event("ended")));
            },
            l,
            d,
            u = () => {
              let e = i2(t),
                i,
                a;
              (e.length > 0 && ((i = e.start(0)), (a = e.end(0))),
                (d !== a || l !== i) &&
                  t.dispatchEvent(
                    new CustomEvent("seekablechange", { composed: !0 }),
                  ),
                (l = i),
                (d = a));
            };
          if ((tG(t, "durationchange", u), t && n)) {
            let i = tQ(e);
            if ("string" == typeof s) {
              let n = () => {
                  if (i0(t) !== tH.LIVE || Number.isFinite(t.duration)) return;
                  let e = setInterval(u, 1e3);
                  (t.addEventListener(
                    "teardown",
                    () => {
                      clearInterval(e);
                    },
                    { once: !0 },
                  ),
                    tG(t, "durationchange", () => {
                      Number.isFinite(t.duration) && clearInterval(e);
                    }));
                },
                o = async () =>
                  iB(s, t, i)
                    .then(n)
                    .catch((i) => {
                      if (i instanceof Response) {
                        let a = ik(i, tO.VIDEO, e);
                        if (a) return void aE(t, a);
                      }
                    });
              if ("none" === t.preload) {
                let e = () => {
                    (o(), t.removeEventListener("loadedmetadata", i));
                  },
                  i = () => {
                    (o(), t.removeEventListener("play", e));
                  };
                (tG(t, "play", e, { once: !0 }),
                  tG(t, "loadedmetadata", i, { once: !0 }));
              } else o();
              (null != (a = e.tokens) && a.drm
                ? al(e, t)
                : tG(
                    t,
                    "encrypted",
                    () => {
                      let e = new tP(
                        t9(
                          "Attempting to play DRM-protected content without providing a DRM token.",
                        ),
                        tP.MEDIA_ERR_ENCRYPTED,
                        !0,
                      );
                      ((e.errorCategory = tO.DRM),
                        (e.muxCode = tN.ENCRYPTED_MISSING_TOKEN),
                        aE(t, e));
                    },
                    { once: !0 },
                  ),
                t.setAttribute("src", s),
                e.startTime &&
                  (((null != (r = i$.get(t)) ? r : {}).startTime = e.startTime),
                  t.addEventListener("durationchange", ap, { once: !0 })));
            } else t.removeAttribute("src");
            (t.addEventListener("error", av),
              t.addEventListener("error", ab),
              t.addEventListener(
                "emptied",
                () => {
                  t.querySelectorAll("track[data-removeondestroy]").forEach(
                    (e) => {
                      e.remove();
                    },
                  );
                },
                { once: !0 },
              ),
              tG(t, "pause", o),
              tG(t, "seeked", o),
              tG(t, "play", () => {
                t.ended ||
                  (i9(t.currentTime, t.duration) &&
                    (t.currentTime = t.seekable.length
                      ? t.seekable.start(0)
                      : 0));
              }));
          } else
            i && s
              ? (i.once(tM.Events.LEVEL_LOADED, (e, a) => {
                  (iH(a.details, t, i),
                    u(),
                    i0(t) !== tH.LIVE ||
                      Number.isFinite(t.duration) ||
                      (i.on(tM.Events.LEVEL_UPDATED, u),
                      tG(t, "durationchange", () => {
                        Number.isFinite(t.duration) &&
                          i.off(tM.Events.LEVELS_UPDATED, u);
                      })));
                }),
                i.on(tM.Events.ERROR, (i, a) => {
                  aE(t, af(a, e));
                }),
                t.addEventListener("error", ab),
                tG(t, "waiting", o),
                (function (e, t) {
                  var i;
                  if (!("videoTracks" in e)) return;
                  let a = new WeakMap();
                  (t.on(tM.Events.MANIFEST_PARSED, function (t, i) {
                    o();
                    let r = e.addVideoTrack("main");
                    for (let [e, t] of ((r.selected = !0),
                    i.levels.entries())) {
                      let i = r.addRendition(
                        t.url[0],
                        t.width,
                        t.height,
                        t.videoCodec,
                        t.bitrate,
                      );
                      (a.set(t, `${e}`), (i.id = `${e}`));
                    }
                  }),
                    t.on(tM.Events.AUDIO_TRACKS_UPDATED, function (t, i) {
                      for (let t of (s(), i.audioTracks)) {
                        let i = t.default ? "main" : "alternative",
                          a = e.addAudioTrack(i, t.name, t.lang);
                        ((a.id = `${t.id}`), t.default && (a.enabled = !0));
                      }
                    }),
                    e.audioTracks.addEventListener("change", () => {
                      var i;
                      let a = +(null ==
                        (i = [...e.audioTracks].find((e) => e.enabled))
                          ? void 0
                          : i.id),
                        r = t.audioTracks.map((e) => e.id);
                      a != t.audioTrack && r.includes(a) && (t.audioTrack = a);
                    }),
                    t.on(tM.Events.LEVELS_UPDATED, function (t, i) {
                      var r;
                      let n =
                        e.videoTracks[
                          null != (r = e.videoTracks.selectedIndex) ? r : 0
                        ];
                      if (!n) return;
                      let s = i.levels.map((e) => a.get(e));
                      for (let t of e.videoRenditions)
                        t.id && !s.includes(t.id) && n.removeRendition(t);
                    }));
                  let r = (i) => {
                    let a = e.currentTime,
                      r = !1,
                      n = (e, t) => {
                        r || (r = !Number.isFinite(t.endOffset));
                      };
                    (t.on(tM.Events.BUFFER_FLUSHING, n),
                      (t.nextLevel = i),
                      t.off(tM.Events.BUFFER_FLUSHING, n),
                      r ||
                        t.trigger(tM.Events.BUFFER_FLUSHING, {
                          startOffset: a + 10,
                          endOffset: 1 / 0,
                          type: "video",
                        }));
                  };
                  null == (i = e.videoRenditions) ||
                    i.addEventListener("change", (e) => {
                      let i = e.target.selectedIndex;
                      i != t.nextLevel && r(i);
                    });
                  let n = () => {
                      for (let t of e.videoTracks) e.removeVideoTrack(t);
                    },
                    s = () => {
                      for (let t of e.audioTracks) e.removeAudioTrack(t);
                    },
                    o = () => {
                      (n(), s());
                    };
                  t.once(tM.Events.DESTROYING, o);
                })(e, i),
                (function (e, t) {
                  t.on(
                    tM.Events.NON_NATIVE_TEXT_TRACKS_FOUND,
                    (i, { tracks: a }) => {
                      a.forEach((i) => {
                        var a, r;
                        let n =
                            null != (a = i.subtitleTrack)
                              ? a
                              : i.closedCaptions,
                          s = t.subtitleTracks.findIndex(
                            ({ lang: e, name: t, type: a }) =>
                              e == (null == n ? void 0 : n.lang) &&
                              t === i.label &&
                              a.toLowerCase() === i.kind,
                          ),
                          o = (null != (r = i._id) ? r : i.default)
                            ? "default"
                            : `${i.kind}${s}`;
                        ir(
                          e,
                          i.kind,
                          i.label,
                          null == n ? void 0 : n.lang,
                          o,
                          i.default,
                        );
                      });
                    },
                  );
                  let i = () => {
                    if (!t.subtitleTracks.length) return;
                    let i = Array.from(e.textTracks).find(
                      (e) =>
                        e.id &&
                        "showing" === e.mode &&
                        ["subtitles", "captions"].includes(e.kind),
                    );
                    if (!i) return;
                    let a = t.subtitleTracks[t.subtitleTrack],
                      r = a
                        ? a.default
                          ? "default"
                          : `${t.subtitleTracks[t.subtitleTrack].type.toLowerCase()}${t.subtitleTrack}`
                        : void 0;
                    if (
                      t.subtitleTrack < 0 ||
                      (null == i ? void 0 : i.id) !== r
                    ) {
                      let e = t.subtitleTracks.findIndex(
                        ({ lang: e, name: t, type: a, default: r }) =>
                          ("default" === i.id && r) ||
                          (e == i.language &&
                            t === i.label &&
                            a.toLowerCase() === i.kind),
                      );
                      t.subtitleTrack = e;
                    }
                    (null == i ? void 0 : i.id) === r &&
                      i.cues &&
                      Array.from(i.cues).forEach((e) => {
                        i.addCue(e);
                      });
                  };
                  (e.textTracks.addEventListener("change", i),
                    t.on(tM.Events.CUES_PARSED, (t, { track: i, cues: a }) => {
                      let r = e.textTracks.getTrackById(i);
                      if (!r) return;
                      let n = "disabled" === r.mode;
                      (n && (r.mode = "hidden"),
                        a.forEach((e) => {
                          var t;
                          (null != (t = r.cues) && t.getCueById(e.id)) ||
                            r.addCue(e);
                        }),
                        n && (r.mode = "disabled"));
                    }),
                    t.once(tM.Events.DESTROYING, () => {
                      (e.textTracks.removeEventListener("change", i),
                        e
                          .querySelectorAll("track[data-removeondestroy]")
                          .forEach((e) => {
                            e.remove();
                          }));
                    }));
                  let a = () => {
                    Array.from(e.textTracks).forEach((t) => {
                      var i, a;
                      if (
                        !["subtitles", "caption"].includes(t.kind) &&
                        ("thumbnails" === t.label || "chapters" === t.kind)
                      ) {
                        if (!(null != (i = t.cues) && i.length)) {
                          let i = "track";
                          (t.kind && (i += `[kind="${t.kind}"]`),
                            t.label && (i += `[label="${t.label}"]`));
                          let r = e.querySelector(i),
                            n =
                              null !=
                              (a = null == r ? void 0 : r.getAttribute("src"))
                                ? a
                                : "";
                          (null == r || r.removeAttribute("src"),
                            setTimeout(() => {
                              null == r || r.setAttribute("src", n);
                            }, 0));
                        }
                        "hidden" !== t.mode && (t.mode = "hidden");
                      }
                    });
                  };
                  (t.once(tM.Events.MANIFEST_LOADED, a),
                    t.once(tM.Events.MEDIA_ATTACHED, a));
                })(t, i),
                i.attachMedia(t))
              : console.error(
                  "It looks like the video you're trying to play will not work on this system! If possible, try upgrading to the newest versions of your browser or software.",
                );
        };
      function ap(e) {
        var t;
        let i = e.target,
          a = null == (t = i$.get(i)) ? void 0 : t.startTime;
        if (
          a &&
          (function (e, t, i) {
            t && i > t && (i = t);
            for (let t = 0; t < e.length; t++)
              if (e.start(t) <= i && e.end(t) >= i) return !0;
            return !1;
          })(i.seekable, i.duration, a)
        ) {
          let e = "auto" === i.preload;
          (e && (i.preload = "none"),
            (i.currentTime = a),
            e && (i.preload = "auto"));
        }
      }
      async function av(e) {
        if (!e.isTrusted) return;
        e.stopImmediatePropagation();
        let t = e.target;
        if (!(null != t && t.error)) return;
        let { message: i, code: a } = t.error,
          r = new tP(i, a);
        if (
          t.src &&
          a === tP.MEDIA_ERR_SRC_NOT_SUPPORTED &&
          t.readyState === HTMLMediaElement.HAVE_NOTHING
        )
          return void setTimeout(() => {
            var e;
            let i = null != (e = iJ(t)) ? e : t.error;
            (null == i ? void 0 : i.code) === tP.MEDIA_ERR_SRC_NOT_SUPPORTED &&
              aE(t, r);
          }, 500);
        if (t.src && (a !== tP.MEDIA_ERR_DECODE || void 0 !== a))
          try {
            let { status: e } = await fetch(t.src);
            r.data = { response: { code: e } };
          } catch {}
        aE(t, r);
      }
      function aE(e, t) {
        var i;
        t.fatal &&
          (((null != (i = i$.get(e)) ? i : {}).error = t),
          e.dispatchEvent(new CustomEvent("error", { detail: t })));
      }
      function ab(e) {
        var t, i;
        if (!(e instanceof CustomEvent) || !(e.detail instanceof tP)) return;
        let a = e.target,
          r = e.detail;
        r &&
          r.fatal &&
          (((null != (t = i$.get(a)) ? t : {}).error = r),
          null == (i = a.mux) ||
            i.emit("error", {
              player_error_code: r.code,
              player_error_message: r.message,
              player_error_context: r.context,
            }));
      }
      var af = (e, t) => {
        var i, a, r;
        console.error("getErrorFromHlsErrorData()", e);
        let n = {
            [tM.ErrorTypes.NETWORK_ERROR]: tP.MEDIA_ERR_NETWORK,
            [tM.ErrorTypes.MEDIA_ERROR]: tP.MEDIA_ERR_DECODE,
            [tM.ErrorTypes.KEY_SYSTEM_ERROR]: tP.MEDIA_ERR_ENCRYPTED,
          },
          s,
          o = ((e) =>
            [
              tM.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
              tM.ErrorDetails.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED,
            ].includes(e.details)
              ? tP.MEDIA_ERR_NETWORK
              : n[e.type])(e);
        if (o === tP.MEDIA_ERR_NETWORK && e.response) {
          let r =
            null !=
            (i = ((e) =>
              e.type === tM.ErrorTypes.KEY_SYSTEM_ERROR
                ? tO.DRM
                : e.type === tM.ErrorTypes.NETWORK_ERROR
                  ? tO.VIDEO
                  : void 0)(e))
              ? i
              : tO.VIDEO;
          s =
            null != (a = ik(e.response, r, t, e.fatal))
              ? a
              : new tP("", o, e.fatal);
        } else
          o === tP.MEDIA_ERR_ENCRYPTED
            ? e.details === tM.ErrorDetails.KEY_SYSTEM_NO_CONFIGURED_LICENSE
              ? (((s = new tP(
                  t9(
                    "Attempting to play DRM-protected content without providing a DRM token.",
                  ),
                  tP.MEDIA_ERR_ENCRYPTED,
                  e.fatal,
                )).errorCategory = tO.DRM),
                (s.muxCode = tN.ENCRYPTED_MISSING_TOKEN))
              : e.details === tM.ErrorDetails.KEY_SYSTEM_NO_ACCESS
                ? (((s = new tP(
                    t9(
                      "Cannot play DRM-protected content with current security configuration on this browser. Try playing in another browser.",
                    ),
                    tP.MEDIA_ERR_ENCRYPTED,
                    e.fatal,
                  )).errorCategory = tO.DRM),
                  (s.muxCode = tN.ENCRYPTED_UNSUPPORTED_KEY_SYSTEM))
                : e.details === tM.ErrorDetails.KEY_SYSTEM_NO_SESSION
                  ? (((s = new tP(
                      t9(
                        "Failed to generate a DRM license request. This may be an issue with the player or your protected content.",
                      ),
                      tP.MEDIA_ERR_ENCRYPTED,
                      !0,
                    )).errorCategory = tO.DRM),
                    (s.muxCode = tN.ENCRYPTED_GENERATE_REQUEST_FAILED))
                  : e.details ===
                      tM.ErrorDetails.KEY_SYSTEM_SESSION_UPDATE_FAILED
                    ? (((s = new tP(
                        t9(
                          "Failed to update DRM license. This may be an issue with the player or your protected content.",
                        ),
                        tP.MEDIA_ERR_ENCRYPTED,
                        e.fatal,
                      )).errorCategory = tO.DRM),
                      (s.muxCode = tN.ENCRYPTED_UPDATE_LICENSE_FAILED))
                    : e.details ===
                        tM.ErrorDetails
                          .KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED
                      ? (((s = new tP(
                          t9(
                            "Your server certificate failed when attempting to set it. This may be an issue with a no longer valid certificate.",
                          ),
                          tP.MEDIA_ERR_ENCRYPTED,
                          e.fatal,
                        )).errorCategory = tO.DRM),
                        (s.muxCode = tN.ENCRYPTED_UPDATE_SERVER_CERT_FAILED))
                      : e.details ===
                          tM.ErrorDetails.KEY_SYSTEM_STATUS_INTERNAL_ERROR
                        ? (((s = new tP(
                            t9(
                              "The DRM Content Decryption Module system had an internal failure. Try reloading the page, upading your browser, or playing in another browser.",
                            ),
                            tP.MEDIA_ERR_ENCRYPTED,
                            e.fatal,
                          )).errorCategory = tO.DRM),
                          (s.muxCode = tN.ENCRYPTED_CDM_ERROR))
                        : e.details ===
                            tM.ErrorDetails.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED
                          ? (((s = new tP(
                              t9(
                                "DRM playback is being attempted in an environment that is not sufficiently secure. User may see black screen.",
                              ),
                              tP.MEDIA_ERR_ENCRYPTED,
                              !1,
                            )).errorCategory = tO.DRM),
                            (s.muxCode = tN.ENCRYPTED_OUTPUT_RESTRICTED))
                          : (((s = new tP(
                              e.error.message,
                              tP.MEDIA_ERR_ENCRYPTED,
                              e.fatal,
                            )).errorCategory = tO.DRM),
                            (s.muxCode = tN.ENCRYPTED_ERROR))
            : (s = new tP("", o, e.fatal));
        return (
          s.context ||
            (s.context = `${
              e.url
                ? `url: ${e.url}
`
                : ""
            }${
              e.response && (e.response.code || e.response.text)
                ? `response: ${e.response.code}, ${e.response.text}
`
                : ""
            }${
              e.reason
                ? `failure reason: ${e.reason}
`
                : ""
            }${
              e.level
                ? `level: ${e.level}
`
                : ""
            }${
              e.parent
                ? `parent stream controller: ${e.parent}
`
                : ""
            }${
              e.buffer
                ? `buffer length: ${e.buffer}
`
                : ""
            }${
              e.error
                ? `error: ${e.error}
`
                : ""
            }${
              e.event
                ? `event: ${e.event}
`
                : ""
            }${
              e.err
                ? `error message: ${null == (r = e.err) ? void 0 : r.message}
`
                : ""
            }`),
          (s.data = e),
          s
        );
      };
      let ag = {
          MEDIA_PLAY_REQUEST: "mediaplayrequest",
          MEDIA_PAUSE_REQUEST: "mediapauserequest",
          MEDIA_MUTE_REQUEST: "mediamuterequest",
          MEDIA_UNMUTE_REQUEST: "mediaunmuterequest",
          MEDIA_VOLUME_REQUEST: "mediavolumerequest",
          MEDIA_SEEK_REQUEST: "mediaseekrequest",
          MEDIA_AIRPLAY_REQUEST: "mediaairplayrequest",
          MEDIA_ENTER_FULLSCREEN_REQUEST: "mediaenterfullscreenrequest",
          MEDIA_EXIT_FULLSCREEN_REQUEST: "mediaexitfullscreenrequest",
          MEDIA_PREVIEW_REQUEST: "mediapreviewrequest",
          MEDIA_ENTER_PIP_REQUEST: "mediaenterpiprequest",
          MEDIA_EXIT_PIP_REQUEST: "mediaexitpiprequest",
          MEDIA_ENTER_CAST_REQUEST: "mediaentercastrequest",
          MEDIA_EXIT_CAST_REQUEST: "mediaexitcastrequest",
          MEDIA_SHOW_TEXT_TRACKS_REQUEST: "mediashowtexttracksrequest",
          MEDIA_HIDE_TEXT_TRACKS_REQUEST: "mediahidetexttracksrequest",
          MEDIA_SHOW_SUBTITLES_REQUEST: "mediashowsubtitlesrequest",
          MEDIA_DISABLE_SUBTITLES_REQUEST: "mediadisablesubtitlesrequest",
          MEDIA_TOGGLE_SUBTITLES_REQUEST: "mediatogglesubtitlesrequest",
          MEDIA_PLAYBACK_RATE_REQUEST: "mediaplaybackraterequest",
          MEDIA_RENDITION_REQUEST: "mediarenditionrequest",
          MEDIA_AUDIO_TRACK_REQUEST: "mediaaudiotrackrequest",
          MEDIA_SEEK_TO_LIVE_REQUEST: "mediaseektoliverequest",
          REGISTER_MEDIA_STATE_RECEIVER: "registermediastatereceiver",
          UNREGISTER_MEDIA_STATE_RECEIVER: "unregistermediastatereceiver",
        },
        a_ = {
          MEDIA_CHROME_ATTRIBUTES: "mediachromeattributes",
          MEDIA_CONTROLLER: "mediacontroller",
        },
        ay = {
          MEDIA_AIRPLAY_UNAVAILABLE: "mediaAirplayUnavailable",
          MEDIA_AUDIO_TRACK_ENABLED: "mediaAudioTrackEnabled",
          MEDIA_AUDIO_TRACK_LIST: "mediaAudioTrackList",
          MEDIA_AUDIO_TRACK_UNAVAILABLE: "mediaAudioTrackUnavailable",
          MEDIA_BUFFERED: "mediaBuffered",
          MEDIA_CAST_UNAVAILABLE: "mediaCastUnavailable",
          MEDIA_CHAPTERS_CUES: "mediaChaptersCues",
          MEDIA_CURRENT_TIME: "mediaCurrentTime",
          MEDIA_DURATION: "mediaDuration",
          MEDIA_ENDED: "mediaEnded",
          MEDIA_ERROR: "mediaError",
          MEDIA_ERROR_CODE: "mediaErrorCode",
          MEDIA_ERROR_MESSAGE: "mediaErrorMessage",
          MEDIA_FULLSCREEN_UNAVAILABLE: "mediaFullscreenUnavailable",
          MEDIA_HAS_PLAYED: "mediaHasPlayed",
          MEDIA_HEIGHT: "mediaHeight",
          MEDIA_IS_AIRPLAYING: "mediaIsAirplaying",
          MEDIA_IS_CASTING: "mediaIsCasting",
          MEDIA_IS_FULLSCREEN: "mediaIsFullscreen",
          MEDIA_IS_PIP: "mediaIsPip",
          MEDIA_LOADING: "mediaLoading",
          MEDIA_MUTED: "mediaMuted",
          MEDIA_PAUSED: "mediaPaused",
          MEDIA_PIP_UNAVAILABLE: "mediaPipUnavailable",
          MEDIA_PLAYBACK_RATE: "mediaPlaybackRate",
          MEDIA_PREVIEW_CHAPTER: "mediaPreviewChapter",
          MEDIA_PREVIEW_COORDS: "mediaPreviewCoords",
          MEDIA_PREVIEW_IMAGE: "mediaPreviewImage",
          MEDIA_PREVIEW_TIME: "mediaPreviewTime",
          MEDIA_RENDITION_LIST: "mediaRenditionList",
          MEDIA_RENDITION_SELECTED: "mediaRenditionSelected",
          MEDIA_RENDITION_UNAVAILABLE: "mediaRenditionUnavailable",
          MEDIA_SEEKABLE: "mediaSeekable",
          MEDIA_STREAM_TYPE: "mediaStreamType",
          MEDIA_SUBTITLES_LIST: "mediaSubtitlesList",
          MEDIA_SUBTITLES_SHOWING: "mediaSubtitlesShowing",
          MEDIA_TARGET_LIVE_WINDOW: "mediaTargetLiveWindow",
          MEDIA_TIME_IS_LIVE: "mediaTimeIsLive",
          MEDIA_VOLUME: "mediaVolume",
          MEDIA_VOLUME_LEVEL: "mediaVolumeLevel",
          MEDIA_VOLUME_UNAVAILABLE: "mediaVolumeUnavailable",
          MEDIA_WIDTH: "mediaWidth",
        },
        aT = Object.entries(ay),
        aA = aT.reduce((e, [t, i]) => ((e[t] = i.toLowerCase()), e), {}),
        ak = aT.reduce((e, [t, i]) => ((e[t] = i.toLowerCase()), e), {
          USER_INACTIVE_CHANGE: "userinactivechange",
          BREAKPOINTS_CHANGE: "breakpointchange",
          BREAKPOINTS_COMPUTED: "breakpointscomputed",
        });
      Object.entries(ak).reduce(
        (e, [t, i]) => {
          let a = aA[t];
          return (a && (e[i] = a), e);
        },
        { userinactivechange: "userinactive" },
      );
      let aw = Object.entries(aA).reduce(
          (e, [t, i]) => {
            let a = ak[t];
            return (a && (e[i] = a), e);
          },
          { userinactive: "userinactivechange" },
        ),
        aS = {
          SUBTITLES: "subtitles",
          CAPTIONS: "captions",
          CHAPTERS: "chapters",
          METADATA: "metadata",
        },
        aI = { DISABLED: "disabled", SHOWING: "showing" },
        aR = { MOUSE: "mouse", TOUCH: "touch" },
        aC = { UNAVAILABLE: "unavailable", UNSUPPORTED: "unsupported" },
        aD = { LIVE: "live", ON_DEMAND: "on-demand", UNKNOWN: "unknown" },
        aL = { FULLSCREEN: "fullscreen" };
      function aM(e) {
        if (e) {
          let { id: t, width: i, height: a } = e;
          return [t, i, a].filter((e) => null != e).join(":");
        }
      }
      function aO(e) {
        if (e) {
          let [t, i, a] = e.split(":");
          return { id: t, width: +i, height: +a };
        }
      }
      function aN(e) {
        if (e) {
          let { id: t, kind: i, language: a, label: r } = e;
          return [t, i, a, r].filter((e) => null != e).join(":");
        }
      }
      function ax(e) {
        if (e) {
          let [t, i, a, r] = e.split(":");
          return { id: t, kind: i, language: a, label: r };
        }
      }
      function aP(e) {
        return "number" == typeof e && !Number.isNaN(e) && Number.isFinite(e);
      }
      function aU(e) {
        return "string" == typeof e && !isNaN(e) && !isNaN(parseFloat(e));
      }
      let aB = (e) => new Promise((t) => setTimeout(t, e)),
        aW = [
          { singular: "hour", plural: "hours" },
          { singular: "minute", plural: "minutes" },
          { singular: "second", plural: "seconds" },
        ],
        aH = (e, t) => {
          let i = 1 === e ? aW[t].singular : aW[t].plural;
          return `${e} ${i}`;
        },
        aV = (e) => {
          if (!aP(e)) return "";
          let t = Math.abs(e),
            i = t !== e,
            a = new Date(0, 0, 0, 0, 0, t, 0),
            r = [a.getHours(), a.getMinutes(), a.getSeconds()]
              .map((e, t) => e && aH(e, t))
              .filter((e) => e)
              .join(", ");
          return `${r}${i ? " remaining" : ""}`;
        };
      function aF(e, t) {
        let i = !1;
        e < 0 && ((i = !0), (e = 0 - e));
        let a = Math.floor((e = e < 0 ? 0 : e) % 60),
          r = Math.floor((e / 60) % 60),
          n = Math.floor(e / 3600),
          s = Math.floor((t / 60) % 60),
          o = Math.floor(t / 3600);
        return (
          (isNaN(e) || e === 1 / 0) && (n = r = a = "0"),
          (r =
            (((n = n > 0 || o > 0 ? n + ":" : "") || s >= 10) && r < 10
              ? "0" + r
              : r) + ":"),
          (i ? "-" : "") + n + r + (a = a < 10 ? "0" + a : a)
        );
      }
      Object.freeze({
        length: 0,
        start(e) {
          let t = e >>> 0;
          if (t >= this.length)
            throw new DOMException(
              `Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`,
            );
          return 0;
        },
        end(e) {
          let t = e >>> 0;
          if (t >= this.length)
            throw new DOMException(
              `Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`,
            );
          return 0;
        },
      });
      let aq = {
          "Start airplay": "Start airplay",
          "Stop airplay": "Stop airplay",
          Audio: "Audio",
          Captions: "Captions",
          "Enable captions": "Enable captions",
          "Disable captions": "Disable captions",
          "Start casting": "Start casting",
          "Stop casting": "Stop casting",
          "Enter fullscreen mode": "Enter fullscreen mode",
          "Exit fullscreen mode": "Exit fullscreen mode",
          Mute: "Mute",
          Unmute: "Unmute",
          "Enter picture in picture mode": "Enter picture in picture mode",
          "Exit picture in picture mode": "Exit picture in picture mode",
          Play: "Play",
          Pause: "Pause",
          "Playback rate": "Playback rate",
          "Playback rate {playbackRate}": "Playback rate {playbackRate}",
          Quality: "Quality",
          "Seek backward": "Seek backward",
          "Seek forward": "Seek forward",
          Settings: "Settings",
          "audio player": "audio player",
          "video player": "video player",
          volume: "volume",
          seek: "seek",
          "closed captions": "closed captions",
          "current playback rate": "current playback rate",
          "playback time": "playback time",
          "media loading": "media loading",
          settings: "settings",
          "audio tracks": "audio tracks",
          quality: "quality",
          play: "play",
          pause: "pause",
          mute: "mute",
          unmute: "unmute",
          live: "live",
          "start airplay": "start airplay",
          "stop airplay": "stop airplay",
          "start casting": "start casting",
          "stop casting": "stop casting",
          "enter fullscreen mode": "enter fullscreen mode",
          "exit fullscreen mode": "exit fullscreen mode",
          "enter picture in picture mode": "enter picture in picture mode",
          "exit picture in picture mode": "exit picture in picture mode",
          "seek to live": "seek to live",
          "playing live": "playing live",
          "seek back {seekOffset} seconds": "seek back {seekOffset} seconds",
          "seek forward {seekOffset} seconds":
            "seek forward {seekOffset} seconds",
          "Network Error": "Network Error",
          "Decode Error": "Decode Error",
          "Source Not Supported": "Source Not Supported",
          "Encryption Error": "Encryption Error",
          "A network error caused the media download to fail.":
            "A network error caused the media download to fail.",
          "A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.":
            "A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.",
          "An unsupported error occurred. The server or network failed, or your browser does not support this format.":
            "An unsupported error occurred. The server or network failed, or your browser does not support this format.",
          "The media is encrypted and there are no keys to decrypt it.":
            "The media is encrypted and there are no keys to decrypt it.",
        },
        a$ = { en: aq },
        aK =
          (null ==
          (lD = null == (lC = globalThis.navigator) ? void 0 : lC.language)
            ? void 0
            : lD.split("-")[0]) || "en",
        aY = (e) => {
          aK = e;
        },
        aG = (e, t = {}) => {
          var i;
          return ((null == (i = a$[aK]) ? void 0 : i[e]) || aq[e]).replace(
            /\{(\w+)\}/g,
            (e, i) => (void 0 !== t[i] ? String(t[i]) : `{${i}}`),
          );
        };
      class aj {
        addEventListener() {}
        removeEventListener() {}
        dispatchEvent() {
          return !0;
        }
      }
      class aQ extends aj {}
      class aZ extends aQ {
        constructor() {
          (super(...arguments), (this.role = null));
        }
      }
      class az {
        observe() {}
        unobserve() {}
        disconnect() {}
      }
      let aX = {
          createElement: function () {
            return new aJ.HTMLElement();
          },
          createElementNS: function () {
            return new aJ.HTMLElement();
          },
          addEventListener() {},
          removeEventListener() {},
          dispatchEvent: (e) => !1,
        },
        aJ = {
          ResizeObserver: az,
          document: aX,
          Node: aQ,
          Element: aZ,
          HTMLElement: class extends aZ {
            constructor() {
              (super(...arguments), (this.innerHTML = ""));
            }
            get content() {
              return new aJ.DocumentFragment();
            }
          },
          DocumentFragment: class extends aj {},
          customElements: {
            get: function () {},
            define: function () {},
            whenDefined: function () {},
          },
          localStorage: {
            getItem: (e) => null,
            setItem(e, t) {},
            removeItem(e) {},
          },
          CustomEvent: function () {},
          getComputedStyle: function () {},
          navigator: {
            languages: [],
            get userAgent() {
              return "";
            },
          },
          matchMedia: (e) => ({ matches: !1, media: e }),
        },
        a0 = "undefined" == typeof window || void 0 === window.customElements,
        a1 = Object.keys(aJ).every((e) => e in globalThis),
        a2 = a0 && !a1 ? aJ : globalThis,
        a3 = a0 && !a1 ? aX : globalThis.document,
        a4 = new WeakMap(),
        a5 = (e) => {
          let t = a4.get(e);
          return (t || a4.set(e, (t = new Set())), t);
        },
        a9 = new a2.ResizeObserver((e) => {
          for (let t of e) for (let e of a5(t.target)) e(t);
        });
      function a8(e, t) {
        (a5(e).add(t), a9.observe(e));
      }
      function a6(e, t) {
        let i = a5(e);
        (i.delete(t), i.size || a9.unobserve(e));
      }
      function a7(e) {
        var t;
        return null != (t = re(e)) ? t : rn(e, "media-controller");
      }
      function re(e) {
        var t;
        let { MEDIA_CONTROLLER: i } = a_,
          a = e.getAttribute(i);
        if (a) return null == (t = ro(e)) ? void 0 : t.getElementById(a);
      }
      let rt = (e, t, i = ".value") => {
          let a = e.querySelector(i);
          a && (a.textContent = t);
        },
        ri = (e, t) => {
          let i = `slot[name="${t}"]`,
            a = e.shadowRoot.querySelector(i);
          return a ? a.children : [];
        },
        ra = (e, t) => ri(e, t)[0],
        rr = (e, t) =>
          !!e &&
          !!t &&
          ((null != e && !!e.contains(t)) || rr(e, t.getRootNode().host)),
        rn = (e, t) => {
          if (!e) return null;
          let i = e.closest(t);
          return i || rn(e.getRootNode().host, t);
        };
      function rs(e = document) {
        var t;
        let i = null == e ? void 0 : e.activeElement;
        return i ? (null != (t = rs(i.shadowRoot)) ? t : i) : null;
      }
      function ro(e) {
        var t;
        let i =
          null == (t = null == e ? void 0 : e.getRootNode) ? void 0 : t.call(e);
        return i instanceof ShadowRoot || i instanceof Document ? i : null;
      }
      function rl(
        e,
        { depth: t = 3, checkOpacity: i = !0, checkVisibilityCSS: a = !0 } = {},
      ) {
        if (e.checkVisibility)
          return e.checkVisibility({ checkOpacity: i, checkVisibilityCSS: a });
        let r = e;
        for (; r && t > 0; ) {
          let e = getComputedStyle(r);
          if (
            (i && "0" === e.opacity) ||
            (a && "hidden" === e.visibility) ||
            "none" === e.display
          )
            return !1;
          ((r = r.parentElement), t--);
        }
        return !0;
      }
      function rd(e, t) {
        let i = (function (e, t) {
          var i, a;
          let r;
          for (r of null != (i = e.querySelectorAll("style:not([media])"))
            ? i
            : []) {
            let e;
            try {
              e = null == (a = r.sheet) ? void 0 : a.cssRules;
            } catch {
              continue;
            }
            for (let i of null != e ? e : []) if (t(i.selectorText)) return i;
          }
        })(e, (e) => e === t);
        return i || ru(e, t);
      }
      function ru(e, t) {
        var i, a;
        let r = null != (i = e.querySelectorAll("style:not([media])")) ? i : [],
          n = null == r ? void 0 : r[r.length - 1];
        return (null == n ? void 0 : n.sheet)
          ? (null == n || n.sheet.insertRule(`${t}{}`, n.sheet.cssRules.length),
            null == (a = n.sheet.cssRules)
              ? void 0
              : a[n.sheet.cssRules.length - 1])
          : (console.warn(
              "Media Chrome: No style sheet found on style tag of",
              e,
            ),
            {
              style: {
                setProperty: () => {},
                removeProperty: () => "",
                getPropertyValue: () => "",
              },
            });
      }
      function rc(e, t, i = Number.NaN) {
        let a = e.getAttribute(t);
        return null != a ? +a : i;
      }
      function rh(e, t, i) {
        let a = +i;
        if (null == i || Number.isNaN(a)) {
          e.hasAttribute(t) && e.removeAttribute(t);
          return;
        }
        rc(e, t, void 0) !== a && e.setAttribute(t, `${a}`);
      }
      function rm(e, t) {
        return e.hasAttribute(t);
      }
      function rp(e, t, i) {
        if (null == i) {
          e.hasAttribute(t) && e.removeAttribute(t);
          return;
        }
        rm(e, t) != i && e.toggleAttribute(t, i);
      }
      function rv(e, t, i = null) {
        var a;
        return null != (a = e.getAttribute(t)) ? a : i;
      }
      function rE(e, t, i) {
        if (null == i) {
          e.hasAttribute(t) && e.removeAttribute(t);
          return;
        }
        let a = `${i}`;
        rv(e, t, void 0) !== a && e.setAttribute(t, a);
      }
      var rb = (e, t, i) => {
          if (!t.has(e)) throw TypeError("Cannot " + i);
        },
        rf = (e, t, i) => (
          rb(e, t, "read from private field"),
          i ? i.call(e) : t.get(e)
        ),
        rg = (e, t, i) => {
          if (t.has(e))
            throw TypeError(
              "Cannot add the same private member more than once",
            );
          t instanceof WeakSet ? t.add(e) : t.set(e, i);
        },
        r_ = (e, t, i, a) => (
          rb(e, t, "write to private field"),
          a ? a.call(e, i) : t.set(e, i),
          i
        );
      let ry = a3.createElement("template");
      ry.innerHTML = `
<style>
  :host {
    display: var(--media-control-display, var(--media-gesture-receiver-display, inline-block));
    box-sizing: border-box;
  }
</style>
`;
      class rT extends a2.HTMLElement {
        constructor(e = {}) {
          if ((super(), rg(this, lL, void 0), !this.shadowRoot)) {
            let t = this.attachShadow({ mode: "open" }),
              i = ry.content.cloneNode(!0);
            this.nativeEl = i;
            let a = e.slotTemplate;
            (a ||
              ((a = a3.createElement("template")).innerHTML =
                `<slot>${e.defaultContent || ""}</slot>`),
              this.nativeEl.appendChild(a.content.cloneNode(!0)),
              t.appendChild(i));
          }
        }
        static get observedAttributes() {
          return [a_.MEDIA_CONTROLLER, aA.MEDIA_PAUSED];
        }
        attributeChangedCallback(e, t, i) {
          var a, r, n, s, o;
          e === a_.MEDIA_CONTROLLER &&
            (t &&
              (null ==
                (r =
                  null == (a = rf(this, lL)) ? void 0 : a.unassociateElement) ||
                r.call(a, this),
              r_(this, lL, null)),
            i &&
              this.isConnected &&
              (r_(
                this,
                lL,
                null == (n = this.getRootNode()) ? void 0 : n.getElementById(i),
              ),
              null ==
                (o =
                  null == (s = rf(this, lL)) ? void 0 : s.associateElement) ||
                o.call(s, this)));
        }
        connectedCallback() {
          var e, t, i, a;
          ((this.tabIndex = -1),
            this.setAttribute("aria-hidden", "true"),
            r_(
              this,
              lL,
              (function (e) {
                var t;
                let i = e.getAttribute(a_.MEDIA_CONTROLLER);
                return i
                  ? null == (t = e.getRootNode())
                    ? void 0
                    : t.getElementById(i)
                  : rn(e, "media-controller");
              })(this),
            ),
            this.getAttribute(a_.MEDIA_CONTROLLER) &&
              (null ==
                (t =
                  null == (e = rf(this, lL)) ? void 0 : e.associateElement) ||
                t.call(e, this)),
            null == (i = rf(this, lL)) ||
              i.addEventListener("pointerdown", this),
            null == (a = rf(this, lL)) || a.addEventListener("click", this));
        }
        disconnectedCallback() {
          var e, t, i, a;
          (this.getAttribute(a_.MEDIA_CONTROLLER) &&
            (null ==
              (t =
                null == (e = rf(this, lL)) ? void 0 : e.unassociateElement) ||
              t.call(e, this)),
            null == (i = rf(this, lL)) ||
              i.removeEventListener("pointerdown", this),
            null == (a = rf(this, lL)) || a.removeEventListener("click", this),
            r_(this, lL, null));
        }
        handleEvent(e) {
          var t;
          let i = null == (t = e.composedPath()) ? void 0 : t[0];
          if (
            ["video", "media-controller"].includes(
              null == i ? void 0 : i.localName,
            )
          ) {
            if ("pointerdown" === e.type) this._pointerType = e.pointerType;
            else if ("click" === e.type) {
              let { clientX: t, clientY: i } = e,
                {
                  left: a,
                  top: r,
                  width: n,
                  height: s,
                } = this.getBoundingClientRect(),
                o = t - a,
                l = i - r;
              if (o < 0 || l < 0 || o > n || l > s || (0 === n && 0 === s))
                return;
              let { pointerType: d = this._pointerType } = e;
              if (((this._pointerType = void 0), d === aR.TOUCH))
                return void this.handleTap(e);
              if (d === aR.MOUSE) return void this.handleMouseClick(e);
            }
          }
        }
        get mediaPaused() {
          return rm(this, aA.MEDIA_PAUSED);
        }
        set mediaPaused(e) {
          rp(this, aA.MEDIA_PAUSED, e);
        }
        handleTap(e) {}
        handleMouseClick(e) {
          let t = this.mediaPaused
            ? ag.MEDIA_PLAY_REQUEST
            : ag.MEDIA_PAUSE_REQUEST;
          this.dispatchEvent(
            new a2.CustomEvent(t, { composed: !0, bubbles: !0 }),
          );
        }
      }
      ((lL = new WeakMap()),
        a2.customElements.get("media-gesture-receiver") ||
          a2.customElements.define("media-gesture-receiver", rT));
      var rA = (e, t, i) => {
          if (!t.has(e)) throw TypeError("Cannot " + i);
        },
        rk = (e, t, i) => (
          rA(e, t, "read from private field"),
          i ? i.call(e) : t.get(e)
        ),
        rw = (e, t, i) => {
          if (t.has(e))
            throw TypeError(
              "Cannot add the same private member more than once",
            );
          t instanceof WeakSet ? t.add(e) : t.set(e, i);
        },
        rS = (e, t, i, a) => (
          rA(e, t, "write to private field"),
          a ? a.call(e, i) : t.set(e, i),
          i
        ),
        rI = (e, t, i) => (rA(e, t, "access private method"), i);
      let rR = {
          AUDIO: "audio",
          AUTOHIDE: "autohide",
          BREAKPOINTS: "breakpoints",
          GESTURES_DISABLED: "gesturesdisabled",
          KEYBOARD_CONTROL: "keyboardcontrol",
          NO_AUTOHIDE: "noautohide",
          USER_INACTIVE: "userinactive",
          AUTOHIDE_OVER_CONTROLS: "autohideovercontrols",
        },
        rC = a3.createElement("template");
      rC.innerHTML = `
  <style>
    
    :host([${aA.MEDIA_IS_FULLSCREEN}]) ::slotted([slot=media]) {
      outline: none;
    }

    :host {
      box-sizing: border-box;
      position: relative;
      display: inline-block;
      line-height: 0;
      background-color: var(--media-background-color, #000);
    }

    :host(:not([${rR.AUDIO}])) [part~=layer]:not([part~=media-layer]) {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      display: flex;
      flex-flow: column nowrap;
      align-items: start;
      pointer-events: none;
      background: none;
    }

    slot[name=media] {
      display: var(--media-slot-display, contents);
    }

    
    :host([${rR.AUDIO}]) slot[name=media] {
      display: var(--media-slot-display, none);
    }

    
    :host([${rR.AUDIO}]) [part~=layer][part~=gesture-layer] {
      height: 0;
      display: block;
    }

    
    :host(:not([${rR.AUDIO}])[${rR.GESTURES_DISABLED}]) ::slotted([slot=gestures-chrome]),
    :host(:not([${rR.AUDIO}])[${rR.GESTURES_DISABLED}]) media-gesture-receiver[slot=gestures-chrome] {
      display: none;
    }

    
    ::slotted(:not([slot=media]):not([slot=poster]):not(media-loading-indicator):not([role=dialog]):not([hidden])) {
      pointer-events: auto;
    }

    :host(:not([${rR.AUDIO}])) *[part~=layer][part~=centered-layer] {
      align-items: center;
      justify-content: center;
    }

    :host(:not([${rR.AUDIO}])) ::slotted(media-gesture-receiver[slot=gestures-chrome]),
    :host(:not([${rR.AUDIO}])) media-gesture-receiver[slot=gestures-chrome] {
      align-self: stretch;
      flex-grow: 1;
    }

    slot[name=middle-chrome] {
      display: inline;
      flex-grow: 1;
      pointer-events: none;
      background: none;
    }

    
    ::slotted([slot=media]),
    ::slotted([slot=poster]) {
      width: 100%;
      height: 100%;
    }

    
    :host(:not([${rR.AUDIO}])) .spacer {
      flex-grow: 1;
    }

    
    :host(:-webkit-full-screen) {
      
      width: 100% !important;
      height: 100% !important;
    }

    
    ::slotted(:not([slot=media]):not([slot=poster]):not([${rR.NO_AUTOHIDE}]):not([hidden]):not([role=dialog])) {
      opacity: 1;
      transition: var(--media-control-transition-in, opacity 0.25s);
    }

    
    :host([${rR.USER_INACTIVE}]:not([${aA.MEDIA_PAUSED}]):not([${aA.MEDIA_IS_AIRPLAYING}]):not([${aA.MEDIA_IS_CASTING}]):not([${rR.AUDIO}])) ::slotted(:not([slot=media]):not([slot=poster]):not([${rR.NO_AUTOHIDE}]):not([role=dialog])) {
      opacity: 0;
      transition: var(--media-control-transition-out, opacity 1s);
    }

    :host([${rR.USER_INACTIVE}]:not([${rR.NO_AUTOHIDE}]):not([${aA.MEDIA_PAUSED}]):not([${aA.MEDIA_IS_CASTING}]):not([${rR.AUDIO}])) ::slotted([slot=media]) {
      cursor: none;
    }

    :host([${rR.USER_INACTIVE}][${rR.AUTOHIDE_OVER_CONTROLS}]:not([${rR.NO_AUTOHIDE}]):not([${aA.MEDIA_PAUSED}]):not([${aA.MEDIA_IS_CASTING}]):not([${rR.AUDIO}])) * {
     --media-cursor: none;
     cursor: none;
    }


    ::slotted(media-control-bar)  {
      align-self: stretch;
    }

    
    :host(:not([${rR.AUDIO}])[${aA.MEDIA_HAS_PLAYED}]) slot[name=poster] {
      display: none;
    }

    ::slotted([role=dialog]) {
      width: 100%;
      height: 100%;
      align-self: center;
    }

    ::slotted([role=menu]) {
      align-self: end;
    }
  </style>

  <slot name="media" part="layer media-layer"></slot>
  <slot name="poster" part="layer poster-layer"></slot>
  <slot name="gestures-chrome" part="layer gesture-layer">
    <media-gesture-receiver slot="gestures-chrome"></media-gesture-receiver>
  </slot>
  <span part="layer vertical-layer">
    <slot name="top-chrome" part="top chrome"></slot>
    <slot name="middle-chrome" part="middle chrome"></slot>
    <slot name="centered-chrome" part="layer centered-layer center centered chrome"></slot>
    
    <slot part="bottom chrome"></slot>
  </span>
  <slot name="dialog" part="layer dialog-layer"></slot>
`;
      let rD = Object.values(aA);
      function rL(e, t) {
        var i, a, r;
        if (!e.isConnected) return;
        let n = Object.fromEntries(
            (null != (i = e.getAttribute(rR.BREAKPOINTS))
              ? i
              : "sm:384 md:576 lg:768 xl:960"
            )
              .split(/\s+/)
              .map((e) => e.split(":")),
          ),
          s =
            ((a = n),
            (r = t),
            Object.keys(a).filter((e) => r >= parseInt(a[e]))),
          o = !1;
        if (
          (Object.keys(n).forEach((t) => {
            if (s.includes(t)) {
              e.hasAttribute(`breakpoint${t}`) ||
                (e.setAttribute(`breakpoint${t}`, ""), (o = !0));
              return;
            }
            e.hasAttribute(`breakpoint${t}`) &&
              (e.removeAttribute(`breakpoint${t}`), (o = !0));
          }),
          o)
        ) {
          let t = new CustomEvent(ak.BREAKPOINTS_CHANGE, { detail: s });
          e.dispatchEvent(t);
        }
        e.breakpointsComputed ||
          ((e.breakpointsComputed = !0),
          e.dispatchEvent(
            new CustomEvent(ak.BREAKPOINTS_COMPUTED, {
              bubbles: !0,
              composed: !0,
            }),
          ));
      }
      class rM extends a2.HTMLElement {
        constructor() {
          (super(),
            rw(this, lU),
            rw(this, lV),
            rw(this, lq),
            rw(this, lK),
            rw(this, lG),
            rw(this, lQ),
            rw(this, lM, 0),
            rw(this, lO, null),
            rw(this, lN, null),
            rw(this, lx, void 0),
            (this.breakpointsComputed = !1),
            rw(this, lP, new MutationObserver(rI(this, lU, lB).bind(this))),
            rw(this, lW, !1),
            rw(this, lH, (e) => {
              rk(this, lW) ||
                (setTimeout(() => {
                  (!(function (e) {
                    rL(e.target, e.contentRect.width);
                  })(e),
                    rS(this, lW, !1));
                }, 0),
                rS(this, lW, !0));
            }),
            this.shadowRoot ||
              (this.attachShadow({ mode: "open" }),
              this.shadowRoot.appendChild(rC.content.cloneNode(!0))));
          let e = this.querySelector(":scope > slot[slot=media]");
          e &&
            e.addEventListener("slotchange", () => {
              if (!e.assignedElements({ flatten: !0 }).length) {
                rk(this, lO) && this.mediaUnsetCallback(rk(this, lO));
                return;
              }
              this.handleMediaUpdated(this.media);
            });
        }
        static get observedAttributes() {
          return [rR.AUTOHIDE, rR.GESTURES_DISABLED]
            .concat(rD)
            .filter(
              (e) =>
                ![
                  aA.MEDIA_RENDITION_LIST,
                  aA.MEDIA_AUDIO_TRACK_LIST,
                  aA.MEDIA_CHAPTERS_CUES,
                  aA.MEDIA_WIDTH,
                  aA.MEDIA_HEIGHT,
                  aA.MEDIA_ERROR,
                  aA.MEDIA_ERROR_MESSAGE,
                ].includes(e),
            );
        }
        attributeChangedCallback(e, t, i) {
          e.toLowerCase() == rR.AUTOHIDE && (this.autohide = i);
        }
        get media() {
          let e = this.querySelector(":scope > [slot=media]");
          return (
            (null == e ? void 0 : e.nodeName) == "SLOT" &&
              (e = e.assignedElements({ flatten: !0 })[0]),
            e
          );
        }
        async handleMediaUpdated(e) {
          e &&
            (rS(this, lO, e),
            e.localName.includes("-") &&
              (await a2.customElements.whenDefined(e.localName)),
            this.mediaSetCallback(e));
        }
        connectedCallback() {
          var e;
          (rk(this, lP).observe(this, { childList: !0, subtree: !0 }),
            a8(this, rk(this, lH)));
          let t =
            null != this.getAttribute(rR.AUDIO)
              ? aG("audio player")
              : aG("video player");
          (this.setAttribute("role", "region"),
            this.setAttribute("aria-label", t),
            this.handleMediaUpdated(this.media),
            this.setAttribute(rR.USER_INACTIVE, ""),
            rL(this, this.getBoundingClientRect().width),
            this.addEventListener("pointerdown", this),
            this.addEventListener("pointermove", this),
            this.addEventListener("pointerup", this),
            this.addEventListener("mouseleave", this),
            this.addEventListener("keyup", this),
            null == (e = a2.window) || e.addEventListener("mouseup", this));
        }
        disconnectedCallback() {
          var e;
          (rk(this, lP).disconnect(),
            a6(this, rk(this, lH)),
            this.media && this.mediaUnsetCallback(this.media),
            null == (e = a2.window) || e.removeEventListener("mouseup", this));
        }
        mediaSetCallback(e) {}
        mediaUnsetCallback(e) {
          rS(this, lO, null);
        }
        handleEvent(e) {
          switch (e.type) {
            case "pointerdown":
              rS(this, lM, e.timeStamp);
              break;
            case "pointermove":
              rI(this, lV, lF).call(this, e);
              break;
            case "pointerup":
              rI(this, lq, l$).call(this, e);
              break;
            case "mouseleave":
              rI(this, lK, lY).call(this);
              break;
            case "mouseup":
              this.removeAttribute(rR.KEYBOARD_CONTROL);
              break;
            case "keyup":
              (rI(this, lQ, lZ).call(this),
                this.setAttribute(rR.KEYBOARD_CONTROL, ""));
          }
        }
        set autohide(e) {
          let t = Number(e);
          rS(this, lx, isNaN(t) ? 0 : t);
        }
        get autohide() {
          return (void 0 === rk(this, lx) ? 2 : rk(this, lx)).toString();
        }
        get breakpoints() {
          return rv(this, rR.BREAKPOINTS);
        }
        set breakpoints(e) {
          rE(this, rR.BREAKPOINTS, e);
        }
        get audio() {
          return rm(this, rR.AUDIO);
        }
        set audio(e) {
          rp(this, rR.AUDIO, e);
        }
        get gesturesDisabled() {
          return rm(this, rR.GESTURES_DISABLED);
        }
        set gesturesDisabled(e) {
          rp(this, rR.GESTURES_DISABLED, e);
        }
        get keyboardControl() {
          return rm(this, rR.KEYBOARD_CONTROL);
        }
        set keyboardControl(e) {
          rp(this, rR.KEYBOARD_CONTROL, e);
        }
        get noAutohide() {
          return rm(this, rR.NO_AUTOHIDE);
        }
        set noAutohide(e) {
          rp(this, rR.NO_AUTOHIDE, e);
        }
        get autohideOverControls() {
          return rm(this, rR.AUTOHIDE_OVER_CONTROLS);
        }
        set autohideOverControls(e) {
          rp(this, rR.AUTOHIDE_OVER_CONTROLS, e);
        }
        get userInteractive() {
          return rm(this, rR.USER_INACTIVE);
        }
        set userInteractive(e) {
          rp(this, rR.USER_INACTIVE, e);
        }
      }
      ((lM = new WeakMap()),
        (lO = new WeakMap()),
        (lN = new WeakMap()),
        (lx = new WeakMap()),
        (lP = new WeakMap()),
        (lU = new WeakSet()),
        (lB = function (e) {
          let t = this.media;
          for (let i of e)
            if ("childList" === i.type) {
              for (let e of i.removedNodes) {
                if ("media" != e.slot || i.target != this) continue;
                let a =
                  i.previousSibling && i.previousSibling.previousElementSibling;
                if (a && t) {
                  let t = "media" !== a.slot;
                  for (; null !== (a = a.previousSibling); )
                    "media" == a.slot && (t = !1);
                  t && this.mediaUnsetCallback(e);
                } else this.mediaUnsetCallback(e);
              }
              if (t)
                for (let e of i.addedNodes)
                  e === t && this.handleMediaUpdated(t);
            }
        }),
        (lW = new WeakMap()),
        (lH = new WeakMap()),
        (lV = new WeakSet()),
        (lF = function (e) {
          if ("mouse" !== e.pointerType && e.timeStamp - rk(this, lM) < 250)
            return;
          (rI(this, lG, lj).call(this), clearTimeout(rk(this, lN)));
          let t = this.hasAttribute(rR.AUTOHIDE_OVER_CONTROLS);
          ([this, this.media].includes(e.target) || t) &&
            rI(this, lQ, lZ).call(this);
        }),
        (lq = new WeakSet()),
        (l$ = function (e) {
          if ("touch" === e.pointerType) {
            let t = !this.hasAttribute(rR.USER_INACTIVE);
            [this, this.media].includes(e.target) && t
              ? rI(this, lK, lY).call(this)
              : rI(this, lQ, lZ).call(this);
          } else
            e
              .composedPath()
              .some((e) =>
                ["media-play-button", "media-fullscreen-button"].includes(
                  null == e ? void 0 : e.localName,
                ),
              ) && rI(this, lQ, lZ).call(this);
        }),
        (lK = new WeakSet()),
        (lY = function () {
          if (0 > rk(this, lx) || this.hasAttribute(rR.USER_INACTIVE)) return;
          this.setAttribute(rR.USER_INACTIVE, "");
          let e = new a2.CustomEvent(ak.USER_INACTIVE_CHANGE, {
            composed: !0,
            bubbles: !0,
            detail: !0,
          });
          this.dispatchEvent(e);
        }),
        (lG = new WeakSet()),
        (lj = function () {
          if (!this.hasAttribute(rR.USER_INACTIVE)) return;
          this.removeAttribute(rR.USER_INACTIVE);
          let e = new a2.CustomEvent(ak.USER_INACTIVE_CHANGE, {
            composed: !0,
            bubbles: !0,
            detail: !1,
          });
          this.dispatchEvent(e);
        }),
        (lQ = new WeakSet()),
        (lZ = function () {
          (rI(this, lG, lj).call(this), clearTimeout(rk(this, lN)));
          let e = parseInt(this.autohide);
          e < 0 ||
            rS(
              this,
              lN,
              setTimeout(() => {
                rI(this, lK, lY).call(this);
              }, 1e3 * e),
            );
        }),
        a2.customElements.get("media-container") ||
          a2.customElements.define("media-container", rM));
      var rO = (e, t, i) => {
          if (!t.has(e)) throw TypeError("Cannot " + i);
        },
        rN = (e, t, i) => (
          rO(e, t, "read from private field"),
          i ? i.call(e) : t.get(e)
        ),
        rx = (e, t, i) => {
          if (t.has(e))
            throw TypeError(
              "Cannot add the same private member more than once",
            );
          t instanceof WeakSet ? t.add(e) : t.set(e, i);
        },
        rP = (e, t, i, a) => (
          rO(e, t, "write to private field"),
          a ? a.call(e, i) : t.set(e, i),
          i
        );
      class rU {
        constructor(e, t, { defaultValue: i } = { defaultValue: void 0 }) {
          (rx(this, l1),
            rx(this, lz, void 0),
            rx(this, lX, void 0),
            rx(this, lJ, void 0),
            rx(this, l0, new Set()),
            rP(this, lz, e),
            rP(this, lX, t),
            rP(this, lJ, new Set(i)));
        }
        [Symbol.iterator]() {
          return rN(this, l1, l2).values();
        }
        get length() {
          return rN(this, l1, l2).size;
        }
        get value() {
          var e;
          return null != (e = [...rN(this, l1, l2)].join(" ")) ? e : "";
        }
        set value(e) {
          var t;
          e !== this.value &&
            (rP(this, l0, new Set()),
            this.add(
              ...(null != (t = null == e ? void 0 : e.split(" ")) ? t : []),
            ));
        }
        toString() {
          return this.value;
        }
        item(e) {
          return [...rN(this, l1, l2)][e];
        }
        values() {
          return rN(this, l1, l2).values();
        }
        forEach(e, t) {
          rN(this, l1, l2).forEach(e, t);
        }
        add(...e) {
          var t, i;
          (e.forEach((e) => rN(this, l0).add(e)),
            ("" !== this.value ||
              (null == (t = rN(this, lz))
                ? void 0
                : t.hasAttribute(`${rN(this, lX)}`))) &&
              (null == (i = rN(this, lz)) ||
                i.setAttribute(`${rN(this, lX)}`, `${this.value}`)));
        }
        remove(...e) {
          var t;
          (e.forEach((e) => rN(this, l0).delete(e)),
            null == (t = rN(this, lz)) ||
              t.setAttribute(`${rN(this, lX)}`, `${this.value}`));
        }
        contains(e) {
          return rN(this, l1, l2).has(e);
        }
        toggle(e, t) {
          if (void 0 !== t)
            if (t) return (this.add(e), !0);
            else return (this.remove(e), !1);
          return this.contains(e) ? (this.remove(e), !1) : (this.add(e), !0);
        }
        replace(e, t) {
          return (this.remove(e), this.add(t), e === t);
        }
      }
      ((lz = new WeakMap()),
        (lX = new WeakMap()),
        (lJ = new WeakMap()),
        (l0 = new WeakMap()),
        (l1 = new WeakSet()),
        (l2 = function () {
          return rN(this, l0).size ? rN(this, l0) : rN(this, lJ);
        }));
      let rB = (e = "") => e.split(/\s+/),
        rW = (e = "") => {
          let [t, i, a] = e.split(":"),
            r = a ? decodeURIComponent(a) : void 0;
          return {
            kind: "cc" === t ? aS.CAPTIONS : aS.SUBTITLES,
            language: i,
            label: r,
          };
        },
        rH = (e = "", t = {}) =>
          rB(e).map((e) => {
            let i = rW(e);
            return { ...t, ...i };
          }),
        rV = (e) =>
          e
            ? Array.isArray(e)
              ? e.map((e) => ("string" == typeof e ? rW(e) : e))
              : "string" == typeof e
                ? rH(e)
                : [e]
            : [],
        rF = ({ kind: e, label: t, language: i } = { kind: "subtitles" }) =>
          t
            ? `${"captions" === e ? "cc" : "sb"}:${i}:${encodeURIComponent(t)}`
            : i,
        rq = (e = []) => Array.prototype.map.call(e, rF).join(" "),
        r$ = (e, t) => (i) => i[e] === t,
        rK = (e) => {
          let t = Object.entries(e).map(([e, t]) => r$(e, t));
          return (e) => t.every((t) => t(e));
        },
        rY = (e, t = [], i = []) => {
          let a = rV(i).map(rK);
          Array.from(t)
            .filter((e) => a.some((t) => t(e)))
            .forEach((t) => {
              t.mode = e;
            });
        },
        rG = (e, t = () => !0) => {
          if (!(null == e ? void 0 : e.textTracks)) return [];
          let i = "function" == typeof t ? t : rK(t);
          return Array.from(e.textTracks).filter(i);
        },
        rj = (e) => {
          var t;
          return (
            !!(null == (t = e.mediaSubtitlesShowing) ? void 0 : t.length) ||
            e.hasAttribute(aA.MEDIA_SUBTITLES_SHOWING)
          );
        },
        rQ = (e) => {
          var t;
          let { media: i, fullscreenElement: a } = e;
          try {
            let e =
              a && "requestFullscreen" in a
                ? "requestFullscreen"
                : a && "webkitRequestFullScreen" in a
                  ? "webkitRequestFullScreen"
                  : void 0;
            if (e) {
              let i = null == (t = a[e]) ? void 0 : t.call(a);
              if (i instanceof Promise) return i.catch(() => {});
            } else
              (null == i ? void 0 : i.webkitEnterFullscreen)
                ? i.webkitEnterFullscreen()
                : (null == i ? void 0 : i.requestFullscreen) &&
                  i.requestFullscreen();
          } catch (e) {
            console.error(e);
          }
        },
        rZ =
          "exitFullscreen" in a3
            ? "exitFullscreen"
            : "webkitExitFullscreen" in a3
              ? "webkitExitFullscreen"
              : "webkitCancelFullScreen" in a3
                ? "webkitCancelFullScreen"
                : void 0,
        rz = (e) => {
          var t;
          let { documentElement: i } = e;
          if (rZ) {
            let e =
              null == (t = null == i ? void 0 : i[rZ]) ? void 0 : t.call(i);
            if (e instanceof Promise) return e.catch(() => {});
          }
        },
        rX =
          "fullscreenElement" in a3
            ? "fullscreenElement"
            : "webkitFullscreenElement" in a3
              ? "webkitFullscreenElement"
              : void 0,
        rJ = (e) => {
          let { documentElement: t, media: i } = e,
            a = null == t ? void 0 : t[rX];
          return !a &&
            "webkitDisplayingFullscreen" in i &&
            "webkitPresentationMode" in i &&
            i.webkitDisplayingFullscreen &&
            i.webkitPresentationMode === aL.FULLSCREEN
            ? i
            : a;
        },
        r0 = (e) => {
          var t;
          let { media: i, documentElement: a, fullscreenElement: r = i } = e;
          if (!i || !a) return !1;
          let n = rJ(e);
          if (!n) return !1;
          if (n === r || n === i) return !0;
          if (n.localName.includes("-")) {
            let e = n.shadowRoot;
            if (!(rX in e)) return rr(n, r);
            for (; null == e ? void 0 : e[rX]; ) {
              if (e[rX] === r) return !0;
              e = null == (t = e[rX]) ? void 0 : t.shadowRoot;
            }
          }
          return !1;
        },
        r1 =
          "fullscreenEnabled" in a3
            ? "fullscreenEnabled"
            : "webkitFullscreenEnabled" in a3
              ? "webkitFullscreenEnabled"
              : void 0,
        r2 = (e) => {
          let { documentElement: t, media: i } = e;
          return (
            !!(null == t ? void 0 : t[r1]) ||
            (i && "webkitSupportsFullscreen" in i)
          );
        },
        r3 = () => {
          var e;
          return (
            a ||
            (a =
              null == (e = null == a3 ? void 0 : a3.createElement)
                ? void 0
                : e.call(a3, "video"))
          );
        },
        r4 = async (e = r3()) => {
          if (!e) return !1;
          let t = e.volume;
          e.volume = t / 2 + 0.1;
          let i = new AbortController(),
            a = await Promise.race([r5(e, i.signal), r9(e, t)]);
          return (i.abort(), a);
        },
        r5 = (e, t) =>
          new Promise((i) => {
            e.addEventListener("volumechange", () => i(!0), { signal: t });
          }),
        r9 = async (e, t) => {
          for (let i = 0; i < 10; i++) {
            if (e.volume === t) return !1;
            await aB(10);
          }
          return e.volume !== t;
        },
        r8 = /.*Version\/.*Safari\/.*/.test(a2.navigator.userAgent),
        r6 = (e = r3()) =>
          (!a2.matchMedia("(display-mode: standalone)").matches || !r8) &&
          "function" == typeof (null == e ? void 0 : e.requestPictureInPicture),
        r7 = (e = r3()) => r2({ documentElement: a3, media: e }),
        ne = r7(),
        nt = r6(),
        ni = !!a2.WebKitPlaybackTargetAvailabilityEvent,
        na = !!a2.chrome,
        nr = (e) =>
          rG(e.media, (e) => [aS.SUBTITLES, aS.CAPTIONS].includes(e.kind)).sort(
            (e, t) => (e.kind >= t.kind ? 1 : -1),
          ),
        nn = (e) =>
          rG(
            e.media,
            (e) =>
              e.mode === aI.SHOWING &&
              [aS.SUBTITLES, aS.CAPTIONS].includes(e.kind),
          ),
        ns = (e, t) => {
          let i = nr(e),
            a = nn(e),
            r = !!a.length;
          if (i.length) {
            if (!1 === t || (r && !0 !== t)) rY(aI.DISABLED, i, a);
            else if (!0 === t || (!r && !1 !== t)) {
              let t = i[0],
                { options: r } = e;
              if (!(null == r ? void 0 : r.noSubtitlesLangPref)) {
                let e = globalThis.localStorage.getItem(
                    "media-chrome-pref-subtitles-lang",
                  ),
                  a = e
                    ? [e, ...globalThis.navigator.languages]
                    : globalThis.navigator.languages,
                  r = i
                    .filter((e) =>
                      a.some((t) =>
                        e.language.toLowerCase().startsWith(t.split("-")[0]),
                      ),
                    )
                    .sort(
                      (e, t) =>
                        a.findIndex((t) =>
                          e.language.toLowerCase().startsWith(t.split("-")[0]),
                        ) -
                        a.findIndex((e) =>
                          t.language.toLowerCase().startsWith(e.split("-")[0]),
                        ),
                    );
                r[0] && (t = r[0]);
              }
              let { language: n, label: s, kind: o } = t;
              (rY(aI.DISABLED, i, a),
                rY(aI.SHOWING, i, [{ language: n, label: s, kind: o }]));
            }
          }
        },
        no = (e, t) =>
          e === t ||
          (null != e &&
            null != t &&
            typeof e == typeof t &&
            (!!("number" == typeof e && Number.isNaN(e) && Number.isNaN(t)) ||
              ("object" == typeof e &&
                (Array.isArray(e)
                  ? nl(e, t)
                  : Object.entries(e).every(
                      ([e, i]) => e in t && no(i, t[e]),
                    ))))),
        nl = (e, t) => {
          let i = Array.isArray(e),
            a = Array.isArray(t);
          return (
            i === a &&
            ((!i && !a) ||
              (e.length === t.length && e.every((e, i) => no(e, t[i]))))
          );
        },
        nd = Object.values(aD),
        nu = r4().then((e) => (r = e)),
        nc = async (...e) => {
          await Promise.all(
            e
              .filter((e) => e)
              .map(async (e) => {
                if (!("localName" in e && e instanceof a2.HTMLElement)) return;
                let t = e.localName;
                if (!t.includes("-")) return;
                let i = a2.customElements.get(t);
                (i && e instanceof i) ||
                  (await a2.customElements.whenDefined(t),
                  a2.customElements.upgrade(e));
              }),
          );
        },
        nh = {
          mediaError: {
            get(e, t) {
              let { media: i } = e;
              if ((null == t ? void 0 : t.type) !== "playing")
                return null == i ? void 0 : i.error;
            },
            mediaEvents: ["emptied", "error", "playing"],
          },
          mediaErrorCode: {
            get(e, t) {
              var i;
              let { media: a } = e;
              if ((null == t ? void 0 : t.type) !== "playing")
                return null == (i = null == a ? void 0 : a.error)
                  ? void 0
                  : i.code;
            },
            mediaEvents: ["emptied", "error", "playing"],
          },
          mediaErrorMessage: {
            get(e, t) {
              var i, a;
              let { media: r } = e;
              if ((null == t ? void 0 : t.type) !== "playing")
                return null !=
                  (a =
                    null == (i = null == r ? void 0 : r.error)
                      ? void 0
                      : i.message)
                  ? a
                  : "";
            },
            mediaEvents: ["emptied", "error", "playing"],
          },
          mediaWidth: {
            get(e) {
              var t;
              let { media: i } = e;
              return null != (t = null == i ? void 0 : i.videoWidth) ? t : 0;
            },
            mediaEvents: ["resize"],
          },
          mediaHeight: {
            get(e) {
              var t;
              let { media: i } = e;
              return null != (t = null == i ? void 0 : i.videoHeight) ? t : 0;
            },
            mediaEvents: ["resize"],
          },
          mediaPaused: {
            get(e) {
              var t;
              let { media: i } = e;
              return null == (t = null == i ? void 0 : i.paused) || t;
            },
            set(e, t) {
              var i;
              let { media: a } = t;
              a &&
                (e ? a.pause() : null == (i = a.play()) || i.catch(() => {}));
            },
            mediaEvents: ["play", "playing", "pause", "emptied"],
          },
          mediaHasPlayed: {
            get(e, t) {
              let { media: i } = e;
              return !!i && (t ? "playing" === t.type : !i.paused);
            },
            mediaEvents: ["playing", "emptied"],
          },
          mediaEnded: {
            get(e) {
              var t;
              let { media: i } = e;
              return null != (t = null == i ? void 0 : i.ended) && t;
            },
            mediaEvents: ["seeked", "ended", "emptied"],
          },
          mediaPlaybackRate: {
            get(e) {
              var t;
              let { media: i } = e;
              return null != (t = null == i ? void 0 : i.playbackRate) ? t : 1;
            },
            set(e, t) {
              let { media: i } = t;
              i && Number.isFinite(+e) && (i.playbackRate = +e);
            },
            mediaEvents: ["ratechange", "loadstart"],
          },
          mediaMuted: {
            get(e) {
              var t;
              let { media: i } = e;
              return null != (t = null == i ? void 0 : i.muted) && t;
            },
            set(e, t) {
              let { media: i } = t;
              if (i) {
                try {
                  a2.localStorage.setItem(
                    "media-chrome-pref-muted",
                    e ? "true" : "false",
                  );
                } catch (e) {
                  console.debug("Error setting muted pref", e);
                }
                i.muted = e;
              }
            },
            mediaEvents: ["volumechange"],
            stateOwnersUpdateHandlers: [
              (e, t) => {
                let {
                    options: { noMutedPref: i },
                  } = t,
                  { media: a } = t;
                if (a && !a.muted && !i)
                  try {
                    let i =
                      "true" ===
                      a2.localStorage.getItem("media-chrome-pref-muted");
                    (nh.mediaMuted.set(i, t), e(i));
                  } catch (e) {
                    console.debug("Error getting muted pref", e);
                  }
              },
            ],
          },
          mediaVolume: {
            get(e) {
              var t;
              let { media: i } = e;
              return null != (t = null == i ? void 0 : i.volume) ? t : 1;
            },
            set(e, t) {
              let { media: i } = t;
              if (i) {
                try {
                  null == e
                    ? a2.localStorage.removeItem("media-chrome-pref-volume")
                    : a2.localStorage.setItem(
                        "media-chrome-pref-volume",
                        e.toString(),
                      );
                } catch (e) {
                  console.debug("Error setting volume pref", e);
                }
                Number.isFinite(+e) && (i.volume = +e);
              }
            },
            mediaEvents: ["volumechange"],
            stateOwnersUpdateHandlers: [
              (e, t) => {
                let {
                  options: { noVolumePref: i },
                } = t;
                if (!i)
                  try {
                    let { media: i } = t;
                    if (!i) return;
                    let a = a2.localStorage.getItem("media-chrome-pref-volume");
                    if (null == a) return;
                    (nh.mediaVolume.set(+a, t), e(+a));
                  } catch (e) {
                    console.debug("Error getting volume pref", e);
                  }
              },
            ],
          },
          mediaVolumeLevel: {
            get(e) {
              let { media: t } = e;
              return void 0 === (null == t ? void 0 : t.volume)
                ? "high"
                : t.muted || 0 === t.volume
                  ? "off"
                  : t.volume < 0.5
                    ? "low"
                    : t.volume < 0.75
                      ? "medium"
                      : "high";
            },
            mediaEvents: ["volumechange"],
          },
          mediaCurrentTime: {
            get(e) {
              var t;
              let { media: i } = e;
              return null != (t = null == i ? void 0 : i.currentTime) ? t : 0;
            },
            set(e, t) {
              let { media: i } = t;
              i && aP(e) && (i.currentTime = e);
            },
            mediaEvents: ["timeupdate", "loadedmetadata"],
          },
          mediaDuration: {
            get(e) {
              let { media: t, options: { defaultDuration: i } = {} } = e;
              return i &&
                (!t ||
                  !t.duration ||
                  Number.isNaN(t.duration) ||
                  !Number.isFinite(t.duration))
                ? i
                : Number.isFinite(null == t ? void 0 : t.duration)
                  ? t.duration
                  : Number.NaN;
            },
            mediaEvents: ["durationchange", "loadedmetadata", "emptied"],
          },
          mediaLoading: {
            get(e) {
              let { media: t } = e;
              return (null == t ? void 0 : t.readyState) < 3;
            },
            mediaEvents: ["waiting", "playing", "emptied"],
          },
          mediaSeekable: {
            get(e) {
              var t;
              let { media: i } = e;
              if (
                !(null == (t = null == i ? void 0 : i.seekable)
                  ? void 0
                  : t.length)
              )
                return;
              let a = i.seekable.start(0),
                r = i.seekable.end(i.seekable.length - 1);
              if (a || r) return [Number(a.toFixed(3)), Number(r.toFixed(3))];
            },
            mediaEvents: [
              "loadedmetadata",
              "emptied",
              "progress",
              "seekablechange",
            ],
          },
          mediaBuffered: {
            get(e) {
              var t;
              let { media: i } = e,
                a = null != (t = null == i ? void 0 : i.buffered) ? t : [];
              return Array.from(a).map((e, t) => [
                Number(a.start(t).toFixed(3)),
                Number(a.end(t).toFixed(3)),
              ]);
            },
            mediaEvents: ["progress", "emptied"],
          },
          mediaStreamType: {
            get(e) {
              let { media: t, options: { defaultStreamType: i } = {} } = e,
                a = [aD.LIVE, aD.ON_DEMAND].includes(i) ? i : void 0;
              if (!t) return a;
              let { streamType: r } = t;
              if (nd.includes(r)) return r === aD.UNKNOWN ? a : r;
              let n = t.duration;
              return n === 1 / 0
                ? aD.LIVE
                : Number.isFinite(n)
                  ? aD.ON_DEMAND
                  : a;
            },
            mediaEvents: [
              "emptied",
              "durationchange",
              "loadedmetadata",
              "streamtypechange",
            ],
          },
          mediaTargetLiveWindow: {
            get(e) {
              let { media: t } = e;
              if (!t) return Number.NaN;
              let { targetLiveWindow: i } = t,
                a = nh.mediaStreamType.get(e);
              return (null == i || Number.isNaN(i)) && a === aD.LIVE ? 0 : i;
            },
            mediaEvents: [
              "emptied",
              "durationchange",
              "loadedmetadata",
              "streamtypechange",
              "targetlivewindowchange",
            ],
          },
          mediaTimeIsLive: {
            get(e) {
              let { media: t, options: { liveEdgeOffset: i = 10 } = {} } = e;
              if (!t) return !1;
              if ("number" == typeof t.liveEdgeStart)
                return (
                  !Number.isNaN(t.liveEdgeStart) &&
                  t.currentTime >= t.liveEdgeStart
                );
              if (nh.mediaStreamType.get(e) !== aD.LIVE) return !1;
              let a = t.seekable;
              if (!a) return !0;
              if (!a.length) return !1;
              let r = a.end(a.length - 1) - i;
              return t.currentTime >= r;
            },
            mediaEvents: [
              "playing",
              "timeupdate",
              "progress",
              "waiting",
              "emptied",
            ],
          },
          mediaSubtitlesList: {
            get: (e) =>
              nr(e).map(({ kind: e, label: t, language: i }) => ({
                kind: e,
                label: t,
                language: i,
              })),
            mediaEvents: ["loadstart"],
            textTracksEvents: ["addtrack", "removetrack"],
          },
          mediaSubtitlesShowing: {
            get: (e) =>
              nn(e).map(({ kind: e, label: t, language: i }) => ({
                kind: e,
                label: t,
                language: i,
              })),
            mediaEvents: ["loadstart"],
            textTracksEvents: ["addtrack", "removetrack", "change"],
            stateOwnersUpdateHandlers: [
              (e, t) => {
                var i, a;
                let { media: r, options: n } = t;
                if (!r) return;
                let s = (e) => {
                  var i;
                  n.defaultSubtitles &&
                    ((e &&
                      ![aS.CAPTIONS, aS.SUBTITLES].includes(
                        null == (i = null == e ? void 0 : e.track)
                          ? void 0
                          : i.kind,
                      )) ||
                      ns(t, !0));
                };
                return (
                  r.addEventListener("loadstart", s),
                  null == (i = r.textTracks) ||
                    i.addEventListener("addtrack", s),
                  null == (a = r.textTracks) ||
                    a.addEventListener("removetrack", s),
                  () => {
                    var e, t;
                    (r.removeEventListener("loadstart", s),
                      null == (e = r.textTracks) ||
                        e.removeEventListener("addtrack", s),
                      null == (t = r.textTracks) ||
                        t.removeEventListener("removetrack", s));
                  }
                );
              },
            ],
          },
          mediaChaptersCues: {
            get(e) {
              var t;
              let { media: i } = e;
              if (!i) return [];
              let [a] = rG(i, { kind: aS.CHAPTERS });
              return Array.from(
                null != (t = null == a ? void 0 : a.cues) ? t : [],
              ).map(({ text: e, startTime: t, endTime: i }) => ({
                text: e,
                startTime: t,
                endTime: i,
              }));
            },
            mediaEvents: ["loadstart", "loadedmetadata"],
            textTracksEvents: ["addtrack", "removetrack", "change"],
            stateOwnersUpdateHandlers: [
              (e, t) => {
                var i;
                let { media: a } = t;
                if (!a) return;
                let r = a.querySelector('track[kind="chapters"][default][src]'),
                  n =
                    null == (i = a.shadowRoot)
                      ? void 0
                      : i.querySelector(
                          ':is(video,audio) > track[kind="chapters"][default][src]',
                        );
                return (
                  null == r || r.addEventListener("load", e),
                  null == n || n.addEventListener("load", e),
                  () => {
                    (null == r || r.removeEventListener("load", e),
                      null == n || n.removeEventListener("load", e));
                  }
                );
              },
            ],
          },
          mediaIsPip: {
            get(e) {
              var t, i;
              let { media: a, documentElement: r } = e;
              if (!a || !r || !r.pictureInPictureElement) return !1;
              if (r.pictureInPictureElement === a) return !0;
              if (r.pictureInPictureElement instanceof HTMLMediaElement)
                return (
                  !!(null == (t = a.localName) ? void 0 : t.includes("-")) &&
                  rr(a, r.pictureInPictureElement)
                );
              if (r.pictureInPictureElement.localName.includes("-")) {
                let e = r.pictureInPictureElement.shadowRoot;
                for (; null == e ? void 0 : e.pictureInPictureElement; ) {
                  if (e.pictureInPictureElement === a) return !0;
                  e =
                    null == (i = e.pictureInPictureElement)
                      ? void 0
                      : i.shadowRoot;
                }
              }
              return !1;
            },
            set(e, t) {
              let { media: i } = t;
              if (i)
                if (e) {
                  if (!a3.pictureInPictureEnabled)
                    return void console.warn(
                      "MediaChrome: Picture-in-picture is not enabled",
                    );
                  if (!i.requestPictureInPicture)
                    return void console.warn(
                      "MediaChrome: The current media does not support picture-in-picture",
                    );
                  let e = () => {
                    console.warn(
                      "MediaChrome: The media is not ready for picture-in-picture. It must have a readyState > 0.",
                    );
                  };
                  i.requestPictureInPicture().catch((t) => {
                    if (11 === t.code) {
                      if (!i.src)
                        return void console.warn(
                          "MediaChrome: The media is not ready for picture-in-picture. It must have a src set.",
                        );
                      if (0 === i.readyState && "none" === i.preload) {
                        let t = () => {
                            (i.removeEventListener("loadedmetadata", a),
                              (i.preload = "none"));
                          },
                          a = () => {
                            (i.requestPictureInPicture().catch(e), t());
                          };
                        (i.addEventListener("loadedmetadata", a),
                          (i.preload = "metadata"),
                          setTimeout(() => {
                            (0 === i.readyState && e(), t());
                          }, 1e3));
                      } else throw t;
                    } else throw t;
                  });
                } else a3.pictureInPictureElement && a3.exitPictureInPicture();
            },
            mediaEvents: ["enterpictureinpicture", "leavepictureinpicture"],
          },
          mediaRenditionList: {
            get(e) {
              var t;
              let { media: i } = e;
              return [
                ...(null != (t = null == i ? void 0 : i.videoRenditions)
                  ? t
                  : []),
              ].map((e) => ({ ...e }));
            },
            mediaEvents: ["emptied", "loadstart"],
            videoRenditionsEvents: ["addrendition", "removerendition"],
          },
          mediaRenditionSelected: {
            get(e) {
              var t, i, a;
              let { media: r } = e;
              return null ==
                (a =
                  null == (i = null == r ? void 0 : r.videoRenditions)
                    ? void 0
                    : i[
                        null == (t = r.videoRenditions)
                          ? void 0
                          : t.selectedIndex
                      ])
                ? void 0
                : a.id;
            },
            set(e, t) {
              let { media: i } = t;
              if (!(null == i ? void 0 : i.videoRenditions))
                return void console.warn(
                  "MediaController: Rendition selection not supported by this media.",
                );
              let a = Array.prototype.findIndex.call(
                i.videoRenditions,
                (t) => t.id == e,
              );
              i.videoRenditions.selectedIndex != a &&
                (i.videoRenditions.selectedIndex = a);
            },
            mediaEvents: ["emptied"],
            videoRenditionsEvents: [
              "addrendition",
              "removerendition",
              "change",
            ],
          },
          mediaAudioTrackList: {
            get(e) {
              var t;
              let { media: i } = e;
              return [
                ...(null != (t = null == i ? void 0 : i.audioTracks) ? t : []),
              ];
            },
            mediaEvents: ["emptied", "loadstart"],
            audioTracksEvents: ["addtrack", "removetrack"],
          },
          mediaAudioTrackEnabled: {
            get(e) {
              var t, i;
              let { media: a } = e;
              return null ==
                (i = [
                  ...(null != (t = null == a ? void 0 : a.audioTracks)
                    ? t
                    : []),
                ].find((e) => e.enabled))
                ? void 0
                : i.id;
            },
            set(e, t) {
              let { media: i } = t;
              if (!(null == i ? void 0 : i.audioTracks))
                return void console.warn(
                  "MediaChrome: Audio track selection not supported by this media.",
                );
              for (let t of i.audioTracks) t.enabled = e == t.id;
            },
            mediaEvents: ["emptied"],
            audioTracksEvents: ["addtrack", "removetrack", "change"],
          },
          mediaIsFullscreen: {
            get: (e) => r0(e),
            set(e, t) {
              e ? rQ(t) : rz(t);
            },
            rootEvents: ["fullscreenchange", "webkitfullscreenchange"],
            mediaEvents: [
              "webkitbeginfullscreen",
              "webkitendfullscreen",
              "webkitpresentationmodechanged",
            ],
          },
          mediaIsCasting: {
            get(e) {
              var t;
              let { media: i } = e;
              return (
                !!(null == i ? void 0 : i.remote) &&
                (null == (t = i.remote) ? void 0 : t.state) !==
                  "disconnected" &&
                !!i.remote.state
              );
            },
            set(e, t) {
              var i, a;
              let { media: r } = t;
              if (
                r &&
                (!e ||
                  (null == (i = r.remote) ? void 0 : i.state) ===
                    "disconnected") &&
                (e ||
                  (null == (a = r.remote) ? void 0 : a.state) === "connected")
              ) {
                if ("function" != typeof r.remote.prompt)
                  return void console.warn(
                    "MediaChrome: Casting is not supported in this environment",
                  );
                r.remote.prompt().catch(() => {});
              }
            },
            remoteEvents: ["connect", "connecting", "disconnect"],
          },
          mediaIsAirplaying: {
            get: () => !1,
            set(e, t) {
              let { media: i } = t;
              if (i) {
                if (
                  !(
                    i.webkitShowPlaybackTargetPicker &&
                    a2.WebKitPlaybackTargetAvailabilityEvent
                  )
                )
                  return void console.error(
                    "MediaChrome: received a request to select AirPlay but AirPlay is not supported in this environment",
                  );
                i.webkitShowPlaybackTargetPicker();
              }
            },
            mediaEvents: ["webkitcurrentplaybacktargetiswirelesschanged"],
          },
          mediaFullscreenUnavailable: {
            get(e) {
              let { media: t } = e;
              if (!ne || !r7(t)) return aC.UNSUPPORTED;
            },
          },
          mediaPipUnavailable: {
            get(e) {
              let { media: t } = e;
              if (!nt || !r6(t)) return aC.UNSUPPORTED;
            },
          },
          mediaVolumeUnavailable: {
            get(e) {
              let { media: t } = e;
              if (!1 === r || (null == t ? void 0 : t.volume) == void 0)
                return aC.UNSUPPORTED;
            },
            stateOwnersUpdateHandlers: [
              (e) => {
                null == r && nu.then((t) => e(t ? void 0 : aC.UNSUPPORTED));
              },
            ],
          },
          mediaCastUnavailable: {
            get(e, { availability: t = "not-available" } = {}) {
              var i;
              let { media: a } = e;
              return na &&
                (null == (i = null == a ? void 0 : a.remote) ? void 0 : i.state)
                ? null != t && "available" !== t
                  ? aC.UNAVAILABLE
                  : void 0
                : aC.UNSUPPORTED;
            },
            stateOwnersUpdateHandlers: [
              (e, t) => {
                var i;
                let { media: a } = t;
                if (a)
                  return (
                    a.disableRemotePlayback ||
                      a.hasAttribute("disableremoteplayback") ||
                      null == (i = null == a ? void 0 : a.remote) ||
                      i
                        .watchAvailability((t) => {
                          e({
                            availability: t ? "available" : "not-available",
                          });
                        })
                        .catch((t) => {
                          "NotSupportedError" === t.name
                            ? e({ availability: null })
                            : e({ availability: "not-available" });
                        }),
                    () => {
                      var e;
                      null == (e = null == a ? void 0 : a.remote) ||
                        e.cancelWatchAvailability().catch(() => {});
                    }
                  );
              },
            ],
          },
          mediaAirplayUnavailable: {
            get: (e, t) =>
              ni
                ? (null == t ? void 0 : t.availability) === "not-available"
                  ? aC.UNAVAILABLE
                  : void 0
                : aC.UNSUPPORTED,
            mediaEvents: ["webkitplaybacktargetavailabilitychanged"],
            stateOwnersUpdateHandlers: [
              (e, t) => {
                var i;
                let { media: a } = t;
                if (a)
                  return (
                    a.disableRemotePlayback ||
                      a.hasAttribute("disableremoteplayback") ||
                      null == (i = null == a ? void 0 : a.remote) ||
                      i
                        .watchAvailability((t) => {
                          e({
                            availability: t ? "available" : "not-available",
                          });
                        })
                        .catch((t) => {
                          "NotSupportedError" === t.name
                            ? e({ availability: null })
                            : e({ availability: "not-available" });
                        }),
                    () => {
                      var e;
                      null == (e = null == a ? void 0 : a.remote) ||
                        e.cancelWatchAvailability().catch(() => {});
                    }
                  );
              },
            ],
          },
          mediaRenditionUnavailable: {
            get(e) {
              var t;
              let { media: i } = e;
              return (null == i ? void 0 : i.videoRenditions)
                ? (null == (t = i.videoRenditions) ? void 0 : t.length)
                  ? void 0
                  : aC.UNAVAILABLE
                : aC.UNSUPPORTED;
            },
            mediaEvents: ["emptied", "loadstart"],
            videoRenditionsEvents: ["addrendition", "removerendition"],
          },
          mediaAudioTrackUnavailable: {
            get(e) {
              var t, i;
              let { media: a } = e;
              return (null == a ? void 0 : a.audioTracks)
                ? (null != (i = null == (t = a.audioTracks) ? void 0 : t.length)
                    ? i
                    : 0) <= 1
                  ? aC.UNAVAILABLE
                  : void 0
                : aC.UNSUPPORTED;
            },
            mediaEvents: ["emptied", "loadstart"],
            audioTracksEvents: ["addtrack", "removetrack"],
          },
        },
        nm = {
          [ag.MEDIA_PREVIEW_REQUEST](e, t, { detail: i }) {
            var a, r, n;
            let s,
              o,
              { media: l } = t,
              d = null != i ? i : void 0;
            if (l && null != d) {
              let [e] = rG(l, { kind: aS.METADATA, label: "thumbnails" }),
                t = Array.prototype.find.call(
                  null != (a = null == e ? void 0 : e.cues) ? a : [],
                  (e, t, i) =>
                    0 === t
                      ? e.endTime > d
                      : t === i.length - 1
                        ? e.startTime <= d
                        : e.startTime <= d && e.endTime > d,
                );
              if (t) {
                let e =
                    /'^(?:[a-z]+:)?\/\//i.test(t.text) ||
                    null ==
                      (r =
                        null == l
                          ? void 0
                          : l.querySelector('track[label="thumbnails"]'))
                      ? void 0
                      : r.src,
                  i = new URL(t.text, e);
                ((o = new URLSearchParams(i.hash)
                  .get("#xywh")
                  .split(",")
                  .map((e) => +e)),
                  (s = i.href));
              }
            }
            let u = e.mediaDuration.get(t),
              c =
                null ==
                (n = e.mediaChaptersCues
                  .get(t)
                  .find((e, t, i) =>
                    t === i.length - 1 && u === e.endTime
                      ? e.startTime <= d && e.endTime >= d
                      : e.startTime <= d && e.endTime > d,
                  ))
                  ? void 0
                  : n.text;
            return (
              null != i && null == c && (c = ""),
              {
                mediaPreviewTime: d,
                mediaPreviewImage: s,
                mediaPreviewCoords: o,
                mediaPreviewChapter: c,
              }
            );
          },
          [ag.MEDIA_PAUSE_REQUEST](e, t) {
            e.mediaPaused.set(!0, t);
          },
          [ag.MEDIA_PLAY_REQUEST](e, t) {
            var i, a, r, n;
            let s = e.mediaStreamType.get(t) === aD.LIVE,
              o = !(null == (i = t.options) ? void 0 : i.noAutoSeekToLive),
              l = e.mediaTargetLiveWindow.get(t) > 0;
            if (s && o && !l) {
              let i = null == (a = e.mediaSeekable.get(t)) ? void 0 : a[1];
              if (i) {
                let a =
                  null !=
                  (n = null == (r = t.options) ? void 0 : r.seekToLiveOffset)
                    ? n
                    : 0;
                e.mediaCurrentTime.set(i - a, t);
              }
            }
            e.mediaPaused.set(!1, t);
          },
          [ag.MEDIA_PLAYBACK_RATE_REQUEST](e, t, { detail: i }) {
            e.mediaPlaybackRate.set(i, t);
          },
          [ag.MEDIA_MUTE_REQUEST](e, t) {
            e.mediaMuted.set(!0, t);
          },
          [ag.MEDIA_UNMUTE_REQUEST](e, t) {
            (e.mediaVolume.get(t) || e.mediaVolume.set(0.25, t),
              e.mediaMuted.set(!1, t));
          },
          [ag.MEDIA_VOLUME_REQUEST](e, t, { detail: i }) {
            (i && e.mediaMuted.get(t) && e.mediaMuted.set(!1, t),
              e.mediaVolume.set(i, t));
          },
          [ag.MEDIA_SEEK_REQUEST](e, t, { detail: i }) {
            e.mediaCurrentTime.set(i, t);
          },
          [ag.MEDIA_SEEK_TO_LIVE_REQUEST](e, t) {
            var i, a, r;
            let n = null == (i = e.mediaSeekable.get(t)) ? void 0 : i[1];
            if (Number.isNaN(Number(n))) return;
            let s =
              null !=
              (r = null == (a = t.options) ? void 0 : a.seekToLiveOffset)
                ? r
                : 0;
            e.mediaCurrentTime.set(n - s, t);
          },
          [ag.MEDIA_SHOW_SUBTITLES_REQUEST](e, t, { detail: i }) {
            var a;
            let { options: r } = t,
              n = nr(t),
              s = rV(i),
              o = null == (a = s[0]) ? void 0 : a.language;
            (o &&
              !r.noSubtitlesLangPref &&
              a2.localStorage.setItem("media-chrome-pref-subtitles-lang", o),
              rY(aI.SHOWING, n, s));
          },
          [ag.MEDIA_DISABLE_SUBTITLES_REQUEST](e, t, { detail: i }) {
            let a = nr(t);
            rY(aI.DISABLED, a, null != i ? i : []);
          },
          [ag.MEDIA_TOGGLE_SUBTITLES_REQUEST](e, t, { detail: i }) {
            ns(t, i);
          },
          [ag.MEDIA_RENDITION_REQUEST](e, t, { detail: i }) {
            e.mediaRenditionSelected.set(i, t);
          },
          [ag.MEDIA_AUDIO_TRACK_REQUEST](e, t, { detail: i }) {
            e.mediaAudioTrackEnabled.set(i, t);
          },
          [ag.MEDIA_ENTER_PIP_REQUEST](e, t) {
            (e.mediaIsFullscreen.get(t) && e.mediaIsFullscreen.set(!1, t),
              e.mediaIsPip.set(!0, t));
          },
          [ag.MEDIA_EXIT_PIP_REQUEST](e, t) {
            e.mediaIsPip.set(!1, t);
          },
          [ag.MEDIA_ENTER_FULLSCREEN_REQUEST](e, t) {
            (e.mediaIsPip.get(t) && e.mediaIsPip.set(!1, t),
              e.mediaIsFullscreen.set(!0, t));
          },
          [ag.MEDIA_EXIT_FULLSCREEN_REQUEST](e, t) {
            e.mediaIsFullscreen.set(!1, t);
          },
          [ag.MEDIA_ENTER_CAST_REQUEST](e, t) {
            (e.mediaIsFullscreen.get(t) && e.mediaIsFullscreen.set(!1, t),
              e.mediaIsCasting.set(!0, t));
          },
          [ag.MEDIA_EXIT_CAST_REQUEST](e, t) {
            e.mediaIsCasting.set(!1, t);
          },
          [ag.MEDIA_AIRPLAY_REQUEST](e, t) {
            e.mediaIsAirplaying.set(!0, t);
          },
        },
        np = ({
          media: e,
          fullscreenElement: t,
          documentElement: i,
          stateMediator: a = nh,
          requestMap: r = nm,
          options: n = {},
          monitorStateOwnersOnlyWithSubscriptions: s = !0,
        }) => {
          let o,
            l = [],
            d = { options: { ...n } },
            u = Object.freeze({
              mediaPreviewTime: void 0,
              mediaPreviewImage: void 0,
              mediaPreviewCoords: void 0,
              mediaPreviewChapter: void 0,
            }),
            c = (e) => {
              void 0 != e &&
                (no(e, u) ||
                  ((u = Object.freeze({ ...u, ...e })),
                  l.forEach((e) => e(u))));
            },
            h = () => {
              c(
                Object.entries(a).reduce(
                  (e, [t, { get: i }]) => ((e[t] = i(d)), e),
                  {},
                ),
              );
            },
            m = {},
            p = async (e, t) => {
              var i, r, n, u, p, E, b, f, g, _, y, T, A, k, w, S;
              let I = !!o;
              if (((o = { ...d, ...(null != o ? o : {}), ...e }), I)) return;
              await nc(...Object.values(e));
              let R = l.length > 0 && 0 === t && s,
                C = d.media !== o.media,
                D =
                  (null == (i = d.media) ? void 0 : i.textTracks) !==
                  (null == (r = o.media) ? void 0 : r.textTracks),
                L =
                  (null == (n = d.media) ? void 0 : n.videoRenditions) !==
                  (null == (u = o.media) ? void 0 : u.videoRenditions),
                M =
                  (null == (p = d.media) ? void 0 : p.audioTracks) !==
                  (null == (E = o.media) ? void 0 : E.audioTracks),
                O =
                  (null == (b = d.media) ? void 0 : b.remote) !==
                  (null == (f = o.media) ? void 0 : f.remote),
                N = d.documentElement !== o.documentElement,
                x = !!d.media && (C || R),
                P =
                  !!(null == (g = d.media) ? void 0 : g.textTracks) && (D || R),
                U =
                  !!(null == (_ = d.media) ? void 0 : _.videoRenditions) &&
                  (L || R),
                B =
                  !!(null == (y = d.media) ? void 0 : y.audioTracks) &&
                  (M || R),
                W = !!(null == (T = d.media) ? void 0 : T.remote) && (O || R),
                H = !!d.documentElement && (N || R),
                V = x || P || U || B || W || H,
                F = 0 === l.length && 1 === t && s,
                q = !!o.media && (C || F),
                $ =
                  !!(null == (A = o.media) ? void 0 : A.textTracks) && (D || F),
                K =
                  !!(null == (k = o.media) ? void 0 : k.videoRenditions) &&
                  (L || F),
                Y =
                  !!(null == (w = o.media) ? void 0 : w.audioTracks) &&
                  (M || F),
                G = !!(null == (S = o.media) ? void 0 : S.remote) && (O || F),
                j = !!o.documentElement && (N || F),
                Q = q || $ || K || Y || G || j;
              if (!(V || Q)) {
                (Object.entries(o).forEach(([e, t]) => {
                  d[e] = t;
                }),
                  h(),
                  (o = void 0));
                return;
              }
              (Object.entries(a).forEach(
                ([
                  e,
                  {
                    get: t,
                    mediaEvents: i = [],
                    textTracksEvents: a = [],
                    videoRenditionsEvents: r = [],
                    audioTracksEvents: n = [],
                    remoteEvents: s = [],
                    rootEvents: l = [],
                    stateOwnersUpdateHandlers: u = [],
                  },
                ]) => {
                  let h;
                  m[e] || (m[e] = {});
                  let p = (i) => {
                    c({ [e]: t(d, i) });
                  };
                  ((h = m[e].mediaEvents),
                    i.forEach((t) => {
                      (h &&
                        x &&
                        (d.media.removeEventListener(t, h),
                        (m[e].mediaEvents = void 0)),
                        q &&
                          (o.media.addEventListener(t, p),
                          (m[e].mediaEvents = p)));
                    }),
                    (h = m[e].textTracksEvents),
                    a.forEach((t) => {
                      var i, a;
                      (h &&
                        P &&
                        (null == (i = d.media.textTracks) ||
                          i.removeEventListener(t, h),
                        (m[e].textTracksEvents = void 0)),
                        $ &&
                          (null == (a = o.media.textTracks) ||
                            a.addEventListener(t, p),
                          (m[e].textTracksEvents = p)));
                    }),
                    (h = m[e].videoRenditionsEvents),
                    r.forEach((t) => {
                      var i, a;
                      (h &&
                        U &&
                        (null == (i = d.media.videoRenditions) ||
                          i.removeEventListener(t, h),
                        (m[e].videoRenditionsEvents = void 0)),
                        K &&
                          (null == (a = o.media.videoRenditions) ||
                            a.addEventListener(t, p),
                          (m[e].videoRenditionsEvents = p)));
                    }),
                    (h = m[e].audioTracksEvents),
                    n.forEach((t) => {
                      var i, a;
                      (h &&
                        B &&
                        (null == (i = d.media.audioTracks) ||
                          i.removeEventListener(t, h),
                        (m[e].audioTracksEvents = void 0)),
                        Y &&
                          (null == (a = o.media.audioTracks) ||
                            a.addEventListener(t, p),
                          (m[e].audioTracksEvents = p)));
                    }),
                    (h = m[e].remoteEvents),
                    s.forEach((t) => {
                      var i, a;
                      (h &&
                        W &&
                        (null == (i = d.media.remote) ||
                          i.removeEventListener(t, h),
                        (m[e].remoteEvents = void 0)),
                        G &&
                          (null == (a = o.media.remote) ||
                            a.addEventListener(t, p),
                          (m[e].remoteEvents = p)));
                    }),
                    (h = m[e].rootEvents),
                    l.forEach((t) => {
                      (h &&
                        H &&
                        (d.documentElement.removeEventListener(t, h),
                        (m[e].rootEvents = void 0)),
                        j &&
                          (o.documentElement.addEventListener(t, p),
                          (m[e].rootEvents = p)));
                    }));
                  let E = m[e].stateOwnersUpdateHandlers;
                  u.forEach((t) => {
                    (E && V && E(),
                      Q && (m[e].stateOwnersUpdateHandlers = t(p, o)));
                  });
                },
              ),
                Object.entries(o).forEach(([e, t]) => {
                  d[e] = t;
                }),
                h(),
                (o = void 0));
            };
          return (
            p({
              media: e,
              fullscreenElement: t,
              documentElement: i,
              options: n,
            }),
            {
              dispatch(e) {
                let { type: t, detail: i } = e;
                if (r[t] && null == u.mediaErrorCode)
                  return void c(r[t](a, d, e));
                "mediaelementchangerequest" === t
                  ? p({ media: i })
                  : "fullscreenelementchangerequest" === t
                    ? p({ fullscreenElement: i })
                    : "documentelementchangerequest" === t
                      ? p({ documentElement: i })
                      : "optionschangerequest" === t &&
                        Object.entries(null != i ? i : {}).forEach(([e, t]) => {
                          d.options[e] = t;
                        });
              },
              getState: () => u,
              subscribe: (e) => (
                p({}, l.length + 1),
                l.push(e),
                e(u),
                () => {
                  let t = l.indexOf(e);
                  t >= 0 && (p({}, l.length - 1), l.splice(t, 1));
                }
              ),
            }
          );
        };
      var nv = (e, t, i) => {
          if (!t.has(e)) throw TypeError("Cannot " + i);
        },
        nE = (e, t, i) => (
          nv(e, t, "read from private field"),
          i ? i.call(e) : t.get(e)
        ),
        nb = (e, t, i) => {
          if (t.has(e))
            throw TypeError(
              "Cannot add the same private member more than once",
            );
          t instanceof WeakSet ? t.add(e) : t.set(e, i);
        },
        nf = (e, t, i, a) => (
          nv(e, t, "write to private field"),
          a ? a.call(e, i) : t.set(e, i),
          i
        ),
        ng = (e, t, i) => (nv(e, t, "access private method"), i);
      let n_ = ["ArrowLeft", "ArrowRight", "Enter", " ", "f", "m", "k", "c"],
        ny = {
          DEFAULT_SUBTITLES: "defaultsubtitles",
          DEFAULT_STREAM_TYPE: "defaultstreamtype",
          DEFAULT_DURATION: "defaultduration",
          FULLSCREEN_ELEMENT: "fullscreenelement",
          HOTKEYS: "hotkeys",
          KEYS_USED: "keysused",
          LIVE_EDGE_OFFSET: "liveedgeoffset",
          SEEK_TO_LIVE_OFFSET: "seektoliveoffset",
          NO_AUTO_SEEK_TO_LIVE: "noautoseektolive",
          NO_HOTKEYS: "nohotkeys",
          NO_VOLUME_PREF: "novolumepref",
          NO_SUBTITLES_LANG_PREF: "nosubtitleslangpref",
          NO_DEFAULT_STORE: "nodefaultstore",
          KEYBOARD_FORWARD_SEEK_OFFSET: "keyboardforwardseekoffset",
          KEYBOARD_BACKWARD_SEEK_OFFSET: "keyboardbackwardseekoffset",
          LANG: "lang",
        };
      class nT extends rM {
        constructor() {
          (super(),
            nb(this, l7),
            nb(this, dt),
            nb(this, da),
            (this.mediaStateReceivers = []),
            (this.associatedElementSubscriptions = new Map()),
            nb(this, l3, new rU(this, ny.HOTKEYS)),
            nb(this, l4, void 0),
            nb(this, l5, void 0),
            nb(this, l9, void 0),
            nb(this, l8, void 0),
            nb(this, l6, (e) => {
              var t;
              null == (t = nE(this, l5)) || t.dispatch(e);
            }),
            this.associateElement(this));
          let e = {};
          (nf(this, l9, (t) => {
            (Object.entries(t).forEach(([t, i]) => {
              if (t in e && e[t] === i) return;
              this.propagateMediaState(t, i);
              let a = t.toLowerCase(),
                r = new a2.CustomEvent(aw[a], { composed: !0, detail: i });
              this.dispatchEvent(r);
            }),
              (e = t));
          }),
            this.enableHotkeys());
        }
        static get observedAttributes() {
          return super.observedAttributes.concat(
            ny.NO_HOTKEYS,
            ny.HOTKEYS,
            ny.DEFAULT_STREAM_TYPE,
            ny.DEFAULT_SUBTITLES,
            ny.DEFAULT_DURATION,
            ny.LANG,
          );
        }
        get mediaStore() {
          return nE(this, l5);
        }
        set mediaStore(e) {
          var t, i;
          if (
            (nE(this, l5) &&
              (null == (t = nE(this, l8)) || t.call(this),
              nf(this, l8, void 0)),
            nf(this, l5, e),
            !nE(this, l5) && !this.hasAttribute(ny.NO_DEFAULT_STORE))
          )
            return void ng(this, l7, de).call(this);
          nf(
            this,
            l8,
            null == (i = nE(this, l5)) ? void 0 : i.subscribe(nE(this, l9)),
          );
        }
        get fullscreenElement() {
          var e;
          return null != (e = nE(this, l4)) ? e : this;
        }
        set fullscreenElement(e) {
          var t;
          (this.hasAttribute(ny.FULLSCREEN_ELEMENT) &&
            this.removeAttribute(ny.FULLSCREEN_ELEMENT),
            nf(this, l4, e),
            null == (t = nE(this, l5)) ||
              t.dispatch({
                type: "fullscreenelementchangerequest",
                detail: this.fullscreenElement,
              }));
        }
        get defaultSubtitles() {
          return rm(this, ny.DEFAULT_SUBTITLES);
        }
        set defaultSubtitles(e) {
          rp(this, ny.DEFAULT_SUBTITLES, e);
        }
        get defaultStreamType() {
          return rv(this, ny.DEFAULT_STREAM_TYPE);
        }
        set defaultStreamType(e) {
          rE(this, ny.DEFAULT_STREAM_TYPE, e);
        }
        get defaultDuration() {
          return rc(this, ny.DEFAULT_DURATION);
        }
        set defaultDuration(e) {
          rh(this, ny.DEFAULT_DURATION, e);
        }
        get noHotkeys() {
          return rm(this, ny.NO_HOTKEYS);
        }
        set noHotkeys(e) {
          rp(this, ny.NO_HOTKEYS, e);
        }
        get keysUsed() {
          return rv(this, ny.KEYS_USED);
        }
        set keysUsed(e) {
          rE(this, ny.KEYS_USED, e);
        }
        get liveEdgeOffset() {
          return rc(this, ny.LIVE_EDGE_OFFSET);
        }
        set liveEdgeOffset(e) {
          rh(this, ny.LIVE_EDGE_OFFSET, e);
        }
        get noAutoSeekToLive() {
          return rm(this, ny.NO_AUTO_SEEK_TO_LIVE);
        }
        set noAutoSeekToLive(e) {
          rp(this, ny.NO_AUTO_SEEK_TO_LIVE, e);
        }
        get noVolumePref() {
          return rm(this, ny.NO_VOLUME_PREF);
        }
        set noVolumePref(e) {
          rp(this, ny.NO_VOLUME_PREF, e);
        }
        get noSubtitlesLangPref() {
          return rm(this, ny.NO_SUBTITLES_LANG_PREF);
        }
        set noSubtitlesLangPref(e) {
          rp(this, ny.NO_SUBTITLES_LANG_PREF, e);
        }
        get noDefaultStore() {
          return rm(this, ny.NO_DEFAULT_STORE);
        }
        set noDefaultStore(e) {
          rp(this, ny.NO_DEFAULT_STORE, e);
        }
        attributeChangedCallback(e, t, i) {
          var a, r, n, s, o, l, d, u;
          if ((super.attributeChangedCallback(e, t, i), e === ny.NO_HOTKEYS))
            i !== t && "" === i
              ? (this.hasAttribute(ny.HOTKEYS) &&
                  console.warn(
                    "Media Chrome: Both `hotkeys` and `nohotkeys` have been set. All hotkeys will be disabled.",
                  ),
                this.disableHotkeys())
              : i !== t && null === i && this.enableHotkeys();
          else if (e === ny.HOTKEYS) nE(this, l3).value = i;
          else if (e === ny.DEFAULT_SUBTITLES && i !== t)
            null == (a = nE(this, l5)) ||
              a.dispatch({
                type: "optionschangerequest",
                detail: {
                  defaultSubtitles: this.hasAttribute(ny.DEFAULT_SUBTITLES),
                },
              });
          else if (e === ny.DEFAULT_STREAM_TYPE)
            null == (n = nE(this, l5)) ||
              n.dispatch({
                type: "optionschangerequest",
                detail: {
                  defaultStreamType:
                    null != (r = this.getAttribute(ny.DEFAULT_STREAM_TYPE))
                      ? r
                      : void 0,
                },
              });
          else if (e === ny.LIVE_EDGE_OFFSET)
            null == (s = nE(this, l5)) ||
              s.dispatch({
                type: "optionschangerequest",
                detail: {
                  liveEdgeOffset: this.hasAttribute(ny.LIVE_EDGE_OFFSET)
                    ? +this.getAttribute(ny.LIVE_EDGE_OFFSET)
                    : void 0,
                  seekToLiveOffset: this.hasAttribute(ny.SEEK_TO_LIVE_OFFSET)
                    ? void 0
                    : +this.getAttribute(ny.LIVE_EDGE_OFFSET),
                },
              });
          else if (e === ny.SEEK_TO_LIVE_OFFSET)
            null == (o = nE(this, l5)) ||
              o.dispatch({
                type: "optionschangerequest",
                detail: {
                  seekToLiveOffset: this.hasAttribute(ny.SEEK_TO_LIVE_OFFSET)
                    ? +this.getAttribute(ny.SEEK_TO_LIVE_OFFSET)
                    : void 0,
                },
              });
          else if (e === ny.NO_AUTO_SEEK_TO_LIVE)
            null == (l = nE(this, l5)) ||
              l.dispatch({
                type: "optionschangerequest",
                detail: {
                  noAutoSeekToLive: this.hasAttribute(ny.NO_AUTO_SEEK_TO_LIVE),
                },
              });
          else if (e === ny.FULLSCREEN_ELEMENT) {
            let e = i
              ? null == (d = this.getRootNode())
                ? void 0
                : d.getElementById(i)
              : void 0;
            (nf(this, l4, e),
              null == (u = nE(this, l5)) ||
                u.dispatch({
                  type: "fullscreenelementchangerequest",
                  detail: this.fullscreenElement,
                }));
          } else e === ny.LANG && i !== t && aY(i);
        }
        connectedCallback() {
          var e, t;
          (nE(this, l5) ||
            this.hasAttribute(ny.NO_DEFAULT_STORE) ||
            ng(this, l7, de).call(this),
            null == (e = nE(this, l5)) ||
              e.dispatch({ type: "documentelementchangerequest", detail: a3 }),
            super.connectedCallback(),
            nE(this, l5) &&
              !nE(this, l8) &&
              nf(
                this,
                l8,
                null == (t = nE(this, l5)) ? void 0 : t.subscribe(nE(this, l9)),
              ),
            this.enableHotkeys());
        }
        disconnectedCallback() {
          var e, t, i, a;
          (null == (e = super.disconnectedCallback) || e.call(this),
            nE(this, l5) &&
              (null == (t = nE(this, l5)) ||
                t.dispatch({
                  type: "documentelementchangerequest",
                  detail: void 0,
                }),
              null == (i = nE(this, l5)) ||
                i.dispatch({
                  type: ag.MEDIA_TOGGLE_SUBTITLES_REQUEST,
                  detail: !1,
                })),
            nE(this, l8) &&
              (null == (a = nE(this, l8)) || a.call(this),
              nf(this, l8, void 0)));
        }
        mediaSetCallback(e) {
          var t;
          (super.mediaSetCallback(e),
            null == (t = nE(this, l5)) ||
              t.dispatch({ type: "mediaelementchangerequest", detail: e }),
            e.hasAttribute("tabindex") || (e.tabIndex = -1));
        }
        mediaUnsetCallback(e) {
          var t;
          (super.mediaUnsetCallback(e),
            null == (t = nE(this, l5)) ||
              t.dispatch({
                type: "mediaelementchangerequest",
                detail: void 0,
              }));
        }
        propagateMediaState(e, t) {
          nO(this.mediaStateReceivers, e, t);
        }
        associateElement(e) {
          if (!e) return;
          let { associatedElementSubscriptions: t } = this;
          if (t.has(e)) return;
          let i = nN(
            e,
            this.registerMediaStateReceiver.bind(this),
            this.unregisterMediaStateReceiver.bind(this),
          );
          (Object.values(ag).forEach((t) => {
            e.addEventListener(t, nE(this, l6));
          }),
            t.set(e, i));
        }
        unassociateElement(e) {
          if (!e) return;
          let { associatedElementSubscriptions: t } = this;
          t.has(e) &&
            (t.get(e)(),
            t.delete(e),
            Object.values(ag).forEach((t) => {
              e.removeEventListener(t, nE(this, l6));
            }));
        }
        registerMediaStateReceiver(e) {
          if (!e) return;
          let t = this.mediaStateReceivers;
          !(t.indexOf(e) > -1) &&
            (t.push(e),
            nE(this, l5) &&
              Object.entries(nE(this, l5).getState()).forEach(([t, i]) => {
                nO([e], t, i);
              }));
        }
        unregisterMediaStateReceiver(e) {
          let t = this.mediaStateReceivers,
            i = t.indexOf(e);
          i < 0 || t.splice(i, 1);
        }
        enableHotkeys() {
          this.addEventListener("keydown", ng(this, da, dr));
        }
        disableHotkeys() {
          (this.removeEventListener("keydown", ng(this, da, dr)),
            this.removeEventListener("keyup", ng(this, dt, di)));
        }
        get hotkeys() {
          return rv(this, ny.HOTKEYS);
        }
        set hotkeys(e) {
          rE(this, ny.HOTKEYS, e);
        }
        keyboardShortcutHandler(e) {
          var t, i, a, r, n;
          let s,
            o,
            l,
            d = e.target;
          if (
            !(
              (null !=
              (a =
                null !=
                (i =
                  null == (t = d.getAttribute(ny.KEYS_USED))
                    ? void 0
                    : t.split(" "))
                  ? i
                  : null == d
                    ? void 0
                    : d.keysUsed)
                ? a
                : []
              )
                .map((e) => ("Space" === e ? " " : e))
                .filter(Boolean)
                .includes(e.key) ||
              nE(this, l3).contains(`no${e.key.toLowerCase()}`)
            ) &&
            !(" " === e.key && nE(this, l3).contains("nospace"))
          )
            switch (e.key) {
              case " ":
              case "k":
                ((s = nE(this, l5).getState().mediaPaused
                  ? ag.MEDIA_PLAY_REQUEST
                  : ag.MEDIA_PAUSE_REQUEST),
                  this.dispatchEvent(
                    new a2.CustomEvent(s, { composed: !0, bubbles: !0 }),
                  ));
                break;
              case "m":
                ((s =
                  "off" === this.mediaStore.getState().mediaVolumeLevel
                    ? ag.MEDIA_UNMUTE_REQUEST
                    : ag.MEDIA_MUTE_REQUEST),
                  this.dispatchEvent(
                    new a2.CustomEvent(s, { composed: !0, bubbles: !0 }),
                  ));
                break;
              case "f":
                ((s = this.mediaStore.getState().mediaIsFullscreen
                  ? ag.MEDIA_EXIT_FULLSCREEN_REQUEST
                  : ag.MEDIA_ENTER_FULLSCREEN_REQUEST),
                  this.dispatchEvent(
                    new a2.CustomEvent(s, { composed: !0, bubbles: !0 }),
                  ));
                break;
              case "c":
                this.dispatchEvent(
                  new a2.CustomEvent(ag.MEDIA_TOGGLE_SUBTITLES_REQUEST, {
                    composed: !0,
                    bubbles: !0,
                  }),
                );
                break;
              case "ArrowLeft": {
                let e = this.hasAttribute(ny.KEYBOARD_BACKWARD_SEEK_OFFSET)
                  ? +this.getAttribute(ny.KEYBOARD_BACKWARD_SEEK_OFFSET)
                  : 10;
                ((o = Math.max(
                  (null != (r = this.mediaStore.getState().mediaCurrentTime)
                    ? r
                    : 0) - e,
                  0,
                )),
                  (l = new a2.CustomEvent(ag.MEDIA_SEEK_REQUEST, {
                    composed: !0,
                    bubbles: !0,
                    detail: o,
                  })),
                  this.dispatchEvent(l));
                break;
              }
              case "ArrowRight": {
                let e = this.hasAttribute(ny.KEYBOARD_FORWARD_SEEK_OFFSET)
                  ? +this.getAttribute(ny.KEYBOARD_FORWARD_SEEK_OFFSET)
                  : 10;
                ((o = Math.max(
                  (null != (n = this.mediaStore.getState().mediaCurrentTime)
                    ? n
                    : 0) + e,
                  0,
                )),
                  (l = new a2.CustomEvent(ag.MEDIA_SEEK_REQUEST, {
                    composed: !0,
                    bubbles: !0,
                    detail: o,
                  })),
                  this.dispatchEvent(l));
              }
            }
        }
      }
      ((l3 = new WeakMap()),
        (l4 = new WeakMap()),
        (l5 = new WeakMap()),
        (l9 = new WeakMap()),
        (l8 = new WeakMap()),
        (l6 = new WeakMap()),
        (l7 = new WeakSet()),
        (de = function () {
          var e;
          this.mediaStore = np({
            media: this.media,
            fullscreenElement: this.fullscreenElement,
            options: {
              defaultSubtitles: this.hasAttribute(ny.DEFAULT_SUBTITLES),
              defaultDuration: this.hasAttribute(ny.DEFAULT_DURATION)
                ? +this.getAttribute(ny.DEFAULT_DURATION)
                : void 0,
              defaultStreamType:
                null != (e = this.getAttribute(ny.DEFAULT_STREAM_TYPE))
                  ? e
                  : void 0,
              liveEdgeOffset: this.hasAttribute(ny.LIVE_EDGE_OFFSET)
                ? +this.getAttribute(ny.LIVE_EDGE_OFFSET)
                : void 0,
              seekToLiveOffset: this.hasAttribute(ny.SEEK_TO_LIVE_OFFSET)
                ? +this.getAttribute(ny.SEEK_TO_LIVE_OFFSET)
                : this.hasAttribute(ny.LIVE_EDGE_OFFSET)
                  ? +this.getAttribute(ny.LIVE_EDGE_OFFSET)
                  : void 0,
              noAutoSeekToLive: this.hasAttribute(ny.NO_AUTO_SEEK_TO_LIVE),
              noVolumePref: this.hasAttribute(ny.NO_VOLUME_PREF),
              noSubtitlesLangPref: this.hasAttribute(ny.NO_SUBTITLES_LANG_PREF),
            },
          });
        }),
        (dt = new WeakSet()),
        (di = function (e) {
          let { key: t } = e;
          if (!n_.includes(t))
            return void this.removeEventListener("keyup", ng(this, dt, di));
          this.keyboardShortcutHandler(e);
        }),
        (da = new WeakSet()),
        (dr = function (e) {
          let { metaKey: t, altKey: i, key: a } = e;
          if (t || i || !n_.includes(a))
            return void this.removeEventListener("keyup", ng(this, dt, di));
          ([" ", "ArrowLeft", "ArrowRight"].includes(a) &&
            !(
              nE(this, l3).contains(`no${a.toLowerCase()}`) ||
              (" " === a && nE(this, l3).contains("nospace"))
            ) &&
            e.preventDefault(),
            this.addEventListener("keyup", ng(this, dt, di), { once: !0 }));
        }));
      let nA = Object.values(aA),
        nk = Object.values(ay),
        nw = (e) => {
          var t, i, a, r;
          let { observedAttributes: n } = e.constructor;
          !n &&
            (null == (t = e.nodeName) ? void 0 : t.includes("-")) &&
            (a2.customElements.upgrade(e),
            ({ observedAttributes: n } = e.constructor));
          let s =
            null ==
            (r =
              null ==
              (a =
                null == (i = null == e ? void 0 : e.getAttribute)
                  ? void 0
                  : i.call(e, a_.MEDIA_CHROME_ATTRIBUTES))
                ? void 0
                : a.split)
              ? void 0
              : r.call(a, /\s+/);
          return Array.isArray(n || s)
            ? (n || s).filter((e) => nA.includes(e))
            : [];
        },
        nS = (e) => {
          var t, i;
          return (
            (null == (t = e.nodeName) ? void 0 : t.includes("-")) &&
              a2.customElements.get(
                null == (i = e.nodeName) ? void 0 : i.toLowerCase(),
              ) &&
              !(e instanceof a2.customElements.get(e.nodeName.toLowerCase())) &&
              a2.customElements.upgrade(e),
            nk.some((t) => t in e)
          );
        },
        nI = (e) => nS(e) || !!nw(e).length,
        nR = (e) => {
          var t;
          return null == (t = null == e ? void 0 : e.join)
            ? void 0
            : t.call(e, ":");
        },
        nC = {
          [aA.MEDIA_SUBTITLES_LIST]: rq,
          [aA.MEDIA_SUBTITLES_SHOWING]: rq,
          [aA.MEDIA_SEEKABLE]: nR,
          [aA.MEDIA_BUFFERED]: (e) =>
            null == e ? void 0 : e.map(nR).join(" "),
          [aA.MEDIA_PREVIEW_COORDS]: (e) => (null == e ? void 0 : e.join(" ")),
          [aA.MEDIA_RENDITION_LIST]: function (e) {
            return null == e ? void 0 : e.map(aM).join(" ");
          },
          [aA.MEDIA_AUDIO_TRACK_LIST]: function (e) {
            return null == e ? void 0 : e.map(aN).join(" ");
          },
        },
        nD = async (e, t, i) => {
          var a, r;
          if (
            (e.isConnected || (await aB(0)), "boolean" == typeof i || null == i)
          )
            return rp(e, t, i);
          if ("number" == typeof i) return rh(e, t, i);
          if ("string" == typeof i) return rE(e, t, i);
          if (Array.isArray(i) && !i.length) return e.removeAttribute(t);
          let n =
            null != (r = null == (a = nC[t]) ? void 0 : a.call(nC, i)) ? r : i;
          return e.setAttribute(t, n);
        },
        nL = (e) => {
          var t;
          return !!(null == (t = e.closest)
            ? void 0
            : t.call(e, '*[slot="media"]'));
        },
        nM = (e, t) => {
          if (nL(e)) return;
          let i = (e, t) => {
              var i, a;
              nI(e) && t(e);
              let { children: r = [] } = null != e ? e : {};
              [
                ...r,
                ...(null !=
                (a =
                  null == (i = null == e ? void 0 : e.shadowRoot)
                    ? void 0
                    : i.children)
                  ? a
                  : []),
              ].forEach((e) => nM(e, t));
            },
            a = null == e ? void 0 : e.nodeName.toLowerCase();
          if (a.includes("-") && !nI(e))
            return void a2.customElements.whenDefined(a).then(() => {
              i(e, t);
            });
          i(e, t);
        },
        nO = (e, t, i) => {
          e.forEach((e) => {
            if (t in e) {
              e[t] = i;
              return;
            }
            let a = nw(e),
              r = t.toLowerCase();
            a.includes(r) && nD(e, r, i);
          });
        },
        nN = (e, t, i) => {
          nM(e, t);
          let a = (e) => {
              var i;
              t(
                null != (i = null == e ? void 0 : e.composedPath()[0])
                  ? i
                  : e.target,
              );
            },
            r = (e) => {
              var t;
              i(
                null != (t = null == e ? void 0 : e.composedPath()[0])
                  ? t
                  : e.target,
              );
            };
          (e.addEventListener(ag.REGISTER_MEDIA_STATE_RECEIVER, a),
            e.addEventListener(ag.UNREGISTER_MEDIA_STATE_RECEIVER, r));
          let n = [],
            s = (e) => {
              let a = e.target;
              "media" !== a.name &&
                (n.forEach((e) => nM(e, i)),
                (n = [...a.assignedElements({ flatten: !0 })]).forEach((e) =>
                  nM(e, t),
                ));
            };
          e.addEventListener("slotchange", s);
          let o = new MutationObserver((e) => {
            e.forEach((e) => {
              let {
                addedNodes: a = [],
                removedNodes: r = [],
                type: n,
                target: s,
                attributeName: o,
              } = e;
              "childList" === n
                ? (Array.prototype.forEach.call(a, (e) => nM(e, t)),
                  Array.prototype.forEach.call(r, (e) => nM(e, i)))
                : "attributes" === n &&
                  o === a_.MEDIA_CHROME_ATTRIBUTES &&
                  (nI(s) ? t(s) : i(s));
            });
          });
          return (
            o.observe(e, { childList: !0, attributes: !0, subtree: !0 }),
            () => {
              (nM(e, i),
                e.removeEventListener("slotchange", s),
                o.disconnect(),
                e.removeEventListener(ag.REGISTER_MEDIA_STATE_RECEIVER, a),
                e.removeEventListener(ag.UNREGISTER_MEDIA_STATE_RECEIVER, r));
            }
          );
        };
      a2.customElements.get("media-controller") ||
        a2.customElements.define("media-controller", nT);
      var nx = (e, t, i) => {
          if (!t.has(e)) throw TypeError("Cannot " + i);
        },
        nP = (e, t, i) => (
          nx(e, t, "read from private field"),
          i ? i.call(e) : t.get(e)
        ),
        nU = (e, t, i) => {
          if (t.has(e))
            throw TypeError(
              "Cannot add the same private member more than once",
            );
          t instanceof WeakSet ? t.add(e) : t.set(e, i);
        },
        nB = (e, t, i, a) => (
          nx(e, t, "write to private field"),
          a ? a.call(e, i) : t.set(e, i),
          i
        ),
        nW = (e, t, i) => (nx(e, t, "access private method"), i);
      let nH = {
          TOOLTIP_PLACEMENT: "tooltipplacement",
          DISABLED: "disabled",
          NO_TOOLTIP: "notooltip",
        },
        nV = a3.createElement("template");
      nV.innerHTML = `
<style>
  :host {
    position: relative;
    font: var(--media-font,
      var(--media-font-weight, bold)
      var(--media-font-size, 14px) /
      var(--media-text-content-height, var(--media-control-height, 24px))
      var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
    color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
    background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
    padding: var(--media-button-padding, var(--media-control-padding, 10px));
    justify-content: var(--media-button-justify-content, center);
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    box-sizing: border-box;
    transition: background .15s linear;
    pointer-events: auto;
    cursor: var(--media-cursor, pointer);
    -webkit-tap-highlight-color: transparent;
  }

  
  :host(:focus-visible) {
    box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
    outline: 0;
  }
  
  :host(:where(:focus)) {
    box-shadow: none;
    outline: 0;
  }

  :host(:hover) {
    background: var(--media-control-hover-background, rgba(50 50 70 / .7));
  }

  svg, img, ::slotted(svg), ::slotted(img) {
    width: var(--media-button-icon-width);
    height: var(--media-button-icon-height, var(--media-control-height, 24px));
    transform: var(--media-button-icon-transform);
    transition: var(--media-button-icon-transition);
    fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
    vertical-align: middle;
    max-width: 100%;
    max-height: 100%;
    min-width: 100%;
  }

  media-tooltip {
    
    max-width: 0;
    overflow-x: clip;
    opacity: 0;
    transition: opacity .3s, max-width 0s 9s;
  }

  :host(:hover) media-tooltip,
  :host(:focus-visible) media-tooltip {
    max-width: 100vw;
    opacity: 1;
    transition: opacity .3s;
  }

  :host([notooltip]) slot[name="tooltip"] {
    display: none;
  }
</style>

<slot name="tooltip">
  <media-tooltip part="tooltip" aria-hidden="true">
    <slot name="tooltip-content"></slot>
  </media-tooltip>
</slot>
`;
      class nF extends a2.HTMLElement {
        constructor(e = {}) {
          var t;
          if (
            (super(),
            nU(this, dc),
            nU(this, dn, void 0),
            (this.preventClick = !1),
            (this.tooltipEl = null),
            (this.tooltipContent = ""),
            nU(this, ds, (e) => {
              (this.preventClick || this.handleClick(e),
                setTimeout(nP(this, dl), 0));
            }),
            nU(this, dl, () => {
              var e, t;
              null ==
                (t = null == (e = this.tooltipEl) ? void 0 : e.updateXOffset) ||
                t.call(e);
            }),
            nU(this, dd, (e) => {
              let { key: t } = e;
              if (!this.keysUsed.includes(t))
                return void this.removeEventListener("keyup", nP(this, dd));
              this.preventClick || this.handleClick(e);
            }),
            nU(this, du, (e) => {
              let { metaKey: t, altKey: i, key: a } = e;
              if (t || i || !this.keysUsed.includes(a))
                return void this.removeEventListener("keyup", nP(this, dd));
              this.addEventListener("keyup", nP(this, dd), { once: !0 });
            }),
            !this.shadowRoot)
          ) {
            this.attachShadow({ mode: "open" });
            let i = nV.content.cloneNode(!0);
            this.nativeEl = i;
            let a = e.slotTemplate;
            (a ||
              ((a = a3.createElement("template")).innerHTML =
                `<slot>${e.defaultContent || ""}</slot>`),
              e.tooltipContent &&
                ((i.querySelector('slot[name="tooltip-content"]').innerHTML =
                  null != (t = e.tooltipContent) ? t : ""),
                (this.tooltipContent = e.tooltipContent)),
              this.nativeEl.appendChild(a.content.cloneNode(!0)),
              this.shadowRoot.appendChild(i));
          }
          this.tooltipEl = this.shadowRoot.querySelector("media-tooltip");
        }
        static get observedAttributes() {
          return ["disabled", nH.TOOLTIP_PLACEMENT, a_.MEDIA_CONTROLLER];
        }
        enable() {
          (this.addEventListener("click", nP(this, ds)),
            this.addEventListener("keydown", nP(this, du)),
            (this.tabIndex = 0));
        }
        disable() {
          (this.removeEventListener("click", nP(this, ds)),
            this.removeEventListener("keydown", nP(this, du)),
            this.removeEventListener("keyup", nP(this, dd)),
            (this.tabIndex = -1));
        }
        attributeChangedCallback(e, t, i) {
          var a, r, n, s, o;
          (e === a_.MEDIA_CONTROLLER
            ? (t &&
                (null ==
                  (r =
                    null == (a = nP(this, dn))
                      ? void 0
                      : a.unassociateElement) || r.call(a, this),
                nB(this, dn, null)),
              i &&
                this.isConnected &&
                (nB(
                  this,
                  dn,
                  null == (n = this.getRootNode())
                    ? void 0
                    : n.getElementById(i),
                ),
                null ==
                  (o =
                    null == (s = nP(this, dn)) ? void 0 : s.associateElement) ||
                  o.call(s, this)))
            : "disabled" === e && i !== t
              ? null == i
                ? this.enable()
                : this.disable()
              : e === nH.TOOLTIP_PLACEMENT &&
                this.tooltipEl &&
                i !== t &&
                (this.tooltipEl.placement = i),
            nP(this, dl).call(this));
        }
        connectedCallback() {
          var e, t, i;
          let { style: a } = rd(this.shadowRoot, ":host");
          (a.setProperty(
            "display",
            `var(--media-control-display, var(--${this.localName}-display, inline-flex))`,
          ),
            this.hasAttribute("disabled") ? this.disable() : this.enable(),
            this.setAttribute("role", "button"));
          let r = this.getAttribute(a_.MEDIA_CONTROLLER);
          (r &&
            (nB(
              this,
              dn,
              null == (e = this.getRootNode()) ? void 0 : e.getElementById(r),
            ),
            null ==
              (i = null == (t = nP(this, dn)) ? void 0 : t.associateElement) ||
              i.call(t, this)),
            a2.customElements
              .whenDefined("media-tooltip")
              .then(() => nW(this, dc, dh).call(this)));
        }
        disconnectedCallback() {
          var e, t;
          (this.disable(),
            null ==
              (t =
                null == (e = nP(this, dn)) ? void 0 : e.unassociateElement) ||
              t.call(e, this),
            nB(this, dn, null),
            this.removeEventListener("mouseenter", nP(this, dl)),
            this.removeEventListener("focus", nP(this, dl)),
            this.removeEventListener("click", nP(this, ds)));
        }
        get keysUsed() {
          return ["Enter", " "];
        }
        get tooltipPlacement() {
          return rv(this, nH.TOOLTIP_PLACEMENT);
        }
        set tooltipPlacement(e) {
          rE(this, nH.TOOLTIP_PLACEMENT, e);
        }
        get mediaController() {
          return rv(this, a_.MEDIA_CONTROLLER);
        }
        set mediaController(e) {
          rE(this, a_.MEDIA_CONTROLLER, e);
        }
        get disabled() {
          return rm(this, nH.DISABLED);
        }
        set disabled(e) {
          rp(this, nH.DISABLED, e);
        }
        get noTooltip() {
          return rm(this, nH.NO_TOOLTIP);
        }
        set noTooltip(e) {
          rp(this, nH.NO_TOOLTIP, e);
        }
        handleClick(e) {}
      }
      ((dn = new WeakMap()),
        (ds = new WeakMap()),
        (dl = new WeakMap()),
        (dd = new WeakMap()),
        (du = new WeakMap()),
        (dc = new WeakSet()),
        (dh = function () {
          (this.addEventListener("mouseenter", nP(this, dl)),
            this.addEventListener("focus", nP(this, dl)),
            this.addEventListener("click", nP(this, ds)));
          let e = this.tooltipPlacement;
          e && this.tooltipEl && (this.tooltipEl.placement = e);
        }),
        a2.customElements.get("media-chrome-button") ||
          a2.customElements.define("media-chrome-button", nF));
      let nq = `<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.13 3H3.87a.87.87 0 0 0-.87.87v13.26a.87.87 0 0 0 .87.87h3.4L9 16H5V5h16v11h-4l1.72 2h3.4a.87.87 0 0 0 .87-.87V3.87a.87.87 0 0 0-.86-.87Zm-8.75 11.44a.5.5 0 0 0-.76 0l-4.91 5.73a.5.5 0 0 0 .38.83h9.82a.501.501 0 0 0 .38-.83l-4.91-5.73Z"/>
</svg>
`,
        n$ = a3.createElement("template");
      n$.innerHTML = `
  <style>
    :host([${aA.MEDIA_IS_AIRPLAYING}]) slot[name=icon] slot:not([name=exit]) {
      display: none !important;
    }

    
    :host(:not([${aA.MEDIA_IS_AIRPLAYING}])) slot[name=icon] slot:not([name=enter]) {
      display: none !important;
    }

    :host([${aA.MEDIA_IS_AIRPLAYING}]) slot[name=tooltip-enter],
    :host(:not([${aA.MEDIA_IS_AIRPLAYING}])) slot[name=tooltip-exit] {
      display: none;
    }
  </style>

  <slot name="icon">
    <slot name="enter">${nq}</slot>
    <slot name="exit">${nq}</slot>
  </slot>
`;
      let nK = `
  <slot name="tooltip-enter">${aG("start airplay")}</slot>
  <slot name="tooltip-exit">${aG("stop airplay")}</slot>
`,
        nY = (e) => {
          let t = e.mediaIsAirplaying
            ? aG("stop airplay")
            : aG("start airplay");
          e.setAttribute("aria-label", t);
        };
      class nG extends nF {
        static get observedAttributes() {
          return [
            ...super.observedAttributes,
            aA.MEDIA_IS_AIRPLAYING,
            aA.MEDIA_AIRPLAY_UNAVAILABLE,
          ];
        }
        constructor(e = {}) {
          super({ slotTemplate: n$, tooltipContent: nK, ...e });
        }
        connectedCallback() {
          (super.connectedCallback(), nY(this));
        }
        attributeChangedCallback(e, t, i) {
          (super.attributeChangedCallback(e, t, i),
            e === aA.MEDIA_IS_AIRPLAYING && nY(this));
        }
        get mediaIsAirplaying() {
          return rm(this, aA.MEDIA_IS_AIRPLAYING);
        }
        set mediaIsAirplaying(e) {
          rp(this, aA.MEDIA_IS_AIRPLAYING, e);
        }
        get mediaAirplayUnavailable() {
          return rv(this, aA.MEDIA_AIRPLAY_UNAVAILABLE);
        }
        set mediaAirplayUnavailable(e) {
          rE(this, aA.MEDIA_AIRPLAY_UNAVAILABLE, e);
        }
        handleClick() {
          let e = new a2.CustomEvent(ag.MEDIA_AIRPLAY_REQUEST, {
            composed: !0,
            bubbles: !0,
          });
          this.dispatchEvent(e);
        }
      }
      a2.customElements.get("media-airplay-button") ||
        a2.customElements.define("media-airplay-button", nG);
      let nj = `<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,
        nQ = `<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,
        nZ = a3.createElement("template");
      nZ.innerHTML = `
  <style>
    :host([aria-checked="true"]) slot[name=off] {
      display: none !important;
    }

    
    :host(:not([aria-checked="true"])) slot[name=on] {
      display: none !important;
    }

    :host([aria-checked="true"]) slot[name=tooltip-enable],
    :host(:not([aria-checked="true"])) slot[name=tooltip-disable] {
      display: none;
    }
  </style>

  <slot name="icon">
    <slot name="on">${nj}</slot>
    <slot name="off">${nQ}</slot>
  </slot>
`;
      let nz = `
  <slot name="tooltip-enable">${aG("Enable captions")}</slot>
  <slot name="tooltip-disable">${aG("Disable captions")}</slot>
`,
        nX = (e) => {
          e.setAttribute("aria-checked", rj(e).toString());
        };
      class nJ extends nF {
        static get observedAttributes() {
          return [
            ...super.observedAttributes,
            aA.MEDIA_SUBTITLES_LIST,
            aA.MEDIA_SUBTITLES_SHOWING,
          ];
        }
        constructor(e = {}) {
          (super({ slotTemplate: nZ, tooltipContent: nz, ...e }),
            (this._captionsReady = !1));
        }
        connectedCallback() {
          (super.connectedCallback(),
            this.setAttribute("role", "switch"),
            this.setAttribute("aria-label", aG("closed captions")),
            nX(this));
        }
        attributeChangedCallback(e, t, i) {
          (super.attributeChangedCallback(e, t, i),
            e === aA.MEDIA_SUBTITLES_SHOWING && nX(this));
        }
        get mediaSubtitlesList() {
          return n0(this, aA.MEDIA_SUBTITLES_LIST);
        }
        set mediaSubtitlesList(e) {
          n1(this, aA.MEDIA_SUBTITLES_LIST, e);
        }
        get mediaSubtitlesShowing() {
          return n0(this, aA.MEDIA_SUBTITLES_SHOWING);
        }
        set mediaSubtitlesShowing(e) {
          n1(this, aA.MEDIA_SUBTITLES_SHOWING, e);
        }
        handleClick() {
          this.dispatchEvent(
            new a2.CustomEvent(ag.MEDIA_TOGGLE_SUBTITLES_REQUEST, {
              composed: !0,
              bubbles: !0,
            }),
          );
        }
      }
      let n0 = (e, t) => {
          let i = e.getAttribute(t);
          return i ? rH(i) : [];
        },
        n1 = (e, t, i) => {
          if (!(null == i ? void 0 : i.length))
            return void e.removeAttribute(t);
          let a = rq(i);
          e.getAttribute(t) !== a && e.setAttribute(t, a);
        };
      a2.customElements.get("media-captions-button") ||
        a2.customElements.define("media-captions-button", nJ);
      let n2 = a3.createElement("template");
      n2.innerHTML = `
  <style>
  :host([${aA.MEDIA_IS_CASTING}]) slot[name=icon] slot:not([name=exit]) {
    display: none !important;
  }

  
  :host(:not([${aA.MEDIA_IS_CASTING}])) slot[name=icon] slot:not([name=enter]) {
    display: none !important;
  }

  :host([${aA.MEDIA_IS_CASTING}]) slot[name=tooltip-enter],
    :host(:not([${aA.MEDIA_IS_CASTING}])) slot[name=tooltip-exit] {
      display: none;
    }
  </style>

  <slot name="icon">
    <slot name="enter"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/></g></svg></slot>
    <slot name="exit"><svg aria-hidden="true" viewBox="0 0 24 24"><g><path class="cast_caf_icon_arch0" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path class="cast_caf_icon_arch1" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path class="cast_caf_icon_arch2" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path class="cast_caf_icon_box" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path class="cast_caf_icon_boxfill" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg></slot>
  </slot>
`;
      let n3 = `
  <slot name="tooltip-enter">${aG("Start casting")}</slot>
  <slot name="tooltip-exit">${aG("Stop casting")}</slot>
`,
        n4 = (e) => {
          let t = e.mediaIsCasting ? aG("stop casting") : aG("start casting");
          e.setAttribute("aria-label", t);
        };
      class n5 extends nF {
        static get observedAttributes() {
          return [
            ...super.observedAttributes,
            aA.MEDIA_IS_CASTING,
            aA.MEDIA_CAST_UNAVAILABLE,
          ];
        }
        constructor(e = {}) {
          super({ slotTemplate: n2, tooltipContent: n3, ...e });
        }
        connectedCallback() {
          (super.connectedCallback(), n4(this));
        }
        attributeChangedCallback(e, t, i) {
          (super.attributeChangedCallback(e, t, i),
            e === aA.MEDIA_IS_CASTING && n4(this));
        }
        get mediaIsCasting() {
          return rm(this, aA.MEDIA_IS_CASTING);
        }
        set mediaIsCasting(e) {
          rp(this, aA.MEDIA_IS_CASTING, e);
        }
        get mediaCastUnavailable() {
          return rv(this, aA.MEDIA_CAST_UNAVAILABLE);
        }
        set mediaCastUnavailable(e) {
          rE(this, aA.MEDIA_CAST_UNAVAILABLE, e);
        }
        handleClick() {
          let e = this.mediaIsCasting
            ? ag.MEDIA_EXIT_CAST_REQUEST
            : ag.MEDIA_ENTER_CAST_REQUEST;
          this.dispatchEvent(
            new a2.CustomEvent(e, { composed: !0, bubbles: !0 }),
          );
        }
      }
      a2.customElements.get("media-cast-button") ||
        a2.customElements.define("media-cast-button", n5);
      var n9 = (e, t, i) => {
          if (!t.has(e)) throw TypeError("Cannot " + i);
        },
        n8 = (e, t, i) => (
          n9(e, t, "read from private field"),
          i ? i.call(e) : t.get(e)
        ),
        n6 = (e, t, i) => {
          if (t.has(e))
            throw TypeError(
              "Cannot add the same private member more than once",
            );
          t instanceof WeakSet ? t.add(e) : t.set(e, i);
        },
        n7 = (e, t, i, a) => (
          n9(e, t, "write to private field"),
          a ? a.call(e, i) : t.set(e, i),
          i
        ),
        se = (e, t, i) => (n9(e, t, "access private method"), i);
      let st = { OPEN: "open", ANCHOR: "anchor" };
      class si extends a2.HTMLElement {
        constructor() {
          (super(),
            n6(this, dE),
            n6(this, df),
            n6(this, d_),
            n6(this, dT),
            n6(this, dk),
            n6(this, dS),
            n6(this, dm, !1),
            n6(this, dp, null),
            n6(this, dv, null),
            this.addEventListener("invoke", this),
            this.addEventListener("focusout", this),
            this.addEventListener("keydown", this));
        }
        static get observedAttributes() {
          return [st.OPEN, st.ANCHOR];
        }
        get open() {
          return rm(this, st.OPEN);
        }
        set open(e) {
          rp(this, st.OPEN, e);
        }
        handleEvent(e) {
          switch (e.type) {
            case "invoke":
              se(this, dT, dA).call(this, e);
              break;
            case "focusout":
              se(this, dk, dw).call(this, e);
              break;
            case "keydown":
              se(this, dS, dI).call(this, e);
          }
        }
        connectedCallback() {
          (se(this, dE, db).call(this), this.role || (this.role = "dialog"));
        }
        attributeChangedCallback(e, t, i) {
          (se(this, dE, db).call(this),
            e === st.OPEN &&
              i !== t &&
              (this.open
                ? se(this, df, dg).call(this)
                : se(this, d_, dy).call(this)));
        }
        focus() {
          n7(this, dp, rs());
          let e = !this.dispatchEvent(
              new Event("focus", { composed: !0, cancelable: !0 }),
            ),
            t = !this.dispatchEvent(
              new Event("focusin", {
                composed: !0,
                bubbles: !0,
                cancelable: !0,
              }),
            );
          if (e || t) return;
          let i = this.querySelector(
            '[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]',
          );
          null == i || i.focus();
        }
        get keysUsed() {
          return ["Escape", "Tab"];
        }
      }
      ((dm = new WeakMap()),
        (dp = new WeakMap()),
        (dv = new WeakMap()),
        (dE = new WeakSet()),
        (db = function () {
          if (!n8(this, dm) && (n7(this, dm, !0), !this.shadowRoot)) {
            this.attachShadow({ mode: "open" });
            let e = (function (e) {
              let t = {};
              for (let i of e) t[i.name] = i.value;
              return t;
            })(this.attributes);
            ((this.shadowRoot.innerHTML = `
        ${this.constructor.getTemplateHTML(e)}
      `),
              queueMicrotask(() => {
                let { style: e } = rd(this.shadowRoot, ":host");
                e.setProperty(
                  "transition",
                  "display .15s, visibility .15s, opacity .15s ease-in, transform .15s ease-in",
                );
              }));
          }
        }),
        (df = new WeakSet()),
        (dg = function () {
          var e;
          (null == (e = n8(this, dv)) ||
            e.setAttribute("aria-expanded", "true"),
            this.dispatchEvent(
              new Event("open", { composed: !0, bubbles: !0 }),
            ),
            this.addEventListener("transitionend", () => this.focus(), {
              once: !0,
            }));
        }),
        (d_ = new WeakSet()),
        (dy = function () {
          var e;
          (null == (e = n8(this, dv)) ||
            e.setAttribute("aria-expanded", "false"),
            this.dispatchEvent(
              new Event("close", { composed: !0, bubbles: !0 }),
            ));
        }),
        (dT = new WeakSet()),
        (dA = function (e) {
          (n7(this, dv, e.relatedTarget),
            rr(this, e.relatedTarget) || (this.open = !this.open));
        }),
        (dk = new WeakSet()),
        (dw = function (e) {
          var t;
          !rr(this, e.relatedTarget) &&
            (null == (t = n8(this, dp)) || t.focus(),
            n8(this, dv) &&
              n8(this, dv) !== e.relatedTarget &&
              this.open &&
              (this.open = !1));
        }),
        (dS = new WeakSet()),
        (dI = function (e) {
          var t, i, a, r, n;
          let { key: s, ctrlKey: o, altKey: l, metaKey: d } = e;
          o ||
            l ||
            d ||
            (this.keysUsed.includes(s) &&
              (e.preventDefault(),
              e.stopPropagation(),
              "Tab" === s
                ? (e.shiftKey
                    ? null ==
                        (i =
                          null == (t = this.previousElementSibling)
                            ? void 0
                            : t.focus) || i.call(t)
                    : null ==
                        (r =
                          null == (a = this.nextElementSibling)
                            ? void 0
                            : a.focus) || r.call(a),
                  this.blur())
                : "Escape" === s &&
                  (null == (n = n8(this, dp)) || n.focus(), (this.open = !1))));
        }),
        (si.getTemplateHTML = function (e) {
          return `
    <style>
      :host {
        font: var(--media-font,
          var(--media-font-weight, normal)
          var(--media-font-size, 14px) /
          var(--media-text-content-height, var(--media-control-height, 24px))
          var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
        color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
        display: var(--media-dialog-display, inline-flex);
        justify-content: center;
        align-items: center;
        
        transition-behavior: allow-discrete;
        visibility: hidden;
        opacity: 0;
        transform: translateY(2px) scale(.99);
        pointer-events: none;
      }

      :host([open]) {
        transition: display .2s, visibility 0s, opacity .2s ease-out, transform .15s ease-out;
        visibility: visible;
        opacity: 1;
        transform: translateY(0) scale(1);
        pointer-events: auto;
      }

      #content {
        display: flex;
        position: relative;
        box-sizing: border-box;
        width: min(320px, 100%);
        word-wrap: break-word;
        max-height: 100%;
        overflow: auto;
        text-align: center;
        line-height: 1.4;
      }
    </style>
    ${this.getSlotTemplateHTML(e)}
  `;
        }),
        (si.getSlotTemplateHTML = function (e) {
          return `
    <slot id="content"></slot>
  `;
        }),
        a2.customElements.get("media-chrome-dialog") ||
          a2.customElements.define("media-chrome-dialog", si));
      var sa = (e, t, i) => {
          if (!t.has(e)) throw TypeError("Cannot " + i);
        },
        sr = (e, t, i) => (
          sa(e, t, "read from private field"),
          i ? i.call(e) : t.get(e)
        ),
        sn = (e, t, i) => {
          if (t.has(e))
            throw TypeError(
              "Cannot add the same private member more than once",
            );
          t instanceof WeakSet ? t.add(e) : t.set(e, i);
        },
        ss = (e, t, i, a) => (
          sa(e, t, "write to private field"),
          a ? a.call(e, i) : t.set(e, i),
          i
        ),
        so = (e, t, i) => (sa(e, t, "access private method"), i);
      let sl = a3.createElement("template");
      sl.innerHTML = `
  <style>
    :host {
      --_focus-box-shadow: var(--media-focus-box-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
      --_media-range-padding: var(--media-range-padding, var(--media-control-padding, 10px));

      box-shadow: var(--_focus-visible-box-shadow, none);
      background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
      height: calc(var(--media-control-height, 24px) + 2 * var(--_media-range-padding));
      display: inline-flex;
      align-items: center;
      
      vertical-align: middle;
      box-sizing: border-box;
      position: relative;
      width: 100px;
      transition: background .15s linear;
      cursor: var(--media-cursor, pointer);
      pointer-events: auto;
      touch-action: none; 
    }

    
    input[type=range]:focus {
      outline: 0;
    }
    input[type=range]:focus::-webkit-slider-runnable-track {
      outline: 0;
    }

    :host(:hover) {
      background: var(--media-control-hover-background, rgb(50 50 70 / .7));
    }

    #leftgap {
      padding-left: var(--media-range-padding-left, var(--_media-range-padding));
    }

    #rightgap {
      padding-right: var(--media-range-padding-right, var(--_media-range-padding));
    }

    #startpoint,
    #endpoint {
      position: absolute;
    }

    #endpoint {
      right: 0;
    }

    #container {
      
      width: var(--media-range-track-width, 100%);
      transform: translate(var(--media-range-track-translate-x, 0px), var(--media-range-track-translate-y, 0px));
      position: relative;
      height: 100%;
      display: flex;
      align-items: center;
      min-width: 40px;
    }

    #range {
      
      display: var(--media-time-range-hover-display, block);
      bottom: var(--media-time-range-hover-bottom, -7px);
      height: var(--media-time-range-hover-height, max(100% + 7px, 25px));
      width: 100%;
      position: absolute;
      cursor: var(--media-cursor, pointer);

      -webkit-appearance: none; 
      -webkit-tap-highlight-color: transparent;
      background: transparent; 
      margin: 0;
      z-index: 1;
    }

    @media (hover: hover) {
      #range {
        bottom: var(--media-time-range-hover-bottom, -5px);
        height: var(--media-time-range-hover-height, max(100% + 5px, 20px));
      }
    }

    
    
    #range::-webkit-slider-thumb {
      -webkit-appearance: none;
      background: transparent;
      width: .1px;
      height: .1px;
    }

    
    #range::-moz-range-thumb {
      background: transparent;
      border: transparent;
      width: .1px;
      height: .1px;
    }

    #appearance {
      height: var(--media-range-track-height, 4px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      position: absolute;
      
      will-change: transform;
    }

    #track {
      background: var(--media-range-track-background, rgb(255 255 255 / .2));
      border-radius: var(--media-range-track-border-radius, 1px);
      border: var(--media-range-track-border, none);
      outline: var(--media-range-track-outline);
      outline-offset: var(--media-range-track-outline-offset);
      backdrop-filter: var(--media-range-track-backdrop-filter);
      -webkit-backdrop-filter: var(--media-range-track-backdrop-filter);
      box-shadow: var(--media-range-track-box-shadow, none);
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    #progress,
    #pointer {
      position: absolute;
      height: 100%;
      will-change: width;
    }

    #progress {
      background: var(--media-range-bar-color, var(--media-primary-color, rgb(238 238 238)));
      transition: var(--media-range-track-transition);
    }

    #pointer {
      background: var(--media-range-track-pointer-background);
      border-right: var(--media-range-track-pointer-border-right);
      transition: visibility .25s, opacity .25s;
      visibility: hidden;
      opacity: 0;
    }

    @media (hover: hover) {
      :host(:hover) #pointer {
        transition: visibility .5s, opacity .5s;
        visibility: visible;
        opacity: 1;
      }
    }

    #thumb,
    ::slotted([slot=thumb]) {
      width: var(--media-range-thumb-width, 10px);
      height: var(--media-range-thumb-height, 10px);
      transition: var(--media-range-thumb-transition);
      transform: var(--media-range-thumb-transform, none);
      opacity: var(--media-range-thumb-opacity, 1);
      translate: -50%;
      position: absolute;
      left: 0;
      cursor: var(--media-cursor, pointer);
    }

    #thumb {
      border-radius: var(--media-range-thumb-border-radius, 10px);
      background: var(--media-range-thumb-background, var(--media-primary-color, rgb(238 238 238)));
      box-shadow: var(--media-range-thumb-box-shadow, 1px 1px 1px transparent);
      border: var(--media-range-thumb-border, none);
    }

    :host([disabled]) #thumb {
      background-color: #777;
    }

    .segments #appearance {
      height: var(--media-range-segment-hover-height, 7px);
    }

    #track {
      clip-path: url(#segments-clipping);
    }

    #segments {
      --segments-gap: var(--media-range-segments-gap, 2px);
      position: absolute;
      width: 100%;
      height: 100%;
    }

    #segments-clipping {
      transform: translateX(calc(var(--segments-gap) / 2));
    }

    #segments-clipping:empty {
      display: none;
    }

    #segments-clipping rect {
      height: var(--media-range-track-height, 4px);
      y: calc((var(--media-range-segment-hover-height, 7px) - var(--media-range-track-height, 4px)) / 2);
      transition: var(--media-range-segment-transition, transform .1s ease-in-out);
      transform: var(--media-range-segment-transform, scaleY(1));
      transform-origin: center;
    }
  </style>
  <div id="leftgap"></div>
  <div id="container">
    <div id="startpoint"></div>
    <div id="endpoint"></div>
    <div id="appearance">
      <div id="track" part="track">
        <div id="pointer"></div>
        <div id="progress" part="progress"></div>
      </div>
      <slot name="thumb">
        <div id="thumb" part="thumb"></div>
      </slot>
      <svg id="segments"><clipPath id="segments-clipping"></clipPath></svg>
    </div>
    <input id="range" type="range" min="0" max="1" step="any" value="0">
  </div>
  <div id="rightgap"></div>
`;
      class sd extends a2.HTMLElement {
        constructor() {
          (super(),
            sn(this, dU),
            sn(this, dW),
            sn(this, dV),
            sn(this, dq),
            sn(this, dK),
            sn(this, dG),
            sn(this, dQ),
            sn(this, dz),
            sn(this, dR, void 0),
            sn(this, dC, void 0),
            sn(this, dD, void 0),
            sn(this, dL, void 0),
            sn(this, dM, {}),
            sn(this, dO, []),
            sn(this, dN, () => {
              if (this.range.matches(":focus-visible")) {
                let { style: e } = rd(this.shadowRoot, ":host");
                e.setProperty(
                  "--_focus-visible-box-shadow",
                  "var(--_focus-box-shadow)",
                );
              }
            }),
            sn(this, dx, () => {
              let { style: e } = rd(this.shadowRoot, ":host");
              e.removeProperty("--_focus-visible-box-shadow");
            }),
            sn(this, dP, () => {
              let e = this.shadowRoot.querySelector("#segments-clipping");
              e && e.parentNode.append(e);
            }),
            this.shadowRoot ||
              (this.attachShadow({ mode: "open" }),
              this.shadowRoot.appendChild(sl.content.cloneNode(!0))),
            (this.container = this.shadowRoot.querySelector("#container")),
            ss(this, dD, this.shadowRoot.querySelector("#startpoint")),
            ss(this, dL, this.shadowRoot.querySelector("#endpoint")),
            (this.range = this.shadowRoot.querySelector("#range")),
            (this.appearance = this.shadowRoot.querySelector("#appearance")));
        }
        static get observedAttributes() {
          return ["disabled", "aria-disabled", a_.MEDIA_CONTROLLER];
        }
        attributeChangedCallback(e, t, i) {
          var a, r, n, s, o;
          e === a_.MEDIA_CONTROLLER
            ? (t &&
                (null ==
                  (r =
                    null == (a = sr(this, dR))
                      ? void 0
                      : a.unassociateElement) || r.call(a, this),
                ss(this, dR, null)),
              i &&
                this.isConnected &&
                (ss(
                  this,
                  dR,
                  null == (n = this.getRootNode())
                    ? void 0
                    : n.getElementById(i),
                ),
                null ==
                  (o =
                    null == (s = sr(this, dR)) ? void 0 : s.associateElement) ||
                  o.call(s, this)))
            : ("disabled" === e || ("aria-disabled" === e && t !== i)) &&
              (null == i
                ? (this.range.removeAttribute(e), so(this, dW, dH).call(this))
                : (this.range.setAttribute(e, i), so(this, dV, dF).call(this)));
        }
        connectedCallback() {
          var e, t, i;
          let { style: a } = rd(this.shadowRoot, ":host");
          (a.setProperty(
            "display",
            `var(--media-control-display, var(--${this.localName}-display, inline-flex))`,
          ),
            (sr(this, dM).pointer = rd(this.shadowRoot, "#pointer")),
            (sr(this, dM).progress = rd(this.shadowRoot, "#progress")),
            (sr(this, dM).thumb = rd(
              this.shadowRoot,
              '#thumb, ::slotted([slot="thumb"])',
            )),
            (sr(this, dM).activeSegment = rd(
              this.shadowRoot,
              "#segments-clipping rect:nth-child(0)",
            )));
          let r = this.getAttribute(a_.MEDIA_CONTROLLER);
          (r &&
            (ss(
              this,
              dR,
              null == (e = this.getRootNode()) ? void 0 : e.getElementById(r),
            ),
            null ==
              (i = null == (t = sr(this, dR)) ? void 0 : t.associateElement) ||
              i.call(t, this)),
            this.updateBar(),
            this.shadowRoot.addEventListener("focusin", sr(this, dN)),
            this.shadowRoot.addEventListener("focusout", sr(this, dx)),
            so(this, dW, dH).call(this),
            a8(this.container, sr(this, dP)));
        }
        disconnectedCallback() {
          var e, t;
          (so(this, dV, dF).call(this),
            null ==
              (t =
                null == (e = sr(this, dR)) ? void 0 : e.unassociateElement) ||
              t.call(e, this),
            ss(this, dR, null),
            this.shadowRoot.removeEventListener("focusin", sr(this, dN)),
            this.shadowRoot.removeEventListener("focusout", sr(this, dx)),
            a6(this.container, sr(this, dP)));
        }
        updatePointerBar(e) {
          var t;
          null == (t = sr(this, dM).pointer) ||
            t.style.setProperty("width", `${100 * this.getPointerRatio(e)}%`);
        }
        updateBar() {
          var e, t;
          let i = 100 * this.range.valueAsNumber;
          (null == (e = sr(this, dM).progress) ||
            e.style.setProperty("width", `${i}%`),
            null == (t = sr(this, dM).thumb) ||
              t.style.setProperty("left", `${i}%`));
        }
        updateSegments(e) {
          let t = this.shadowRoot.querySelector("#segments-clipping");
          if (
            ((t.textContent = ""),
            this.container.classList.toggle(
              "segments",
              !!(null == e ? void 0 : e.length),
            ),
            !(null == e ? void 0 : e.length))
          )
            return;
          let i = [
            ...new Set([
              +this.range.min,
              ...e.flatMap((e) => [e.start, e.end]),
              +this.range.max,
            ]),
          ];
          ss(this, dO, [...i]);
          let a = i.pop();
          for (let [e, r] of i.entries()) {
            let [n, s] = [0 === e, e === i.length - 1],
              o = n ? "calc(var(--segments-gap) / -1)" : `${100 * r}%`,
              l = s ? a : i[e + 1],
              d = `calc(${(l - r) * 100}%${n || s ? "" : " - var(--segments-gap)"})`,
              u = a3.createElementNS("http://www.w3.org/2000/svg", "rect"),
              c = rd(
                this.shadowRoot,
                `#segments-clipping rect:nth-child(${e + 1})`,
              );
            (c.style.setProperty("x", o),
              c.style.setProperty("width", d),
              t.append(u));
          }
        }
        getPointerRatio(e) {
          return (function (e, t, i, a) {
            let r = a.x - i.x,
              n = a.y - i.y,
              s = r * r + n * n;
            return 0 === s
              ? 0
              : Math.max(0, Math.min(1, ((e - i.x) * r + (t - i.y) * n) / s));
          })(
            e.clientX,
            e.clientY,
            sr(this, dD).getBoundingClientRect(),
            sr(this, dL).getBoundingClientRect(),
          );
        }
        get dragging() {
          return this.hasAttribute("dragging");
        }
        handleEvent(e) {
          switch (e.type) {
            case "pointermove":
              so(this, dz, dX).call(this, e);
              break;
            case "input":
              this.updateBar();
              break;
            case "pointerenter":
              so(this, dK, dY).call(this, e);
              break;
            case "pointerdown":
              so(this, dq, d$).call(this, e);
              break;
            case "pointerup":
              so(this, dG, dj).call(this);
              break;
            case "pointerleave":
              so(this, dQ, dZ).call(this);
          }
        }
        get keysUsed() {
          return ["ArrowUp", "ArrowRight", "ArrowDown", "ArrowLeft"];
        }
      }
      ((dR = new WeakMap()),
        (dC = new WeakMap()),
        (dD = new WeakMap()),
        (dL = new WeakMap()),
        (dM = new WeakMap()),
        (dO = new WeakMap()),
        (dN = new WeakMap()),
        (dx = new WeakMap()),
        (dP = new WeakMap()),
        (dU = new WeakSet()),
        (dB = function (e) {
          let t = sr(this, dM).activeSegment;
          if (!t) return;
          let i = this.getPointerRatio(e),
            a = sr(this, dO).findIndex((e, t, a) => {
              let r = a[t + 1];
              return null != r && i >= e && i <= r;
            }),
            r = `#segments-clipping rect:nth-child(${a + 1})`;
          (t.selectorText == r && t.style.transform) ||
            ((t.selectorText = r),
            t.style.setProperty(
              "transform",
              "var(--media-range-segment-hover-transform, scaleY(2))",
            ));
        }),
        (dW = new WeakSet()),
        (dH = function () {
          this.hasAttribute("disabled") ||
            (this.addEventListener("input", this),
            this.addEventListener("pointerdown", this),
            this.addEventListener("pointerenter", this));
        }),
        (dV = new WeakSet()),
        (dF = function () {
          var e, t;
          (this.removeEventListener("input", this),
            this.removeEventListener("pointerdown", this),
            this.removeEventListener("pointerenter", this),
            null == (e = a2.window) || e.removeEventListener("pointerup", this),
            null == (t = a2.window) ||
              t.removeEventListener("pointermove", this));
        }),
        (dq = new WeakSet()),
        (d$ = function (e) {
          var t;
          (ss(this, dC, e.composedPath().includes(this.range)),
            null == (t = a2.window) || t.addEventListener("pointerup", this));
        }),
        (dK = new WeakSet()),
        (dY = function (e) {
          var t;
          ("mouse" !== e.pointerType && so(this, dq, d$).call(this, e),
            this.addEventListener("pointerleave", this),
            null == (t = a2.window) || t.addEventListener("pointermove", this));
        }),
        (dG = new WeakSet()),
        (dj = function () {
          var e;
          (null == (e = a2.window) || e.removeEventListener("pointerup", this),
            this.toggleAttribute("dragging", !1),
            (this.range.disabled = this.hasAttribute("disabled")));
        }),
        (dQ = new WeakSet()),
        (dZ = function () {
          var e, t;
          (this.removeEventListener("pointerleave", this),
            null == (e = a2.window) ||
              e.removeEventListener("pointermove", this),
            this.toggleAttribute("dragging", !1),
            (this.range.disabled = this.hasAttribute("disabled")),
            null == (t = sr(this, dM).activeSegment) ||
              t.style.removeProperty("transform"));
        }),
        (dz = new WeakSet()),
        (dX = function (e) {
          (this.toggleAttribute(
            "dragging",
            1 === e.buttons || "mouse" !== e.pointerType,
          ),
            this.updatePointerBar(e),
            so(this, dU, dB).call(this, e),
            this.dragging &&
              ("mouse" !== e.pointerType || !sr(this, dC)) &&
              ((this.range.disabled = !0),
              (this.range.valueAsNumber = this.getPointerRatio(e)),
              this.range.dispatchEvent(
                new Event("input", { bubbles: !0, composed: !0 }),
              )));
        }),
        a2.customElements.get("media-chrome-range") ||
          a2.customElements.define("media-chrome-range", sd));
      var su = (e, t, i) => {
          if (!t.has(e)) throw TypeError("Cannot " + i);
        },
        sc = (e, t, i) => (
          su(e, t, "read from private field"),
          i ? i.call(e) : t.get(e)
        ),
        sh = (e, t, i) => {
          if (t.has(e))
            throw TypeError(
              "Cannot add the same private member more than once",
            );
          t instanceof WeakSet ? t.add(e) : t.set(e, i);
        },
        sm = (e, t, i, a) => (
          su(e, t, "write to private field"),
          a ? a.call(e, i) : t.set(e, i),
          i
        );
      let sp = a3.createElement("template");
      sp.innerHTML = `
  <style>
    :host {
      
      box-sizing: border-box;
      display: var(--media-control-display, var(--media-control-bar-display, inline-flex));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      --media-loading-indicator-icon-height: 44px;
    }

    ::slotted(media-time-range),
    ::slotted(media-volume-range) {
      min-height: 100%;
    }

    ::slotted(media-time-range),
    ::slotted(media-clip-selector) {
      flex-grow: 1;
    }

    ::slotted([role="menu"]) {
      position: absolute;
    }
  </style>

  <slot></slot>
`;
      class sv extends a2.HTMLElement {
        constructor() {
          (super(),
            sh(this, dJ, void 0),
            this.shadowRoot ||
              (this.attachShadow({ mode: "open" }),
              this.shadowRoot.appendChild(sp.content.cloneNode(!0))));
        }
        static get observedAttributes() {
          return [a_.MEDIA_CONTROLLER];
        }
        attributeChangedCallback(e, t, i) {
          var a, r, n, s, o;
          e === a_.MEDIA_CONTROLLER &&
            (t &&
              (null ==
                (r =
                  null == (a = sc(this, dJ)) ? void 0 : a.unassociateElement) ||
                r.call(a, this),
              sm(this, dJ, null)),
            i &&
              this.isConnected &&
              (sm(
                this,
                dJ,
                null == (n = this.getRootNode()) ? void 0 : n.getElementById(i),
              ),
              null ==
                (o =
                  null == (s = sc(this, dJ)) ? void 0 : s.associateElement) ||
                o.call(s, this)));
        }
        connectedCallback() {
          var e, t, i;
          let a = this.getAttribute(a_.MEDIA_CONTROLLER);
          a &&
            (sm(
              this,
              dJ,
              null == (e = this.getRootNode()) ? void 0 : e.getElementById(a),
            ),
            null ==
              (i = null == (t = sc(this, dJ)) ? void 0 : t.associateElement) ||
              i.call(t, this));
        }
        disconnectedCallback() {
          var e, t;
          (null ==
            (t = null == (e = sc(this, dJ)) ? void 0 : e.unassociateElement) ||
            t.call(e, this),
            sm(this, dJ, null));
        }
      }
      ((dJ = new WeakMap()),
        a2.customElements.get("media-control-bar") ||
          a2.customElements.define("media-control-bar", sv));
      var sE = (e, t, i) => {
          if (!t.has(e)) throw TypeError("Cannot " + i);
        },
        sb = (e, t, i) => (
          sE(e, t, "read from private field"),
          i ? i.call(e) : t.get(e)
        ),
        sf = (e, t, i) => {
          if (t.has(e))
            throw TypeError(
              "Cannot add the same private member more than once",
            );
          t instanceof WeakSet ? t.add(e) : t.set(e, i);
        },
        sg = (e, t, i, a) => (
          sE(e, t, "write to private field"),
          a ? a.call(e, i) : t.set(e, i),
          i
        );
      let s_ = a3.createElement("template");
      s_.innerHTML = `
  <style>
    :host {
      font: var(--media-font,
        var(--media-font-weight, normal)
        var(--media-font-size, 14px) /
        var(--media-text-content-height, var(--media-control-height, 24px))
        var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      background: var(--media-text-background, var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7))));
      padding: var(--media-control-padding, 10px);
      display: inline-flex;
      justify-content: center;
      align-items: center;
      vertical-align: middle;
      box-sizing: border-box;
      text-align: center;
      pointer-events: auto;
    }

    
    :host(:focus-visible) {
      box-shadow: inset 0 0 0 2px rgb(27 127 204 / .9);
      outline: 0;
    }

    
    :host(:where(:focus)) {
      box-shadow: none;
      outline: 0;
    }
  </style>
  <slot></slot>
`;
      class sy extends a2.HTMLElement {
        constructor() {
          (super(),
            sf(this, d0, void 0),
            this.shadowRoot ||
              (this.attachShadow({ mode: "open" }),
              this.shadowRoot.appendChild(s_.content.cloneNode(!0))));
        }
        static get observedAttributes() {
          return [a_.MEDIA_CONTROLLER];
        }
        attributeChangedCallback(e, t, i) {
          var a, r, n, s, o;
          e === a_.MEDIA_CONTROLLER &&
            (t &&
              (null ==
                (r =
                  null == (a = sb(this, d0)) ? void 0 : a.unassociateElement) ||
                r.call(a, this),
              sg(this, d0, null)),
            i &&
              this.isConnected &&
              (sg(
                this,
                d0,
                null == (n = this.getRootNode()) ? void 0 : n.getElementById(i),
              ),
              null ==
                (o =
                  null == (s = sb(this, d0)) ? void 0 : s.associateElement) ||
                o.call(s, this)));
        }
        connectedCallback() {
          var e, t, i;
          let { style: a } = rd(this.shadowRoot, ":host");
          a.setProperty(
            "display",
            `var(--media-control-display, var(--${this.localName}-display, inline-flex))`,
          );
          let r = this.getAttribute(a_.MEDIA_CONTROLLER);
          r &&
            (sg(
              this,
              d0,
              null == (e = this.getRootNode()) ? void 0 : e.getElementById(r),
            ),
            null ==
              (i = null == (t = sb(this, d0)) ? void 0 : t.associateElement) ||
              i.call(t, this));
        }
        disconnectedCallback() {
          var e, t;
          (null ==
            (t = null == (e = sb(this, d0)) ? void 0 : e.unassociateElement) ||
            t.call(e, this),
            sg(this, d0, null));
        }
      }
      ((d0 = new WeakMap()),
        a2.customElements.get("media-text-display") ||
          a2.customElements.define("media-text-display", sy));
      var sT = (e, t, i) => {
          if (!t.has(e)) throw TypeError("Cannot " + i);
        },
        sA = (e, t, i) => (
          sT(e, t, "read from private field"),
          i ? i.call(e) : t.get(e)
        ),
        sk = (e, t, i) => {
          if (t.has(e))
            throw TypeError(
              "Cannot add the same private member more than once",
            );
          t instanceof WeakSet ? t.add(e) : t.set(e, i);
        },
        sw = (e, t, i, a) => (
          sT(e, t, "write to private field"),
          a ? a.call(e, i) : t.set(e, i),
          i
        );
      class sS extends sy {
        constructor() {
          (super(),
            sk(this, d1, void 0),
            sw(this, d1, this.shadowRoot.querySelector("slot")),
            (sA(this, d1).textContent = aF(0)));
        }
        static get observedAttributes() {
          return [...super.observedAttributes, aA.MEDIA_DURATION];
        }
        attributeChangedCallback(e, t, i) {
          (e === aA.MEDIA_DURATION && (sA(this, d1).textContent = aF(+i)),
            super.attributeChangedCallback(e, t, i));
        }
        get mediaDuration() {
          return rc(this, aA.MEDIA_DURATION);
        }
        set mediaDuration(e) {
          rh(this, aA.MEDIA_DURATION, e);
        }
      }
      ((d1 = new WeakMap()),
        a2.customElements.get("media-duration-display") ||
          a2.customElements.define("media-duration-display", sS));
      let sI = {
          2: aG("Network Error"),
          3: aG("Decode Error"),
          4: aG("Source Not Supported"),
          5: aG("Encryption Error"),
        },
        sR = {
          2: aG("A network error caused the media download to fail."),
          3: aG(
            "A media error caused playback to be aborted. The media could be corrupt or your browser does not support this format.",
          ),
          4: aG(
            "An unsupported error occurred. The server or network failed, or your browser does not support this format.",
          ),
          5: aG("The media is encrypted and there are no keys to decrypt it."),
        },
        sC = (e) => {
          var t, i;
          return 1 === e.code
            ? null
            : {
                title: null != (t = sI[e.code]) ? t : `Error ${e.code}`,
                message: null != (i = sR[e.code]) ? i : e.message,
              };
        };
      var sD = (e, t, i) => {
          if (!t.has(e)) throw TypeError("Cannot " + i);
        },
        sL = (e, t, i) => (
          sD(e, t, "read from private field"),
          i ? i.call(e) : t.get(e)
        ),
        sM = (e, t, i) => {
          if (t.has(e))
            throw TypeError(
              "Cannot add the same private member more than once",
            );
          t instanceof WeakSet ? t.add(e) : t.set(e, i);
        },
        sO = (e, t, i, a) => (
          sD(e, t, "write to private field"),
          a ? a.call(e, i) : t.set(e, i),
          i
        );
      function sN(e) {
        var t;
        let { title: i, message: a } = null != (t = sC(e)) ? t : {},
          r = "";
        return (
          i && (r += `<slot name="error-${e.code}-title"><h3>${i}</h3></slot>`),
          a && (r += `<slot name="error-${e.code}-message"><p>${a}</p></slot>`),
          r
        );
      }
      let sx = [aA.MEDIA_ERROR_CODE, aA.MEDIA_ERROR_MESSAGE];
      class sP extends si {
        constructor() {
          (super(...arguments), sM(this, d2, null));
        }
        static get observedAttributes() {
          return [...super.observedAttributes, ...sx];
        }
        formatErrorMessage(e) {
          return this.constructor.formatErrorMessage(e);
        }
        attributeChangedCallback(e, t, i) {
          var a;
          if ((super.attributeChangedCallback(e, t, i), !sx.includes(e)))
            return;
          let r =
            null != (a = this.mediaError)
              ? a
              : { code: this.mediaErrorCode, message: this.mediaErrorMessage };
          ((this.open = r.code && null !== sC(r)),
            this.open &&
              ((this.shadowRoot.querySelector("slot").name =
                `error-${this.mediaErrorCode}`),
              (this.shadowRoot.querySelector("#content").innerHTML =
                this.formatErrorMessage(r))));
        }
        get mediaError() {
          return sL(this, d2);
        }
        set mediaError(e) {
          sO(this, d2, e);
        }
        get mediaErrorCode() {
          return rc(this, "mediaerrorcode");
        }
        set mediaErrorCode(e) {
          rh(this, "mediaerrorcode", e);
        }
        get mediaErrorMessage() {
          return rv(this, "mediaerrormessage");
        }
        set mediaErrorMessage(e) {
          rE(this, "mediaerrormessage", e);
        }
      }
      ((d2 = new WeakMap()),
        (sP.getSlotTemplateHTML = function (e) {
          return `
    <style>
      :host {
        background: rgb(20 20 30 / .8);
      }

      #content {
        display: block;
        padding: 1.2em 1.5em;
      }

      h3,
      p {
        margin-block: 0 .3em;
      }
    </style>
    <slot name="error-${e.mediaerrorcode}" id="content">
      ${sN({ code: +e.mediaerrorcode, message: e.mediaerrormessage })}
    </slot>
  `;
        }),
        (sP.formatErrorMessage = sN),
        a2.customElements.get("media-error-dialog") ||
          a2.customElements.define("media-error-dialog", sP));
      let sU = `<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M16 3v2.5h3.5V9H22V3h-6ZM4 9h2.5V5.5H10V3H4v6Zm15.5 9.5H16V21h6v-6h-2.5v3.5ZM6.5 15H4v6h6v-2.5H6.5V15Z"/>
</svg>`,
        sB = `<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M18.5 6.5V3H16v6h6V6.5h-3.5ZM16 21h2.5v-3.5H22V15h-6v6ZM4 17.5h3.5V21H10v-6H4v2.5Zm3.5-11H4V9h6V3H7.5v3.5Z"/>
</svg>`,
        sW = a3.createElement("template");
      sW.innerHTML = `
  <style>
    :host([${aA.MEDIA_IS_FULLSCREEN}]) slot[name=icon] slot:not([name=exit]) {
      display: none !important;
    }

    
    :host(:not([${aA.MEDIA_IS_FULLSCREEN}])) slot[name=icon] slot:not([name=enter]) {
      display: none !important;
    }

    :host([${aA.MEDIA_IS_FULLSCREEN}]) slot[name=tooltip-enter],
    :host(:not([${aA.MEDIA_IS_FULLSCREEN}])) slot[name=tooltip-exit] {
      display: none;
    }
  </style>

  <slot name="icon">
    <slot name="enter">${sU}</slot>
    <slot name="exit">${sB}</slot>
  </slot>
`;
      let sH = `
  <slot name="tooltip-enter">${aG("Enter fullscreen mode")}</slot>
  <slot name="tooltip-exit">${aG("Exit fullscreen mode")}</slot>
`,
        sV = (e) => {
          let t = e.mediaIsFullscreen
            ? aG("exit fullscreen mode")
            : aG("enter fullscreen mode");
          e.setAttribute("aria-label", t);
        };
      class sF extends nF {
        static get observedAttributes() {
          return [
            ...super.observedAttributes,
            aA.MEDIA_IS_FULLSCREEN,
            aA.MEDIA_FULLSCREEN_UNAVAILABLE,
          ];
        }
        constructor(e = {}) {
          super({ slotTemplate: sW, tooltipContent: sH, ...e });
        }
        connectedCallback() {
          (super.connectedCallback(), sV(this));
        }
        attributeChangedCallback(e, t, i) {
          (super.attributeChangedCallback(e, t, i),
            e === aA.MEDIA_IS_FULLSCREEN && sV(this));
        }
        get mediaFullscreenUnavailable() {
          return rv(this, aA.MEDIA_FULLSCREEN_UNAVAILABLE);
        }
        set mediaFullscreenUnavailable(e) {
          rE(this, aA.MEDIA_FULLSCREEN_UNAVAILABLE, e);
        }
        get mediaIsFullscreen() {
          return rm(this, aA.MEDIA_IS_FULLSCREEN);
        }
        set mediaIsFullscreen(e) {
          rp(this, aA.MEDIA_IS_FULLSCREEN, e);
        }
        handleClick() {
          let e = this.mediaIsFullscreen
            ? ag.MEDIA_EXIT_FULLSCREEN_REQUEST
            : ag.MEDIA_ENTER_FULLSCREEN_REQUEST;
          this.dispatchEvent(
            new a2.CustomEvent(e, { composed: !0, bubbles: !0 }),
          );
        }
      }
      a2.customElements.get("media-fullscreen-button") ||
        a2.customElements.define("media-fullscreen-button", sF);
      let { MEDIA_TIME_IS_LIVE: sq, MEDIA_PAUSED: s$ } = aA,
        { MEDIA_SEEK_TO_LIVE_REQUEST: sK, MEDIA_PLAY_REQUEST: sY } = ag,
        sG = a3.createElement("template");
      sG.innerHTML = `
  <style>
  :host { --media-tooltip-display: none; }
  
  slot[name=indicator] > *,
  :host ::slotted([slot=indicator]) {
    
    min-width: auto;
    fill: var(--media-live-button-icon-color, rgb(140, 140, 140));
    color: var(--media-live-button-icon-color, rgb(140, 140, 140));
  }

  :host([${sq}]:not([${s$}])) slot[name=indicator] > *,
  :host([${sq}]:not([${s$}])) ::slotted([slot=indicator]) {
    fill: var(--media-live-button-indicator-color, rgb(255, 0, 0));
    color: var(--media-live-button-indicator-color, rgb(255, 0, 0));
  }

  :host([${sq}]:not([${s$}])) {
    cursor: var(--media-cursor, not-allowed);
  }

  slot[name=text]{
    text-transform: uppercase;
  }

  </style>

  <slot name="indicator"><svg viewBox="0 0 6 12"><circle cx="3" cy="6" r="2"></circle></svg></slot>
  
  <slot name="spacer">&nbsp;</slot><slot name="text">${aG("live")}</slot>
`;
      let sj = (e) => {
        let t = e.mediaPaused || !e.mediaTimeIsLive,
          i = t ? aG("seek to live") : aG("playing live");
        (e.setAttribute("aria-label", i),
          t
            ? e.removeAttribute("aria-disabled")
            : e.setAttribute("aria-disabled", "true"));
      };
      class sQ extends nF {
        static get observedAttributes() {
          return [...super.observedAttributes, s$, sq];
        }
        constructor(e = {}) {
          super({ slotTemplate: sG, ...e });
        }
        connectedCallback() {
          (sj(this), super.connectedCallback());
        }
        attributeChangedCallback(e, t, i) {
          (super.attributeChangedCallback(e, t, i), sj(this));
        }
        get mediaPaused() {
          return rm(this, aA.MEDIA_PAUSED);
        }
        set mediaPaused(e) {
          rp(this, aA.MEDIA_PAUSED, e);
        }
        get mediaTimeIsLive() {
          return rm(this, aA.MEDIA_TIME_IS_LIVE);
        }
        set mediaTimeIsLive(e) {
          rp(this, aA.MEDIA_TIME_IS_LIVE, e);
        }
        handleClick() {
          (this.mediaPaused || !this.mediaTimeIsLive) &&
            (this.dispatchEvent(
              new a2.CustomEvent(sK, { composed: !0, bubbles: !0 }),
            ),
            this.hasAttribute(s$) &&
              this.dispatchEvent(
                new a2.CustomEvent(sY, { composed: !0, bubbles: !0 }),
              ));
        }
      }
      a2.customElements.get("media-live-button") ||
        a2.customElements.define("media-live-button", sQ);
      var sZ = (e, t, i) => {
          if (!t.has(e)) throw TypeError("Cannot " + i);
        },
        sz = (e, t, i) => (
          sZ(e, t, "read from private field"),
          i ? i.call(e) : t.get(e)
        ),
        sX = (e, t, i) => {
          if (t.has(e))
            throw TypeError(
              "Cannot add the same private member more than once",
            );
          t instanceof WeakSet ? t.add(e) : t.set(e, i);
        },
        sJ = (e, t, i, a) => (
          sZ(e, t, "write to private field"),
          a ? a.call(e, i) : t.set(e, i),
          i
        );
      let s0 = { LOADING_DELAY: "loadingdelay", NO_AUTOHIDE: "noautohide" },
        s1 = a3.createElement("template"),
        s2 = `
<svg aria-hidden="true" viewBox="0 0 100 100">
  <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
    <animateTransform
       attributeName="transform"
       attributeType="XML"
       type="rotate"
       dur="1s"
       from="0 50 50"
       to="360 50 50"
       repeatCount="indefinite" />
  </path>
</svg>
`;
      s1.innerHTML = `
<style>
:host {
  display: var(--media-control-display, var(--media-loading-indicator-display, inline-block));
  vertical-align: middle;
  box-sizing: border-box;
  --_loading-indicator-delay: var(--media-loading-indicator-transition-delay, 500ms);
}

#status {
  color: rgba(0,0,0,0);
  width: 0px;
  height: 0px;
}

:host slot[name=icon] > *,
:host ::slotted([slot=icon]) {
  opacity: var(--media-loading-indicator-opacity, 0);
  transition: opacity 0.15s;
}

:host([${aA.MEDIA_LOADING}]:not([${aA.MEDIA_PAUSED}])) slot[name=icon] > *,
:host([${aA.MEDIA_LOADING}]:not([${aA.MEDIA_PAUSED}])) ::slotted([slot=icon]) {
  opacity: var(--media-loading-indicator-opacity, 1);
  transition: opacity 0.15s var(--_loading-indicator-delay);
}

:host #status {
  visibility: var(--media-loading-indicator-opacity, hidden);
  transition: visibility 0.15s;
}

:host([${aA.MEDIA_LOADING}]:not([${aA.MEDIA_PAUSED}])) #status {
  visibility: var(--media-loading-indicator-opacity, visible);
  transition: visibility 0.15s var(--_loading-indicator-delay);
}

svg, img, ::slotted(svg), ::slotted(img) {
  width: var(--media-loading-indicator-icon-width);
  height: var(--media-loading-indicator-icon-height, 100px);
  fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
  vertical-align: middle;
}
</style>

<slot name="icon">${s2}</slot>
<div id="status" role="status" aria-live="polite">${aG("media loading")}</div>
`;
      class s3 extends a2.HTMLElement {
        constructor() {
          if (
            (super(), sX(this, d3, void 0), sX(this, d4, 500), !this.shadowRoot)
          ) {
            let e = this.attachShadow({ mode: "open" }),
              t = s1.content.cloneNode(!0);
            e.appendChild(t);
          }
        }
        static get observedAttributes() {
          return [
            a_.MEDIA_CONTROLLER,
            aA.MEDIA_PAUSED,
            aA.MEDIA_LOADING,
            s0.LOADING_DELAY,
          ];
        }
        attributeChangedCallback(e, t, i) {
          var a, r, n, s, o;
          e === s0.LOADING_DELAY && t !== i
            ? (this.loadingDelay = Number(i))
            : e === a_.MEDIA_CONTROLLER &&
              (t &&
                (null ==
                  (r =
                    null == (a = sz(this, d3))
                      ? void 0
                      : a.unassociateElement) || r.call(a, this),
                sJ(this, d3, null)),
              i &&
                this.isConnected &&
                (sJ(
                  this,
                  d3,
                  null == (n = this.getRootNode())
                    ? void 0
                    : n.getElementById(i),
                ),
                null ==
                  (o =
                    null == (s = sz(this, d3)) ? void 0 : s.associateElement) ||
                  o.call(s, this)));
        }
        connectedCallback() {
          var e, t, i;
          let a = this.getAttribute(a_.MEDIA_CONTROLLER);
          a &&
            (sJ(
              this,
              d3,
              null == (e = this.getRootNode()) ? void 0 : e.getElementById(a),
            ),
            null ==
              (i = null == (t = sz(this, d3)) ? void 0 : t.associateElement) ||
              i.call(t, this));
        }
        disconnectedCallback() {
          var e, t;
          (null ==
            (t = null == (e = sz(this, d3)) ? void 0 : e.unassociateElement) ||
            t.call(e, this),
            sJ(this, d3, null));
        }
        get loadingDelay() {
          return sz(this, d4);
        }
        set loadingDelay(e) {
          sJ(this, d4, e);
          let { style: t } = rd(this.shadowRoot, ":host");
          t.setProperty(
            "--_loading-indicator-delay",
            `var(--media-loading-indicator-transition-delay, ${e}ms)`,
          );
        }
        get mediaPaused() {
          return rm(this, aA.MEDIA_PAUSED);
        }
        set mediaPaused(e) {
          rp(this, aA.MEDIA_PAUSED, e);
        }
        get mediaLoading() {
          return rm(this, aA.MEDIA_LOADING);
        }
        set mediaLoading(e) {
          rp(this, aA.MEDIA_LOADING, e);
        }
        get mediaController() {
          return rv(this, a_.MEDIA_CONTROLLER);
        }
        set mediaController(e) {
          rE(this, a_.MEDIA_CONTROLLER, e);
        }
        get noAutohide() {
          return rm(this, s0.NO_AUTOHIDE);
        }
        set noAutohide(e) {
          rp(this, s0.NO_AUTOHIDE, e);
        }
      }
      ((d3 = new WeakMap()),
        (d4 = new WeakMap()),
        a2.customElements.get("media-loading-indicator") ||
          a2.customElements.define("media-loading-indicator", s3));
      let { MEDIA_VOLUME_LEVEL: s4 } = aA,
        s5 = `<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M16.5 12A4.5 4.5 0 0 0 14 8v2.18l2.45 2.45a4.22 4.22 0 0 0 .05-.63Zm2.5 0a6.84 6.84 0 0 1-.54 2.64L20 16.15A8.8 8.8 0 0 0 21 12a9 9 0 0 0-7-8.77v2.06A7 7 0 0 1 19 12ZM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.92 6.92 0 0 1 14 18.7v2.06A9 9 0 0 0 17.69 19l2 2.05L21 19.73l-9-9L4.27 3ZM12 4 9.91 6.09 12 8.18V4Z"/>
</svg>`,
        s9 = `<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4Z"/>
</svg>`,
        s8 = `<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M3 9v6h4l5 5V4L7 9H3Zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.47 4.47 0 0 0 2.5-4ZM14 3.23v2.06a7 7 0 0 1 0 13.42v2.06a9 9 0 0 0 0-17.54Z"/>
</svg>`,
        s6 = a3.createElement("template");
      s6.innerHTML = `
  <style>
  
  :host(:not([${s4}])) slot[name=icon] slot:not([name=high]), 
  :host([${s4}=high]) slot[name=icon] slot:not([name=high]) {
    display: none !important;
  }

  :host([${s4}=off]) slot[name=icon] slot:not([name=off]) {
    display: none !important;
  }

  :host([${s4}=low]) slot[name=icon] slot:not([name=low]) {
    display: none !important;
  }

  :host([${s4}=medium]) slot[name=icon] slot:not([name=medium]) {
    display: none !important;
  }

  :host(:not([${s4}=off])) slot[name=tooltip-unmute],
  :host([${s4}=off]) slot[name=tooltip-mute] {
    display: none;
  }
  </style>

  <slot name="icon">
    <slot name="off">${s5}</slot>
    <slot name="low">${s9}</slot>
    <slot name="medium">${s9}</slot>
    <slot name="high">${s8}</slot>
  </slot>
`;
      let s7 = `
  <slot name="tooltip-mute">${aG("Mute")}</slot>
  <slot name="tooltip-unmute">${aG("Unmute")}</slot>
`,
        oe = (e) => {
          let t = "off" === e.mediaVolumeLevel ? aG("unmute") : aG("mute");
          e.setAttribute("aria-label", t);
        };
      class ot extends nF {
        static get observedAttributes() {
          return [...super.observedAttributes, aA.MEDIA_VOLUME_LEVEL];
        }
        constructor(e = {}) {
          super({ slotTemplate: s6, tooltipContent: s7, ...e });
        }
        connectedCallback() {
          (oe(this), super.connectedCallback());
        }
        attributeChangedCallback(e, t, i) {
          (e === aA.MEDIA_VOLUME_LEVEL && oe(this),
            super.attributeChangedCallback(e, t, i));
        }
        get mediaVolumeLevel() {
          return rv(this, aA.MEDIA_VOLUME_LEVEL);
        }
        set mediaVolumeLevel(e) {
          rE(this, aA.MEDIA_VOLUME_LEVEL, e);
        }
        handleClick() {
          let e =
            "off" === this.mediaVolumeLevel
              ? ag.MEDIA_UNMUTE_REQUEST
              : ag.MEDIA_MUTE_REQUEST;
          this.dispatchEvent(
            new a2.CustomEvent(e, { composed: !0, bubbles: !0 }),
          );
        }
      }
      a2.customElements.get("media-mute-button") ||
        a2.customElements.define("media-mute-button", ot);
      let oi = `<svg aria-hidden="true" viewBox="0 0 28 24">
  <path d="M24 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16H5V5h18v14Zm-3-8h-7v5h7v-5Z"/>
</svg>`,
        oa = a3.createElement("template");
      oa.innerHTML = `
  <style>
  :host([${aA.MEDIA_IS_PIP}]) slot[name=icon] slot:not([name=exit]) {
    display: none !important;
  }

  
  :host(:not([${aA.MEDIA_IS_PIP}])) slot[name=icon] slot:not([name=enter]) {
    display: none !important;
  }

  :host([${aA.MEDIA_IS_PIP}]) slot[name=tooltip-enter],
  :host(:not([${aA.MEDIA_IS_PIP}])) slot[name=tooltip-exit] {
    display: none;
  }
  </style>

  <slot name="icon">
    <slot name="enter">${oi}</slot>
    <slot name="exit">${oi}</slot>
  </slot>
`;
      let or = `
  <slot name="tooltip-enter">${aG("Enter picture in picture mode")}</slot>
  <slot name="tooltip-exit">${aG("Exit picture in picture mode")}</slot>
`,
        on = (e) => {
          let t = e.mediaIsPip
            ? aG("exit picture in picture mode")
            : aG("enter picture in picture mode");
          e.setAttribute("aria-label", t);
        };
      class os extends nF {
        static get observedAttributes() {
          return [
            ...super.observedAttributes,
            aA.MEDIA_IS_PIP,
            aA.MEDIA_PIP_UNAVAILABLE,
          ];
        }
        constructor(e = {}) {
          super({ slotTemplate: oa, tooltipContent: or, ...e });
        }
        connectedCallback() {
          (on(this), super.connectedCallback());
        }
        attributeChangedCallback(e, t, i) {
          (e === aA.MEDIA_IS_PIP && on(this),
            super.attributeChangedCallback(e, t, i));
        }
        get mediaPipUnavailable() {
          return rv(this, aA.MEDIA_PIP_UNAVAILABLE);
        }
        set mediaPipUnavailable(e) {
          rE(this, aA.MEDIA_PIP_UNAVAILABLE, e);
        }
        get mediaIsPip() {
          return rm(this, aA.MEDIA_IS_PIP);
        }
        set mediaIsPip(e) {
          rp(this, aA.MEDIA_IS_PIP, e);
        }
        handleClick() {
          let e = this.mediaIsPip
            ? ag.MEDIA_EXIT_PIP_REQUEST
            : ag.MEDIA_ENTER_PIP_REQUEST;
          this.dispatchEvent(
            new a2.CustomEvent(e, { composed: !0, bubbles: !0 }),
          );
        }
      }
      a2.customElements.get("media-pip-button") ||
        a2.customElements.define("media-pip-button", os);
      var oo = (e, t, i) => {
          if (!t.has(e)) throw TypeError("Cannot " + i);
        },
        ol = (e, t, i) => (
          oo(e, t, "read from private field"),
          i ? i.call(e) : t.get(e)
        ),
        od = (e, t, i) => {
          if (t.has(e))
            throw TypeError(
              "Cannot add the same private member more than once",
            );
          t instanceof WeakSet ? t.add(e) : t.set(e, i);
        };
      let ou = { RATES: "rates" },
        oc = [1, 1.2, 1.5, 1.7, 2],
        oh = a3.createElement("template");
      oh.innerHTML = `
  <style>
    :host {
      min-width: 5ch;
      padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
    }
  </style>
  <slot name="icon"></slot>
`;
      class om extends nF {
        constructor(e = {}) {
          (super({
            slotTemplate: oh,
            tooltipContent: aG("Playback rate"),
            ...e,
          }),
            od(this, d5, new rU(this, ou.RATES, { defaultValue: oc })),
            (this.container =
              this.shadowRoot.querySelector('slot[name="icon"]')),
            (this.container.innerHTML = "1x"));
        }
        static get observedAttributes() {
          return [
            ...super.observedAttributes,
            aA.MEDIA_PLAYBACK_RATE,
            ou.RATES,
          ];
        }
        attributeChangedCallback(e, t, i) {
          if (
            (super.attributeChangedCallback(e, t, i),
            e === ou.RATES && (ol(this, d5).value = i),
            e === aA.MEDIA_PLAYBACK_RATE)
          ) {
            let e = i ? +i : Number.NaN,
              t = Number.isNaN(e) ? 1 : e;
            ((this.container.innerHTML = `${t}x`),
              this.setAttribute(
                "aria-label",
                aG("Playback rate {playbackRate}", { playbackRate: t }),
              ));
          }
        }
        get rates() {
          return ol(this, d5);
        }
        set rates(e) {
          e
            ? Array.isArray(e) && (ol(this, d5).value = e.join(" "))
            : (ol(this, d5).value = "");
        }
        get mediaPlaybackRate() {
          return rc(this, aA.MEDIA_PLAYBACK_RATE, 1);
        }
        set mediaPlaybackRate(e) {
          rh(this, aA.MEDIA_PLAYBACK_RATE, e);
        }
        handleClick() {
          var e, t;
          let i = Array.from(this.rates.values(), (e) => +e).sort(
              (e, t) => e - t,
            ),
            a =
              null !=
              (t =
                null != (e = i.find((e) => e > this.mediaPlaybackRate))
                  ? e
                  : i[0])
                ? t
                : 1,
            r = new a2.CustomEvent(ag.MEDIA_PLAYBACK_RATE_REQUEST, {
              composed: !0,
              bubbles: !0,
              detail: a,
            });
          this.dispatchEvent(r);
        }
      }
      ((d5 = new WeakMap()),
        a2.customElements.get("media-playback-rate-button") ||
          a2.customElements.define("media-playback-rate-button", om));
      let op = `<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="m6 21 15-9L6 3v18Z"/>
</svg>`,
        ov = `<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M6 20h4V4H6v16Zm8-16v16h4V4h-4Z"/>
</svg>`,
        oE = a3.createElement("template");
      oE.innerHTML = `
  <style>
    :host([${aA.MEDIA_PAUSED}]) slot[name=pause],
    :host(:not([${aA.MEDIA_PAUSED}])) slot[name=play] {
      display: none !important;
    }

    :host([${aA.MEDIA_PAUSED}]) slot[name=tooltip-pause],
    :host(:not([${aA.MEDIA_PAUSED}])) slot[name=tooltip-play] {
      display: none;
    }
  </style>

  <slot name="icon">
    <slot name="play">${op}</slot>
    <slot name="pause">${ov}</slot>
  </slot>
`;
      let ob = `
  <slot name="tooltip-play">${aG("Play")}</slot>
  <slot name="tooltip-pause">${aG("Pause")}</slot>
`,
        of = (e) => {
          let t = e.mediaPaused ? aG("play") : aG("pause");
          e.setAttribute("aria-label", t);
        };
      class og extends nF {
        static get observedAttributes() {
          return [...super.observedAttributes, aA.MEDIA_PAUSED, aA.MEDIA_ENDED];
        }
        constructor(e = {}) {
          super({ slotTemplate: oE, tooltipContent: ob, ...e });
        }
        connectedCallback() {
          (of(this), super.connectedCallback());
        }
        attributeChangedCallback(e, t, i) {
          (e === aA.MEDIA_PAUSED && of(this),
            super.attributeChangedCallback(e, t, i));
        }
        get mediaPaused() {
          return rm(this, aA.MEDIA_PAUSED);
        }
        set mediaPaused(e) {
          rp(this, aA.MEDIA_PAUSED, e);
        }
        handleClick() {
          let e = this.mediaPaused
            ? ag.MEDIA_PLAY_REQUEST
            : ag.MEDIA_PAUSE_REQUEST;
          this.dispatchEvent(
            new a2.CustomEvent(e, { composed: !0, bubbles: !0 }),
          );
        }
      }
      a2.customElements.get("media-play-button") ||
        a2.customElements.define("media-play-button", og);
      let o_ = { PLACEHOLDER_SRC: "placeholdersrc", SRC: "src" },
        oy = a3.createElement("template");
      oy.innerHTML = `
  <style>
    :host {
      pointer-events: none;
      display: var(--media-poster-image-display, inline-block);
      box-sizing: border-box;
    }

    img {
      max-width: 100%;
      max-height: 100%;
      min-width: 100%;
      min-height: 100%;
      background-repeat: no-repeat;
      background-position: var(--media-poster-image-background-position, var(--media-object-position, center));
      background-size: var(--media-poster-image-background-size, var(--media-object-fit, contain));
      object-fit: var(--media-object-fit, contain);
      object-position: var(--media-object-position, center);
    }
  </style>

  <img part="poster img" aria-hidden="true" id="image"/>
`;
      let oT = (e) => {
          e.style.removeProperty("background-image");
        },
        oA = (e, t) => {
          e.style["background-image"] = `url('${t}')`;
        };
      class ok extends a2.HTMLElement {
        static get observedAttributes() {
          return [o_.PLACEHOLDER_SRC, o_.SRC];
        }
        constructor() {
          (super(),
            this.shadowRoot ||
              (this.attachShadow({ mode: "open" }),
              this.shadowRoot.appendChild(oy.content.cloneNode(!0))),
            (this.image = this.shadowRoot.querySelector("#image")));
        }
        attributeChangedCallback(e, t, i) {
          (e === o_.SRC &&
            (null == i
              ? this.image.removeAttribute(o_.SRC)
              : this.image.setAttribute(o_.SRC, i)),
            e === o_.PLACEHOLDER_SRC &&
              (null == i ? oT(this.image) : oA(this.image, i)));
        }
        get placeholderSrc() {
          return rv(this, o_.PLACEHOLDER_SRC);
        }
        set placeholderSrc(e) {
          rE(this, o_.SRC, e);
        }
        get src() {
          return rv(this, o_.SRC);
        }
        set src(e) {
          rE(this, o_.SRC, e);
        }
      }
      a2.customElements.get("media-poster-image") ||
        a2.customElements.define("media-poster-image", ok);
      var ow = (e, t, i) => {
          if (!t.has(e)) throw TypeError("Cannot " + i);
        },
        oS = (e, t, i) => (
          ow(e, t, "read from private field"),
          i ? i.call(e) : t.get(e)
        ),
        oI = (e, t, i) => {
          if (t.has(e))
            throw TypeError(
              "Cannot add the same private member more than once",
            );
          t instanceof WeakSet ? t.add(e) : t.set(e, i);
        },
        oR = (e, t, i, a) => (
          ow(e, t, "write to private field"),
          a ? a.call(e, i) : t.set(e, i),
          i
        );
      class oC extends sy {
        constructor() {
          (super(),
            oI(this, d9, void 0),
            oR(this, d9, this.shadowRoot.querySelector("slot")));
        }
        static get observedAttributes() {
          return [...super.observedAttributes, aA.MEDIA_PREVIEW_CHAPTER];
        }
        attributeChangedCallback(e, t, i) {
          (super.attributeChangedCallback(e, t, i),
            e === aA.MEDIA_PREVIEW_CHAPTER &&
              i !== t &&
              null != i &&
              ((oS(this, d9).textContent = i),
              "" !== i
                ? this.setAttribute("aria-valuetext", `chapter: ${i}`)
                : this.removeAttribute("aria-valuetext")));
        }
        get mediaPreviewChapter() {
          return rv(this, aA.MEDIA_PREVIEW_CHAPTER);
        }
        set mediaPreviewChapter(e) {
          rE(this, aA.MEDIA_PREVIEW_CHAPTER, e);
        }
      }
      ((d9 = new WeakMap()),
        a2.customElements.get("media-preview-chapter-display") ||
          a2.customElements.define("media-preview-chapter-display", oC));
      var oD = (e, t, i) => {
          if (!t.has(e)) throw TypeError("Cannot " + i);
        },
        oL = (e, t, i) => (
          oD(e, t, "read from private field"),
          i ? i.call(e) : t.get(e)
        ),
        oM = (e, t, i) => {
          if (t.has(e))
            throw TypeError(
              "Cannot add the same private member more than once",
            );
          t instanceof WeakSet ? t.add(e) : t.set(e, i);
        },
        oO = (e, t, i, a) => (
          oD(e, t, "write to private field"),
          a ? a.call(e, i) : t.set(e, i),
          i
        );
      let oN = a3.createElement("template");
      oN.innerHTML = `
  <style>
    :host {
      box-sizing: border-box;
      display: var(--media-control-display, var(--media-preview-thumbnail-display, inline-block));
      overflow: hidden;
    }

    img {
      display: none;
      position: relative;
    }
  </style>
  <img crossorigin loading="eager" decoding="async">
`;
      class ox extends a2.HTMLElement {
        constructor() {
          (super(),
            oM(this, d8, void 0),
            this.shadowRoot ||
              (this.attachShadow({ mode: "open" }),
              this.shadowRoot.appendChild(oN.content.cloneNode(!0))));
        }
        static get observedAttributes() {
          return [
            a_.MEDIA_CONTROLLER,
            aA.MEDIA_PREVIEW_IMAGE,
            aA.MEDIA_PREVIEW_COORDS,
          ];
        }
        connectedCallback() {
          var e, t, i;
          let a = this.getAttribute(a_.MEDIA_CONTROLLER);
          a &&
            (oO(
              this,
              d8,
              null == (e = this.getRootNode()) ? void 0 : e.getElementById(a),
            ),
            null ==
              (i = null == (t = oL(this, d8)) ? void 0 : t.associateElement) ||
              i.call(t, this));
        }
        disconnectedCallback() {
          var e, t;
          (null ==
            (t = null == (e = oL(this, d8)) ? void 0 : e.unassociateElement) ||
            t.call(e, this),
            oO(this, d8, null));
        }
        attributeChangedCallback(e, t, i) {
          var a, r, n, s, o;
          ([aA.MEDIA_PREVIEW_IMAGE, aA.MEDIA_PREVIEW_COORDS].includes(e) &&
            this.update(),
            e === a_.MEDIA_CONTROLLER &&
              (t &&
                (null ==
                  (r =
                    null == (a = oL(this, d8))
                      ? void 0
                      : a.unassociateElement) || r.call(a, this),
                oO(this, d8, null)),
              i &&
                this.isConnected &&
                (oO(
                  this,
                  d8,
                  null == (n = this.getRootNode())
                    ? void 0
                    : n.getElementById(i),
                ),
                null ==
                  (o =
                    null == (s = oL(this, d8)) ? void 0 : s.associateElement) ||
                  o.call(s, this))));
        }
        get mediaPreviewImage() {
          return rv(this, aA.MEDIA_PREVIEW_IMAGE);
        }
        set mediaPreviewImage(e) {
          rE(this, aA.MEDIA_PREVIEW_IMAGE, e);
        }
        get mediaPreviewCoords() {
          let e = this.getAttribute(aA.MEDIA_PREVIEW_COORDS);
          if (e) return e.split(/\s+/).map((e) => +e);
        }
        set mediaPreviewCoords(e) {
          if (!e) return void this.removeAttribute(aA.MEDIA_PREVIEW_COORDS);
          this.setAttribute(aA.MEDIA_PREVIEW_COORDS, e.join(" "));
        }
        update() {
          let e = this.mediaPreviewCoords,
            t = this.mediaPreviewImage;
          if (!(e && t)) return;
          let [i, a, r, n] = e,
            s = t.split("#")[0],
            {
              maxWidth: o,
              maxHeight: l,
              minWidth: d,
              minHeight: u,
            } = getComputedStyle(this),
            c = Math.min(parseInt(o) / r, parseInt(l) / n),
            h = Math.max(parseInt(d) / r, parseInt(u) / n),
            m = c < 1,
            p = m ? c : h > 1 ? h : 1,
            { style: E } = rd(this.shadowRoot, ":host"),
            b = rd(this.shadowRoot, "img").style,
            f = this.shadowRoot.querySelector("img"),
            g = m ? "min" : "max";
          (E.setProperty(`${g}-width`, "initial", "important"),
            E.setProperty(`${g}-height`, "initial", "important"),
            (E.width = `${r * p}px`),
            (E.height = `${n * p}px`));
          let _ = () => {
            ((b.width = `${this.imgWidth * p}px`),
              (b.height = `${this.imgHeight * p}px`),
              (b.display = "block"));
          };
          (f.src !== s &&
            ((f.onload = () => {
              ((this.imgWidth = f.naturalWidth),
                (this.imgHeight = f.naturalHeight),
                _());
            }),
            (f.src = s),
            _()),
            _(),
            (b.transform = `translate(-${i * p}px, -${a * p}px)`));
        }
      }
      ((d8 = new WeakMap()),
        a2.customElements.get("media-preview-thumbnail") ||
          a2.customElements.define("media-preview-thumbnail", ox));
      var oP = (e, t, i) => {
          if (!t.has(e)) throw TypeError("Cannot " + i);
        },
        oU = (e, t, i) => (
          oP(e, t, "read from private field"),
          i ? i.call(e) : t.get(e)
        ),
        oB = (e, t, i) => {
          if (t.has(e))
            throw TypeError(
              "Cannot add the same private member more than once",
            );
          t instanceof WeakSet ? t.add(e) : t.set(e, i);
        },
        oW = (e, t, i, a) => (
          oP(e, t, "write to private field"),
          a ? a.call(e, i) : t.set(e, i),
          i
        );
      class oH extends sy {
        constructor() {
          (super(),
            oB(this, d6, void 0),
            oW(this, d6, this.shadowRoot.querySelector("slot")),
            (oU(this, d6).textContent = aF(0)));
        }
        static get observedAttributes() {
          return [...super.observedAttributes, aA.MEDIA_PREVIEW_TIME];
        }
        attributeChangedCallback(e, t, i) {
          (super.attributeChangedCallback(e, t, i),
            e === aA.MEDIA_PREVIEW_TIME &&
              null != i &&
              (oU(this, d6).textContent = aF(parseFloat(i))));
        }
        get mediaPreviewTime() {
          return rc(this, aA.MEDIA_PREVIEW_TIME);
        }
        set mediaPreviewTime(e) {
          rh(this, aA.MEDIA_PREVIEW_TIME, e);
        }
      }
      ((d6 = new WeakMap()),
        a2.customElements.get("media-preview-time-display") ||
          a2.customElements.define("media-preview-time-display", oH));
      let oV = { SEEK_OFFSET: "seekoffset" },
        oF = a3.createElement("template");
      oF.innerHTML = `
  <slot name="icon"><svg aria-hidden="true" viewBox="0 0 20 24"><defs><style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style></defs><text class="text value" transform="translate(2.18 19.87)">30</text><path d="M10 6V3L4.37 7 10 10.94V8a5.54 5.54 0 0 1 1.9 10.48v2.12A7.5 7.5 0 0 0 10 6Z"/></svg></slot>
`;
      class oq extends nF {
        static get observedAttributes() {
          return [
            ...super.observedAttributes,
            aA.MEDIA_CURRENT_TIME,
            oV.SEEK_OFFSET,
          ];
        }
        constructor(e = {}) {
          super({
            slotTemplate: oF,
            tooltipContent: aG("Seek backward"),
            ...e,
          });
        }
        connectedCallback() {
          ((this.seekOffset = rc(this, oV.SEEK_OFFSET, 30)),
            super.connectedCallback());
        }
        attributeChangedCallback(e, t, i) {
          (e === oV.SEEK_OFFSET &&
            (this.seekOffset = rc(this, oV.SEEK_OFFSET, 30)),
            super.attributeChangedCallback(e, t, i));
        }
        get seekOffset() {
          return rc(this, oV.SEEK_OFFSET, 30);
        }
        set seekOffset(e) {
          (rh(this, oV.SEEK_OFFSET, e),
            this.setAttribute(
              "aria-label",
              aG("seek back {seekOffset} seconds", {
                seekOffset: this.seekOffset,
              }),
            ),
            rt(ra(this, "icon"), this.seekOffset));
        }
        get mediaCurrentTime() {
          return rc(this, aA.MEDIA_CURRENT_TIME, 0);
        }
        set mediaCurrentTime(e) {
          rh(this, aA.MEDIA_CURRENT_TIME, e);
        }
        handleClick() {
          let e = Math.max(this.mediaCurrentTime - this.seekOffset, 0),
            t = new a2.CustomEvent(ag.MEDIA_SEEK_REQUEST, {
              composed: !0,
              bubbles: !0,
              detail: e,
            });
          this.dispatchEvent(t);
        }
      }
      a2.customElements.get("media-seek-backward-button") ||
        a2.customElements.define("media-seek-backward-button", oq);
      let o$ = { SEEK_OFFSET: "seekoffset" },
        oK = a3.createElement("template");
      oK.innerHTML = `
  <slot name="icon"><svg aria-hidden="true" viewBox="0 0 20 24"><defs><style>.text{font-size:8px;font-family:Arial-BoldMT, Arial;font-weight:700;}</style></defs><text class="text value" transform="translate(8.9 19.87)">30</text><path d="M10 6V3l5.61 4L10 10.94V8a5.54 5.54 0 0 0-1.9 10.48v2.12A7.5 7.5 0 0 1 10 6Z"/></svg></slot>
`;
      class oY extends nF {
        static get observedAttributes() {
          return [
            ...super.observedAttributes,
            aA.MEDIA_CURRENT_TIME,
            o$.SEEK_OFFSET,
          ];
        }
        constructor(e = {}) {
          super({ slotTemplate: oK, tooltipContent: aG("Seek forward"), ...e });
        }
        connectedCallback() {
          ((this.seekOffset = rc(this, o$.SEEK_OFFSET, 30)),
            super.connectedCallback());
        }
        attributeChangedCallback(e, t, i) {
          (e === o$.SEEK_OFFSET &&
            (this.seekOffset = rc(this, o$.SEEK_OFFSET, 30)),
            super.attributeChangedCallback(e, t, i));
        }
        get seekOffset() {
          return rc(this, o$.SEEK_OFFSET, 30);
        }
        set seekOffset(e) {
          (rh(this, o$.SEEK_OFFSET, e),
            this.setAttribute(
              "aria-label",
              aG("seek forward {seekOffset} seconds", {
                seekOffset: this.seekOffset,
              }),
            ),
            rt(ra(this, "icon"), this.seekOffset));
        }
        get mediaCurrentTime() {
          return rc(this, aA.MEDIA_CURRENT_TIME, 0);
        }
        set mediaCurrentTime(e) {
          rh(this, aA.MEDIA_CURRENT_TIME, e);
        }
        handleClick() {
          let e = this.mediaCurrentTime + this.seekOffset,
            t = new a2.CustomEvent(ag.MEDIA_SEEK_REQUEST, {
              composed: !0,
              bubbles: !0,
              detail: e,
            });
          this.dispatchEvent(t);
        }
      }
      a2.customElements.get("media-seek-forward-button") ||
        a2.customElements.define("media-seek-forward-button", oY);
      var oG = (e, t, i) => {
          if (!t.has(e)) throw TypeError("Cannot " + i);
        },
        oj = (e, t, i) => (
          oG(e, t, "read from private field"),
          i ? i.call(e) : t.get(e)
        ),
        oQ = (e, t, i) => {
          if (t.has(e))
            throw TypeError(
              "Cannot add the same private member more than once",
            );
          t instanceof WeakSet ? t.add(e) : t.set(e, i);
        },
        oZ = (e, t, i, a) => (
          oG(e, t, "write to private field"),
          a ? a.call(e, i) : t.set(e, i),
          i
        );
      let oz = {
          REMAINING: "remaining",
          SHOW_DURATION: "showduration",
          NO_TOGGLE: "notoggle",
        },
        oX = [
          ...Object.values(oz),
          aA.MEDIA_CURRENT_TIME,
          aA.MEDIA_DURATION,
          aA.MEDIA_SEEKABLE,
        ],
        oJ = ["Enter", " "],
        o0 = "&nbsp;/&nbsp;",
        o1 = (e, { timesSep: t = o0 } = {}) => {
          var i, a;
          let r = e.hasAttribute(oz.REMAINING),
            n = e.hasAttribute(oz.SHOW_DURATION),
            s = null != (i = e.mediaCurrentTime) ? i : 0,
            [, o] = null != (a = e.mediaSeekable) ? a : [],
            l = 0;
          Number.isFinite(e.mediaDuration)
            ? (l = e.mediaDuration)
            : Number.isFinite(o) && (l = o);
          let d = r ? aF(0 - (l - s)) : aF(s);
          return n ? `${d}${t}${aF(l)}` : d;
        },
        o2 = (e) => {
          var t;
          let i = e.mediaCurrentTime,
            [, a] = null != (t = e.mediaSeekable) ? t : [],
            r = null;
          if (
            (Number.isFinite(e.mediaDuration)
              ? (r = e.mediaDuration)
              : Number.isFinite(a) && (r = a),
            null == i || null === r)
          )
            return void e.setAttribute(
              "aria-valuetext",
              "video not loaded, unknown time.",
            );
          let n = e.hasAttribute(oz.REMAINING),
            s = e.hasAttribute(oz.SHOW_DURATION),
            o = n ? aV(0 - (r - i)) : aV(i);
          if (!s) return void e.setAttribute("aria-valuetext", o);
          let l = aV(r),
            d = `${o} of ${l}`;
          e.setAttribute("aria-valuetext", d);
        };
      class o3 extends sy {
        constructor() {
          (super(),
            oQ(this, d7, void 0),
            oZ(this, d7, this.shadowRoot.querySelector("slot")),
            (oj(this, d7).innerHTML = `${o1(this)}`));
        }
        static get observedAttributes() {
          return [...super.observedAttributes, ...oX, "disabled"];
        }
        connectedCallback() {
          let { style: e } = rd(
            this.shadowRoot,
            ":host(:hover:not([notoggle]))",
          );
          (e.setProperty("cursor", "var(--media-cursor, pointer)"),
            e.setProperty(
              "background",
              "var(--media-control-hover-background, rgba(50 50 70 / .7))",
            ),
            this.hasAttribute("disabled") || this.enable(),
            this.setAttribute("role", "progressbar"),
            this.setAttribute("aria-label", aG("playback time")));
          let t = (e) => {
            let { key: i } = e;
            if (!oJ.includes(i))
              return void this.removeEventListener("keyup", t);
            this.toggleTimeDisplay();
          };
          (this.addEventListener("keydown", (e) => {
            let { metaKey: i, altKey: a, key: r } = e;
            if (i || a || !oJ.includes(r))
              return void this.removeEventListener("keyup", t);
            this.addEventListener("keyup", t);
          }),
            this.addEventListener("click", this.toggleTimeDisplay),
            super.connectedCallback());
        }
        toggleTimeDisplay() {
          this.noToggle ||
            (this.hasAttribute("remaining")
              ? this.removeAttribute("remaining")
              : this.setAttribute("remaining", ""));
        }
        disconnectedCallback() {
          (this.disable(), super.disconnectedCallback());
        }
        attributeChangedCallback(e, t, i) {
          (oX.includes(e)
            ? this.update()
            : "disabled" === e &&
              i !== t &&
              (null == i ? this.enable() : this.disable()),
            super.attributeChangedCallback(e, t, i));
        }
        enable() {
          this.tabIndex = 0;
        }
        disable() {
          this.tabIndex = -1;
        }
        get remaining() {
          return rm(this, oz.REMAINING);
        }
        set remaining(e) {
          rp(this, oz.REMAINING, e);
        }
        get showDuration() {
          return rm(this, oz.SHOW_DURATION);
        }
        set showDuration(e) {
          rp(this, oz.SHOW_DURATION, e);
        }
        get noToggle() {
          return rm(this, oz.NO_TOGGLE);
        }
        set noToggle(e) {
          rp(this, oz.NO_TOGGLE, e);
        }
        get mediaDuration() {
          return rc(this, aA.MEDIA_DURATION);
        }
        set mediaDuration(e) {
          rh(this, aA.MEDIA_DURATION, e);
        }
        get mediaCurrentTime() {
          return rc(this, aA.MEDIA_CURRENT_TIME);
        }
        set mediaCurrentTime(e) {
          rh(this, aA.MEDIA_CURRENT_TIME, e);
        }
        get mediaSeekable() {
          let e = this.getAttribute(aA.MEDIA_SEEKABLE);
          if (e) return e.split(":").map((e) => +e);
        }
        set mediaSeekable(e) {
          if (null == e) return void this.removeAttribute(aA.MEDIA_SEEKABLE);
          this.setAttribute(aA.MEDIA_SEEKABLE, e.join(":"));
        }
        update() {
          let e = o1(this);
          (o2(this),
            e !== oj(this, d7).innerHTML && (oj(this, d7).innerHTML = e));
        }
      }
      ((d7 = new WeakMap()),
        a2.customElements.get("media-time-display") ||
          a2.customElements.define("media-time-display", o3));
      var o4 = (e, t, i) => {
          if (!t.has(e)) throw TypeError("Cannot " + i);
        },
        o5 = (e, t, i) => (
          o4(e, t, "read from private field"),
          i ? i.call(e) : t.get(e)
        ),
        o9 = (e, t, i) => {
          if (t.has(e))
            throw TypeError(
              "Cannot add the same private member more than once",
            );
          t instanceof WeakSet ? t.add(e) : t.set(e, i);
        },
        o8 = (e, t, i, a) => (
          o4(e, t, "write to private field"),
          a ? a.call(e, i) : t.set(e, i),
          i
        ),
        o6 = (e, t, i, a) => ({
          set _(value) {
            o8(e, t, value, i);
          },
          get _() {
            return o5(e, t, a);
          },
        });
      class o7 {
        constructor(e, t, i) {
          (o9(this, ue, void 0),
            o9(this, ut, void 0),
            o9(this, ui, void 0),
            o9(this, ua, void 0),
            o9(this, ur, void 0),
            o9(this, un, void 0),
            o9(this, us, void 0),
            o9(this, uo, void 0),
            o9(this, ul, 0),
            o9(this, ud, (e = performance.now()) => {
              (o8(this, ul, requestAnimationFrame(o5(this, ud))),
                o8(this, ua, performance.now() - o5(this, ui)));
              let t = 1e3 / this.fps;
              if (o5(this, ua) > t) {
                o8(this, ui, e - (o5(this, ua) % t));
                let i = 1e3 / ((e - o5(this, ut)) / ++o6(this, ur)._),
                  a = (e - o5(this, un)) / 1e3 / this.duration,
                  r = o5(this, us) + a * this.playbackRate;
                (r - o5(this, ue).valueAsNumber > 0
                  ? o8(this, uo, this.playbackRate / this.duration / i)
                  : (o8(this, uo, 0.995 * o5(this, uo)),
                    (r = o5(this, ue).valueAsNumber + o5(this, uo))),
                  this.callback(r));
              }
            }),
            o8(this, ue, e),
            (this.callback = t),
            (this.fps = i));
        }
        start() {
          0 === o5(this, ul) &&
            (o8(this, ui, performance.now()),
            o8(this, ut, o5(this, ui)),
            o8(this, ur, 0),
            o5(this, ud).call(this));
        }
        stop() {
          0 !== o5(this, ul) &&
            (cancelAnimationFrame(o5(this, ul)), o8(this, ul, 0));
        }
        update({ start: e, duration: t, playbackRate: i }) {
          let a = e - o5(this, ue).valueAsNumber,
            r = Math.abs(t - this.duration);
          ((a > 0 || a < -0.03 || r >= 0.5) && this.callback(e),
            o8(this, us, e),
            o8(this, un, performance.now()),
            (this.duration = t),
            (this.playbackRate = i));
        }
      }
      ((ue = new WeakMap()),
        (ut = new WeakMap()),
        (ui = new WeakMap()),
        (ua = new WeakMap()),
        (ur = new WeakMap()),
        (un = new WeakMap()),
        (us = new WeakMap()),
        (uo = new WeakMap()),
        (ul = new WeakMap()),
        (ud = new WeakMap()));
      var le = (e, t, i) => {
          if (!t.has(e)) throw TypeError("Cannot " + i);
        },
        lt = (e, t, i) => (
          le(e, t, "read from private field"),
          i ? i.call(e) : t.get(e)
        ),
        li = (e, t, i) => {
          if (t.has(e))
            throw TypeError(
              "Cannot add the same private member more than once",
            );
          t instanceof WeakSet ? t.add(e) : t.set(e, i);
        },
        la = (e, t, i, a) => (
          le(e, t, "write to private field"),
          a ? a.call(e, i) : t.set(e, i),
          i
        ),
        lr = (e, t, i) => (le(e, t, "access private method"), i);
      let ln = (e) => {
          let t = e.range,
            i = aV(+ll(e)),
            a = aV(+e.mediaSeekableEnd),
            r = i && a ? `${i} of ${a}` : "video not loaded, unknown time.";
          t.setAttribute("aria-valuetext", r);
        },
        ls = a3.createElement("template");
      ls.innerHTML = `
  <style>
    :host {
      --media-box-border-radius: 4px;
      --media-box-padding-left: 10px;
      --media-box-padding-right: 10px;
      --media-preview-border-radius: var(--media-box-border-radius);
      --media-box-arrow-offset: var(--media-box-border-radius);
      --_control-background: var(--media-control-background, var(--media-secondary-color, rgb(20 20 30 / .7)));
      --_preview-background: var(--media-preview-background, var(--_control-background));

      
      contain: layout;
    }

    #buffered {
      background: var(--media-time-range-buffered-color, rgb(255 255 255 / .4));
      position: absolute;
      height: 100%;
      will-change: width;
    }

    #preview-rail,
    #current-rail {
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 100%;
      pointer-events: none;
      will-change: transform;
    }

    [part~="box"] {
      width: min-content;
      
      position: absolute;
      bottom: 100%;
      flex-direction: column;
      align-items: center;
      transform: translateX(-50%);
    }

    [part~="current-box"] {
      display: var(--media-current-box-display, var(--media-box-display, flex));
      margin: var(--media-current-box-margin, var(--media-box-margin, 0 0 5px));
      visibility: hidden;
    }

    [part~="preview-box"] {
      display: var(--media-preview-box-display, var(--media-box-display, flex));
      margin: var(--media-preview-box-margin, var(--media-box-margin, 0 0 5px));
      transition-property: var(--media-preview-transition-property, visibility, opacity);
      transition-duration: var(--media-preview-transition-duration-out, .25s);
      transition-delay: var(--media-preview-transition-delay-out, 0s);
      visibility: hidden;
      opacity: 0;
    }

    :host(:is([${aA.MEDIA_PREVIEW_IMAGE}], [${aA.MEDIA_PREVIEW_TIME}])[dragging]) [part~="preview-box"] {
      transition-duration: var(--media-preview-transition-duration-in, .5s);
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      visibility: visible;
      opacity: 1;
    }

    @media (hover: hover) {
      :host(:is([${aA.MEDIA_PREVIEW_IMAGE}], [${aA.MEDIA_PREVIEW_TIME}]):hover) [part~="preview-box"] {
        transition-duration: var(--media-preview-transition-duration-in, .5s);
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
        opacity: 1;
      }
    }

    media-preview-thumbnail,
    ::slotted(media-preview-thumbnail) {
      visibility: hidden;
      
      transition: visibility 0s .25s;
      transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
      background: var(--media-preview-thumbnail-background, var(--_preview-background));
      box-shadow: var(--media-preview-thumbnail-box-shadow, 0 0 4px rgb(0 0 0 / .2));
      max-width: var(--media-preview-thumbnail-max-width, 180px);
      max-height: var(--media-preview-thumbnail-max-height, 160px);
      min-width: var(--media-preview-thumbnail-min-width, 120px);
      min-height: var(--media-preview-thumbnail-min-height, 80px);
      border: var(--media-preview-thumbnail-border);
      border-radius: var(--media-preview-thumbnail-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius) 0 0);
    }

    :host([${aA.MEDIA_PREVIEW_IMAGE}][dragging]) media-preview-thumbnail,
    :host([${aA.MEDIA_PREVIEW_IMAGE}][dragging]) ::slotted(media-preview-thumbnail) {
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      visibility: visible;
    }

    @media (hover: hover) {
      :host([${aA.MEDIA_PREVIEW_IMAGE}]:hover) media-preview-thumbnail,
      :host([${aA.MEDIA_PREVIEW_IMAGE}]:hover) ::slotted(media-preview-thumbnail) {
        transition-delay: var(--media-preview-transition-delay-in, .25s);
        visibility: visible;
      }

      :host([${aA.MEDIA_PREVIEW_TIME}]:hover) {
        --media-time-range-hover-display: block;
      }
    }

    media-preview-chapter-display,
    ::slotted(media-preview-chapter-display) {
      font-size: var(--media-font-size, 13px);
      line-height: 17px;
      min-width: 0;
      visibility: hidden;
      
      transition: min-width 0s, border-radius 0s, margin 0s, padding 0s, visibility 0s;
      transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
      background: var(--media-preview-chapter-background, var(--_preview-background));
      border-radius: var(--media-preview-chapter-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius)
        var(--media-preview-border-radius) var(--media-preview-border-radius));
      padding: var(--media-preview-chapter-padding, 3.5px 9px);
      margin: var(--media-preview-chapter-margin, 0 0 5px);
      text-shadow: var(--media-preview-chapter-text-shadow, 0 0 4px rgb(0 0 0 / .75));
    }

    :host([${aA.MEDIA_PREVIEW_IMAGE}]) media-preview-chapter-display,
    :host([${aA.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-chapter-display) {
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      border-radius: var(--media-preview-chapter-border-radius, 0);
      padding: var(--media-preview-chapter-padding, 3.5px 9px 0);
      margin: var(--media-preview-chapter-margin, 0);
      min-width: 100%;
    }

    media-preview-chapter-display[${aA.MEDIA_PREVIEW_CHAPTER}],
    ::slotted(media-preview-chapter-display[${aA.MEDIA_PREVIEW_CHAPTER}]) {
      visibility: visible;
    }

    media-preview-chapter-display:not([aria-valuetext]),
    ::slotted(media-preview-chapter-display:not([aria-valuetext])) {
      display: none;
    }

    media-preview-time-display,
    ::slotted(media-preview-time-display),
    media-time-display,
    ::slotted(media-time-display) {
      font-size: var(--media-font-size, 13px);
      line-height: 17px;
      min-width: 0;
      
      transition: min-width 0s, border-radius 0s;
      transition-delay: calc(var(--media-preview-transition-delay-out, 0s) + var(--media-preview-transition-duration-out, .25s));
      background: var(--media-preview-time-background, var(--_preview-background));
      border-radius: var(--media-preview-time-border-radius,
        var(--media-preview-border-radius) var(--media-preview-border-radius)
        var(--media-preview-border-radius) var(--media-preview-border-radius));
      padding: var(--media-preview-time-padding, 3.5px 9px);
      margin: var(--media-preview-time-margin, 0);
      text-shadow: var(--media-preview-time-text-shadow, 0 0 4px rgb(0 0 0 / .75));
      transform: translateX(min(
        max(calc(50% - var(--_box-width) / 2),
        calc(var(--_box-shift, 0))),
        calc(var(--_box-width) / 2 - 50%)
      ));
    }

    :host([${aA.MEDIA_PREVIEW_IMAGE}]) media-preview-time-display,
    :host([${aA.MEDIA_PREVIEW_IMAGE}]) ::slotted(media-preview-time-display) {
      transition-delay: var(--media-preview-transition-delay-in, .25s);
      border-radius: var(--media-preview-time-border-radius,
        0 0 var(--media-preview-border-radius) var(--media-preview-border-radius));
      min-width: 100%;
    }

    :host([${aA.MEDIA_PREVIEW_TIME}]:hover) {
      --media-time-range-hover-display: block;
    }

    [part~="arrow"],
    ::slotted([part~="arrow"]) {
      display: var(--media-box-arrow-display, inline-block);
      transform: translateX(min(
        max(calc(50% - var(--_box-width) / 2 + var(--media-box-arrow-offset)),
        calc(var(--_box-shift, 0))),
        calc(var(--_box-width) / 2 - 50% - var(--media-box-arrow-offset))
      ));
      
      border-color: transparent;
      border-top-color: var(--media-box-arrow-background, var(--_control-background));
      border-width: var(--media-box-arrow-border-width,
        var(--media-box-arrow-height, 5px) var(--media-box-arrow-width, 6px) 0);
      border-style: solid;
      justify-content: center;
      height: 0;
    }
  </style>
  <div id="preview-rail">
    <slot name="preview" part="box preview-box">
      <media-preview-thumbnail></media-preview-thumbnail>
      <media-preview-chapter-display></media-preview-chapter-display>
      <media-preview-time-display></media-preview-time-display>
      <slot name="preview-arrow"><div part="arrow"></div></slot>
    </slot>
  </div>
  <div id="current-rail">
    <slot name="current" part="box current-box">
      
    </slot>
  </div>
`;
      let lo = (e, t = e.mediaCurrentTime) => {
          let i = Number.isFinite(e.mediaSeekableStart)
              ? e.mediaSeekableStart
              : 0,
            a = Number.isFinite(e.mediaDuration)
              ? e.mediaDuration
              : e.mediaSeekableEnd;
          return Number.isNaN(a)
            ? 0
            : Math.max(0, Math.min((t - i) / (a - i), 1));
        },
        ll = (e, t = e.range.valueAsNumber) => {
          let i = Number.isFinite(e.mediaSeekableStart)
              ? e.mediaSeekableStart
              : 0,
            a = Number.isFinite(e.mediaDuration)
              ? e.mediaDuration
              : e.mediaSeekableEnd;
          return Number.isNaN(a) ? 0 : t * (a - i) + i;
        };
      class ld extends sd {
        constructor() {
          (super(),
            li(this, ug),
            li(this, uy),
            li(this, uk),
            li(this, uS),
            li(this, uR),
            li(this, uD),
            li(this, uM),
            li(this, uN),
            li(this, uu, void 0),
            li(this, uc, void 0),
            li(this, uh, void 0),
            li(this, um, void 0),
            li(this, up, void 0),
            li(this, uv, void 0),
            li(this, uE, void 0),
            li(this, ub, void 0),
            li(this, uf, void 0),
            li(this, uA, (e) => {
              this.dragging ||
                (aP(e) && (this.range.valueAsNumber = e), this.updateBar());
            }),
            this.container.appendChild(ls.content.cloneNode(!0)),
            this.shadowRoot
              .querySelector("#track")
              .insertAdjacentHTML(
                "afterbegin",
                '<div id="buffered" part="buffered"></div>',
              ),
            la(this, uh, this.shadowRoot.querySelectorAll('[part~="box"]')),
            la(
              this,
              up,
              this.shadowRoot.querySelector('[part~="preview-box"]'),
            ),
            la(
              this,
              uv,
              this.shadowRoot.querySelector('[part~="current-box"]'),
            ));
          let e = getComputedStyle(this);
          (la(
            this,
            uE,
            parseInt(e.getPropertyValue("--media-box-padding-left")),
          ),
            la(
              this,
              ub,
              parseInt(e.getPropertyValue("--media-box-padding-right")),
            ),
            la(this, uc, new o7(this.range, lt(this, uA), 60)));
        }
        static get observedAttributes() {
          return [
            ...super.observedAttributes,
            aA.MEDIA_PAUSED,
            aA.MEDIA_DURATION,
            aA.MEDIA_SEEKABLE,
            aA.MEDIA_CURRENT_TIME,
            aA.MEDIA_PREVIEW_IMAGE,
            aA.MEDIA_PREVIEW_TIME,
            aA.MEDIA_PREVIEW_CHAPTER,
            aA.MEDIA_BUFFERED,
            aA.MEDIA_PLAYBACK_RATE,
            aA.MEDIA_LOADING,
            aA.MEDIA_ENDED,
          ];
        }
        connectedCallback() {
          var e;
          (super.connectedCallback(),
            this.range.setAttribute("aria-label", aG("seek")),
            lr(this, ug, u_).call(this),
            la(this, uu, this.getRootNode()),
            null == (e = lt(this, uu)) ||
              e.addEventListener("transitionstart", this));
        }
        disconnectedCallback() {
          var e;
          (super.disconnectedCallback(),
            lr(this, ug, u_).call(this),
            null == (e = lt(this, uu)) ||
              e.removeEventListener("transitionstart", this),
            la(this, uu, null));
        }
        attributeChangedCallback(e, t, i) {
          (super.attributeChangedCallback(e, t, i),
            t != i &&
              (e === aA.MEDIA_CURRENT_TIME ||
              e === aA.MEDIA_PAUSED ||
              e === aA.MEDIA_ENDED ||
              e === aA.MEDIA_LOADING ||
              e === aA.MEDIA_DURATION ||
              e === aA.MEDIA_SEEKABLE
                ? (lt(this, uc).update({
                    start: lo(this),
                    duration: this.mediaSeekableEnd - this.mediaSeekableStart,
                    playbackRate: this.mediaPlaybackRate,
                  }),
                  lr(this, ug, u_).call(this),
                  ln(this))
                : e === aA.MEDIA_BUFFERED && this.updateBufferedBar(),
              (e === aA.MEDIA_DURATION || e === aA.MEDIA_SEEKABLE) &&
                ((this.mediaChaptersCues = lt(this, uf)), this.updateBar())));
        }
        get mediaChaptersCues() {
          return lt(this, uf);
        }
        set mediaChaptersCues(e) {
          var t;
          (la(this, uf, e),
            this.updateSegments(
              null == (t = lt(this, uf))
                ? void 0
                : t.map((e) => ({
                    start: lo(this, e.startTime),
                    end: lo(this, e.endTime),
                  })),
            ));
        }
        get mediaPaused() {
          return rm(this, aA.MEDIA_PAUSED);
        }
        set mediaPaused(e) {
          rp(this, aA.MEDIA_PAUSED, e);
        }
        get mediaLoading() {
          return rm(this, aA.MEDIA_LOADING);
        }
        set mediaLoading(e) {
          rp(this, aA.MEDIA_LOADING, e);
        }
        get mediaDuration() {
          return rc(this, aA.MEDIA_DURATION);
        }
        set mediaDuration(e) {
          rh(this, aA.MEDIA_DURATION, e);
        }
        get mediaCurrentTime() {
          return rc(this, aA.MEDIA_CURRENT_TIME);
        }
        set mediaCurrentTime(e) {
          rh(this, aA.MEDIA_CURRENT_TIME, e);
        }
        get mediaPlaybackRate() {
          return rc(this, aA.MEDIA_PLAYBACK_RATE, 1);
        }
        set mediaPlaybackRate(e) {
          rh(this, aA.MEDIA_PLAYBACK_RATE, e);
        }
        get mediaBuffered() {
          let e = this.getAttribute(aA.MEDIA_BUFFERED);
          return e ? e.split(" ").map((e) => e.split(":").map((e) => +e)) : [];
        }
        set mediaBuffered(e) {
          if (!e) return void this.removeAttribute(aA.MEDIA_BUFFERED);
          let t = e.map((e) => e.join(":")).join(" ");
          this.setAttribute(aA.MEDIA_BUFFERED, t);
        }
        get mediaSeekable() {
          let e = this.getAttribute(aA.MEDIA_SEEKABLE);
          if (e) return e.split(":").map((e) => +e);
        }
        set mediaSeekable(e) {
          if (null == e) return void this.removeAttribute(aA.MEDIA_SEEKABLE);
          this.setAttribute(aA.MEDIA_SEEKABLE, e.join(":"));
        }
        get mediaSeekableEnd() {
          var e;
          let [, t = this.mediaDuration] =
            null != (e = this.mediaSeekable) ? e : [];
          return t;
        }
        get mediaSeekableStart() {
          var e;
          let [t = 0] = null != (e = this.mediaSeekable) ? e : [];
          return t;
        }
        get mediaPreviewImage() {
          return rv(this, aA.MEDIA_PREVIEW_IMAGE);
        }
        set mediaPreviewImage(e) {
          rE(this, aA.MEDIA_PREVIEW_IMAGE, e);
        }
        get mediaPreviewTime() {
          return rc(this, aA.MEDIA_PREVIEW_TIME);
        }
        set mediaPreviewTime(e) {
          rh(this, aA.MEDIA_PREVIEW_TIME, e);
        }
        get mediaEnded() {
          return rm(this, aA.MEDIA_ENDED);
        }
        set mediaEnded(e) {
          rp(this, aA.MEDIA_ENDED, e);
        }
        updateBar() {
          (super.updateBar(),
            this.updateBufferedBar(),
            this.updateCurrentBox());
        }
        updateBufferedBar() {
          var e;
          let t,
            i = this.mediaBuffered;
          if (!i.length) return;
          if (this.mediaEnded) t = 1;
          else {
            let a = this.mediaCurrentTime,
              [, r = this.mediaSeekableStart] =
                null != (e = i.find(([e, t]) => e <= a && a <= t)) ? e : [];
            t = lo(this, r);
          }
          let { style: a } = rd(this.shadowRoot, "#buffered");
          a.setProperty("width", `${100 * t}%`);
        }
        updateCurrentBox() {
          if (
            !this.shadowRoot
              .querySelector('slot[name="current"]')
              .assignedElements().length
          )
            return;
          let e = rd(this.shadowRoot, "#current-rail"),
            t = rd(this.shadowRoot, '[part~="current-box"]'),
            i = lr(this, uk, uw).call(this, lt(this, uv)),
            a = lr(this, uS, uI).call(this, i, this.range.valueAsNumber),
            r = lr(this, uR, uC).call(this, i, this.range.valueAsNumber);
          ((e.style.transform = `translateX(${a})`),
            e.style.setProperty("--_range-width", `${i.range.width}`),
            t.style.setProperty("--_box-shift", `${r}`),
            t.style.setProperty("--_box-width", `${i.box.width}px`),
            t.style.setProperty("visibility", "initial"));
        }
        handleEvent(e) {
          switch ((super.handleEvent(e), e.type)) {
            case "input":
              lr(this, uN, ux).call(this);
              break;
            case "pointermove":
              lr(this, uD, uL).call(this, e);
              break;
            case "pointerup":
            case "pointerleave":
              lr(this, uM, uO).call(this, null);
              break;
            case "transitionstart":
              rr(e.target, this) &&
                setTimeout(() => lr(this, ug, u_).call(this), 0);
          }
        }
      }
      ((uu = new WeakMap()),
        (uc = new WeakMap()),
        (uh = new WeakMap()),
        (um = new WeakMap()),
        (up = new WeakMap()),
        (uv = new WeakMap()),
        (uE = new WeakMap()),
        (ub = new WeakMap()),
        (uf = new WeakMap()),
        (ug = new WeakSet()),
        (u_ = function () {
          lr(this, uy, uT).call(this)
            ? lt(this, uc).start()
            : lt(this, uc).stop();
        }),
        (uy = new WeakSet()),
        (uT = function () {
          return (
            this.isConnected &&
            !this.mediaPaused &&
            !this.mediaLoading &&
            !this.mediaEnded &&
            this.mediaSeekableEnd > 0 &&
            rl(this)
          );
        }),
        (uA = new WeakMap()),
        (uk = new WeakSet()),
        (uw = function (e) {
          var t;
          let i = (
              null !=
              (t = this.getAttribute("bounds")
                ? rn(this, `#${this.getAttribute("bounds")}`)
                : this.parentElement)
                ? t
                : this
            ).getBoundingClientRect(),
            a = this.range.getBoundingClientRect(),
            r = e.offsetWidth,
            n = -(a.left - i.left - r / 2),
            s = i.right - a.left - r / 2;
          return { box: { width: r, min: n, max: s }, bounds: i, range: a };
        }),
        (uS = new WeakSet()),
        (uI = function (e, t) {
          let i = `${100 * t}%`,
            { width: a, min: r, max: n } = e.box;
          if (!a) return i;
          if (!Number.isNaN(r)) {
            let e = `calc(1 / var(--_range-width) * 100 * ${r}% + var(--media-box-padding-left))`;
            i = `max(${e}, ${i})`;
          }
          if (!Number.isNaN(n)) {
            let e = `calc(1 / var(--_range-width) * 100 * ${n}% - var(--media-box-padding-right))`;
            i = `min(${i}, ${e})`;
          }
          return i;
        }),
        (uR = new WeakSet()),
        (uC = function (e, t) {
          let { width: i, min: a, max: r } = e.box,
            n = t * e.range.width;
          if (n < a + lt(this, uE)) {
            let t = e.range.left - e.bounds.left - lt(this, uE);
            return `${n - i / 2 + t}px`;
          }
          if (n > r - lt(this, ub)) {
            let t = e.bounds.right - e.range.right - lt(this, ub);
            return `${n + i / 2 - t - e.range.width}px`;
          }
          return 0;
        }),
        (uD = new WeakSet()),
        (uL = function (e) {
          let t = [...lt(this, uh)].some((t) => e.composedPath().includes(t));
          if (!this.dragging && (t || !e.composedPath().includes(this)))
            return void lr(this, uM, uO).call(this, null);
          let i = this.mediaSeekableEnd;
          if (!i) return;
          let a = rd(this.shadowRoot, "#preview-rail"),
            r = rd(this.shadowRoot, '[part~="preview-box"]'),
            n = lr(this, uk, uw).call(this, lt(this, up)),
            s = (e.clientX - n.range.left) / n.range.width;
          s = Math.max(0, Math.min(1, s));
          let o = lr(this, uS, uI).call(this, n, s),
            l = lr(this, uR, uC).call(this, n, s);
          ((a.style.transform = `translateX(${o})`),
            a.style.setProperty("--_range-width", `${n.range.width}`),
            r.style.setProperty("--_box-shift", `${l}`),
            r.style.setProperty("--_box-width", `${n.box.width}px`),
            (1 > Math.abs(Math.round(lt(this, um)) - Math.round(s * i)) &&
              s > 0.01 &&
              s < 0.99) ||
              (la(this, um, s * i), lr(this, uM, uO).call(this, lt(this, um))));
        }),
        (uM = new WeakSet()),
        (uO = function (e) {
          this.dispatchEvent(
            new a2.CustomEvent(ag.MEDIA_PREVIEW_REQUEST, {
              composed: !0,
              bubbles: !0,
              detail: e,
            }),
          );
        }),
        (uN = new WeakSet()),
        (ux = function () {
          lt(this, uc).stop();
          let e = ll(this);
          this.dispatchEvent(
            new a2.CustomEvent(ag.MEDIA_SEEK_REQUEST, {
              composed: !0,
              bubbles: !0,
              detail: e,
            }),
          );
        }),
        a2.customElements.get("media-time-range") ||
          a2.customElements.define("media-time-range", ld));
      let lu = { PLACEMENT: "placement", BOUNDS: "bounds" },
        lc = a3.createElement("template");
      lc.innerHTML = `
  <style>
    :host {
      --_tooltip-background-color: var(--media-tooltip-background-color, var(--media-secondary-color, rgba(20, 20, 30, .7)));
      --_tooltip-background: var(--media-tooltip-background, var(--_tooltip-background-color));
      --_tooltip-arrow-half-width: calc(var(--media-tooltip-arrow-width, 12px) / 2);
      --_tooltip-arrow-height: var(--media-tooltip-arrow-height, 5px);
      --_tooltip-arrow-background: var(--media-tooltip-arrow-color, var(--_tooltip-background-color));
      position: relative;
      pointer-events: none;
      display: var(--media-tooltip-display, inline-flex);
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      z-index: var(--media-tooltip-z-index, 1);
      background: var(--_tooltip-background);
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      font: var(--media-font,
        var(--media-font-weight, 400)
        var(--media-font-size, 13px) /
        var(--media-text-content-height, var(--media-control-height, 18px))
        var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
      padding: var(--media-tooltip-padding, .35em .7em);
      border: var(--media-tooltip-border, none);
      border-radius: var(--media-tooltip-border-radius, 5px);
      filter: var(--media-tooltip-filter, drop-shadow(0 0 4px rgba(0, 0, 0, .2)));
      white-space: var(--media-tooltip-white-space, nowrap);
    }

    :host([hidden]) {
      display: none;
    }

    img, svg {
      display: inline-block;
    }

    #arrow {
      position: absolute;
      width: 0px;
      height: 0px;
      border-style: solid;
      display: var(--media-tooltip-arrow-display, block);
    }

    :host(:not([placement])),
    :host([placement="top"]) {
      position: absolute;
      bottom: calc(100% + var(--media-tooltip-distance, 12px));
      left: 50%;
      transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
    }
    :host(:not([placement])) #arrow,
    :host([placement="top"]) #arrow {
      top: 100%;
      left: 50%;
      border-width: var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width);
      border-color: var(--_tooltip-arrow-background) transparent transparent transparent;
      transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
    }

    :host([placement="right"]) {
      position: absolute;
      left: calc(100% + var(--media-tooltip-distance, 12px));
      top: 50%;
      transform: translate(0, -50%);
    }
    :host([placement="right"]) #arrow {
      top: 50%;
      right: 100%;
      border-width: var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width) 0;
      border-color: transparent var(--_tooltip-arrow-background) transparent transparent;
      transform: translate(0, -50%);
    }

    :host([placement="bottom"]) {
      position: absolute;
      top: calc(100% + var(--media-tooltip-distance, 12px));
      left: 50%;
      transform: translate(calc(-50% - var(--media-tooltip-offset-x, 0px)), 0);
    }
    :host([placement="bottom"]) #arrow {
      bottom: 100%;
      left: 50%;
      border-width: 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height) var(--_tooltip-arrow-half-width);
      border-color: transparent transparent var(--_tooltip-arrow-background) transparent;
      transform: translate(calc(-50% + var(--media-tooltip-offset-x, 0px)), 0);
    }

    :host([placement="left"]) {
      position: absolute;
      right: calc(100% + var(--media-tooltip-distance, 12px));
      top: 50%;
      transform: translate(0, -50%);
    }
    :host([placement="left"]) #arrow {
      top: 50%;
      left: 100%;
      border-width: var(--_tooltip-arrow-half-width) 0 var(--_tooltip-arrow-half-width) var(--_tooltip-arrow-height);
      border-color: transparent transparent transparent var(--_tooltip-arrow-background);
      transform: translate(0, -50%);
    }
    
    :host([placement="none"]) #arrow {
      display: none;
    }

  </style>
  <slot></slot>
  <div id="arrow"></div>
`;
      class lh extends a2.HTMLElement {
        constructor() {
          if (
            (super(),
            (this.updateXOffset = () => {
              var e;
              if (!rl(this, { checkOpacity: !1, checkVisibilityCSS: !1 }))
                return;
              let t = this.placement;
              if ("left" === t || "right" === t)
                return void this.style.removeProperty(
                  "--media-tooltip-offset-x",
                );
              let i = getComputedStyle(this),
                a = null != (e = rn(this, "#" + this.bounds)) ? e : a7(this);
              if (!a) return;
              let { x: r, width: n } = a.getBoundingClientRect(),
                { x: s, width: o } = this.getBoundingClientRect(),
                l = i.getPropertyValue("--media-tooltip-offset-x"),
                d = l ? parseFloat(l.replace("px", "")) : 0,
                u = i.getPropertyValue("--media-tooltip-container-margin"),
                c = u ? parseFloat(u.replace("px", "")) : 0,
                h = s - r + d - c,
                m = s + o - (r + n) + d + c;
              return h < 0
                ? void this.style.setProperty(
                    "--media-tooltip-offset-x",
                    `${h}px`,
                  )
                : m > 0
                  ? void this.style.setProperty(
                      "--media-tooltip-offset-x",
                      `${m}px`,
                    )
                  : void this.style.removeProperty("--media-tooltip-offset-x");
            }),
            this.shadowRoot ||
              (this.attachShadow({ mode: "open" }),
              this.shadowRoot.appendChild(lc.content.cloneNode(!0))),
            (this.arrowEl = this.shadowRoot.querySelector("#arrow")),
            Object.prototype.hasOwnProperty.call(this, "placement"))
          ) {
            let e = this.placement;
            (delete this.placement, (this.placement = e));
          }
        }
        static get observedAttributes() {
          return [lu.PLACEMENT, lu.BOUNDS];
        }
        get placement() {
          return rv(this, lu.PLACEMENT);
        }
        set placement(e) {
          rE(this, lu.PLACEMENT, e);
        }
        get bounds() {
          return rv(this, lu.BOUNDS);
        }
        set bounds(e) {
          rE(this, lu.BOUNDS, e);
        }
      }
      a2.customElements.get("media-tooltip") ||
        a2.customElements.define("media-tooltip", lh);
      let lm = (e) => (e.mediaMuted ? 0 : e.mediaVolume),
        lp = (e) => `${Math.round(100 * e)}%`;
      class lv extends sd {
        static get observedAttributes() {
          return [
            ...super.observedAttributes,
            aA.MEDIA_VOLUME,
            aA.MEDIA_MUTED,
            aA.MEDIA_VOLUME_UNAVAILABLE,
          ];
        }
        constructor() {
          (super(),
            this.range.addEventListener("input", () => {
              let e = this.range.value,
                t = new a2.CustomEvent(ag.MEDIA_VOLUME_REQUEST, {
                  composed: !0,
                  bubbles: !0,
                  detail: e,
                });
              this.dispatchEvent(t);
            }));
        }
        connectedCallback() {
          (super.connectedCallback(),
            this.range.setAttribute("aria-label", aG("volume")));
        }
        attributeChangedCallback(e, t, i) {
          (super.attributeChangedCallback(e, t, i),
            (e === aA.MEDIA_VOLUME || e === aA.MEDIA_MUTED) &&
              ((this.range.valueAsNumber = lm(this)),
              this.range.setAttribute(
                "aria-valuetext",
                lp(this.range.valueAsNumber),
              ),
              this.updateBar()));
        }
        get mediaVolume() {
          return rc(this, aA.MEDIA_VOLUME, 1);
        }
        set mediaVolume(e) {
          rh(this, aA.MEDIA_VOLUME, e);
        }
        get mediaMuted() {
          return rm(this, aA.MEDIA_MUTED);
        }
        set mediaMuted(e) {
          rp(this, aA.MEDIA_MUTED, e);
        }
        get mediaVolumeUnavailable() {
          return rv(this, aA.MEDIA_VOLUME_UNAVAILABLE);
        }
        set mediaVolumeUnavailable(e) {
          rE(this, aA.MEDIA_VOLUME_UNAVAILABLE, e);
        }
      }
      a2.customElements.get("media-volume-range") ||
        a2.customElements.define("media-volume-range", lv);
      var lE = Object.defineProperty,
        lb = Object.getPrototypeOf,
        lf = Reflect.get,
        lg = (e) => {
          throw TypeError(e);
        },
        l_ = (e, t, i) =>
          t in e
            ? lE(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        ly = (e, t, i) => l_(e, "symbol" != typeof t ? t + "" : t, i),
        lT = (e, t, i) => t.has(e) || lg("Cannot " + i),
        lA = (e, t, i) => (
          lT(e, t, "read from private field"),
          i ? i.call(e) : t.get(e)
        ),
        lk = (e, t, i) =>
          t.has(e)
            ? lg("Cannot add the same private member more than once")
            : t instanceof WeakSet
              ? t.add(e)
              : t.set(e, i),
        lw = (e, t, i, a) => (
          lT(e, t, "write to private field"),
          a ? a.call(e, i) : t.set(e, i),
          i
        ),
        lS = (e, t, i) => (lT(e, t, "access private method"), i),
        lI = (e, t, i) => lf(lb(e), i, t),
        lR = class {
          addEventListener() {}
          removeEventListener() {}
          dispatchEvent(e) {
            return !0;
          }
        };
      if ("undefined" == typeof DocumentFragment) {
        class e extends lR {}
        globalThis.DocumentFragment = e;
      }
      var lC,
        lD,
        lL,
        lM,
        lO,
        lN,
        lx,
        lP,
        lU,
        lB,
        lW,
        lH,
        lV,
        lF,
        lq,
        l$,
        lK,
        lY,
        lG,
        lj,
        lQ,
        lZ,
        lz,
        lX,
        lJ,
        l0,
        l1,
        l2,
        l3,
        l4,
        l5,
        l9,
        l8,
        l6,
        l7,
        de,
        dt,
        di,
        da,
        dr,
        dn,
        ds,
        dl,
        dd,
        du,
        dc,
        dh,
        dm,
        dp,
        dv,
        dE,
        db,
        df,
        dg,
        d_,
        dy,
        dT,
        dA,
        dk,
        dw,
        dS,
        dI,
        dR,
        dC,
        dD,
        dL,
        dM,
        dO,
        dN,
        dx,
        dP,
        dU,
        dB,
        dW,
        dH,
        dV,
        dF,
        dq,
        d$,
        dK,
        dY,
        dG,
        dj,
        dQ,
        dZ,
        dz,
        dX,
        dJ,
        d0,
        d1,
        d2,
        d3,
        d4,
        d5,
        d9,
        d8,
        d6,
        d7,
        ue,
        ut,
        ui,
        ua,
        ur,
        un,
        us,
        uo,
        ul,
        ud,
        uu,
        uc,
        uh,
        um,
        up,
        uv,
        uE,
        ub,
        uf,
        ug,
        u_,
        uy,
        uT,
        uA,
        uk,
        uw,
        uS,
        uI,
        uR,
        uC,
        uD,
        uL,
        uM,
        uO,
        uN,
        ux,
        uP,
        uU = class extends lR {},
        uB = class {
          constructor(e, t = {}) {
            (lk(this, uP), lw(this, uP, null == t ? void 0 : t.detail));
          }
          get detail() {
            return lA(this, uP);
          }
          initCustomEvent() {}
        };
      uP = new WeakMap();
      var uW = {
          document: {
            createElement: function (e, t) {
              return new uU();
            },
          },
          DocumentFragment,
          customElements: {
            get(e) {},
            define(e, t, i) {},
            getName: (e) => null,
            upgrade(e) {},
            whenDefined: (e) => Promise.resolve(uU),
          },
          CustomEvent: uB,
          EventTarget: lR,
          HTMLElement: uU,
          HTMLVideoElement: class extends lR {},
        },
        uH =
          "undefined" == typeof window || void 0 === globalThis.customElements,
        uV = uH ? uW : globalThis;
      uH ? uW.document : globalThis.document;
      var uF = (() => {
          try {
            return "0.25.2";
          } catch {}
          return "UNKNOWN";
        })(),
        uq = [
          "abort",
          "canplay",
          "canplaythrough",
          "durationchange",
          "emptied",
          "encrypted",
          "ended",
          "error",
          "loadeddata",
          "loadedmetadata",
          "loadstart",
          "pause",
          "play",
          "playing",
          "progress",
          "ratechange",
          "seeked",
          "seeking",
          "stalled",
          "suspend",
          "timeupdate",
          "volumechange",
          "waiting",
          "waitingforkey",
          "resize",
          "enterpictureinpicture",
          "leavepictureinpicture",
          "webkitbeginfullscreen",
          "webkitendfullscreen",
          "webkitpresentationmodechanged",
        ],
        u$ = [
          "autopictureinpicture",
          "disablepictureinpicture",
          "disableremoteplayback",
          "autoplay",
          "controls",
          "controlslist",
          "crossorigin",
          "loop",
          "muted",
          "playsinline",
          "poster",
          "preload",
          "src",
        ];
      function uK(e) {
        return `
    <style>
      :host {
        display: inline-flex;
        line-height: 0;
        flex-direction: column;
        justify-content: end;
      }

      audio {
        width: 100%;
      }
    </style>
    <slot name="media">
      <audio${uj(e)}></audio>
    </slot>
    <slot></slot>
  `;
      }
      function uY(e) {
        return `
    <style>
      :host {
        display: inline-block;
        line-height: 0;
      }

      video {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        object-fit: var(--media-object-fit, contain);
        object-position: var(--media-object-position, 50% 50%);
      }

      video::-webkit-media-text-track-container {
        transform: var(--media-webkit-text-track-transform);
        transition: var(--media-webkit-text-track-transition);
      }
    </style>
    <slot name="media">
      <video${uj(e)}></video>
    </slot>
    <slot></slot>
  `;
      }
      function uG(e, { tag: t, is: i }) {
        var a, r, n, s, o, l, d, u, c, h, m, p, E, b, f, g, _;
        let y =
            null ==
            (r = null == (a = globalThis.document) ? void 0 : a.createElement)
              ? void 0
              : r.call(a, t, { is: i }),
          T = y
            ? (function (e) {
                let t = [];
                for (
                  let i = Object.getPrototypeOf(e);
                  i && i !== HTMLElement.prototype;
                  i = Object.getPrototypeOf(i)
                ) {
                  let e = Object.getOwnPropertyNames(i);
                  t.push(...e);
                }
                return t;
              })(y)
            : [];
        return (
          (n = class extends e {
            constructor() {
              (super(...arguments),
                lk(this, m),
                lk(this, d, !1),
                lk(this, u, null),
                lk(this, c, new Map()),
                lk(this, h),
                ly(this, "get"),
                ly(this, "set"),
                ly(this, "call"));
            }
            static get observedAttributes() {
              var e, t, i;
              return (
                lS((e = n), o, l).call(e),
                [
                  ...(null !=
                  (i =
                    null == (t = null == y ? void 0 : y.constructor)
                      ? void 0
                      : t.observedAttributes)
                    ? i
                    : []),
                  ...u$,
                ]
              );
            }
            get nativeEl() {
              var e, i, a, r, n;
              return (
                lS(this, m, p).call(this),
                null !=
                (n =
                  null !=
                  (r =
                    null !=
                    (i =
                      null != (e = lA(this, u))
                        ? e
                        : this.querySelector(":scope > [slot=media]"))
                      ? i
                      : this.querySelector(t))
                    ? r
                    : null == (a = this.shadowRoot)
                      ? void 0
                      : a.querySelector(t))
                  ? n
                  : null
              );
            }
            set nativeEl(e) {
              lw(this, u, e);
            }
            get defaultMuted() {
              return this.hasAttribute("muted");
            }
            set defaultMuted(e) {
              this.toggleAttribute("muted", e);
            }
            get src() {
              return this.getAttribute("src");
            }
            set src(e) {
              this.setAttribute("src", `${e}`);
            }
            get preload() {
              var e, t;
              return null != (t = this.getAttribute("preload"))
                ? t
                : null == (e = this.nativeEl)
                  ? void 0
                  : e.preload;
            }
            set preload(e) {
              this.setAttribute("preload", `${e}`);
            }
            init() {
              var e;
              if (!this.shadowRoot) {
                this.attachShadow({ mode: "open" });
                let e = (function (e) {
                  let t = {};
                  for (let i of e) t[i.name] = i.value;
                  return t;
                })(this.attributes);
                (i && (e.is = i),
                  t && (e.part = t),
                  (this.shadowRoot.innerHTML =
                    this.constructor.getTemplateHTML(e)));
              }
              for (let e of ((this.nativeEl.muted = this.hasAttribute("muted")),
              T))
                lS(this, m, g).call(this, e);
              for (let t of (lw(
                this,
                h,
                new MutationObserver(lS(this, m, b).bind(this)),
              ),
              this.shadowRoot.addEventListener("slotchange", this),
              lS(this, m, E).call(this),
              this.constructor.Events))
                null == (e = this.shadowRoot) ||
                  e.addEventListener(t, this, !0);
            }
            handleEvent(e) {
              if ("slotchange" === e.type)
                return void lS(this, m, E).call(this);
              e.target === this.nativeEl &&
                this.dispatchEvent(
                  new CustomEvent(e.type, { detail: e.detail }),
                );
            }
            attributeChangedCallback(e, t, i) {
              (lS(this, m, p).call(this), lS(this, m, _).call(this, e, t, i));
            }
            connectedCallback() {
              lS(this, m, p).call(this);
            }
          }),
          (s = new WeakMap()),
          (o = new WeakSet()),
          (l = function () {
            if (lA(this, s)) return;
            lw(this, s, !0);
            let e = new Set(this.observedAttributes);
            for (let t of (e.delete("muted"), T))
              if (!(t in this.prototype))
                if ("function" == typeof y[t])
                  this.prototype[t] = function (...e) {
                    return (
                      lS(this, m, p).call(this),
                      (() => {
                        var i;
                        if (this.call) return this.call(t, ...e);
                        let a = null == (i = this.nativeEl) ? void 0 : i[t];
                        return null == a ? void 0 : a.apply(this.nativeEl, e);
                      })()
                    );
                  };
                else {
                  let i = {
                    get() {
                      var i, a, r;
                      lS(this, m, p).call(this);
                      let n = t.toLowerCase();
                      if (e.has(n)) {
                        let e = this.getAttribute(n);
                        return null !== e && ("" === e || e);
                      }
                      return null !=
                        (r = null == (i = this.get) ? void 0 : i.call(this, t))
                        ? r
                        : null == (a = this.nativeEl)
                          ? void 0
                          : a[t];
                    },
                  };
                  (t !== t.toUpperCase() &&
                    (i.set = function (i) {
                      lS(this, m, p).call(this);
                      let a = t.toLowerCase();
                      return e.has(a)
                        ? void (!0 === i || !1 === i || null == i
                            ? this.toggleAttribute(a, !!i)
                            : this.setAttribute(a, i))
                        : this.set
                          ? void this.set(t, i)
                          : void (this.nativeEl && (this.nativeEl[t] = i));
                    }),
                    Object.defineProperty(this.prototype, t, i));
                }
          }),
          (d = new WeakMap()),
          (u = new WeakMap()),
          (c = new WeakMap()),
          (h = new WeakMap()),
          (m = new WeakSet()),
          (p = function () {
            lA(this, d) || (lw(this, d, !0), this.init());
          }),
          (E = function () {
            var e;
            let t = new Map(lA(this, c)),
              i =
                null == (e = this.shadowRoot)
                  ? void 0
                  : e.querySelector("slot:not([name])");
            ((null == i
              ? void 0
              : i
                  .assignedElements({ flatten: !0 })
                  .filter((e) => ["track", "source"].includes(e.localName))
            ).forEach((e) => {
              var i, a;
              t.delete(e);
              let r = lA(this, c).get(e);
              (r ||
                ((r = e.cloneNode()),
                lA(this, c).set(e, r),
                null == (i = lA(this, h)) || i.observe(e, { attributes: !0 })),
                null == (a = this.nativeEl) || a.append(r),
                lS(this, m, f).call(this, r));
            }),
              t.forEach((e, t) => {
                (e.remove(), lA(this, c).delete(t));
              }));
          }),
          (b = function (e) {
            var t;
            for (let i of e)
              if ("attributes" === i.type) {
                let { target: e, attributeName: a } = i,
                  r = lA(this, c).get(e);
                r &&
                  a &&
                  (r.setAttribute(a, null != (t = e.getAttribute(a)) ? t : ""),
                  lS(this, m, f).call(this, r));
              }
          }),
          (f = function (e) {
            e &&
              "track" === e.localName &&
              e.default &&
              ("chapters" === e.kind || "metadata" === e.kind) &&
              "disabled" === e.track.mode &&
              (e.track.mode = "hidden");
          }),
          (g = function (e) {
            if (Object.prototype.hasOwnProperty.call(this, e)) {
              let t = this[e];
              (delete this[e], (this[e] = t));
            }
          }),
          (_ = function (e, t, i) {
            var a, r, s;
            ["id", "class"].includes(e) ||
              (!n.observedAttributes.includes(e) &&
                this.constructor.observedAttributes.includes(e)) ||
              (null === i
                ? null == (a = this.nativeEl) || a.removeAttribute(e)
                : (null == (r = this.nativeEl) ? void 0 : r.getAttribute(e)) !==
                    i &&
                  (null == (s = this.nativeEl) || s.setAttribute(e, i)));
          }),
          lk(n, o),
          ly(n, "getTemplateHTML", t.endsWith("audio") ? uK : uY),
          ly(n, "shadowRootOptions", { mode: "open" }),
          ly(n, "Events", uq),
          lk(n, s, !1),
          n
        );
      }
      function uj(e) {
        let t = "";
        for (let i in e) {
          if (!u$.includes(i)) continue;
          let a = e[i];
          "" === a ? (t += ` ${i}`) : (t += ` ${i}="${a}"`);
        }
        return t;
      }
      var uQ,
        uZ,
        uz = uG(null != (uQ = globalThis.HTMLElement) ? uQ : class {}, {
          tag: "video",
        });
      uG(null != (uZ = globalThis.HTMLElement) ? uZ : class {}, {
        tag: "audio",
      });
      var uX = new WeakMap(),
        uJ = class extends Error {},
        u0 = class extends Error {},
        u1 = [
          "application/x-mpegURL",
          "application/vnd.apple.mpegurl",
          "audio/mpegurl",
        ];
      function u2() {
        var e, t;
        return null ==
          (t = null == (e = globalThis.cast) ? void 0 : e.framework)
          ? void 0
          : t.CastContext.getInstance();
      }
      function u3() {
        var e;
        return null == (e = u2()) ? void 0 : e.getCurrentSession();
      }
      function u4() {
        var e;
        return null == (e = u3()) ? void 0 : e.getSessionObj().media[0];
      }
      function u5(e) {
        return u2().setOptions({ ...u9(), ...e });
      }
      function u9() {
        return {
          receiverApplicationId: "CC1AD845",
          autoJoinPolicy: "origin_scoped",
          androidReceiverCompatible: !1,
          language: "en-US",
          resumeSavedSession: !0,
        };
      }
      async function u8(e) {
        try {
          let t = (await fetch(e, { method: "HEAD" })).headers.get(
            "Content-Type",
          );
          return u1.some((e) => t === e);
        } catch (e) {
          return (
            console.error(
              "Error while trying to get the Content-Type of the manifest",
              e,
            ),
            !1
          );
        }
      }
      async function u6(e) {
        try {
          let i = await (await fetch(e)).text(),
            a = i,
            r = (function (e) {
              let t = e.split(`
`),
                i = [];
              for (let e = 0; e < t.length; e++)
                if (t[e].trim().startsWith("#EXT-X-STREAM-INF")) {
                  let a = t[e + 1] ? t[e + 1].trim() : "";
                  a && !a.startsWith("#") && i.push(a);
                }
              return i;
            })(i);
          if (r.length > 0) {
            let t = new URL(r[0], e).toString();
            a = await (await fetch(t)).text();
          }
          var t = a
            .split(
              `
`,
            )
            .find((e) => !e.trim().startsWith("#") && "" !== e.trim());
          if (!t) return;
          let n = t.match(/\.([a-zA-Z0-9]+)(?:\?.*)?$/);
          return n ? n[1] : null;
        } catch (e) {
          console.error("Error while trying to parse the manifest playlist", e);
          return;
        }
      }
      var u7,
        ce = new (
          globalThis.WeakRef
            ? class extends Set {
                add(e) {
                  super.add(new WeakRef(e));
                }
                forEach(e) {
                  super.forEach((t) => {
                    let i = t.deref();
                    i && e(i);
                  });
                }
              }
            : Set
        )(),
        ct = new WeakSet();
      !(function (e) {
        var t, i, a;
        null != (i = null == (t = globalThis.chrome) ? void 0 : t.cast) &&
        i.isAvailable
          ? null != (a = globalThis.cast) && a.framework
            ? e()
            : customElements.whenDefined("google-cast-button").then(e)
          : (globalThis.__onGCastApiAvailable = () => {
              customElements.whenDefined("google-cast-button").then(e);
            });
      })(() => {
        var e, t, i, a;
        if (
          !(
            null != (t = null == (e = globalThis.chrome) ? void 0 : e.cast) &&
            t.isAvailable
          )
        )
          return void console.debug(
            "chrome.cast.isAvailable",
            null == (a = null == (i = globalThis.chrome) ? void 0 : i.cast)
              ? void 0
              : a.isAvailable,
          );
        u7 ||
          ((u7 = cast.framework),
          u2().addEventListener(
            u7.CastContextEventType.CAST_STATE_CHANGED,
            (e) => {
              ce.forEach((t) => {
                var i, a;
                return null == (a = (i = uX.get(t)).onCastStateChanged)
                  ? void 0
                  : a.call(i, e);
              });
            },
          ),
          u2().addEventListener(
            u7.CastContextEventType.SESSION_STATE_CHANGED,
            (e) => {
              ce.forEach((t) => {
                var i, a;
                return null == (a = (i = uX.get(t)).onSessionStateChanged)
                  ? void 0
                  : a.call(i, e);
              });
            },
          ),
          ce.forEach((e) => {
            var t, i;
            return null == (i = (t = uX.get(e)).init) ? void 0 : i.call(t);
          }));
      });
      var ci,
        ca,
        cr,
        cn,
        cs,
        co,
        cl,
        cd,
        cu,
        cc,
        ch,
        cm,
        cp,
        cv,
        cE,
        cb,
        cf,
        cg = 0,
        c_ = class extends EventTarget {
          constructor(e) {
            (super(),
              lk(this, cu),
              lk(this, ci),
              lk(this, ca),
              lk(this, cr),
              lk(this, cn),
              lk(this, cs, "disconnected"),
              lk(this, co, !1),
              lk(this, cl, new Set()),
              lk(this, cd, new WeakMap()),
              lw(this, ci, e),
              ce.add(this),
              uX.set(this, {
                init: () => lS(this, cu, cE).call(this),
                onCastStateChanged: () => lS(this, cu, cp).call(this),
                onSessionStateChanged: () => lS(this, cu, cv).call(this),
                getCastPlayer: () => lA(this, cu, cc),
              }),
              lS(this, cu, cE).call(this));
          }
          get state() {
            return lA(this, cs);
          }
          async watchAvailability(e) {
            if (lA(this, ci).disableRemotePlayback)
              throw new uJ("disableRemotePlayback attribute is present.");
            return (
              lA(this, cd).set(e, ++cg),
              lA(this, cl).add(e),
              queueMicrotask(() => e(lS(this, cu, cm).call(this))),
              cg
            );
          }
          async cancelWatchAvailability(e) {
            if (lA(this, ci).disableRemotePlayback)
              throw new uJ("disableRemotePlayback attribute is present.");
            e ? lA(this, cl).delete(e) : lA(this, cl).clear();
          }
          async prompt() {
            var e, t, i, a;
            if (lA(this, ci).disableRemotePlayback)
              throw new uJ("disableRemotePlayback attribute is present.");
            if (
              !(
                null !=
                  (t = null == (e = globalThis.chrome) ? void 0 : e.cast) &&
                t.isAvailable
              )
            )
              throw new u0(
                "The RemotePlayback API is disabled on this platform.",
              );
            let r = ct.has(lA(this, ci));
            (ct.add(lA(this, ci)),
              u5(lA(this, ci).castOptions),
              Object.entries(lA(this, cn)).forEach(([e, t]) => {
                lA(this, cr).controller.addEventListener(e, t);
              }));
            try {
              await u2().requestSession();
            } catch (e) {
              if ((r || ct.delete(lA(this, ci)), "cancel" === e)) return;
              throw Error(e);
            }
            null ==
              (a =
                null == (i = uX.get(lA(this, ci))) ? void 0 : i.loadOnPrompt) ||
              a.call(i);
          }
        };
      ((ci = new WeakMap()),
        (ca = new WeakMap()),
        (cr = new WeakMap()),
        (cn = new WeakMap()),
        (cs = new WeakMap()),
        (co = new WeakMap()),
        (cl = new WeakMap()),
        (cd = new WeakMap()),
        (cu = new WeakSet()),
        (cc = function () {
          if (ct.has(lA(this, ci))) return lA(this, cr);
        }),
        (ch = function () {
          ct.has(lA(this, ci)) &&
            (Object.entries(lA(this, cn)).forEach(([e, t]) => {
              lA(this, cr).controller.removeEventListener(e, t);
            }),
            ct.delete(lA(this, ci)),
            (lA(this, ci).muted = lA(this, cr).isMuted),
            (lA(this, ci).currentTime = lA(
              this,
              cr,
            ).savedPlayerState.currentTime),
            !1 === lA(this, cr).savedPlayerState.isPaused &&
              lA(this, ci).play());
        }),
        (cm = function () {
          var e;
          let t = null == (e = u2()) ? void 0 : e.getCastState();
          return t && "NO_DEVICES_AVAILABLE" !== t;
        }),
        (cp = function () {
          let e = u2().getCastState();
          if (
            (ct.has(lA(this, ci)) &&
              "CONNECTING" === e &&
              (lw(this, cs, "connecting"),
              this.dispatchEvent(new Event("connecting"))),
            !lA(this, co) && null != e && e.includes("CONNECT"))
          )
            for (let e of (lw(this, co, !0), lA(this, cl))) e(!0);
          else if (lA(this, co) && (!e || "NO_DEVICES_AVAILABLE" === e))
            for (let e of (lw(this, co, !1), lA(this, cl))) e(!1);
        }),
        (cv = async function () {
          var e, t;
          let { SESSION_RESUMED: i } = u7.SessionState;
          if (
            u2().getSessionState() === i &&
            lA(this, ci).castSrc ===
              (null == (e = u4()) ? void 0 : e.media.contentId)
          ) {
            (ct.add(lA(this, ci)),
              Object.entries(lA(this, cn)).forEach(([e, t]) => {
                lA(this, cr).controller.addEventListener(e, t);
              }));
            try {
              await ((t = new chrome.cast.media.GetStatusRequest()),
              new Promise((e, i) => {
                u4().getStatus(t, e, i);
              }));
            } catch (e) {
              console.error(e);
            }
            (lA(this, cn)[u7.RemotePlayerEventType.IS_PAUSED_CHANGED](),
              lA(this, cn)[u7.RemotePlayerEventType.PLAYER_STATE_CHANGED]());
          }
        }),
        (cE = function () {
          !u7 ||
            lA(this, ca) ||
            (lw(this, ca, !0),
            u5(lA(this, ci).castOptions),
            lA(this, ci).textTracks.addEventListener("change", () =>
              lS(this, cu, cf).call(this),
            ),
            lS(this, cu, cp).call(this),
            lw(this, cr, new u7.RemotePlayer()),
            new u7.RemotePlayerController(lA(this, cr)),
            lw(this, cn, {
              [u7.RemotePlayerEventType.IS_CONNECTED_CHANGED]: ({
                value: e,
              }) => {
                !0 === e
                  ? (lw(this, cs, "connected"),
                    this.dispatchEvent(new Event("connect")))
                  : (lS(this, cu, ch).call(this),
                    lw(this, cs, "disconnected"),
                    this.dispatchEvent(new Event("disconnect")));
              },
              [u7.RemotePlayerEventType.DURATION_CHANGED]: () => {
                lA(this, ci).dispatchEvent(new Event("durationchange"));
              },
              [u7.RemotePlayerEventType.VOLUME_LEVEL_CHANGED]: () => {
                lA(this, ci).dispatchEvent(new Event("volumechange"));
              },
              [u7.RemotePlayerEventType.IS_MUTED_CHANGED]: () => {
                lA(this, ci).dispatchEvent(new Event("volumechange"));
              },
              [u7.RemotePlayerEventType.CURRENT_TIME_CHANGED]: () => {
                var e;
                null != (e = lA(this, cu, cc)) &&
                  e.isMediaLoaded &&
                  lA(this, ci).dispatchEvent(new Event("timeupdate"));
              },
              [u7.RemotePlayerEventType.VIDEO_INFO_CHANGED]: () => {
                lA(this, ci).dispatchEvent(new Event("resize"));
              },
              [u7.RemotePlayerEventType.IS_PAUSED_CHANGED]: () => {
                lA(this, ci).dispatchEvent(
                  new Event(this.paused ? "pause" : "play"),
                );
              },
              [u7.RemotePlayerEventType.PLAYER_STATE_CHANGED]: () => {
                var e, t;
                (null == (e = lA(this, cu, cc)) ? void 0 : e.playerState) !==
                  chrome.cast.media.PlayerState.PAUSED &&
                  lA(this, ci).dispatchEvent(
                    new Event(
                      {
                        [chrome.cast.media.PlayerState.PLAYING]: "playing",
                        [chrome.cast.media.PlayerState.BUFFERING]: "waiting",
                        [chrome.cast.media.PlayerState.IDLE]: "emptied",
                      }[
                        null == (t = lA(this, cu, cc)) ? void 0 : t.playerState
                      ],
                    ),
                  );
              },
              [u7.RemotePlayerEventType.IS_MEDIA_LOADED_CHANGED]: async () => {
                var e;
                null != (e = lA(this, cu, cc)) &&
                  e.isMediaLoaded &&
                  (await Promise.resolve(), lS(this, cu, cb).call(this));
              },
            }));
        }),
        (cb = function () {
          lS(this, cu, cf).call(this);
        }),
        (cf = async function () {
          var e, t, i, a, r;
          let n;
          if (!lA(this, cu, cc)) return;
          let s = (
              null !=
              (t = null == (e = lA(this, cr).mediaInfo) ? void 0 : e.tracks)
                ? t
                : []
            ).filter(({ type: e }) => e === chrome.cast.media.TrackType.TEXT),
            o = [...lA(this, ci).textTracks].filter(
              ({ kind: e }) => "subtitles" === e || "captions" === e,
            ),
            l = s
              .map(({ language: e, name: t, trackId: i }) => {
                var a;
                let { mode: r } =
                  null != (a = o.find((i) => i.language === e && i.label === t))
                    ? a
                    : {};
                return !!r && { mode: r, trackId: i };
              })
              .filter(Boolean),
            d = l
              .filter(({ mode: e }) => "showing" !== e)
              .map(({ trackId: e }) => e),
            u = l.find(({ mode: e }) => "showing" === e),
            c =
              null !=
              (r =
                null ==
                (a = null == (i = u3()) ? void 0 : i.getSessionObj().media[0])
                  ? void 0
                  : a.activeTrackIds)
                ? r
                : [],
            h = c;
          if (
            (c.length && (h = h.filter((e) => !d.includes(e))),
            null != u && u.trackId && (h = [...h, u.trackId]),
            (h = [...new Set(h)]),
            (n = h),
            !(c.length === n.length && c.every((e) => n.includes(e))))
          )
            try {
              let e = new chrome.cast.media.EditTracksInfoRequest(h);
              await new Promise((t, i) => {
                u4().editTracksInfo(e, t, i);
              });
            } catch (e) {
              console.error(e);
            }
        }));
      var cy = (e) => {
          var t, i, a, r, n, s, o, l, d;
          return (
            (i = class extends e {
              constructor() {
                (super(...arguments),
                  lk(this, o),
                  lk(this, a, { paused: !1 }),
                  lk(this, r, u9()),
                  lk(this, n),
                  lk(this, s));
              }
              get remote() {
                return lA(this, s)
                  ? lA(this, s)
                  : globalThis.chrome
                    ? (this.disableRemotePlayback ||
                        (function () {
                          var e;
                          let t =
                            "https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1";
                          if (
                            (null != (e = globalThis.chrome) && e.cast) ||
                            document.querySelector(`script[src="${t}"]`)
                          )
                            return;
                          let i = document.createElement("script");
                          ((i.src = t), document.head.append(i));
                        })(),
                      uX.set(this, {
                        loadOnPrompt: () => lS(this, o, d).call(this),
                      }),
                      lw(this, s, new c_(this)))
                    : super.remote;
              }
              attributeChangedCallback(e, t, i) {
                if (
                  (super.attributeChangedCallback(e, t, i),
                  "cast-receiver" === e && i)
                ) {
                  lA(this, r).receiverApplicationId = i;
                  return;
                }
                if (lA(this, o, l))
                  switch (e) {
                    case "cast-stream-type":
                    case "cast-src":
                      this.load();
                  }
              }
              async load() {
                var e, t;
                if (!lA(this, o, l)) return super.load();
                let i = new chrome.cast.media.MediaInfo(
                  this.castSrc,
                  this.castContentType,
                );
                i.customData = this.castCustomData;
                let r = [...this.querySelectorAll("track")].filter(
                    ({ kind: e, src: t }) =>
                      t && ("subtitles" === e || "captions" === e),
                  ),
                  n = [],
                  s = 0;
                if (
                  (r.length &&
                    (i.tracks = r.map((e) => {
                      let t = ++s;
                      0 === n.length && "showing" === e.track.mode && n.push(t);
                      let i = new chrome.cast.media.Track(
                        t,
                        chrome.cast.media.TrackType.TEXT,
                      );
                      return (
                        (i.trackContentId = e.src),
                        (i.trackContentType = "text/vtt"),
                        (i.subtype =
                          "captions" === e.kind
                            ? chrome.cast.media.TextTrackType.CAPTIONS
                            : chrome.cast.media.TextTrackType.SUBTITLES),
                        (i.name = e.label),
                        (i.language = e.srclang),
                        i
                      );
                    })),
                  "live" === this.castStreamType
                    ? (i.streamType = chrome.cast.media.StreamType.LIVE)
                    : (i.streamType = chrome.cast.media.StreamType.BUFFERED),
                  (i.metadata = new chrome.cast.media.GenericMediaMetadata()),
                  (i.metadata.title = this.title),
                  (i.metadata.images = [{ url: this.poster }]),
                  u8(this.castSrc))
                ) {
                  let e = await u6(this.castSrc);
                  ((null == e ? void 0 : e.includes("m4s")) ||
                    (null == e ? void 0 : e.includes("mp4"))) &&
                    ((i.hlsSegmentFormat =
                      chrome.cast.media.HlsSegmentFormat.FMP4),
                    (i.hlsVideoSegmentFormat =
                      chrome.cast.media.HlsVideoSegmentFormat.FMP4));
                }
                let d = new chrome.cast.media.LoadRequest(i);
                ((d.currentTime = null != (e = super.currentTime) ? e : 0),
                  (d.autoplay = !lA(this, a).paused),
                  (d.activeTrackIds = n),
                  await (null == (t = u3()) ? void 0 : t.loadMedia(d)),
                  this.dispatchEvent(new Event("volumechange")));
              }
              play() {
                var e;
                if (lA(this, o, l)) {
                  lA(this, o, l).isPaused &&
                    (null == (e = lA(this, o, l).controller) ||
                      e.playOrPause());
                  return;
                }
                return super.play();
              }
              pause() {
                var e;
                if (lA(this, o, l)) {
                  lA(this, o, l).isPaused ||
                    null == (e = lA(this, o, l).controller) ||
                    e.playOrPause();
                  return;
                }
                super.pause();
              }
              get castOptions() {
                return lA(this, r);
              }
              get castReceiver() {
                var e;
                return null != (e = this.getAttribute("cast-receiver"))
                  ? e
                  : void 0;
              }
              set castReceiver(e) {
                this.castReceiver != e &&
                  this.setAttribute("cast-receiver", `${e}`);
              }
              get castSrc() {
                var e, t, i;
                return null !=
                  (i =
                    null != (t = this.getAttribute("cast-src"))
                      ? t
                      : null == (e = this.querySelector("source"))
                        ? void 0
                        : e.src)
                  ? i
                  : this.currentSrc;
              }
              set castSrc(e) {
                this.castSrc != e && this.setAttribute("cast-src", `${e}`);
              }
              get castContentType() {
                var e;
                return null != (e = this.getAttribute("cast-content-type"))
                  ? e
                  : void 0;
              }
              set castContentType(e) {
                this.setAttribute("cast-content-type", `${e}`);
              }
              get castStreamType() {
                var e, t;
                return null !=
                  (t =
                    null != (e = this.getAttribute("cast-stream-type"))
                      ? e
                      : this.streamType)
                  ? t
                  : void 0;
              }
              set castStreamType(e) {
                this.setAttribute("cast-stream-type", `${e}`);
              }
              get castCustomData() {
                return lA(this, n);
              }
              set castCustomData(e) {
                let t = typeof e;
                if (!["object", "undefined"].includes(t))
                  return void console.error(
                    `castCustomData must be nullish or an object but value was of type ${t}`,
                  );
                lw(this, n, e);
              }
              get readyState() {
                if (lA(this, o, l))
                  switch (lA(this, o, l).playerState) {
                    case chrome.cast.media.PlayerState.IDLE:
                      return 0;
                    case chrome.cast.media.PlayerState.BUFFERING:
                      return 2;
                    default:
                      return 3;
                  }
                return super.readyState;
              }
              get paused() {
                return lA(this, o, l) ? lA(this, o, l).isPaused : super.paused;
              }
              get muted() {
                var e;
                return lA(this, o, l)
                  ? null == (e = lA(this, o, l))
                    ? void 0
                    : e.isMuted
                  : super.muted;
              }
              set muted(e) {
                var t;
                if (lA(this, o, l)) {
                  ((e && !lA(this, o, l).isMuted) ||
                    (!e && lA(this, o, l).isMuted)) &&
                    (null == (t = lA(this, o, l).controller) ||
                      t.muteOrUnmute());
                  return;
                }
                super.muted = e;
              }
              get volume() {
                var e, t;
                return lA(this, o, l)
                  ? null !=
                    (t = null == (e = lA(this, o, l)) ? void 0 : e.volumeLevel)
                    ? t
                    : 1
                  : super.volume;
              }
              set volume(e) {
                var t;
                if (lA(this, o, l)) {
                  ((lA(this, o, l).volumeLevel = +e),
                    null == (t = lA(this, o, l).controller) ||
                      t.setVolumeLevel());
                  return;
                }
                super.volume = e;
              }
              get duration() {
                var e, t, i;
                return lA(this, o, l) &&
                  null != (e = lA(this, o, l)) &&
                  e.isMediaLoaded
                  ? null !=
                    (i = null == (t = lA(this, o, l)) ? void 0 : t.duration)
                    ? i
                    : NaN
                  : super.duration;
              }
              get currentTime() {
                var e, t, i;
                return lA(this, o, l) &&
                  null != (e = lA(this, o, l)) &&
                  e.isMediaLoaded
                  ? null !=
                    (i = null == (t = lA(this, o, l)) ? void 0 : t.currentTime)
                    ? i
                    : 0
                  : super.currentTime;
              }
              set currentTime(e) {
                var t;
                if (lA(this, o, l)) {
                  ((lA(this, o, l).currentTime = e),
                    null == (t = lA(this, o, l).controller) || t.seek());
                  return;
                }
                super.currentTime = e;
              }
            }),
            (a = new WeakMap()),
            (r = new WeakMap()),
            (n = new WeakMap()),
            (s = new WeakMap()),
            (o = new WeakSet()),
            (l = function () {
              var e, t;
              return null ==
                (t =
                  null == (e = uX.get(this.remote)) ? void 0 : e.getCastPlayer)
                ? void 0
                : t.call(e);
            }),
            (d = async function () {
              ((lA(this, a).paused = lI(i.prototype, this, "paused")),
                lI(i.prototype, this, "pause").call(this),
                (this.muted = lI(i.prototype, this, "muted")));
              try {
                await this.load();
              } catch (e) {
                console.error(e);
              }
            }),
            ly(i, "observedAttributes", [
              ...(null != (t = e.observedAttributes) ? t : []),
              "cast-src",
              "cast-content-type",
              "cast-stream-type",
              "cast-receiver",
            ]),
            i
          );
        },
        cT = class extends Event {
          constructor(e, t) {
            (super(e), ly(this, "track"), (this.track = t.track));
          }
        },
        cA = new WeakMap();
      function ck(e) {
        var t, i, a;
        let r;
        return null != (t = cA.get(e))
          ? t
          : ((i = e),
            (a = {}),
            (r = cA.get(i)) || cA.set(i, (r = {})),
            Object.assign(r, a));
      }
      function cw(e, t) {
        let i = e.videoTracks;
        ((ck(t).media = e),
          ck(t).renditionSet || (ck(t).renditionSet = new Set()));
        let a = ck(i).trackSet;
        a.add(t);
        let r = a.size - 1;
        (r in cM.prototype ||
          Object.defineProperty(cM.prototype, r, {
            get() {
              return [...ck(this).trackSet][r];
            },
          }),
          queueMicrotask(() => {
            i.dispatchEvent(new cT("addtrack", { track: t }));
          }));
      }
      function cS(e) {
        var t;
        let i = null == (t = ck(e).media) ? void 0 : t.videoTracks;
        i &&
          (ck(i).trackSet.delete(e),
          queueMicrotask(() => {
            i.dispatchEvent(new cT("removetrack", { track: e }));
          }));
      }
      var cI,
        cR,
        cC,
        cD,
        cL,
        cM = class extends EventTarget {
          constructor() {
            (super(),
              lk(this, cD),
              lk(this, cI),
              lk(this, cR),
              lk(this, cC),
              (ck(this).trackSet = new Set()));
          }
          [Symbol.iterator]() {
            return lA(this, cD, cL).values();
          }
          get length() {
            return lA(this, cD, cL).size;
          }
          getTrackById(e) {
            var t;
            return null != (t = [...lA(this, cD, cL)].find((t) => t.id === e))
              ? t
              : null;
          }
          get selectedIndex() {
            return [...lA(this, cD, cL)].findIndex((e) => e.selected);
          }
          get onaddtrack() {
            return lA(this, cI);
          }
          set onaddtrack(e) {
            (lA(this, cI) &&
              (this.removeEventListener("addtrack", lA(this, cI)),
              lw(this, cI, void 0)),
              "function" == typeof e &&
                (lw(this, cI, e), this.addEventListener("addtrack", e)));
          }
          get onremovetrack() {
            return lA(this, cR);
          }
          set onremovetrack(e) {
            (lA(this, cR) &&
              (this.removeEventListener("removetrack", lA(this, cR)),
              lw(this, cR, void 0)),
              "function" == typeof e &&
                (lw(this, cR, e), this.addEventListener("removetrack", e)));
          }
          get onchange() {
            return lA(this, cC);
          }
          set onchange(e) {
            (lA(this, cC) &&
              (this.removeEventListener("change", lA(this, cC)),
              lw(this, cC, void 0)),
              "function" == typeof e &&
                (lw(this, cC, e), this.addEventListener("change", e)));
          }
        };
      ((cI = new WeakMap()),
        (cR = new WeakMap()),
        (cC = new WeakMap()),
        (cD = new WeakSet()),
        (cL = function () {
          return ck(this).trackSet;
        }));
      var cO = class extends Event {
        constructor(e, t) {
          (super(e), ly(this, "rendition"), (this.rendition = t.rendition));
        }
      };
      function cN(e) {
        return [...ck(e).media.videoTracks]
          .filter((e) => e.selected)
          .flatMap((e) => [...ck(e).renditionSet]);
      }
      var cx,
        cP,
        cU,
        cB = class extends EventTarget {
          constructor() {
            (super(...arguments), lk(this, cx), lk(this, cP), lk(this, cU));
          }
          [Symbol.iterator]() {
            return cN(this).values();
          }
          get length() {
            return cN(this).length;
          }
          getRenditionById(e) {
            var t;
            return null != (t = cN(this).find((t) => `${t.id}` == `${e}`))
              ? t
              : null;
          }
          get selectedIndex() {
            return cN(this).findIndex((e) => e.selected);
          }
          set selectedIndex(e) {
            for (let [t, i] of cN(this).entries()) i.selected = t === e;
          }
          get onaddrendition() {
            return lA(this, cx);
          }
          set onaddrendition(e) {
            (lA(this, cx) &&
              (this.removeEventListener("addrendition", lA(this, cx)),
              lw(this, cx, void 0)),
              "function" == typeof e &&
                (lw(this, cx, e), this.addEventListener("addrendition", e)));
          }
          get onremoverendition() {
            return lA(this, cP);
          }
          set onremoverendition(e) {
            (lA(this, cP) &&
              (this.removeEventListener("removerendition", lA(this, cP)),
              lw(this, cP, void 0)),
              "function" == typeof e &&
                (lw(this, cP, e), this.addEventListener("removerendition", e)));
          }
          get onchange() {
            return lA(this, cU);
          }
          set onchange(e) {
            (lA(this, cU) &&
              (this.removeEventListener("change", lA(this, cU)),
              lw(this, cU, void 0)),
              "function" == typeof e &&
                (lw(this, cU, e), this.addEventListener("change", e)));
          }
        };
      ((cx = new WeakMap()), (cP = new WeakMap()), (cU = new WeakMap()));
      var cW,
        cH = class {
          constructor() {
            (ly(this, "src"),
              ly(this, "id"),
              ly(this, "width"),
              ly(this, "height"),
              ly(this, "bitrate"),
              ly(this, "frameRate"),
              ly(this, "codec"),
              lk(this, cW, !1));
          }
          get selected() {
            return lA(this, cW);
          }
          set selected(e) {
            var t;
            let i;
            lA(this, cW) !== e &&
              (lw(this, cW, e),
              (t = this),
              (i = ck(t).media.videoRenditions) &&
                !ck(i).changeRequested &&
                ((ck(i).changeRequested = !0),
                queueMicrotask(() => {
                  (delete ck(i).changeRequested,
                    ck(t).track.selected &&
                      i.dispatchEvent(new Event("change")));
                })));
          }
        };
      cW = new WeakMap();
      var cV,
        cF = class {
          constructor() {
            (ly(this, "id"),
              ly(this, "kind"),
              ly(this, "label", ""),
              ly(this, "language", ""),
              ly(this, "sourceBuffer"),
              lk(this, cV, !1));
          }
          addRendition(e, t, i, a, r, n) {
            var s;
            let o,
              l,
              d,
              u = new cH();
            return (
              (u.src = e),
              (u.width = t),
              (u.height = i),
              (u.frameRate = n),
              (u.bitrate = r),
              (u.codec = a),
              (s = this),
              (o = ck(s).media.videoRenditions),
              (ck(u).media = ck(s).media),
              (ck(u).track = s),
              (l = ck(s).renditionSet).add(u),
              (d = l.size - 1) in cB.prototype ||
                Object.defineProperty(cB.prototype, d, {
                  get() {
                    return cN(this)[d];
                  },
                }),
              queueMicrotask(() => {
                s.selected &&
                  o.dispatchEvent(new cO("addrendition", { rendition: u }));
              }),
              u
            );
          }
          removeRendition(e) {
            let t, i;
            ((t = ck(e).media.videoRenditions),
              (i = ck(e).track),
              ck(i).renditionSet.delete(e),
              queueMicrotask(() => {
                ck(e).track.selected &&
                  t.dispatchEvent(new cO("removerendition", { rendition: e }));
              }));
          }
          get selected() {
            return lA(this, cV);
          }
          set selected(e) {
            lA(this, cV) !== e &&
              (lw(this, cV, e),
              !0 === e &&
                (function (e) {
                  var t;
                  let i = null != (t = ck(e).media.videoTracks) ? t : [],
                    a = !1;
                  for (let t of i) t !== e && ((t.selected = !1), (a = !0));
                  if (a) {
                    if (ck(i).changeRequested) return;
                    ((ck(i).changeRequested = !0),
                      queueMicrotask(() => {
                        (delete ck(i).changeRequested,
                          i.dispatchEvent(new Event("change")));
                      }));
                  }
                })(this));
          }
        };
      function cq(e) {
        return [...ck(e).media.audioTracks]
          .filter((e) => e.enabled)
          .flatMap((e) => [...ck(e).renditionSet]);
      }
      cV = new WeakMap();
      var c$,
        cK,
        cY,
        cG = class extends EventTarget {
          constructor() {
            (super(...arguments), lk(this, c$), lk(this, cK), lk(this, cY));
          }
          [Symbol.iterator]() {
            return cq(this).values();
          }
          get length() {
            return cq(this).length;
          }
          getRenditionById(e) {
            var t;
            return null != (t = cq(this).find((t) => `${t.id}` == `${e}`))
              ? t
              : null;
          }
          get selectedIndex() {
            return cq(this).findIndex((e) => e.selected);
          }
          set selectedIndex(e) {
            for (let [t, i] of cq(this).entries()) i.selected = t === e;
          }
          get onaddrendition() {
            return lA(this, c$);
          }
          set onaddrendition(e) {
            (lA(this, c$) &&
              (this.removeEventListener("addrendition", lA(this, c$)),
              lw(this, c$, void 0)),
              "function" == typeof e &&
                (lw(this, c$, e), this.addEventListener("addrendition", e)));
          }
          get onremoverendition() {
            return lA(this, cK);
          }
          set onremoverendition(e) {
            (lA(this, cK) &&
              (this.removeEventListener("removerendition", lA(this, cK)),
              lw(this, cK, void 0)),
              "function" == typeof e &&
                (lw(this, cK, e), this.addEventListener("removerendition", e)));
          }
          get onchange() {
            return lA(this, cY);
          }
          set onchange(e) {
            (lA(this, cY) &&
              (this.removeEventListener("change", lA(this, cY)),
              lw(this, cY, void 0)),
              "function" == typeof e &&
                (lw(this, cY, e), this.addEventListener("change", e)));
          }
        };
      ((c$ = new WeakMap()), (cK = new WeakMap()), (cY = new WeakMap()));
      var cj,
        cQ = class {
          constructor() {
            (ly(this, "src"),
              ly(this, "id"),
              ly(this, "bitrate"),
              ly(this, "codec"),
              lk(this, cj, !1));
          }
          get selected() {
            return lA(this, cj);
          }
          set selected(e) {
            var t;
            let i;
            lA(this, cj) !== e &&
              (lw(this, cj, e),
              (t = this),
              (i = ck(t).media.audioRenditions) &&
                !ck(i).changeRequested &&
                ((ck(i).changeRequested = !0),
                queueMicrotask(() => {
                  (delete ck(i).changeRequested,
                    ck(t).track.enabled &&
                      i.dispatchEvent(new Event("change")));
                })));
          }
        };
      function cZ(e, t) {
        let i = e.audioTracks;
        ((ck(t).media = e),
          ck(t).renditionSet || (ck(t).renditionSet = new Set()));
        let a = ck(i).trackSet;
        a.add(t);
        let r = a.size - 1;
        (r in c3.prototype ||
          Object.defineProperty(c3.prototype, r, {
            get() {
              return [...ck(this).trackSet][r];
            },
          }),
          queueMicrotask(() => {
            i.dispatchEvent(new cT("addtrack", { track: t }));
          }));
      }
      function cz(e) {
        var t;
        let i = null == (t = ck(e).media) ? void 0 : t.audioTracks;
        i &&
          (ck(i).trackSet.delete(e),
          queueMicrotask(() => {
            i.dispatchEvent(new cT("removetrack", { track: e }));
          }));
      }
      cj = new WeakMap();
      var cX,
        cJ,
        c0,
        c1,
        c2,
        c3 = class extends EventTarget {
          constructor() {
            (super(),
              lk(this, c1),
              lk(this, cX),
              lk(this, cJ),
              lk(this, c0),
              (ck(this).trackSet = new Set()));
          }
          [Symbol.iterator]() {
            return lA(this, c1, c2).values();
          }
          get length() {
            return lA(this, c1, c2).size;
          }
          getTrackById(e) {
            var t;
            return null != (t = [...lA(this, c1, c2)].find((t) => t.id === e))
              ? t
              : null;
          }
          get onaddtrack() {
            return lA(this, cX);
          }
          set onaddtrack(e) {
            (lA(this, cX) &&
              (this.removeEventListener("addtrack", lA(this, cX)),
              lw(this, cX, void 0)),
              "function" == typeof e &&
                (lw(this, cX, e), this.addEventListener("addtrack", e)));
          }
          get onremovetrack() {
            return lA(this, cJ);
          }
          set onremovetrack(e) {
            (lA(this, cJ) &&
              (this.removeEventListener("removetrack", lA(this, cJ)),
              lw(this, cJ, void 0)),
              "function" == typeof e &&
                (lw(this, cJ, e), this.addEventListener("removetrack", e)));
          }
          get onchange() {
            return lA(this, c0);
          }
          set onchange(e) {
            (lA(this, c0) &&
              (this.removeEventListener("change", lA(this, c0)),
              lw(this, c0, void 0)),
              "function" == typeof e &&
                (lw(this, c0, e), this.addEventListener("change", e)));
          }
        };
      ((cX = new WeakMap()),
        (cJ = new WeakMap()),
        (c0 = new WeakMap()),
        (c1 = new WeakSet()),
        (c2 = function () {
          return ck(this).trackSet;
        }));
      var c4,
        c5 = class {
          constructor() {
            (ly(this, "id"),
              ly(this, "kind"),
              ly(this, "label", ""),
              ly(this, "language", ""),
              ly(this, "sourceBuffer"),
              lk(this, c4, !1));
          }
          addRendition(e, t, i) {
            var a;
            let r,
              n,
              s,
              o = new cQ();
            return (
              (o.src = e),
              (o.codec = t),
              (o.bitrate = i),
              (a = this),
              (r = ck(a).media.audioRenditions),
              (ck(o).media = ck(a).media),
              (ck(o).track = a),
              (n = ck(a).renditionSet).add(o),
              (s = n.size - 1) in cG.prototype ||
                Object.defineProperty(cG.prototype, s, {
                  get() {
                    return cq(this)[s];
                  },
                }),
              queueMicrotask(() => {
                a.enabled &&
                  r.dispatchEvent(new cO("addrendition", { rendition: o }));
              }),
              o
            );
          }
          removeRendition(e) {
            let t, i;
            ((t = ck(e).media.audioRenditions),
              (i = ck(e).track),
              ck(i).renditionSet.delete(e),
              queueMicrotask(() => {
                ck(e).track.enabled &&
                  t.dispatchEvent(new cO("removerendition", { rendition: e }));
              }));
          }
          get enabled() {
            return lA(this, c4);
          }
          set enabled(e) {
            let t;
            lA(this, c4) !== e &&
              (lw(this, c4, e),
              (t = ck(this).media.audioTracks) &&
                !ck(t).changeRequested &&
                ((ck(t).changeRequested = !0),
                queueMicrotask(() => {
                  (delete ck(t).changeRequested,
                    t.dispatchEvent(new Event("change")));
                })));
          }
        };
      c4 = new WeakMap();
      var c9 = c7(globalThis.HTMLMediaElement, "video"),
        c8 = c7(globalThis.HTMLMediaElement, "audio");
      function c6(e) {
        if (!(null != e && e.prototype)) return e;
        let t = c7(e, "video");
        (!t || `${t}`.includes("[native code]")) &&
          Object.defineProperty(e.prototype, "videoTracks", {
            get() {
              return (function (e) {
                var t;
                let i = ck(e).videoTracks;
                if (!i && ((i = new cM()), (ck(e).videoTracks = i), c9)) {
                  let a = c9.call(null != (t = e.nativeEl) ? t : e);
                  for (let t of a) cw(e, t);
                  (a.addEventListener("change", () => {
                    i.dispatchEvent(new Event("change"));
                  }),
                    a.addEventListener("addtrack", (t) => {
                      if ([...i].some((e) => e instanceof cF)) {
                        for (let e of a) cS(e);
                        return;
                      }
                      cw(e, t.track);
                    }),
                    a.addEventListener("removetrack", (e) => {
                      cS(e.track);
                    }));
                }
                return i;
              })(this);
            },
          });
        let i = c7(e, "audio");
        ((!i || `${i}`.includes("[native code]")) &&
          Object.defineProperty(e.prototype, "audioTracks", {
            get() {
              return (function (e) {
                var t;
                let i = ck(e).audioTracks;
                if (!i && ((i = new c3()), (ck(e).audioTracks = i), c8)) {
                  let a = c8.call(null != (t = e.nativeEl) ? t : e);
                  for (let t of a) cZ(e, t);
                  (a.addEventListener("change", () => {
                    i.dispatchEvent(new Event("change"));
                  }),
                    a.addEventListener("addtrack", (t) => {
                      if ([...i].some((e) => e instanceof c5)) {
                        for (let e of a) cz(e);
                        return;
                      }
                      cZ(e, t.track);
                    }),
                    a.addEventListener("removetrack", (e) => {
                      cz(e.track);
                    }));
                }
                return i;
              })(this);
            },
          }),
          "addVideoTrack" in e.prototype ||
            (e.prototype.addVideoTrack = function (e, t = "", i = "") {
              let a = new cF();
              return (
                (a.kind = e),
                (a.label = t),
                (a.language = i),
                cw(this, a),
                a
              );
            }),
          "removeVideoTrack" in e.prototype ||
            (e.prototype.removeVideoTrack = cS),
          "addAudioTrack" in e.prototype ||
            (e.prototype.addAudioTrack = function (e, t = "", i = "") {
              let a = new c5();
              return (
                (a.kind = e),
                (a.label = t),
                (a.language = i),
                cZ(this, a),
                a
              );
            }),
          "removeAudioTrack" in e.prototype ||
            (e.prototype.removeAudioTrack = cz),
          "videoRenditions" in e.prototype ||
            Object.defineProperty(e.prototype, "videoRenditions", {
              get() {
                return a(this);
              },
            }));
        let a = (e) => {
          let t = ck(e).videoRenditions;
          return (
            t || ((ck((t = new cB())).media = e), (ck(e).videoRenditions = t)),
            t
          );
        };
        "audioRenditions" in e.prototype ||
          Object.defineProperty(e.prototype, "audioRenditions", {
            get() {
              return r(this);
            },
          });
        let r = (e) => {
          let t = ck(e).audioRenditions;
          return (
            t || ((ck((t = new cG())).media = e), (ck(e).audioRenditions = t)),
            t
          );
        };
        return e;
      }
      function c7(e, t) {
        var i;
        if (null != e && e.prototype)
          return null ==
            (i = Object.getOwnPropertyDescriptor(e.prototype, `${t}Tracks`))
            ? void 0
            : i.get;
      }
      var he = `
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" class="logo" part="logo" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="0 0 1600 500"><g fill="#fff"><path d="M994.287 93.486c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m0-93.486c-34.509 0-62.484 27.976-62.484 62.486v187.511c0 68.943-56.09 125.033-125.032 125.033s-125.03-56.09-125.03-125.033V62.486C681.741 27.976 653.765 0 619.256 0s-62.484 27.976-62.484 62.486v187.511C556.772 387.85 668.921 500 806.771 500c137.851 0 250.001-112.15 250.001-250.003V62.486c0-34.51-27.976-62.486-62.485-62.486M1537.51 468.511c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31m-275.883-218.509-143.33 143.329c-24.402 24.402-24.402 63.966 0 88.368 24.402 24.402 63.967 24.402 88.369 0l143.33-143.329 143.328 143.329c24.402 24.4 63.967 24.402 88.369 0 24.403-24.402 24.403-63.966.001-88.368l-143.33-143.329.001-.004 143.329-143.329c24.402-24.402 24.402-63.965 0-88.367s-63.967-24.402-88.369 0L1349.996 161.63 1206.667 18.302c-24.402-24.401-63.967-24.402-88.369 0s-24.402 63.965 0 88.367l143.329 143.329v.004ZM437.511 468.521c-17.121 0-31-13.879-31-31 0-17.121 13.879-31 31-31 17.121 0 31 13.879 31 31 0 17.121-13.879 31-31 31M461.426 4.759C438.078-4.913 411.2.432 393.33 18.303L249.999 161.632 106.669 18.303C88.798.432 61.922-4.913 38.573 4.759 15.224 14.43-.001 37.214-.001 62.488v375.026c0 34.51 27.977 62.486 62.487 62.486 34.51 0 62.486-27.976 62.486-62.486V213.341l80.843 80.844c24.404 24.402 63.965 24.402 88.369 0l80.843-80.844v224.173c0 34.51 27.976 62.486 62.486 62.486s62.486-27.976 62.486-62.486V62.488c0-25.274-15.224-48.058-38.573-57.729" style="fill-rule:nonzero"/></g></svg>`;
      uq.push("castchange", "entercast", "leavecast");
      var ht,
        hi,
        ha,
        hr,
        hn,
        hs,
        ho,
        hl,
        hd,
        hu,
        hc,
        hh = {
          BEACON_COLLECTION_DOMAIN: "beacon-collection-domain",
          CUSTOM_DOMAIN: "custom-domain",
          DEBUG: "debug",
          DISABLE_TRACKING: "disable-tracking",
          DISABLE_COOKIES: "disable-cookies",
          DRM_TOKEN: "drm-token",
          PLAYBACK_TOKEN: "playback-token",
          ENV_KEY: "env-key",
          MAX_RESOLUTION: "max-resolution",
          MIN_RESOLUTION: "min-resolution",
          RENDITION_ORDER: "rendition-order",
          PROGRAM_START_TIME: "program-start-time",
          PROGRAM_END_TIME: "program-end-time",
          ASSET_START_TIME: "asset-start-time",
          ASSET_END_TIME: "asset-end-time",
          METADATA_URL: "metadata-url",
          PLAYBACK_ID: "playback-id",
          PLAYER_SOFTWARE_NAME: "player-software-name",
          PLAYER_SOFTWARE_VERSION: "player-software-version",
          PLAYER_INIT_TIME: "player-init-time",
          PREFER_CMCD: "prefer-cmcd",
          PREFER_PLAYBACK: "prefer-playback",
          START_TIME: "start-time",
          STREAM_TYPE: "stream-type",
          TARGET_LIVE_WINDOW: "target-live-window",
          LIVE_EDGE_OFFSET: "live-edge-offset",
          TYPE: "type",
          LOGO: "logo",
        },
        hm = Object.values(hh),
        hp = "mux-video",
        hv = class extends uz {
          constructor() {
            (super(),
              lk(this, hu),
              lk(this, ht),
              lk(this, hi),
              lk(this, ha),
              lk(this, hr, {}),
              lk(this, hn, {}),
              lk(this, hs),
              lk(this, ho),
              lk(this, hl),
              lk(this, hd),
              lw(this, ha, iG()));
          }
          static get NAME() {
            return hp;
          }
          static get VERSION() {
            return uF;
          }
          static get observedAttributes() {
            var e;
            return [...hm, ...(null != (e = uz.observedAttributes) ? e : [])];
          }
          static getTemplateHTML(e = {}) {
            let t = super.getTemplateHTML(e),
              i = "false" !== e.logo && void 0 !== e.logo,
              a = e.logo && "" !== e.logo,
              r = e.logo,
              n = i
                ? `
      <style>
        :host {
          position: relative;
        }
        :host slot[name="logo"] {
          display: flex;
          justify-content: end;
          position: absolute;
          top: 1rem;
          right: 1rem;

        }
         :host slot[name="logo"] .logo{
          width: 5rem;
          pointer-events: none;
          user-select: none;
         }
      </style>
      <slot name="logo">
        ${a ? `<img class="logo" part="logo" src="${r}" />` : he}
      </slot>
    `
                : "";
            return `
      ${t}
      ${n}
    `;
          }
          get preferCmcd() {
            var e;
            return null != (e = this.getAttribute(hh.PREFER_CMCD)) ? e : void 0;
          }
          set preferCmcd(e) {
            e !== this.preferCmcd &&
              (e
                ? tq.includes(e)
                  ? this.setAttribute(hh.PREFER_CMCD, e)
                  : console.warn(
                      `Invalid value for preferCmcd. Must be one of ${tq.join()}`,
                    )
                : this.removeAttribute(hh.PREFER_CMCD));
          }
          get playerInitTime() {
            return this.hasAttribute(hh.PLAYER_INIT_TIME)
              ? +this.getAttribute(hh.PLAYER_INIT_TIME)
              : lA(this, ha);
          }
          set playerInitTime(e) {
            e != this.playerInitTime &&
              (null == e
                ? this.removeAttribute(hh.PLAYER_INIT_TIME)
                : this.setAttribute(hh.PLAYER_INIT_TIME, `${+e}`));
          }
          get playerSoftwareName() {
            var e;
            return null != (e = lA(this, hl)) ? e : hp;
          }
          set playerSoftwareName(e) {
            lw(this, hl, e);
          }
          get playerSoftwareVersion() {
            var e;
            return null != (e = lA(this, ho)) ? e : uF;
          }
          set playerSoftwareVersion(e) {
            lw(this, ho, e);
          }
          get _hls() {
            var e;
            return null == (e = lA(this, ht)) ? void 0 : e.engine;
          }
          get mux() {
            var e;
            return null == (e = this.nativeEl) ? void 0 : e.mux;
          }
          get error() {
            var e;
            return null != (e = iJ(this.nativeEl)) ? e : null;
          }
          get errorTranslator() {
            return lA(this, hd);
          }
          set errorTranslator(e) {
            lw(this, hd, e);
          }
          get src() {
            return this.getAttribute("src");
          }
          set src(e) {
            e !== this.src &&
              (null == e
                ? this.removeAttribute("src")
                : this.setAttribute("src", e));
          }
          get type() {
            var e;
            return null != (e = this.getAttribute(hh.TYPE)) ? e : void 0;
          }
          set type(e) {
            e !== this.type &&
              (e
                ? this.setAttribute(hh.TYPE, e)
                : this.removeAttribute(hh.TYPE));
          }
          get autoplay() {
            let e = this.getAttribute("autoplay");
            return null !== e && ("" === e || e);
          }
          set autoplay(e) {
            e !== this.autoplay &&
              (e
                ? this.setAttribute("autoplay", "string" == typeof e ? e : "")
                : this.removeAttribute("autoplay"));
          }
          get preload() {
            let e = this.getAttribute("preload");
            return "" === e
              ? "auto"
              : ["none", "metadata", "auto"].includes(e)
                ? e
                : super.preload;
          }
          set preload(e) {
            e != this.getAttribute("preload") &&
              (["", "none", "metadata", "auto"].includes(e)
                ? this.setAttribute("preload", e)
                : this.removeAttribute("preload"));
          }
          get debug() {
            return null != this.getAttribute(hh.DEBUG);
          }
          set debug(e) {
            e !== this.debug &&
              (e
                ? this.setAttribute(hh.DEBUG, "")
                : this.removeAttribute(hh.DEBUG));
          }
          get disableTracking() {
            return this.hasAttribute(hh.DISABLE_TRACKING);
          }
          set disableTracking(e) {
            e !== this.disableTracking &&
              this.toggleAttribute(hh.DISABLE_TRACKING, !!e);
          }
          get disableCookies() {
            return this.hasAttribute(hh.DISABLE_COOKIES);
          }
          set disableCookies(e) {
            e !== this.disableCookies &&
              (e
                ? this.setAttribute(hh.DISABLE_COOKIES, "")
                : this.removeAttribute(hh.DISABLE_COOKIES));
          }
          get startTime() {
            let e = this.getAttribute(hh.START_TIME);
            if (null == e) return;
            let t = +e;
            return Number.isNaN(t) ? void 0 : t;
          }
          set startTime(e) {
            e !== this.startTime &&
              (null == e
                ? this.removeAttribute(hh.START_TIME)
                : this.setAttribute(hh.START_TIME, `${e}`));
          }
          get playbackId() {
            var e;
            return this.hasAttribute(hh.PLAYBACK_ID)
              ? this.getAttribute(hh.PLAYBACK_ID)
              : null != (e = iz(this.src))
                ? e
                : void 0;
          }
          set playbackId(e) {
            e !== this.playbackId &&
              (e
                ? this.setAttribute(hh.PLAYBACK_ID, e)
                : this.removeAttribute(hh.PLAYBACK_ID));
          }
          get maxResolution() {
            var e;
            return null != (e = this.getAttribute(hh.MAX_RESOLUTION))
              ? e
              : void 0;
          }
          set maxResolution(e) {
            e !== this.maxResolution &&
              (e
                ? this.setAttribute(hh.MAX_RESOLUTION, e)
                : this.removeAttribute(hh.MAX_RESOLUTION));
          }
          get minResolution() {
            var e;
            return null != (e = this.getAttribute(hh.MIN_RESOLUTION))
              ? e
              : void 0;
          }
          set minResolution(e) {
            e !== this.minResolution &&
              (e
                ? this.setAttribute(hh.MIN_RESOLUTION, e)
                : this.removeAttribute(hh.MIN_RESOLUTION));
          }
          get renditionOrder() {
            var e;
            return null != (e = this.getAttribute(hh.RENDITION_ORDER))
              ? e
              : void 0;
          }
          set renditionOrder(e) {
            e !== this.renditionOrder &&
              (e
                ? this.setAttribute(hh.RENDITION_ORDER, e)
                : this.removeAttribute(hh.RENDITION_ORDER));
          }
          get programStartTime() {
            let e = this.getAttribute(hh.PROGRAM_START_TIME);
            if (null == e) return;
            let t = +e;
            return Number.isNaN(t) ? void 0 : t;
          }
          set programStartTime(e) {
            null == e
              ? this.removeAttribute(hh.PROGRAM_START_TIME)
              : this.setAttribute(hh.PROGRAM_START_TIME, `${e}`);
          }
          get programEndTime() {
            let e = this.getAttribute(hh.PROGRAM_END_TIME);
            if (null == e) return;
            let t = +e;
            return Number.isNaN(t) ? void 0 : t;
          }
          set programEndTime(e) {
            null == e
              ? this.removeAttribute(hh.PROGRAM_END_TIME)
              : this.setAttribute(hh.PROGRAM_END_TIME, `${e}`);
          }
          get assetStartTime() {
            let e = this.getAttribute(hh.ASSET_START_TIME);
            if (null == e) return;
            let t = +e;
            return Number.isNaN(t) ? void 0 : t;
          }
          set assetStartTime(e) {
            null == e
              ? this.removeAttribute(hh.ASSET_START_TIME)
              : this.setAttribute(hh.ASSET_START_TIME, `${e}`);
          }
          get assetEndTime() {
            let e = this.getAttribute(hh.ASSET_END_TIME);
            if (null == e) return;
            let t = +e;
            return Number.isNaN(t) ? void 0 : t;
          }
          set assetEndTime(e) {
            null == e
              ? this.removeAttribute(hh.ASSET_END_TIME)
              : this.setAttribute(hh.ASSET_END_TIME, `${e}`);
          }
          get customDomain() {
            var e;
            return null != (e = this.getAttribute(hh.CUSTOM_DOMAIN))
              ? e
              : void 0;
          }
          set customDomain(e) {
            e !== this.customDomain &&
              (e
                ? this.setAttribute(hh.CUSTOM_DOMAIN, e)
                : this.removeAttribute(hh.CUSTOM_DOMAIN));
          }
          get drmToken() {
            var e;
            return null != (e = this.getAttribute(hh.DRM_TOKEN)) ? e : void 0;
          }
          set drmToken(e) {
            e !== this.drmToken &&
              (e
                ? this.setAttribute(hh.DRM_TOKEN, e)
                : this.removeAttribute(hh.DRM_TOKEN));
          }
          get playbackToken() {
            var e, t, i, a;
            if (this.hasAttribute(hh.PLAYBACK_TOKEN))
              return null != (e = this.getAttribute(hh.PLAYBACK_TOKEN))
                ? e
                : void 0;
            if (this.hasAttribute(hh.PLAYBACK_ID)) {
              let [, e] = tj(null != (t = this.playbackId) ? t : "");
              return null != (i = new URLSearchParams(e).get("token"))
                ? i
                : void 0;
            }
            if (this.src)
              return null != (a = new URLSearchParams(this.src).get("token"))
                ? a
                : void 0;
          }
          set playbackToken(e) {
            e !== this.playbackToken &&
              (e
                ? this.setAttribute(hh.PLAYBACK_TOKEN, e)
                : this.removeAttribute(hh.PLAYBACK_TOKEN));
          }
          get tokens() {
            let e = this.getAttribute(hh.PLAYBACK_TOKEN),
              t = this.getAttribute(hh.DRM_TOKEN);
            return {
              ...lA(this, hn),
              ...(null != e ? { playback: e } : {}),
              ...(null != t ? { drm: t } : {}),
            };
          }
          set tokens(e) {
            lw(this, hn, null != e ? e : {});
          }
          get ended() {
            return i7(this.nativeEl, this._hls);
          }
          get envKey() {
            var e;
            return null != (e = this.getAttribute(hh.ENV_KEY)) ? e : void 0;
          }
          set envKey(e) {
            e !== this.envKey &&
              (e
                ? this.setAttribute(hh.ENV_KEY, e)
                : this.removeAttribute(hh.ENV_KEY));
          }
          get beaconCollectionDomain() {
            var e;
            return null != (e = this.getAttribute(hh.BEACON_COLLECTION_DOMAIN))
              ? e
              : void 0;
          }
          set beaconCollectionDomain(e) {
            e !== this.beaconCollectionDomain &&
              (e
                ? this.setAttribute(hh.BEACON_COLLECTION_DOMAIN, e)
                : this.removeAttribute(hh.BEACON_COLLECTION_DOMAIN));
          }
          get streamType() {
            var e;
            return null != (e = this.getAttribute(hh.STREAM_TYPE))
              ? e
              : i0(this.nativeEl);
          }
          set streamType(e) {
            e !== this.streamType &&
              (e
                ? this.setAttribute(hh.STREAM_TYPE, e)
                : this.removeAttribute(hh.STREAM_TYPE));
          }
          get targetLiveWindow() {
            return this.hasAttribute(hh.TARGET_LIVE_WINDOW)
              ? +this.getAttribute(hh.TARGET_LIVE_WINDOW)
              : i1(this.nativeEl);
          }
          set targetLiveWindow(e) {
            e != this.targetLiveWindow &&
              (null == e
                ? this.removeAttribute(hh.TARGET_LIVE_WINDOW)
                : this.setAttribute(hh.TARGET_LIVE_WINDOW, `${+e}`));
          }
          get liveEdgeStart() {
            var e, t;
            if (this.hasAttribute(hh.LIVE_EDGE_OFFSET)) {
              let { liveEdgeOffset: i } = this,
                a = null != (e = this.nativeEl.seekable.end(0)) ? e : 0;
              return Math.max(
                null != (t = this.nativeEl.seekable.start(0)) ? t : 0,
                a - i,
              );
            }
            return i3(this.nativeEl);
          }
          get liveEdgeOffset() {
            if (this.hasAttribute(hh.LIVE_EDGE_OFFSET))
              return +this.getAttribute(hh.LIVE_EDGE_OFFSET);
          }
          set liveEdgeOffset(e) {
            e != this.liveEdgeOffset &&
              (null == e
                ? this.removeAttribute(hh.LIVE_EDGE_OFFSET)
                : this.setAttribute(hh.LIVE_EDGE_OFFSET, `${+e}`));
          }
          get seekable() {
            return i2(this.nativeEl);
          }
          async addCuePoints(e) {
            return iu(this.nativeEl, e);
          }
          get activeCuePoint() {
            return ih(this.nativeEl);
          }
          get cuePoints() {
            return (function (e, t = { label: il }) {
              let i = is(e, t.label, "metadata");
              return null != i && i.cues
                ? Array.from(i.cues, (e) => ic(e))
                : [];
            })(this.nativeEl);
          }
          async addChapters(e) {
            return ib(this.nativeEl, e);
          }
          get activeChapter() {
            return ig(this.nativeEl);
          }
          get chapters() {
            return (function (e, t = { label: ip }) {
              var i;
              let a = is(e, t.label, "chapters");
              return null != (i = null == a ? void 0 : a.cues) && i.length
                ? Array.from(a.cues, (e) => iE(e))
                : [];
            })(this.nativeEl);
          }
          getStartDate() {
            return (function (e, t) {
              if (t) {
                let i = t.playingDate;
                if (null != i)
                  return new Date(i.getTime() - 1e3 * e.currentTime);
              }
              return "function" == typeof e.getStartDate
                ? e.getStartDate()
                : new Date(NaN);
            })(this.nativeEl, this._hls);
          }
          get currentPdt() {
            var e, t;
            return (
              (e = this.nativeEl),
              (t = this._hls) && t.playingDate
                ? t.playingDate
                : new Date(
                    "function" == typeof e.getStartDate
                      ? e.getStartDate().getTime() + 1e3 * e.currentTime
                      : NaN,
                  )
            );
          }
          get preferPlayback() {
            let e = this.getAttribute(hh.PREFER_PLAYBACK);
            if (e === tV.MSE || e === tV.NATIVE) return e;
          }
          set preferPlayback(e) {
            e !== this.preferPlayback &&
              (e === tV.MSE || e === tV.NATIVE
                ? this.setAttribute(hh.PREFER_PLAYBACK, e)
                : this.removeAttribute(hh.PREFER_PLAYBACK));
          }
          get metadata() {
            return {
              ...this.getAttributeNames()
                .filter(
                  (e) =>
                    e.startsWith("metadata-") && ![hh.METADATA_URL].includes(e),
                )
                .reduce((e, t) => {
                  let i = this.getAttribute(t);
                  return (
                    null != i &&
                      (e[t.replace(/^metadata-/, "").replace(/-/g, "_")] = i),
                    e
                  );
                }, {}),
              ...lA(this, hr),
            };
          }
          set metadata(e) {
            (lw(this, hr, null != e ? e : {}),
              this.mux && this.mux.emit("hb", lA(this, hr)));
          }
          get _hlsConfig() {
            return lA(this, hs);
          }
          set _hlsConfig(e) {
            lw(this, hs, e);
          }
          get logo() {
            return this.getAttribute(hh.LOGO);
          }
          set logo(e) {
            e ? this.setAttribute(hh.LOGO, e) : this.removeAttribute(hh.LOGO);
          }
          load() {
            lw(this, ht, ae(this, this.nativeEl, lA(this, ht)));
          }
          unload() {
            (at(this.nativeEl, lA(this, ht)), lw(this, ht, void 0));
          }
          attributeChangedCallback(e, t, i) {
            var a, r;
            switch (
              (uz.observedAttributes.includes(e) &&
                !["src", "autoplay", "preload"].includes(e) &&
                super.attributeChangedCallback(e, t, i),
              e)
            ) {
              case hh.PLAYER_SOFTWARE_NAME:
                this.playerSoftwareName = null != i ? i : void 0;
                break;
              case hh.PLAYER_SOFTWARE_VERSION:
                this.playerSoftwareVersion = null != i ? i : void 0;
                break;
              case "src": {
                let e = !!t,
                  a = !!i;
                !e && a
                  ? lS(this, hu, hc).call(this)
                  : e && !a
                    ? this.unload()
                    : e && a && (this.unload(), lS(this, hu, hc).call(this));
                break;
              }
              case "autoplay":
                if (i === t) break;
                null == (a = lA(this, ht)) || a.setAutoplay(this.autoplay);
                break;
              case "preload":
                if (i === t) break;
                null == (r = lA(this, ht)) || r.setPreload(i);
                break;
              case hh.PLAYBACK_ID:
                this.src = iQ(this);
                break;
              case hh.DEBUG: {
                let e = this.debug;
                (this.mux &&
                  console.info(
                    "Cannot toggle debug mode of mux data after initialization. Make sure you set all metadata to override before setting the src.",
                  ),
                  this._hls && (this._hls.config.debug = e));
                break;
              }
              case hh.METADATA_URL:
                i &&
                  fetch(i)
                    .then((e) => e.json())
                    .then((e) => (this.metadata = e))
                    .catch(() =>
                      console.error(
                        `Unable to load or parse metadata JSON from metadata-url ${i}!`,
                      ),
                    );
                break;
              case hh.STREAM_TYPE:
                (null == i || i !== t) &&
                  this.dispatchEvent(
                    new CustomEvent("streamtypechange", {
                      composed: !0,
                      bubbles: !0,
                    }),
                  );
                break;
              case hh.TARGET_LIVE_WINDOW:
                (null == i || i !== t) &&
                  this.dispatchEvent(
                    new CustomEvent("targetlivewindowchange", {
                      composed: !0,
                      bubbles: !0,
                      detail: this.targetLiveWindow,
                    }),
                  );
            }
          }
          connectedCallback() {
            var e;
            (null == (e = super.connectedCallback) || e.call(this),
              this.nativeEl &&
                this.src &&
                !lA(this, ht) &&
                lS(this, hu, hc).call(this));
          }
          disconnectedCallback() {
            this.unload();
          }
        };
      ((ht = new WeakMap()),
        (hi = new WeakMap()),
        (ha = new WeakMap()),
        (hr = new WeakMap()),
        (hn = new WeakMap()),
        (hs = new WeakMap()),
        (ho = new WeakMap()),
        (hl = new WeakMap()),
        (hd = new WeakMap()),
        (hu = new WeakSet()),
        (hc = async function () {
          lA(this, hi) ||
            (await lw(this, hi, Promise.resolve()),
            lw(this, hi, null),
            this.load());
        }));
      var hE,
        hb = class extends cy(c6(hv)) {
          constructor() {
            (super(...arguments), lk(this, hE));
          }
          get muxCastCustomData() {
            return {
              mux: {
                playbackId: this.playbackId,
                minResolution: this.minResolution,
                maxResolution: this.maxResolution,
                renditionOrder: this.renditionOrder,
                customDomain: this.customDomain,
                tokens: { drm: this.drmToken },
                envKey: this.envKey,
                metadata: this.metadata,
                disableCookies: this.disableCookies,
                disableTracking: this.disableTracking,
                beaconCollectionDomain: this.beaconCollectionDomain,
                startTime: this.startTime,
                preferCmcd: this.preferCmcd,
              },
            };
          }
          get castCustomData() {
            var e;
            return null != (e = lA(this, hE)) ? e : this.muxCastCustomData;
          }
          set castCustomData(e) {
            lw(this, hE, e);
          }
        };
      ((hE = new WeakMap()),
        uV.customElements.get("mux-video") ||
          (uV.customElements.define("mux-video", hb),
          (uV.MuxVideoElement = hb)));
      var hf = (e, t, i) => {
          if (!t.has(e)) throw TypeError("Cannot " + i);
        },
        hg = (e, t, i) => (
          hf(e, t, "read from private field"),
          i ? i.call(e) : t.get(e)
        ),
        h_ = (e, t, i) => {
          if (t.has(e))
            throw TypeError(
              "Cannot add the same private member more than once",
            );
          t instanceof WeakSet ? t.add(e) : t.set(e, i);
        },
        hy = (e, t, i, a) => (
          hf(e, t, "write to private field"),
          a ? a.call(e, i) : t.set(e, i),
          i
        );
      let hT = {
        processCallback(e, t, i) {
          if (i) {
            for (let [e, a] of t)
              if (e in i) {
                let t = i[e];
                "boolean" == typeof t &&
                a instanceof hD &&
                "boolean" == typeof a.element[a.attributeName]
                  ? (a.booleanValue = t)
                  : "function" == typeof t && a instanceof hD
                    ? (a.element[a.attributeName] = t)
                    : (a.value = t);
              }
          }
        },
      };
      class hA extends a2.DocumentFragment {
        constructor(e, t, i = hT) {
          var a;
          (super(),
            h_(this, pv, void 0),
            h_(this, pE, void 0),
            this.append(e.content.cloneNode(!0)),
            hy(this, pv, hk(this)),
            hy(this, pE, i),
            null == (a = i.createCallback) || a.call(i, this, hg(this, pv), t),
            i.processCallback(this, hg(this, pv), t));
        }
        update(e) {
          hg(this, pE).processCallback(this, hg(this, pv), e);
        }
      }
      ((pv = new WeakMap()), (pE = new WeakMap()));
      let hk = (e, t = []) => {
          let i, a;
          for (let r of e.attributes || [])
            if (r.value.includes("{{")) {
              let n = new hC();
              for ([i, a] of hS(r.value))
                if (i) {
                  let i = new hD(e, r.name, r.namespaceURI);
                  (n.append(i), t.push([a, i]));
                } else n.append(a);
              r.value = n.toString();
            }
          for (let r of e.childNodes)
            if (1 !== r.nodeType || r instanceof HTMLTemplateElement) {
              let n = r.data;
              if (1 === r.nodeType || n.includes("{{")) {
                let s = [];
                if (n)
                  for ([i, a] of hS(n))
                    if (i) {
                      let i = new hL(e);
                      (s.push(i), t.push([a, i]));
                    } else s.push(new Text(a));
                else if (r instanceof HTMLTemplateElement) {
                  let i = new hM(e, r);
                  (s.push(i), t.push([i.expression, i]));
                }
                r.replaceWith(...s.flatMap((e) => e.replacementNodes || [e]));
              }
            } else hk(r, t);
          return t;
        },
        hw = {},
        hS = (e) => {
          let t = "",
            i = 0,
            a = hw[e],
            r = 0,
            n;
          if (a) return a;
          for (a = []; (n = e[r]); r++)
            "{" === n &&
            "{" === e[r + 1] &&
            "\\" !== e[r - 1] &&
            e[r + 2] &&
            1 == ++i
              ? (t && a.push([0, t]), (t = ""), r++)
              : "}" !== n || "}" !== e[r + 1] || "\\" === e[r - 1] || --i
                ? (t += n || "")
                : (a.push([1, t.trim()]), (t = ""), r++);
          return (t && a.push([0, (i > 0 ? "{{" : "") + t]), (hw[e] = a));
        };
      class hI {
        get value() {
          return "";
        }
        set value(e) {}
        toString() {
          return this.value;
        }
      }
      let hR = new WeakMap();
      class hC {
        constructor() {
          h_(this, pb, []);
        }
        [Symbol.iterator]() {
          return hg(this, pb).values();
        }
        get length() {
          return hg(this, pb).length;
        }
        item(e) {
          return hg(this, pb)[e];
        }
        append(...e) {
          for (let t of e)
            (t instanceof hD && hR.set(t, this), hg(this, pb).push(t));
        }
        toString() {
          return hg(this, pb).join("");
        }
      }
      pb = new WeakMap();
      class hD extends hI {
        constructor(e, t, i) {
          (super(),
            h_(this, pT),
            h_(this, pf, ""),
            h_(this, pg, void 0),
            h_(this, p_, void 0),
            h_(this, py, void 0),
            hy(this, pg, e),
            hy(this, p_, t),
            hy(this, py, i));
        }
        get attributeName() {
          return hg(this, p_);
        }
        get attributeNamespace() {
          return hg(this, py);
        }
        get element() {
          return hg(this, pg);
        }
        get value() {
          return hg(this, pf);
        }
        set value(e) {
          hg(this, pf) !== e &&
            (hy(this, pf, e),
            hg(this, pT, pA) && 1 !== hg(this, pT, pA).length
              ? hg(this, pg).setAttributeNS(
                  hg(this, py),
                  hg(this, p_),
                  hg(this, pT, pA).toString(),
                )
              : null == e
                ? hg(this, pg).removeAttributeNS(hg(this, py), hg(this, p_))
                : hg(this, pg).setAttributeNS(hg(this, py), hg(this, p_), e));
        }
        get booleanValue() {
          return hg(this, pg).hasAttributeNS(hg(this, py), hg(this, p_));
        }
        set booleanValue(e) {
          if (hg(this, pT, pA) && 1 !== hg(this, pT, pA).length)
            throw new DOMException("Value is not fully templatized");
          this.value = e ? "" : null;
        }
      }
      ((pf = new WeakMap()),
        (pg = new WeakMap()),
        (p_ = new WeakMap()),
        (py = new WeakMap()),
        (pT = new WeakSet()),
        (pA = function () {
          return hR.get(this);
        }));
      class hL extends hI {
        constructor(e, t) {
          (super(),
            h_(this, pk, void 0),
            h_(this, pw, void 0),
            hy(this, pk, e),
            hy(this, pw, t ? [...t] : [new Text()]));
        }
        get replacementNodes() {
          return hg(this, pw);
        }
        get parentNode() {
          return hg(this, pk);
        }
        get nextSibling() {
          return hg(this, pw)[hg(this, pw).length - 1].nextSibling;
        }
        get previousSibling() {
          return hg(this, pw)[0].previousSibling;
        }
        get value() {
          return hg(this, pw)
            .map((e) => e.textContent)
            .join("");
        }
        set value(e) {
          this.replace(e);
        }
        replace(...e) {
          let t = e
            .flat()
            .flatMap((e) =>
              null == e
                ? [new Text()]
                : e.forEach
                  ? [...e]
                  : 11 === e.nodeType
                    ? [...e.childNodes]
                    : e.nodeType
                      ? [e]
                      : [new Text(e)],
            );
          (t.length || t.push(new Text()),
            hy(
              this,
              pw,
              (function (e, t, i, a = null) {
                let r = 0,
                  n,
                  s,
                  o,
                  l = i.length,
                  d = t.length;
                for (; r < l && r < d && t[r] == i[r]; ) r++;
                for (; r < l && r < d && i[l - 1] == t[d - 1]; )
                  a = i[(--d, --l)];
                if (r == d) for (; r < l; ) e.insertBefore(i[r++], a);
                if (r == l) for (; r < d; ) e.removeChild(t[r++]);
                else {
                  for (n = t[r]; r < l; )
                    ((o = i[r++]),
                      (s = n ? n.nextSibling : a),
                      n == o
                        ? (n = s)
                        : r < l && i[r] == s
                          ? (e.replaceChild(o, n), (n = s))
                          : e.insertBefore(o, n));
                  for (; n != a; )
                    ((s = n.nextSibling), e.removeChild(n), (n = s));
                }
                return i;
              })(hg(this, pw)[0].parentNode, hg(this, pw), t, this.nextSibling),
            ));
        }
      }
      ((pk = new WeakMap()), (pw = new WeakMap()));
      class hM extends hL {
        constructor(e, t) {
          let i = t.getAttribute("directive") || t.getAttribute("type"),
            a = t.getAttribute("expression") || t.getAttribute(i) || "";
          (a.startsWith("{{") && (a = a.trim().slice(2, -2).trim()),
            super(e),
            (this.expression = a),
            (this.template = t),
            (this.directive = i));
        }
      }
      let hO = { string: (e) => String(e) };
      class hN {
        constructor(e) {
          ((this.template = e), (this.state = void 0));
        }
      }
      let hx = new WeakMap(),
        hP = new WeakMap(),
        hU = {
          partial: (e, t) => {
            t[e.expression] = new hN(e.template);
          },
          if: (e, t) => {
            var i;
            if (hV(e.expression, t))
              if (hx.get(e) !== e.template) {
                hx.set(e, e.template);
                let i = new hA(e.template, t, hW);
                (e.replace(i), hP.set(e, i));
              } else null == (i = hP.get(e)) || i.update(t);
            else (e.replace(""), hx.delete(e), hP.delete(e));
          },
        },
        hB = Object.keys(hU),
        hW = {
          processCallback(e, t, i) {
            var a, r;
            if (i)
              for (let [e, n] of t) {
                if (n instanceof hM) {
                  if (!n.directive) {
                    let e = hB.find((e) => n.template.hasAttribute(e));
                    e &&
                      ((n.directive = e),
                      (n.expression = n.template.getAttribute(e)));
                  }
                  null == (a = hU[n.directive]) || a.call(hU, n, i);
                  continue;
                }
                let t = hV(e, i);
                if (t instanceof hN) {
                  hx.get(n) !== t.template
                    ? (hx.set(n, t.template),
                      (n.value = t = new hA(t.template, t.state, hW)),
                      hP.set(n, t))
                    : null == (r = hP.get(n)) || r.update(t.state);
                  continue;
                }
                t
                  ? (n instanceof hD &&
                      n.attributeName.startsWith("aria-") &&
                      (t = String(t)),
                    n instanceof hD
                      ? "boolean" == typeof t
                        ? (n.booleanValue = t)
                        : "function" == typeof t
                          ? (n.element[n.attributeName] = t)
                          : (n.value = t)
                      : ((n.value = t), hx.delete(n), hP.delete(n)))
                  : n instanceof hD
                    ? (n.value = void 0)
                    : ((n.value = void 0), hx.delete(n), hP.delete(n));
              }
          },
        },
        hH = {
          "!": (e) => !e,
          "!!": (e) => !!e,
          "==": (e, t) => e == t,
          "!=": (e, t) => e != t,
          ">": (e, t) => e > t,
          ">=": (e, t) => e >= t,
          "<": (e, t) => e < t,
          "<=": (e, t) => e <= t,
          "??": (e, t) => (null != e ? e : t),
          "|": (e, t) => {
            var i;
            return null == (i = hO[t]) ? void 0 : i.call(hO, e);
          },
        };
      function hV(e, t = {}) {
        var i, a, r, n, s, o, l;
        let d = (function (e, t) {
          let i,
            a,
            r,
            n = [];
          for (; e; ) {
            for (let n in ((r = null), (i = e.length), t))
              (a = t[n].exec(e)) &&
                a.index < i &&
                ((r = { token: a[0], type: n, matches: a.slice(1) }),
                (i = a.index));
            (i && n.push({ token: e.substr(0, i), type: void 0 }),
              r && n.push(r),
              (e = e.substr(i + (r ? r.token.length : 0))));
          }
          return n;
        })(e, {
          boolean: /true|false/,
          number: /-?\d+\.?\d*/,
          string: /(["'])((?:\\.|[^\\])*?)\1/,
          operator: /[!=><][=!]?|\?\?|\|/,
          ws: /\s+/,
          param: /[$a-z_][$\w]*/i,
        }).filter(({ type: e }) => "ws" !== e);
        if (0 === d.length || d.some(({ type: e }) => !e)) return hF(e);
        if ((null == (i = d[0]) ? void 0 : i.token) === ">") {
          let i = t[null == (a = d[1]) ? void 0 : a.token];
          if (!i) return hF(e);
          let o = { ...t };
          i.state = o;
          let l = d.slice(2);
          for (let e = 0; e < l.length; e += 3) {
            let i = null == (r = l[e]) ? void 0 : r.token,
              a = null == (n = l[e + 1]) ? void 0 : n.token,
              d = null == (s = l[e + 2]) ? void 0 : s.token;
            i && "=" === a && (o[i] = h$(d, t));
          }
          return i;
        }
        if (1 === d.length) return hq(d[0]) ? h$(d[0].token, t) : hF(e);
        if (2 === d.length) {
          let i = hH[null == (o = d[0]) ? void 0 : o.token];
          return i && hq(d[1]) ? i(h$(d[1].token, t)) : hF(e);
        }
        if (3 === d.length) {
          let i = null == (l = d[1]) ? void 0 : l.token,
            a = hH[i];
          if (!a || !hq(d[0]) || !hq(d[2])) return hF(e);
          let r = h$(d[0].token, t);
          return a(r, "|" === i ? d[2].token : h$(d[2].token, t));
        }
      }
      function hF(e) {
        return (console.warn(`Warning: invalid expression \`${e}\``), !1);
      }
      function hq({ type: e }) {
        return ["number", "boolean", "string", "param"].includes(e);
      }
      function h$(e, t) {
        let i = e[0],
          a = e.slice(-1);
        return "true" === e || "false" === e
          ? "true" === e
          : i === a && ["'", '"'].includes(i)
            ? e.slice(1, -1)
            : aU(e)
              ? parseFloat(e)
              : t[e];
      }
      var hK = (e, t, i) => {
          if (!t.has(e)) throw TypeError("Cannot " + i);
        },
        hY = (e, t, i) => (
          hK(e, t, "read from private field"),
          i ? i.call(e) : t.get(e)
        ),
        hG = (e, t, i) => {
          if (t.has(e))
            throw TypeError(
              "Cannot add the same private member more than once",
            );
          t instanceof WeakSet ? t.add(e) : t.set(e, i);
        },
        hj = (e, t, i, a) => (
          hK(e, t, "write to private field"),
          a ? a.call(e, i) : t.set(e, i),
          i
        ),
        hQ = (e, t, i) => (hK(e, t, "access private method"), i);
      let hZ = {
          mediatargetlivewindow: "targetlivewindow",
          mediastreamtype: "streamtype",
        },
        hz = a3.createElement("template");
      hz.innerHTML = `
  <style>
    :host {
      display: inline-block;
      line-height: 0;
    }

    media-controller {
      width: 100%;
      height: 100%;
    }

    media-captions-button:not([mediasubtitleslist]),
    media-captions-menu:not([mediasubtitleslist]),
    media-captions-menu-button:not([mediasubtitleslist]),
    media-audio-track-menu[mediaaudiotrackunavailable],
    media-audio-track-menu-button[mediaaudiotrackunavailable],
    media-rendition-menu[mediarenditionunavailable],
    media-rendition-menu-button[mediarenditionunavailable],
    media-volume-range[mediavolumeunavailable],
    media-airplay-button[mediaairplayunavailable],
    media-fullscreen-button[mediafullscreenunavailable],
    media-cast-button[mediacastunavailable],
    media-pip-button[mediapipunavailable] {
      display: none;
    }
  </style>
`;
      class hX extends a2.HTMLElement {
        constructor() {
          (super(),
            hG(this, pC),
            hG(this, pL),
            hG(this, pS, void 0),
            hG(this, pI, void 0),
            hG(this, pR, void 0),
            this.shadowRoot
              ? (this.renderRoot = this.shadowRoot)
              : ((this.renderRoot = this.attachShadow({ mode: "open" })),
                this.createRenderer()));
          let e = new MutationObserver((e) => {
            var t;
            (!this.mediaController ||
              (null == (t = this.mediaController)
                ? void 0
                : t.breakpointsComputed)) &&
              e.some((e) => {
                let t = e.target;
                return (
                  t === this ||
                  ("media-controller" === t.localName &&
                    !!(
                      hZ[e.attributeName] ||
                      e.attributeName.startsWith("breakpoint")
                    ))
                );
              }) &&
              this.render();
          });
          (e.observe(this, { attributes: !0 }),
            e.observe(this.renderRoot, { attributes: !0, subtree: !0 }),
            this.addEventListener(ak.BREAKPOINTS_COMPUTED, this.render),
            hQ(this, pC, pD).call(this, "template"));
        }
        get mediaController() {
          return this.renderRoot.querySelector("media-controller");
        }
        get template() {
          var e;
          return null != (e = hY(this, pS)) ? e : this.constructor.template;
        }
        set template(e) {
          (hj(this, pR, null), hj(this, pS, e), this.createRenderer());
        }
        get props() {
          var e, t, i;
          let a = [
              ...Array.from(
                null !=
                  (t =
                    null == (e = this.mediaController) ? void 0 : e.attributes)
                  ? t
                  : [],
              ).filter(({ name: e }) => hZ[e] || e.startsWith("breakpoint")),
              ...Array.from(this.attributes),
            ],
            r = {};
          for (let e of a) {
            let t =
                null != (i = hZ[e.name])
                  ? i
                  : e.name.replace(/[-_]([a-z])/g, (e, t) => t.toUpperCase()),
              { value: a } = e;
            null != a
              ? (aU(a) && (a = parseFloat(a)), (r[t] = "" === a || a))
              : (r[t] = !1);
          }
          return r;
        }
        attributeChangedCallback(e, t, i) {
          "template" === e && t != i && hQ(this, pL, pM).call(this);
        }
        connectedCallback() {
          hQ(this, pL, pM).call(this);
        }
        createRenderer() {
          this.template &&
            this.template !== hY(this, pI) &&
            (hj(this, pI, this.template),
            (this.renderer = new hA(
              this.template,
              this.props,
              this.constructor.processor,
            )),
            (this.renderRoot.textContent = ""),
            this.renderRoot.append(hz.content.cloneNode(!0), this.renderer));
        }
        render() {
          var e;
          null == (e = this.renderer) || e.update(this.props);
        }
      }
      async function hJ(e) {
        let t = await fetch(e);
        if (200 !== t.status)
          throw Error(
            `Failed to load resource: the server responded with a status of ${t.status}`,
          );
        return t.text();
      }
      function h0(e) {
        return e.split("-")[0];
      }
      ((pS = new WeakMap()),
        (pI = new WeakMap()),
        (pR = new WeakMap()),
        (pC = new WeakSet()),
        (pD = function (e) {
          if (Object.prototype.hasOwnProperty.call(this, e)) {
            let t = this[e];
            (delete this[e], (this[e] = t));
          }
        }),
        (pL = new WeakSet()),
        (pM = function () {
          var e;
          let t = this.getAttribute("template");
          if (!t || t === hY(this, pR)) return;
          let i = this.getRootNode(),
            a =
              null == (e = null == i ? void 0 : i.getElementById)
                ? void 0
                : e.call(i, t);
          if (a) {
            (hj(this, pR, t), hj(this, pS, a), this.createRenderer());
            return;
          }
          (function (e) {
            if (!/^(\/|\.\/|https?:\/\/)/.test(e)) return !1;
            let t = /^https?:\/\//.test(e) ? void 0 : location.origin;
            try {
              new URL(e, t);
            } catch (e) {
              return !1;
            }
            return !0;
          })(t) &&
            (hj(this, pR, t),
            hJ(t)
              .then((e) => {
                let t = a3.createElement("template");
                ((t.innerHTML = e), hj(this, pS, t), this.createRenderer());
              })
              .catch(console.error));
        }),
        (hX.observedAttributes = ["template"]),
        (hX.processor = hW),
        a2.customElements.get("media-theme") ||
          a2.customElements.define("media-theme", hX));
      class h1 extends Event {
        constructor({ action: e = "auto", relatedTarget: t, ...i }) {
          (super("invoke", i), (this.action = e), (this.relatedTarget = t));
        }
      }
      class h2 extends Event {
        constructor({ newState: e, oldState: t, ...i }) {
          (super("toggle", i), (this.newState = e), (this.oldState = t));
        }
      }
      var h3 = (e, t, i) => {
          if (!t.has(e)) throw TypeError("Cannot " + i);
        },
        h4 = (e, t, i) => (
          h3(e, t, "read from private field"),
          i ? i.call(e) : t.get(e)
        ),
        h5 = (e, t, i) => {
          if (t.has(e))
            throw TypeError(
              "Cannot add the same private member more than once",
            );
          t instanceof WeakSet ? t.add(e) : t.set(e, i);
        },
        h9 = (e, t, i, a) => (
          h3(e, t, "write to private field"),
          a ? a.call(e, i) : t.set(e, i),
          i
        ),
        h8 = (e, t, i) => (h3(e, t, "access private method"), i);
      function h6({ type: e, text: t, value: i, checked: a }) {
        let r = a3.createElement("media-chrome-menu-item");
        ((r.type = null != e ? e : ""),
          r.part.add("menu-item"),
          e && r.part.add(e),
          (r.value = i),
          (r.checked = a));
        let n = a3.createElement("span");
        return ((n.textContent = t), r.append(n), r);
      }
      function h7(e, t) {
        let i = e.querySelector(`:scope > [slot="${t}"]`);
        if (
          ((null == i ? void 0 : i.nodeName) == "SLOT" &&
            (i = i.assignedElements({ flatten: !0 })[0]),
          i)
        )
          return i.cloneNode(!0);
        let a = e.shadowRoot.querySelector(`[name="${t}"] > svg`);
        return a ? a.cloneNode(!0) : "";
      }
      let me = a3.createElement("template");
      me.innerHTML = `
  <style>
    :host {
      font: var(--media-font,
        var(--media-font-weight, normal)
        var(--media-font-size, 14px) /
        var(--media-text-content-height, var(--media-control-height, 24px))
        var(--media-font-family, helvetica neue, segoe ui, roboto, arial, sans-serif));
      color: var(--media-text-color, var(--media-primary-color, rgb(238 238 238)));
      --_menu-bg: rgb(20 20 30 / .8);
      background: var(--media-menu-background, var(--media-control-background, var(--media-secondary-color, var(--_menu-bg))));
      border-radius: var(--media-menu-border-radius);
      border: var(--media-menu-border, none);
      display: var(--media-menu-display, inline-flex);
      transition: var(--media-menu-transition-in,
        visibility 0s,
        opacity .2s ease-out,
        transform .15s ease-out,
        left .2s ease-in-out,
        min-width .2s ease-in-out,
        min-height .2s ease-in-out
      ) !important;
      
      visibility: var(--media-menu-visibility, visible);
      opacity: var(--media-menu-opacity, 1);
      max-height: var(--media-menu-max-height, var(--_menu-max-height, 300px));
      transform: var(--media-menu-transform-in, translateY(0) scale(1));
      flex-direction: column;
      
      min-height: 0;
      position: relative;
      bottom: var(--_menu-bottom);
      box-sizing: border-box;
    } 

    @-moz-document url-prefix() {
      :host{
        --_menu-bg: rgb(20 20 30);
      }
    }

    :host([hidden]) {
      transition: var(--media-menu-transition-out,
        visibility .15s ease-in,
        opacity .15s ease-in,
        transform .15s ease-in
      ) !important;
      visibility: var(--media-menu-hidden-visibility, hidden);
      opacity: var(--media-menu-hidden-opacity, 0);
      max-height: var(--media-menu-hidden-max-height,
        var(--media-menu-max-height, var(--_menu-max-height, 300px)));
      transform: var(--media-menu-transform-out, translateY(2px) scale(.99));
      pointer-events: none;
    }

    :host([slot="submenu"]) {
      background: none;
      width: 100%;
      min-height: 100%;
      position: absolute;
      bottom: 0;
      right: -100%;
    }

    #container {
      display: flex;
      flex-direction: column;
      min-height: 0;
      transition: transform .2s ease-out;
      transform: translate(0, 0);
    }

    #container.has-expanded {
      transition: transform .2s ease-in;
      transform: translate(-100%, 0);
    }

    button {
      background: none;
      color: inherit;
      border: none;
      padding: 0;
      font: inherit;
      outline: inherit;
      display: inline-flex;
      align-items: center;
    }

    slot[name="header"][hidden] {
      display: none;
    }

    slot[name="header"] > *,
    slot[name="header"]::slotted(*) {
      padding: .4em .7em;
      border-bottom: 1px solid rgb(255 255 255 / .25);
      cursor: var(--media-cursor, default);
    }

    slot[name="header"] > button[part~="back"],
    slot[name="header"]::slotted(button[part~="back"]) {
      cursor: var(--media-cursor, pointer);
    }

    svg[part~="back"] {
      height: var(--media-menu-icon-height, var(--media-control-height, 24px));
      fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
      display: block;
      margin-right: .5ch;
    }

    slot:not([name]) {
      gap: var(--media-menu-gap);
      flex-direction: var(--media-menu-flex-direction, column);
      overflow: var(--media-menu-overflow, hidden auto);
      display: flex;
      min-height: 0;
    }

    :host([role="menu"]) slot:not([name]) {
      padding-block: .4em;
    }

    slot:not([name])::slotted([role="menu"]) {
      background: none;
    }

    media-chrome-menu-item > span {
      margin-right: .5ch;
      max-width: var(--media-menu-item-max-width);
      text-overflow: ellipsis;
      overflow: hidden;
    }
  </style>
  <style id="layout-row" media="width:0">

    slot[name="header"] > *,
    slot[name="header"]::slotted(*) {
      padding: .4em .5em;
    }

    slot:not([name]) {
      gap: var(--media-menu-gap, .25em);
      flex-direction: var(--media-menu-flex-direction, row);
      padding-inline: .5em;
    }

    media-chrome-menu-item {
      padding: .3em .5em;
    }

    media-chrome-menu-item[aria-checked="true"] {
      background: var(--media-menu-item-checked-background, rgb(255 255 255 / .2));
    }

    
    media-chrome-menu-item::part(checked-indicator) {
      display: var(--media-menu-item-checked-indicator-display, none);
    }
  </style>
  <div id="container">
    <slot name="header" hidden>
      <button part="back button" aria-label="Back to previous menu">
        <slot name="back-icon">
          <svg aria-hidden="true" viewBox="0 0 20 24" part="back indicator">
            <path d="m11.88 17.585.742-.669-4.2-4.665 4.2-4.666-.743-.669-4.803 5.335 4.803 5.334Z"/>
          </svg>
        </slot>
        <slot name="title"></slot>
      </button>
    </slot>
    <slot></slot>
  </div>
  <slot name="checked-indicator" hidden></slot>
`;
      let mt = {
        STYLE: "style",
        HIDDEN: "hidden",
        DISABLED: "disabled",
        ANCHOR: "anchor",
      };
      class mi extends a2.HTMLElement {
        constructor() {
          (super(),
            h5(this, pH),
            h5(this, pq),
            h5(this, pK),
            h5(this, pG),
            h5(this, pQ),
            h5(this, pJ),
            h5(this, p1),
            h5(this, p3),
            h5(this, p5),
            h5(this, p8),
            h5(this, p7),
            h5(this, vt),
            h5(this, va),
            h5(this, vn),
            h5(this, vo),
            h5(this, vd),
            h5(this, vc),
            h5(this, pO, null),
            h5(this, pN, null),
            h5(this, px, null),
            h5(this, pP, new Set()),
            h5(this, pU, void 0),
            h5(this, pB, !1),
            h5(this, pW, null),
            h5(this, pF, () => {
              let e = h4(this, pP),
                t = new Set(this.items);
              for (let i of e)
                t.has(i) ||
                  this.dispatchEvent(
                    new CustomEvent("removemenuitem", { detail: i }),
                  );
              for (let i of t)
                e.has(i) ||
                  this.dispatchEvent(
                    new CustomEvent("addmenuitem", { detail: i }),
                  );
              h9(this, pP, t);
            }),
            h5(this, pz, () => {
              (h8(this, pJ, p0).call(this), h8(this, p1, p2).call(this, !1));
            }),
            h5(this, pX, () => {
              h8(this, pJ, p0).call(this);
            }),
            this.shadowRoot ||
              (this.attachShadow({ mode: "open" }),
              (this.nativeEl = this.constructor.template.content.cloneNode(!0)),
              this.shadowRoot.append(this.nativeEl)),
            (this.container = this.shadowRoot.querySelector("#container")),
            (this.defaultSlot =
              this.shadowRoot.querySelector("slot:not([name])")),
            this.shadowRoot.addEventListener("slotchange", this),
            h9(this, pU, new MutationObserver(h4(this, pF))),
            h4(this, pU).observe(this.defaultSlot, { childList: !0 }));
        }
        static get observedAttributes() {
          return [
            mt.DISABLED,
            mt.HIDDEN,
            mt.STYLE,
            mt.ANCHOR,
            a_.MEDIA_CONTROLLER,
          ];
        }
        static formatMenuItemText(e, t) {
          return e;
        }
        enable() {
          (this.addEventListener("click", this),
            this.addEventListener("focusout", this),
            this.addEventListener("keydown", this),
            this.addEventListener("invoke", this),
            this.addEventListener("toggle", this));
        }
        disable() {
          (this.removeEventListener("click", this),
            this.removeEventListener("focusout", this),
            this.removeEventListener("keyup", this),
            this.removeEventListener("invoke", this),
            this.removeEventListener("toggle", this));
        }
        handleEvent(e) {
          switch (e.type) {
            case "slotchange":
              h8(this, pH, pV).call(this, e);
              break;
            case "invoke":
              h8(this, pK, pY).call(this, e);
              break;
            case "click":
              h8(this, p3, p4).call(this, e);
              break;
            case "toggle":
              h8(this, p8, p6).call(this, e);
              break;
            case "focusout":
              h8(this, vt, vi).call(this, e);
              break;
            case "keydown":
              h8(this, va, vr).call(this, e);
          }
        }
        connectedCallback() {
          var e, t;
          (h9(this, pW, ru(this.shadowRoot, ":host")),
            h8(this, pq, p$).call(this),
            this.hasAttribute("disabled") || this.enable(),
            this.role || (this.role = "menu"),
            h9(this, pO, re(this)),
            null ==
              (t = null == (e = h4(this, pO)) ? void 0 : e.associateElement) ||
              t.call(e, this),
            this.hidden ||
              (a8(mr(this), h4(this, pz)), a8(this, h4(this, pX))));
        }
        disconnectedCallback() {
          var e, t;
          (a6(mr(this), h4(this, pz)),
            a6(this, h4(this, pX)),
            this.disable(),
            null ==
              (t =
                null == (e = h4(this, pO)) ? void 0 : e.unassociateElement) ||
              t.call(e, this),
            h9(this, pO, null));
        }
        attributeChangedCallback(e, t, i) {
          var a, r, n, s;
          e === mt.HIDDEN && i !== t
            ? (h4(this, pB) || h9(this, pB, !0),
              this.hidden
                ? h8(this, pQ, pZ).call(this)
                : h8(this, pG, pj).call(this),
              this.dispatchEvent(
                new h2({
                  oldState: this.hidden ? "open" : "closed",
                  newState: this.hidden ? "closed" : "open",
                  bubbles: !0,
                }),
              ))
            : e === a_.MEDIA_CONTROLLER
              ? (t &&
                  (null ==
                    (r =
                      null == (a = h4(this, pO))
                        ? void 0
                        : a.unassociateElement) || r.call(a, this),
                  h9(this, pO, null)),
                i &&
                  this.isConnected &&
                  (h9(this, pO, re(this)),
                  null ==
                    (s =
                      null == (n = h4(this, pO))
                        ? void 0
                        : n.associateElement) || s.call(n, this)))
              : e === mt.DISABLED && i !== t
                ? null == i
                  ? this.enable()
                  : this.disable()
                : e === mt.STYLE && i !== t && h8(this, pq, p$).call(this);
        }
        formatMenuItemText(e, t) {
          return this.constructor.formatMenuItemText(e, t);
        }
        get anchor() {
          return this.getAttribute("anchor");
        }
        set anchor(e) {
          this.setAttribute("anchor", `${e}`);
        }
        get anchorElement() {
          var e;
          return this.anchor
            ? null == (e = ro(this))
              ? void 0
              : e.querySelector(`#${this.anchor}`)
            : null;
        }
        get items() {
          return this.defaultSlot.assignedElements({ flatten: !0 }).filter(ma);
        }
        get radioGroupItems() {
          return this.items.filter((e) => "menuitemradio" === e.role);
        }
        get checkedItems() {
          return this.items.filter((e) => e.checked);
        }
        get value() {
          var e, t;
          return null !=
            (t = null == (e = this.checkedItems[0]) ? void 0 : e.value)
            ? t
            : "";
        }
        set value(e) {
          let t = this.items.find((t) => t.value === e);
          t && h8(this, vc, vh).call(this, t);
        }
        focus() {
          if ((h9(this, pN, rs()), this.items.length)) {
            (h8(this, vd, vu).call(this, this.items[0]), this.items[0].focus());
            return;
          }
          let e = this.querySelector(
            '[autofocus], [tabindex]:not([tabindex="-1"]), [role="menu"]',
          );
          null == e || e.focus();
        }
        handleSelect(e) {
          var t;
          let i = h8(this, vn, vs).call(this, e);
          i &&
            (h8(this, vc, vh).call(this, i, "checkbox" === i.type),
            h4(this, px) &&
              !this.hidden &&
              (null == (t = h4(this, pN)) || t.focus(), (this.hidden = !0)));
        }
        get keysUsed() {
          return [
            "Enter",
            "Escape",
            "Tab",
            " ",
            "ArrowDown",
            "ArrowUp",
            "Home",
            "End",
          ];
        }
        handleMove(e) {
          var t, i;
          let { key: a } = e,
            r = this.items,
            n =
              null !=
              (i =
                null != (t = h8(this, vn, vs).call(this, e))
                  ? t
                  : h8(this, vo, vl).call(this))
                ? i
                : r[0],
            s = Math.max(0, r.indexOf(n));
          ("ArrowDown" === a
            ? s++
            : "ArrowUp" === a
              ? s--
              : "Home" === e.key
                ? (s = 0)
                : "End" === e.key && (s = r.length - 1),
            s < 0 && (s = r.length - 1),
            s > r.length - 1 && (s = 0),
            h8(this, vd, vu).call(this, r[s]),
            r[s].focus());
        }
      }
      function ma(e) {
        return ["menuitem", "menuitemradio", "menuitemcheckbox"].includes(
          null == e ? void 0 : e.role,
        );
      }
      function mr(e) {
        var t;
        return null !=
          (t = e.getAttribute("bounds")
            ? rn(e, `#${e.getAttribute("bounds")}`)
            : a7(e) || e.parentElement)
          ? t
          : e;
      }
      ((pO = new WeakMap()),
        (pN = new WeakMap()),
        (px = new WeakMap()),
        (pP = new WeakMap()),
        (pU = new WeakMap()),
        (pB = new WeakMap()),
        (pW = new WeakMap()),
        (pH = new WeakSet()),
        (pV = function (e) {
          let t = e.target;
          for (let e of t.assignedNodes({ flatten: !0 }))
            3 === e.nodeType && "" === e.textContent.trim() && e.remove();
          (["header", "title"].includes(t.name) &&
            (this.shadowRoot.querySelector('slot[name="header"]').hidden =
              0 === t.assignedNodes().length),
            t.name || h4(this, pF).call(this));
        }),
        (pF = new WeakMap()),
        (pq = new WeakSet()),
        (p$ = function () {
          var e;
          let t = this.shadowRoot.querySelector("#layout-row"),
            i =
              null ==
              (e = getComputedStyle(this).getPropertyValue(
                "--media-menu-layout",
              ))
                ? void 0
                : e.trim();
          t.setAttribute("media", "row" === i ? "" : "width:0");
        }),
        (pK = new WeakSet()),
        (pY = function (e) {
          (h9(this, px, e.relatedTarget),
            rr(this, e.relatedTarget) || (this.hidden = !this.hidden));
        }),
        (pG = new WeakSet()),
        (pj = function () {
          var e;
          (null == (e = h4(this, px)) ||
            e.setAttribute("aria-expanded", "true"),
            this.addEventListener("transitionend", () => this.focus(), {
              once: !0,
            }),
            a8(mr(this), h4(this, pz)),
            a8(this, h4(this, pX)));
        }),
        (pQ = new WeakSet()),
        (pZ = function () {
          var e;
          (null == (e = h4(this, px)) ||
            e.setAttribute("aria-expanded", "false"),
            a6(mr(this), h4(this, pz)),
            a6(this, h4(this, pX)));
        }),
        (pz = new WeakMap()),
        (pX = new WeakMap()),
        (pJ = new WeakSet()),
        (p0 = function (e) {
          if (
            (this.hasAttribute("mediacontroller") && !this.anchor) ||
            this.hidden ||
            !this.anchorElement
          )
            return;
          let { x: t, y: i } = (function ({
            anchor: e,
            floating: t,
            placement: i,
          }) {
            let { x: a, y: r } = (function ({ anchor: e, floating: t }, i) {
              let a,
                r =
                  "x" == (["top", "bottom"].includes(h0(i)) ? "y" : "x")
                    ? "y"
                    : "x",
                n = "y" === r ? "height" : "width",
                s = h0(i),
                o = e.x + e.width / 2 - t.width / 2,
                l = e.y + e.height / 2 - t.height / 2,
                d = e[n] / 2 - t[n] / 2;
              switch (s) {
                case "top":
                  a = { x: o, y: e.y - t.height };
                  break;
                case "bottom":
                  a = { x: o, y: e.y + e.height };
                  break;
                case "right":
                  a = { x: e.x + e.width, y: l };
                  break;
                case "left":
                  a = { x: e.x - t.width, y: l };
                  break;
                default:
                  a = { x: e.x, y: e.y };
              }
              switch (i.split("-")[1]) {
                case "start":
                  a[r] -= d;
                  break;
                case "end":
                  a[r] += d;
              }
              return a;
            })(
              (function ({ anchor: e, floating: t }) {
                return {
                  anchor: (function (e, t) {
                    var i;
                    let a = e.getBoundingClientRect(),
                      r =
                        null !=
                        (i = null == t ? void 0 : t.getBoundingClientRect())
                          ? i
                          : { x: 0, y: 0 };
                    return {
                      x: a.x - r.x,
                      y: a.y - r.y,
                      width: a.width,
                      height: a.height,
                    };
                  })(e, t.offsetParent),
                  floating: {
                    x: 0,
                    y: 0,
                    width: t.offsetWidth,
                    height: t.offsetHeight,
                  },
                };
              })({ anchor: e, floating: t }),
              i,
            );
            return { x: a, y: r };
          })({
            anchor: this.anchorElement,
            floating: this,
            placement: "top-start",
          });
          null != e || (e = this.offsetWidth);
          let a = mr(this).getBoundingClientRect(),
            r = a.width - t - e,
            n = a.height - i - this.offsetHeight,
            { style: s } = h4(this, pW);
          (s.setProperty("position", "absolute"),
            s.setProperty("right", `${Math.max(0, r)}px`),
            s.setProperty("--_menu-bottom", `${n}px`));
          let o = getComputedStyle(this),
            l =
              s.getPropertyValue("--_menu-bottom") === o.bottom
                ? n
                : parseFloat(o.bottom),
            d = a.height - l - parseFloat(o.marginBottom);
          this.style.setProperty("--_menu-max-height", `${d}px`);
        }),
        (p1 = new WeakSet()),
        (p2 = function (e) {
          let t = this.querySelector(
              '[role="menuitem"][aria-haspopup][aria-expanded="true"]',
            ),
            i = null == t ? void 0 : t.querySelector('[role="menu"]'),
            { style: a } = h4(this, pW);
          if ((e || a.setProperty("--media-menu-transition-in", "none"), i)) {
            let e = i.offsetHeight,
              a = Math.max(i.offsetWidth, t.offsetWidth);
            (this.style.setProperty("min-width", `${a}px`),
              this.style.setProperty("min-height", `${e}px`),
              h8(this, pJ, p0).call(this, a));
          } else
            (this.style.removeProperty("min-width"),
              this.style.removeProperty("min-height"),
              h8(this, pJ, p0).call(this));
          a.removeProperty("--media-menu-transition-in");
        }),
        (p3 = new WeakSet()),
        (p4 = function (e) {
          var t;
          if (
            (e.stopPropagation(), e.composedPath().includes(h4(this, p5, p9)))
          ) {
            (null == (t = h4(this, pN)) || t.focus(), (this.hidden = !0));
            return;
          }
          let i = h8(this, vn, vs).call(this, e);
          !i ||
            i.hasAttribute("disabled") ||
            (h8(this, vd, vu).call(this, i), this.handleSelect(e));
        }),
        (p5 = new WeakSet()),
        (p9 = function () {
          var e;
          return null ==
            (e = this.shadowRoot
              .querySelector('slot[name="header"]')
              .assignedElements({ flatten: !0 }))
            ? void 0
            : e.find((e) => e.matches('button[part~="back"]'));
        }),
        (p8 = new WeakSet()),
        (p6 = function (e) {
          if (e.target === this) return;
          h8(this, p7, ve).call(this);
          let t = Array.from(
            this.querySelectorAll('[role="menuitem"][aria-haspopup]'),
          );
          for (let i of t)
            i.invokeTargetElement != e.target &&
              ("open" != e.newState ||
                "true" != i.getAttribute("aria-expanded") ||
                i.invokeTargetElement.hidden ||
                i.invokeTargetElement.dispatchEvent(
                  new h1({ relatedTarget: i }),
                ));
          for (let e of t)
            e.setAttribute("aria-expanded", `${!e.submenuElement.hidden}`);
          h8(this, p1, p2).call(this, !0);
        }),
        (p7 = new WeakSet()),
        (ve = function () {
          let e = this.querySelector(
            '[role="menuitem"] > [role="menu"]:not([hidden])',
          );
          this.container.classList.toggle("has-expanded", !!e);
        }),
        (vt = new WeakSet()),
        (vi = function (e) {
          var t;
          rr(this, e.relatedTarget) ||
            (h4(this, pB) && (null == (t = h4(this, pN)) || t.focus()),
            h4(this, px) &&
              h4(this, px) !== e.relatedTarget &&
              !this.hidden &&
              (this.hidden = !0));
        }),
        (va = new WeakSet()),
        (vr = function (e) {
          var t, i, a, r, n;
          let { key: s, ctrlKey: o, altKey: l, metaKey: d } = e;
          if (!o && !l && !d && this.keysUsed.includes(s))
            if ((e.preventDefault(), e.stopPropagation(), "Tab" === s)) {
              if (h4(this, pB)) {
                this.hidden = !0;
                return;
              }
              (e.shiftKey
                ? null ==
                    (i =
                      null == (t = this.previousElementSibling)
                        ? void 0
                        : t.focus) || i.call(t)
                : null ==
                    (r =
                      null == (a = this.nextElementSibling)
                        ? void 0
                        : a.focus) || r.call(a),
                this.blur());
            } else
              "Escape" === s
                ? (null == (n = h4(this, pN)) || n.focus(),
                  h4(this, pB) && (this.hidden = !0))
                : "Enter" === s || " " === s
                  ? this.handleSelect(e)
                  : this.handleMove(e);
        }),
        (vn = new WeakSet()),
        (vs = function (e) {
          return e
            .composedPath()
            .find((e) =>
              ["menuitemradio", "menuitemcheckbox"].includes(e.role),
            );
        }),
        (vo = new WeakSet()),
        (vl = function () {
          return this.items.find((e) => 0 === e.tabIndex);
        }),
        (vd = new WeakSet()),
        (vu = function (e) {
          for (let t of this.items) t.tabIndex = t === e ? 0 : -1;
        }),
        (vc = new WeakSet()),
        (vh = function (e, t) {
          let i = [...this.checkedItems];
          ("radio" === e.type &&
            this.radioGroupItems.forEach((e) => (e.checked = !1)),
            t ? (e.checked = !e.checked) : (e.checked = !0),
            this.checkedItems.some((e, t) => e != i[t]) &&
              this.dispatchEvent(
                new Event("change", { bubbles: !0, composed: !0 }),
              ));
        }),
        (mi.template = me),
        a2.customElements.get("media-chrome-menu") ||
          a2.customElements.define("media-chrome-menu", mi));
      var mn = (e, t, i) => {
          if (!t.has(e)) throw TypeError("Cannot " + i);
        },
        ms = (e, t, i) => (
          mn(e, t, "read from private field"),
          i ? i.call(e) : t.get(e)
        ),
        mo = (e, t, i) => {
          if (t.has(e))
            throw TypeError(
              "Cannot add the same private member more than once",
            );
          t instanceof WeakSet ? t.add(e) : t.set(e, i);
        },
        ml = (e, t, i, a) => (
          mn(e, t, "write to private field"),
          a ? a.call(e, i) : t.set(e, i),
          i
        ),
        md = (e, t, i) => (mn(e, t, "access private method"), i);
      let mu = a3.createElement("template");
      mu.innerHTML = `
  <style>
    :host {
      transition: var(--media-menu-item-transition,
        background .15s linear,
        opacity .2s ease-in-out
      );
      outline: var(--media-menu-item-outline, 0);
      outline-offset: var(--media-menu-item-outline-offset, -1px);
      cursor: var(--media-cursor, pointer);
      display: flex;
      align-items: center;
      align-self: stretch;
      justify-self: stretch;
      white-space: nowrap;
      white-space-collapse: collapse;
      text-wrap: nowrap;
      padding: .4em .8em .4em 1em;
    }

    :host(:focus-visible) {
      box-shadow: var(--media-menu-item-focus-shadow, inset 0 0 0 2px rgb(27 127 204 / .9));
      outline: var(--media-menu-item-hover-outline, 0);
      outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
    }

    :host(:hover) {
      cursor: var(--media-cursor, pointer);
      background: var(--media-menu-item-hover-background, rgb(92 92 102 / .5));
      outline: var(--media-menu-item-hover-outline);
      outline-offset: var(--media-menu-item-hover-outline-offset,  var(--media-menu-item-outline-offset, -1px));
    }

    :host([aria-checked="true"]) {
      background: var(--media-menu-item-checked-background);
    }

    :host([hidden]) {
      display: none;
    }

    :host([disabled]) {
      pointer-events: none;
      color: rgba(255, 255, 255, .3);
    }

    slot:not([name]) {
      width: 100%;
    }

    slot:not([name="submenu"]) {
      display: inline-flex;
      align-items: center;
      transition: inherit;
      opacity: var(--media-menu-item-opacity, 1);
    }

    slot[name="description"] {
      justify-content: end;
    }

    slot[name="description"] > span {
      display: inline-block;
      margin-inline: 1em .2em;
      max-width: var(--media-menu-item-description-max-width, 100px);
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: .8em;
      font-weight: 400;
      text-align: right;
      position: relative;
      top: .04em;
    }

    slot[name="checked-indicator"] {
      display: none;
    }

    :host(:is([role="menuitemradio"],[role="menuitemcheckbox"])) slot[name="checked-indicator"] {
      display: var(--media-menu-item-checked-indicator-display, inline-block);
    }

    
    svg, img, ::slotted(svg), ::slotted(img) {
      height: var(--media-menu-item-icon-height, var(--media-control-height, 24px));
      fill: var(--media-icon-color, var(--media-primary-color, rgb(238 238 238)));
      display: block;
    }

    
    [part~="indicator"],
    ::slotted([part~="indicator"]) {
      fill: var(--media-menu-item-indicator-fill,
        var(--media-icon-color, var(--media-primary-color, rgb(238 238 238))));
      height: var(--media-menu-item-indicator-height, 1.25em);
      margin-right: .5ch;
    }

    [part~="checked-indicator"] {
      visibility: hidden;
    }

    :host([aria-checked="true"]) [part~="checked-indicator"] {
      visibility: visible;
    }
  </style>
  <slot name="checked-indicator">
    <svg aria-hidden="true" viewBox="0 1 24 24" part="checked-indicator indicator">
      <path d="m10 15.17 9.193-9.191 1.414 1.414-10.606 10.606-6.364-6.364 1.414-1.414 4.95 4.95Z"/>
    </svg>
  </slot>
  <slot name="prefix"></slot>
  <slot></slot>
  <slot name="description"></slot>
  <slot name="suffix"></slot>
  <slot name="submenu"></slot>
`;
      let mc = {
        TYPE: "type",
        VALUE: "value",
        CHECKED: "checked",
        DISABLED: "disabled",
      };
      class mh extends a2.HTMLElement {
        constructor() {
          (super(),
            mo(this, vv),
            mo(this, vb),
            mo(this, vg),
            mo(this, vT),
            mo(this, vk),
            mo(this, vS),
            mo(this, vm, !1),
            mo(this, vp, void 0),
            mo(this, vy, () => {
              var e, t;
              this.setAttribute(
                "submenusize",
                `${this.submenuElement.items.length}`,
              );
              let i = this.shadowRoot.querySelector('slot[name="description"]'),
                a =
                  null == (e = this.submenuElement.checkedItems)
                    ? void 0
                    : e[0],
                r =
                  null != (t = null == a ? void 0 : a.dataset.description)
                    ? t
                    : null == a
                      ? void 0
                      : a.text,
                n = a3.createElement("span");
              ((n.textContent = null != r ? r : ""), i.replaceChildren(n));
            }),
            this.shadowRoot ||
              (this.attachShadow({ mode: "open" }),
              this.shadowRoot.append(
                this.constructor.template.content.cloneNode(!0),
              )),
            this.shadowRoot.addEventListener("slotchange", this));
        }
        static get observedAttributes() {
          return [mc.TYPE, mc.DISABLED, mc.CHECKED, mc.VALUE];
        }
        enable() {
          (this.hasAttribute("tabindex") || this.setAttribute("tabindex", "-1"),
            mm(this) &&
              !this.hasAttribute("aria-checked") &&
              this.setAttribute("aria-checked", "false"),
            this.addEventListener("click", this),
            this.addEventListener("keydown", this));
        }
        disable() {
          (this.removeAttribute("tabindex"),
            this.removeEventListener("click", this),
            this.removeEventListener("keydown", this),
            this.removeEventListener("keyup", this));
        }
        handleEvent(e) {
          switch (e.type) {
            case "slotchange":
              md(this, vv, vE).call(this, e);
              break;
            case "click":
              this.handleClick(e);
              break;
            case "keydown":
              md(this, vk, vw).call(this, e);
              break;
            case "keyup":
              md(this, vT, vA).call(this, e);
          }
        }
        attributeChangedCallback(e, t, i) {
          e === mc.CHECKED && mm(this) && !ms(this, vm)
            ? this.setAttribute("aria-checked", null != i ? "true" : "false")
            : e === mc.TYPE && i !== t
              ? (this.role = "menuitem" + i)
              : e === mc.DISABLED &&
                i !== t &&
                (null == i ? this.enable() : this.disable());
        }
        connectedCallback() {
          (this.hasAttribute(mc.DISABLED) || this.enable(),
            (this.role = "menuitem" + this.type),
            ml(
              this,
              vp,
              (function e(t, i) {
                if (!t) return null;
                let { host: a } = t.getRootNode();
                return !i && a
                  ? e(t, a)
                  : (null == i ? void 0 : i.items)
                    ? i
                    : e(i, null == i ? void 0 : i.parentNode);
              })(this, this.parentNode),
            ),
            md(this, vS, vI).call(this));
        }
        disconnectedCallback() {
          (this.disable(), md(this, vS, vI).call(this), ml(this, vp, null));
        }
        get invokeTarget() {
          return this.getAttribute("invoketarget");
        }
        set invokeTarget(e) {
          this.setAttribute("invoketarget", `${e}`);
        }
        get invokeTargetElement() {
          var e;
          return this.invokeTarget
            ? null == (e = ro(this))
              ? void 0
              : e.querySelector(`#${this.invokeTarget}`)
            : this.submenuElement;
        }
        get submenuElement() {
          return this.shadowRoot
            .querySelector('slot[name="submenu"]')
            .assignedElements({ flatten: !0 })[0];
        }
        get type() {
          var e;
          return null != (e = this.getAttribute(mc.TYPE)) ? e : "";
        }
        set type(e) {
          this.setAttribute(mc.TYPE, `${e}`);
        }
        get value() {
          var e;
          return null != (e = this.getAttribute(mc.VALUE)) ? e : this.text;
        }
        set value(e) {
          this.setAttribute(mc.VALUE, e);
        }
        get text() {
          var e;
          return (null != (e = this.textContent) ? e : "").trim();
        }
        get checked() {
          if (mm(this)) return "true" === this.getAttribute("aria-checked");
        }
        set checked(e) {
          mm(this) &&
            (ml(this, vm, !0),
            this.setAttribute("aria-checked", e ? "true" : "false"),
            e ? this.part.add("checked") : this.part.remove("checked"));
        }
        handleClick(e) {
          !mm(this) &&
            this.invokeTargetElement &&
            rr(this, e.target) &&
            this.invokeTargetElement.dispatchEvent(
              new h1({ relatedTarget: this }),
            );
        }
        get keysUsed() {
          return ["Enter", " "];
        }
      }
      function mm(e) {
        return "radio" === e.type || "checkbox" === e.type;
      }
      ((vm = new WeakMap()),
        (vp = new WeakMap()),
        (vv = new WeakSet()),
        (vE = function (e) {
          let t = e.target;
          if (!(null == t ? void 0 : t.name))
            for (let e of t.assignedNodes({ flatten: !0 }))
              e instanceof Text && "" === e.textContent.trim() && e.remove();
          "submenu" === t.name &&
            (this.submenuElement
              ? md(this, vb, vf).call(this)
              : md(this, vg, v_).call(this));
        }),
        (vb = new WeakSet()),
        (vf = async function () {
          (this.setAttribute("aria-haspopup", "menu"),
            this.setAttribute(
              "aria-expanded",
              `${!this.submenuElement.hidden}`,
            ),
            this.submenuElement.addEventListener("change", ms(this, vy)),
            this.submenuElement.addEventListener("addmenuitem", ms(this, vy)),
            this.submenuElement.addEventListener(
              "removemenuitem",
              ms(this, vy),
            ),
            ms(this, vy).call(this));
        }),
        (vg = new WeakSet()),
        (v_ = function () {
          (this.removeAttribute("aria-haspopup"),
            this.removeAttribute("aria-expanded"),
            this.submenuElement.removeEventListener("change", ms(this, vy)),
            this.submenuElement.removeEventListener(
              "addmenuitem",
              ms(this, vy),
            ),
            this.submenuElement.removeEventListener(
              "removemenuitem",
              ms(this, vy),
            ),
            ms(this, vy).call(this));
        }),
        (vy = new WeakMap()),
        (vT = new WeakSet()),
        (vA = function (e) {
          let { key: t } = e;
          if (!this.keysUsed.includes(t))
            return void this.removeEventListener("keyup", md(this, vT, vA));
          this.handleClick(e);
        }),
        (vk = new WeakSet()),
        (vw = function (e) {
          let { metaKey: t, altKey: i, key: a } = e;
          if (t || i || !this.keysUsed.includes(a))
            return void this.removeEventListener("keyup", md(this, vT, vA));
          this.addEventListener("keyup", md(this, vT, vA), { once: !0 });
        }),
        (vS = new WeakSet()),
        (vI = function () {
          var e;
          let t = null == (e = ms(this, vp)) ? void 0 : e.radioGroupItems;
          if (!t) return;
          let i = t
            .filter((e) => "true" === e.getAttribute("aria-checked"))
            .pop();
          for (let e of (i || (i = t[0]), t))
            e.setAttribute("aria-checked", "false");
          null == i || i.setAttribute("aria-checked", "true");
        }),
        (mh.template = mu),
        a2.customElements.get("media-chrome-menu-item") ||
          a2.customElements.define("media-chrome-menu-item", mh));
      let mp = a3.createElement("template");
      mp.innerHTML =
        mi.template.innerHTML +
        `
  <style>
    :host {
      --_menu-bg: rgb(20 20 30 / .8);
      background: var(--media-settings-menu-background,
          var(--media-menu-background,
            var(--media-control-background,
              var(--media-secondary-color, var(--_menu-bg)))));
      min-width: var(--media-settings-menu-min-width, 170px);
      border-radius: 2px 2px 0 0;
      overflow: hidden;
    }

    @-moz-document url-prefix() {
      :host{
        --_menu-bg: rgb(20 20 30);
      }
    }

    :host([role="menu"]) {
      
      justify-content: end;
    }

    slot:not([name]) {
      justify-content: var(--media-settings-menu-justify-content);
      flex-direction: var(--media-settings-menu-flex-direction, column);
      overflow: visible;
    }

    #container.has-expanded {
      --media-settings-menu-item-opacity: 0;
    }
  </style>
`;
      class mv extends mi {
        get anchorElement() {
          return "auto" !== this.anchor
            ? super.anchorElement
            : a7(this).querySelector("media-settings-menu-button");
        }
      }
      ((mv.template = mp),
        a2.customElements.get("media-settings-menu") ||
          a2.customElements.define("media-settings-menu", mv));
      let mE = a3.createElement("template");
      ((mE.innerHTML =
        mh.template.innerHTML +
        `
  <style>
    slot:not([name="submenu"]) {
      opacity: var(--media-settings-menu-item-opacity, var(--media-menu-item-opacity));
    }

    :host([aria-expanded="true"]:hover) {
      background: transparent;
    }
  </style>
`),
        (null == (vR = mE.content) ? void 0 : vR.querySelector) &&
          (mE.content.querySelector('slot[name="suffix"]').innerHTML = `
    <svg aria-hidden="true" viewBox="0 0 20 24">
      <path d="m8.12 17.585-.742-.669 4.2-4.665-4.2-4.666.743-.669 4.803 5.335-4.803 5.334Z"/>
    </svg>
  `));
      class mb extends mh {}
      ((mb.template = mE),
        a2.customElements.get("media-settings-menu-item") ||
          a2.customElements.define("media-settings-menu-item", mb));
      class mf extends nF {
        connectedCallback() {
          (super.connectedCallback(),
            this.invokeTargetElement &&
              this.setAttribute("aria-haspopup", "menu"));
        }
        get invokeTarget() {
          return this.getAttribute("invoketarget");
        }
        set invokeTarget(e) {
          this.setAttribute("invoketarget", `${e}`);
        }
        get invokeTargetElement() {
          var e;
          return this.invokeTarget
            ? null == (e = ro(this))
              ? void 0
              : e.querySelector(`#${this.invokeTarget}`)
            : null;
        }
        handleClick() {
          var e;
          null == (e = this.invokeTargetElement) ||
            e.dispatchEvent(new h1({ relatedTarget: this }));
        }
      }
      a2.customElements.get("media-chrome-menu-button") ||
        a2.customElements.define("media-chrome-menu-button", mf);
      let mg = a3.createElement("template");
      mg.innerHTML = `
  <style>
    :host([aria-expanded="true"]) slot[name=tooltip] {
      display: none;
    }
  </style>
  <slot name="icon">
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M4.5 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7.5 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
    </svg>
  </slot>
`;
      class m_ extends mf {
        static get observedAttributes() {
          return [...super.observedAttributes, "target"];
        }
        constructor() {
          super({ slotTemplate: mg, tooltipContent: aG("Settings") });
        }
        connectedCallback() {
          (super.connectedCallback(),
            this.setAttribute("aria-label", aG("settings")));
        }
        get invokeTargetElement() {
          return void 0 != this.invokeTarget
            ? super.invokeTargetElement
            : a7(this).querySelector("media-settings-menu");
        }
      }
      a2.customElements.get("media-settings-menu-button") ||
        a2.customElements.define("media-settings-menu-button", m_);
      var my = (e, t, i) => {
          if (!t.has(e)) throw TypeError("Cannot " + i);
        },
        mT = (e, t, i) => (
          my(e, t, "read from private field"),
          i ? i.call(e) : t.get(e)
        ),
        mA = (e, t, i) => {
          if (t.has(e))
            throw TypeError(
              "Cannot add the same private member more than once",
            );
          t instanceof WeakSet ? t.add(e) : t.set(e, i);
        },
        mk = (e, t, i, a) => (
          my(e, t, "write to private field"),
          a ? a.call(e, i) : t.set(e, i),
          i
        ),
        mw = (e, t, i) => (my(e, t, "access private method"), i);
      class mS extends mi {
        constructor() {
          (super(...arguments),
            mA(this, vL),
            mA(this, vO),
            mA(this, vC, []),
            mA(this, vD, void 0));
        }
        static get observedAttributes() {
          return [
            ...super.observedAttributes,
            aA.MEDIA_AUDIO_TRACK_LIST,
            aA.MEDIA_AUDIO_TRACK_ENABLED,
            aA.MEDIA_AUDIO_TRACK_UNAVAILABLE,
          ];
        }
        attributeChangedCallback(e, t, i) {
          if (
            (super.attributeChangedCallback(e, t, i),
            e === aA.MEDIA_AUDIO_TRACK_ENABLED && t !== i)
          )
            this.value = i;
          else if (e === aA.MEDIA_AUDIO_TRACK_LIST && t !== i) {
            var a;
            (mk(
              this,
              vC,
              null == (a = null != i ? i : "")
                ? void 0
                : a.split(/\s+/).map(ax),
            ),
              mw(this, vL, vM).call(this));
          }
        }
        connectedCallback() {
          (super.connectedCallback(),
            this.addEventListener("change", mw(this, vO, vN)));
        }
        disconnectedCallback() {
          (super.disconnectedCallback(),
            this.removeEventListener("change", mw(this, vO, vN)));
        }
        get anchorElement() {
          var e;
          return "auto" !== this.anchor
            ? super.anchorElement
            : null == (e = a7(this))
              ? void 0
              : e.querySelector("media-audio-track-menu-button");
        }
        get mediaAudioTrackList() {
          return mT(this, vC);
        }
        set mediaAudioTrackList(e) {
          (mk(this, vC, e), mw(this, vL, vM).call(this));
        }
        get mediaAudioTrackEnabled() {
          var e;
          return null != (e = rv(this, aA.MEDIA_AUDIO_TRACK_ENABLED)) ? e : "";
        }
        set mediaAudioTrackEnabled(e) {
          rE(this, aA.MEDIA_AUDIO_TRACK_ENABLED, e);
        }
      }
      ((vC = new WeakMap()),
        (vD = new WeakMap()),
        (vL = new WeakSet()),
        (vM = function () {
          if (mT(this, vD) === JSON.stringify(this.mediaAudioTrackList)) return;
          mk(this, vD, JSON.stringify(this.mediaAudioTrackList));
          let e = this.mediaAudioTrackList;
          for (let t of ((this.defaultSlot.textContent = ""), e)) {
            let e = h6({
              type: "radio",
              text: this.formatMenuItemText(t.label, t),
              value: `${t.id}`,
              checked: t.enabled,
            });
            (e.prepend(h7(this, "checked-indicator")),
              this.defaultSlot.append(e));
          }
        }),
        (vO = new WeakSet()),
        (vN = function () {
          if (null == this.value) return;
          let e = new a2.CustomEvent(ag.MEDIA_AUDIO_TRACK_REQUEST, {
            composed: !0,
            bubbles: !0,
            detail: this.value,
          });
          this.dispatchEvent(e);
        }),
        a2.customElements.get("media-audio-track-menu") ||
          a2.customElements.define("media-audio-track-menu", mS));
      let mI = `<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M11 17H9.5V7H11v10Zm-3-3H6.5v-4H8v4Zm6-5h-1.5v6H14V9Zm3 7h-1.5V8H17v8Z"/>
  <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0Z"/>
</svg>`,
        mR = a3.createElement("template");
      mR.innerHTML = `
  <style>
    :host([aria-expanded="true"]) slot[name=tooltip] {
      display: none;
    }
  </style>
  <slot name="icon">${mI}</slot>
`;
      class mC extends mf {
        static get observedAttributes() {
          return [
            ...super.observedAttributes,
            aA.MEDIA_AUDIO_TRACK_ENABLED,
            aA.MEDIA_AUDIO_TRACK_UNAVAILABLE,
          ];
        }
        constructor() {
          super({ slotTemplate: mR, tooltipContent: aG("Audio") });
        }
        connectedCallback() {
          (super.connectedCallback(),
            this.setAttribute("aria-label", aG("Audio")));
        }
        attributeChangedCallback(e, t, i) {
          super.attributeChangedCallback(e, t, i);
        }
        get invokeTargetElement() {
          var e;
          return void 0 != this.invokeTarget
            ? super.invokeTargetElement
            : null == (e = a7(this))
              ? void 0
              : e.querySelector("media-audio-track-menu");
        }
        get mediaAudioTrackEnabled() {
          var e;
          return null != (e = rv(this, aA.MEDIA_AUDIO_TRACK_ENABLED)) ? e : "";
        }
        set mediaAudioTrackEnabled(e) {
          rE(this, aA.MEDIA_AUDIO_TRACK_ENABLED, e);
        }
      }
      a2.customElements.get("media-audio-track-menu-button") ||
        a2.customElements.define("media-audio-track-menu-button", mC);
      var mD = (e, t, i) => {
          if (!t.has(e)) throw TypeError("Cannot " + i);
        },
        mL = (e, t, i) => (
          mD(e, t, "read from private field"),
          i ? i.call(e) : t.get(e)
        ),
        mM = (e, t, i) => {
          if (t.has(e))
            throw TypeError(
              "Cannot add the same private member more than once",
            );
          t instanceof WeakSet ? t.add(e) : t.set(e, i);
        },
        mO = (e, t, i, a) => (
          mD(e, t, "write to private field"),
          a ? a.call(e, i) : t.set(e, i),
          i
        ),
        mN = (e, t, i) => (mD(e, t, "access private method"), i);
      let mx = `
  <svg aria-hidden="true" viewBox="0 0 26 24" part="captions-indicator indicator">
    <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
  </svg>`,
        mP = a3.createElement("template");
      mP.innerHTML =
        mi.template.innerHTML +
        `
  <slot name="captions-indicator" hidden>${mx}</slot>`;
      class mU extends mi {
        constructor() {
          (super(...arguments),
            mM(this, vP),
            mM(this, vB),
            mM(this, vx, void 0));
        }
        static get observedAttributes() {
          return [
            ...super.observedAttributes,
            aA.MEDIA_SUBTITLES_LIST,
            aA.MEDIA_SUBTITLES_SHOWING,
          ];
        }
        attributeChangedCallback(e, t, i) {
          (super.attributeChangedCallback(e, t, i),
            e === aA.MEDIA_SUBTITLES_LIST && t !== i
              ? mN(this, vP, vU).call(this)
              : e === aA.MEDIA_SUBTITLES_SHOWING &&
                t !== i &&
                (this.value = i));
        }
        connectedCallback() {
          (super.connectedCallback(),
            this.addEventListener("change", mN(this, vB, vW)));
        }
        disconnectedCallback() {
          (super.disconnectedCallback(),
            this.removeEventListener("change", mN(this, vB, vW)));
        }
        get anchorElement() {
          return "auto" !== this.anchor
            ? super.anchorElement
            : a7(this).querySelector("media-captions-menu-button");
        }
        get mediaSubtitlesList() {
          return mB(this, aA.MEDIA_SUBTITLES_LIST);
        }
        set mediaSubtitlesList(e) {
          mW(this, aA.MEDIA_SUBTITLES_LIST, e);
        }
        get mediaSubtitlesShowing() {
          return mB(this, aA.MEDIA_SUBTITLES_SHOWING);
        }
        set mediaSubtitlesShowing(e) {
          mW(this, aA.MEDIA_SUBTITLES_SHOWING, e);
        }
      }
      ((vx = new WeakMap()),
        (vP = new WeakSet()),
        (vU = function () {
          var e;
          if (mL(this, vx) === JSON.stringify(this.mediaSubtitlesList)) return;
          (mO(this, vx, JSON.stringify(this.mediaSubtitlesList)),
            (this.defaultSlot.textContent = ""));
          let t = !this.value,
            i = h6({
              type: "radio",
              text: this.formatMenuItemText("Off"),
              value: "off",
              checked: t,
            });
          for (let t of (i.prepend(h7(this, "checked-indicator")),
          this.defaultSlot.append(i),
          this.mediaSubtitlesList)) {
            let i = h6({
              type: "radio",
              text: this.formatMenuItemText(t.label, t),
              value: rF(t),
              checked: this.value == rF(t),
            });
            (i.prepend(h7(this, "checked-indicator")),
              "captions" === (null != (e = t.kind) ? e : "subs") &&
                i.append(h7(this, "captions-indicator")),
              this.defaultSlot.append(i));
          }
        }),
        (vB = new WeakSet()),
        (vW = function () {
          let e = this.mediaSubtitlesShowing,
            t = this.getAttribute(aA.MEDIA_SUBTITLES_SHOWING),
            i = this.value !== t;
          if (
            ((null == e ? void 0 : e.length) &&
              i &&
              this.dispatchEvent(
                new a2.CustomEvent(ag.MEDIA_DISABLE_SUBTITLES_REQUEST, {
                  composed: !0,
                  bubbles: !0,
                  detail: e,
                }),
              ),
            !this.value || !i)
          )
            return;
          let a = new a2.CustomEvent(ag.MEDIA_SHOW_SUBTITLES_REQUEST, {
            composed: !0,
            bubbles: !0,
            detail: this.value,
          });
          this.dispatchEvent(a);
        }),
        (mU.template = mP));
      let mB = (e, t) => {
          let i = e.getAttribute(t);
          return i ? rH(i) : [];
        },
        mW = (e, t, i) => {
          if (!(null == i ? void 0 : i.length))
            return void e.removeAttribute(t);
          let a = rq(i);
          e.getAttribute(t) !== a && e.setAttribute(t, a);
        };
      a2.customElements.get("media-captions-menu") ||
        a2.customElements.define("media-captions-menu", mU);
      var mH = (e, t, i) => {
          if (!t.has(e)) throw TypeError("Cannot " + i);
        },
        mV = (e, t, i) => {
          if (t.has(e))
            throw TypeError(
              "Cannot add the same private member more than once",
            );
          t instanceof WeakSet ? t.add(e) : t.set(e, i);
        },
        mF = (e, t, i, a) => (
          mH(e, t, "write to private field"),
          a ? a.call(e, i) : t.set(e, i),
          i
        );
      let mq = `<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M22.83 5.68a2.58 2.58 0 0 0-2.3-2.5c-3.62-.24-11.44-.24-15.06 0a2.58 2.58 0 0 0-2.3 2.5c-.23 4.21-.23 8.43 0 12.64a2.58 2.58 0 0 0 2.3 2.5c3.62.24 11.44.24 15.06 0a2.58 2.58 0 0 0 2.3-2.5c.23-4.21.23-8.43 0-12.64Zm-11.39 9.45a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.92 3.92 0 0 1 .92-2.77 3.18 3.18 0 0 1 2.43-1 2.94 2.94 0 0 1 2.13.78c.364.359.62.813.74 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.17 1.61 1.61 0 0 0-1.29.58 2.79 2.79 0 0 0-.5 1.89 3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.48 1.48 0 0 0 1-.37 2.1 2.1 0 0 0 .59-1.14l1.4.44a3.23 3.23 0 0 1-1.07 1.69Zm7.22 0a3.07 3.07 0 0 1-1.91.57 3.06 3.06 0 0 1-2.34-1 3.75 3.75 0 0 1-.92-2.67 3.88 3.88 0 0 1 .93-2.77 3.14 3.14 0 0 1 2.42-1 3 3 0 0 1 2.16.82 2.8 2.8 0 0 1 .73 1.31l-1.43.35a1.49 1.49 0 0 0-1.51-1.21 1.61 1.61 0 0 0-1.29.58A2.79 2.79 0 0 0 15 12a3 3 0 0 0 .49 1.93 1.61 1.61 0 0 0 1.27.58 1.44 1.44 0 0 0 1-.37 2.1 2.1 0 0 0 .6-1.15l1.4.44a3.17 3.17 0 0 1-1.1 1.7Z"/>
</svg>`,
        m$ = `<svg aria-hidden="true" viewBox="0 0 26 24">
  <path d="M17.73 14.09a1.4 1.4 0 0 1-1 .37 1.579 1.579 0 0 1-1.27-.58A3 3 0 0 1 15 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34A2.89 2.89 0 0 0 19 9.07a3 3 0 0 0-2.14-.78 3.14 3.14 0 0 0-2.42 1 3.91 3.91 0 0 0-.93 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.17 3.17 0 0 0 1.07-1.74l-1.4-.45c-.083.43-.3.822-.62 1.12Zm-7.22 0a1.43 1.43 0 0 1-1 .37 1.58 1.58 0 0 1-1.27-.58A3 3 0 0 1 7.76 12a2.8 2.8 0 0 1 .5-1.85 1.63 1.63 0 0 1 1.29-.57 1.47 1.47 0 0 1 1.51 1.2l1.43-.34a2.81 2.81 0 0 0-.74-1.32 2.94 2.94 0 0 0-2.13-.78 3.18 3.18 0 0 0-2.43 1 4 4 0 0 0-.92 2.78 3.74 3.74 0 0 0 .92 2.66 3.07 3.07 0 0 0 2.34 1 3.07 3.07 0 0 0 1.91-.57 3.23 3.23 0 0 0 1.07-1.74l-1.4-.45a2.06 2.06 0 0 1-.6 1.07Zm12.32-8.41a2.59 2.59 0 0 0-2.3-2.51C18.72 3.05 15.86 3 13 3c-2.86 0-5.72.05-7.53.17a2.59 2.59 0 0 0-2.3 2.51c-.23 4.207-.23 8.423 0 12.63a2.57 2.57 0 0 0 2.3 2.5c1.81.13 4.67.19 7.53.19 2.86 0 5.72-.06 7.53-.19a2.57 2.57 0 0 0 2.3-2.5c.23-4.207.23-8.423 0-12.63Zm-1.49 12.53a1.11 1.11 0 0 1-.91 1.11c-1.67.11-4.45.18-7.43.18-2.98 0-5.76-.07-7.43-.18a1.11 1.11 0 0 1-.91-1.11c-.21-4.14-.21-8.29 0-12.43a1.11 1.11 0 0 1 .91-1.11C7.24 4.56 10 4.49 13 4.49s5.76.07 7.43.18a1.11 1.11 0 0 1 .91 1.11c.21 4.14.21 8.29 0 12.43Z"/>
</svg>`,
        mK = a3.createElement("template");
      mK.innerHTML = `
  <style>
    :host([aria-checked="true"]) slot[name=off] {
      display: none !important;
    }

    
    :host(:not([aria-checked="true"])) slot[name=on] {
      display: none !important;
    }

    :host([aria-expanded="true"]) slot[name=tooltip] {
      display: none;
    }
  </style>

  <slot name="icon">
    <slot name="on">${mq}</slot>
    <slot name="off">${m$}</slot>
  </slot>
`;
      let mY = (e) => {
        e.setAttribute("aria-checked", rj(e).toString());
      };
      class mG extends mf {
        constructor(e = {}) {
          (super({ slotTemplate: mK, tooltipContent: aG("Captions"), ...e }),
            mV(this, vH, void 0),
            mF(this, vH, !1));
        }
        static get observedAttributes() {
          return [
            ...super.observedAttributes,
            aA.MEDIA_SUBTITLES_LIST,
            aA.MEDIA_SUBTITLES_SHOWING,
          ];
        }
        connectedCallback() {
          (super.connectedCallback(),
            this.setAttribute("aria-label", aG("closed captions")),
            mY(this));
        }
        attributeChangedCallback(e, t, i) {
          (super.attributeChangedCallback(e, t, i),
            e === aA.MEDIA_SUBTITLES_SHOWING && mY(this));
        }
        get invokeTargetElement() {
          var e;
          return void 0 != this.invokeTarget
            ? super.invokeTargetElement
            : null == (e = a7(this))
              ? void 0
              : e.querySelector("media-captions-menu");
        }
        get mediaSubtitlesList() {
          return mj(this, aA.MEDIA_SUBTITLES_LIST);
        }
        set mediaSubtitlesList(e) {
          mQ(this, aA.MEDIA_SUBTITLES_LIST, e);
        }
        get mediaSubtitlesShowing() {
          return mj(this, aA.MEDIA_SUBTITLES_SHOWING);
        }
        set mediaSubtitlesShowing(e) {
          mQ(this, aA.MEDIA_SUBTITLES_SHOWING, e);
        }
      }
      vH = new WeakMap();
      let mj = (e, t) => {
          let i = e.getAttribute(t);
          return i ? rH(i) : [];
        },
        mQ = (e, t, i) => {
          if (!(null == i ? void 0 : i.length))
            return void e.removeAttribute(t);
          let a = rq(i);
          e.getAttribute(t) !== a && e.setAttribute(t, a);
        };
      a2.customElements.get("media-captions-menu-button") ||
        a2.customElements.define("media-captions-menu-button", mG);
      var mZ = (e, t, i) => {
          if (!t.has(e)) throw TypeError("Cannot " + i);
        },
        mz = (e, t, i) => (
          mZ(e, t, "read from private field"),
          i ? i.call(e) : t.get(e)
        ),
        mX = (e, t, i) => {
          if (t.has(e))
            throw TypeError(
              "Cannot add the same private member more than once",
            );
          t instanceof WeakSet ? t.add(e) : t.set(e, i);
        },
        mJ = (e, t, i) => (mZ(e, t, "access private method"), i);
      let m0 = { RATES: "rates" };
      class m1 extends mi {
        constructor() {
          (super(),
            mX(this, vF),
            mX(this, v$),
            mX(this, vV, new rU(this, m0.RATES, { defaultValue: oc })),
            mJ(this, vF, vq).call(this));
        }
        static get observedAttributes() {
          return [
            ...super.observedAttributes,
            aA.MEDIA_PLAYBACK_RATE,
            m0.RATES,
          ];
        }
        attributeChangedCallback(e, t, i) {
          (super.attributeChangedCallback(e, t, i),
            e === aA.MEDIA_PLAYBACK_RATE && t != i
              ? (this.value = i)
              : e === m0.RATES &&
                t != i &&
                ((mz(this, vV).value = i), mJ(this, vF, vq).call(this)));
        }
        connectedCallback() {
          (super.connectedCallback(),
            this.addEventListener("change", mJ(this, v$, vK)));
        }
        disconnectedCallback() {
          (super.disconnectedCallback(),
            this.removeEventListener("change", mJ(this, v$, vK)));
        }
        get anchorElement() {
          return "auto" !== this.anchor
            ? super.anchorElement
            : a7(this).querySelector("media-playback-rate-menu-button");
        }
        get rates() {
          return mz(this, vV);
        }
        set rates(e) {
          (e
            ? Array.isArray(e) && (mz(this, vV).value = e.join(" "))
            : (mz(this, vV).value = ""),
            mJ(this, vF, vq).call(this));
        }
        get mediaPlaybackRate() {
          return rc(this, aA.MEDIA_PLAYBACK_RATE, 1);
        }
        set mediaPlaybackRate(e) {
          rh(this, aA.MEDIA_PLAYBACK_RATE, e);
        }
      }
      ((vV = new WeakMap()),
        (vF = new WeakSet()),
        (vq = function () {
          for (let e of ((this.defaultSlot.textContent = ""), this.rates)) {
            let t = h6({
              type: "radio",
              text: this.formatMenuItemText(`${e}x`, e),
              value: e,
              checked: this.mediaPlaybackRate == e,
            });
            (t.prepend(h7(this, "checked-indicator")),
              this.defaultSlot.append(t));
          }
        }),
        (v$ = new WeakSet()),
        (vK = function () {
          if (!this.value) return;
          let e = new a2.CustomEvent(ag.MEDIA_PLAYBACK_RATE_REQUEST, {
            composed: !0,
            bubbles: !0,
            detail: this.value,
          });
          this.dispatchEvent(e);
        }),
        a2.customElements.get("media-playback-rate-menu") ||
          a2.customElements.define("media-playback-rate-menu", m1));
      var m2 = (e, t, i) => {
          if (!t.has(e)) throw TypeError("Cannot " + i);
        },
        m3 = (e, t, i) => (
          m2(e, t, "read from private field"),
          i ? i.call(e) : t.get(e)
        ),
        m4 = (e, t, i) => {
          if (t.has(e))
            throw TypeError(
              "Cannot add the same private member more than once",
            );
          t instanceof WeakSet ? t.add(e) : t.set(e, i);
        };
      let m5 = { RATES: "rates" },
        m9 = [1, 1.2, 1.5, 1.7, 2],
        m8 = a3.createElement("template");
      m8.innerHTML = `
  <style>
    :host {
      min-width: 5ch;
      padding: var(--media-button-padding, var(--media-control-padding, 10px 5px));
    }
    
    :host([aria-expanded="true"]) slot[name=tooltip] {
      display: none;
    }
  </style>
  <slot name="icon"></slot>
`;
      class m6 extends mf {
        constructor(e = {}) {
          (super({
            slotTemplate: m8,
            tooltipContent: aG("Playback rate"),
            ...e,
          }),
            m4(this, vY, new rU(this, m5.RATES, { defaultValue: m9 })),
            (this.container =
              this.shadowRoot.querySelector('slot[name="icon"]')),
            (this.container.innerHTML = "1x"));
        }
        static get observedAttributes() {
          return [
            ...super.observedAttributes,
            aA.MEDIA_PLAYBACK_RATE,
            m5.RATES,
          ];
        }
        attributeChangedCallback(e, t, i) {
          if (
            (super.attributeChangedCallback(e, t, i),
            e === m5.RATES && (m3(this, vY).value = i),
            e === aA.MEDIA_PLAYBACK_RATE)
          ) {
            let e = i ? +i : Number.NaN,
              t = Number.isNaN(e) ? 1 : e;
            ((this.container.innerHTML = `${t}x`),
              this.setAttribute(
                "aria-label",
                aG("Playback rate {playbackRate}", { playbackRate: t }),
              ));
          }
        }
        get invokeTargetElement() {
          return void 0 != this.invokeTarget
            ? super.invokeTargetElement
            : a7(this).querySelector("media-playback-rate-menu");
        }
        get rates() {
          return m3(this, vY);
        }
        set rates(e) {
          e
            ? Array.isArray(e) && (m3(this, vY).value = e.join(" "))
            : (m3(this, vY).value = "");
        }
        get mediaPlaybackRate() {
          return rc(this, aA.MEDIA_PLAYBACK_RATE, 1);
        }
        set mediaPlaybackRate(e) {
          rh(this, aA.MEDIA_PLAYBACK_RATE, e);
        }
      }
      ((vY = new WeakMap()),
        a2.customElements.get("media-playback-rate-menu-button") ||
          a2.customElements.define("media-playback-rate-menu-button", m6));
      var m7 = (e, t, i) => {
          if (!t.has(e)) throw TypeError("Cannot " + i);
        },
        pe = (e, t, i) => (
          m7(e, t, "read from private field"),
          i ? i.call(e) : t.get(e)
        ),
        pt = (e, t, i) => {
          if (t.has(e))
            throw TypeError(
              "Cannot add the same private member more than once",
            );
          t instanceof WeakSet ? t.add(e) : t.set(e, i);
        },
        pi = (e, t, i, a) => (
          m7(e, t, "write to private field"),
          a ? a.call(e, i) : t.set(e, i),
          i
        ),
        pa = (e, t, i) => (m7(e, t, "access private method"), i);
      class pr extends mi {
        constructor() {
          (super(...arguments),
            pt(this, vQ),
            pt(this, vz),
            pt(this, vG, []),
            pt(this, vj, {}));
        }
        static get observedAttributes() {
          return [
            ...super.observedAttributes,
            aA.MEDIA_RENDITION_LIST,
            aA.MEDIA_RENDITION_SELECTED,
            aA.MEDIA_RENDITION_UNAVAILABLE,
            aA.MEDIA_HEIGHT,
          ];
        }
        attributeChangedCallback(e, t, i) {
          if (
            (super.attributeChangedCallback(e, t, i),
            e === aA.MEDIA_RENDITION_SELECTED && t !== i)
          )
            ((this.value = null != i ? i : "auto"),
              pa(this, vQ, vZ).call(this));
          else if (e === aA.MEDIA_RENDITION_LIST && t !== i)
            (pi(this, vG, null == i ? void 0 : i.split(/\s+/).map(aO)),
              pa(this, vQ, vZ).call(this));
          else e === aA.MEDIA_HEIGHT && t !== i && pa(this, vQ, vZ).call(this);
        }
        connectedCallback() {
          (super.connectedCallback(),
            this.addEventListener("change", pa(this, vz, vX)));
        }
        disconnectedCallback() {
          (super.disconnectedCallback(),
            this.removeEventListener("change", pa(this, vz, vX)));
        }
        get anchorElement() {
          return "auto" !== this.anchor
            ? super.anchorElement
            : a7(this).querySelector("media-rendition-menu-button");
        }
        get mediaRenditionList() {
          return pe(this, vG);
        }
        set mediaRenditionList(e) {
          (pi(this, vG, e), pa(this, vQ, vZ).call(this));
        }
        get mediaRenditionSelected() {
          return rv(this, aA.MEDIA_RENDITION_SELECTED);
        }
        set mediaRenditionSelected(e) {
          rE(this, aA.MEDIA_RENDITION_SELECTED, e);
        }
        get mediaHeight() {
          return rc(this, aA.MEDIA_HEIGHT);
        }
        set mediaHeight(e) {
          rh(this, aA.MEDIA_HEIGHT, e);
        }
      }
      ((vG = new WeakMap()),
        (vj = new WeakMap()),
        (vQ = new WeakSet()),
        (vZ = function () {
          if (
            pe(this, vj).mediaRenditionList ===
              JSON.stringify(this.mediaRenditionList) &&
            pe(this, vj).mediaHeight === this.mediaHeight
          )
            return;
          ((pe(this, vj).mediaRenditionList = JSON.stringify(
            this.mediaRenditionList,
          )),
            (pe(this, vj).mediaHeight = this.mediaHeight));
          let e = this.mediaRenditionList.sort((e, t) => t.height - e.height);
          for (let t of e) t.selected = t.id === this.mediaRenditionSelected;
          this.defaultSlot.textContent = "";
          let t = !this.mediaRenditionSelected;
          for (let i of e) {
            let e = h6({
              type: "radio",
              text: this.formatMenuItemText(
                `${Math.min(i.width, i.height)}p`,
                i,
              ),
              value: `${i.id}`,
              checked: i.selected && !t,
            });
            (e.prepend(h7(this, "checked-indicator")),
              this.defaultSlot.append(e));
          }
          let i = h6({
              type: "radio",
              text: t
                ? this.formatMenuItemText(`Auto (${this.mediaHeight}p)`)
                : this.formatMenuItemText("Auto"),
              value: "auto",
              checked: t,
            }),
            a = this.mediaHeight > 0 ? `Auto (${this.mediaHeight}p)` : "Auto";
          ((i.dataset.description = a),
            i.prepend(h7(this, "checked-indicator")),
            this.defaultSlot.append(i));
        }),
        (vz = new WeakSet()),
        (vX = function () {
          if (null == this.value) return;
          let e = new a2.CustomEvent(ag.MEDIA_RENDITION_REQUEST, {
            composed: !0,
            bubbles: !0,
            detail: this.value,
          });
          this.dispatchEvent(e);
        }),
        a2.customElements.get("media-rendition-menu") ||
          a2.customElements.define("media-rendition-menu", pr));
      let pn = `<svg aria-hidden="true" viewBox="0 0 24 24">
  <path d="M13.5 2.5h2v6h-2v-2h-11v-2h11v-2Zm4 2h4v2h-4v-2Zm-12 4h2v6h-2v-2h-3v-2h3v-2Zm4 2h12v2h-12v-2Zm1 4h2v6h-2v-2h-8v-2h8v-2Zm4 2h7v2h-7v-2Z" />
</svg>`,
        ps = a3.createElement("template");
      ps.innerHTML = `
  <style>
    :host([aria-expanded="true"]) slot[name=tooltip] {
      display: none;
    }
  </style>
  <slot name="icon">${pn}</slot>
`;
      class po extends mf {
        static get observedAttributes() {
          return [
            ...super.observedAttributes,
            aA.MEDIA_RENDITION_SELECTED,
            aA.MEDIA_RENDITION_UNAVAILABLE,
            aA.MEDIA_HEIGHT,
          ];
        }
        constructor() {
          super({ slotTemplate: ps, tooltipContent: aG("Quality") });
        }
        connectedCallback() {
          (super.connectedCallback(),
            this.setAttribute("aria-label", aG("quality")));
        }
        get invokeTargetElement() {
          return void 0 != this.invokeTarget
            ? super.invokeTargetElement
            : a7(this).querySelector("media-rendition-menu");
        }
        get mediaRenditionSelected() {
          return rv(this, aA.MEDIA_RENDITION_SELECTED);
        }
        set mediaRenditionSelected(e) {
          rE(this, aA.MEDIA_RENDITION_SELECTED, e);
        }
        get mediaHeight() {
          return rc(this, aA.MEDIA_HEIGHT);
        }
        set mediaHeight(e) {
          rh(this, aA.MEDIA_HEIGHT, e);
        }
      }
      a2.customElements.get("media-rendition-menu-button") ||
        a2.customElements.define("media-rendition-menu-button", po);
      var pl = (e) => {
          throw TypeError(e);
        },
        pd = (e, t, i) => t.has(e) || pl("Cannot " + i),
        pu = (e, t, i) => (
          pd(e, t, "read from private field"),
          i ? i.call(e) : t.get(e)
        ),
        pc = (e, t, i) =>
          t.has(e)
            ? pl("Cannot add the same private member more than once")
            : t instanceof WeakSet
              ? t.add(e)
              : t.set(e, i),
        ph = (e, t, i, a) => (
          pd(e, t, "write to private field"),
          a ? a.call(e, i) : t.set(e, i),
          i
        ),
        pm = (e, t, i) => (pd(e, t, "access private method"), i),
        pp = class {
          addEventListener() {}
          removeEventListener() {}
          dispatchEvent(e) {
            return !0;
          }
        };
      if ("undefined" == typeof DocumentFragment) {
        class e extends pp {}
        globalThis.DocumentFragment = e;
      }
      var pv,
        pE,
        pb,
        pf,
        pg,
        p_,
        py,
        pT,
        pA,
        pk,
        pw,
        pS,
        pI,
        pR,
        pC,
        pD,
        pL,
        pM,
        pO,
        pN,
        px,
        pP,
        pU,
        pB,
        pW,
        pH,
        pV,
        pF,
        pq,
        p$,
        pK,
        pY,
        pG,
        pj,
        pQ,
        pZ,
        pz,
        pX,
        pJ,
        p0,
        p1,
        p2,
        p3,
        p4,
        p5,
        p9,
        p8,
        p6,
        p7,
        ve,
        vt,
        vi,
        va,
        vr,
        vn,
        vs,
        vo,
        vl,
        vd,
        vu,
        vc,
        vh,
        vm,
        vp,
        vv,
        vE,
        vb,
        vf,
        vg,
        v_,
        vy,
        vT,
        vA,
        vk,
        vw,
        vS,
        vI,
        vR,
        vC,
        vD,
        vL,
        vM,
        vO,
        vN,
        vx,
        vP,
        vU,
        vB,
        vW,
        vH,
        vV,
        vF,
        vq,
        v$,
        vK,
        vY,
        vG,
        vj,
        vQ,
        vZ,
        vz,
        vX,
        vJ,
        v0 = class extends pp {},
        v1 = class {
          constructor(e, t = {}) {
            (pc(this, vJ), ph(this, vJ, null == t ? void 0 : t.detail));
          }
          get detail() {
            return pu(this, vJ);
          }
          initCustomEvent() {}
        };
      vJ = new WeakMap();
      var v2 = {
          document: {
            createElement: function (e, t) {
              return new v0();
            },
          },
          DocumentFragment,
          customElements: {
            get(e) {},
            define(e, t, i) {},
            getName: (e) => null,
            upgrade(e) {},
            whenDefined: (e) => Promise.resolve(v0),
          },
          CustomEvent: v1,
          EventTarget: pp,
          HTMLElement: v0,
          HTMLVideoElement: class extends pp {},
        },
        v3 =
          "undefined" == typeof window || void 0 === globalThis.customElements,
        v4 = v3 ? v2 : globalThis,
        v5 = v3 ? v2.document : globalThis.document;
      function v9(e) {
        return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
      }
      function v8(e) {
        return e.replace(/[-_]([a-z])/g, (e, t) => t.toUpperCase());
      }
      function v6(e) {
        if (null == e) return;
        let t = +e;
        return Number.isNaN(t) ? void 0 : t;
      }
      function v7(e) {
        let t = (function (e) {
          let t = {};
          for (let i in e) null != e[i] && (t[i] = e[i]);
          return new URLSearchParams(t);
        })(e).toString();
        return t ? "?" + t : "";
      }
      var Ee,
        Et,
        Ei,
        Ea = (e, t) =>
          !!e && !!t && (!!e.contains(t) || Ea(e, t.getRootNode().host)),
        Er = "mux.com",
        En = (() => {
          try {
            return "3.4.0";
          } catch {}
          return "UNKNOWN";
        })(),
        Es = (
          e,
          {
            token: t,
            customDomain: i = Er,
            thumbnailTime: a,
            programTime: r,
          } = {},
        ) => {
          var n;
          let s = null == t ? a : void 0,
            { aud: o } = null != (n = t1(t)) ? n : {};
          if (!(t && "t" !== o))
            return `https://image.${i}/${e}/thumbnail.webp${v7({ token: t, time: s, program_time: r })}`;
        },
        Eo = (
          e,
          {
            token: t,
            customDomain: i = Er,
            programStartTime: a,
            programEndTime: r,
          } = {},
        ) => {
          var n;
          let { aud: s } = null != (n = t1(t)) ? n : {};
          if (!(t && "s" !== s))
            return `https://image.${i}/${e}/storyboard.vtt${v7({ token: t, format: "webp", program_start_time: a, program_end_time: r })}`;
        },
        El = (e) => {
          if (e) {
            if ([tH.LIVE, tH.ON_DEMAND].includes(e)) return e;
            if (null != e && e.includes("live")) return tH.LIVE;
          }
        },
        Ed = { crossorigin: "crossOrigin", playsinline: "playsInline" },
        Eu = class {
          constructor(e, t) {
            (pc(this, Ee),
              pc(this, Et),
              pc(this, Ei, []),
              ph(this, Ee, e),
              ph(this, Et, t));
          }
          [Symbol.iterator]() {
            return pu(this, Ei).values();
          }
          get length() {
            return pu(this, Ei).length;
          }
          get value() {
            var e;
            return null != (e = pu(this, Ei).join(" ")) ? e : "";
          }
          set value(e) {
            var t;
            e !== this.value &&
              (ph(this, Ei, []),
              this.add(
                ...(null != (t = null == e ? void 0 : e.split(" ")) ? t : []),
              ));
          }
          toString() {
            return this.value;
          }
          item(e) {
            return pu(this, Ei)[e];
          }
          values() {
            return pu(this, Ei).values();
          }
          keys() {
            return pu(this, Ei).keys();
          }
          forEach(e) {
            pu(this, Ei).forEach(e);
          }
          add(...e) {
            var t, i;
            (e.forEach((e) => {
              this.contains(e) || pu(this, Ei).push(e);
            }),
              ("" !== this.value ||
                (null != (t = pu(this, Ee)) &&
                  t.hasAttribute(`${pu(this, Et)}`))) &&
                null != (i = pu(this, Ee)) &&
                i.setAttribute(`${pu(this, Et)}`, `${this.value}`));
          }
          remove(...e) {
            var t;
            (e.forEach((e) => {
              pu(this, Ei).splice(pu(this, Ei).indexOf(e), 1);
            }),
              null == (t = pu(this, Ee)) ||
                t.setAttribute(`${pu(this, Et)}`, `${this.value}`));
          }
          contains(e) {
            return pu(this, Ei).includes(e);
          }
          toggle(e, t) {
            return void 0 !== t
              ? t
                ? (this.add(e), !0)
                : (this.remove(e), !1)
              : this.contains(e)
                ? (this.remove(e), !1)
                : (this.add(e), !0);
          }
          replace(e, t) {
            (this.remove(e), this.add(t));
          }
        };
      ((Ee = new WeakMap()), (Et = new WeakMap()), (Ei = new WeakMap()));
      var Ec = `[mux-player ${En}]`;
      function Eh(...e) {
        console.warn(Ec, ...e);
      }
      function Em(...e) {
        console.error(Ec, ...e);
      }
      function Ep(e) {
        var t;
        let i = null != (t = e.message) ? t : "";
        (e.context && (i += ` ${e.context}`),
          e.file &&
            (i += ` ${t9("Read more: ")}
https://github.com/muxinc/elements/blob/main/errors/${e.file}`),
          Eh(i));
      }
      var Ev = {
          AUTOPLAY: "autoplay",
          CROSSORIGIN: "crossorigin",
          LOOP: "loop",
          MUTED: "muted",
          PLAYSINLINE: "playsinline",
          PRELOAD: "preload",
        },
        EE = { VOLUME: "volume", PLAYBACKRATE: "playbackrate", MUTED: "muted" },
        Eb = Object.freeze({
          length: 0,
          start(e) {
            let t = e >>> 0;
            if (t >= this.length)
              throw new DOMException(
                `Failed to execute 'start' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`,
              );
            return 0;
          },
          end(e) {
            let t = e >>> 0;
            if (t >= this.length)
              throw new DOMException(
                `Failed to execute 'end' on 'TimeRanges': The index provided (${t}) is greater than or equal to the maximum bound (${this.length}).`,
              );
            return 0;
          },
        }),
        Ef = uq.filter((e) => "error" !== e),
        Eg = Object.values(Ev).filter((e) => ![Ev.PLAYSINLINE].includes(e)),
        E_ = Object.values(EE);
      function Ey(e, t) {
        return e.media ? e.media.getAttribute(t) : e.getAttribute(t);
      }
      var ET = class extends v4.HTMLElement {
          static get observedAttributes() {
            return [...Eg, ...E_];
          }
          constructor() {
            super();
          }
          init() {
            Ef.forEach((e) => {
              var t;
              null == (t = this.media) ||
                t.addEventListener(e, (e) => {
                  this.dispatchEvent(new Event(e.type));
                });
            });
          }
          attributeChangedCallback(e, t, i) {
            var a, r;
            switch (e) {
              case EE.MUTED:
                this.media &&
                  ((this.media.muted = null != i),
                  (this.media.defaultMuted = null != i));
                return;
              case EE.VOLUME: {
                let e = null != (a = v6(i)) ? a : 1;
                this.media && (this.media.volume = e);
                return;
              }
              case EE.PLAYBACKRATE: {
                let e = null != (r = v6(i)) ? r : 1;
                this.media &&
                  ((this.media.playbackRate = e),
                  (this.media.defaultPlaybackRate = e));
                return;
              }
            }
          }
          play() {
            var e, t;
            return null != (t = null == (e = this.media) ? void 0 : e.play())
              ? t
              : Promise.reject();
          }
          pause() {
            var e;
            null == (e = this.media) || e.pause();
          }
          load() {
            var e;
            null == (e = this.media) || e.load();
          }
          requestCast(e) {
            var t;
            return null == (t = this.media) ? void 0 : t.requestCast(e);
          }
          get media() {
            var e;
            return null == (e = this.shadowRoot)
              ? void 0
              : e.querySelector("mux-video");
          }
          get audioTracks() {
            return this.media.audioTracks;
          }
          get videoTracks() {
            return this.media.videoTracks;
          }
          get audioRenditions() {
            return this.media.audioRenditions;
          }
          get videoRenditions() {
            return this.media.videoRenditions;
          }
          get paused() {
            var e, t;
            return (
              null == (t = null == (e = this.media) ? void 0 : e.paused) || t
            );
          }
          get duration() {
            var e, t;
            return null != (t = null == (e = this.media) ? void 0 : e.duration)
              ? t
              : NaN;
          }
          get ended() {
            var e, t;
            return (
              null != (t = null == (e = this.media) ? void 0 : e.ended) && t
            );
          }
          get buffered() {
            var e, t;
            return null != (t = null == (e = this.media) ? void 0 : e.buffered)
              ? t
              : Eb;
          }
          get seekable() {
            var e, t;
            return null != (t = null == (e = this.media) ? void 0 : e.seekable)
              ? t
              : Eb;
          }
          get readyState() {
            var e, t;
            return null !=
              (t = null == (e = this.media) ? void 0 : e.readyState)
              ? t
              : 0;
          }
          get videoWidth() {
            var e, t;
            return null !=
              (t = null == (e = this.media) ? void 0 : e.videoWidth)
              ? t
              : 0;
          }
          get videoHeight() {
            var e, t;
            return null !=
              (t = null == (e = this.media) ? void 0 : e.videoHeight)
              ? t
              : 0;
          }
          get currentSrc() {
            var e, t;
            return null !=
              (t = null == (e = this.media) ? void 0 : e.currentSrc)
              ? t
              : "";
          }
          get currentTime() {
            var e, t;
            return null !=
              (t = null == (e = this.media) ? void 0 : e.currentTime)
              ? t
              : 0;
          }
          set currentTime(e) {
            this.media && (this.media.currentTime = Number(e));
          }
          get volume() {
            var e, t;
            return null != (t = null == (e = this.media) ? void 0 : e.volume)
              ? t
              : 1;
          }
          set volume(e) {
            this.media && (this.media.volume = Number(e));
          }
          get playbackRate() {
            var e, t;
            return null !=
              (t = null == (e = this.media) ? void 0 : e.playbackRate)
              ? t
              : 1;
          }
          set playbackRate(e) {
            this.media && (this.media.playbackRate = Number(e));
          }
          get defaultPlaybackRate() {
            var e;
            return null != (e = v6(this.getAttribute(EE.PLAYBACKRATE))) ? e : 1;
          }
          set defaultPlaybackRate(e) {
            null != e
              ? this.setAttribute(EE.PLAYBACKRATE, `${e}`)
              : this.removeAttribute(EE.PLAYBACKRATE);
          }
          get crossOrigin() {
            return Ey(this, Ev.CROSSORIGIN);
          }
          set crossOrigin(e) {
            this.setAttribute(Ev.CROSSORIGIN, `${e}`);
          }
          get autoplay() {
            return null != Ey(this, Ev.AUTOPLAY);
          }
          set autoplay(e) {
            e
              ? this.setAttribute(Ev.AUTOPLAY, "string" == typeof e ? e : "")
              : this.removeAttribute(Ev.AUTOPLAY);
          }
          get loop() {
            return null != Ey(this, Ev.LOOP);
          }
          set loop(e) {
            e ? this.setAttribute(Ev.LOOP, "") : this.removeAttribute(Ev.LOOP);
          }
          get muted() {
            var e, t;
            return (
              null != (t = null == (e = this.media) ? void 0 : e.muted) && t
            );
          }
          set muted(e) {
            this.media && (this.media.muted = !!e);
          }
          get defaultMuted() {
            return null != Ey(this, Ev.MUTED);
          }
          set defaultMuted(e) {
            e
              ? this.setAttribute(Ev.MUTED, "")
              : this.removeAttribute(Ev.MUTED);
          }
          get playsInline() {
            return null != Ey(this, Ev.PLAYSINLINE);
          }
          set playsInline(e) {
            Em(
              "playsInline is set to true by default and is not currently supported as a setter.",
            );
          }
          get preload() {
            return this.media
              ? this.media.preload
              : this.getAttribute("preload");
          }
          set preload(e) {
            ["", "none", "metadata", "auto"].includes(e)
              ? this.setAttribute(Ev.PRELOAD, e)
              : this.removeAttribute(Ev.PRELOAD);
          }
        },
        EA = `:host {
  --media-control-display: var(--controls);
  --media-loading-indicator-display: var(--loading-indicator);
  --media-dialog-display: var(--dialog);
  --media-play-button-display: var(--play-button);
  --media-live-button-display: var(--live-button);
  --media-seek-backward-button-display: var(--seek-backward-button);
  --media-seek-forward-button-display: var(--seek-forward-button);
  --media-mute-button-display: var(--mute-button);
  --media-captions-button-display: var(--captions-button);
  --media-captions-menu-button-display: var(--captions-menu-button, var(--media-captions-button-display));
  --media-rendition-menu-button-display: var(--rendition-menu-button);
  --media-audio-track-menu-button-display: var(--audio-track-menu-button);
  --media-airplay-button-display: var(--airplay-button);
  --media-pip-button-display: var(--pip-button);
  --media-fullscreen-button-display: var(--fullscreen-button);
  --media-cast-button-display: var(--cast-button, var(--_cast-button-drm-display));
  --media-playback-rate-button-display: var(--playback-rate-button);
  --media-playback-rate-menu-button-display: var(--playback-rate-menu-button);
  --media-volume-range-display: var(--volume-range);
  --media-time-range-display: var(--time-range);
  --media-time-display-display: var(--time-display);
  --media-duration-display-display: var(--duration-display);
  --media-title-display-display: var(--title-display);

  display: inline-block;
  line-height: 0;
  width: 100%;
}

a {
  color: #fff;
  font-size: 0.9em;
  text-decoration: underline;
}

media-theme {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
  direction: ltr;
}

media-poster-image {
  display: inline-block;
  line-height: 0;
  width: 100%;
  height: 100%;
}

media-poster-image:not([src]):not([placeholdersrc]) {
  display: none;
}

::part(top),
[part~='top'] {
  --media-control-display: var(--controls, var(--top-controls));
  --media-play-button-display: var(--play-button, var(--top-play-button));
  --media-live-button-display: var(--live-button, var(--top-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--top-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--top-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--top-mute-button));
  --media-captions-button-display: var(--captions-button, var(--top-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--top-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--top-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--top-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--top-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--top-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--top-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--top-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--top-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --captions-menu-button,
    var(--media-playback-rate-button-display, var(--top-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--top-volume-range));
  --media-time-range-display: var(--time-range, var(--top-time-range));
  --media-time-display-display: var(--time-display, var(--top-time-display));
  --media-duration-display-display: var(--duration-display, var(--top-duration-display));
  --media-title-display-display: var(--title-display, var(--top-title-display));
}

::part(center),
[part~='center'] {
  --media-control-display: var(--controls, var(--center-controls));
  --media-play-button-display: var(--play-button, var(--center-play-button));
  --media-live-button-display: var(--live-button, var(--center-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--center-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--center-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--center-mute-button));
  --media-captions-button-display: var(--captions-button, var(--center-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--center-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--center-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--center-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--center-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--center-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--center-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--center-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--center-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--center-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--center-volume-range));
  --media-time-range-display: var(--time-range, var(--center-time-range));
  --media-time-display-display: var(--time-display, var(--center-time-display));
  --media-duration-display-display: var(--duration-display, var(--center-duration-display));
}

::part(bottom),
[part~='bottom'] {
  --media-control-display: var(--controls, var(--bottom-controls));
  --media-play-button-display: var(--play-button, var(--bottom-play-button));
  --media-live-button-display: var(--live-button, var(--bottom-live-button));
  --media-seek-backward-button-display: var(--seek-backward-button, var(--bottom-seek-backward-button));
  --media-seek-forward-button-display: var(--seek-forward-button, var(--bottom-seek-forward-button));
  --media-mute-button-display: var(--mute-button, var(--bottom-mute-button));
  --media-captions-button-display: var(--captions-button, var(--bottom-captions-button));
  --media-captions-menu-button-display: var(
    --captions-menu-button,
    var(--media-captions-button-display, var(--bottom-captions-menu-button))
  );
  --media-rendition-menu-button-display: var(--rendition-menu-button, var(--bottom-rendition-menu-button));
  --media-audio-track-menu-button-display: var(--audio-track-menu-button, var(--bottom-audio-track-menu-button));
  --media-airplay-button-display: var(--airplay-button, var(--bottom-airplay-button));
  --media-pip-button-display: var(--pip-button, var(--bottom-pip-button));
  --media-fullscreen-button-display: var(--fullscreen-button, var(--bottom-fullscreen-button));
  --media-cast-button-display: var(--cast-button, var(--bottom-cast-button, var(--_cast-button-drm-display)));
  --media-playback-rate-button-display: var(--playback-rate-button, var(--bottom-playback-rate-button));
  --media-playback-rate-menu-button-display: var(
    --playback-rate-menu-button,
    var(--media-playback-rate-button-display, var(--bottom-playback-rate-menu-button))
  );
  --media-volume-range-display: var(--volume-range, var(--bottom-volume-range));
  --media-time-range-display: var(--time-range, var(--bottom-time-range));
  --media-time-display-display: var(--time-display, var(--bottom-time-display));
  --media-duration-display-display: var(--duration-display, var(--bottom-duration-display));
  --media-title-display-display: var(--title-display, var(--bottom-title-display));
}

:host([no-tooltips]) {
  --media-tooltip-display: none;
}
`,
        Ek = new WeakMap(),
        Ew = class e {
          constructor(e, t) {
            ((this.element = e),
              (this.type = t),
              this.element.addEventListener(this.type, this));
            let i = Ek.get(this.element);
            i && i.set(this.type, this);
          }
          set(e) {
            if ("function" == typeof e) this.handleEvent = e.bind(this.element);
            else if ("object" == typeof e && "function" == typeof e.handleEvent)
              this.handleEvent = e.handleEvent.bind(e);
            else {
              this.element.removeEventListener(this.type, this);
              let e = Ek.get(this.element);
              e && e.delete(this.type);
            }
          }
          static for(t) {
            Ek.has(t.element) || Ek.set(t.element, new Map());
            let i = t.attributeName.slice(2),
              a = Ek.get(t.element);
            return a && a.has(i) ? a.get(i) : new e(t.element, i);
          }
        },
        ES = new Map(),
        EI = new WeakMap(),
        ER = new WeakMap(),
        EC = class {
          constructor(e, t, i) {
            ((this.strings = e),
              (this.values = t),
              (this.processor = i),
              (this.stringsKey = this.strings.join("\x01")));
          }
          get template() {
            if (ES.has(this.stringsKey)) return ES.get(this.stringsKey);
            {
              let e = v5.createElement("template"),
                t = this.strings.length - 1;
              return (
                (e.innerHTML = this.strings.reduce(
                  (e, i, a) => e + i + (a < t ? `{{ ${a} }}` : ""),
                  "",
                )),
                ES.set(this.stringsKey, e),
                e
              );
            }
          }
          renderInto(e) {
            var t;
            let i = this.template;
            if (EI.get(e) !== i) {
              EI.set(e, i);
              let t = new hA(i, this.values, this.processor);
              (ER.set(e, t),
                e instanceof hL ? e.replace(...t.children) : e.appendChild(t));
              return;
            }
            let a = ER.get(e);
            null == (t = null == a ? void 0 : a.update) ||
              t.call(a, this.values);
          }
        },
        ED = {
          processCallback(e, t, i) {
            var a;
            if (i)
              for (let [e, r] of t)
                e in i &&
                  (function (e, t) {
                    (function (e, t) {
                      if (e instanceof hD && t instanceof Element) {
                        let i = e.element;
                        return (
                          i[e.attributeName] !== t &&
                            (e.element.removeAttributeNS(
                              e.attributeNamespace,
                              e.attributeName,
                            ),
                            (i[e.attributeName] = t)),
                          !0
                        );
                      }
                      return !1;
                    })(e, t) ||
                      (function (e, t) {
                        if ("boolean" == typeof t && e instanceof hD) {
                          let i = e.attributeNamespace;
                          return (
                            t !==
                              e.element.hasAttributeNS(i, e.attributeName) &&
                              (e.booleanValue = t),
                            !0
                          );
                        }
                        return !1;
                      })(e, t) ||
                      (e instanceof hD &&
                        e.attributeName.startsWith("on") &&
                        (Ew.for(e).set(t),
                        e.element.removeAttributeNS(
                          e.attributeNamespace,
                          e.attributeName,
                        ),
                        1)) ||
                      (!1 === t && e instanceof hL && (e.replace(""), 1)) ||
                      (t instanceof EC &&
                        e instanceof hL &&
                        (t.renderInto(e), 1)) ||
                      (t instanceof DocumentFragment &&
                        e instanceof hL &&
                        (t.childNodes.length && e.replace(...t.childNodes),
                        1)) ||
                      (function (e, t) {
                        if (e instanceof hD) {
                          let i = e.attributeNamespace,
                            a = e.element.getAttributeNS(i, e.attributeName);
                          return String(t) !== a && (e.value = String(t));
                        }
                        e.value = String(t);
                      })(e, t);
                  })(r, null != (a = i[e]) ? a : "");
          },
        };
      function EL(e, ...t) {
        return new EC(e, t, ED);
      }
      var EM = (e) => {
          let { tokens: t } = e;
          return t.drm ? ":host { --_cast-button-drm-display: none; }" : "";
        },
        EO = (e) => EL`
  <style>
    ${EM(e)}
    ${EA}
  </style>
  ${EP(e)}
`,
        EN = (e) => {
          let t = e.hotKeys ? `${e.hotKeys}` : "";
          return (
            "live" === El(e.streamType) && (t += " noarrowleft noarrowright"),
            t
          );
        },
        Ex = Object.values({
          TOP: "top",
          CENTER: "center",
          BOTTOM: "bottom",
          LAYER: "layer",
          MEDIA_LAYER: "media-layer",
          POSTER_LAYER: "poster-layer",
          VERTICAL_LAYER: "vertical-layer",
          CENTERED_LAYER: "centered-layer",
          GESTURE_LAYER: "gesture-layer",
          CONTROLLER_LAYER: "controller",
          BUTTON: "button",
          RANGE: "range",
          DISPLAY: "display",
          CONTROL_BAR: "control-bar",
          MENU_BUTTON: "menu-button",
          MENU: "menu",
          OPTION: "option",
          POSTER: "poster",
          LIVE: "live",
          PLAY: "play",
          PRE_PLAY: "pre-play",
          SEEK_BACKWARD: "seek-backward",
          SEEK_FORWARD: "seek-forward",
          MUTE: "mute",
          CAPTIONS: "captions",
          AIRPLAY: "airplay",
          PIP: "pip",
          FULLSCREEN: "fullscreen",
          CAST: "cast",
          PLAYBACK_RATE: "playback-rate",
          VOLUME: "volume",
          TIME: "time",
          TITLE: "title",
          AUDIO_TRACK: "audio-track",
          RENDITION: "rendition",
        }).join(", "),
        EP = (e) => {
          var t,
            i,
            a,
            r,
            n,
            s,
            o,
            l,
            d,
            u,
            c,
            h,
            m,
            p,
            E,
            b,
            f,
            g,
            _,
            y,
            T,
            A,
            k,
            w,
            S,
            I,
            R,
            C,
            D,
            L,
            M,
            O,
            N,
            x,
            P;
          return EL`
  <media-theme
    template="${e.themeTemplate || !1}"
    defaultstreamtype="${null != (t = e.defaultStreamType) && t}"
    hotkeys="${EN(e) || !1}"
    nohotkeys="${e.noHotKeys || !e.hasSrc || !1}"
    noautoseektolive="${!!(null != (i = e.streamType) && i.includes(tH.LIVE)) && 0 !== e.targetLiveWindow}"
    novolumepref="${e.novolumepref || !1}"
    disabled="${!e.hasSrc || e.isDialogOpen}"
    audio="${null != (a = e.audio) && a}"
    style="${
      null !=
        (r = (function (e) {
          let t = "";
          return (
            Object.entries(e).forEach(([e, i]) => {
              null != i && (t += `${v9(e)}: ${i}; `);
            }),
            t ? t.trim() : void 0
          );
        })({
          "--media-primary-color": e.primaryColor,
          "--media-secondary-color": e.secondaryColor,
          "--media-accent-color": e.accentColor,
        })) && r
    }"
    defaultsubtitles="${!e.defaultHiddenCaptions}"
    forwardseekoffset="${null != (n = e.forwardSeekOffset) && n}"
    backwardseekoffset="${null != (s = e.backwardSeekOffset) && s}"
    playbackrates="${null != (o = e.playbackRates) && o}"
    defaultshowremainingtime="${null != (l = e.defaultShowRemainingTime) && l}"
    defaultduration="${null != (d = e.defaultDuration) && d}"
    hideduration="${null != (u = e.hideDuration) && u}"
    title="${null != (c = e.title) && c}"
    videotitle="${null != (h = e.videoTitle) && h}"
    proudlydisplaymuxbadge="${null != (m = e.proudlyDisplayMuxBadge) && m}"
    exportparts="${Ex}"
    onclose="${e.onCloseErrorDialog}"
    onfocusin="${e.onFocusInErrorDialog}"
  >
    <mux-video
      slot="media"
      target-live-window="${null != (p = e.targetLiveWindow) && p}"
      stream-type="${null != (E = El(e.streamType)) && E}"
      crossorigin="${null != (b = e.crossOrigin) ? b : ""}"
      playsinline
      autoplay="${null != (f = e.autoplay) && f}"
      muted="${null != (g = e.muted) && g}"
      loop="${null != (_ = e.loop) && _}"
      preload="${null != (y = e.preload) && y}"
      debug="${null != (T = e.debug) && T}"
      prefer-cmcd="${null != (A = e.preferCmcd) && A}"
      disable-tracking="${null != (k = e.disableTracking) && k}"
      disable-cookies="${null != (w = e.disableCookies) && w}"
      prefer-playback="${null != (S = e.preferPlayback) && S}"
      start-time="${null != e.startTime && e.startTime}"
      beacon-collection-domain="${null != (I = e.beaconCollectionDomain) && I}"
      player-init-time="${null != (R = e.playerInitTime) && R}"
      player-software-name="${null != (C = e.playerSoftwareName) && C}"
      player-software-version="${null != (D = e.playerSoftwareVersion) && D}"
      env-key="${null != (L = e.envKey) && L}"
      custom-domain="${null != (M = e.customDomain) && M}"
      src="${e.src ? e.src : !!e.playbackId && iQ(e)}"
      cast-src="${e.src ? e.src : !!e.playbackId && iQ(e)}"
      cast-receiver="${null != (O = e.castReceiver) && O}"
      drm-token="${null != (x = null == (N = e.tokens) ? void 0 : N.drm) && x}"
      exportparts="video"
    >
      ${e.storyboard ? EL`<track label="thumbnails" default kind="metadata" src="${e.storyboard}" />` : EL``}
      <slot></slot>
    </mux-video>
    <slot name="poster" slot="poster">
      <media-poster-image
        part="poster"
        exportparts="poster, img"
        src="${!!e.poster && e.poster}"
        placeholdersrc="${null != (P = e.placeholder) && P}"
      ></media-poster-image>
    </slot>
  </media-theme>
`;
        },
        EU = (e) => e.charAt(0).toUpperCase() + e.slice(1),
        EB = (e, t = !1) => {
          var i, a;
          if (e.muxCode) {
            let r = EU(null != (i = e.errorCategory) ? i : "video"),
              n = tx(null != (a = e.errorCategory) ? a : tO.VIDEO);
            if (e.muxCode === tN.NETWORK_OFFLINE)
              return t9("Your device appears to be offline", t);
            if (e.muxCode === tN.NETWORK_TOKEN_EXPIRED)
              return t9("{category} URL has expired", t).format({
                category: r,
              });
            if (
              [
                tN.NETWORK_TOKEN_SUB_MISMATCH,
                tN.NETWORK_TOKEN_AUD_MISMATCH,
                tN.NETWORK_TOKEN_AUD_MISSING,
                tN.NETWORK_TOKEN_MALFORMED,
              ].includes(e.muxCode)
            )
              return t9("{category} URL is formatted incorrectly", t).format({
                category: r,
              });
            if (e.muxCode === tN.NETWORK_TOKEN_MISSING)
              return t9("Invalid {categoryName} URL", t).format({
                categoryName: n,
              });
            if (e.muxCode === tN.NETWORK_NOT_FOUND)
              return t9("{category} does not exist", t).format({ category: r });
            if (e.muxCode === tN.NETWORK_NOT_READY)
              return t9("{category} is not currently available", t).format({
                category: r,
              });
          }
          if (e.code) {
            if (e.code === tP.MEDIA_ERR_NETWORK) return t9("Network Error", t);
            if (e.code === tP.MEDIA_ERR_DECODE) return t9("Media Error", t);
            if (e.code === tP.MEDIA_ERR_SRC_NOT_SUPPORTED)
              return t9("Source Not Supported", t);
          }
          return t9("Error", t);
        },
        EW = (e, t = !1) => {
          var i, a;
          if (e.muxCode) {
            let r = EU(null != (i = e.errorCategory) ? i : "video"),
              n = tx(null != (a = e.errorCategory) ? a : tO.VIDEO);
            return e.muxCode === tN.NETWORK_OFFLINE
              ? t9(
                  "Check your internet connection and try reloading this video.",
                  t,
                )
              : e.muxCode === tN.NETWORK_TOKEN_EXPIRED
                ? t9(
                    "The video’s secured {tokenNamePrefix}-token has expired.",
                    t,
                  ).format({ tokenNamePrefix: n })
                : e.muxCode === tN.NETWORK_TOKEN_SUB_MISMATCH
                  ? t9(
                      "The video’s playback ID does not match the one encoded in the {tokenNamePrefix}-token.",
                      t,
                    ).format({ tokenNamePrefix: n })
                  : e.muxCode === tN.NETWORK_TOKEN_MALFORMED
                    ? t9("{category} URL is formatted incorrectly", t).format({
                        category: r,
                      })
                    : [
                          tN.NETWORK_TOKEN_AUD_MISMATCH,
                          tN.NETWORK_TOKEN_AUD_MISSING,
                        ].includes(e.muxCode)
                      ? t9(
                          "The {tokenNamePrefix}-token is formatted with incorrect information.",
                          t,
                        ).format({ tokenNamePrefix: n })
                      : [
                            tN.NETWORK_TOKEN_MISSING,
                            tN.NETWORK_INVALID_URL,
                          ].includes(e.muxCode)
                        ? t9(
                            "The video URL or {tokenNamePrefix}-token are formatted with incorrect or incomplete information.",
                            t,
                          ).format({ tokenNamePrefix: n })
                        : e.muxCode === tN.NETWORK_NOT_FOUND
                          ? ""
                          : e.muxCode === tN.NETWORK_NOT_READY
                            ? t9(
                                "The live stream or video file are not yet ready.",
                                t,
                              )
                            : e.message;
          }
          return (
            e.code &&
              (e.code === tP.MEDIA_ERR_NETWORK ||
                e.code === tP.MEDIA_ERR_DECODE ||
                e.code === tP.MEDIA_ERR_SRC_NOT_SUPPORTED),
            e.message
          );
        },
        EH = (e, t = !1) => ({
          title: EB(e, t).toString(),
          message: EW(e, t).toString(),
        }),
        EV = (e) => {
          if (e.muxCode) {
            if (e.muxCode === tN.NETWORK_TOKEN_EXPIRED)
              return "403-expired-token.md";
            if (e.muxCode === tN.NETWORK_TOKEN_MALFORMED)
              return "403-malformatted-token.md";
            if (
              [
                tN.NETWORK_TOKEN_AUD_MISMATCH,
                tN.NETWORK_TOKEN_AUD_MISSING,
              ].includes(e.muxCode)
            )
              return "403-incorrect-aud-value.md";
            if (e.muxCode === tN.NETWORK_TOKEN_SUB_MISMATCH)
              return "403-playback-id-mismatch.md";
            if (e.muxCode === tN.NETWORK_TOKEN_MISSING)
              return "missing-signed-tokens.md";
            if (e.muxCode === tN.NETWORK_NOT_FOUND) return "404-not-found.md";
            if (e.muxCode === tN.NETWORK_NOT_READY)
              return "412-not-playable.md";
          }
          if (e.code) {
            if (e.code === tP.MEDIA_ERR_NETWORK) return "";
            if (e.code === tP.MEDIA_ERR_DECODE) return "media-decode-error.md";
            if (e.code === tP.MEDIA_ERR_SRC_NOT_SUPPORTED)
              return "media-src-not-supported.md";
          }
          return "";
        },
        EF = (e, t) => {
          let i = EV(e);
          return { message: e.message, context: e.context, file: i };
        },
        Eq = `<template id="media-theme-gerwig">
  <style>
    @keyframes pre-play-hide {
      0% {
        transform: scale(1);
        opacity: 1;
      }

      30% {
        transform: scale(0.7);
      }

      100% {
        transform: scale(1.5);
        opacity: 0;
      }
    }

    :host {
      --_primary-color: var(--media-primary-color, #fff);
      --_secondary-color: var(--media-secondary-color, transparent);
      --_accent-color: var(--media-accent-color, #fa50b5);
      --_text-color: var(--media-text-color, #000);

      --media-icon-color: var(--_primary-color);
      --media-control-background: var(--_secondary-color);
      --media-control-hover-background: var(--_accent-color);
      --media-time-buffered-color: rgba(255, 255, 255, 0.4);
      --media-preview-time-text-shadow: none;
      --media-control-height: 14px;
      --media-control-padding: 6px;
      --media-tooltip-container-margin: 6px;
      --media-tooltip-distance: 18px;

      color: var(--_primary-color);
      display: inline-block;
      width: 100%;
      height: 100%;
    }

    :host([audio]) {
      --_secondary-color: var(--media-secondary-color, black);
      --media-preview-time-text-shadow: none;
    }

    :host([audio]) ::slotted([slot='media']) {
      height: 0px;
    }

    :host([audio]) media-loading-indicator {
      display: none;
    }

    :host([audio]) media-controller {
      background: transparent;
    }

    :host([audio]) media-controller::part(vertical-layer) {
      background: transparent;
    }

    :host([audio]) media-control-bar {
      width: 100%;
      background-color: var(--media-control-background);
    }

    /*
     * 0.433s is the transition duration for VTT Regions.
     * Borrowed here, so the captions don't move too fast.
     */
    media-controller {
      --media-webkit-text-track-transform: translateY(0) scale(0.98);
      --media-webkit-text-track-transition: transform 0.433s ease-out 0.3s;
    }
    media-controller:is([mediapaused], :not([userinactive])) {
      --media-webkit-text-track-transform: translateY(-50px) scale(0.98);
      --media-webkit-text-track-transition: transform 0.15s ease;
    }

    /*
     * CSS specific to iOS devices.
     * See: https://stackoverflow.com/questions/30102792/css-media-query-to-target-only-ios-devices/60220757#60220757
     */
    @supports (-webkit-touch-callout: none) {
      /* Disable subtitle adjusting for iOS Safari */
      media-controller[mediaisfullscreen] {
        --media-webkit-text-track-transform: unset;
        --media-webkit-text-track-transition: unset;
      }
    }

    media-time-range {
      --media-box-padding-left: 6px;
      --media-box-padding-right: 6px;
      --media-range-bar-color: var(--_accent-color);
      --media-time-range-buffered-color: var(--_primary-color);
      --media-range-track-color: transparent;
      --media-range-track-background: rgba(255, 255, 255, 0.4);
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_accent-color) 25%,
        var(--_accent-color)
      );
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-transform: scale(0);
      --media-range-thumb-transition: transform 0.3s;
      --media-range-thumb-opacity: 1;
      --media-preview-background: var(--_primary-color);
      --media-box-arrow-background: var(--_primary-color);
      --media-preview-thumbnail-border: 5px solid var(--_primary-color);
      --media-preview-border-radius: 5px;
      --media-text-color: var(--_text-color);
      --media-control-hover-background: transparent;
      --media-preview-chapter-text-shadow: none;
      color: var(--_accent-color);
      padding: 0 6px;
    }

    :host([audio]) media-time-range {
      --media-preview-time-padding: 1.5px 6px;
      --media-preview-box-margin: 0 0 -5px;
    }

    media-time-range:hover {
      --media-range-thumb-transform: scale(1);
    }

    media-preview-thumbnail {
      border-bottom-width: 0;
    }

    [part~='menu'] {
      border-radius: 2px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      bottom: 50px;
      padding: 2.5px 10px;
    }

    [part~='menu']::part(indicator) {
      fill: var(--_accent-color);
    }

    [part~='menu']::part(menu-item) {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      padding: 6px 10px;
      min-height: 34px;
    }

    [part~='menu']::part(checked) {
      font-weight: 700;
    }

    media-captions-menu,
    media-rendition-menu,
    media-audio-track-menu,
    media-playback-rate-menu {
      position: absolute; /* ensure they don't take up space in DOM on load */
      --media-menu-background: var(--_primary-color);
      --media-menu-item-checked-background: transparent;
      --media-text-color: var(--_text-color);
      --media-menu-item-hover-background: transparent;
      --media-menu-item-hover-outline: var(--_accent-color) solid 1px;
    }

    /* The icon is a circle so make it 16px high instead of 14px for more balance. */
    media-audio-track-menu-button {
      --media-control-padding: 5px;
      --media-control-height: 16px;
    }

    media-playback-rate-menu-button {
      --media-control-padding: 6px 3px;
      min-width: 4.4ch;
    }

    media-playback-rate-menu {
      --media-menu-flex-direction: row;
      --media-menu-item-checked-background: var(--_accent-color);
      --media-menu-item-checked-indicator-display: none;
      margin-right: 6px;
      padding: 0;
      --media-menu-gap: 0.25em;
    }

    media-playback-rate-menu[part~='menu']::part(menu-item) {
      padding: 6px 6px 6px 8px;
    }

    media-playback-rate-menu[part~='menu']::part(checked) {
      color: #fff;
    }

    :host(:not([audio])) media-time-range {
      /* Adding px is required here for calc() */
      --media-range-padding: 0px;
      background: transparent;
      z-index: 10;
      height: 10px;
      bottom: -3px;
      width: 100%;
    }

    media-control-bar :is([role='button'], [role='switch'], button) {
      line-height: 0;
    }

    media-control-bar :is([part*='button'], [part*='range'], [part*='display']) {
      border-radius: 3px;
    }

    .spacer {
      flex-grow: 1;
      background-color: var(--media-control-background, rgba(20, 20, 30, 0.7));
    }

    media-control-bar[slot~='top-chrome'] {
      min-height: 42px;
      pointer-events: none;
    }

    media-control-bar {
      --gradient-steps:
        hsl(0 0% 0% / 0) 0%, hsl(0 0% 0% / 0.013) 8.1%, hsl(0 0% 0% / 0.049) 15.5%, hsl(0 0% 0% / 0.104) 22.5%,
        hsl(0 0% 0% / 0.175) 29%, hsl(0 0% 0% / 0.259) 35.3%, hsl(0 0% 0% / 0.352) 41.2%, hsl(0 0% 0% / 0.45) 47.1%,
        hsl(0 0% 0% / 0.55) 52.9%, hsl(0 0% 0% / 0.648) 58.8%, hsl(0 0% 0% / 0.741) 64.7%, hsl(0 0% 0% / 0.825) 71%,
        hsl(0 0% 0% / 0.896) 77.5%, hsl(0 0% 0% / 0.951) 84.5%, hsl(0 0% 0% / 0.987) 91.9%, hsl(0 0% 0%) 100%;
    }

    :host([title]:not([audio])) media-control-bar[slot='top-chrome']::before {
      content: '';
      position: absolute;
      width: 100%;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to top, var(--gradient-steps));
      opacity: 0.8;
      pointer-events: none;
    }

    :host(:not([audio])) media-control-bar[part~='bottom']::before {
      content: '';
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      padding-bottom: min(100px, 25%);
      background: linear-gradient(to bottom, var(--gradient-steps));
      opacity: 0.8;
      z-index: 1;
      pointer-events: none;
    }

    media-control-bar[part~='bottom'] > * {
      z-index: 20;
    }

    media-control-bar[part~='bottom'] {
      padding: 6px 6px;
    }

    media-control-bar[slot~='top-chrome'] > * {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      position: relative;
    }

    media-controller::part(vertical-layer) {
      transition: background-color 1s;
    }

    media-controller:is([mediapaused], :not([userinactive]))::part(vertical-layer) {
      background-color: var(--controls-backdrop-color, var(--controls, transparent));
      transition: background-color 0.25s;
    }

    .center-controls {
      --media-button-icon-width: 100%;
      --media-button-icon-height: auto;
      --media-tooltip-display: none;
      pointer-events: none;
      width: 100%;
      display: flex;
      flex-flow: row;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
      paint-order: stroke;
      stroke: rgba(102, 102, 102, 1);
      stroke-width: 0.3px;
      text-shadow:
        0 0 2px rgb(0 0 0 / 0.25),
        0 0 6px rgb(0 0 0 / 0.25);
    }

    .center-controls media-play-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      --media-control-padding: 0;
      width: 40px;
    }

    [breakpointsm] .center-controls media-play-button {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      transition: background 0.4s;
      padding: 24px;
      --media-control-background: #000;
      --media-control-hover-background: var(--_accent-color);
    }

    .center-controls media-seek-backward-button,
    .center-controls media-seek-forward-button {
      --media-control-background: transparent;
      --media-control-hover-background: transparent;
      padding: 0;
      margin: 0 20px;
      width: max(33px, min(8%, 40px));
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback {
      display: grid;
      align-items: initial;
      justify-content: initial;
      height: 100%;
      overflow: hidden;
    }

    [breakpointsm]:not([audio]) .center-controls.pre-playback media-play-button {
      place-self: var(--_pre-playback-place, center);
      grid-area: 1 / 1;
      margin: 16px;
    }

    /* Show and hide controls or pre-playback state */

    [breakpointsm]:is([mediahasplayed], :not([mediapaused])):not([audio])
      .center-controls.pre-playback
      media-play-button {
      /* Using \`forwards\` would lead to a laggy UI after the animation got in the end state */
      animation: 0.3s linear pre-play-hide;
      opacity: 0;
      pointer-events: none;
    }

    .autoplay-unmute {
      --media-control-hover-background: transparent;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      filter: drop-shadow(0 0 2px rgb(0 0 0 / 0.25)) drop-shadow(0 0 6px rgb(0 0 0 / 0.25));
    }

    .autoplay-unmute-btn {
      --media-control-height: 16px;
      border-radius: 8px;
      background: #000;
      color: var(--_primary-color);
      display: flex;
      align-items: center;
      padding: 8px 16px;
      font-size: 18px;
      font-weight: 500;
      cursor: pointer;
    }

    .autoplay-unmute-btn:hover {
      background: var(--_accent-color);
    }

    [breakpointsm] .autoplay-unmute-btn {
      --media-control-height: 30px;
      padding: 14px 24px;
      font-size: 26px;
    }

    .autoplay-unmute-btn svg {
      margin: 0 6px 0 0;
    }

    [breakpointsm] .autoplay-unmute-btn svg {
      margin: 0 10px 0 0;
    }

    media-controller:not([audio]):not([mediahasplayed]) *:is(media-control-bar, media-time-range) {
      display: none;
    }

    media-error-dialog:not([mediaerrorcode]) {
      opacity: 0;
    }

    media-loading-indicator {
      --media-loading-icon-width: 100%;
      --media-button-icon-height: auto;
      display: var(--media-control-display, var(--media-loading-indicator-display, flex));
      pointer-events: none;
      position: absolute;
      width: min(15%, 150px);
      flex-flow: row;
      align-items: center;
      justify-content: center;
    }

    /* Intentionally don't target the div for transition but the children
     of the div. Prevents messing with media-chrome's autohide feature. */
    media-loading-indicator + div * {
      transition: opacity 0.15s;
      opacity: 1;
    }

    media-loading-indicator[medialoading]:not([mediapaused]) ~ div > * {
      opacity: 0;
      transition-delay: 400ms;
    }

    media-volume-range {
      width: min(100%, 100px);
      --media-range-padding-left: 10px;
      --media-range-padding-right: 10px;
      --media-range-thumb-width: 12px;
      --media-range-thumb-height: 12px;
      --media-range-thumb-background: radial-gradient(
        circle,
        #000 0%,
        #000 25%,
        var(--_primary-color) 25%,
        var(--_primary-color)
      );
      --media-control-hover-background: none;
    }

    media-time-display {
      white-space: nowrap;
    }

    /* Generic style for explicitly disabled controls */
    media-control-bar[part~='bottom'] [disabled],
    media-control-bar[part~='bottom'] [aria-disabled='true'] {
      opacity: 60%;
      cursor: not-allowed;
    }

    media-text-display {
      --media-font-size: 16px;
      --media-control-padding: 14px;
      font-weight: 500;
    }

    media-play-button.animated *:is(g, path) {
      transition: all 0.3s;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt1 {
      opacity: 0;
    }

    media-play-button.animated[mediapaused] .pause-icon-pt2 {
      transform-origin: center center;
      transform: scaleY(0);
    }

    media-play-button.animated[mediapaused] .play-icon {
      clip-path: inset(0 0 0 0);
    }

    media-play-button.animated:not([mediapaused]) .play-icon {
      clip-path: inset(0 0 0 100%);
    }

    media-seek-forward-button,
    media-seek-backward-button {
      --media-font-weight: 400;
    }

    .mute-icon {
      display: inline-block;
    }

    .mute-icon :is(path, g) {
      transition: opacity 0.5s;
    }

    .muted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='low'] :is(.volume-medium, .volume-high),
    media-mute-button[mediavolumelevel='medium'] :is(.volume-high) {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .unmuted {
      opacity: 0;
    }

    media-mute-button[mediavolumelevel='off'] .muted {
      opacity: 1;
    }

    /**
     * Our defaults for these buttons are to hide them at small sizes
     * users can override this with CSS
     */
    media-controller:not([breakpointsm]):not([audio]) {
      --bottom-play-button: none;
      --bottom-seek-backward-button: none;
      --bottom-seek-forward-button: none;
      --bottom-time-display: none;
      --bottom-playback-rate-menu-button: none;
      --bottom-pip-button: none;
    }

    [part='mux-badge'] {
      position: absolute;
      bottom: 10px;
      right: 10px;
      z-index: 2;
      opacity: 0.6;
      transition:
        opacity 0.2s ease-in-out,
        bottom 0.2s ease-in-out;
    }

    [part='mux-badge']:hover {
      opacity: 1;
    }

    [part='mux-badge'] a {
      font-size: 14px;
      font-family: var(--_font-family);
      color: var(--_primary-color);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    [part='mux-badge'] .mux-badge-text {
      transition: opacity 0.5s ease-in-out;
      opacity: 0;
    }

    [part='mux-badge'] .mux-badge-logo {
      width: 40px;
      height: auto;
      display: inline-block;
    }

    [part='mux-badge'] .mux-badge-logo svg {
      width: 100%;
      height: 100%;
      fill: white;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'],
    media-controller:not([userinactive]) [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      transition: bottom 0.1s ease-in-out;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      transition: bottom 0.2s ease-in-out 0.62s;
    }

    media-controller:not([userinactive]) [part='mux-badge'] .mux-badge-text,
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] .mux-badge-text {
      opacity: 1;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] .mux-badge-text {
      opacity: 0;
    }

    media-controller[userinactive]:not([mediapaused]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive]):not([mediahasplayed]) [part='mux-badge'] {
      bottom: 10px;
    }

    media-controller:not([userinactive])[mediahasplayed] [part='mux-badge'],
    media-controller[mediahasplayed][mediapaused] [part='mux-badge'] {
      bottom: calc(28px + var(--media-control-height, 0px) + var(--media-control-padding, 0px) * 2);
    }
  </style>

  <template partial="TitleDisplay">
    <template if="videotitle">
      <template if="videotitle != true">
        <media-text-display part="top title display" class="title-display">{{videotitle}}</media-text-display>
      </template>
    </template>
    <template if="!videotitle">
      <template if="title">
        <media-text-display part="top title display" class="title-display">{{title}}</media-text-display>
      </template>
    </template>
  </template>

  <template partial="PlayButton">
    <media-play-button
      part="{{section ?? 'bottom'}} play button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      class="animated"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon">
        <g class="play-icon">
          <path
            d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
          />
        </g>
        <g class="pause-icon">
          <path
            class="pause-icon-pt1"
            d="M5.90709 0H2.96889C2.46857 0 2.06299 0.405585 2.06299 0.9059V13.0941C2.06299 13.5944 2.46857 14 2.96889 14H5.90709C6.4074 14 6.81299 13.5944 6.81299 13.0941V0.9059C6.81299 0.405585 6.4074 0 5.90709 0Z"
          />
          <path
            class="pause-icon-pt2"
            d="M15.1571 0H12.2189C11.7186 0 11.313 0.405585 11.313 0.9059V13.0941C11.313 13.5944 11.7186 14 12.2189 14H15.1571C15.6574 14 16.063 13.5944 16.063 13.0941V0.9059C16.063 0.405585 15.6574 0 15.1571 0Z"
          />
        </g>
      </svg>
    </media-play-button>
  </template>

  <template partial="PrePlayButton">
    <media-play-button
      part="{{section ?? 'center'}} play button pre-play"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="icon" style="transform: translate(3px, 0)">
        <path
          d="M15.5987 6.2911L3.45577 0.110898C2.83667 -0.204202 2.06287 0.189698 2.06287 0.819798V13.1802C2.06287 13.8103 2.83667 14.2042 3.45577 13.8891L15.5987 7.7089C16.2178 7.3938 16.2178 6.6061 15.5987 6.2911Z"
        />
      </svg>
    </media-play-button>
  </template>

  <template partial="SeekBackwardButton">
    <media-seek-backward-button
      seekoffset="{{backwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-backward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <path
          d="M3.65 2.07888L0.0864 6.7279C-0.0288 6.87812 -0.0288 7.12188 0.0864 7.2721L3.65 11.9211C3.7792 12.0896 4 11.9703 4 11.7321V2.26787C4 2.02968 3.7792 1.9104 3.65 2.07888Z"
        />
        <text transform="translate(6 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
          {{backwardseekoffset}}
        </text>
      </svg>
    </media-seek-backward-button>
  </template>

  <template partial="SeekForwardButton">
    <media-seek-forward-button
      seekoffset="{{forwardseekoffset}}"
      part="{{section ?? 'bottom'}} seek-forward button"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <svg viewBox="0 0 22 14" aria-hidden="true" slot="icon">
        <g>
          <text transform="translate(-1 12)" style="font-size: 14px; font-family: 'ArialMT', 'Arial'">
            {{forwardseekoffset}}
          </text>
          <path
            d="M18.35 11.9211L21.9136 7.2721C22.0288 7.12188 22.0288 6.87812 21.9136 6.7279L18.35 2.07888C18.2208 1.91041 18 2.02968 18 2.26787V11.7321C18 11.9703 18.2208 12.0896 18.35 11.9211Z"
          />
        </g>
      </svg>
    </media-seek-forward-button>
  </template>

  <template partial="MuteButton">
    <media-mute-button part="bottom mute button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" slot="icon" class="mute-icon" aria-hidden="true">
        <g class="unmuted">
          <path
            d="M6.76786 1.21233L3.98606 3.98924H1.19937C0.593146 3.98924 0.101743 4.51375 0.101743 5.1607V6.96412L0 6.99998L0.101743 7.03583V8.83926C0.101743 9.48633 0.593146 10.0108 1.19937 10.0108H3.98606L6.76773 12.7877C7.23561 13.2547 8 12.9007 8 12.2171V1.78301C8 1.09925 7.23574 0.745258 6.76786 1.21233Z"
          />
          <path
            class="volume-low"
            d="M10 3.54781C10.7452 4.55141 11.1393 5.74511 11.1393 6.99991C11.1393 8.25471 10.7453 9.44791 10 10.4515L10.7988 11.0496C11.6734 9.87201 12.1356 8.47161 12.1356 6.99991C12.1356 5.52821 11.6735 4.12731 10.7988 2.94971L10 3.54781Z"
          />
          <path
            class="volume-medium"
            d="M12.3778 2.40086C13.2709 3.76756 13.7428 5.35806 13.7428 7.00026C13.7428 8.64246 13.2709 10.233 12.3778 11.5992L13.2106 12.1484C14.2107 10.6185 14.739 8.83796 14.739 7.00016C14.739 5.16236 14.2107 3.38236 13.2106 1.85156L12.3778 2.40086Z"
          />
          <path
            class="volume-high"
            d="M15.5981 0.75L14.7478 1.2719C15.7937 2.9919 16.3468 4.9723 16.3468 7C16.3468 9.0277 15.7937 11.0082 14.7478 12.7281L15.5981 13.25C16.7398 11.3722 17.343 9.211 17.343 7C17.343 4.789 16.7398 2.6268 15.5981 0.75Z"
          />
        </g>
        <g class="muted">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.39976 4.98924H1.19937C1.19429 4.98924 1.17777 4.98961 1.15296 5.01609C1.1271 5.04369 1.10174 5.09245 1.10174 5.1607V8.83926C1.10174 8.90761 1.12714 8.95641 1.15299 8.984C1.17779 9.01047 1.1943 9.01084 1.19937 9.01084H4.39977L7 11.6066V2.39357L4.39976 4.98924ZM7.47434 1.92006C7.4743 1.9201 7.47439 1.92002 7.47434 1.92006V1.92006ZM6.76773 12.7877L3.98606 10.0108H1.19937C0.593146 10.0108 0.101743 9.48633 0.101743 8.83926V7.03583L0 6.99998L0.101743 6.96412V5.1607C0.101743 4.51375 0.593146 3.98924 1.19937 3.98924H3.98606L6.76786 1.21233C7.23574 0.745258 8 1.09925 8 1.78301V12.2171C8 12.9007 7.23561 13.2547 6.76773 12.7877Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.2677 9.30323C15.463 9.49849 15.7796 9.49849 15.9749 9.30323C16.1701 9.10796 16.1701 8.79138 15.9749 8.59612L14.2071 6.82841L15.9749 5.06066C16.1702 4.8654 16.1702 4.54882 15.9749 4.35355C15.7796 4.15829 15.4631 4.15829 15.2678 4.35355L13.5 6.1213L11.7322 4.35348C11.537 4.15822 11.2204 4.15822 11.0251 4.35348C10.8298 4.54874 10.8298 4.86532 11.0251 5.06058L12.7929 6.82841L11.0251 8.59619C10.8299 8.79146 10.8299 9.10804 11.0251 9.3033C11.2204 9.49856 11.537 9.49856 11.7323 9.3033L13.5 7.53552L15.2677 9.30323Z"
          />
        </g>
      </svg>
    </media-mute-button>
  </template>

  <template partial="PipButton">
    <media-pip-button part="bottom pip button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M15.9891 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.989C0 13.0996 0.9004 14 2.011 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0ZM17 11.9891C17 12.5465 16.5465 13 15.9891 13H2.011C1.4536 13 1.0001 12.5465 1.0001 11.9891V2.0109C1.0001 1.4535 1.4536 0.9999 2.011 0.9999H15.9891C16.5465 0.9999 17 1.4535 17 2.0109V11.9891Z"
        />
        <path
          d="M15.356 5.67822H8.19523C8.03253 5.67822 7.90063 5.81012 7.90063 5.97282V11.3836C7.90063 11.5463 8.03253 11.6782 8.19523 11.6782H15.356C15.5187 11.6782 15.6506 11.5463 15.6506 11.3836V5.97282C15.6506 5.81012 15.5187 5.67822 15.356 5.67822Z"
        />
      </svg>
    </media-pip-button>
  </template>

  <template partial="CaptionsMenu">
    <media-captions-menu-button part="bottom captions button">
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="on">
        <path
          d="M15.989 0H2.011C0.9004 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9004 14 2.011 14H15.989C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.989 0ZM4.2292 8.7639C4.5954 9.1902 5.0935 9.4031 5.7233 9.4031C6.1852 9.4031 6.5544 9.301 6.8302 9.0969C7.1061 8.8933 7.2863 8.614 7.3702 8.26H8.4322C8.3062 8.884 8.0093 9.3733 7.5411 9.7273C7.0733 10.0813 6.4703 10.2581 5.732 10.2581C5.108 10.2581 4.5699 10.1219 4.1168 9.8489C3.6637 9.5759 3.3141 9.1946 3.0685 8.7058C2.8224 8.2165 2.6994 7.6511 2.6994 7.009C2.6994 6.3611 2.8224 5.7927 3.0685 5.3034C3.3141 4.8146 3.6637 4.4323 4.1168 4.1559C4.5699 3.88 5.108 3.7418 5.732 3.7418C6.4703 3.7418 7.0733 3.922 7.5411 4.2818C8.0094 4.6422 8.3062 5.1461 8.4322 5.794H7.3702C7.2862 5.4283 7.106 5.1368 6.8302 4.921C6.5544 4.7052 6.1852 4.5968 5.7233 4.5968C5.0934 4.5968 4.5954 4.8116 4.2292 5.2404C3.8635 5.6696 3.6804 6.259 3.6804 7.009C3.6804 7.7531 3.8635 8.3381 4.2292 8.7639ZM11.0974 8.7639C11.4636 9.1902 11.9617 9.4031 12.5915 9.4031C13.0534 9.4031 13.4226 9.301 13.6984 9.0969C13.9743 8.8933 14.1545 8.614 14.2384 8.26H15.3004C15.1744 8.884 14.8775 9.3733 14.4093 9.7273C13.9415 10.0813 13.3385 10.2581 12.6002 10.2581C11.9762 10.2581 11.4381 10.1219 10.985 9.8489C10.5319 9.5759 10.1823 9.1946 9.9367 8.7058C9.6906 8.2165 9.5676 7.6511 9.5676 7.009C9.5676 6.3611 9.6906 5.7927 9.9367 5.3034C10.1823 4.8146 10.5319 4.4323 10.985 4.1559C11.4381 3.88 11.9762 3.7418 12.6002 3.7418C13.3385 3.7418 13.9415 3.922 14.4093 4.2818C14.8776 4.6422 15.1744 5.1461 15.3004 5.794H14.2384C14.1544 5.4283 13.9742 5.1368 13.6984 4.921C13.4226 4.7052 13.0534 4.5968 12.5915 4.5968C11.9616 4.5968 11.4636 4.8116 11.0974 5.2404C10.7317 5.6696 10.5486 6.259 10.5486 7.009C10.5486 7.7531 10.7317 8.3381 11.0974 8.7639Z"
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 18 14" slot="off">
        <path
          d="M5.73219 10.258C5.10819 10.258 4.57009 10.1218 4.11699 9.8488C3.66389 9.5758 3.31429 9.1945 3.06869 8.7057C2.82259 8.2164 2.69958 7.651 2.69958 7.0089C2.69958 6.361 2.82259 5.7926 3.06869 5.3033C3.31429 4.8145 3.66389 4.4322 4.11699 4.1558C4.57009 3.8799 5.10819 3.7417 5.73219 3.7417C6.47049 3.7417 7.07348 3.9219 7.54128 4.2817C8.00958 4.6421 8.30638 5.146 8.43238 5.7939H7.37039C7.28639 5.4282 7.10618 5.1367 6.83039 4.9209C6.55459 4.7051 6.18538 4.5967 5.72348 4.5967C5.09358 4.5967 4.59559 4.8115 4.22939 5.2403C3.86369 5.6695 3.68058 6.2589 3.68058 7.0089C3.68058 7.753 3.86369 8.338 4.22939 8.7638C4.59559 9.1901 5.09368 9.403 5.72348 9.403C6.18538 9.403 6.55459 9.3009 6.83039 9.0968C7.10629 8.8932 7.28649 8.6139 7.37039 8.2599H8.43238C8.30638 8.8839 8.00948 9.3732 7.54128 9.7272C7.07348 10.0812 6.47049 10.258 5.73219 10.258Z"
        />
        <path
          d="M12.6003 10.258C11.9763 10.258 11.4382 10.1218 10.9851 9.8488C10.532 9.5758 10.1824 9.1945 9.93685 8.7057C9.69075 8.2164 9.56775 7.651 9.56775 7.0089C9.56775 6.361 9.69075 5.7926 9.93685 5.3033C10.1824 4.8145 10.532 4.4322 10.9851 4.1558C11.4382 3.8799 11.9763 3.7417 12.6003 3.7417C13.3386 3.7417 13.9416 3.9219 14.4094 4.2817C14.8777 4.6421 15.1745 5.146 15.3005 5.7939H14.2385C14.1545 5.4282 13.9743 5.1367 13.6985 4.9209C13.4227 4.7051 13.0535 4.5967 12.5916 4.5967C11.9617 4.5967 11.4637 4.8115 11.0975 5.2403C10.7318 5.6695 10.5487 6.2589 10.5487 7.0089C10.5487 7.753 10.7318 8.338 11.0975 8.7638C11.4637 9.1901 11.9618 9.403 12.5916 9.403C13.0535 9.403 13.4227 9.3009 13.6985 9.0968C13.9744 8.8932 14.1546 8.6139 14.2385 8.2599H15.3005C15.1745 8.8839 14.8776 9.3732 14.4094 9.7272C13.9416 10.0812 13.3386 10.258 12.6003 10.258Z"
        />
        <path
          d="M15.9891 1C16.5465 1 17 1.4535 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H2.0109C1.4535 13 1 12.5465 1 11.9891V2.0109C1 1.4535 1.4535 0.9999 2.0109 0.9999L15.9891 1ZM15.9891 0H2.0109C0.9003 0 0 0.9003 0 2.0109V11.9891C0 13.0997 0.9003 14 2.0109 14H15.9891C17.0997 14 18 13.0997 18 11.9891V2.0109C18 0.9003 17.0997 0 15.9891 0Z"
        />
      </svg>
    </media-captions-menu-button>
    <media-captions-menu
      hidden
      anchor="auto"
      part="bottom captions menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg></div
    ></media-captions-menu>
  </template>

  <template partial="AirplayButton">
    <media-airplay-button part="bottom airplay button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="icon">
        <path
          d="M16.1383 0H1.8618C0.8335 0 0 0.8335 0 1.8617V10.1382C0 11.1664 0.8335 12 1.8618 12H3.076C3.1204 11.9433 3.1503 11.8785 3.2012 11.826L4.004 11H1.8618C1.3866 11 1 10.6134 1 10.1382V1.8617C1 1.3865 1.3866 0.9999 1.8618 0.9999H16.1383C16.6135 0.9999 17.0001 1.3865 17.0001 1.8617V10.1382C17.0001 10.6134 16.6135 11 16.1383 11H13.9961L14.7989 11.826C14.8499 11.8785 14.8798 11.9432 14.9241 12H16.1383C17.1665 12 18.0001 11.1664 18.0001 10.1382V1.8617C18 0.8335 17.1665 0 16.1383 0Z"
        />
        <path
          d="M9.55061 8.21903C9.39981 8.06383 9.20001 7.98633 9.00011 7.98633C8.80021 7.98633 8.60031 8.06383 8.44951 8.21903L4.09771 12.697C3.62471 13.1838 3.96961 13.9998 4.64831 13.9998H13.3518C14.0304 13.9998 14.3754 13.1838 13.9023 12.697L9.55061 8.21903Z"
        />
      </svg>
    </media-airplay-button>
  </template>

  <template partial="FullscreenButton">
    <media-fullscreen-button part="bottom fullscreen button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M1.00745 4.39539L1.01445 1.98789C1.01605 1.43049 1.47085 0.978289 2.02835 0.979989L6.39375 0.992589L6.39665 -0.007411L2.03125 -0.020011C0.920646 -0.023211 0.0176463 0.874489 0.0144463 1.98509L0.00744629 4.39539H1.00745Z"
        />
        <path
          d="M17.0144 2.03431L17.0076 4.39541H18.0076L18.0144 2.03721C18.0176 0.926712 17.1199 0.0237125 16.0093 0.0205125L11.6439 0.0078125L11.641 1.00781L16.0064 1.02041C16.5638 1.02201 17.016 1.47681 17.0144 2.03431Z"
        />
        <path
          d="M16.9925 9.60498L16.9855 12.0124C16.9839 12.5698 16.5291 13.022 15.9717 13.0204L11.6063 13.0078L11.6034 14.0078L15.9688 14.0204C17.0794 14.0236 17.9823 13.1259 17.9855 12.0153L17.9925 9.60498H16.9925Z"
        />
        <path
          d="M0.985626 11.9661L0.992426 9.60498H-0.0074737L-0.0142737 11.9632C-0.0174737 13.0738 0.880226 13.9767 1.99083 13.98L6.35623 13.9926L6.35913 12.9926L1.99373 12.98C1.43633 12.9784 0.983926 12.5236 0.985626 11.9661Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M5.39655 -0.0200195L5.38955 2.38748C5.38795 2.94488 4.93315 3.39708 4.37565 3.39538L0.0103463 3.38278L0.00744629 4.38278L4.37285 4.39538C5.48345 4.39858 6.38635 3.50088 6.38965 2.39028L6.39665 -0.0200195H5.39655Z"
        />
        <path
          d="M12.6411 2.36891L12.6479 0.0078125H11.6479L11.6411 2.36601C11.6379 3.47651 12.5356 4.37951 13.6462 4.38271L18.0116 4.39531L18.0145 3.39531L13.6491 3.38271C13.0917 3.38111 12.6395 2.92641 12.6411 2.36891Z"
        />
        <path
          d="M12.6034 14.0204L12.6104 11.613C12.612 11.0556 13.0668 10.6034 13.6242 10.605L17.9896 10.6176L17.9925 9.61759L13.6271 9.60499C12.5165 9.60179 11.6136 10.4995 11.6104 11.6101L11.6034 14.0204H12.6034Z"
        />
        <path
          d="M5.359 11.6315L5.3522 13.9926H6.3522L6.359 11.6344C6.3622 10.5238 5.4645 9.62088 4.3539 9.61758L-0.0115043 9.60498L-0.0144043 10.605L4.351 10.6176C4.9084 10.6192 5.3607 11.074 5.359 11.6315Z"
        />
      </svg>
    </media-fullscreen-button>
  </template>

  <template partial="CastButton">
    <media-cast-button part="bottom cast button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="enter">
        <path
          d="M16.0072 0H2.0291C0.9185 0 0.0181 0.9003 0.0181 2.011V5.5009C0.357 5.5016 0.6895 5.5275 1.0181 5.5669V2.011C1.0181 1.4536 1.4716 1 2.029 1H16.0072C16.5646 1 17.0181 1.4536 17.0181 2.011V11.9891C17.0181 12.5465 16.5646 13 16.0072 13H8.4358C8.4746 13.3286 8.4999 13.6611 8.4999 13.9999H16.0071C17.1177 13.9999 18.018 13.0996 18.018 11.989V2.011C18.0181 0.9003 17.1178 0 16.0072 0ZM0 6.4999V7.4999C3.584 7.4999 6.5 10.4159 6.5 13.9999H7.5C7.5 9.8642 4.1357 6.4999 0 6.4999ZM0 8.7499V9.7499C2.3433 9.7499 4.25 11.6566 4.25 13.9999H5.25C5.25 11.1049 2.895 8.7499 0 8.7499ZM0.0181 11V14H3.0181C3.0181 12.3431 1.675 11 0.0181 11Z"
        />
      </svg>
      <svg viewBox="0 0 18 14" aria-hidden="true" slot="exit">
        <path
          d="M15.9891 0H2.01103C0.900434 0 3.35947e-05 0.9003 3.35947e-05 2.011V5.5009C0.338934 5.5016 0.671434 5.5275 1.00003 5.5669V2.011C1.00003 1.4536 1.45353 1 2.01093 1H15.9891C16.5465 1 17 1.4536 17 2.011V11.9891C17 12.5465 16.5465 13 15.9891 13H8.41773C8.45653 13.3286 8.48183 13.6611 8.48183 13.9999H15.989C17.0996 13.9999 17.9999 13.0996 17.9999 11.989V2.011C18 0.9003 17.0997 0 15.9891 0ZM-0.0180664 6.4999V7.4999C3.56593 7.4999 6.48193 10.4159 6.48193 13.9999H7.48193C7.48193 9.8642 4.11763 6.4999 -0.0180664 6.4999ZM-0.0180664 8.7499V9.7499C2.32523 9.7499 4.23193 11.6566 4.23193 13.9999H5.23193C5.23193 11.1049 2.87693 8.7499 -0.0180664 8.7499ZM3.35947e-05 11V14H3.00003C3.00003 12.3431 1.65693 11 3.35947e-05 11Z"
        />
        <path d="M2.15002 5.634C5.18352 6.4207 7.57252 8.8151 8.35282 11.8499H15.8501V2.1499H2.15002V5.634Z" />
      </svg>
    </media-cast-button>
  </template>

  <template partial="LiveButton">
    <media-live-button part="{{section ?? 'top'}} live button" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <span slot="text">Live</span>
    </media-live-button>
  </template>

  <template partial="PlaybackRateMenu">
    <media-playback-rate-menu-button part="bottom playback-rate button"></media-playback-rate-menu-button>
    <media-playback-rate-menu
      hidden
      anchor="auto"
      rates="{{playbackrates}}"
      exportparts="menu-item"
      part="bottom playback-rate menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-playback-rate-menu>
  </template>

  <template partial="VolumeRange">
    <media-volume-range
      part="bottom volume range"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-volume-range>
  </template>

  <template partial="TimeDisplay">
    <media-time-display
      remaining="{{defaultshowremainingtime}}"
      showduration="{{!hideduration}}"
      part="bottom time display"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    ></media-time-display>
  </template>

  <template partial="TimeRange">
    <media-time-range part="bottom time range" disabled="{{disabled}}" aria-disabled="{{disabled}}">
      <media-preview-thumbnail slot="preview"></media-preview-thumbnail>
      <media-preview-chapter-display slot="preview"></media-preview-chapter-display>
      <media-preview-time-display slot="preview"></media-preview-time-display>
      <div slot="preview" part="arrow"></div>
    </media-time-range>
  </template>

  <template partial="AudioTrackMenu">
    <media-audio-track-menu-button part="bottom audio-track button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 16">
        <path d="M9 15A7 7 0 1 1 9 1a7 7 0 0 1 0 14Zm0 1A8 8 0 1 0 9 0a8 8 0 0 0 0 16Z" />
        <path
          d="M5.2 6.3a.5.5 0 0 1 .5.5v2.4a.5.5 0 1 1-1 0V6.8a.5.5 0 0 1 .5-.5Zm2.4-2.4a.5.5 0 0 1 .5.5v7.2a.5.5 0 0 1-1 0V4.4a.5.5 0 0 1 .5-.5ZM10 5.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.4-.8a.5.5 0 0 1 .5.5v5.6a.5.5 0 0 1-1 0V5.2a.5.5 0 0 1 .5-.5Z"
        />
      </svg>
    </media-audio-track-menu-button>
    <media-audio-track-menu
      hidden
      anchor="auto"
      part="bottom audio-track menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
      exportparts="menu-item"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-audio-track-menu>
  </template>

  <template partial="RenditionMenu">
    <media-rendition-menu-button part="bottom rendition button">
      <svg aria-hidden="true" slot="icon" viewBox="0 0 18 14">
        <path
          d="M2.25 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM9 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6.75 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        />
      </svg>
    </media-rendition-menu-button>
    <media-rendition-menu
      hidden
      anchor="auto"
      part="bottom rendition menu"
      disabled="{{disabled}}"
      aria-disabled="{{disabled}}"
    >
      <div slot="checked-indicator">
        <style>
          .indicator {
            position: relative;
            top: 1px;
            width: 0.9em;
            height: auto;
            fill: var(--_accent-color);
            margin-right: 5px;
          }

          [aria-checked='false'] .indicator {
            display: none;
          }
        </style>
        <svg viewBox="0 0 14 18" class="indicator">
          <path
            d="M12.252 3.48c-.115.033-.301.161-.425.291-.059.063-1.407 1.815-2.995 3.894s-2.897 3.79-2.908 3.802c-.013.014-.661-.616-1.672-1.624-.908-.905-1.702-1.681-1.765-1.723-.401-.27-.783-.211-1.176.183a1.285 1.285 0 0 0-.261.342.582.582 0 0 0-.082.35c0 .165.01.205.08.35.075.153.213.296 2.182 2.271 1.156 1.159 2.17 2.159 2.253 2.222.189.143.338.196.539.194.203-.003.412-.104.618-.299.205-.193 6.7-8.693 6.804-8.903a.716.716 0 0 0 .085-.345c.01-.179.005-.203-.062-.339-.124-.252-.45-.531-.746-.639a.784.784 0 0 0-.469-.027"
            fill-rule="evenodd"
          />
        </svg>
      </div>
    </media-rendition-menu>
  </template>

  <template partial="MuxBadge">
    <div part="mux-badge">
      <a href="https://www.mux.com/player" target="_blank">
        <span class="mux-badge-text">Powered by</span>
        <div class="mux-badge-logo">
          <svg
            viewBox="0 0 1600 500"
            style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2"
          >
            <g>
              <path
                d="M994.287,93.486c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m0,-93.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,68.943 -56.09,125.033 -125.032,125.033c-68.942,-0 -125.03,-56.09 -125.03,-125.033l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486c-34.509,-0 -62.484,27.976 -62.484,62.486l0,187.511c0,137.853 112.149,250.003 249.999,250.003c137.851,-0 250.001,-112.15 250.001,-250.003l0,-187.511c0,-34.51 -27.976,-62.486 -62.485,-62.486"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M1537.51,468.511c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m-275.883,-218.509l-143.33,143.329c-24.402,24.402 -24.402,63.966 0,88.368c24.402,24.402 63.967,24.402 88.369,-0l143.33,-143.329l143.328,143.329c24.402,24.4 63.967,24.402 88.369,-0c24.403,-24.402 24.403,-63.966 0.001,-88.368l-143.33,-143.329l0.001,-0.004l143.329,-143.329c24.402,-24.402 24.402,-63.965 0,-88.367c-24.402,-24.402 -63.967,-24.402 -88.369,-0l-143.329,143.328l-143.329,-143.328c-24.402,-24.401 -63.967,-24.402 -88.369,-0c-24.402,24.402 -24.402,63.965 0,88.367l143.329,143.329l0,0.004Z"
                style="fill-rule: nonzero"
              ></path>
              <path
                d="M437.511,468.521c-17.121,-0 -31,-13.879 -31,-31c0,-17.121 13.879,-31 31,-31c17.121,-0 31,13.879 31,31c0,17.121 -13.879,31 -31,31m23.915,-463.762c-23.348,-9.672 -50.226,-4.327 -68.096,13.544l-143.331,143.329l-143.33,-143.329c-17.871,-17.871 -44.747,-23.216 -68.096,-13.544c-23.349,9.671 -38.574,32.455 -38.574,57.729l0,375.026c0,34.51 27.977,62.486 62.487,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-224.173l80.843,80.844c24.404,24.402 63.965,24.402 88.369,-0l80.843,-80.844l0,224.173c0,34.51 27.976,62.486 62.486,62.486c34.51,-0 62.486,-27.976 62.486,-62.486l0,-375.026c0,-25.274 -15.224,-48.058 -38.573,-57.729"
                style="fill-rule: nonzero"
              ></path>
            </g>
          </svg>
        </div>
      </a>
    </div>
  </template>

  <media-controller
    part="controller"
    defaultstreamtype="{{defaultstreamtype ?? 'on-demand'}}"
    breakpoints="sm:470"
    gesturesdisabled="{{disabled}}"
    hotkeys="{{hotkeys}}"
    nohotkeys="{{nohotkeys}}"
    novolumepref="{{novolumepref}}"
    audio="{{audio}}"
    noautoseektolive="{{noautoseektolive}}"
    defaultsubtitles="{{defaultsubtitles}}"
    defaultduration="{{defaultduration ?? false}}"
    keyboardforwardseekoffset="{{forwardseekoffset}}"
    keyboardbackwardseekoffset="{{backwardseekoffset}}"
    exportparts="layer, media-layer, poster-layer, vertical-layer, centered-layer, gesture-layer"
    style="--_pre-playback-place:{{preplaybackplace ?? 'center'}}"
  >
    <slot name="media" slot="media"></slot>
    <slot name="poster" slot="poster"></slot>

    <media-loading-indicator slot="centered-chrome" noautohide></media-loading-indicator>
    <media-error-dialog slot="dialog" noautohide></media-error-dialog>

    <template if="!audio">
      <!-- Pre-playback UI -->
      <!-- same for both on-demand and live -->
      <div slot="centered-chrome" class="center-controls pre-playback">
        <template if="!breakpointsm">{{>PlayButton section="center"}}</template>
        <template if="breakpointsm">{{>PrePlayButton section="center"}}</template>
      </div>

      <!-- Mux Badge -->
      <template if="proudlydisplaymuxbadge"> {{>MuxBadge}} </template>

      <!-- Autoplay centered unmute button -->
      <!--
        todo: figure out how show this with available state variables
        needs to show when:
        - autoplay is enabled
        - playback has been successful
        - audio is muted
        - in place / instead of the pre-plaback play button
        - not to show again after user has interacted with this button
          - OR user has interacted with the mute button in the control bar
      -->
      <!--
        There should be a >MuteButton to the left of the "Unmute" text, but a templating bug
        makes it appear even if commented out in the markup, add it back when code is un-commented
      -->
      <!-- <div slot="centered-chrome" class="autoplay-unmute">
        <div role="button" class="autoplay-unmute-btn">Unmute</div>
      </div> -->

      <template if="streamtype == 'on-demand'">
        <template if="breakpointsm">
          <media-control-bar part="control-bar top" slot="top-chrome">{{>TitleDisplay}} </media-control-bar>
        </template>
        {{>TimeRange}}
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>SeekBackwardButton}} {{>SeekForwardButton}} {{>TimeDisplay}} {{>MuteButton}}
          {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>PlaybackRateMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}}
          {{>CastButton}} {{>PipButton}} {{>FullscreenButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <media-control-bar part="control-bar top" slot="top-chrome">
          {{>LiveButton}}
          <template if="breakpointsm"> {{>TitleDisplay}} </template>
        </media-control-bar>
        <template if="targetlivewindow > 0">{{>TimeRange}}</template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="targetlivewindow > 0">{{>SeekBackwardButton}} {{>SeekForwardButton}}</template>
          {{>MuteButton}} {{>VolumeRange}}
          <div class="spacer"></div>
          {{>RenditionMenu}} {{>AudioTrackMenu}} {{>CaptionsMenu}} {{>AirplayButton}} {{>CastButton}} {{>PipButton}}
          {{>FullscreenButton}}
        </media-control-bar>
      </template>
    </template>

    <template if="audio">
      <template if="streamtype == 'on-demand'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}}
          <template if="breakpointsm"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          {{>MuteButton}}
          <template if="breakpointsm">{{>VolumeRange}}</template>
          {{>TimeDisplay}} {{>TimeRange}}
          <template if="breakpointsm">{{>PlaybackRateMenu}}</template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>

      <template if="streamtype == 'live'">
        <template if="title">
          <media-control-bar part="control-bar top">{{>TitleDisplay}}</media-control-bar>
        </template>
        <media-control-bar part="control-bar bottom">
          {{>PlayButton}} {{>LiveButton section="bottom"}} {{>MuteButton}}
          <template if="breakpointsm">
            {{>VolumeRange}}
            <template if="targetlivewindow > 0"> {{>SeekBackwardButton}} {{>SeekForwardButton}} </template>
          </template>
          <template if="targetlivewindow > 0"> {{>TimeDisplay}} {{>TimeRange}} </template>
          <template if="!targetlivewindow"><div class="spacer"></div></template>
          {{>AirplayButton}} {{>CastButton}}
        </media-control-bar>
      </template>
    </template>

    <slot></slot>
  </media-controller>
</template>
`,
        E$ = v5.createElement("template");
      "innerHTML" in E$ && (E$.innerHTML = Eq);
      var EK,
        EY,
        EG = class extends hX {};
      ((EG.template =
        null == (EY = null == (EK = E$.content) ? void 0 : EK.children)
          ? void 0
          : EY[0]),
        v4.customElements.get("media-theme-gerwig") ||
          v4.customElements.define("media-theme-gerwig", EG));
      var Ej = { SRC: "src", POSTER: "poster" },
        EQ = {
          STYLE: "style",
          DEFAULT_HIDDEN_CAPTIONS: "default-hidden-captions",
          PRIMARY_COLOR: "primary-color",
          SECONDARY_COLOR: "secondary-color",
          ACCENT_COLOR: "accent-color",
          FORWARD_SEEK_OFFSET: "forward-seek-offset",
          BACKWARD_SEEK_OFFSET: "backward-seek-offset",
          PLAYBACK_TOKEN: "playback-token",
          THUMBNAIL_TOKEN: "thumbnail-token",
          STORYBOARD_TOKEN: "storyboard-token",
          DRM_TOKEN: "drm-token",
          STORYBOARD_SRC: "storyboard-src",
          THUMBNAIL_TIME: "thumbnail-time",
          AUDIO: "audio",
          NOHOTKEYS: "nohotkeys",
          HOTKEYS: "hotkeys",
          PLAYBACK_RATES: "playbackrates",
          DEFAULT_SHOW_REMAINING_TIME: "default-show-remaining-time",
          DEFAULT_DURATION: "default-duration",
          TITLE: "title",
          VIDEO_TITLE: "video-title",
          PLACEHOLDER: "placeholder",
          THEME: "theme",
          DEFAULT_STREAM_TYPE: "default-stream-type",
          TARGET_LIVE_WINDOW: "target-live-window",
          EXTRA_SOURCE_PARAMS: "extra-source-params",
          NO_VOLUME_PREF: "no-volume-pref",
          CAST_RECEIVER: "cast-receiver",
          NO_TOOLTIPS: "no-tooltips",
          PROUDLY_DISPLAY_MUX_BADGE: "proudly-display-mux-badge",
        },
        EZ = [
          "audio",
          "backwardseekoffset",
          "defaultduration",
          "defaultshowremainingtime",
          "defaultsubtitles",
          "noautoseektolive",
          "disabled",
          "exportparts",
          "forwardseekoffset",
          "hideduration",
          "hotkeys",
          "nohotkeys",
          "playbackrates",
          "defaultstreamtype",
          "streamtype",
          "style",
          "targetlivewindow",
          "template",
          "title",
          "videotitle",
          "novolumepref",
          "proudlydisplaymuxbadge",
        ],
        Ez = sP.formatErrorMessage;
      function EX(e) {
        let t = e.videoTitle ? { video_title: e.videoTitle } : {};
        return e
          .getAttributeNames()
          .filter((e) => e.startsWith("metadata-"))
          .reduce((t, i) => {
            let a = e.getAttribute(i);
            return (
              null !== a &&
                (t[i.replace(/^metadata-/, "").replace(/-/g, "_")] = a),
              t
            );
          }, t);
      }
      sP.formatErrorMessage = (e) => {
        var t, i;
        if (e instanceof tP) {
          let a = EH(e, !1);
          return `
      ${null != a && a.title ? `<h3>${a.title}</h3>` : ""}
      ${
        (null != a && a.message) || (null != a && a.linkUrl)
          ? `<p>
        ${null == a ? void 0 : a.message}
        ${
          null != a && a.linkUrl
            ? `<a
              href="${a.linkUrl}"
              target="_blank"
              rel="external noopener"
              aria-label="${null != (t = a.linkText) ? t : ""} ${t9("(opens in a new window)")}"
              >${null != (i = a.linkText) ? i : a.linkUrl}</a
            >`
            : ""
        }
      </p>`
          : ""
      }
    `;
        }
        return Ez(e);
      };
      var EJ,
        E0,
        E1,
        E2,
        E3,
        E4,
        E5,
        E9,
        E8,
        E6,
        E7,
        be,
        bt,
        bi,
        ba,
        br = Object.values(hh),
        bn = Object.values(Ej),
        bs = Object.values(EQ),
        bo = "mux-player",
        bl = { isDialogOpen: !1 },
        bd = { redundant_streams: !0 },
        bu = class extends ET {
          constructor() {
            (super(),
              pc(this, E5),
              pc(this, EJ),
              pc(this, E0, !1),
              pc(this, E1, {}),
              pc(this, E2, !0),
              pc(this, E3, new Eu(this, "hotkeys")),
              pc(this, E4, {
                ...bl,
                onCloseErrorDialog: (e) => {
                  var t;
                  (null == (t = e.composedPath()[0]) ? void 0 : t.localName) ===
                    "media-error-dialog" &&
                    pm(this, E5, E6).call(this, { isDialogOpen: !1 });
                },
                onFocusInErrorDialog: (e) => {
                  var t;
                  (null == (t = e.composedPath()[0]) ? void 0 : t.localName) ===
                    "media-error-dialog" &&
                    (Ea(this, v5.activeElement) || e.preventDefault());
                },
              }),
              ph(this, EJ, iG()),
              this.attachShadow({ mode: "open" }),
              pm(this, E5, E8).call(this),
              this.isConnected && pm(this, E5, E9).call(this));
          }
          static get NAME() {
            return bo;
          }
          static get VERSION() {
            return En;
          }
          static get observedAttributes() {
            var e;
            return [
              ...(null != (e = ET.observedAttributes) ? e : []),
              ...bn,
              ...br,
              ...bs,
            ];
          }
          get mediaTheme() {
            var e;
            return null == (e = this.shadowRoot)
              ? void 0
              : e.querySelector("media-theme");
          }
          get mediaController() {
            var e, t;
            return null ==
              (t = null == (e = this.mediaTheme) ? void 0 : e.shadowRoot)
              ? void 0
              : t.querySelector("media-controller");
          }
          connectedCallback() {
            var e;
            let t =
              null == (e = this.shadowRoot)
                ? void 0
                : e.querySelector("mux-video");
            t && (t.metadata = EX(this));
          }
          attributeChangedCallback(e, t, i) {
            var a;
            switch (
              (pm(this, E5, E9).call(this),
              super.attributeChangedCallback(e, t, i),
              e)
            ) {
              case EQ.HOTKEYS:
                pu(this, E3).value = i;
                break;
              case EQ.THUMBNAIL_TIME:
                null != i &&
                  this.tokens.thumbnail &&
                  Eh(
                    t9(
                      "Use of thumbnail-time with thumbnail-token is currently unsupported. Ignore thumbnail-time.",
                    ).toString(),
                  );
                break;
              case EQ.THUMBNAIL_TOKEN:
                if (i) {
                  let e = t1(i);
                  if (e) {
                    let { aud: t } = e,
                      i = iy.THUMBNAIL;
                    t !== i &&
                      Eh(
                        t9(
                          "The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.",
                        ).format({
                          aud: t,
                          expectedAud: i,
                          tokenNamePrefix: "thumbnail",
                        }),
                      );
                  }
                }
                break;
              case EQ.STORYBOARD_TOKEN:
                if (i) {
                  let e = t1(i);
                  if (e) {
                    let { aud: t } = e,
                      i = iy.STORYBOARD;
                    t !== i &&
                      Eh(
                        t9(
                          "The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.",
                        ).format({
                          aud: t,
                          expectedAud: i,
                          tokenNamePrefix: "storyboard",
                        }),
                      );
                  }
                }
                break;
              case EQ.DRM_TOKEN:
                if (i) {
                  let e = t1(i);
                  if (e) {
                    let { aud: t } = e,
                      i = iy.DRM;
                    t !== i &&
                      Eh(
                        t9(
                          "The {tokenNamePrefix}-token has an incorrect aud value: {aud}. aud value should be {expectedAud}.",
                        ).format({
                          aud: t,
                          expectedAud: i,
                          tokenNamePrefix: "drm",
                        }),
                      );
                  }
                }
                break;
              case hh.PLAYBACK_ID:
                null != i &&
                  i.includes("?token") &&
                  Em(
                    t9(
                      "The specificed playback ID {playbackId} contains a token which must be provided via the playback-token attribute.",
                    ).format({ playbackId: i }),
                  );
                break;
              case hh.STREAM_TYPE:
                i && ![tH.LIVE, tH.ON_DEMAND, tH.UNKNOWN].includes(i)
                  ? ["ll-live", "live:dvr", "ll-live:dvr"].includes(
                      this.streamType,
                    )
                    ? (this.targetLiveWindow = i.includes("dvr")
                        ? Number.POSITIVE_INFINITY
                        : 0)
                    : Ep({
                        file: "invalid-stream-type.md",
                        message: t9(
                          "Invalid stream-type value supplied: `{streamType}`. Please provide stream-type as either: `on-demand` or `live`",
                        ).format({ streamType: this.streamType }),
                      })
                  : i === tH.LIVE
                    ? null == this.getAttribute(EQ.TARGET_LIVE_WINDOW) &&
                      (this.targetLiveWindow = 0)
                    : (this.targetLiveWindow = Number.NaN);
            }
            ([hh.PLAYBACK_ID, Ej.SRC, EQ.PLAYBACK_TOKEN].includes(e) &&
              t !== i &&
              ph(this, E4, { ...pu(this, E4), ...bl }),
              pm(this, E5, E7).call(this, {
                [null != (a = Ed[e]) ? a : v8(e)]: i,
              }));
          }
          async requestFullscreen(e) {
            var t;
            if (
              !(
                !this.mediaController ||
                this.mediaController.hasAttribute(aA.MEDIA_IS_FULLSCREEN)
              )
            )
              return (
                null == (t = this.mediaController) ||
                  t.dispatchEvent(
                    new v4.CustomEvent(ag.MEDIA_ENTER_FULLSCREEN_REQUEST, {
                      composed: !0,
                      bubbles: !0,
                    }),
                  ),
                new Promise((e, t) => {
                  var i;
                  null == (i = this.mediaController) ||
                    i.addEventListener(ak.MEDIA_IS_FULLSCREEN, () => e(), {
                      once: !0,
                    });
                })
              );
          }
          async exitFullscreen() {
            var e;
            if (
              !(
                !this.mediaController ||
                !this.mediaController.hasAttribute(aA.MEDIA_IS_FULLSCREEN)
              )
            )
              return (
                null == (e = this.mediaController) ||
                  e.dispatchEvent(
                    new v4.CustomEvent(ag.MEDIA_EXIT_FULLSCREEN_REQUEST, {
                      composed: !0,
                      bubbles: !0,
                    }),
                  ),
                new Promise((e, t) => {
                  var i;
                  null == (i = this.mediaController) ||
                    i.addEventListener(ak.MEDIA_IS_FULLSCREEN, () => e(), {
                      once: !0,
                    });
                })
              );
          }
          get preferCmcd() {
            var e;
            return null != (e = this.getAttribute(hh.PREFER_CMCD)) ? e : void 0;
          }
          set preferCmcd(e) {
            e !== this.preferCmcd &&
              (e
                ? tq.includes(e)
                  ? this.setAttribute(hh.PREFER_CMCD, e)
                  : Eh(
                      `Invalid value for preferCmcd. Must be one of ${tq.join()}`,
                    )
                : this.removeAttribute(hh.PREFER_CMCD));
          }
          get hasPlayed() {
            var e, t;
            return (
              null !=
                (t =
                  null == (e = this.mediaController)
                    ? void 0
                    : e.hasAttribute(aA.MEDIA_HAS_PLAYED)) && t
            );
          }
          get inLiveWindow() {
            var e;
            return null == (e = this.mediaController)
              ? void 0
              : e.hasAttribute(aA.MEDIA_TIME_IS_LIVE);
          }
          get _hls() {
            var e;
            return null == (e = this.media) ? void 0 : e._hls;
          }
          get mux() {
            var e;
            return null == (e = this.media) ? void 0 : e.mux;
          }
          get theme() {
            var e;
            return null != (e = this.getAttribute(EQ.THEME)) ? e : "gerwig";
          }
          set theme(e) {
            this.setAttribute(EQ.THEME, `${e}`);
          }
          get themeProps() {
            let e = this.mediaTheme;
            if (!e) return;
            let t = {};
            for (let i of e.getAttributeNames()) {
              if (EZ.includes(i)) continue;
              let a = e.getAttribute(i);
              t[v8(i)] = "" === a || a;
            }
            return t;
          }
          set themeProps(e) {
            var t, i;
            pm(this, E5, E9).call(this);
            let a = { ...this.themeProps, ...e };
            for (let r in a) {
              if (EZ.includes(r)) continue;
              let a = null == e ? void 0 : e[r];
              "boolean" == typeof a || null == a
                ? null == (t = this.mediaTheme) || t.toggleAttribute(v9(r), !!a)
                : null == (i = this.mediaTheme) || i.setAttribute(v9(r), a);
            }
          }
          get playbackId() {
            var e;
            return null != (e = this.getAttribute(hh.PLAYBACK_ID)) ? e : void 0;
          }
          set playbackId(e) {
            e
              ? this.setAttribute(hh.PLAYBACK_ID, e)
              : this.removeAttribute(hh.PLAYBACK_ID);
          }
          get src() {
            var e, t;
            return this.playbackId
              ? null != (e = bc(this, Ej.SRC))
                ? e
                : void 0
              : null != (t = this.getAttribute(Ej.SRC))
                ? t
                : void 0;
          }
          set src(e) {
            e ? this.setAttribute(Ej.SRC, e) : this.removeAttribute(Ej.SRC);
          }
          get poster() {
            var e;
            let t = this.getAttribute(Ej.POSTER);
            if (null != t) return t;
            let { tokens: i } = this;
            return i.playback && !i.thumbnail
              ? void Eh(
                  "Missing expected thumbnail token. No poster image will be shown",
                )
              : this.playbackId && !this.audio
                ? Es(this.playbackId, {
                    customDomain: this.customDomain,
                    thumbnailTime:
                      null != (e = this.thumbnailTime) ? e : this.startTime,
                    programTime: this.programStartTime,
                    token: i.thumbnail,
                  })
                : void 0;
          }
          set poster(e) {
            e || "" === e
              ? this.setAttribute(Ej.POSTER, e)
              : this.removeAttribute(Ej.POSTER);
          }
          get storyboardSrc() {
            var e;
            return null != (e = this.getAttribute(EQ.STORYBOARD_SRC))
              ? e
              : void 0;
          }
          set storyboardSrc(e) {
            e
              ? this.setAttribute(EQ.STORYBOARD_SRC, e)
              : this.removeAttribute(EQ.STORYBOARD_SRC);
          }
          get storyboard() {
            let { tokens: e } = this;
            return this.storyboardSrc && !e.storyboard
              ? this.storyboardSrc
              : this.audio ||
                  !this.playbackId ||
                  !this.streamType ||
                  [tH.LIVE, tH.UNKNOWN].includes(this.streamType) ||
                  (e.playback && !e.storyboard)
                ? void 0
                : Eo(this.playbackId, {
                    customDomain: this.customDomain,
                    token: e.storyboard,
                    programStartTime: this.programStartTime,
                    programEndTime: this.programEndTime,
                  });
          }
          get audio() {
            return this.hasAttribute(EQ.AUDIO);
          }
          set audio(e) {
            if (!e) return void this.removeAttribute(EQ.AUDIO);
            this.setAttribute(EQ.AUDIO, "");
          }
          get hotkeys() {
            return pu(this, E3);
          }
          get nohotkeys() {
            return this.hasAttribute(EQ.NOHOTKEYS);
          }
          set nohotkeys(e) {
            if (!e) return void this.removeAttribute(EQ.NOHOTKEYS);
            this.setAttribute(EQ.NOHOTKEYS, "");
          }
          get thumbnailTime() {
            return v6(this.getAttribute(EQ.THUMBNAIL_TIME));
          }
          set thumbnailTime(e) {
            this.setAttribute(EQ.THUMBNAIL_TIME, `${e}`);
          }
          get videoTitle() {
            var e, t;
            return null !=
              (t =
                null != (e = this.getAttribute(EQ.VIDEO_TITLE))
                  ? e
                  : this.getAttribute(EQ.TITLE))
              ? t
              : "";
          }
          set videoTitle(e) {
            e !== this.videoTitle &&
              (e
                ? this.setAttribute(EQ.VIDEO_TITLE, e)
                : this.removeAttribute(EQ.VIDEO_TITLE));
          }
          get placeholder() {
            var e;
            return null != (e = bc(this, EQ.PLACEHOLDER)) ? e : "";
          }
          set placeholder(e) {
            this.setAttribute(EQ.PLACEHOLDER, `${e}`);
          }
          get primaryColor() {
            var e, t;
            let i = this.getAttribute(EQ.PRIMARY_COLOR);
            if (
              null != i ||
              (this.mediaTheme &&
                (i =
                  null ==
                  (t =
                    null == (e = v4.getComputedStyle(this.mediaTheme))
                      ? void 0
                      : e.getPropertyValue("--_primary-color"))
                    ? void 0
                    : t.trim()))
            )
              return i;
          }
          set primaryColor(e) {
            this.setAttribute(EQ.PRIMARY_COLOR, `${e}`);
          }
          get secondaryColor() {
            var e, t;
            let i = this.getAttribute(EQ.SECONDARY_COLOR);
            if (
              null != i ||
              (this.mediaTheme &&
                (i =
                  null ==
                  (t =
                    null == (e = v4.getComputedStyle(this.mediaTheme))
                      ? void 0
                      : e.getPropertyValue("--_secondary-color"))
                    ? void 0
                    : t.trim()))
            )
              return i;
          }
          set secondaryColor(e) {
            this.setAttribute(EQ.SECONDARY_COLOR, `${e}`);
          }
          get accentColor() {
            var e, t;
            let i = this.getAttribute(EQ.ACCENT_COLOR);
            if (
              null != i ||
              (this.mediaTheme &&
                (i =
                  null ==
                  (t =
                    null == (e = v4.getComputedStyle(this.mediaTheme))
                      ? void 0
                      : e.getPropertyValue("--_accent-color"))
                    ? void 0
                    : t.trim()))
            )
              return i;
          }
          set accentColor(e) {
            this.setAttribute(EQ.ACCENT_COLOR, `${e}`);
          }
          get defaultShowRemainingTime() {
            return this.hasAttribute(EQ.DEFAULT_SHOW_REMAINING_TIME);
          }
          set defaultShowRemainingTime(e) {
            e
              ? this.setAttribute(EQ.DEFAULT_SHOW_REMAINING_TIME, "")
              : this.removeAttribute(EQ.DEFAULT_SHOW_REMAINING_TIME);
          }
          get playbackRates() {
            if (this.hasAttribute(EQ.PLAYBACK_RATES))
              return this.getAttribute(EQ.PLAYBACK_RATES)
                .trim()
                .split(/\s*,?\s+/)
                .map((e) => Number(e))
                .filter((e) => !Number.isNaN(e))
                .sort((e, t) => e - t);
          }
          set playbackRates(e) {
            if (!e) return void this.removeAttribute(EQ.PLAYBACK_RATES);
            this.setAttribute(EQ.PLAYBACK_RATES, e.join(" "));
          }
          get forwardSeekOffset() {
            var e;
            return null != (e = v6(this.getAttribute(EQ.FORWARD_SEEK_OFFSET)))
              ? e
              : 10;
          }
          set forwardSeekOffset(e) {
            this.setAttribute(EQ.FORWARD_SEEK_OFFSET, `${e}`);
          }
          get backwardSeekOffset() {
            var e;
            return null != (e = v6(this.getAttribute(EQ.BACKWARD_SEEK_OFFSET)))
              ? e
              : 10;
          }
          set backwardSeekOffset(e) {
            this.setAttribute(EQ.BACKWARD_SEEK_OFFSET, `${e}`);
          }
          get defaultHiddenCaptions() {
            return this.hasAttribute(EQ.DEFAULT_HIDDEN_CAPTIONS);
          }
          set defaultHiddenCaptions(e) {
            e
              ? this.setAttribute(EQ.DEFAULT_HIDDEN_CAPTIONS, "")
              : this.removeAttribute(EQ.DEFAULT_HIDDEN_CAPTIONS);
          }
          get defaultDuration() {
            return v6(this.getAttribute(EQ.DEFAULT_DURATION));
          }
          set defaultDuration(e) {
            null == e
              ? this.removeAttribute(EQ.DEFAULT_DURATION)
              : this.setAttribute(EQ.DEFAULT_DURATION, `${e}`);
          }
          get playerInitTime() {
            return this.hasAttribute(hh.PLAYER_INIT_TIME)
              ? v6(this.getAttribute(hh.PLAYER_INIT_TIME))
              : pu(this, EJ);
          }
          set playerInitTime(e) {
            e != this.playerInitTime &&
              (null == e
                ? this.removeAttribute(hh.PLAYER_INIT_TIME)
                : this.setAttribute(hh.PLAYER_INIT_TIME, `${+e}`));
          }
          get playerSoftwareName() {
            var e;
            return null != (e = this.getAttribute(hh.PLAYER_SOFTWARE_NAME))
              ? e
              : bo;
          }
          get playerSoftwareVersion() {
            var e;
            return null != (e = this.getAttribute(hh.PLAYER_SOFTWARE_VERSION))
              ? e
              : En;
          }
          get beaconCollectionDomain() {
            var e;
            return null != (e = this.getAttribute(hh.BEACON_COLLECTION_DOMAIN))
              ? e
              : void 0;
          }
          set beaconCollectionDomain(e) {
            e !== this.beaconCollectionDomain &&
              (e
                ? this.setAttribute(hh.BEACON_COLLECTION_DOMAIN, e)
                : this.removeAttribute(hh.BEACON_COLLECTION_DOMAIN));
          }
          get maxResolution() {
            var e;
            return null != (e = this.getAttribute(hh.MAX_RESOLUTION))
              ? e
              : void 0;
          }
          set maxResolution(e) {
            e !== this.maxResolution &&
              (e
                ? this.setAttribute(hh.MAX_RESOLUTION, e)
                : this.removeAttribute(hh.MAX_RESOLUTION));
          }
          get minResolution() {
            var e;
            return null != (e = this.getAttribute(hh.MIN_RESOLUTION))
              ? e
              : void 0;
          }
          set minResolution(e) {
            e !== this.minResolution &&
              (e
                ? this.setAttribute(hh.MIN_RESOLUTION, e)
                : this.removeAttribute(hh.MIN_RESOLUTION));
          }
          get renditionOrder() {
            var e;
            return null != (e = this.getAttribute(hh.RENDITION_ORDER))
              ? e
              : void 0;
          }
          set renditionOrder(e) {
            e !== this.renditionOrder &&
              (e
                ? this.setAttribute(hh.RENDITION_ORDER, e)
                : this.removeAttribute(hh.RENDITION_ORDER));
          }
          get programStartTime() {
            return v6(this.getAttribute(hh.PROGRAM_START_TIME));
          }
          set programStartTime(e) {
            null == e
              ? this.removeAttribute(hh.PROGRAM_START_TIME)
              : this.setAttribute(hh.PROGRAM_START_TIME, `${e}`);
          }
          get programEndTime() {
            return v6(this.getAttribute(hh.PROGRAM_END_TIME));
          }
          set programEndTime(e) {
            null == e
              ? this.removeAttribute(hh.PROGRAM_END_TIME)
              : this.setAttribute(hh.PROGRAM_END_TIME, `${e}`);
          }
          get assetStartTime() {
            return v6(this.getAttribute(hh.ASSET_START_TIME));
          }
          set assetStartTime(e) {
            null == e
              ? this.removeAttribute(hh.ASSET_START_TIME)
              : this.setAttribute(hh.ASSET_START_TIME, `${e}`);
          }
          get assetEndTime() {
            return v6(this.getAttribute(hh.ASSET_END_TIME));
          }
          set assetEndTime(e) {
            null == e
              ? this.removeAttribute(hh.ASSET_END_TIME)
              : this.setAttribute(hh.ASSET_END_TIME, `${e}`);
          }
          get extraSourceParams() {
            return this.hasAttribute(EQ.EXTRA_SOURCE_PARAMS)
              ? [
                  ...new URLSearchParams(
                    this.getAttribute(EQ.EXTRA_SOURCE_PARAMS),
                  ).entries(),
                ].reduce((e, [t, i]) => ((e[t] = i), e), {})
              : bd;
          }
          set extraSourceParams(e) {
            null == e
              ? this.removeAttribute(EQ.EXTRA_SOURCE_PARAMS)
              : this.setAttribute(
                  EQ.EXTRA_SOURCE_PARAMS,
                  new URLSearchParams(e).toString(),
                );
          }
          get customDomain() {
            var e;
            return null != (e = this.getAttribute(hh.CUSTOM_DOMAIN))
              ? e
              : void 0;
          }
          set customDomain(e) {
            e !== this.customDomain &&
              (e
                ? this.setAttribute(hh.CUSTOM_DOMAIN, e)
                : this.removeAttribute(hh.CUSTOM_DOMAIN));
          }
          get envKey() {
            var e;
            return null != (e = bc(this, hh.ENV_KEY)) ? e : void 0;
          }
          set envKey(e) {
            this.setAttribute(hh.ENV_KEY, `${e}`);
          }
          get noVolumePref() {
            return this.hasAttribute(EQ.NO_VOLUME_PREF);
          }
          set noVolumePref(e) {
            e
              ? this.setAttribute(EQ.NO_VOLUME_PREF, "")
              : this.removeAttribute(EQ.NO_VOLUME_PREF);
          }
          get debug() {
            return null != bc(this, hh.DEBUG);
          }
          set debug(e) {
            e
              ? this.setAttribute(hh.DEBUG, "")
              : this.removeAttribute(hh.DEBUG);
          }
          get disableTracking() {
            return null != bc(this, hh.DISABLE_TRACKING);
          }
          set disableTracking(e) {
            this.toggleAttribute(hh.DISABLE_TRACKING, !!e);
          }
          get disableCookies() {
            return null != bc(this, hh.DISABLE_COOKIES);
          }
          set disableCookies(e) {
            e
              ? this.setAttribute(hh.DISABLE_COOKIES, "")
              : this.removeAttribute(hh.DISABLE_COOKIES);
          }
          get streamType() {
            var e, t, i;
            return null !=
              (i =
                null != (t = this.getAttribute(hh.STREAM_TYPE))
                  ? t
                  : null == (e = this.media)
                    ? void 0
                    : e.streamType)
              ? i
              : tH.UNKNOWN;
          }
          set streamType(e) {
            this.setAttribute(hh.STREAM_TYPE, `${e}`);
          }
          get defaultStreamType() {
            var e, t, i;
            return null !=
              (i =
                null != (t = this.getAttribute(EQ.DEFAULT_STREAM_TYPE))
                  ? t
                  : null == (e = this.mediaController)
                    ? void 0
                    : e.getAttribute(EQ.DEFAULT_STREAM_TYPE))
              ? i
              : tH.ON_DEMAND;
          }
          set defaultStreamType(e) {
            e
              ? this.setAttribute(EQ.DEFAULT_STREAM_TYPE, e)
              : this.removeAttribute(EQ.DEFAULT_STREAM_TYPE);
          }
          get targetLiveWindow() {
            var e, t;
            return this.hasAttribute(EQ.TARGET_LIVE_WINDOW)
              ? +this.getAttribute(EQ.TARGET_LIVE_WINDOW)
              : null !=
                  (t = null == (e = this.media) ? void 0 : e.targetLiveWindow)
                ? t
                : Number.NaN;
          }
          set targetLiveWindow(e) {
            e == this.targetLiveWindow ||
              (Number.isNaN(e) && Number.isNaN(this.targetLiveWindow)) ||
              (null == e
                ? this.removeAttribute(EQ.TARGET_LIVE_WINDOW)
                : this.setAttribute(EQ.TARGET_LIVE_WINDOW, `${+e}`));
          }
          get liveEdgeStart() {
            var e;
            return null == (e = this.media) ? void 0 : e.liveEdgeStart;
          }
          get startTime() {
            return v6(bc(this, hh.START_TIME));
          }
          set startTime(e) {
            this.setAttribute(hh.START_TIME, `${e}`);
          }
          get preferPlayback() {
            let e = this.getAttribute(hh.PREFER_PLAYBACK);
            if (e === tV.MSE || e === tV.NATIVE) return e;
          }
          set preferPlayback(e) {
            e !== this.preferPlayback &&
              (e === tV.MSE || e === tV.NATIVE
                ? this.setAttribute(hh.PREFER_PLAYBACK, e)
                : this.removeAttribute(hh.PREFER_PLAYBACK));
          }
          get metadata() {
            var e;
            return null == (e = this.media) ? void 0 : e.metadata;
          }
          set metadata(e) {
            if ((pm(this, E5, E9).call(this), !this.media))
              return void Em(
                "underlying media element missing when trying to set metadata. metadata will not be set.",
              );
            this.media.metadata = { ...EX(this), ...e };
          }
          get _hlsConfig() {
            var e;
            return null == (e = this.media) ? void 0 : e._hlsConfig;
          }
          set _hlsConfig(e) {
            if ((pm(this, E5, E9).call(this), !this.media))
              return void Em(
                "underlying media element missing when trying to set _hlsConfig. _hlsConfig will not be set.",
              );
            this.media._hlsConfig = e;
          }
          async addCuePoints(e) {
            var t;
            return (pm(this, E5, E9).call(this), this.media)
              ? null == (t = this.media)
                ? void 0
                : t.addCuePoints(e)
              : void Em(
                  "underlying media element missing when trying to addCuePoints. cuePoints will not be added.",
                );
          }
          get activeCuePoint() {
            var e;
            return null == (e = this.media) ? void 0 : e.activeCuePoint;
          }
          get cuePoints() {
            var e, t;
            return null != (t = null == (e = this.media) ? void 0 : e.cuePoints)
              ? t
              : [];
          }
          addChapters(e) {
            var t;
            return (pm(this, E5, E9).call(this), this.media)
              ? null == (t = this.media)
                ? void 0
                : t.addChapters(e)
              : void Em(
                  "underlying media element missing when trying to addChapters. chapters will not be added.",
                );
          }
          get activeChapter() {
            var e;
            return null == (e = this.media) ? void 0 : e.activeChapter;
          }
          get chapters() {
            var e, t;
            return null != (t = null == (e = this.media) ? void 0 : e.chapters)
              ? t
              : [];
          }
          getStartDate() {
            var e;
            return null == (e = this.media) ? void 0 : e.getStartDate();
          }
          get currentPdt() {
            var e;
            return null == (e = this.media) ? void 0 : e.currentPdt;
          }
          get tokens() {
            let e = this.getAttribute(EQ.PLAYBACK_TOKEN),
              t = this.getAttribute(EQ.DRM_TOKEN),
              i = this.getAttribute(EQ.THUMBNAIL_TOKEN),
              a = this.getAttribute(EQ.STORYBOARD_TOKEN);
            return {
              ...pu(this, E1),
              ...(null != e ? { playback: e } : {}),
              ...(null != t ? { drm: t } : {}),
              ...(null != i ? { thumbnail: i } : {}),
              ...(null != a ? { storyboard: a } : {}),
            };
          }
          set tokens(e) {
            ph(this, E1, null != e ? e : {});
          }
          get playbackToken() {
            var e;
            return null != (e = this.getAttribute(EQ.PLAYBACK_TOKEN))
              ? e
              : void 0;
          }
          set playbackToken(e) {
            this.setAttribute(EQ.PLAYBACK_TOKEN, `${e}`);
          }
          get drmToken() {
            var e;
            return null != (e = this.getAttribute(EQ.DRM_TOKEN)) ? e : void 0;
          }
          set drmToken(e) {
            this.setAttribute(EQ.DRM_TOKEN, `${e}`);
          }
          get thumbnailToken() {
            var e;
            return null != (e = this.getAttribute(EQ.THUMBNAIL_TOKEN))
              ? e
              : void 0;
          }
          set thumbnailToken(e) {
            this.setAttribute(EQ.THUMBNAIL_TOKEN, `${e}`);
          }
          get storyboardToken() {
            var e;
            return null != (e = this.getAttribute(EQ.STORYBOARD_TOKEN))
              ? e
              : void 0;
          }
          set storyboardToken(e) {
            this.setAttribute(EQ.STORYBOARD_TOKEN, `${e}`);
          }
          addTextTrack(e, t, i, a) {
            var r;
            let n = null == (r = this.media) ? void 0 : r.nativeEl;
            if (n) return ir(n, e, t, i, a);
          }
          removeTextTrack(e) {
            var t;
            let i = null == (t = this.media) ? void 0 : t.nativeEl;
            if (i) {
              let t;
              return void (
                null ==
                  (t = Array.prototype.find.call(
                    i.querySelectorAll("track"),
                    (t) => t.track === e,
                  )) || t.remove()
              );
            }
          }
          get textTracks() {
            var e;
            return null == (e = this.media) ? void 0 : e.textTracks;
          }
          get castReceiver() {
            var e;
            return null != (e = this.getAttribute(EQ.CAST_RECEIVER))
              ? e
              : void 0;
          }
          set castReceiver(e) {
            e !== this.castReceiver &&
              (e
                ? this.setAttribute(EQ.CAST_RECEIVER, e)
                : this.removeAttribute(EQ.CAST_RECEIVER));
          }
          get castCustomData() {
            var e;
            return null == (e = this.media) ? void 0 : e.castCustomData;
          }
          set castCustomData(e) {
            if (!this.media)
              return void Em(
                "underlying media element missing when trying to set castCustomData. castCustomData will not be set.",
              );
            this.media.castCustomData = e;
          }
          get noTooltips() {
            return this.hasAttribute(EQ.NO_TOOLTIPS);
          }
          set noTooltips(e) {
            if (!e) return void this.removeAttribute(EQ.NO_TOOLTIPS);
            this.setAttribute(EQ.NO_TOOLTIPS, "");
          }
          get proudlyDisplayMuxBadge() {
            return this.hasAttribute(EQ.PROUDLY_DISPLAY_MUX_BADGE);
          }
          set proudlyDisplayMuxBadge(e) {
            e
              ? this.setAttribute(EQ.PROUDLY_DISPLAY_MUX_BADGE, "")
              : this.removeAttribute(EQ.PROUDLY_DISPLAY_MUX_BADGE);
          }
        };
      function bc(e, t) {
        return e.media ? e.media.getAttribute(t) : e.getAttribute(t);
      }
      ((EJ = new WeakMap()),
        (E0 = new WeakMap()),
        (E1 = new WeakMap()),
        (E2 = new WeakMap()),
        (E3 = new WeakMap()),
        (E4 = new WeakMap()),
        (E5 = new WeakSet()),
        (E9 = function () {
          var e, t, i, a;
          if (!pu(this, E0)) {
            (ph(this, E0, !0), pm(this, E5, E7).call(this));
            try {
              if (
                (customElements.upgrade(this.mediaTheme),
                !(this.mediaTheme instanceof v4.HTMLElement))
              )
                throw "";
            } catch {
              Em("<media-theme> failed to upgrade!");
            }
            try {
              if (
                (customElements.upgrade(this.media),
                !(this.media instanceof hb))
              )
                throw "";
            } catch {
              Em("<mux-video> failed to upgrade!");
            }
            try {
              if (
                (customElements.upgrade(this.mediaController),
                !(this.mediaController instanceof nT))
              )
                throw "";
            } catch {
              Em("<media-controller> failed to upgrade!");
            }
            (this.init(),
              pm(this, E5, be).call(this),
              pm(this, E5, bt).call(this),
              pm(this, E5, bi).call(this),
              ph(
                this,
                E2,
                null ==
                  (t =
                    null == (e = this.mediaController)
                      ? void 0
                      : e.hasAttribute(rR.USER_INACTIVE)) || t,
              ),
              pm(this, E5, ba).call(this),
              null == (i = this.media) ||
                i.addEventListener("streamtypechange", () =>
                  pm(this, E5, E7).call(this),
                ),
              null == (a = this.media) ||
                a.addEventListener("loadstart", () =>
                  pm(this, E5, E7).call(this),
                ));
          }
        }),
        (E8 = function () {
          var e, t;
          try {
            (null == (e = null == window ? void 0 : window.CSS) ||
              e.registerProperty({
                name: "--media-primary-color",
                syntax: "<color>",
                inherits: !0,
              }),
              null == (t = null == window ? void 0 : window.CSS) ||
                t.registerProperty({
                  name: "--media-secondary-color",
                  syntax: "<color>",
                  inherits: !0,
                }));
          } catch {}
        }),
        (E6 = function (e) {
          (Object.assign(pu(this, E4), e), pm(this, E5, E7).call(this));
        }),
        (E7 = function (e = {}) {
          var t, i, a, r, n, s, o;
          let l;
          ((r = EO(
            ((t = { ...pu(this, E4), ...e }),
            {
              src: !this.playbackId && this.src,
              playbackId: this.playbackId,
              hasSrc: !!this.playbackId || !!this.src || !!this.currentSrc,
              poster: this.poster,
              storyboard: this.storyboard,
              storyboardSrc: this.getAttribute(EQ.STORYBOARD_SRC),
              placeholder: this.getAttribute("placeholder"),
              themeTemplate: (function (e) {
                var t, i;
                let a = e.theme;
                if (a) {
                  let r =
                    null ==
                    (i =
                      null == (t = e.getRootNode()) ? void 0 : t.getElementById)
                      ? void 0
                      : i.call(t, a);
                  if (r && r instanceof HTMLTemplateElement) return r;
                  a.startsWith("media-theme-") || (a = `media-theme-${a}`);
                  let n = v4.customElements.get(a);
                  if (null != n && n.template) return n.template;
                }
              })(this),
              thumbnailTime: !this.tokens.thumbnail && this.thumbnailTime,
              autoplay: this.autoplay,
              crossOrigin: this.crossOrigin,
              loop: this.loop,
              noHotKeys: this.hasAttribute(EQ.NOHOTKEYS),
              hotKeys: this.getAttribute(EQ.HOTKEYS),
              muted: this.muted,
              paused: this.paused,
              preload: this.preload,
              envKey: this.envKey,
              preferCmcd: this.preferCmcd,
              debug: this.debug,
              disableTracking: this.disableTracking,
              disableCookies: this.disableCookies,
              tokens: this.tokens,
              beaconCollectionDomain: this.beaconCollectionDomain,
              maxResolution: this.maxResolution,
              minResolution: this.minResolution,
              programStartTime: this.programStartTime,
              programEndTime: this.programEndTime,
              assetStartTime: this.assetStartTime,
              assetEndTime: this.assetEndTime,
              renditionOrder: this.renditionOrder,
              metadata: this.metadata,
              playerInitTime: this.playerInitTime,
              playerSoftwareName: this.playerSoftwareName,
              playerSoftwareVersion: this.playerSoftwareVersion,
              startTime: this.startTime,
              preferPlayback: this.preferPlayback,
              audio: this.audio,
              defaultStreamType: this.defaultStreamType,
              targetLiveWindow: this.getAttribute(hh.TARGET_LIVE_WINDOW),
              streamType: El(this.getAttribute(hh.STREAM_TYPE)),
              primaryColor: this.getAttribute(EQ.PRIMARY_COLOR),
              secondaryColor: this.getAttribute(EQ.SECONDARY_COLOR),
              accentColor: this.getAttribute(EQ.ACCENT_COLOR),
              forwardSeekOffset: this.forwardSeekOffset,
              backwardSeekOffset: this.backwardSeekOffset,
              defaultHiddenCaptions: this.defaultHiddenCaptions,
              defaultDuration: this.defaultDuration,
              defaultShowRemainingTime: this.defaultShowRemainingTime,
              hideDuration:
                ((s = this),
                (l =
                  null == (o = s.mediaController)
                    ? void 0
                    : o.querySelector("media-time-display")) &&
                  "none" ===
                    getComputedStyle(l)
                      .getPropertyValue("--media-duration-display-display")
                      .trim()),
              playbackRates: this.getAttribute(EQ.PLAYBACK_RATES),
              customDomain:
                null != (i = this.getAttribute(hh.CUSTOM_DOMAIN)) ? i : void 0,
              title: this.getAttribute(EQ.TITLE),
              videoTitle:
                null != (a = this.getAttribute(EQ.VIDEO_TITLE))
                  ? a
                  : this.getAttribute(EQ.TITLE),
              novolumepref: this.hasAttribute(EQ.NO_VOLUME_PREF),
              castReceiver: this.castReceiver,
              proudlyDisplayMuxBadge: this.hasAttribute(
                EQ.PROUDLY_DISPLAY_MUX_BADGE,
              ),
              ...t,
              extraSourceParams: this.extraSourceParams,
            }),
          )),
            (n = this.shadowRoot),
            r.renderInto(n));
        }),
        (be = function () {
          let e = (e) => {
            var t, i;
            if (!(null != e && e.startsWith("theme-"))) return;
            let a = e.replace(/^theme-/, "");
            if (EZ.includes(a)) return;
            let r = this.getAttribute(e);
            null != r
              ? null == (t = this.mediaTheme) || t.setAttribute(a, r)
              : null == (i = this.mediaTheme) || i.removeAttribute(a);
          };
          (new MutationObserver((t) => {
            for (let { attributeName: i } of t) e(i);
          }).observe(this, { attributes: !0 }),
            this.getAttributeNames().forEach(e));
        }),
        (bt = function () {
          var e;
          (this.addEventListener("error", (e) => {
            let { detail: t } = e;
            if (
              (t instanceof tP || (t = new tP(t.message, t.code, t.fatal)),
              !(null != t && t.fatal))
            ) {
              (Eh(t), t.data && Eh(`${t.name} data:`, t.data));
              return;
            }
            let i = EF(t, !1);
            (i.message && Ep(i),
              Em(t),
              t.data && Em(`${t.name} data:`, t.data),
              pm(this, E5, E6).call(this, { isDialogOpen: !0 }));
          }),
            this.media &&
              (this.media.errorTranslator = (e = {}) => {
                var t, i, a;
                if (
                  !((null == (t = this.media) ? void 0 : t.error) instanceof tP)
                )
                  return e;
                let r = EF(null == (i = this.media) ? void 0 : i.error, !1);
                return {
                  player_error_code:
                    null == (a = this.media) ? void 0 : a.error.code,
                  player_error_message: r.message
                    ? String(r.message)
                    : e.player_error_message,
                  player_error_context: r.context
                    ? String(r.context)
                    : e.player_error_context,
                };
              }),
            null == (e = this.media) ||
              e.addEventListener("error", (e) => {
                var t, i;
                let { detail: a } = e;
                if (!a) {
                  let { message: e, code: r } =
                    null != (i = null == (t = this.media) ? void 0 : t.error)
                      ? i
                      : {};
                  a = new tP(e, r);
                }
                null != a &&
                  a.fatal &&
                  this.dispatchEvent(new CustomEvent("error", { detail: a }));
              }));
        }),
        (bi = function () {
          var e, t, i, a;
          let r = () => pm(this, E5, E7).call(this);
          (null == (t = null == (e = this.media) ? void 0 : e.textTracks) ||
            t.addEventListener("addtrack", r),
            null == (a = null == (i = this.media) ? void 0 : i.textTracks) ||
              a.addEventListener("removetrack", r));
        }),
        (ba = function () {
          var e, t;
          if (!/Firefox/i.test(navigator.userAgent)) return;
          let i,
            a = new WeakMap(),
            r = () =>
              this.streamType === tH.LIVE &&
              !this.secondaryColor &&
              this.offsetWidth >= 800,
            n = (e, t, i = !1) => {
              r() ||
                Array.from((e && e.activeCues) || []).forEach((e) => {
                  if (
                    !(
                      !e.snapToLines ||
                      e.line < -5 ||
                      (e.line >= 0 && e.line < 10)
                    )
                  )
                    if (!t || this.paused) {
                      let t = e.text.split(`
`).length,
                        r = -3;
                      this.streamType === tH.LIVE && (r = -2);
                      let n = r - t;
                      if (e.line === n && !i) return;
                      (a.has(e) || a.set(e, e.line), (e.line = n));
                    } else
                      setTimeout(() => {
                        e.line = a.get(e) || "auto";
                      }, 500);
                });
            },
            s = () => {
              var e, t;
              n(
                i,
                null !=
                  (t =
                    null == (e = this.mediaController)
                      ? void 0
                      : e.hasAttribute(rR.USER_INACTIVE)) && t,
              );
            },
            o = () => {
              var e, t;
              let a = Array.from(
                (null ==
                (t = null == (e = this.mediaController) ? void 0 : e.media)
                  ? void 0
                  : t.textTracks) || [],
              ).filter(
                (e) =>
                  ["subtitles", "captions"].includes(e.kind) &&
                  "showing" === e.mode,
              )[0];
              (a !== i && (null == i || i.removeEventListener("cuechange", s)),
                null == (i = a) || i.addEventListener("cuechange", s),
                n(i, pu(this, E2)));
            };
          (o(),
            null == (e = this.textTracks) || e.addEventListener("change", o),
            null == (t = this.textTracks) || t.addEventListener("addtrack", o),
            this.addEventListener("userinactivechange", () => {
              var e, t;
              let a =
                null ==
                  (t =
                    null == (e = this.mediaController)
                      ? void 0
                      : e.hasAttribute(rR.USER_INACTIVE)) || t;
              pu(this, E2) !== a && (ph(this, E2, a), n(i, pu(this, E2)));
            }));
        }),
        v4.customElements.get("mux-player") ||
          (v4.customElements.define("mux-player", bu),
          (v4.MuxPlayerElement = bu)));
      var bh = parseInt(n.version) >= 19,
        bm = {
          className: "class",
          classname: "class",
          htmlFor: "for",
          crossOrigin: "crossorigin",
          viewBox: "viewBox",
          playsInline: "playsinline",
          autoPlay: "autoplay",
          playbackRate: "playbackrate",
        },
        bp = (e) => null == e,
        bv = (e, t) => !bp(t) && e in t,
        bE = (e) => e.replace(/[A-Z]/g, (e) => "-".concat(e.toLowerCase())),
        bb = (e, t) => {
          if (!(!bh && "boolean" == typeof t && !t)) {
            if (bv(e, bm)) return bm[e];
            if (void 0 !== t) return /[A-Z]/.test(e) ? bE(e) : e;
          }
        },
        bf = (e, t) => (bh || "boolean" != typeof e ? e : ""),
        bg = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return Object.entries(e).reduce((e, t) => {
            let [i, a] = t,
              r = bb(i, a);
            if (!r) return e;
            let n = bf(a, i);
            return ((e[r] = n), e);
          }, {});
        },
        b_ = function () {
          for (var e = arguments.length, t = Array(e), i = 0; i < e; i++)
            t[i] = arguments[i];
          let a = (0, n.useRef)(null);
          return (
            (0, n.useEffect)(() => {
              t.forEach((e) => {
                e &&
                  ("function" == typeof e
                    ? e(a.current)
                    : (e.current = a.current));
              });
            }, [t]),
            a
          );
        },
        by = Object.prototype.hasOwnProperty,
        bT = (e, t) => {
          if (Object.is(e, t)) return !0;
          if (
            "object" != typeof e ||
            null === e ||
            "object" != typeof t ||
            null === t
          )
            return !1;
          if (Array.isArray(e))
            return (
              !!Array.isArray(t) &&
              e.length === t.length &&
              e.some((e, i) => t[i] === e)
            );
          let i = Object.keys(e),
            a = Object.keys(t);
          if (i.length !== a.length) return !1;
          for (let a = 0; a < i.length; a++)
            if (!by.call(t, i[a]) || !Object.is(e[i[a]], t[i[a]])) return !1;
          return !0;
        },
        bA = (e, t, i) => !bT(t, e[i]),
        bk = (e, t, i) => {
          e[i] = t;
        },
        bw = function (e, t, i) {
          let a =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : bk,
            r =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : bA;
          return (0, n.useEffect)(() => {
            let n = null == i ? void 0 : i.current;
            n && r(n, t, e) && a(n, t, e);
          }, [null == i ? void 0 : i.current, t]);
        },
        bS = (() => {
          try {
            return "3.4.0";
          } catch (e) {}
          return "UNKNOWN";
        })(),
        bI = n.forwardRef((e, t) => {
          let { children: i, ...a } = e;
          return n.createElement("mux-player", bg({ ...a, ref: t }), i);
        }),
        bR = (e, t, i) =>
          (0, n.useEffect)(() => {
            let a = null == t ? void 0 : t.current;
            if (!(!a || !i))
              return (
                a.addEventListener(e, i),
                () => {
                  a.removeEventListener(e, i);
                }
              );
          }, [null == t ? void 0 : t.current, i]),
        bC = (e, t) => {
          let {
            onAbort: i,
            onCanPlay: a,
            onCanPlayThrough: r,
            onEmptied: n,
            onLoadStart: s,
            onLoadedData: o,
            onLoadedMetadata: l,
            onProgress: d,
            onDurationChange: u,
            onVolumeChange: c,
            onRateChange: h,
            onResize: m,
            onWaiting: p,
            onPlay: E,
            onPlaying: b,
            onTimeUpdate: f,
            onPause: g,
            onSeeking: _,
            onSeeked: y,
            onStalled: T,
            onSuspend: A,
            onEnded: k,
            onError: w,
            onCuePointChange: S,
            onCuePointsChange: I,
            onChapterChange: R,
            metadata: C,
            tokens: D,
            paused: L,
            playbackId: M,
            playbackRates: O,
            currentTime: N,
            themeProps: x,
            extraSourceParams: P,
            castCustomData: U,
            _hlsConfig: B,
            ...W
          } = t;
          return (
            bw("playbackRates", O, e),
            bw("metadata", C, e),
            bw("extraSourceParams", P, e),
            bw("_hlsConfig", B, e),
            bw("themeProps", x, e),
            bw("tokens", D, e),
            bw("playbackId", M, e),
            bw("castCustomData", U, e),
            bw(
              "paused",
              L,
              e,
              (e, t) => {
                null != t && (t ? e.pause() : e.play());
              },
              (e, t, i) =>
                (!e.hasAttribute("autoplay") || !!e.hasPlayed) && bA(e, t, i),
            ),
            bw("currentTime", N, e, (e, t) => {
              null != t && (e.currentTime = t);
            }),
            bR("abort", e, i),
            bR("canplay", e, a),
            bR("canplaythrough", e, r),
            bR("emptied", e, n),
            bR("loadstart", e, s),
            bR("loadeddata", e, o),
            bR("loadedmetadata", e, l),
            bR("progress", e, d),
            bR("durationchange", e, u),
            bR("volumechange", e, c),
            bR("ratechange", e, h),
            bR("resize", e, m),
            bR("waiting", e, p),
            bR("play", e, E),
            bR("playing", e, b),
            bR("timeupdate", e, f),
            bR("pause", e, g),
            bR("seeking", e, _),
            bR("seeked", e, y),
            bR("stalled", e, T),
            bR("suspend", e, A),
            bR("ended", e, k),
            bR("error", e, w),
            bR("cuepointchange", e, S),
            bR("cuepointschange", e, I),
            bR("chapterchange", e, R),
            [W]
          );
        },
        bD = n.forwardRef((e, t) => {
          var i;
          let a = (0, n.useRef)(null),
            r = b_(a, t),
            [s] = bC(a, e),
            [o] = (0, n.useState)(null != (i = e.playerInitTime) ? i : iG());
          return n.createElement(bI, {
            ref: r,
            defaultHiddenCaptions: e.defaultHiddenCaptions,
            playerSoftwareName: "mux-player-react",
            playerSoftwareVersion: bS,
            playerInitTime: o,
            ...s,
          });
        });
    },
  },
]);
