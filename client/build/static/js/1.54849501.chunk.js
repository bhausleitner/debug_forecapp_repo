/*! For license information please see 1.54849501.chunk.js.LICENSE.txt */
;(this['webpackJsonp@coreui/coreui-free-react-admin-template'] =
  this['webpackJsonp@coreui/coreui-free-react-admin-template'] || []).push([
  [1],
  {
    357: function (t, e, n) {
      ;(function (t) {
        n.d(e, 'a', function () {
          return Ep
        }),
          n.d(e, 'b', function () {
            return Lp
          }),
          n.d(e, 'c', function () {
            return Rp
          }),
          n.d(e, 'd', function () {
            return jp
          }),
          n.d(e, 'e', function () {
            return zp
          }),
          n.d(e, 'f', function () {
            return Fp
          }),
          n.d(e, 'g', function () {
            return Ip
          })
        var i = n(1),
          o = n.n(i),
          r = function () {
            return (
              (r =
                Object.assign ||
                function (t) {
                  for (var e, n = 1, i = arguments.length; n < i; n++)
                    for (var o in (e = arguments[n]))
                      Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                  return t
                }),
              r.apply(this, arguments)
            )
          }
        function a(t, e) {
          var n = {}
          for (var i in t)
            Object.prototype.hasOwnProperty.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i])
          if (null != t && 'function' === typeof Object.getOwnPropertySymbols) {
            var o = 0
            for (i = Object.getOwnPropertySymbols(t); o < i.length; o++)
              e.indexOf(i[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(t, i[o]) &&
                (n[i[o]] = t[i[o]])
          }
          return n
        }
        var s =
            'undefined' !== typeof globalThis
              ? globalThis
              : 'undefined' !== typeof window
              ? window
              : 'undefined' !== typeof t
              ? t
              : 'undefined' !== typeof self
              ? self
              : {},
          l = { exports: {} },
          c = { exports: {} },
          h = {},
          d = 'function' === typeof Symbol && Symbol.for,
          u = d ? Symbol.for('react.element') : 60103,
          f = d ? Symbol.for('react.portal') : 60106,
          p = d ? Symbol.for('react.fragment') : 60107,
          g = d ? Symbol.for('react.strict_mode') : 60108,
          m = d ? Symbol.for('react.profiler') : 60114,
          b = d ? Symbol.for('react.provider') : 60109,
          x = d ? Symbol.for('react.context') : 60110,
          y = d ? Symbol.for('react.async_mode') : 60111,
          v = d ? Symbol.for('react.concurrent_mode') : 60111,
          _ = d ? Symbol.for('react.forward_ref') : 60112,
          w = d ? Symbol.for('react.suspense') : 60113,
          M = d ? Symbol.for('react.suspense_list') : 60120,
          k = d ? Symbol.for('react.memo') : 60115,
          S = d ? Symbol.for('react.lazy') : 60116,
          O = d ? Symbol.for('react.block') : 60121,
          P = d ? Symbol.for('react.fundamental') : 60117,
          C = d ? Symbol.for('react.responder') : 60118,
          D = d ? Symbol.for('react.scope') : 60119
        function A(t) {
          if ('object' === typeof t && null !== t) {
            var e = t.$$typeof
            switch (e) {
              case u:
                switch ((t = t.type)) {
                  case y:
                  case v:
                  case p:
                  case m:
                  case g:
                  case w:
                    return t
                  default:
                    switch ((t = t && t.$$typeof)) {
                      case x:
                      case _:
                      case S:
                      case k:
                      case b:
                        return t
                      default:
                        return e
                    }
                }
              case f:
                return e
            }
          }
        }
        function T(t) {
          return A(t) === v
        }
        ;(h.AsyncMode = y),
          (h.ConcurrentMode = v),
          (h.ContextConsumer = x),
          (h.ContextProvider = b),
          (h.Element = u),
          (h.ForwardRef = _),
          (h.Fragment = p),
          (h.Lazy = S),
          (h.Memo = k),
          (h.Portal = f),
          (h.Profiler = m),
          (h.StrictMode = g),
          (h.Suspense = w),
          (h.isAsyncMode = function (t) {
            return T(t) || A(t) === y
          }),
          (h.isConcurrentMode = T),
          (h.isContextConsumer = function (t) {
            return A(t) === x
          }),
          (h.isContextProvider = function (t) {
            return A(t) === b
          }),
          (h.isElement = function (t) {
            return 'object' === typeof t && null !== t && t.$$typeof === u
          }),
          (h.isForwardRef = function (t) {
            return A(t) === _
          }),
          (h.isFragment = function (t) {
            return A(t) === p
          }),
          (h.isLazy = function (t) {
            return A(t) === S
          }),
          (h.isMemo = function (t) {
            return A(t) === k
          }),
          (h.isPortal = function (t) {
            return A(t) === f
          }),
          (h.isProfiler = function (t) {
            return A(t) === m
          }),
          (h.isStrictMode = function (t) {
            return A(t) === g
          }),
          (h.isSuspense = function (t) {
            return A(t) === w
          }),
          (h.isValidElementType = function (t) {
            return (
              'string' === typeof t ||
              'function' === typeof t ||
              t === p ||
              t === v ||
              t === m ||
              t === g ||
              t === w ||
              t === M ||
              ('object' === typeof t &&
                null !== t &&
                (t.$$typeof === S ||
                  t.$$typeof === k ||
                  t.$$typeof === b ||
                  t.$$typeof === x ||
                  t.$$typeof === _ ||
                  t.$$typeof === P ||
                  t.$$typeof === C ||
                  t.$$typeof === D ||
                  t.$$typeof === O))
            )
          }),
          (h.typeOf = A),
          (c.exports = h)
        var E = Object.getOwnPropertySymbols,
          L = Object.prototype.hasOwnProperty,
          R = Object.prototype.propertyIsEnumerable
        function j(t) {
          if (null === t || void 0 === t)
            throw new TypeError('Object.assign cannot be called with null or undefined')
          return Object(t)
        }
        ;(function () {
          try {
            if (!Object.assign) return !1
            var t = new String('abc')
            if (((t[5] = 'de'), '5' === Object.getOwnPropertyNames(t)[0])) return !1
            for (var e = {}, n = 0; n < 10; n++) e['_' + String.fromCharCode(n)] = n
            var i = Object.getOwnPropertyNames(e).map(function (t) {
              return e[t]
            })
            if ('0123456789' !== i.join('')) return !1
            var o = {}
            return (
              'abcdefghijklmnopqrst'.split('').forEach(function (t) {
                o[t] = t
              }),
              'abcdefghijklmnopqrst' === Object.keys(Object.assign({}, o)).join('')
            )
          } catch (r) {
            return !1
          }
        })() && Object.assign
        function z(t, e, n, i, o) {}
        z.resetWarningCache = function () {
          0
        }
        c.exports, Function.call.bind(Object.prototype.hasOwnProperty)
        function F() {}
        function I() {}
        I.resetWarningCache = F
        l.exports = (function () {
          function t(t, e, n, i, o, r) {
            if ('SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED' !== r) {
              var a = new Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
              )
              throw ((a.name = 'Invariant Violation'), a)
            }
          }
          function e() {
            return t
          }
          t.isRequired = t
          var n = {
            array: t,
            bool: t,
            func: t,
            number: t,
            object: t,
            string: t,
            symbol: t,
            any: t,
            arrayOf: e,
            element: t,
            elementType: t,
            instanceOf: e,
            node: t,
            objectOf: e,
            oneOf: e,
            oneOfType: e,
            shape: e,
            exact: e,
            checkPropTypes: I,
            resetWarningCache: F,
          }
          return (n.PropTypes = n), n
        })()
        var V = l.exports,
          B = { exports: {} }
        !(function (t) {
          !(function () {
            var e = {}.hasOwnProperty
            function n() {
              for (var t = [], i = 0; i < arguments.length; i++) {
                var o = arguments[i]
                if (o) {
                  var r = typeof o
                  if ('string' === r || 'number' === r) t.push(o)
                  else if (Array.isArray(o)) {
                    if (o.length) {
                      var a = n.apply(null, o)
                      a && t.push(a)
                    }
                  } else if ('object' === r)
                    if (o.toString === Object.prototype.toString)
                      for (var s in o) e.call(o, s) && o[s] && t.push(s)
                    else t.push(o.toString())
                }
              }
              return t.join(' ')
            }
            t.exports ? ((n.default = n), (t.exports = n)) : (window.classNames = n)
          })()
        })(B)
        var N = B.exports
        const W =
          'undefined' === typeof window
            ? function (t) {
                return t()
              }
            : window.requestAnimationFrame
        function H(t, e, n) {
          const i = n || ((t) => Array.prototype.slice.call(t))
          let o = !1,
            r = []
          return function () {
            for (var n = arguments.length, a = new Array(n), s = 0; s < n; s++) a[s] = arguments[s]
            ;(r = i(a)),
              o ||
                ((o = !0),
                W.call(window, () => {
                  ;(o = !1), t.apply(e, r)
                }))
          }
        }
        const $ = (t) => ('start' === t ? 'left' : 'end' === t ? 'right' : 'center'),
          Y = (t, e, n) => ('start' === t ? e : 'end' === t ? n : (e + n) / 2)
        function U() {}
        const X = (function () {
          let t = 0
          return function () {
            return t++
          }
        })()
        function q(t) {
          return null === t || 'undefined' === typeof t
        }
        function K(t) {
          if (Array.isArray && Array.isArray(t)) return !0
          const e = Object.prototype.toString.call(t)
          return '[object' === e.substr(0, 7) && 'Array]' === e.substr(-6)
        }
        function G(t) {
          return null !== t && '[object Object]' === Object.prototype.toString.call(t)
        }
        const Z = (t) => ('number' === typeof t || t instanceof Number) && isFinite(+t)
        function J(t, e) {
          return Z(t) ? t : e
        }
        function Q(t, e) {
          return 'undefined' === typeof t ? e : t
        }
        const tt = (t, e) =>
          'string' === typeof t && t.endsWith('%') ? (parseFloat(t) / 100) * e : +t
        function et(t, e, n) {
          if (t && 'function' === typeof t.call) return t.apply(n, e)
        }
        function nt(t, e, n, i) {
          let o, r, a
          if (K(t))
            if (((r = t.length), i)) for (o = r - 1; o >= 0; o--) e.call(n, t[o], o)
            else for (o = 0; o < r; o++) e.call(n, t[o], o)
          else if (G(t))
            for (a = Object.keys(t), r = a.length, o = 0; o < r; o++) e.call(n, t[a[o]], a[o])
        }
        function it(t, e) {
          let n, i, o, r
          if (!t || !e || t.length !== e.length) return !1
          for (n = 0, i = t.length; n < i; ++n)
            if (((o = t[n]), (r = e[n]), o.datasetIndex !== r.datasetIndex || o.index !== r.index))
              return !1
          return !0
        }
        function ot(t) {
          if (K(t)) return t.map(ot)
          if (G(t)) {
            const e = Object.create(null),
              n = Object.keys(t),
              i = n.length
            let o = 0
            for (; o < i; ++o) e[n[o]] = ot(t[n[o]])
            return e
          }
          return t
        }
        function rt(t) {
          return -1 === ['__proto__', 'prototype', 'constructor'].indexOf(t)
        }
        function at(t, e, n, i) {
          if (!rt(t)) return
          const o = e[t],
            r = n[t]
          G(o) && G(r) ? st(o, r, i) : (e[t] = ot(r))
        }
        function st(t, e, n) {
          const i = K(e) ? e : [e],
            o = i.length
          if (!G(t)) return t
          const r = (n = n || {}).merger || at
          for (let a = 0; a < o; ++a) {
            if (!G((e = i[a]))) continue
            const o = Object.keys(e)
            for (let i = 0, a = o.length; i < a; ++i) r(o[i], t, e, n)
          }
          return t
        }
        function lt(t, e) {
          return st(t, e, { merger: ct })
        }
        function ct(t, e, n) {
          if (!rt(t)) return
          const i = e[t],
            o = n[t]
          G(i) && G(o) ? lt(i, o) : Object.prototype.hasOwnProperty.call(e, t) || (e[t] = ot(o))
        }
        function ht(t, e) {
          const n = t.indexOf('.', e)
          return -1 === n ? t.length : n
        }
        function dt(t, e) {
          if ('' === e) return t
          let n = 0,
            i = ht(e, n)
          for (; t && i > n; ) (t = t[e.substr(n, i - n)]), (n = i + 1), (i = ht(e, n))
          return t
        }
        function ut(t) {
          return t.charAt(0).toUpperCase() + t.slice(1)
        }
        const ft = (t) => 'undefined' !== typeof t,
          pt = (t) => 'function' === typeof t,
          gt = Math.PI,
          mt = 2 * gt,
          bt = mt + gt,
          xt = Number.POSITIVE_INFINITY,
          yt = gt / 180,
          vt = gt / 2,
          _t = gt / 4,
          wt = (2 * gt) / 3,
          Mt = Math.log10,
          kt = Math.sign
        function St(t) {
          const e = Math.round(t)
          t = Pt(t, e, t / 1e3) ? e : t
          const n = Math.pow(10, Math.floor(Mt(t))),
            i = t / n
          return (i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * n
        }
        function Ot(t) {
          return !isNaN(parseFloat(t)) && isFinite(t)
        }
        function Pt(t, e, n) {
          return Math.abs(t - e) < n
        }
        function Ct(t, e, n) {
          let i, o, r
          for (i = 0, o = t.length; i < o; i++)
            (r = t[i][n]), isNaN(r) || ((e.min = Math.min(e.min, r)), (e.max = Math.max(e.max, r)))
        }
        function Dt(t) {
          return t * (gt / 180)
        }
        function At(t) {
          return t * (180 / gt)
        }
        function Tt(t) {
          if (!Z(t)) return
          let e = 1,
            n = 0
          for (; Math.round(t * e) / e !== t; ) (e *= 10), n++
          return n
        }
        function Et(t, e) {
          return Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))
        }
        function Lt(t, e) {
          return ((t - e + bt) % mt) - gt
        }
        function Rt(t) {
          return ((t % mt) + mt) % mt
        }
        function jt(t, e, n, i) {
          const o = Rt(t),
            r = Rt(e),
            a = Rt(n),
            s = Rt(r - o),
            l = Rt(a - o),
            c = Rt(o - r),
            h = Rt(o - a)
          return o === r || o === a || (i && r === a) || (s > l && c < h)
        }
        function zt(t, e, n) {
          return Math.max(e, Math.min(n, t))
        }
        const Ft = (t) => 0 === t || 1 === t,
          It = (t, e, n) => -Math.pow(2, 10 * (t -= 1)) * Math.sin(((t - e) * mt) / n),
          Vt = (t, e, n) => Math.pow(2, -10 * t) * Math.sin(((t - e) * mt) / n) + 1,
          Bt = {
            linear: (t) => t,
            easeInQuad: (t) => t * t,
            easeOutQuad: (t) => -t * (t - 2),
            easeInOutQuad: (t) => ((t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1)),
            easeInCubic: (t) => t * t * t,
            easeOutCubic: (t) => (t -= 1) * t * t + 1,
            easeInOutCubic: (t) =>
              (t /= 0.5) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2),
            easeInQuart: (t) => t * t * t * t,
            easeOutQuart: (t) => -((t -= 1) * t * t * t - 1),
            easeInOutQuart: (t) =>
              (t /= 0.5) < 1 ? 0.5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2),
            easeInQuint: (t) => t * t * t * t * t,
            easeOutQuint: (t) => (t -= 1) * t * t * t * t + 1,
            easeInOutQuint: (t) =>
              (t /= 0.5) < 1 ? 0.5 * t * t * t * t * t : 0.5 * ((t -= 2) * t * t * t * t + 2),
            easeInSine: (t) => 1 - Math.cos(t * vt),
            easeOutSine: (t) => Math.sin(t * vt),
            easeInOutSine: (t) => -0.5 * (Math.cos(gt * t) - 1),
            easeInExpo: (t) => (0 === t ? 0 : Math.pow(2, 10 * (t - 1))),
            easeOutExpo: (t) => (1 === t ? 1 : 1 - Math.pow(2, -10 * t)),
            easeInOutExpo: (t) =>
              Ft(t)
                ? t
                : t < 0.5
                ? 0.5 * Math.pow(2, 10 * (2 * t - 1))
                : 0.5 * (2 - Math.pow(2, -10 * (2 * t - 1))),
            easeInCirc: (t) => (t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1)),
            easeOutCirc: (t) => Math.sqrt(1 - (t -= 1) * t),
            easeInOutCirc: (t) =>
              (t /= 0.5) < 1
                ? -0.5 * (Math.sqrt(1 - t * t) - 1)
                : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
            easeInElastic: (t) => (Ft(t) ? t : It(t, 0.075, 0.3)),
            easeOutElastic: (t) => (Ft(t) ? t : Vt(t, 0.075, 0.3)),
            easeInOutElastic(t) {
              const e = 0.1125
              return Ft(t)
                ? t
                : t < 0.5
                ? 0.5 * It(2 * t, e, 0.45)
                : 0.5 + 0.5 * Vt(2 * t - 1, e, 0.45)
            },
            easeInBack(t) {
              const e = 1.70158
              return t * t * ((e + 1) * t - e)
            },
            easeOutBack(t) {
              const e = 1.70158
              return (t -= 1) * t * ((e + 1) * t + e) + 1
            },
            easeInOutBack(t) {
              let e = 1.70158
              return (t /= 0.5) < 1
                ? t * t * ((1 + (e *= 1.525)) * t - e) * 0.5
                : 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
            },
            easeInBounce: (t) => 1 - Bt.easeOutBounce(1 - t),
            easeOutBounce(t) {
              const e = 7.5625,
                n = 2.75
              return t < 1 / n
                ? e * t * t
                : t < 2 / n
                ? e * (t -= 1.5 / n) * t + 0.75
                : t < 2.5 / n
                ? e * (t -= 2.25 / n) * t + 0.9375
                : e * (t -= 2.625 / n) * t + 0.984375
            },
            easeInOutBounce: (t) =>
              t < 0.5 ? 0.5 * Bt.easeInBounce(2 * t) : 0.5 * Bt.easeOutBounce(2 * t - 1) + 0.5,
          },
          Nt = {
            0: 0,
            1: 1,
            2: 2,
            3: 3,
            4: 4,
            5: 5,
            6: 6,
            7: 7,
            8: 8,
            9: 9,
            A: 10,
            B: 11,
            C: 12,
            D: 13,
            E: 14,
            F: 15,
            a: 10,
            b: 11,
            c: 12,
            d: 13,
            e: 14,
            f: 15,
          },
          Wt = '0123456789ABCDEF',
          Ht = (t) => Wt[15 & t],
          $t = (t) => Wt[(240 & t) >> 4] + Wt[15 & t],
          Yt = (t) => (240 & t) >> 4 === (15 & t)
        function Ut(t) {
          var e = (function (t) {
            return Yt(t.r) && Yt(t.g) && Yt(t.b) && Yt(t.a)
          })(t)
            ? Ht
            : $t
          return t ? '#' + e(t.r) + e(t.g) + e(t.b) + (t.a < 255 ? e(t.a) : '') : t
        }
        function Xt(t) {
          return (t + 0.5) | 0
        }
        const qt = (t, e, n) => Math.max(Math.min(t, n), e)
        function Kt(t) {
          return qt(Xt(2.55 * t), 0, 255)
        }
        function Gt(t) {
          return qt(Xt(255 * t), 0, 255)
        }
        function Zt(t) {
          return qt(Xt(t / 2.55) / 100, 0, 1)
        }
        function Jt(t) {
          return qt(Xt(100 * t), 0, 100)
        }
        const Qt =
          /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/
        const te =
          /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/
        function ee(t, e, n) {
          const i = e * Math.min(n, 1 - n),
            o = function (e) {
              let o =
                arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (e + t / 30) % 12
              return n - i * Math.max(Math.min(o - 3, 9 - o, 1), -1)
            }
          return [o(0), o(8), o(4)]
        }
        function ne(t, e, n) {
          const i = function (i) {
            let o =
              arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (i + t / 60) % 6
            return n - n * e * Math.max(Math.min(o, 4 - o, 1), 0)
          }
          return [i(5), i(3), i(1)]
        }
        function ie(t, e, n) {
          const i = ee(t, 1, 0.5)
          let o
          for (e + n > 1 && ((o = 1 / (e + n)), (e *= o), (n *= o)), o = 0; o < 3; o++)
            (i[o] *= 1 - e - n), (i[o] += e)
          return i
        }
        function oe(t) {
          const e = t.r / 255,
            n = t.g / 255,
            i = t.b / 255,
            o = Math.max(e, n, i),
            r = Math.min(e, n, i),
            a = (o + r) / 2
          let s, l, c
          return (
            o !== r &&
              ((c = o - r),
              (l = a > 0.5 ? c / (2 - o - r) : c / (o + r)),
              (s =
                o === e
                  ? (n - i) / c + (n < i ? 6 : 0)
                  : o === n
                  ? (i - e) / c + 2
                  : (e - n) / c + 4),
              (s = 60 * s + 0.5)),
            [0 | s, l || 0, a]
          )
        }
        function re(t, e, n, i) {
          return (Array.isArray(e) ? t(e[0], e[1], e[2]) : t(e, n, i)).map(Gt)
        }
        function ae(t, e, n) {
          return re(ee, t, e, n)
        }
        function se(t) {
          return ((t % 360) + 360) % 360
        }
        function le(t) {
          const e = te.exec(t)
          let n,
            i = 255
          if (!e) return
          e[5] !== n && (i = e[6] ? Kt(+e[5]) : Gt(+e[5]))
          const o = se(+e[2]),
            r = +e[3] / 100,
            a = +e[4] / 100
          return (
            (n =
              'hwb' === e[1]
                ? (function (t, e, n) {
                    return re(ie, t, e, n)
                  })(o, r, a)
                : 'hsv' === e[1]
                ? (function (t, e, n) {
                    return re(ne, t, e, n)
                  })(o, r, a)
                : ae(o, r, a)),
            { r: n[0], g: n[1], b: n[2], a: i }
          )
        }
        const ce = {
            x: 'dark',
            Z: 'light',
            Y: 're',
            X: 'blu',
            W: 'gr',
            V: 'medium',
            U: 'slate',
            A: 'ee',
            T: 'ol',
            S: 'or',
            B: 'ra',
            C: 'lateg',
            D: 'ights',
            R: 'in',
            Q: 'turquois',
            E: 'hi',
            P: 'ro',
            O: 'al',
            N: 'le',
            M: 'de',
            L: 'yello',
            F: 'en',
            K: 'ch',
            G: 'arks',
            H: 'ea',
            I: 'ightg',
            J: 'wh',
          },
          he = {
            OiceXe: 'f0f8ff',
            antiquewEte: 'faebd7',
            aqua: 'ffff',
            aquamarRe: '7fffd4',
            azuY: 'f0ffff',
            beige: 'f5f5dc',
            bisque: 'ffe4c4',
            black: '0',
            blanKedOmond: 'ffebcd',
            Xe: 'ff',
            XeviTet: '8a2be2',
            bPwn: 'a52a2a',
            burlywood: 'deb887',
            caMtXe: '5f9ea0',
            KartYuse: '7fff00',
            KocTate: 'd2691e',
            cSO: 'ff7f50',
            cSnflowerXe: '6495ed',
            cSnsilk: 'fff8dc',
            crimson: 'dc143c',
            cyan: 'ffff',
            xXe: '8b',
            xcyan: '8b8b',
            xgTMnPd: 'b8860b',
            xWay: 'a9a9a9',
            xgYF: '6400',
            xgYy: 'a9a9a9',
            xkhaki: 'bdb76b',
            xmagFta: '8b008b',
            xTivegYF: '556b2f',
            xSange: 'ff8c00',
            xScEd: '9932cc',
            xYd: '8b0000',
            xsOmon: 'e9967a',
            xsHgYF: '8fbc8f',
            xUXe: '483d8b',
            xUWay: '2f4f4f',
            xUgYy: '2f4f4f',
            xQe: 'ced1',
            xviTet: '9400d3',
            dAppRk: 'ff1493',
            dApskyXe: 'bfff',
            dimWay: '696969',
            dimgYy: '696969',
            dodgerXe: '1e90ff',
            fiYbrick: 'b22222',
            flSOwEte: 'fffaf0',
            foYstWAn: '228b22',
            fuKsia: 'ff00ff',
            gaRsbSo: 'dcdcdc',
            ghostwEte: 'f8f8ff',
            gTd: 'ffd700',
            gTMnPd: 'daa520',
            Way: '808080',
            gYF: '8000',
            gYFLw: 'adff2f',
            gYy: '808080',
            honeyMw: 'f0fff0',
            hotpRk: 'ff69b4',
            RdianYd: 'cd5c5c',
            Rdigo: '4b0082',
            ivSy: 'fffff0',
            khaki: 'f0e68c',
            lavFMr: 'e6e6fa',
            lavFMrXsh: 'fff0f5',
            lawngYF: '7cfc00',
            NmoncEffon: 'fffacd',
            ZXe: 'add8e6',
            ZcSO: 'f08080',
            Zcyan: 'e0ffff',
            ZgTMnPdLw: 'fafad2',
            ZWay: 'd3d3d3',
            ZgYF: '90ee90',
            ZgYy: 'd3d3d3',
            ZpRk: 'ffb6c1',
            ZsOmon: 'ffa07a',
            ZsHgYF: '20b2aa',
            ZskyXe: '87cefa',
            ZUWay: '778899',
            ZUgYy: '778899',
            ZstAlXe: 'b0c4de',
            ZLw: 'ffffe0',
            lime: 'ff00',
            limegYF: '32cd32',
            lRF: 'faf0e6',
            magFta: 'ff00ff',
            maPon: '800000',
            VaquamarRe: '66cdaa',
            VXe: 'cd',
            VScEd: 'ba55d3',
            VpurpN: '9370db',
            VsHgYF: '3cb371',
            VUXe: '7b68ee',
            VsprRggYF: 'fa9a',
            VQe: '48d1cc',
            VviTetYd: 'c71585',
            midnightXe: '191970',
            mRtcYam: 'f5fffa',
            mistyPse: 'ffe4e1',
            moccasR: 'ffe4b5',
            navajowEte: 'ffdead',
            navy: '80',
            Tdlace: 'fdf5e6',
            Tive: '808000',
            TivedBb: '6b8e23',
            Sange: 'ffa500',
            SangeYd: 'ff4500',
            ScEd: 'da70d6',
            pOegTMnPd: 'eee8aa',
            pOegYF: '98fb98',
            pOeQe: 'afeeee',
            pOeviTetYd: 'db7093',
            papayawEp: 'ffefd5',
            pHKpuff: 'ffdab9',
            peru: 'cd853f',
            pRk: 'ffc0cb',
            plum: 'dda0dd',
            powMrXe: 'b0e0e6',
            purpN: '800080',
            YbeccapurpN: '663399',
            Yd: 'ff0000',
            Psybrown: 'bc8f8f',
            PyOXe: '4169e1',
            saddNbPwn: '8b4513',
            sOmon: 'fa8072',
            sandybPwn: 'f4a460',
            sHgYF: '2e8b57',
            sHshell: 'fff5ee',
            siFna: 'a0522d',
            silver: 'c0c0c0',
            skyXe: '87ceeb',
            UXe: '6a5acd',
            UWay: '708090',
            UgYy: '708090',
            snow: 'fffafa',
            sprRggYF: 'ff7f',
            stAlXe: '4682b4',
            tan: 'd2b48c',
            teO: '8080',
            tEstN: 'd8bfd8',
            tomato: 'ff6347',
            Qe: '40e0d0',
            viTet: 'ee82ee',
            JHt: 'f5deb3',
            wEte: 'ffffff',
            wEtesmoke: 'f5f5f5',
            Lw: 'ffff00',
            LwgYF: '9acd32',
          }
        let de
        function ue(t) {
          de ||
            ((de = (function () {
              const t = {},
                e = Object.keys(he),
                n = Object.keys(ce)
              let i, o, r, a, s
              for (i = 0; i < e.length; i++) {
                for (a = s = e[i], o = 0; o < n.length; o++) (r = n[o]), (s = s.replace(r, ce[r]))
                ;(r = parseInt(he[a], 16)), (t[s] = [(r >> 16) & 255, (r >> 8) & 255, 255 & r])
              }
              return t
            })()),
            (de.transparent = [0, 0, 0, 0]))
          const e = de[t.toLowerCase()]
          return e && { r: e[0], g: e[1], b: e[2], a: 4 === e.length ? e[3] : 255 }
        }
        function fe(t, e, n) {
          if (t) {
            let i = oe(t)
            ;(i[e] = Math.max(0, Math.min(i[e] + i[e] * n, 0 === e ? 360 : 1))),
              (i = ae(i)),
              (t.r = i[0]),
              (t.g = i[1]),
              (t.b = i[2])
          }
        }
        function pe(t, e) {
          return t ? Object.assign(e || {}, t) : t
        }
        function ge(t) {
          var e = { r: 0, g: 0, b: 0, a: 255 }
          return (
            Array.isArray(t)
              ? t.length >= 3 &&
                ((e = { r: t[0], g: t[1], b: t[2], a: 255 }), t.length > 3 && (e.a = Gt(t[3])))
              : ((e = pe(t, { r: 0, g: 0, b: 0, a: 1 })).a = Gt(e.a)),
            e
          )
        }
        function me(t) {
          return 'r' === t.charAt(0)
            ? (function (t) {
                const e = Qt.exec(t)
                let n,
                  i,
                  o,
                  r = 255
                if (e) {
                  if (e[7] !== n) {
                    const t = +e[7]
                    r = 255 & (e[8] ? Kt(t) : 255 * t)
                  }
                  return (
                    (n = +e[1]),
                    (i = +e[3]),
                    (o = +e[5]),
                    (n = 255 & (e[2] ? Kt(n) : n)),
                    (i = 255 & (e[4] ? Kt(i) : i)),
                    (o = 255 & (e[6] ? Kt(o) : o)),
                    { r: n, g: i, b: o, a: r }
                  )
                }
              })(t)
            : le(t)
        }
        class be {
          constructor(t) {
            if (t instanceof be) return t
            const e = typeof t
            let n
            'object' === e
              ? (n = ge(t))
              : 'string' === e &&
                (n =
                  (function (t) {
                    var e,
                      n = t.length
                    return (
                      '#' === t[0] &&
                        (4 === n || 5 === n
                          ? (e = {
                              r: 255 & (17 * Nt[t[1]]),
                              g: 255 & (17 * Nt[t[2]]),
                              b: 255 & (17 * Nt[t[3]]),
                              a: 5 === n ? 17 * Nt[t[4]] : 255,
                            })
                          : (7 !== n && 9 !== n) ||
                            (e = {
                              r: (Nt[t[1]] << 4) | Nt[t[2]],
                              g: (Nt[t[3]] << 4) | Nt[t[4]],
                              b: (Nt[t[5]] << 4) | Nt[t[6]],
                              a: 9 === n ? (Nt[t[7]] << 4) | Nt[t[8]] : 255,
                            })),
                      e
                    )
                  })(t) ||
                  ue(t) ||
                  me(t)),
              (this._rgb = n),
              (this._valid = !!n)
          }
          get valid() {
            return this._valid
          }
          get rgb() {
            var t = pe(this._rgb)
            return t && (t.a = Zt(t.a)), t
          }
          set rgb(t) {
            this._rgb = ge(t)
          }
          rgbString() {
            return this._valid
              ? (function (t) {
                  return (
                    t &&
                    (t.a < 255
                      ? 'rgba('
                          .concat(t.r, ', ')
                          .concat(t.g, ', ')
                          .concat(t.b, ', ')
                          .concat(Zt(t.a), ')')
                      : 'rgb('.concat(t.r, ', ').concat(t.g, ', ').concat(t.b, ')'))
                  )
                })(this._rgb)
              : this._rgb
          }
          hexString() {
            return this._valid ? Ut(this._rgb) : this._rgb
          }
          hslString() {
            return this._valid
              ? (function (t) {
                  if (!t) return
                  const e = oe(t),
                    n = e[0],
                    i = Jt(e[1]),
                    o = Jt(e[2])
                  return t.a < 255
                    ? 'hsla('.concat(n, ', ').concat(i, '%, ').concat(o, '%, ').concat(Zt(t.a), ')')
                    : 'hsl('.concat(n, ', ').concat(i, '%, ').concat(o, '%)')
                })(this._rgb)
              : this._rgb
          }
          mix(t, e) {
            const n = this
            if (t) {
              const i = n.rgb,
                o = t.rgb
              let r
              const a = e === r ? 0.5 : e,
                s = 2 * a - 1,
                l = i.a - o.a,
                c = ((s * l === -1 ? s : (s + l) / (1 + s * l)) + 1) / 2
              ;(r = 1 - c),
                (i.r = 255 & (c * i.r + r * o.r + 0.5)),
                (i.g = 255 & (c * i.g + r * o.g + 0.5)),
                (i.b = 255 & (c * i.b + r * o.b + 0.5)),
                (i.a = a * i.a + (1 - a) * o.a),
                (n.rgb = i)
            }
            return n
          }
          clone() {
            return new be(this.rgb)
          }
          alpha(t) {
            return (this._rgb.a = Gt(t)), this
          }
          clearer(t) {
            return (this._rgb.a *= 1 - t), this
          }
          greyscale() {
            const t = this._rgb,
              e = Xt(0.3 * t.r + 0.59 * t.g + 0.11 * t.b)
            return (t.r = t.g = t.b = e), this
          }
          opaquer(t) {
            return (this._rgb.a *= 1 + t), this
          }
          negate() {
            const t = this._rgb
            return (t.r = 255 - t.r), (t.g = 255 - t.g), (t.b = 255 - t.b), this
          }
          lighten(t) {
            return fe(this._rgb, 2, t), this
          }
          darken(t) {
            return fe(this._rgb, 2, -t), this
          }
          saturate(t) {
            return fe(this._rgb, 1, t), this
          }
          desaturate(t) {
            return fe(this._rgb, 1, -t), this
          }
          rotate(t) {
            return (
              (function (t, e) {
                var n = oe(t)
                ;(n[0] = se(n[0] + e)), (n = ae(n)), (t.r = n[0]), (t.g = n[1]), (t.b = n[2])
              })(this._rgb, t),
              this
            )
          }
        }
        function xe(t) {
          return new be(t)
        }
        const ye = (t) => t instanceof CanvasGradient || t instanceof CanvasPattern
        function ve(t) {
          return ye(t) ? t : xe(t)
        }
        function _e(t) {
          return ye(t) ? t : xe(t).saturate(0.5).darken(0.1).hexString()
        }
        const we = Object.create(null),
          Me = Object.create(null)
        function ke(t, e) {
          if (!e) return t
          const n = e.split('.')
          for (let i = 0, o = n.length; i < o; ++i) {
            const e = n[i]
            t = t[e] || (t[e] = Object.create(null))
          }
          return t
        }
        function Se(t, e, n) {
          return 'string' === typeof e ? st(ke(t, e), n) : st(ke(t, ''), e)
        }
        var Oe = new (class {
          constructor(t) {
            ;(this.animation = void 0),
              (this.backgroundColor = 'rgba(0,0,0,0.1)'),
              (this.borderColor = 'rgba(0,0,0,0.1)'),
              (this.color = '#666'),
              (this.datasets = {}),
              (this.devicePixelRatio = (t) => t.chart.platform.getDevicePixelRatio()),
              (this.elements = {}),
              (this.events = ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove']),
              (this.font = {
                family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                size: 12,
                style: 'normal',
                lineHeight: 1.2,
                weight: null,
              }),
              (this.hover = {}),
              (this.hoverBackgroundColor = (t, e) => _e(e.backgroundColor)),
              (this.hoverBorderColor = (t, e) => _e(e.borderColor)),
              (this.hoverColor = (t, e) => _e(e.color)),
              (this.indexAxis = 'x'),
              (this.interaction = { mode: 'nearest', intersect: !0 }),
              (this.maintainAspectRatio = !0),
              (this.onHover = null),
              (this.onClick = null),
              (this.parsing = !0),
              (this.plugins = {}),
              (this.responsive = !0),
              (this.scale = void 0),
              (this.scales = {}),
              (this.showLine = !0),
              this.describe(t)
          }
          set(t, e) {
            return Se(this, t, e)
          }
          get(t) {
            return ke(this, t)
          }
          describe(t, e) {
            return Se(Me, t, e)
          }
          override(t, e) {
            return Se(we, t, e)
          }
          route(t, e, n, i) {
            const o = ke(this, t),
              r = ke(this, n),
              a = '_' + e
            Object.defineProperties(o, {
              [a]: { value: o[e], writable: !0 },
              [e]: {
                enumerable: !0,
                get() {
                  const t = this[a],
                    e = r[i]
                  return G(t) ? Object.assign({}, e, t) : Q(t, e)
                },
                set(t) {
                  this[a] = t
                },
              },
            })
          }
        })({
          _scriptable: (t) => !t.startsWith('on'),
          _indexable: (t) => 'events' !== t,
          hover: { _fallback: 'interaction' },
          interaction: { _scriptable: !1, _indexable: !1 },
        })
        function Pe(t, e, n, i, o) {
          let r = e[o]
          return r || ((r = e[o] = t.measureText(o).width), n.push(o)), r > i && (i = r), i
        }
        function Ce(t, e, n, i) {
          let o = ((i = i || {}).data = i.data || {}),
            r = (i.garbageCollect = i.garbageCollect || [])
          i.font !== e && ((o = i.data = {}), (r = i.garbageCollect = []), (i.font = e)),
            t.save(),
            (t.font = e)
          let a = 0
          const s = n.length
          let l, c, h, d, u
          for (l = 0; l < s; l++)
            if (((d = n[l]), void 0 !== d && null !== d && !0 !== K(d))) a = Pe(t, o, r, a, d)
            else if (K(d))
              for (c = 0, h = d.length; c < h; c++)
                (u = d[c]), void 0 === u || null === u || K(u) || (a = Pe(t, o, r, a, u))
          t.restore()
          const f = r.length / 2
          if (f > n.length) {
            for (l = 0; l < f; l++) delete o[r[l]]
            r.splice(0, f)
          }
          return a
        }
        function De(t, e, n) {
          const i = t.currentDevicePixelRatio,
            o = 0 !== n ? Math.max(n / 2, 0.5) : 0
          return Math.round((e - o) * i) / i + o
        }
        function Ae(t, e) {
          ;(e = e || t.getContext('2d')).save(),
            e.resetTransform(),
            e.clearRect(0, 0, t.width, t.height),
            e.restore()
        }
        function Te(t, e, n, i) {
          let o, r, a, s, l
          const c = e.pointStyle,
            h = e.rotation,
            d = e.radius
          let u = (h || 0) * yt
          if (
            c &&
            'object' === typeof c &&
            ((o = c.toString()),
            '[object HTMLImageElement]' === o || '[object HTMLCanvasElement]' === o)
          )
            return (
              t.save(),
              t.translate(n, i),
              t.rotate(u),
              t.drawImage(c, -c.width / 2, -c.height / 2, c.width, c.height),
              void t.restore()
            )
          if (!(isNaN(d) || d <= 0)) {
            switch ((t.beginPath(), c)) {
              default:
                t.arc(n, i, d, 0, mt), t.closePath()
                break
              case 'triangle':
                t.moveTo(n + Math.sin(u) * d, i - Math.cos(u) * d),
                  (u += wt),
                  t.lineTo(n + Math.sin(u) * d, i - Math.cos(u) * d),
                  (u += wt),
                  t.lineTo(n + Math.sin(u) * d, i - Math.cos(u) * d),
                  t.closePath()
                break
              case 'rectRounded':
                ;(l = 0.516 * d),
                  (s = d - l),
                  (r = Math.cos(u + _t) * s),
                  (a = Math.sin(u + _t) * s),
                  t.arc(n - r, i - a, l, u - gt, u - vt),
                  t.arc(n + a, i - r, l, u - vt, u),
                  t.arc(n + r, i + a, l, u, u + vt),
                  t.arc(n - a, i + r, l, u + vt, u + gt),
                  t.closePath()
                break
              case 'rect':
                if (!h) {
                  ;(s = Math.SQRT1_2 * d), t.rect(n - s, i - s, 2 * s, 2 * s)
                  break
                }
                u += _t
              case 'rectRot':
                ;(r = Math.cos(u) * d),
                  (a = Math.sin(u) * d),
                  t.moveTo(n - r, i - a),
                  t.lineTo(n + a, i - r),
                  t.lineTo(n + r, i + a),
                  t.lineTo(n - a, i + r),
                  t.closePath()
                break
              case 'crossRot':
                u += _t
              case 'cross':
                ;(r = Math.cos(u) * d),
                  (a = Math.sin(u) * d),
                  t.moveTo(n - r, i - a),
                  t.lineTo(n + r, i + a),
                  t.moveTo(n + a, i - r),
                  t.lineTo(n - a, i + r)
                break
              case 'star':
                ;(r = Math.cos(u) * d),
                  (a = Math.sin(u) * d),
                  t.moveTo(n - r, i - a),
                  t.lineTo(n + r, i + a),
                  t.moveTo(n + a, i - r),
                  t.lineTo(n - a, i + r),
                  (u += _t),
                  (r = Math.cos(u) * d),
                  (a = Math.sin(u) * d),
                  t.moveTo(n - r, i - a),
                  t.lineTo(n + r, i + a),
                  t.moveTo(n + a, i - r),
                  t.lineTo(n - a, i + r)
                break
              case 'line':
                ;(r = Math.cos(u) * d),
                  (a = Math.sin(u) * d),
                  t.moveTo(n - r, i - a),
                  t.lineTo(n + r, i + a)
                break
              case 'dash':
                t.moveTo(n, i), t.lineTo(n + Math.cos(u) * d, i + Math.sin(u) * d)
            }
            t.fill(), e.borderWidth > 0 && t.stroke()
          }
        }
        function Ee(t, e, n) {
          return (
            (n = n || 0.5),
            !e ||
              (t && t.x > e.left - n && t.x < e.right + n && t.y > e.top - n && t.y < e.bottom + n)
          )
        }
        function Le(t, e) {
          t.save(),
            t.beginPath(),
            t.rect(e.left, e.top, e.right - e.left, e.bottom - e.top),
            t.clip()
        }
        function Re(t) {
          t.restore()
        }
        function je(t, e, n, i, o) {
          if (!e) return t.lineTo(n.x, n.y)
          if ('middle' === o) {
            const i = (e.x + n.x) / 2
            t.lineTo(i, e.y), t.lineTo(i, n.y)
          } else ('after' === o) !== !!i ? t.lineTo(e.x, n.y) : t.lineTo(n.x, e.y)
          t.lineTo(n.x, n.y)
        }
        function ze(t, e, n, i) {
          if (!e) return t.lineTo(n.x, n.y)
          t.bezierCurveTo(
            i ? e.cp1x : e.cp2x,
            i ? e.cp1y : e.cp2y,
            i ? n.cp2x : n.cp1x,
            i ? n.cp2y : n.cp1y,
            n.x,
            n.y,
          )
        }
        function Fe(t, e, n, i, o) {
          let r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {}
          const a = K(e) ? e : [e],
            s = r.strokeWidth > 0 && '' !== r.strokeColor
          let l, c
          for (t.save(), t.font = o.string, Ie(t, r), l = 0; l < a.length; ++l)
            (c = a[l]),
              s &&
                (r.strokeColor && (t.strokeStyle = r.strokeColor),
                q(r.strokeWidth) || (t.lineWidth = r.strokeWidth),
                t.strokeText(c, n, i, r.maxWidth)),
              t.fillText(c, n, i, r.maxWidth),
              Ve(t, n, i, c, r),
              (i += o.lineHeight)
          t.restore()
        }
        function Ie(t, e) {
          e.translation && t.translate(e.translation[0], e.translation[1]),
            q(e.rotation) || t.rotate(e.rotation),
            e.color && (t.fillStyle = e.color),
            e.textAlign && (t.textAlign = e.textAlign),
            e.textBaseline && (t.textBaseline = e.textBaseline)
        }
        function Ve(t, e, n, i, o) {
          if (o.strikethrough || o.underline) {
            const r = t.measureText(i),
              a = e - r.actualBoundingBoxLeft,
              s = e + r.actualBoundingBoxRight,
              l = n - r.actualBoundingBoxAscent,
              c = n + r.actualBoundingBoxDescent,
              h = o.strikethrough ? (l + c) / 2 : c
            ;(t.strokeStyle = t.fillStyle),
              t.beginPath(),
              (t.lineWidth = o.decorationWidth || 2),
              t.moveTo(a, h),
              t.lineTo(s, h),
              t.stroke()
          }
        }
        function Be(t, e) {
          const { x: n, y: i, w: o, h: r, radius: a } = e
          t.arc(n + a.topLeft, i + a.topLeft, a.topLeft, -vt, gt, !0),
            t.lineTo(n, i + r - a.bottomLeft),
            t.arc(n + a.bottomLeft, i + r - a.bottomLeft, a.bottomLeft, gt, vt, !0),
            t.lineTo(n + o - a.bottomRight, i + r),
            t.arc(n + o - a.bottomRight, i + r - a.bottomRight, a.bottomRight, vt, 0, !0),
            t.lineTo(n + o, i + a.topRight),
            t.arc(n + o - a.topRight, i + a.topRight, a.topRight, 0, -vt, !0),
            t.lineTo(n + a.topLeft, i)
        }
        const Ne = new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/),
          We = new RegExp(/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/)
        function He(t, e) {
          const n = ('' + t).match(Ne)
          if (!n || 'normal' === n[1]) return 1.2 * e
          switch (((t = +n[2]), n[3])) {
            case 'px':
              return t
            case '%':
              t /= 100
          }
          return e * t
        }
        const $e = (t) => +t || 0
        function Ye(t, e) {
          const n = {},
            i = G(e),
            o = i ? Object.keys(e) : e,
            r = G(t) ? (i ? (n) => Q(t[n], t[e[n]]) : (e) => t[e]) : () => t
          for (const a of o) n[a] = $e(r(a))
          return n
        }
        function Ue(t) {
          return Ye(t, { top: 'y', right: 'x', bottom: 'y', left: 'x' })
        }
        function Xe(t) {
          return Ye(t, ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'])
        }
        function qe(t) {
          const e = Ue(t)
          return (e.width = e.left + e.right), (e.height = e.top + e.bottom), e
        }
        function Ke(t, e) {
          ;(t = t || {}), (e = e || Oe.font)
          let n = Q(t.size, e.size)
          'string' === typeof n && (n = parseInt(n, 10))
          let i = Q(t.style, e.style)
          i &&
            !('' + i).match(We) &&
            (console.warn('Invalid font style specified: "' + i + '"'), (i = ''))
          const o = {
            family: Q(t.family, e.family),
            lineHeight: He(Q(t.lineHeight, e.lineHeight), n),
            size: n,
            style: i,
            weight: Q(t.weight, e.weight),
            string: '',
          }
          return (
            (o.string = (function (t) {
              return !t || q(t.size) || q(t.family)
                ? null
                : (t.style ? t.style + ' ' : '') +
                    (t.weight ? t.weight + ' ' : '') +
                    t.size +
                    'px ' +
                    t.family
            })(o)),
            o
          )
        }
        function Ge(t, e, n, i) {
          let o,
            r,
            a,
            s = !0
          for (o = 0, r = t.length; o < r; ++o)
            if (
              ((a = t[o]),
              void 0 !== a &&
                (void 0 !== e && 'function' === typeof a && ((a = a(e)), (s = !1)),
                void 0 !== n && K(a) && ((a = a[n % a.length]), (s = !1)),
                void 0 !== a))
            )
              return i && !s && (i.cacheable = !1), a
        }
        function Ze(t, e, n) {
          n = n || ((n) => t[n] < e)
          let i,
            o = t.length - 1,
            r = 0
          for (; o - r > 1; ) (i = (r + o) >> 1), n(i) ? (r = i) : (o = i)
          return { lo: r, hi: o }
        }
        const Je = (t, e, n) => Ze(t, n, (i) => t[i][e] < n),
          Qe = (t, e, n) => Ze(t, n, (i) => t[i][e] >= n)
        const tn = ['push', 'pop', 'shift', 'splice', 'unshift']
        function en(t, e) {
          const n = t._chartjs
          if (!n) return
          const i = n.listeners,
            o = i.indexOf(e)
          ;-1 !== o && i.splice(o, 1),
            i.length > 0 ||
              (tn.forEach((e) => {
                delete t[e]
              }),
              delete t._chartjs)
        }
        function nn(t) {
          const e = new Set()
          let n, i
          for (n = 0, i = t.length; n < i; ++n) e.add(t[n])
          return e.size === i ? t : Array.from(e)
        }
        function on(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [''],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t,
            i = arguments.length > 3 ? arguments[3] : void 0,
            o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => t[0]
          ft(i) || (i = mn('_fallback', t))
          const r = {
            [Symbol.toStringTag]: 'Object',
            _cacheable: !0,
            _scopes: t,
            _rootScopes: n,
            _fallback: i,
            _getTarget: o,
            override: (o) => on([o, ...t], e, n, i),
          }
          return new Proxy(r, {
            deleteProperty: (e, n) => (delete e[n], delete e._keys, delete t[0][n], !0),
            get: (n, i) => cn(n, i, () => gn(i, e, t, n)),
            getOwnPropertyDescriptor: (t, e) => Reflect.getOwnPropertyDescriptor(t._scopes[0], e),
            getPrototypeOf: () => Reflect.getPrototypeOf(t[0]),
            has: (t, e) => bn(t).includes(e),
            ownKeys: (t) => bn(t),
            set: (t, e, n) => (
              ((t._storage || (t._storage = o()))[e] = n), delete t[e], delete t._keys, !0
            ),
          })
        }
        function rn(t, e, n, i) {
          const o = {
            _cacheable: !1,
            _proxy: t,
            _context: e,
            _subProxy: n,
            _stack: new Set(),
            _descriptors: an(t, i),
            setContext: (e) => rn(t, e, n, i),
            override: (o) => rn(t.override(o), e, n, i),
          }
          return new Proxy(o, {
            deleteProperty: (e, n) => (delete e[n], delete t[n], !0),
            get: (t, e, n) =>
              cn(t, e, () =>
                (function (t, e, n) {
                  const { _proxy: i, _context: o, _subProxy: r, _descriptors: a } = t
                  let s = i[e]
                  pt(s) &&
                    a.isScriptable(e) &&
                    (s = (function (t, e, n, i) {
                      const { _proxy: o, _context: r, _subProxy: a, _stack: s } = n
                      if (s.has(t))
                        throw new Error(
                          'Recursion detected: ' + Array.from(s).join('->') + '->' + t,
                        )
                      s.add(t),
                        (e = e(r, a || i)),
                        s.delete(t),
                        G(e) && (e = fn(o._scopes, o, t, e))
                      return e
                    })(e, s, t, n))
                  K(s) &&
                    s.length &&
                    (s = (function (t, e, n, i) {
                      const { _proxy: o, _context: r, _subProxy: a, _descriptors: s } = n
                      if (ft(r.index) && i(t)) e = e[r.index % e.length]
                      else if (G(e[0])) {
                        const n = e,
                          i = o._scopes.filter((t) => t !== n)
                        e = []
                        for (const l of n) {
                          const n = fn(i, o, t, l)
                          e.push(rn(n, r, a && a[t], s))
                        }
                      }
                      return e
                    })(e, s, t, a.isIndexable))
                  ln(e, s) && (s = rn(s, o, r && r[e], a))
                  return s
                })(t, e, n),
              ),
            getOwnPropertyDescriptor: (e, n) =>
              e._descriptors.allKeys
                ? Reflect.has(t, n)
                  ? { enumerable: !0, configurable: !0 }
                  : void 0
                : Reflect.getOwnPropertyDescriptor(t, n),
            getPrototypeOf: () => Reflect.getPrototypeOf(t),
            has: (e, n) => Reflect.has(t, n),
            ownKeys: () => Reflect.ownKeys(t),
            set: (e, n, i) => ((t[n] = i), delete e[n], !0),
          })
        }
        function an(t) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { scriptable: !0, indexable: !0 }
          const {
            _scriptable: n = e.scriptable,
            _indexable: i = e.indexable,
            _allKeys: o = e.allKeys,
          } = t
          return {
            allKeys: o,
            scriptable: n,
            indexable: i,
            isScriptable: pt(n) ? n : () => n,
            isIndexable: pt(i) ? i : () => i,
          }
        }
        const sn = (t, e) => (t ? t + ut(e) : e),
          ln = (t, e) => G(e) && 'adapters' !== t
        function cn(t, e, n) {
          let i = t[e]
          return ft(i) || ((i = n()), ft(i) && (t[e] = i)), i
        }
        function hn(t, e, n) {
          return pt(t) ? t(e, n) : t
        }
        const dn = (t, e) => (!0 === t ? e : 'string' === typeof t ? dt(e, t) : void 0)
        function un(t, e, n, i) {
          for (const o of e) {
            const e = dn(n, o)
            if (e) {
              t.add(e)
              const o = hn(e._fallback, n, e)
              if (ft(o) && o !== n && o !== i) return o
            } else if (!1 === e && ft(i) && n !== i) return null
          }
          return !1
        }
        function fn(t, e, n, i) {
          const o = e._rootScopes,
            r = hn(e._fallback, n, i),
            a = [...t, ...o],
            s = new Set()
          s.add(i)
          let l = pn(s, a, n, r || n)
          return (
            null !== l &&
            (!ft(r) || r === n || ((l = pn(s, a, r, l)), null !== l)) &&
            on(Array.from(s), [''], o, r, () =>
              (function (t, e, n) {
                const i = t._getTarget()
                e in i || (i[e] = {})
                const o = i[e]
                if (K(o) && G(n)) return n
                return o
              })(e, n, i),
            )
          )
        }
        function pn(t, e, n, i) {
          for (; n; ) n = un(t, e, n, i)
          return n
        }
        function gn(t, e, n, i) {
          let o
          for (const r of e)
            if (((o = mn(sn(r, t), n)), ft(o))) return ln(t, o) ? fn(n, i, t, o) : o
        }
        function mn(t, e) {
          for (const n of e) {
            if (!n) continue
            const e = n[t]
            if (ft(e)) return e
          }
        }
        function bn(t) {
          let e = t._keys
          return (
            e ||
              (e = t._keys =
                (function (t) {
                  const e = new Set()
                  for (const n of t)
                    for (const t of Object.keys(n).filter((t) => !t.startsWith('_'))) e.add(t)
                  return Array.from(e)
                })(t._scopes)),
            e
          )
        }
        const xn = Number.EPSILON || 1e-14,
          yn = (t, e) => e < t.length && !t[e].skip && t[e],
          vn = (t) => ('x' === t ? 'y' : 'x')
        function _n(t, e, n, i) {
          const o = t.skip ? e : t,
            r = e,
            a = n.skip ? e : n,
            s = Et(r, o),
            l = Et(a, r)
          let c = s / (s + l),
            h = l / (s + l)
          ;(c = isNaN(c) ? 0 : c), (h = isNaN(h) ? 0 : h)
          const d = i * c,
            u = i * h
          return {
            previous: { x: r.x - d * (a.x - o.x), y: r.y - d * (a.y - o.y) },
            next: { x: r.x + u * (a.x - o.x), y: r.y + u * (a.y - o.y) },
          }
        }
        function wn(t, e, n) {
          const i = t.length
          let o,
            r,
            a,
            s,
            l,
            c = yn(t, 0)
          for (let h = 0; h < i - 1; ++h)
            (l = c),
              (c = yn(t, h + 1)),
              l &&
                c &&
                (Pt(e[h], 0, xn)
                  ? (n[h] = n[h + 1] = 0)
                  : ((o = n[h] / e[h]),
                    (r = n[h + 1] / e[h]),
                    (s = Math.pow(o, 2) + Math.pow(r, 2)),
                    s <= 9 ||
                      ((a = 3 / Math.sqrt(s)), (n[h] = o * a * e[h]), (n[h + 1] = r * a * e[h]))))
        }
        function Mn(t, e) {
          let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'x'
          const i = vn(n),
            o = t.length
          let r,
            a,
            s,
            l = yn(t, 0)
          for (let c = 0; c < o; ++c) {
            if (((a = s), (s = l), (l = yn(t, c + 1)), !s)) continue
            const o = s[n],
              h = s[i]
            a &&
              ((r = (o - a[n]) / 3),
              (s['cp1'.concat(n)] = o - r),
              (s['cp1'.concat(i)] = h - r * e[c])),
              l &&
                ((r = (l[n] - o) / 3),
                (s['cp2'.concat(n)] = o + r),
                (s['cp2'.concat(i)] = h + r * e[c]))
          }
        }
        function kn(t, e, n) {
          return Math.max(Math.min(t, n), e)
        }
        function Sn(t, e, n, i, o) {
          let r, a, s, l
          if (
            (e.spanGaps && (t = t.filter((t) => !t.skip)), 'monotone' === e.cubicInterpolationMode)
          )
            !(function (t) {
              let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'x'
              const n = vn(e),
                i = t.length,
                o = Array(i).fill(0),
                r = Array(i)
              let a,
                s,
                l,
                c = yn(t, 0)
              for (a = 0; a < i; ++a)
                if (((s = l), (l = c), (c = yn(t, a + 1)), l)) {
                  if (c) {
                    const t = c[e] - l[e]
                    o[a] = 0 !== t ? (c[n] - l[n]) / t : 0
                  }
                  r[a] = s
                    ? c
                      ? kt(o[a - 1]) !== kt(o[a])
                        ? 0
                        : (o[a - 1] + o[a]) / 2
                      : o[a - 1]
                    : o[a]
                }
              wn(t, o, r), Mn(t, r, e)
            })(t, o)
          else {
            let n = i ? t[t.length - 1] : t[0]
            for (r = 0, a = t.length; r < a; ++r)
              (s = t[r]),
                (l = _n(n, s, t[Math.min(r + 1, a - (i ? 0 : 1)) % a], e.tension)),
                (s.cp1x = l.previous.x),
                (s.cp1y = l.previous.y),
                (s.cp2x = l.next.x),
                (s.cp2y = l.next.y),
                (n = s)
          }
          e.capBezierPoints &&
            (function (t, e) {
              let n,
                i,
                o,
                r,
                a,
                s = Ee(t[0], e)
              for (n = 0, i = t.length; n < i; ++n)
                (a = r),
                  (r = s),
                  (s = n < i - 1 && Ee(t[n + 1], e)),
                  r &&
                    ((o = t[n]),
                    a &&
                      ((o.cp1x = kn(o.cp1x, e.left, e.right)),
                      (o.cp1y = kn(o.cp1y, e.top, e.bottom))),
                    s &&
                      ((o.cp2x = kn(o.cp2x, e.left, e.right)),
                      (o.cp2y = kn(o.cp2y, e.top, e.bottom))))
            })(t, n)
        }
        function On() {
          return 'undefined' !== typeof window && 'undefined' !== typeof document
        }
        function Pn(t) {
          let e = t.parentNode
          return e && '[object ShadowRoot]' === e.toString() && (e = e.host), e
        }
        function Cn(t, e, n) {
          let i
          return (
            'string' === typeof t
              ? ((i = parseInt(t, 10)), -1 !== t.indexOf('%') && (i = (i / 100) * e.parentNode[n]))
              : (i = t),
            i
          )
        }
        const Dn = (t) => window.getComputedStyle(t, null)
        const An = ['top', 'right', 'bottom', 'left']
        function Tn(t, e, n) {
          const i = {}
          n = n ? '-' + n : ''
          for (let o = 0; o < 4; o++) {
            const r = An[o]
            i[r] = parseFloat(t[e + '-' + r + n]) || 0
          }
          return (i.width = i.left + i.right), (i.height = i.top + i.bottom), i
        }
        function En(t, e) {
          const { canvas: n, currentDevicePixelRatio: i } = e,
            o = Dn(n),
            r = 'border-box' === o.boxSizing,
            a = Tn(o, 'padding'),
            s = Tn(o, 'border', 'width'),
            {
              x: l,
              y: c,
              box: h,
            } = (function (t, e) {
              const n = t.native || t,
                i = n.touches,
                o = i && i.length ? i[0] : n,
                { offsetX: r, offsetY: a } = o
              let s,
                l,
                c = !1
              if (((t, e, n) => (t > 0 || e > 0) && (!n || !n.shadowRoot))(r, a, n.target))
                (s = r), (l = a)
              else {
                const t = e.getBoundingClientRect()
                ;(s = o.clientX - t.left), (l = o.clientY - t.top), (c = !0)
              }
              return { x: s, y: l, box: c }
            })(t, n),
            d = a.left + (h && s.left),
            u = a.top + (h && s.top)
          let { width: f, height: p } = e
          return (
            r && ((f -= a.width + s.width), (p -= a.height + s.height)),
            {
              x: Math.round((((l - d) / f) * n.width) / i),
              y: Math.round((((c - u) / p) * n.height) / i),
            }
          )
        }
        const Ln = (t) => Math.round(10 * t) / 10
        function Rn(t, e, n, i) {
          const o = Dn(t),
            r = Tn(o, 'margin'),
            a = Cn(o.maxWidth, t, 'clientWidth') || xt,
            s = Cn(o.maxHeight, t, 'clientHeight') || xt,
            l = (function (t, e, n) {
              let i, o
              if (void 0 === e || void 0 === n) {
                const r = Pn(t)
                if (r) {
                  const t = r.getBoundingClientRect(),
                    a = Dn(r),
                    s = Tn(a, 'border', 'width'),
                    l = Tn(a, 'padding')
                  ;(e = t.width - l.width - s.width),
                    (n = t.height - l.height - s.height),
                    (i = Cn(a.maxWidth, r, 'clientWidth')),
                    (o = Cn(a.maxHeight, r, 'clientHeight'))
                } else (e = t.clientWidth), (n = t.clientHeight)
              }
              return { width: e, height: n, maxWidth: i || xt, maxHeight: o || xt }
            })(t, e, n)
          let { width: c, height: h } = l
          if ('content-box' === o.boxSizing) {
            const t = Tn(o, 'border', 'width'),
              e = Tn(o, 'padding')
            ;(c -= e.width + t.width), (h -= e.height + t.height)
          }
          return (
            (c = Math.max(0, c - r.width)),
            (h = Math.max(0, i ? Math.floor(c / i) : h - r.height)),
            (c = Ln(Math.min(c, a, l.maxWidth))),
            (h = Ln(Math.min(h, s, l.maxHeight))),
            c && !h && (h = Ln(c / 2)),
            { width: c, height: h }
          )
        }
        function jn(t, e, n) {
          const i = e || 1,
            o = Math.floor(t.height * i),
            r = Math.floor(t.width * i)
          ;(t.height = o / i), (t.width = r / i)
          const a = t.canvas
          return (
            a.style &&
              (n || (!a.style.height && !a.style.width)) &&
              ((a.style.height = ''.concat(t.height, 'px')),
              (a.style.width = ''.concat(t.width, 'px'))),
            (t.currentDevicePixelRatio !== i || a.height !== o || a.width !== r) &&
              ((t.currentDevicePixelRatio = i),
              (a.height = o),
              (a.width = r),
              t.ctx.setTransform(i, 0, 0, i, 0, 0),
              !0)
          )
        }
        const zn = (function () {
          let t = !1
          try {
            const e = {
              get passive() {
                return (t = !0), !1
              },
            }
            window.addEventListener('test', null, e), window.removeEventListener('test', null, e)
          } catch (p) {}
          return t
        })()
        function Fn(t, e) {
          const n = (function (t, e) {
              return Dn(t).getPropertyValue(e)
            })(t, e),
            i = n && n.match(/^(\d+)(\.\d+)?px$/)
          return i ? +i[1] : void 0
        }
        function In(t, e, n, i) {
          return { x: t.x + n * (e.x - t.x), y: t.y + n * (e.y - t.y) }
        }
        function Vn(t, e, n, i) {
          return {
            x: t.x + n * (e.x - t.x),
            y:
              'middle' === i
                ? n < 0.5
                  ? t.y
                  : e.y
                : 'after' === i
                ? n < 1
                  ? t.y
                  : e.y
                : n > 0
                ? e.y
                : t.y,
          }
        }
        function Bn(t, e, n, i) {
          const o = { x: t.cp2x, y: t.cp2y },
            r = { x: e.cp1x, y: e.cp1y },
            a = In(t, o, n),
            s = In(o, r, n),
            l = In(r, e, n),
            c = In(a, s, n),
            h = In(s, l, n)
          return In(c, h, n)
        }
        const Nn = new Map()
        function Wn(t, e, n) {
          return (function (t, e) {
            e = e || {}
            const n = t + JSON.stringify(e)
            let i = Nn.get(n)
            return i || ((i = new Intl.NumberFormat(t, e)), Nn.set(n, i)), i
          })(e, n).format(t)
        }
        function Hn(t, e, n) {
          return t
            ? (function (t, e) {
                return {
                  x: (n) => t + t + e - n,
                  setWidth(t) {
                    e = t
                  },
                  textAlign: (t) => ('center' === t ? t : 'right' === t ? 'left' : 'right'),
                  xPlus: (t, e) => t - e,
                  leftForLtr: (t, e) => t - e,
                }
              })(e, n)
            : {
                x: (t) => t,
                setWidth(t) {},
                textAlign: (t) => t,
                xPlus: (t, e) => t + e,
                leftForLtr: (t, e) => t,
              }
        }
        function $n(t, e) {
          let n, i
          ;('ltr' !== e && 'rtl' !== e) ||
            ((n = t.canvas.style),
            (i = [n.getPropertyValue('direction'), n.getPropertyPriority('direction')]),
            n.setProperty('direction', e, 'important'),
            (t.prevTextDirection = i))
        }
        function Yn(t, e) {
          void 0 !== e &&
            (delete t.prevTextDirection, t.canvas.style.setProperty('direction', e[0], e[1]))
        }
        function Un(t) {
          return 'angle' === t
            ? { between: jt, compare: Lt, normalize: Rt }
            : {
                between: (t, e, n) => t >= Math.min(e, n) && t <= Math.max(n, e),
                compare: (t, e) => t - e,
                normalize: (t) => t,
              }
        }
        function Xn(t) {
          let { start: e, end: n, count: i, loop: o, style: r } = t
          return { start: e % i, end: n % i, loop: o && (n - e + 1) % i === 0, style: r }
        }
        function qn(t, e, n) {
          if (!n) return [t]
          const { property: i, start: o, end: r } = n,
            a = e.length,
            { compare: s, between: l, normalize: c } = Un(i),
            {
              start: h,
              end: d,
              loop: u,
              style: f,
            } = (function (t, e, n) {
              const { property: i, start: o, end: r } = n,
                { between: a, normalize: s } = Un(i),
                l = e.length
              let c,
                h,
                { start: d, end: u, loop: f } = t
              if (f) {
                for (d += l, u += l, c = 0, h = l; c < h && a(s(e[d % l][i]), o, r); ++c) d--, u--
                ;(d %= l), (u %= l)
              }
              return u < d && (u += l), { start: d, end: u, loop: f, style: t.style }
            })(t, e, n),
            p = []
          let g,
            m,
            b,
            x = !1,
            y = null
          const v = () => x || (l(o, b, g) && 0 !== s(o, b)),
            _ = () => !x || 0 === s(r, g) || l(r, b, g)
          for (let w = h, M = h; w <= d; ++w)
            (m = e[w % a]),
              m.skip ||
                ((g = c(m[i])),
                g !== b &&
                  ((x = l(g, o, r)),
                  null === y && v() && (y = 0 === s(g, o) ? w : M),
                  null !== y &&
                    _() &&
                    (p.push(Xn({ start: y, end: w, loop: u, count: a, style: f })), (y = null)),
                  (M = w),
                  (b = g)))
          return null !== y && p.push(Xn({ start: y, end: d, loop: u, count: a, style: f })), p
        }
        function Kn(t, e) {
          const n = [],
            i = t.segments
          for (let o = 0; o < i.length; o++) {
            const r = qn(i[o], t.points, e)
            r.length && n.push(...r)
          }
          return n
        }
        function Gn(t, e, n, i) {
          return i && i.setContext && n
            ? (function (t, e, n, i) {
                const o = Zn(t.options),
                  r = n.length,
                  a = []
                let s = e[0].start,
                  l = s
                for (const c of e) {
                  let e,
                    h = o,
                    d = n[s % r]
                  for (l = s + 1; l <= c.end; l++) {
                    const o = n[l % r]
                    ;(e = Zn(
                      i.setContext({
                        type: 'segment',
                        p0: d,
                        p1: o,
                        p0DataIndex: (l - 1) % r,
                        p1DataIndex: l % r,
                        datasetIndex: t._datasetIndex,
                      }),
                    )),
                      Jn(e, h) &&
                        (a.push({ start: s, end: l - 1, loop: c.loop, style: h }),
                        (h = e),
                        (s = l - 1)),
                      (d = o),
                      (h = e)
                  }
                  s < l - 1 &&
                    (a.push({ start: s, end: l - 1, loop: c.loop, style: e }), (s = l - 1))
                }
                return a
              })(t, e, n, i)
            : e
        }
        function Zn(t) {
          return {
            backgroundColor: t.backgroundColor,
            borderCapStyle: t.borderCapStyle,
            borderDash: t.borderDash,
            borderDashOffset: t.borderDashOffset,
            borderJoinStyle: t.borderJoinStyle,
            borderWidth: t.borderWidth,
            borderColor: t.borderColor,
          }
        }
        function Jn(t, e) {
          return e && JSON.stringify(t) !== JSON.stringify(e)
        }
        var Qn = new (class {
          constructor() {
            ;(this._request = null),
              (this._charts = new Map()),
              (this._running = !1),
              (this._lastDate = void 0)
          }
          _notify(t, e, n, i) {
            const o = e.listeners[i],
              r = e.duration
            o.forEach((i) =>
              i({
                chart: t,
                initial: e.initial,
                numSteps: r,
                currentStep: Math.min(n - e.start, r),
              }),
            )
          }
          _refresh() {
            const t = this
            t._request ||
              ((t._running = !0),
              (t._request = W.call(window, () => {
                t._update(), (t._request = null), t._running && t._refresh()
              })))
          }
          _update() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now()
            const e = this
            let n = 0
            e._charts.forEach((i, o) => {
              if (!i.running || !i.items.length) return
              const r = i.items
              let a,
                s = r.length - 1,
                l = !1
              for (; s >= 0; --s)
                (a = r[s]),
                  a._active
                    ? (a._total > i.duration && (i.duration = a._total), a.tick(t), (l = !0))
                    : ((r[s] = r[r.length - 1]), r.pop())
              l && (o.draw(), e._notify(o, i, t, 'progress')),
                r.length || ((i.running = !1), e._notify(o, i, t, 'complete'), (i.initial = !1)),
                (n += r.length)
            }),
              (e._lastDate = t),
              0 === n && (e._running = !1)
          }
          _getAnims(t) {
            const e = this._charts
            let n = e.get(t)
            return (
              n ||
                ((n = {
                  running: !1,
                  initial: !0,
                  items: [],
                  listeners: { complete: [], progress: [] },
                }),
                e.set(t, n)),
              n
            )
          }
          listen(t, e, n) {
            this._getAnims(t).listeners[e].push(n)
          }
          add(t, e) {
            e && e.length && this._getAnims(t).items.push(...e)
          }
          has(t) {
            return this._getAnims(t).items.length > 0
          }
          start(t) {
            const e = this._charts.get(t)
            e &&
              ((e.running = !0),
              (e.start = Date.now()),
              (e.duration = e.items.reduce((t, e) => Math.max(t, e._duration), 0)),
              this._refresh())
          }
          running(t) {
            if (!this._running) return !1
            const e = this._charts.get(t)
            return !!(e && e.running && e.items.length)
          }
          stop(t) {
            const e = this._charts.get(t)
            if (!e || !e.items.length) return
            const n = e.items
            let i = n.length - 1
            for (; i >= 0; --i) n[i].cancel()
            ;(e.items = []), this._notify(t, e, Date.now(), 'complete')
          }
          remove(t) {
            return this._charts.delete(t)
          }
        })()
        const ti = 'transparent',
          ei = {
            boolean: (t, e, n) => (n > 0.5 ? e : t),
            color(t, e, n) {
              const i = ve(t || ti),
                o = i.valid && ve(e || ti)
              return o && o.valid ? o.mix(i, n).hexString() : e
            },
            number: (t, e, n) => t + (e - t) * n,
          }
        class ni {
          constructor(t, e, n, i) {
            const o = e[n]
            i = Ge([t.to, i, o, t.from])
            const r = Ge([t.from, o, i])
            ;(this._active = !0),
              (this._fn = t.fn || ei[t.type || typeof r]),
              (this._easing = Bt[t.easing] || Bt.linear),
              (this._start = Math.floor(Date.now() + (t.delay || 0))),
              (this._duration = this._total = Math.floor(t.duration)),
              (this._loop = !!t.loop),
              (this._target = e),
              (this._prop = n),
              (this._from = r),
              (this._to = i),
              (this._promises = void 0)
          }
          active() {
            return this._active
          }
          update(t, e, n) {
            const i = this
            if (i._active) {
              i._notify(!1)
              const o = i._target[i._prop],
                r = n - i._start,
                a = i._duration - r
              ;(i._start = n),
                (i._duration = Math.floor(Math.max(a, t.duration))),
                (i._total += r),
                (i._loop = !!t.loop),
                (i._to = Ge([t.to, e, o, t.from])),
                (i._from = Ge([t.from, o, e]))
            }
          }
          cancel() {
            const t = this
            t._active && (t.tick(Date.now()), (t._active = !1), t._notify(!1))
          }
          tick(t) {
            const e = this,
              n = t - e._start,
              i = e._duration,
              o = e._prop,
              r = e._from,
              a = e._loop,
              s = e._to
            let l
            if (((e._active = r !== s && (a || n < i)), !e._active))
              return (e._target[o] = s), void e._notify(!0)
            n < 0
              ? (e._target[o] = r)
              : ((l = (n / i) % 2),
                (l = a && l > 1 ? 2 - l : l),
                (l = e._easing(Math.min(1, Math.max(0, l)))),
                (e._target[o] = e._fn(r, s, l)))
          }
          wait() {
            const t = this._promises || (this._promises = [])
            return new Promise((e, n) => {
              t.push({ res: e, rej: n })
            })
          }
          _notify(t) {
            const e = t ? 'res' : 'rej',
              n = this._promises || []
            for (let i = 0; i < n.length; i++) n[i][e]()
          }
        }
        Oe.set('animation', {
          delay: void 0,
          duration: 1e3,
          easing: 'easeOutQuart',
          fn: void 0,
          from: void 0,
          loop: void 0,
          to: void 0,
          type: void 0,
        })
        const ii = Object.keys(Oe.animation)
        Oe.describe('animation', {
          _fallback: !1,
          _indexable: !1,
          _scriptable: (t) => 'onProgress' !== t && 'onComplete' !== t && 'fn' !== t,
        }),
          Oe.set('animations', {
            colors: { type: 'color', properties: ['color', 'borderColor', 'backgroundColor'] },
            numbers: { type: 'number', properties: ['x', 'y', 'borderWidth', 'radius', 'tension'] },
          }),
          Oe.describe('animations', { _fallback: 'animation' }),
          Oe.set('transitions', {
            active: { animation: { duration: 400 } },
            resize: { animation: { duration: 0 } },
            show: {
              animations: {
                colors: { from: 'transparent' },
                visible: { type: 'boolean', duration: 0 },
              },
            },
            hide: {
              animations: {
                colors: { to: 'transparent' },
                visible: { type: 'boolean', easing: 'linear', fn: (t) => 0 | t },
              },
            },
          })
        class oi {
          constructor(t, e) {
            ;(this._chart = t), (this._properties = new Map()), this.configure(e)
          }
          configure(t) {
            if (!G(t)) return
            const e = this._properties
            Object.getOwnPropertyNames(t).forEach((n) => {
              const i = t[n]
              if (!G(i)) return
              const o = {}
              for (const t of ii) o[t] = i[t]
              ;((K(i.properties) && i.properties) || [n]).forEach((t) => {
                ;(t !== n && e.has(t)) || e.set(t, o)
              })
            })
          }
          _animateOptions(t, e) {
            const n = e.options,
              i = (function (t, e) {
                if (!e) return
                let n = t.options
                if (!n) return void (t.options = e)
                n.$shared &&
                  (t.options = n = Object.assign({}, n, { $shared: !1, $animations: {} }))
                return n
              })(t, n)
            if (!i) return []
            const o = this._createAnimations(i, n)
            return (
              n.$shared &&
                (function (t, e) {
                  const n = [],
                    i = Object.keys(e)
                  for (let o = 0; o < i.length; o++) {
                    const e = t[i[o]]
                    e && e.active() && n.push(e.wait())
                  }
                  return Promise.all(n)
                })(t.options.$animations, n).then(
                  () => {
                    t.options = n
                  },
                  () => {},
                ),
              o
            )
          }
          _createAnimations(t, e) {
            const n = this._properties,
              i = [],
              o = t.$animations || (t.$animations = {}),
              r = Object.keys(e),
              a = Date.now()
            let s
            for (s = r.length - 1; s >= 0; --s) {
              const l = r[s]
              if ('$' === l.charAt(0)) continue
              if ('options' === l) {
                i.push(...this._animateOptions(t, e))
                continue
              }
              const c = e[l]
              let h = o[l]
              const d = n.get(l)
              if (h) {
                if (d && h.active()) {
                  h.update(d, c, a)
                  continue
                }
                h.cancel()
              }
              d && d.duration ? ((o[l] = h = new ni(d, t, l, c)), i.push(h)) : (t[l] = c)
            }
            return i
          }
          update(t, e) {
            if (0 === this._properties.size) return void Object.assign(t, e)
            const n = this._createAnimations(t, e)
            return n.length ? (Qn.add(this._chart, n), !0) : void 0
          }
        }
        function ri(t, e) {
          const n = (t && t.options) || {},
            i = n.reverse,
            o = void 0 === n.min ? e : 0,
            r = void 0 === n.max ? e : 0
          return { start: i ? r : o, end: i ? o : r }
        }
        function ai(t, e) {
          const n = [],
            i = t._getSortedDatasetMetas(e)
          let o, r
          for (o = 0, r = i.length; o < r; ++o) n.push(i[o].index)
          return n
        }
        function si(t, e, n, i) {
          const o = t.keys,
            r = 'single' === i.mode
          let a, s, l, c
          if (null !== e) {
            for (a = 0, s = o.length; a < s; ++a) {
              if (((l = +o[a]), l === n)) {
                if (i.all) continue
                break
              }
              ;(c = t.values[l]), Z(c) && (r || 0 === e || kt(e) === kt(c)) && (e += c)
            }
            return e
          }
        }
        function li(t, e) {
          const n = t && t.options.stacked
          return n || (void 0 === n && void 0 !== e.stack)
        }
        function ci(t, e, n) {
          const i = t[e] || (t[e] = {})
          return i[n] || (i[n] = {})
        }
        function hi(t, e, n) {
          for (const i of e.getMatchingVisibleMetas('bar').reverse()) {
            const e = t[i.index]
            if ((n && e > 0) || (!n && e < 0)) return i.index
          }
          return null
        }
        function di(t, e) {
          const { chart: n, _cachedMeta: i } = t,
            o = n._stacks || (n._stacks = {}),
            { iScale: r, vScale: a, index: s } = i,
            l = r.axis,
            c = a.axis,
            h = (function (t, e, n) {
              return ''
                .concat(t.id, '.')
                .concat(e.id, '.')
                .concat(n.stack || n.type)
            })(r, a, i),
            d = e.length
          let u
          for (let f = 0; f < d; ++f) {
            const t = e[f],
              { [l]: n, [c]: i } = t
            ;(u = (t._stacks || (t._stacks = {}))[c] = ci(o, h, n)),
              (u[s] = i),
              (u._top = hi(u, a, !0)),
              (u._bottom = hi(u, a, !1))
          }
        }
        function ui(t, e) {
          const n = t.scales
          return Object.keys(n)
            .filter((t) => n[t].axis === e)
            .shift()
        }
        function fi(t, e) {
          const n = t.controller.index,
            i = t.vScale && t.vScale.axis
          if (i) {
            e = e || t._parsed
            for (const t of e) {
              const e = t._stacks
              if (!e || void 0 === e[i] || void 0 === e[i][n]) return
              delete e[i][n]
            }
          }
        }
        const pi = (t) => 'reset' === t || 'none' === t,
          gi = (t, e) => (e ? t : Object.assign({}, t))
        class mi {
          constructor(t, e) {
            ;(this.chart = t),
              (this._ctx = t.ctx),
              (this.index = e),
              (this._cachedDataOpts = {}),
              (this._cachedMeta = this.getMeta()),
              (this._type = this._cachedMeta.type),
              (this.options = void 0),
              (this._parsing = !1),
              (this._data = void 0),
              (this._objectData = void 0),
              (this._sharedOptions = void 0),
              (this._drawStart = void 0),
              (this._drawCount = void 0),
              (this.enableOptionSharing = !1),
              (this.$context = void 0),
              (this._syncList = []),
              this.initialize()
          }
          initialize() {
            const t = this,
              e = t._cachedMeta
            t.configure(), t.linkScales(), (e._stacked = li(e.vScale, e)), t.addElements()
          }
          updateIndex(t) {
            this.index !== t && fi(this._cachedMeta), (this.index = t)
          }
          linkScales() {
            const t = this,
              e = t.chart,
              n = t._cachedMeta,
              i = t.getDataset(),
              o = (t, e, n, i) => ('x' === t ? e : 'r' === t ? i : n),
              r = (n.xAxisID = Q(i.xAxisID, ui(e, 'x'))),
              a = (n.yAxisID = Q(i.yAxisID, ui(e, 'y'))),
              s = (n.rAxisID = Q(i.rAxisID, ui(e, 'r'))),
              l = n.indexAxis,
              c = (n.iAxisID = o(l, r, a, s)),
              h = (n.vAxisID = o(l, a, r, s))
            ;(n.xScale = t.getScaleForId(r)),
              (n.yScale = t.getScaleForId(a)),
              (n.rScale = t.getScaleForId(s)),
              (n.iScale = t.getScaleForId(c)),
              (n.vScale = t.getScaleForId(h))
          }
          getDataset() {
            return this.chart.data.datasets[this.index]
          }
          getMeta() {
            return this.chart.getDatasetMeta(this.index)
          }
          getScaleForId(t) {
            return this.chart.scales[t]
          }
          _getOtherScale(t) {
            const e = this._cachedMeta
            return t === e.iScale ? e.vScale : e.iScale
          }
          reset() {
            this._update('reset')
          }
          _destroy() {
            const t = this._cachedMeta
            this._data && en(this._data, this), t._stacked && fi(t)
          }
          _dataCheck() {
            const t = this,
              e = t.getDataset(),
              n = e.data || (e.data = []),
              i = t._data
            if (G(n))
              t._data = (function (t) {
                const e = Object.keys(t),
                  n = new Array(e.length)
                let i, o, r
                for (i = 0, o = e.length; i < o; ++i) (r = e[i]), (n[i] = { x: r, y: t[r] })
                return n
              })(n)
            else if (i !== n) {
              if (i) {
                en(i, t)
                const e = t._cachedMeta
                fi(e), (e._parsed = [])
              }
              n &&
                Object.isExtensible(n) &&
                ((r = t),
                (o = n)._chartjs
                  ? o._chartjs.listeners.push(r)
                  : (Object.defineProperty(o, '_chartjs', {
                      configurable: !0,
                      enumerable: !1,
                      value: { listeners: [r] },
                    }),
                    tn.forEach((t) => {
                      const e = '_onData' + ut(t),
                        n = o[t]
                      Object.defineProperty(o, t, {
                        configurable: !0,
                        enumerable: !1,
                        value() {
                          for (var t = arguments.length, i = new Array(t), r = 0; r < t; r++)
                            i[r] = arguments[r]
                          const a = n.apply(this, i)
                          return (
                            o._chartjs.listeners.forEach((t) => {
                              'function' === typeof t[e] && t[e](...i)
                            }),
                            a
                          )
                        },
                      })
                    }))),
                (t._syncList = []),
                (t._data = n)
            }
            var o, r
          }
          addElements() {
            const t = this,
              e = t._cachedMeta
            t._dataCheck(), t.datasetElementType && (e.dataset = new t.datasetElementType())
          }
          buildOrUpdateElements(t) {
            const e = this,
              n = e._cachedMeta,
              i = e.getDataset()
            let o = !1
            e._dataCheck()
            const r = n._stacked
            ;(n._stacked = li(n.vScale, n)),
              n.stack !== i.stack && ((o = !0), fi(n), (n.stack = i.stack)),
              e._resyncElements(t),
              (o || r !== n._stacked) && di(e, n._parsed)
          }
          configure() {
            const t = this,
              e = t.chart.config,
              n = e.datasetScopeKeys(t._type),
              i = e.getOptionScopes(t.getDataset(), n, !0)
            ;(t.options = e.createResolver(i, t.getContext())), (t._parsing = t.options.parsing)
          }
          parse(t, e) {
            const n = this,
              { _cachedMeta: i, _data: o } = n,
              { iScale: r, _stacked: a } = i,
              s = r.axis
            let l,
              c,
              h,
              d = (0 === t && e === o.length) || i._sorted,
              u = t > 0 && i._parsed[t - 1]
            if (!1 === n._parsing) (i._parsed = o), (i._sorted = !0), (h = o)
            else {
              h = K(o[t])
                ? n.parseArrayData(i, o, t, e)
                : G(o[t])
                ? n.parseObjectData(i, o, t, e)
                : n.parsePrimitiveData(i, o, t, e)
              const r = () => null === c[s] || (u && c[s] < u[s])
              for (l = 0; l < e; ++l) (i._parsed[l + t] = c = h[l]), d && (r() && (d = !1), (u = c))
              i._sorted = d
            }
            a && di(n, h)
          }
          parsePrimitiveData(t, e, n, i) {
            const { iScale: o, vScale: r } = t,
              a = o.axis,
              s = r.axis,
              l = o.getLabels(),
              c = o === r,
              h = new Array(i)
            let d, u, f
            for (d = 0, u = i; d < u; ++d)
              (f = d + n), (h[d] = { [a]: c || o.parse(l[f], f), [s]: r.parse(e[f], f) })
            return h
          }
          parseArrayData(t, e, n, i) {
            const { xScale: o, yScale: r } = t,
              a = new Array(i)
            let s, l, c, h
            for (s = 0, l = i; s < l; ++s)
              (c = s + n), (h = e[c]), (a[s] = { x: o.parse(h[0], c), y: r.parse(h[1], c) })
            return a
          }
          parseObjectData(t, e, n, i) {
            const { xScale: o, yScale: r } = t,
              { xAxisKey: a = 'x', yAxisKey: s = 'y' } = this._parsing,
              l = new Array(i)
            let c, h, d, u
            for (c = 0, h = i; c < h; ++c)
              (d = c + n), (u = e[d]), (l[c] = { x: o.parse(dt(u, a), d), y: r.parse(dt(u, s), d) })
            return l
          }
          getParsed(t) {
            return this._cachedMeta._parsed[t]
          }
          getDataElement(t) {
            return this._cachedMeta.data[t]
          }
          applyStack(t, e, n) {
            const i = this.chart,
              o = this._cachedMeta,
              r = e[t.axis]
            return si({ keys: ai(i, !0), values: e._stacks[t.axis] }, r, o.index, { mode: n })
          }
          updateRangeFromParsed(t, e, n, i) {
            const o = n[e.axis]
            let r = null === o ? NaN : o
            const a = i && n._stacks[e.axis]
            i &&
              a &&
              ((i.values = a),
              (t.min = Math.min(t.min, r)),
              (t.max = Math.max(t.max, r)),
              (r = si(i, o, this._cachedMeta.index, { all: !0 }))),
              (t.min = Math.min(t.min, r)),
              (t.max = Math.max(t.max, r))
          }
          getMinMax(t, e) {
            const n = this,
              i = n._cachedMeta,
              o = i._parsed,
              r = i._sorted && t === i.iScale,
              a = o.length,
              s = n._getOtherScale(t),
              l = e && i._stacked && { keys: ai(n.chart, !0), values: null },
              c = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY },
              { min: h, max: d } = (function (t) {
                const { min: e, max: n, minDefined: i, maxDefined: o } = t.getUserBounds()
                return {
                  min: i ? e : Number.NEGATIVE_INFINITY,
                  max: o ? n : Number.POSITIVE_INFINITY,
                }
              })(s)
            let u, f, p, g
            function m() {
              return (p = o[u]), (f = p[t.axis]), (g = p[s.axis]), !Z(f) || h > g || d < g
            }
            for (u = 0; u < a && (m() || (n.updateRangeFromParsed(c, t, p, l), !r)); ++u);
            if (r)
              for (u = a - 1; u >= 0; --u)
                if (!m()) {
                  n.updateRangeFromParsed(c, t, p, l)
                  break
                }
            return c
          }
          getAllParsedValues(t) {
            const e = this._cachedMeta._parsed,
              n = []
            let i, o, r
            for (i = 0, o = e.length; i < o; ++i) (r = e[i][t.axis]), Z(r) && n.push(r)
            return n
          }
          getMaxOverflow() {
            return !1
          }
          getLabelAndValue(t) {
            const e = this._cachedMeta,
              n = e.iScale,
              i = e.vScale,
              o = this.getParsed(t)
            return {
              label: n ? '' + n.getLabelForValue(o[n.axis]) : '',
              value: i ? '' + i.getLabelForValue(o[i.axis]) : '',
            }
          }
          _update(t) {
            const e = this,
              n = e._cachedMeta
            e.configure(),
              (e._cachedDataOpts = {}),
              e.update(t || 'default'),
              (n._clip = (function (t) {
                let e, n, i, o
                return (
                  G(t)
                    ? ((e = t.top), (n = t.right), (i = t.bottom), (o = t.left))
                    : (e = n = i = o = t),
                  { top: e, right: n, bottom: i, left: o, disabled: !1 === t }
                )
              })(
                Q(
                  e.options.clip,
                  (function (t, e, n) {
                    if (!1 === n) return !1
                    const i = ri(t, n),
                      o = ri(e, n)
                    return { top: o.end, right: i.end, bottom: o.start, left: i.start }
                  })(n.xScale, n.yScale, e.getMaxOverflow()),
                ),
              ))
          }
          update(t) {}
          draw() {
            const t = this,
              e = t._ctx,
              n = t.chart,
              i = t._cachedMeta,
              o = i.data || [],
              r = n.chartArea,
              a = [],
              s = t._drawStart || 0,
              l = t._drawCount || o.length - s
            let c
            for (i.dataset && i.dataset.draw(e, r, s, l), c = s; c < s + l; ++c) {
              const t = o[c]
              t.hidden || (t.active ? a.push(t) : t.draw(e, r))
            }
            for (c = 0; c < a.length; ++c) a[c].draw(e, r)
          }
          getStyle(t, e) {
            const n = e ? 'active' : 'default'
            return void 0 === t && this._cachedMeta.dataset
              ? this.resolveDatasetElementOptions(n)
              : this.resolveDataElementOptions(t || 0, n)
          }
          getContext(t, e, n) {
            const i = this,
              o = i.getDataset()
            let r
            if (t >= 0 && t < i._cachedMeta.data.length) {
              const e = i._cachedMeta.data[t]
              ;(r =
                e.$context ||
                (e.$context = (function (t, e, n) {
                  return Object.assign(Object.create(t), {
                    active: !1,
                    dataIndex: e,
                    parsed: void 0,
                    raw: void 0,
                    element: n,
                    index: e,
                    mode: 'default',
                    type: 'data',
                  })
                })(i.getContext(), t, e))),
                (r.parsed = i.getParsed(t)),
                (r.raw = o.data[t]),
                (r.index = r.dataIndex = t)
            } else
              (r =
                i.$context ||
                (i.$context = (function (t, e) {
                  return Object.assign(Object.create(t), {
                    active: !1,
                    dataset: void 0,
                    datasetIndex: e,
                    index: e,
                    mode: 'default',
                    type: 'dataset',
                  })
                })(i.chart.getContext(), i.index))),
                (r.dataset = o),
                (r.index = r.datasetIndex = i.index)
            return (r.active = !!e), (r.mode = n), r
          }
          resolveDatasetElementOptions(t) {
            return this._resolveElementOptions(this.datasetElementType.id, t)
          }
          resolveDataElementOptions(t, e) {
            return this._resolveElementOptions(this.dataElementType.id, e, t)
          }
          _resolveElementOptions(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'default',
              n = arguments.length > 2 ? arguments[2] : void 0
            const i = this,
              o = 'active' === e,
              r = i._cachedDataOpts,
              a = t + '-' + e,
              s = r[a],
              l = i.enableOptionSharing && ft(n)
            if (s) return gi(s, l)
            const c = i.chart.config,
              h = c.datasetElementScopeKeys(i._type, t),
              d = o ? [''.concat(t, 'Hover'), 'hover', t, ''] : [t, ''],
              u = c.getOptionScopes(i.getDataset(), h),
              f = Object.keys(Oe.elements[t]),
              p = c.resolveNamedOptions(u, f, () => i.getContext(n, o), d)
            return p.$shared && ((p.$shared = l), (r[a] = Object.freeze(gi(p, l)))), p
          }
          _resolveAnimations(t, e, n) {
            const i = this,
              o = i.chart,
              r = i._cachedDataOpts,
              a = 'animation-'.concat(e),
              s = r[a]
            if (s) return s
            let l
            if (!1 !== o.options.animation) {
              const o = i.chart.config,
                r = o.datasetAnimationScopeKeys(i._type, e),
                a = o.getOptionScopes(i.getDataset(), r)
              l = o.createResolver(a, i.getContext(t, n, e))
            }
            const c = new oi(o, l && l.animations)
            return l && l._cacheable && (r[a] = Object.freeze(c)), c
          }
          getSharedOptions(t) {
            if (t.$shared)
              return this._sharedOptions || (this._sharedOptions = Object.assign({}, t))
          }
          includeOptions(t, e) {
            return !e || pi(t) || this.chart._animationsDisabled
          }
          updateElement(t, e, n, i) {
            pi(i) ? Object.assign(t, n) : this._resolveAnimations(e, i).update(t, n)
          }
          updateSharedOptions(t, e, n) {
            t && !pi(e) && this._resolveAnimations(void 0, e).update(t, n)
          }
          _setStyle(t, e, n, i) {
            t.active = i
            const o = this.getStyle(e, i)
            this._resolveAnimations(e, n, i).update(t, {
              options: (!i && this.getSharedOptions(o)) || o,
            })
          }
          removeHoverStyle(t, e, n) {
            this._setStyle(t, n, 'active', !1)
          }
          setHoverStyle(t, e, n) {
            this._setStyle(t, n, 'active', !0)
          }
          _removeDatasetHoverStyle() {
            const t = this._cachedMeta.dataset
            t && this._setStyle(t, void 0, 'active', !1)
          }
          _setDatasetHoverStyle() {
            const t = this._cachedMeta.dataset
            t && this._setStyle(t, void 0, 'active', !0)
          }
          _resyncElements(t) {
            const e = this,
              n = e._data,
              i = e._cachedMeta.data
            for (const [s, l, c] of e._syncList) e[s](l, c)
            e._syncList = []
            const o = i.length,
              r = n.length,
              a = Math.min(r, o)
            a && e.parse(0, a),
              r > o ? e._insertElements(o, r - o, t) : r < o && e._removeElements(r, o - r)
          }
          _insertElements(t, e) {
            let n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]
            const i = this,
              o = i._cachedMeta,
              r = o.data,
              a = t + e
            let s
            const l = (t) => {
              for (t.length += e, s = t.length - 1; s >= a; s--) t[s] = t[s - e]
            }
            for (l(r), s = t; s < a; ++s) r[s] = new i.dataElementType()
            i._parsing && l(o._parsed), i.parse(t, e), n && i.updateElements(r, t, e, 'reset')
          }
          updateElements(t, e, n, i) {}
          _removeElements(t, e) {
            const n = this._cachedMeta
            if (this._parsing) {
              const i = n._parsed.splice(t, e)
              n._stacked && fi(n, i)
            }
            n.data.splice(t, e)
          }
          _sync(t) {
            if (this._parsing) this._syncList.push(t)
            else {
              const [e, n, i] = t
              this[e](n, i)
            }
          }
          _onDataPush() {
            const t = arguments.length
            this._sync(['_insertElements', this.getDataset().data.length - t, t])
          }
          _onDataPop() {
            this._sync(['_removeElements', this._cachedMeta.data.length - 1, 1])
          }
          _onDataShift() {
            this._sync(['_removeElements', 0, 1])
          }
          _onDataSplice(t, e) {
            this._sync(['_removeElements', t, e]),
              this._sync(['_insertElements', t, arguments.length - 2])
          }
          _onDataUnshift() {
            this._sync(['_insertElements', 0, arguments.length])
          }
        }
        function bi(t) {
          const e = (function (t) {
            if (!t._cache.$bar) {
              const e = t.getMatchingVisibleMetas('bar')
              let n = []
              for (let i = 0, o = e.length; i < o; i++)
                n = n.concat(e[i].controller.getAllParsedValues(t))
              t._cache.$bar = nn(n.sort((t, e) => t - e))
            }
            return t._cache.$bar
          })(t)
          let n,
            i,
            o,
            r,
            a = t._length
          const s = () => {
            32767 !== o &&
              -32768 !== o &&
              (ft(r) && (a = Math.min(a, Math.abs(o - r) || a)), (r = o))
          }
          for (n = 0, i = e.length; n < i; ++n) (o = t.getPixelForValue(e[n])), s()
          for (r = void 0, n = 0, i = t.ticks.length; n < i; ++n) (o = t.getPixelForTick(n)), s()
          return a
        }
        function xi(t, e, n, i) {
          return (
            K(t)
              ? (function (t, e, n, i) {
                  const o = n.parse(t[0], i),
                    r = n.parse(t[1], i),
                    a = Math.min(o, r),
                    s = Math.max(o, r)
                  let l = a,
                    c = s
                  Math.abs(a) > Math.abs(s) && ((l = s), (c = a)),
                    (e[n.axis] = c),
                    (e._custom = { barStart: l, barEnd: c, start: o, end: r, min: a, max: s })
                })(t, e, n, i)
              : (e[n.axis] = n.parse(t, i)),
            e
          )
        }
        function yi(t, e, n, i) {
          const o = t.iScale,
            r = t.vScale,
            a = o.getLabels(),
            s = o === r,
            l = []
          let c, h, d, u
          for (c = n, h = n + i; c < h; ++c)
            (u = e[c]), (d = {}), (d[o.axis] = s || o.parse(a[c], c)), l.push(xi(u, d, r, c))
          return l
        }
        function vi(t) {
          return t && void 0 !== t.barStart && void 0 !== t.barEnd
        }
        function _i(t, e, n, i) {
          let o = e.borderSkipped
          const r = {}
          if (!o) return void (t.borderSkipped = r)
          const {
            start: a,
            end: s,
            reverse: l,
            top: c,
            bottom: h,
          } = (function (t) {
            let e, n, i, o, r
            return (
              t.horizontal
                ? ((e = t.base > t.x), (n = 'left'), (i = 'right'))
                : ((e = t.base < t.y), (n = 'bottom'), (i = 'top')),
              e ? ((o = 'end'), (r = 'start')) : ((o = 'start'), (r = 'end')),
              { start: n, end: i, reverse: e, top: o, bottom: r }
            )
          })(t)
          'middle' === o &&
            n &&
            ((t.enableBorderRadius = !0),
            (n._top || 0) === i
              ? (o = c)
              : (n._bottom || 0) === i
              ? (o = h)
              : ((r[wi(h, a, s, l)] = !0), (o = c))),
            (r[wi(o, a, s, l)] = !0),
            (t.borderSkipped = r)
        }
        function wi(t, e, n, i) {
          var o, r, a
          return (
            i
              ? ((a = n), (t = Mi((t = (o = t) === (r = e) ? a : o === a ? r : o), n, e)))
              : (t = Mi(t, e, n)),
            t
          )
        }
        function Mi(t, e, n) {
          return 'start' === t ? e : 'end' === t ? n : t
        }
        ;(mi.defaults = {}),
          (mi.prototype.datasetElementType = null),
          (mi.prototype.dataElementType = null)
        class ki extends mi {
          parsePrimitiveData(t, e, n, i) {
            return yi(t, e, n, i)
          }
          parseArrayData(t, e, n, i) {
            return yi(t, e, n, i)
          }
          parseObjectData(t, e, n, i) {
            const { iScale: o, vScale: r } = t,
              { xAxisKey: a = 'x', yAxisKey: s = 'y' } = this._parsing,
              l = 'x' === o.axis ? a : s,
              c = 'x' === r.axis ? a : s,
              h = []
            let d, u, f, p
            for (d = n, u = n + i; d < u; ++d)
              (p = e[d]),
                (f = {}),
                (f[o.axis] = o.parse(dt(p, l), d)),
                h.push(xi(dt(p, c), f, r, d))
            return h
          }
          updateRangeFromParsed(t, e, n, i) {
            super.updateRangeFromParsed(t, e, n, i)
            const o = n._custom
            o &&
              e === this._cachedMeta.vScale &&
              ((t.min = Math.min(t.min, o.min)), (t.max = Math.max(t.max, o.max)))
          }
          getMaxOverflow() {
            return 0
          }
          getLabelAndValue(t) {
            const e = this._cachedMeta,
              { iScale: n, vScale: i } = e,
              o = this.getParsed(t),
              r = o._custom,
              a = vi(r) ? '[' + r.start + ', ' + r.end + ']' : '' + i.getLabelForValue(o[i.axis])
            return { label: '' + n.getLabelForValue(o[n.axis]), value: a }
          }
          initialize() {
            const t = this
            ;(t.enableOptionSharing = !0), super.initialize()
            t._cachedMeta.stack = t.getDataset().stack
          }
          update(t) {
            const e = this._cachedMeta
            this.updateElements(e.data, 0, e.data.length, t)
          }
          updateElements(t, e, n, i) {
            const o = this,
              r = 'reset' === i,
              {
                index: a,
                _cachedMeta: { vScale: s },
              } = o,
              l = s.getBasePixel(),
              c = s.isHorizontal(),
              h = o._getRuler(),
              d = o.resolveDataElementOptions(e, i),
              u = o.getSharedOptions(d),
              f = o.includeOptions(i, u)
            o.updateSharedOptions(u, i, d)
            for (let p = e; p < e + n; p++) {
              const e = o.getParsed(p),
                n = r || q(e[s.axis]) ? { base: l, head: l } : o._calculateBarValuePixels(p),
                d = o._calculateBarIndexPixels(p, h),
                g = (e._stacks || {})[s.axis],
                m = {
                  horizontal: c,
                  base: n.base,
                  enableBorderRadius: !g || vi(e._custom) || a === g._top || a === g._bottom,
                  x: c ? n.head : d.center,
                  y: c ? d.center : n.head,
                  height: c ? d.size : Math.abs(n.size),
                  width: c ? Math.abs(n.size) : d.size,
                }
              f && (m.options = u || o.resolveDataElementOptions(p, t[p].active ? 'active' : i)),
                _i(m, m.options || t[p].options, g, a),
                o.updateElement(t[p], p, m, i)
            }
          }
          _getStacks(t, e) {
            const n = this._cachedMeta.iScale,
              i = n.getMatchingVisibleMetas(this._type),
              o = n.options.stacked,
              r = i.length,
              a = []
            let s, l
            for (s = 0; s < r; ++s)
              if (((l = i[s]), l.controller.options.grouped)) {
                if ('undefined' !== typeof e) {
                  const t = l.controller.getParsed(e)[l.controller._cachedMeta.vScale.axis]
                  if (q(t) || isNaN(t)) continue
                }
                if (
                  ((!1 === o ||
                    -1 === a.indexOf(l.stack) ||
                    (void 0 === o && void 0 === l.stack)) &&
                    a.push(l.stack),
                  l.index === t)
                )
                  break
              }
            return a.length || a.push(void 0), a
          }
          _getStackCount(t) {
            return this._getStacks(void 0, t).length
          }
          _getStackIndex(t, e, n) {
            const i = this._getStacks(t, n),
              o = void 0 !== e ? i.indexOf(e) : -1
            return -1 === o ? i.length - 1 : o
          }
          _getRuler() {
            const t = this,
              e = t.options,
              n = t._cachedMeta,
              i = n.iScale,
              o = []
            let r, a
            for (r = 0, a = n.data.length; r < a; ++r)
              o.push(i.getPixelForValue(t.getParsed(r)[i.axis], r))
            const s = e.barThickness
            return {
              min: s || bi(i),
              pixels: o,
              start: i._startPixel,
              end: i._endPixel,
              stackCount: t._getStackCount(),
              scale: i,
              grouped: e.grouped,
              ratio: s ? 1 : e.categoryPercentage * e.barPercentage,
            }
          }
          _calculateBarValuePixels(t) {
            const e = this,
              {
                _cachedMeta: { vScale: n, _stacked: i },
                options: { base: o, minBarLength: r },
              } = e,
              a = o || 0,
              s = e.getParsed(t),
              l = s._custom,
              c = vi(l)
            let h,
              d,
              u = s[n.axis],
              f = 0,
              p = i ? e.applyStack(n, s, i) : u
            p !== u && ((f = p - u), (p = u)),
              c &&
                ((u = l.barStart),
                (p = l.barEnd - l.barStart),
                0 !== u && kt(u) !== kt(l.barEnd) && (f = 0),
                (f += u))
            const g = q(o) || c ? f : o
            let m = n.getPixelForValue(g)
            if (
              ((h = e.chart.getDataVisibility(t) ? n.getPixelForValue(f + p) : m),
              (d = h - m),
              Math.abs(d) < r &&
                ((d =
                  (function (t, e, n) {
                    return 0 !== t ? kt(t) : (e.isHorizontal() ? 1 : -1) * (e.min >= n ? 1 : -1)
                  })(d, n, a) * r),
                u === a && (m -= d / 2),
                (h = m + d)),
              m === n.getPixelForValue(a))
            ) {
              const t = (kt(d) * n.getLineWidthForValue(a)) / 2
              ;(m += t), (d -= t)
            }
            return { size: d, base: m, head: h, center: h + d / 2 }
          }
          _calculateBarIndexPixels(t, e) {
            const n = this,
              i = e.scale,
              o = n.options,
              r = o.skipNull,
              a = Q(o.maxBarThickness, 1 / 0)
            let s, l
            if (e.grouped) {
              const i = r ? n._getStackCount(t) : e.stackCount,
                c =
                  'flex' === o.barThickness
                    ? (function (t, e, n, i) {
                        const o = e.pixels,
                          r = o[t]
                        let a = t > 0 ? o[t - 1] : null,
                          s = t < o.length - 1 ? o[t + 1] : null
                        const l = n.categoryPercentage
                        null === a && (a = r - (null === s ? e.end - e.start : s - r)),
                          null === s && (s = r + r - a)
                        const c = r - ((r - Math.min(a, s)) / 2) * l
                        return {
                          chunk: ((Math.abs(s - a) / 2) * l) / i,
                          ratio: n.barPercentage,
                          start: c,
                        }
                      })(t, e, o, i)
                    : (function (t, e, n, i) {
                        const o = n.barThickness
                        let r, a
                        return (
                          q(o)
                            ? ((r = e.min * n.categoryPercentage), (a = n.barPercentage))
                            : ((r = o * i), (a = 1)),
                          { chunk: r / i, ratio: a, start: e.pixels[t] - r / 2 }
                        )
                      })(t, e, o, i),
                h = n._getStackIndex(n.index, n._cachedMeta.stack, r ? t : void 0)
              ;(s = c.start + c.chunk * h + c.chunk / 2), (l = Math.min(a, c.chunk * c.ratio))
            } else
              (s = i.getPixelForValue(n.getParsed(t)[i.axis], t)),
                (l = Math.min(a, e.min * e.ratio))
            return { base: s - l / 2, head: s + l / 2, center: s, size: l }
          }
          draw() {
            const t = this,
              e = t._cachedMeta,
              n = e.vScale,
              i = e.data,
              o = i.length
            let r = 0
            for (; r < o; ++r) null !== t.getParsed(r)[n.axis] && i[r].draw(t._ctx)
          }
        }
        ;(ki.id = 'bar'),
          (ki.defaults = {
            datasetElementType: !1,
            dataElementType: 'bar',
            categoryPercentage: 0.8,
            barPercentage: 0.9,
            grouped: !0,
            animations: {
              numbers: { type: 'number', properties: ['x', 'y', 'base', 'width', 'height'] },
            },
          }),
          (ki.overrides = {
            scales: {
              _index_: { type: 'category', offset: !0, grid: { offset: !0 } },
              _value_: { type: 'linear', beginAtZero: !0 },
            },
          })
        class Si extends mi {
          initialize() {
            ;(this.enableOptionSharing = !0), super.initialize()
          }
          parseObjectData(t, e, n, i) {
            const { xScale: o, yScale: r } = t,
              { xAxisKey: a = 'x', yAxisKey: s = 'y' } = this._parsing,
              l = []
            let c, h, d
            for (c = n, h = n + i; c < h; ++c)
              (d = e[c]),
                l.push({
                  x: o.parse(dt(d, a), c),
                  y: r.parse(dt(d, s), c),
                  _custom: d && d.r && +d.r,
                })
            return l
          }
          getMaxOverflow() {
            const { data: t, _parsed: e } = this._cachedMeta
            let n = 0
            for (let i = t.length - 1; i >= 0; --i) n = Math.max(n, t[i].size() / 2, e[i]._custom)
            return n > 0 && n
          }
          getLabelAndValue(t) {
            const e = this._cachedMeta,
              { xScale: n, yScale: i } = e,
              o = this.getParsed(t),
              r = n.getLabelForValue(o.x),
              a = i.getLabelForValue(o.y),
              s = o._custom
            return { label: e.label, value: '(' + r + ', ' + a + (s ? ', ' + s : '') + ')' }
          }
          update(t) {
            const e = this._cachedMeta.data
            this.updateElements(e, 0, e.length, t)
          }
          updateElements(t, e, n, i) {
            const o = this,
              r = 'reset' === i,
              { iScale: a, vScale: s } = o._cachedMeta,
              l = o.resolveDataElementOptions(e, i),
              c = o.getSharedOptions(l),
              h = o.includeOptions(i, c),
              d = a.axis,
              u = s.axis
            for (let f = e; f < e + n; f++) {
              const e = t[f],
                n = !r && o.getParsed(f),
                l = {},
                c = (l[d] = r ? a.getPixelForDecimal(0.5) : a.getPixelForValue(n[d])),
                p = (l[u] = r ? s.getBasePixel() : s.getPixelForValue(n[u]))
              ;(l.skip = isNaN(c) || isNaN(p)),
                h &&
                  ((l.options = o.resolveDataElementOptions(f, e.active ? 'active' : i)),
                  r && (l.options.radius = 0)),
                o.updateElement(e, f, l, i)
            }
            o.updateSharedOptions(c, i, l)
          }
          resolveDataElementOptions(t, e) {
            const n = this.getParsed(t)
            let i = super.resolveDataElementOptions(t, e)
            i.$shared && (i = Object.assign({}, i, { $shared: !1 }))
            const o = i.radius
            return 'active' !== e && (i.radius = 0), (i.radius += Q(n && n._custom, o)), i
          }
        }
        ;(Si.id = 'bubble'),
          (Si.defaults = {
            datasetElementType: !1,
            dataElementType: 'point',
            animations: {
              numbers: { type: 'number', properties: ['x', 'y', 'borderWidth', 'radius'] },
            },
          }),
          (Si.overrides = {
            scales: { x: { type: 'linear' }, y: { type: 'linear' } },
            plugins: { tooltip: { callbacks: { title: () => '' } } },
          })
        class Oi extends mi {
          constructor(t, e) {
            super(t, e),
              (this.enableOptionSharing = !0),
              (this.innerRadius = void 0),
              (this.outerRadius = void 0),
              (this.offsetX = void 0),
              (this.offsetY = void 0)
          }
          linkScales() {}
          parse(t, e) {
            const n = this.getDataset().data,
              i = this._cachedMeta
            let o, r
            for (o = t, r = t + e; o < r; ++o) i._parsed[o] = +n[o]
          }
          _getRotation() {
            return Dt(this.options.rotation - 90)
          }
          _getCircumference() {
            return Dt(this.options.circumference)
          }
          _getRotationExtents() {
            let t = mt,
              e = -mt
            const n = this
            for (let i = 0; i < n.chart.data.datasets.length; ++i)
              if (n.chart.isDatasetVisible(i)) {
                const o = n.chart.getDatasetMeta(i).controller,
                  r = o._getRotation(),
                  a = o._getCircumference()
                ;(t = Math.min(t, r)), (e = Math.max(e, r + a))
              }
            return { rotation: t, circumference: e - t }
          }
          update(t) {
            const e = this,
              n = e.chart,
              { chartArea: i } = n,
              o = e._cachedMeta,
              r = o.data,
              a = e.getMaxBorderWidth() + e.getMaxOffset(r) + e.options.spacing,
              s = Math.max((Math.min(i.width, i.height) - a) / 2, 0),
              l = Math.min(
                ((c = e.options.cutout),
                (h = s),
                'string' === typeof c && c.endsWith('%') ? parseFloat(c) / 100 : c / h),
                1,
              )
            var c, h
            const d = e._getRingWeight(e.index),
              { circumference: u, rotation: f } = e._getRotationExtents(),
              {
                ratioX: p,
                ratioY: g,
                offsetX: m,
                offsetY: b,
              } = (function (t, e, n) {
                let i = 1,
                  o = 1,
                  r = 0,
                  a = 0
                if (e < mt) {
                  const s = t,
                    l = s + e,
                    c = Math.cos(s),
                    h = Math.sin(s),
                    d = Math.cos(l),
                    u = Math.sin(l),
                    f = (t, e, i) => (jt(t, s, l, !0) ? 1 : Math.max(e, e * n, i, i * n)),
                    p = (t, e, i) => (jt(t, s, l, !0) ? -1 : Math.min(e, e * n, i, i * n)),
                    g = f(0, c, d),
                    m = f(vt, h, u),
                    b = p(gt, c, d),
                    x = p(gt + vt, h, u)
                  ;(i = (g - b) / 2), (o = (m - x) / 2), (r = -(g + b) / 2), (a = -(m + x) / 2)
                }
                return { ratioX: i, ratioY: o, offsetX: r, offsetY: a }
              })(f, u, l),
              x = (i.width - a) / p,
              y = (i.height - a) / g,
              v = Math.max(Math.min(x, y) / 2, 0),
              _ = tt(e.options.radius, v),
              w = (_ - Math.max(_ * l, 0)) / e._getVisibleDatasetWeightTotal()
            ;(e.offsetX = m * _),
              (e.offsetY = b * _),
              (o.total = e.calculateTotal()),
              (e.outerRadius = _ - w * e._getRingWeightOffset(e.index)),
              (e.innerRadius = Math.max(e.outerRadius - w * d, 0)),
              e.updateElements(r, 0, r.length, t)
          }
          _circumference(t, e) {
            const n = this,
              i = n.options,
              o = n._cachedMeta,
              r = n._getCircumference()
            return (e && i.animation.animateRotate) ||
              !this.chart.getDataVisibility(t) ||
              null === o._parsed[t] ||
              o.data[t].hidden
              ? 0
              : n.calculateCircumference((o._parsed[t] * r) / mt)
          }
          updateElements(t, e, n, i) {
            const o = this,
              r = 'reset' === i,
              a = o.chart,
              s = a.chartArea,
              l = a.options.animation,
              c = (s.left + s.right) / 2,
              h = (s.top + s.bottom) / 2,
              d = r && l.animateScale,
              u = d ? 0 : o.innerRadius,
              f = d ? 0 : o.outerRadius,
              p = o.resolveDataElementOptions(e, i),
              g = o.getSharedOptions(p),
              m = o.includeOptions(i, g)
            let b,
              x = o._getRotation()
            for (b = 0; b < e; ++b) x += o._circumference(b, r)
            for (b = e; b < e + n; ++b) {
              const e = o._circumference(b, r),
                n = t[b],
                a = {
                  x: c + o.offsetX,
                  y: h + o.offsetY,
                  startAngle: x,
                  endAngle: x + e,
                  circumference: e,
                  outerRadius: f,
                  innerRadius: u,
                }
              m && (a.options = g || o.resolveDataElementOptions(b, n.active ? 'active' : i)),
                (x += e),
                o.updateElement(n, b, a, i)
            }
            o.updateSharedOptions(g, i, p)
          }
          calculateTotal() {
            const t = this._cachedMeta,
              e = t.data
            let n,
              i = 0
            for (n = 0; n < e.length; n++) {
              const o = t._parsed[n]
              null === o ||
                isNaN(o) ||
                !this.chart.getDataVisibility(n) ||
                e[n].hidden ||
                (i += Math.abs(o))
            }
            return i
          }
          calculateCircumference(t) {
            const e = this._cachedMeta.total
            return e > 0 && !isNaN(t) ? mt * (Math.abs(t) / e) : 0
          }
          getLabelAndValue(t) {
            const e = this._cachedMeta,
              n = this.chart,
              i = n.data.labels || [],
              o = Wn(e._parsed[t], n.options.locale)
            return { label: i[t] || '', value: o }
          }
          getMaxBorderWidth(t) {
            const e = this
            let n = 0
            const i = e.chart
            let o, r, a, s, l
            if (!t)
              for (o = 0, r = i.data.datasets.length; o < r; ++o)
                if (i.isDatasetVisible(o)) {
                  ;(a = i.getDatasetMeta(o)),
                    (t = a.data),
                    (s = a.controller),
                    s !== e && s.configure()
                  break
                }
            if (!t) return 0
            for (o = 0, r = t.length; o < r; ++o)
              (l = s.resolveDataElementOptions(o)),
                'inner' !== l.borderAlign &&
                  (n = Math.max(n, l.borderWidth || 0, l.hoverBorderWidth || 0))
            return n
          }
          getMaxOffset(t) {
            let e = 0
            for (let n = 0, i = t.length; n < i; ++n) {
              const t = this.resolveDataElementOptions(n)
              e = Math.max(e, t.offset || 0, t.hoverOffset || 0)
            }
            return e
          }
          _getRingWeightOffset(t) {
            let e = 0
            for (let n = 0; n < t; ++n)
              this.chart.isDatasetVisible(n) && (e += this._getRingWeight(n))
            return e
          }
          _getRingWeight(t) {
            return Math.max(Q(this.chart.data.datasets[t].weight, 1), 0)
          }
          _getVisibleDatasetWeightTotal() {
            return this._getRingWeightOffset(this.chart.data.datasets.length) || 1
          }
        }
        ;(Oi.id = 'doughnut'),
          (Oi.defaults = {
            datasetElementType: !1,
            dataElementType: 'arc',
            animation: { animateRotate: !0, animateScale: !1 },
            animations: {
              numbers: {
                type: 'number',
                properties: [
                  'circumference',
                  'endAngle',
                  'innerRadius',
                  'outerRadius',
                  'startAngle',
                  'x',
                  'y',
                  'offset',
                  'borderWidth',
                  'spacing',
                ],
              },
            },
            cutout: '50%',
            rotation: 0,
            circumference: 360,
            radius: '100%',
            spacing: 0,
            indexAxis: 'r',
          }),
          (Oi.descriptors = {
            _scriptable: (t) => 'spacing' !== t,
            _indexable: (t) => 'spacing' !== t,
          }),
          (Oi.overrides = {
            aspectRatio: 1,
            plugins: {
              legend: {
                labels: {
                  generateLabels(t) {
                    const e = t.data
                    if (e.labels.length && e.datasets.length) {
                      const {
                        labels: { pointStyle: n },
                      } = t.legend.options
                      return e.labels.map((e, i) => {
                        const o = t.getDatasetMeta(0).controller.getStyle(i)
                        return {
                          text: e,
                          fillStyle: o.backgroundColor,
                          strokeStyle: o.borderColor,
                          lineWidth: o.borderWidth,
                          pointStyle: n,
                          hidden: !t.getDataVisibility(i),
                          index: i,
                        }
                      })
                    }
                    return []
                  },
                },
                onClick(t, e, n) {
                  n.chart.toggleDataVisibility(e.index), n.chart.update()
                },
              },
              tooltip: {
                callbacks: {
                  title: () => '',
                  label(t) {
                    let e = t.label
                    const n = ': ' + t.formattedValue
                    return K(e) ? ((e = e.slice()), (e[0] += n)) : (e += n), e
                  },
                },
              },
            },
          })
        class Pi extends mi {
          initialize() {
            ;(this.enableOptionSharing = !0), super.initialize()
          }
          update(t) {
            const e = this,
              n = e._cachedMeta,
              { dataset: i, data: o = [], _dataset: r } = n,
              a = e.chart._animationsDisabled
            let { start: s, count: l } = (function (t, e, n) {
              const i = e.length
              let o = 0,
                r = i
              if (t._sorted) {
                const { iScale: a, _parsed: s } = t,
                  l = a.axis,
                  { min: c, max: h, minDefined: d, maxDefined: u } = a.getUserBounds()
                d &&
                  (o = zt(
                    Math.min(Je(s, a.axis, c).lo, n ? i : Je(e, l, a.getPixelForValue(c)).lo),
                    0,
                    i - 1,
                  )),
                  (r = u
                    ? zt(
                        Math.max(
                          Je(s, a.axis, h).hi + 1,
                          n ? 0 : Je(e, l, a.getPixelForValue(h)).hi + 1,
                        ),
                        o,
                        i,
                      ) - o
                    : i - o)
              }
              return { start: o, count: r }
            })(n, o, a)
            ;(e._drawStart = s),
              (e._drawCount = l),
              (function (t) {
                const { xScale: e, yScale: n, _scaleRanges: i } = t,
                  o = { xmin: e.min, xmax: e.max, ymin: n.min, ymax: n.max }
                if (!i) return (t._scaleRanges = o), !0
                const r =
                  i.xmin !== e.min || i.xmax !== e.max || i.ymin !== n.min || i.ymax !== n.max
                return Object.assign(i, o), r
              })(n) && ((s = 0), (l = o.length)),
              (i._datasetIndex = e.index),
              (i._decimated = !!r._decimated),
              (i.points = o)
            const c = e.resolveDatasetElementOptions(t)
            e.options.showLine || (c.borderWidth = 0),
              (c.segment = e.options.segment),
              e.updateElement(i, void 0, { animated: !a, options: c }, t),
              e.updateElements(o, s, l, t)
          }
          updateElements(t, e, n, i) {
            const o = this,
              r = 'reset' === i,
              { iScale: a, vScale: s, _stacked: l } = o._cachedMeta,
              c = o.resolveDataElementOptions(e, i),
              h = o.getSharedOptions(c),
              d = o.includeOptions(i, h),
              u = a.axis,
              f = s.axis,
              p = o.options.spanGaps,
              g = Ot(p) ? p : Number.POSITIVE_INFINITY,
              m = o.chart._animationsDisabled || r || 'none' === i
            let b = e > 0 && o.getParsed(e - 1)
            for (let x = e; x < e + n; ++x) {
              const e = t[x],
                n = o.getParsed(x),
                c = m ? e : {},
                p = q(n[f]),
                y = (c[u] = a.getPixelForValue(n[u], x)),
                v = (c[f] =
                  r || p
                    ? s.getBasePixel()
                    : s.getPixelForValue(l ? o.applyStack(s, n, l) : n[f], x))
              ;(c.skip = isNaN(y) || isNaN(v) || p),
                (c.stop = x > 0 && n[u] - b[u] > g),
                (c.parsed = n),
                d && (c.options = h || o.resolveDataElementOptions(x, e.active ? 'active' : i)),
                m || o.updateElement(e, x, c, i),
                (b = n)
            }
            o.updateSharedOptions(h, i, c)
          }
          getMaxOverflow() {
            const t = this,
              e = t._cachedMeta,
              n = e.dataset,
              i = (n.options && n.options.borderWidth) || 0,
              o = e.data || []
            if (!o.length) return i
            const r = o[0].size(t.resolveDataElementOptions(0)),
              a = o[o.length - 1].size(t.resolveDataElementOptions(o.length - 1))
            return Math.max(i, r, a) / 2
          }
          draw() {
            const t = this._cachedMeta
            t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis), super.draw()
          }
        }
        ;(Pi.id = 'line'),
          (Pi.defaults = {
            datasetElementType: 'line',
            dataElementType: 'point',
            showLine: !0,
            spanGaps: !1,
          }),
          (Pi.overrides = {
            scales: { _index_: { type: 'category' }, _value_: { type: 'linear' } },
          })
        class Ci extends mi {
          constructor(t, e) {
            super(t, e), (this.innerRadius = void 0), (this.outerRadius = void 0)
          }
          getLabelAndValue(t) {
            const e = this._cachedMeta,
              n = this.chart,
              i = n.data.labels || [],
              o = Wn(e._parsed[t].r, n.options.locale)
            return { label: i[t] || '', value: o }
          }
          update(t) {
            const e = this._cachedMeta.data
            this._updateRadius(), this.updateElements(e, 0, e.length, t)
          }
          _updateRadius() {
            const t = this,
              e = t.chart,
              n = e.chartArea,
              i = e.options,
              o = Math.min(n.right - n.left, n.bottom - n.top),
              r = Math.max(o / 2, 0),
              a =
                (r - Math.max(i.cutoutPercentage ? (r / 100) * i.cutoutPercentage : 1, 0)) /
                e.getVisibleDatasetCount()
            ;(t.outerRadius = r - a * t.index), (t.innerRadius = t.outerRadius - a)
          }
          updateElements(t, e, n, i) {
            const o = this,
              r = 'reset' === i,
              a = o.chart,
              s = o.getDataset(),
              l = a.options.animation,
              c = o._cachedMeta.rScale,
              h = c.xCenter,
              d = c.yCenter,
              u = c.getIndexAngle(0) - 0.5 * gt
            let f,
              p = u
            const g = 360 / o.countVisibleElements()
            for (f = 0; f < e; ++f) p += o._computeAngle(f, i, g)
            for (f = e; f < e + n; f++) {
              const e = t[f]
              let n = p,
                m = p + o._computeAngle(f, i, g),
                b = a.getDataVisibility(f) ? c.getDistanceFromCenterForValue(s.data[f]) : 0
              ;(p = m), r && (l.animateScale && (b = 0), l.animateRotate && (n = m = u))
              const x = {
                x: h,
                y: d,
                innerRadius: 0,
                outerRadius: b,
                startAngle: n,
                endAngle: m,
                options: o.resolveDataElementOptions(f, e.active ? 'active' : i),
              }
              o.updateElement(e, f, x, i)
            }
          }
          countVisibleElements() {
            const t = this.getDataset(),
              e = this._cachedMeta
            let n = 0
            return (
              e.data.forEach((e, i) => {
                !isNaN(t.data[i]) && this.chart.getDataVisibility(i) && n++
              }),
              n
            )
          }
          _computeAngle(t, e, n) {
            return this.chart.getDataVisibility(t)
              ? Dt(this.resolveDataElementOptions(t, e).angle || n)
              : 0
          }
        }
        ;(Ci.id = 'polarArea'),
          (Ci.defaults = {
            dataElementType: 'arc',
            animation: { animateRotate: !0, animateScale: !0 },
            animations: {
              numbers: {
                type: 'number',
                properties: ['x', 'y', 'startAngle', 'endAngle', 'innerRadius', 'outerRadius'],
              },
            },
            indexAxis: 'r',
            startAngle: 0,
          }),
          (Ci.overrides = {
            aspectRatio: 1,
            plugins: {
              legend: {
                labels: {
                  generateLabels(t) {
                    const e = t.data
                    if (e.labels.length && e.datasets.length) {
                      const {
                        labels: { pointStyle: n },
                      } = t.legend.options
                      return e.labels.map((e, i) => {
                        const o = t.getDatasetMeta(0).controller.getStyle(i)
                        return {
                          text: e,
                          fillStyle: o.backgroundColor,
                          strokeStyle: o.borderColor,
                          lineWidth: o.borderWidth,
                          pointStyle: n,
                          hidden: !t.getDataVisibility(i),
                          index: i,
                        }
                      })
                    }
                    return []
                  },
                },
                onClick(t, e, n) {
                  n.chart.toggleDataVisibility(e.index), n.chart.update()
                },
              },
              tooltip: {
                callbacks: {
                  title: () => '',
                  label: (t) => t.chart.data.labels[t.dataIndex] + ': ' + t.formattedValue,
                },
              },
            },
            scales: {
              r: {
                type: 'radialLinear',
                angleLines: { display: !1 },
                beginAtZero: !0,
                grid: { circular: !0 },
                pointLabels: { display: !1 },
                startAngle: 0,
              },
            },
          })
        class Di extends Oi {}
        ;(Di.id = 'pie'),
          (Di.defaults = { cutout: 0, rotation: 0, circumference: 360, radius: '100%' })
        class Ai extends mi {
          getLabelAndValue(t) {
            const e = this._cachedMeta.vScale,
              n = this.getParsed(t)
            return { label: e.getLabels()[t], value: '' + e.getLabelForValue(n[e.axis]) }
          }
          update(t) {
            const e = this,
              n = e._cachedMeta,
              i = n.dataset,
              o = n.data || [],
              r = n.iScale.getLabels()
            if (((i.points = o), 'resize' !== t)) {
              const n = e.resolveDatasetElementOptions(t)
              e.options.showLine || (n.borderWidth = 0)
              const a = { _loop: !0, _fullLoop: r.length === o.length, options: n }
              e.updateElement(i, void 0, a, t)
            }
            e.updateElements(o, 0, o.length, t)
          }
          updateElements(t, e, n, i) {
            const o = this,
              r = o.getDataset(),
              a = o._cachedMeta.rScale,
              s = 'reset' === i
            for (let l = e; l < e + n; l++) {
              const e = t[l],
                n = o.resolveDataElementOptions(l, e.active ? 'active' : i),
                c = a.getPointPositionForValue(l, r.data[l]),
                h = s ? a.xCenter : c.x,
                d = s ? a.yCenter : c.y,
                u = { x: h, y: d, angle: c.angle, skip: isNaN(h) || isNaN(d), options: n }
              o.updateElement(e, l, u, i)
            }
          }
        }
        ;(Ai.id = 'radar'),
          (Ai.defaults = {
            datasetElementType: 'line',
            dataElementType: 'point',
            indexAxis: 'r',
            showLine: !0,
            elements: { line: { fill: 'start' } },
          }),
          (Ai.overrides = { aspectRatio: 1, scales: { r: { type: 'radialLinear' } } })
        class Ti extends Pi {}
        ;(Ti.id = 'scatter'),
          (Ti.defaults = { showLine: !1, fill: !1 }),
          (Ti.overrides = {
            interaction: { mode: 'point' },
            plugins: {
              tooltip: {
                callbacks: {
                  title: () => '',
                  label: (t) => '(' + t.label + ', ' + t.formattedValue + ')',
                },
              },
            },
            scales: { x: { type: 'linear' }, y: { type: 'linear' } },
          })
        var Ei = Object.freeze({
          __proto__: null,
          BarController: ki,
          BubbleController: Si,
          DoughnutController: Oi,
          LineController: Pi,
          PolarAreaController: Ci,
          PieController: Di,
          RadarController: Ai,
          ScatterController: Ti,
        })
        function Li() {
          throw new Error(
            'This method is not implemented: Check that a complete date adapter is provided.',
          )
        }
        class Ri {
          constructor(t) {
            this.options = t || {}
          }
          formats() {
            return Li()
          }
          parse(t, e) {
            return Li()
          }
          format(t, e) {
            return Li()
          }
          add(t, e, n) {
            return Li()
          }
          diff(t, e, n) {
            return Li()
          }
          startOf(t, e, n) {
            return Li()
          }
          endOf(t, e) {
            return Li()
          }
        }
        Ri.override = function (t) {
          Object.assign(Ri.prototype, t)
        }
        var ji = { _date: Ri }
        function zi(t, e) {
          return 'native' in t ? { x: t.x, y: t.y } : En(t, e)
        }
        function Fi(t, e, n, i) {
          const { controller: o, data: r, _sorted: a } = t,
            s = o._cachedMeta.iScale
          if (s && e === s.axis && a && r.length) {
            const t = s._reversePixels ? Qe : Je
            if (!i) return t(r, e, n)
            if (o._sharedOptions) {
              const i = r[0],
                o = 'function' === typeof i.getRange && i.getRange(e)
              if (o) {
                const i = t(r, e, n - o),
                  a = t(r, e, n + o)
                return { lo: i.lo, hi: a.hi }
              }
            }
          }
          return { lo: 0, hi: r.length - 1 }
        }
        function Ii(t, e, n, i, o) {
          const r = t.getSortedVisibleDatasetMetas(),
            a = n[e]
          for (let s = 0, l = r.length; s < l; ++s) {
            const { index: t, data: n } = r[s],
              { lo: l, hi: c } = Fi(r[s], e, a, o)
            for (let e = l; e <= c; ++e) {
              const o = n[e]
              o.skip || i(o, t, e)
            }
          }
        }
        function Vi(t, e, n, i) {
          const o = []
          if (!Ee(e, t.chartArea, t._minPadding)) return o
          return (
            Ii(
              t,
              n,
              e,
              function (t, n, r) {
                t.inRange(e.x, e.y, i) && o.push({ element: t, datasetIndex: n, index: r })
              },
              !0,
            ),
            o
          )
        }
        function Bi(t, e, n, i, o) {
          const r = (function (t) {
            const e = -1 !== t.indexOf('x'),
              n = -1 !== t.indexOf('y')
            return function (t, i) {
              const o = e ? Math.abs(t.x - i.x) : 0,
                r = n ? Math.abs(t.y - i.y) : 0
              return Math.sqrt(Math.pow(o, 2) + Math.pow(r, 2))
            }
          })(n)
          let a = Number.POSITIVE_INFINITY,
            s = []
          if (!Ee(e, t.chartArea, t._minPadding)) return s
          return (
            Ii(t, n, e, function (n, l, c) {
              if (i && !n.inRange(e.x, e.y, o)) return
              const h = n.getCenterPoint(o)
              if (!Ee(h, t.chartArea, t._minPadding) && !n.inRange(e.x, e.y, o)) return
              const d = r(e, h)
              d < a
                ? ((s = [{ element: n, datasetIndex: l, index: c }]), (a = d))
                : d === a && s.push({ element: n, datasetIndex: l, index: c })
            }),
            s
          )
        }
        function Ni(t, e, n, i) {
          const o = zi(e, t),
            r = [],
            a = n.axis,
            s = 'x' === a ? 'inXRange' : 'inYRange'
          let l = !1
          return (
            (function (t, e) {
              const n = t.getSortedVisibleDatasetMetas()
              let i, o, r
              for (let a = 0, s = n.length; a < s; ++a) {
                ;({ index: i, data: o } = n[a])
                for (let t = 0, n = o.length; t < n; ++t) (r = o[t]), r.skip || e(r, i, t)
              }
            })(t, (t, e, n) => {
              t[s](o[a], i) && r.push({ element: t, datasetIndex: e, index: n }),
                t.inRange(o.x, o.y, i) && (l = !0)
            }),
            n.intersect && !l ? [] : r
          )
        }
        var Wi = {
          modes: {
            index(t, e, n, i) {
              const o = zi(e, t),
                r = n.axis || 'x',
                a = n.intersect ? Vi(t, o, r, i) : Bi(t, o, r, !1, i),
                s = []
              return a.length
                ? (t.getSortedVisibleDatasetMetas().forEach((t) => {
                    const e = a[0].index,
                      n = t.data[e]
                    n && !n.skip && s.push({ element: n, datasetIndex: t.index, index: e })
                  }),
                  s)
                : []
            },
            dataset(t, e, n, i) {
              const o = zi(e, t),
                r = n.axis || 'xy'
              let a = n.intersect ? Vi(t, o, r, i) : Bi(t, o, r, !1, i)
              if (a.length > 0) {
                const e = a[0].datasetIndex,
                  n = t.getDatasetMeta(e).data
                a = []
                for (let t = 0; t < n.length; ++t)
                  a.push({ element: n[t], datasetIndex: e, index: t })
              }
              return a
            },
            point: (t, e, n, i) => Vi(t, zi(e, t), n.axis || 'xy', i),
            nearest: (t, e, n, i) => Bi(t, zi(e, t), n.axis || 'xy', n.intersect, i),
            x: (t, e, n, i) => ((n.axis = 'x'), Ni(t, e, n, i)),
            y: (t, e, n, i) => ((n.axis = 'y'), Ni(t, e, n, i)),
          },
        }
        const Hi = ['left', 'top', 'right', 'bottom']
        function $i(t, e) {
          return t.filter((t) => t.pos === e)
        }
        function Yi(t, e) {
          return t.filter((t) => -1 === Hi.indexOf(t.pos) && t.box.axis === e)
        }
        function Ui(t, e) {
          return t.sort((t, n) => {
            const i = e ? n : t,
              o = e ? t : n
            return i.weight === o.weight ? i.index - o.index : i.weight - o.weight
          })
        }
        function Xi(t, e) {
          const n = (function (t) {
              const e = {}
              for (const n of t) {
                const { stack: t, pos: i, stackWeight: o } = n
                if (!t || !Hi.includes(i)) continue
                const r = e[t] || (e[t] = { count: 0, placed: 0, weight: 0, size: 0 })
                r.count++, (r.weight += o)
              }
              return e
            })(t),
            { vBoxMaxWidth: i, hBoxMaxHeight: o } = e
          let r, a, s
          for (r = 0, a = t.length; r < a; ++r) {
            s = t[r]
            const { fullSize: a } = s.box,
              l = n[s.stack],
              c = l && s.stackWeight / l.weight
            s.horizontal
              ? ((s.width = c ? c * i : a && e.availableWidth), (s.height = o))
              : ((s.width = i), (s.height = c ? c * o : a && e.availableHeight))
          }
          return n
        }
        function qi(t, e, n, i) {
          return Math.max(t[n], e[n]) + Math.max(t[i], e[i])
        }
        function Ki(t, e) {
          ;(t.top = Math.max(t.top, e.top)),
            (t.left = Math.max(t.left, e.left)),
            (t.bottom = Math.max(t.bottom, e.bottom)),
            (t.right = Math.max(t.right, e.right))
        }
        function Gi(t, e, n, i) {
          const { pos: o, box: r } = n,
            a = t.maxPadding
          if (!G(o)) {
            n.size && (t[o] -= n.size)
            const e = i[n.stack] || { size: 0, count: 1 }
            ;(e.size = Math.max(e.size, n.horizontal ? r.height : r.width)),
              (n.size = e.size / e.count),
              (t[o] += n.size)
          }
          r.getPadding && Ki(a, r.getPadding())
          const s = Math.max(0, e.outerWidth - qi(a, t, 'left', 'right')),
            l = Math.max(0, e.outerHeight - qi(a, t, 'top', 'bottom')),
            c = s !== t.w,
            h = l !== t.h
          return (t.w = s), (t.h = l), n.horizontal ? { same: c, other: h } : { same: h, other: c }
        }
        function Zi(t, e) {
          const n = e.maxPadding
          function i(t) {
            const i = { left: 0, top: 0, right: 0, bottom: 0 }
            return (
              t.forEach((t) => {
                i[t] = Math.max(e[t], n[t])
              }),
              i
            )
          }
          return i(t ? ['left', 'right'] : ['top', 'bottom'])
        }
        function Ji(t, e, n, i) {
          const o = []
          let r, a, s, l, c, h
          for (r = 0, a = t.length, c = 0; r < a; ++r) {
            ;(s = t[r]), (l = s.box), l.update(s.width || e.w, s.height || e.h, Zi(s.horizontal, e))
            const { same: a, other: d } = Gi(e, n, s, i)
            ;(c |= a && o.length), (h = h || d), l.fullSize || o.push(s)
          }
          return (c && Ji(o, e, n, i)) || h
        }
        function Qi(t, e, n, i, o) {
          ;(t.top = n),
            (t.left = e),
            (t.right = e + i),
            (t.bottom = n + o),
            (t.width = i),
            (t.height = o)
        }
        function to(t, e, n, i) {
          const o = n.padding
          let { x: r, y: a } = e
          for (const s of t) {
            const t = s.box,
              l = i[s.stack] || { count: 1, placed: 0, weight: 1 },
              c = s.stackWeight / l.weight || 1
            if (s.horizontal) {
              const i = e.w * c,
                r = l.size || t.height
              ft(l.start) && (a = l.start),
                t.fullSize
                  ? Qi(t, o.left, a, n.outerWidth - o.right - o.left, r)
                  : Qi(t, e.left + l.placed, a, i, r),
                (l.start = a),
                (l.placed += i),
                (a = t.bottom)
            } else {
              const i = e.h * c,
                a = l.size || t.width
              ft(l.start) && (r = l.start),
                t.fullSize
                  ? Qi(t, r, o.top, a, n.outerHeight - o.bottom - o.top)
                  : Qi(t, r, e.top + l.placed, a, i),
                (l.start = r),
                (l.placed += i),
                (r = t.right)
            }
          }
          ;(e.x = r), (e.y = a)
        }
        Oe.set('layout', { padding: { top: 0, right: 0, bottom: 0, left: 0 } })
        var eo = {
          addBox(t, e) {
            t.boxes || (t.boxes = []),
              (e.fullSize = e.fullSize || !1),
              (e.position = e.position || 'top'),
              (e.weight = e.weight || 0),
              (e._layers =
                e._layers ||
                function () {
                  return [
                    {
                      z: 0,
                      draw(t) {
                        e.draw(t)
                      },
                    },
                  ]
                }),
              t.boxes.push(e)
          },
          removeBox(t, e) {
            const n = t.boxes ? t.boxes.indexOf(e) : -1
            ;-1 !== n && t.boxes.splice(n, 1)
          },
          configure(t, e, n) {
            ;(e.fullSize = n.fullSize), (e.position = n.position), (e.weight = n.weight)
          },
          update(t, e, n, i) {
            if (!t) return
            const o = qe(t.options.layout.padding),
              r = Math.max(e - o.width, 0),
              a = Math.max(n - o.height, 0),
              s = (function (t) {
                const e = (function (t) {
                    const e = []
                    let n, i, o, r, a, s
                    for (n = 0, i = (t || []).length; n < i; ++n)
                      (o = t[n]),
                        ({
                          position: r,
                          options: { stack: a, stackWeight: s = 1 },
                        } = o),
                        e.push({
                          index: n,
                          box: o,
                          pos: r,
                          horizontal: o.isHorizontal(),
                          weight: o.weight,
                          stack: a && r + a,
                          stackWeight: s,
                        })
                    return e
                  })(t),
                  n = Ui(
                    e.filter((t) => t.box.fullSize),
                    !0,
                  ),
                  i = Ui($i(e, 'left'), !0),
                  o = Ui($i(e, 'right')),
                  r = Ui($i(e, 'top'), !0),
                  a = Ui($i(e, 'bottom')),
                  s = Yi(e, 'x'),
                  l = Yi(e, 'y')
                return {
                  fullSize: n,
                  leftAndTop: i.concat(r),
                  rightAndBottom: o.concat(l).concat(a).concat(s),
                  chartArea: $i(e, 'chartArea'),
                  vertical: i.concat(o).concat(l),
                  horizontal: r.concat(a).concat(s),
                }
              })(t.boxes),
              l = s.vertical,
              c = s.horizontal
            nt(t.boxes, (t) => {
              'function' === typeof t.beforeLayout && t.beforeLayout()
            })
            const h =
                l.reduce(
                  (t, e) => (e.box.options && !1 === e.box.options.display ? t : t + 1),
                  0,
                ) || 1,
              d = Object.freeze({
                outerWidth: e,
                outerHeight: n,
                padding: o,
                availableWidth: r,
                availableHeight: a,
                vBoxMaxWidth: r / 2 / h,
                hBoxMaxHeight: a / 2,
              }),
              u = Object.assign({}, o)
            Ki(u, qe(i))
            const f = Object.assign({ maxPadding: u, w: r, h: a, x: o.left, y: o.top }, o),
              p = Xi(l.concat(c), d)
            Ji(s.fullSize, f, d, p),
              Ji(l, f, d, p),
              Ji(c, f, d, p) && Ji(l, f, d, p),
              (function (t) {
                const e = t.maxPadding
                function n(n) {
                  const i = Math.max(e[n] - t[n], 0)
                  return (t[n] += i), i
                }
                ;(t.y += n('top')), (t.x += n('left')), n('right'), n('bottom')
              })(f),
              to(s.leftAndTop, f, d, p),
              (f.x += f.w),
              (f.y += f.h),
              to(s.rightAndBottom, f, d, p),
              (t.chartArea = {
                left: f.left,
                top: f.top,
                right: f.left + f.w,
                bottom: f.top + f.h,
                height: f.h,
                width: f.w,
              }),
              nt(s.chartArea, (e) => {
                const n = e.box
                Object.assign(n, t.chartArea), n.update(f.w, f.h)
              })
          },
        }
        class no {
          acquireContext(t, e) {}
          releaseContext(t) {
            return !1
          }
          addEventListener(t, e, n) {}
          removeEventListener(t, e, n) {}
          getDevicePixelRatio() {
            return 1
          }
          getMaximumSize(t, e, n, i) {
            return (
              (e = Math.max(0, e || t.width)),
              (n = n || t.height),
              { width: e, height: Math.max(0, i ? Math.floor(e / i) : n) }
            )
          }
          isAttached(t) {
            return !0
          }
        }
        class io extends no {
          acquireContext(t) {
            return (t && t.getContext && t.getContext('2d')) || null
          }
        }
        const oo = {
            touchstart: 'mousedown',
            touchmove: 'mousemove',
            touchend: 'mouseup',
            pointerenter: 'mouseenter',
            pointerdown: 'mousedown',
            pointermove: 'mousemove',
            pointerup: 'mouseup',
            pointerleave: 'mouseout',
            pointerout: 'mouseout',
          },
          ro = (t) => null === t || '' === t
        const ao = !!zn && { passive: !0 }
        function so(t, e, n) {
          t.canvas.removeEventListener(e, n, ao)
        }
        function lo(t, e, n) {
          const i = t.canvas,
            o = (i && Pn(i)) || i,
            r = new MutationObserver((t) => {
              const e = Pn(o)
              t.forEach((t) => {
                for (let i = 0; i < t.addedNodes.length; i++) {
                  const r = t.addedNodes[i]
                  ;(r !== o && r !== e) || n(t.target)
                }
              })
            })
          return r.observe(document, { childList: !0, subtree: !0 }), r
        }
        function co(t, e, n) {
          const i = t.canvas,
            o = i && Pn(i)
          if (!o) return
          const r = new MutationObserver((t) => {
            t.forEach((t) => {
              for (let e = 0; e < t.removedNodes.length; e++)
                if (t.removedNodes[e] === i) {
                  n()
                  break
                }
            })
          })
          return r.observe(o, { childList: !0 }), r
        }
        const ho = new Map()
        let uo = 0
        function fo() {
          const t = window.devicePixelRatio
          t !== uo &&
            ((uo = t),
            ho.forEach((e, n) => {
              n.currentDevicePixelRatio !== t && e()
            }))
        }
        function po(t, e, n) {
          const i = t.canvas,
            o = i && Pn(i)
          if (!o) return
          const r = H((t, e) => {
              const i = o.clientWidth
              n(t, e), i < o.clientWidth && n()
            }, window),
            a = new ResizeObserver((t) => {
              const e = t[0],
                n = e.contentRect.width,
                i = e.contentRect.height
              ;(0 === n && 0 === i) || r(n, i)
            })
          return (
            a.observe(o),
            (function (t, e) {
              ho.size || window.addEventListener('resize', fo), ho.set(t, e)
            })(t, r),
            a
          )
        }
        function go(t, e, n) {
          n && n.disconnect(),
            'resize' === e &&
              (function (t) {
                ho.delete(t), ho.size || window.removeEventListener('resize', fo)
              })(t)
        }
        function mo(t, e, n) {
          const i = t.canvas,
            o = H(
              (e) => {
                null !== t.ctx &&
                  n(
                    (function (t, e) {
                      const n = oo[t.type] || t.type,
                        { x: i, y: o } = En(t, e)
                      return {
                        type: n,
                        chart: e,
                        native: t,
                        x: void 0 !== i ? i : null,
                        y: void 0 !== o ? o : null,
                      }
                    })(e, t),
                  )
              },
              t,
              (t) => {
                const e = t[0]
                return [e, e.offsetX, e.offsetY]
              },
            )
          return (
            (function (t, e, n) {
              t.addEventListener(e, n, ao)
            })(i, e, o),
            o
          )
        }
        class bo extends no {
          acquireContext(t, e) {
            const n = t && t.getContext && t.getContext('2d')
            return n && n.canvas === t
              ? ((function (t, e) {
                  const n = t.style,
                    i = t.getAttribute('height'),
                    o = t.getAttribute('width')
                  if (
                    ((t.$chartjs = {
                      initial: {
                        height: i,
                        width: o,
                        style: { display: n.display, height: n.height, width: n.width },
                      },
                    }),
                    (n.display = n.display || 'block'),
                    (n.boxSizing = n.boxSizing || 'border-box'),
                    ro(o))
                  ) {
                    const e = Fn(t, 'width')
                    void 0 !== e && (t.width = e)
                  }
                  if (ro(i))
                    if ('' === t.style.height) t.height = t.width / (e || 2)
                    else {
                      const e = Fn(t, 'height')
                      void 0 !== e && (t.height = e)
                    }
                })(t, e),
                n)
              : null
          }
          releaseContext(t) {
            const e = t.canvas
            if (!e.$chartjs) return !1
            const n = e.$chartjs.initial
            ;['height', 'width'].forEach((t) => {
              const i = n[t]
              q(i) ? e.removeAttribute(t) : e.setAttribute(t, i)
            })
            const i = n.style || {}
            return (
              Object.keys(i).forEach((t) => {
                e.style[t] = i[t]
              }),
              (e.width = e.width),
              delete e.$chartjs,
              !0
            )
          }
          addEventListener(t, e, n) {
            this.removeEventListener(t, e)
            const i = t.$proxies || (t.$proxies = {}),
              o = { attach: lo, detach: co, resize: po }[e] || mo
            i[e] = o(t, e, n)
          }
          removeEventListener(t, e) {
            const n = t.$proxies || (t.$proxies = {}),
              i = n[e]
            if (!i) return
            ;(({ attach: go, detach: go, resize: go }[e] || so)(t, e, i), (n[e] = void 0))
          }
          getDevicePixelRatio() {
            return window.devicePixelRatio
          }
          getMaximumSize(t, e, n, i) {
            return Rn(t, e, n, i)
          }
          isAttached(t) {
            const e = Pn(t)
            return !(!e || !e.isConnected)
          }
        }
        class xo {
          constructor() {
            ;(this.x = void 0),
              (this.y = void 0),
              (this.active = !1),
              (this.options = void 0),
              (this.$animations = void 0)
          }
          tooltipPosition(t) {
            const { x: e, y: n } = this.getProps(['x', 'y'], t)
            return { x: e, y: n }
          }
          hasValue() {
            return Ot(this.x) && Ot(this.y)
          }
          getProps(t, e) {
            const n = this,
              i = this.$animations
            if (!e || !i) return n
            const o = {}
            return (
              t.forEach((t) => {
                o[t] = i[t] && i[t].active() ? i[t]._to : n[t]
              }),
              o
            )
          }
        }
        ;(xo.defaults = {}), (xo.defaultRoutes = void 0)
        const yo = {
          values: (t) => (K(t) ? t : '' + t),
          numeric(t, e, n) {
            if (0 === t) return '0'
            const i = this.chart.options.locale
            let o,
              r = t
            if (n.length > 1) {
              const e = Math.max(Math.abs(n[0].value), Math.abs(n[n.length - 1].value))
              ;(e < 1e-4 || e > 1e15) && (o = 'scientific'),
                (r = (function (t, e) {
                  let n = e.length > 3 ? e[2].value - e[1].value : e[1].value - e[0].value
                  Math.abs(n) >= 1 && t !== Math.floor(t) && (n = t - Math.floor(t))
                  return n
                })(t, n))
            }
            const a = Mt(Math.abs(r)),
              s = Math.max(Math.min(-1 * Math.floor(a), 20), 0),
              l = { notation: o, minimumFractionDigits: s, maximumFractionDigits: s }
            return Object.assign(l, this.options.ticks.format), Wn(t, i, l)
          },
          logarithmic(t, e, n) {
            if (0 === t) return '0'
            const i = t / Math.pow(10, Math.floor(Mt(t)))
            return 1 === i || 2 === i || 5 === i ? yo.numeric.call(this, t, e, n) : ''
          },
        }
        var vo = { formatters: yo }
        function _o(t, e) {
          const n = t.options.ticks,
            i =
              n.maxTicksLimit ||
              (function (t) {
                const e = t.options.offset,
                  n = t._tickSize(),
                  i = t._length / n + (e ? 0 : 1),
                  o = t._maxLength / n
                return Math.floor(Math.min(i, o))
              })(t),
            o = n.major.enabled
              ? (function (t) {
                  const e = []
                  let n, i
                  for (n = 0, i = t.length; n < i; n++) t[n].major && e.push(n)
                  return e
                })(e)
              : [],
            r = o.length,
            a = o[0],
            s = o[r - 1],
            l = []
          if (r > i)
            return (
              (function (t, e, n, i) {
                let o,
                  r = 0,
                  a = n[0]
                for (i = Math.ceil(i), o = 0; o < t.length; o++)
                  o === a && (e.push(t[o]), r++, (a = n[r * i]))
              })(e, l, o, r / i),
              l
            )
          const c = (function (t, e, n) {
            const i = (function (t) {
                const e = t.length
                let n, i
                if (e < 2) return !1
                for (i = t[0], n = 1; n < e; ++n) if (t[n] - t[n - 1] !== i) return !1
                return i
              })(t),
              o = e.length / n
            if (!i) return Math.max(o, 1)
            const r = (function (t) {
              const e = [],
                n = Math.sqrt(t)
              let i
              for (i = 1; i < n; i++) t % i === 0 && (e.push(i), e.push(t / i))
              return n === (0 | n) && e.push(n), e.sort((t, e) => t - e).pop(), e
            })(i)
            for (let a = 0, s = r.length - 1; a < s; a++) {
              const t = r[a]
              if (t > o) return t
            }
            return Math.max(o, 1)
          })(o, e, i)
          if (r > 0) {
            let t, n
            const i = r > 1 ? Math.round((s - a) / (r - 1)) : null
            for (wo(e, l, c, q(i) ? 0 : a - i, a), t = 0, n = r - 1; t < n; t++)
              wo(e, l, c, o[t], o[t + 1])
            return wo(e, l, c, s, q(i) ? e.length : s + i), l
          }
          return wo(e, l, c), l
        }
        function wo(t, e, n, i, o) {
          const r = Q(i, 0),
            a = Math.min(Q(o, t.length), t.length)
          let s,
            l,
            c,
            h = 0
          for (n = Math.ceil(n), o && ((s = o - i), (n = s / Math.floor(s / n))), c = r; c < 0; )
            h++, (c = Math.round(r + h * n))
          for (l = Math.max(r, 0); l < a; l++)
            l === c && (e.push(t[l]), h++, (c = Math.round(r + h * n)))
        }
        Oe.set('scale', {
          display: !0,
          offset: !1,
          reverse: !1,
          beginAtZero: !1,
          bounds: 'ticks',
          grace: 0,
          grid: {
            display: !0,
            lineWidth: 1,
            drawBorder: !0,
            drawOnChartArea: !0,
            drawTicks: !0,
            tickLength: 8,
            tickWidth: (t, e) => e.lineWidth,
            tickColor: (t, e) => e.color,
            offset: !1,
            borderDash: [],
            borderDashOffset: 0,
            borderWidth: 1,
          },
          title: { display: !1, text: '', padding: { top: 4, bottom: 4 } },
          ticks: {
            minRotation: 0,
            maxRotation: 50,
            mirror: !1,
            textStrokeWidth: 0,
            textStrokeColor: '',
            padding: 3,
            display: !0,
            autoSkip: !0,
            autoSkipPadding: 3,
            labelOffset: 0,
            callback: vo.formatters.values,
            minor: {},
            major: {},
            align: 'center',
            crossAlign: 'near',
            showLabelBackdrop: !1,
            backdropColor: 'rgba(255, 255, 255, 0.75)',
            backdropPadding: 2,
          },
        }),
          Oe.route('scale.ticks', 'color', '', 'color'),
          Oe.route('scale.grid', 'color', '', 'borderColor'),
          Oe.route('scale.grid', 'borderColor', '', 'borderColor'),
          Oe.route('scale.title', 'color', '', 'color'),
          Oe.describe('scale', {
            _fallback: !1,
            _scriptable: (t) =>
              !t.startsWith('before') &&
              !t.startsWith('after') &&
              'callback' !== t &&
              'parser' !== t,
            _indexable: (t) => 'borderDash' !== t && 'tickBorderDash' !== t,
          }),
          Oe.describe('scales', { _fallback: 'scale' }),
          Oe.describe('scale.ticks', {
            _scriptable: (t) => 'backdropPadding' !== t && 'callback' !== t,
            _indexable: (t) => 'backdropPadding' !== t,
          })
        const Mo = (t, e, n) => ('top' === e || 'left' === e ? t[e] + n : t[e] - n)
        function ko(t, e) {
          const n = [],
            i = t.length / e,
            o = t.length
          let r = 0
          for (; r < o; r += i) n.push(t[Math.floor(r)])
          return n
        }
        function So(t, e, n) {
          const i = t.ticks.length,
            o = Math.min(e, i - 1),
            r = t._startPixel,
            a = t._endPixel,
            s = 1e-6
          let l,
            c = t.getPixelForTick(o)
          if (
            !(
              n &&
              ((l =
                1 === i
                  ? Math.max(c - r, a - c)
                  : 0 === e
                  ? (t.getPixelForTick(1) - c) / 2
                  : (c - t.getPixelForTick(o - 1)) / 2),
              (c += o < e ? l : -l),
              c < r - s || c > a + s)
            )
          )
            return c
        }
        function Oo(t) {
          return t.drawTicks ? t.tickLength : 0
        }
        function Po(t, e) {
          if (!t.display) return 0
          const n = Ke(t.font, e),
            i = qe(t.padding)
          return (K(t.text) ? t.text.length : 1) * n.lineHeight + i.height
        }
        function Co(t, e, n) {
          let i = $(t)
          return (
            ((n && 'right' !== e) || (!n && 'right' === e)) &&
              (i = ((t) => ('left' === t ? 'right' : 'right' === t ? 'left' : t))(i)),
            i
          )
        }
        class Do extends xo {
          constructor(t) {
            super(),
              (this.id = t.id),
              (this.type = t.type),
              (this.options = void 0),
              (this.ctx = t.ctx),
              (this.chart = t.chart),
              (this.top = void 0),
              (this.bottom = void 0),
              (this.left = void 0),
              (this.right = void 0),
              (this.width = void 0),
              (this.height = void 0),
              (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
              (this.maxWidth = void 0),
              (this.maxHeight = void 0),
              (this.paddingTop = void 0),
              (this.paddingBottom = void 0),
              (this.paddingLeft = void 0),
              (this.paddingRight = void 0),
              (this.axis = void 0),
              (this.labelRotation = void 0),
              (this.min = void 0),
              (this.max = void 0),
              (this._range = void 0),
              (this.ticks = []),
              (this._gridLineItems = null),
              (this._labelItems = null),
              (this._labelSizes = null),
              (this._length = 0),
              (this._maxLength = 0),
              (this._longestTextCache = {}),
              (this._startPixel = void 0),
              (this._endPixel = void 0),
              (this._reversePixels = !1),
              (this._userMax = void 0),
              (this._userMin = void 0),
              (this._suggestedMax = void 0),
              (this._suggestedMin = void 0),
              (this._ticksLength = 0),
              (this._borderValue = 0),
              (this._cache = {}),
              (this._dataLimitsCached = !1),
              (this.$context = void 0)
          }
          init(t) {
            const e = this
            ;(e.options = t.setContext(e.getContext())),
              (e.axis = t.axis),
              (e._userMin = e.parse(t.min)),
              (e._userMax = e.parse(t.max)),
              (e._suggestedMin = e.parse(t.suggestedMin)),
              (e._suggestedMax = e.parse(t.suggestedMax))
          }
          parse(t, e) {
            return t
          }
          getUserBounds() {
            let { _userMin: t, _userMax: e, _suggestedMin: n, _suggestedMax: i } = this
            return (
              (t = J(t, Number.POSITIVE_INFINITY)),
              (e = J(e, Number.NEGATIVE_INFINITY)),
              (n = J(n, Number.POSITIVE_INFINITY)),
              (i = J(i, Number.NEGATIVE_INFINITY)),
              { min: J(t, n), max: J(e, i), minDefined: Z(t), maxDefined: Z(e) }
            )
          }
          getMinMax(t) {
            const e = this
            let n,
              { min: i, max: o, minDefined: r, maxDefined: a } = e.getUserBounds()
            if (r && a) return { min: i, max: o }
            const s = e.getMatchingVisibleMetas()
            for (let l = 0, c = s.length; l < c; ++l)
              (n = s[l].controller.getMinMax(e, t)),
                r || (i = Math.min(i, n.min)),
                a || (o = Math.max(o, n.max))
            return { min: J(i, J(o, i)), max: J(o, J(i, o)) }
          }
          getPadding() {
            const t = this
            return {
              left: t.paddingLeft || 0,
              top: t.paddingTop || 0,
              right: t.paddingRight || 0,
              bottom: t.paddingBottom || 0,
            }
          }
          getTicks() {
            return this.ticks
          }
          getLabels() {
            const t = this.chart.data
            return (
              this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || []
            )
          }
          beforeLayout() {
            ;(this._cache = {}), (this._dataLimitsCached = !1)
          }
          beforeUpdate() {
            et(this.options.beforeUpdate, [this])
          }
          update(t, e, n) {
            const i = this,
              o = i.options.ticks,
              r = o.sampleSize
            i.beforeUpdate(),
              (i.maxWidth = t),
              (i.maxHeight = e),
              (i._margins = n = Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, n)),
              (i.ticks = null),
              (i._labelSizes = null),
              (i._gridLineItems = null),
              (i._labelItems = null),
              i.beforeSetDimensions(),
              i.setDimensions(),
              i.afterSetDimensions(),
              (i._maxLength = i.isHorizontal()
                ? i.width + n.left + n.right
                : i.height + n.top + n.bottom),
              i._dataLimitsCached ||
                (i.beforeDataLimits(),
                i.determineDataLimits(),
                i.afterDataLimits(),
                (i._range = (function (t, e) {
                  const { min: n, max: i } = t
                  return { min: n - Math.abs(tt(e, n)), max: i + tt(e, i) }
                })(i, i.options.grace)),
                (i._dataLimitsCached = !0)),
              i.beforeBuildTicks(),
              (i.ticks = i.buildTicks() || []),
              i.afterBuildTicks()
            const a = r < i.ticks.length
            i._convertTicksToLabels(a ? ko(i.ticks, r) : i.ticks),
              i.configure(),
              i.beforeCalculateLabelRotation(),
              i.calculateLabelRotation(),
              i.afterCalculateLabelRotation(),
              o.display &&
                (o.autoSkip || 'auto' === o.source) &&
                ((i.ticks = _o(i, i.ticks)), (i._labelSizes = null)),
              a && i._convertTicksToLabels(i.ticks),
              i.beforeFit(),
              i.fit(),
              i.afterFit(),
              i.afterUpdate()
          }
          configure() {
            const t = this
            let e,
              n,
              i = t.options.reverse
            t.isHorizontal()
              ? ((e = t.left), (n = t.right))
              : ((e = t.top), (n = t.bottom), (i = !i)),
              (t._startPixel = e),
              (t._endPixel = n),
              (t._reversePixels = i),
              (t._length = n - e),
              (t._alignToPixels = t.options.alignToPixels)
          }
          afterUpdate() {
            et(this.options.afterUpdate, [this])
          }
          beforeSetDimensions() {
            et(this.options.beforeSetDimensions, [this])
          }
          setDimensions() {
            const t = this
            t.isHorizontal()
              ? ((t.width = t.maxWidth), (t.left = 0), (t.right = t.width))
              : ((t.height = t.maxHeight), (t.top = 0), (t.bottom = t.height)),
              (t.paddingLeft = 0),
              (t.paddingTop = 0),
              (t.paddingRight = 0),
              (t.paddingBottom = 0)
          }
          afterSetDimensions() {
            et(this.options.afterSetDimensions, [this])
          }
          _callHooks(t) {
            const e = this
            e.chart.notifyPlugins(t, e.getContext()), et(e.options[t], [e])
          }
          beforeDataLimits() {
            this._callHooks('beforeDataLimits')
          }
          determineDataLimits() {}
          afterDataLimits() {
            this._callHooks('afterDataLimits')
          }
          beforeBuildTicks() {
            this._callHooks('beforeBuildTicks')
          }
          buildTicks() {
            return []
          }
          afterBuildTicks() {
            this._callHooks('afterBuildTicks')
          }
          beforeTickToLabelConversion() {
            et(this.options.beforeTickToLabelConversion, [this])
          }
          generateTickLabels(t) {
            const e = this,
              n = e.options.ticks
            let i, o, r
            for (i = 0, o = t.length; i < o; i++)
              (r = t[i]), (r.label = et(n.callback, [r.value, i, t], e))
          }
          afterTickToLabelConversion() {
            et(this.options.afterTickToLabelConversion, [this])
          }
          beforeCalculateLabelRotation() {
            et(this.options.beforeCalculateLabelRotation, [this])
          }
          calculateLabelRotation() {
            const t = this,
              e = t.options,
              n = e.ticks,
              i = t.ticks.length,
              o = n.minRotation || 0,
              r = n.maxRotation
            let a,
              s,
              l,
              c = o
            if (!t._isVisible() || !n.display || o >= r || i <= 1 || !t.isHorizontal())
              return void (t.labelRotation = o)
            const h = t._getLabelSizes(),
              d = h.widest.width,
              u = h.highest.height,
              f = zt(t.chart.width - d, 0, t.maxWidth)
            ;(a = e.offset ? t.maxWidth / i : f / (i - 1)),
              d + 6 > a &&
                ((a = f / (i - (e.offset ? 0.5 : 1))),
                (s = t.maxHeight - Oo(e.grid) - n.padding - Po(e.title, t.chart.options.font)),
                (l = Math.sqrt(d * d + u * u)),
                (c = At(
                  Math.min(
                    Math.asin(zt((h.highest.height + 6) / a, -1, 1)),
                    Math.asin(zt(s / l, -1, 1)) - Math.asin(zt(u / l, -1, 1)),
                  ),
                )),
                (c = Math.max(o, Math.min(r, c)))),
              (t.labelRotation = c)
          }
          afterCalculateLabelRotation() {
            et(this.options.afterCalculateLabelRotation, [this])
          }
          beforeFit() {
            et(this.options.beforeFit, [this])
          }
          fit() {
            const t = this,
              e = { width: 0, height: 0 },
              {
                chart: n,
                options: { ticks: i, title: o, grid: r },
              } = t,
              a = t._isVisible(),
              s = t.isHorizontal()
            if (a) {
              const a = Po(o, n.options.font)
              if (
                (s
                  ? ((e.width = t.maxWidth), (e.height = Oo(r) + a))
                  : ((e.height = t.maxHeight), (e.width = Oo(r) + a)),
                i.display && t.ticks.length)
              ) {
                const { first: n, last: o, widest: r, highest: a } = t._getLabelSizes(),
                  l = 2 * i.padding,
                  c = Dt(t.labelRotation),
                  h = Math.cos(c),
                  d = Math.sin(c)
                if (s) {
                  const n = i.mirror ? 0 : d * r.width + h * a.height
                  e.height = Math.min(t.maxHeight, e.height + n + l)
                } else {
                  const n = i.mirror ? 0 : h * r.width + d * a.height
                  e.width = Math.min(t.maxWidth, e.width + n + l)
                }
                t._calculatePadding(n, o, d, h)
              }
            }
            t._handleMargins(),
              s
                ? ((t.width = t._length = n.width - t._margins.left - t._margins.right),
                  (t.height = e.height))
                : ((t.width = e.width),
                  (t.height = t._length = n.height - t._margins.top - t._margins.bottom))
          }
          _calculatePadding(t, e, n, i) {
            const o = this,
              {
                ticks: { align: r, padding: a },
                position: s,
              } = o.options,
              l = 0 !== o.labelRotation,
              c = 'top' !== s && 'x' === o.axis
            if (o.isHorizontal()) {
              const s = o.getPixelForTick(0) - o.left,
                h = o.right - o.getPixelForTick(o.ticks.length - 1)
              let d = 0,
                u = 0
              l
                ? c
                  ? ((d = i * t.width), (u = n * e.height))
                  : ((d = n * t.height), (u = i * e.width))
                : 'start' === r
                ? (u = e.width)
                : 'end' === r
                ? (d = t.width)
                : ((d = t.width / 2), (u = e.width / 2)),
                (o.paddingLeft = Math.max(((d - s + a) * o.width) / (o.width - s), 0)),
                (o.paddingRight = Math.max(((u - h + a) * o.width) / (o.width - h), 0))
            } else {
              let n = e.height / 2,
                i = t.height / 2
              'start' === r ? ((n = 0), (i = t.height)) : 'end' === r && ((n = e.height), (i = 0)),
                (o.paddingTop = n + a),
                (o.paddingBottom = i + a)
            }
          }
          _handleMargins() {
            const t = this
            t._margins &&
              ((t._margins.left = Math.max(t.paddingLeft, t._margins.left)),
              (t._margins.top = Math.max(t.paddingTop, t._margins.top)),
              (t._margins.right = Math.max(t.paddingRight, t._margins.right)),
              (t._margins.bottom = Math.max(t.paddingBottom, t._margins.bottom)))
          }
          afterFit() {
            et(this.options.afterFit, [this])
          }
          isHorizontal() {
            const { axis: t, position: e } = this.options
            return 'top' === e || 'bottom' === e || 'x' === t
          }
          isFullSize() {
            return this.options.fullSize
          }
          _convertTicksToLabels(t) {
            const e = this
            let n, i
            for (
              e.beforeTickToLabelConversion(), e.generateTickLabels(t), n = 0, i = t.length;
              n < i;
              n++
            )
              q(t[n].label) && (t.splice(n, 1), i--, n--)
            e.afterTickToLabelConversion()
          }
          _getLabelSizes() {
            const t = this
            let e = t._labelSizes
            if (!e) {
              const n = t.options.ticks.sampleSize
              let i = t.ticks
              n < i.length && (i = ko(i, n)),
                (t._labelSizes = e = t._computeLabelSizes(i, i.length))
            }
            return e
          }
          _computeLabelSizes(t, e) {
            const { ctx: n, _longestTextCache: i } = this,
              o = [],
              r = []
            let a,
              s,
              l,
              c,
              h,
              d,
              u,
              f,
              p,
              g,
              m,
              b = 0,
              x = 0
            for (a = 0; a < e; ++a) {
              if (
                ((c = t[a].label),
                (h = this._resolveTickFontOptions(a)),
                (n.font = d = h.string),
                (u = i[d] = i[d] || { data: {}, gc: [] }),
                (f = h.lineHeight),
                (p = g = 0),
                q(c) || K(c))
              ) {
                if (K(c))
                  for (s = 0, l = c.length; s < l; ++s)
                    (m = c[s]), q(m) || K(m) || ((p = Pe(n, u.data, u.gc, p, m)), (g += f))
              } else (p = Pe(n, u.data, u.gc, p, c)), (g = f)
              o.push(p), r.push(g), (b = Math.max(p, b)), (x = Math.max(g, x))
            }
            !(function (t, e) {
              nt(t, (t) => {
                const n = t.gc,
                  i = n.length / 2
                let o
                if (i > e) {
                  for (o = 0; o < i; ++o) delete t.data[n[o]]
                  n.splice(0, i)
                }
              })
            })(i, e)
            const y = o.indexOf(b),
              v = r.indexOf(x),
              _ = (t) => ({ width: o[t] || 0, height: r[t] || 0 })
            return {
              first: _(0),
              last: _(e - 1),
              widest: _(y),
              highest: _(v),
              widths: o,
              heights: r,
            }
          }
          getLabelForValue(t) {
            return t
          }
          getPixelForValue(t, e) {
            return NaN
          }
          getValueForPixel(t) {}
          getPixelForTick(t) {
            const e = this.ticks
            return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value)
          }
          getPixelForDecimal(t) {
            const e = this
            e._reversePixels && (t = 1 - t)
            const n = e._startPixel + t * e._length
            return zt(e._alignToPixels ? De(e.chart, n, 0) : n, -32768, 32767)
          }
          getDecimalForPixel(t) {
            const e = (t - this._startPixel) / this._length
            return this._reversePixels ? 1 - e : e
          }
          getBasePixel() {
            return this.getPixelForValue(this.getBaseValue())
          }
          getBaseValue() {
            const { min: t, max: e } = this
            return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0
          }
          getContext(t) {
            const e = this,
              n = e.ticks || []
            if (t >= 0 && t < n.length) {
              const i = n[t]
              return (
                i.$context ||
                (i.$context = (function (t, e, n) {
                  return Object.assign(Object.create(t), { tick: n, index: e, type: 'tick' })
                })(e.getContext(), t, i))
              )
            }
            return (
              e.$context ||
              (e.$context =
                ((i = e.chart.getContext()),
                (o = e),
                Object.assign(Object.create(i), { scale: o, type: 'scale' })))
            )
            var i, o
          }
          _tickSize() {
            const t = this,
              e = t.options.ticks,
              n = Dt(t.labelRotation),
              i = Math.abs(Math.cos(n)),
              o = Math.abs(Math.sin(n)),
              r = t._getLabelSizes(),
              a = e.autoSkipPadding || 0,
              s = r ? r.widest.width + a : 0,
              l = r ? r.highest.height + a : 0
            return t.isHorizontal()
              ? l * i > s * o
                ? s / i
                : l / o
              : l * o < s * i
              ? l / i
              : s / o
          }
          _isVisible() {
            const t = this.options.display
            return 'auto' !== t ? !!t : this.getMatchingVisibleMetas().length > 0
          }
          _computeGridLineItems(t) {
            const e = this,
              n = e.axis,
              i = e.chart,
              o = e.options,
              { grid: r, position: a } = o,
              s = r.offset,
              l = e.isHorizontal(),
              c = e.ticks.length + (s ? 1 : 0),
              h = Oo(r),
              d = [],
              u = r.setContext(e.getContext()),
              f = u.drawBorder ? u.borderWidth : 0,
              p = f / 2,
              g = function (t) {
                return De(i, t, f)
              }
            let m, b, x, y, v, _, w, M, k, S, O, P
            if ('top' === a)
              (m = g(e.bottom)), (_ = e.bottom - h), (M = m - p), (S = g(t.top) + p), (P = t.bottom)
            else if ('bottom' === a)
              (m = g(e.top)), (S = t.top), (P = g(t.bottom) - p), (_ = m + p), (M = e.top + h)
            else if ('left' === a)
              (m = g(e.right)), (v = e.right - h), (w = m - p), (k = g(t.left) + p), (O = t.right)
            else if ('right' === a)
              (m = g(e.left)), (k = t.left), (O = g(t.right) - p), (v = m + p), (w = e.left + h)
            else if ('x' === n) {
              if ('center' === a) m = g((t.top + t.bottom) / 2 + 0.5)
              else if (G(a)) {
                const t = Object.keys(a)[0],
                  n = a[t]
                m = g(e.chart.scales[t].getPixelForValue(n))
              }
              ;(S = t.top), (P = t.bottom), (_ = m + p), (M = _ + h)
            } else if ('y' === n) {
              if ('center' === a) m = g((t.left + t.right) / 2)
              else if (G(a)) {
                const t = Object.keys(a)[0],
                  n = a[t]
                m = g(e.chart.scales[t].getPixelForValue(n))
              }
              ;(v = m - p), (w = v - h), (k = t.left), (O = t.right)
            }
            const C = Q(o.ticks.maxTicksLimit, c),
              D = Math.max(1, Math.ceil(c / C))
            for (b = 0; b < c; b += D) {
              const t = r.setContext(e.getContext(b)),
                n = t.lineWidth,
                o = t.color,
                a = r.borderDash || [],
                c = t.borderDashOffset,
                h = t.tickWidth,
                u = t.tickColor,
                f = t.tickBorderDash || [],
                p = t.tickBorderDashOffset
              ;(x = So(e, b, s)),
                void 0 !== x &&
                  ((y = De(i, x, n)),
                  l ? (v = w = k = O = y) : (_ = M = S = P = y),
                  d.push({
                    tx1: v,
                    ty1: _,
                    tx2: w,
                    ty2: M,
                    x1: k,
                    y1: S,
                    x2: O,
                    y2: P,
                    width: n,
                    color: o,
                    borderDash: a,
                    borderDashOffset: c,
                    tickWidth: h,
                    tickColor: u,
                    tickBorderDash: f,
                    tickBorderDashOffset: p,
                  }))
            }
            return (e._ticksLength = c), (e._borderValue = m), d
          }
          _computeLabelItems(t) {
            const e = this,
              n = e.axis,
              i = e.options,
              { position: o, ticks: r } = i,
              a = e.isHorizontal(),
              s = e.ticks,
              { align: l, crossAlign: c, padding: h, mirror: d } = r,
              u = Oo(i.grid),
              f = u + h,
              p = d ? -h : f,
              g = -Dt(e.labelRotation),
              m = []
            let b,
              x,
              y,
              v,
              _,
              w,
              M,
              k,
              S,
              O,
              P,
              C,
              D = 'middle'
            if ('top' === o) (w = e.bottom - p), (M = e._getXAxisLabelAlignment())
            else if ('bottom' === o) (w = e.top + p), (M = e._getXAxisLabelAlignment())
            else if ('left' === o) {
              const t = e._getYAxisLabelAlignment(u)
              ;(M = t.textAlign), (_ = t.x)
            } else if ('right' === o) {
              const t = e._getYAxisLabelAlignment(u)
              ;(M = t.textAlign), (_ = t.x)
            } else if ('x' === n) {
              if ('center' === o) w = (t.top + t.bottom) / 2 + f
              else if (G(o)) {
                const t = Object.keys(o)[0],
                  n = o[t]
                w = e.chart.scales[t].getPixelForValue(n) + f
              }
              M = e._getXAxisLabelAlignment()
            } else if ('y' === n) {
              if ('center' === o) _ = (t.left + t.right) / 2 - f
              else if (G(o)) {
                const t = Object.keys(o)[0],
                  n = o[t]
                _ = e.chart.scales[t].getPixelForValue(n)
              }
              M = e._getYAxisLabelAlignment(u).textAlign
            }
            'y' === n && ('start' === l ? (D = 'top') : 'end' === l && (D = 'bottom'))
            const A = e._getLabelSizes()
            for (b = 0, x = s.length; b < x; ++b) {
              ;(y = s[b]), (v = y.label)
              const t = r.setContext(e.getContext(b))
              ;(k = e.getPixelForTick(b) + r.labelOffset),
                (S = e._resolveTickFontOptions(b)),
                (O = S.lineHeight),
                (P = K(v) ? v.length : 1)
              const n = P / 2,
                i = t.color,
                l = t.textStrokeColor,
                h = t.textStrokeWidth
              let u
              if (
                (a
                  ? ((_ = k),
                    (C =
                      'top' === o
                        ? 'near' === c || 0 !== g
                          ? -P * O + O / 2
                          : 'center' === c
                          ? -A.highest.height / 2 - n * O + O
                          : -A.highest.height + O / 2
                        : 'near' === c || 0 !== g
                        ? O / 2
                        : 'center' === c
                        ? A.highest.height / 2 - n * O
                        : A.highest.height - P * O),
                    d && (C *= -1))
                  : ((w = k), (C = ((1 - P) * O) / 2)),
                t.showLabelBackdrop)
              ) {
                const e = qe(t.backdropPadding),
                  n = A.heights[b],
                  i = A.widths[b]
                let o = w + C - e.top,
                  r = _ - e.left
                switch (D) {
                  case 'middle':
                    o -= n / 2
                    break
                  case 'bottom':
                    o -= n
                }
                switch (M) {
                  case 'center':
                    r -= i / 2
                    break
                  case 'right':
                    r -= i
                }
                u = {
                  left: r,
                  top: o,
                  width: i + e.width,
                  height: n + e.height,
                  color: t.backdropColor,
                }
              }
              m.push({
                rotation: g,
                label: v,
                font: S,
                color: i,
                strokeColor: l,
                strokeWidth: h,
                textOffset: C,
                textAlign: M,
                textBaseline: D,
                translation: [_, w],
                backdrop: u,
              })
            }
            return m
          }
          _getXAxisLabelAlignment() {
            const { position: t, ticks: e } = this.options
            if (-Dt(this.labelRotation)) return 'top' === t ? 'left' : 'right'
            let n = 'center'
            return 'start' === e.align ? (n = 'left') : 'end' === e.align && (n = 'right'), n
          }
          _getYAxisLabelAlignment(t) {
            const e = this,
              {
                position: n,
                ticks: { crossAlign: i, mirror: o, padding: r },
              } = e.options,
              a = t + r,
              s = e._getLabelSizes().widest.width
            let l, c
            return (
              'left' === n
                ? o
                  ? ((c = e.right + r),
                    'near' === i
                      ? (l = 'left')
                      : 'center' === i
                      ? ((l = 'center'), (c += s / 2))
                      : ((l = 'right'), (c += s)))
                  : ((c = e.right - a),
                    'near' === i
                      ? (l = 'right')
                      : 'center' === i
                      ? ((l = 'center'), (c -= s / 2))
                      : ((l = 'left'), (c = e.left)))
                : 'right' === n
                ? o
                  ? ((c = e.left + r),
                    'near' === i
                      ? (l = 'right')
                      : 'center' === i
                      ? ((l = 'center'), (c -= s / 2))
                      : ((l = 'left'), (c -= s)))
                  : ((c = e.left + a),
                    'near' === i
                      ? (l = 'left')
                      : 'center' === i
                      ? ((l = 'center'), (c += s / 2))
                      : ((l = 'right'), (c = e.right)))
                : (l = 'right'),
              { textAlign: l, x: c }
            )
          }
          _computeLabelArea() {
            const t = this
            if (t.options.ticks.mirror) return
            const e = t.chart,
              n = t.options.position
            return 'left' === n || 'right' === n
              ? { top: 0, left: t.left, bottom: e.height, right: t.right }
              : 'top' === n || 'bottom' === n
              ? { top: t.top, left: 0, bottom: t.bottom, right: e.width }
              : void 0
          }
          drawBackground() {
            const {
              ctx: t,
              options: { backgroundColor: e },
              left: n,
              top: i,
              width: o,
              height: r,
            } = this
            e && (t.save(), (t.fillStyle = e), t.fillRect(n, i, o, r), t.restore())
          }
          getLineWidthForValue(t) {
            const e = this,
              n = e.options.grid
            if (!e._isVisible() || !n.display) return 0
            const i = e.ticks.findIndex((e) => e.value === t)
            if (i >= 0) {
              return n.setContext(e.getContext(i)).lineWidth
            }
            return 0
          }
          drawGrid(t) {
            const e = this,
              n = e.options.grid,
              i = e.ctx,
              o = e._gridLineItems || (e._gridLineItems = e._computeGridLineItems(t))
            let r, a
            const s = (t, e, n) => {
              n.width &&
                n.color &&
                (i.save(),
                (i.lineWidth = n.width),
                (i.strokeStyle = n.color),
                i.setLineDash(n.borderDash || []),
                (i.lineDashOffset = n.borderDashOffset),
                i.beginPath(),
                i.moveTo(t.x, t.y),
                i.lineTo(e.x, e.y),
                i.stroke(),
                i.restore())
            }
            if (n.display)
              for (r = 0, a = o.length; r < a; ++r) {
                const t = o[r]
                n.drawOnChartArea && s({ x: t.x1, y: t.y1 }, { x: t.x2, y: t.y2 }, t),
                  n.drawTicks &&
                    s(
                      { x: t.tx1, y: t.ty1 },
                      { x: t.tx2, y: t.ty2 },
                      {
                        color: t.tickColor,
                        width: t.tickWidth,
                        borderDash: t.tickBorderDash,
                        borderDashOffset: t.tickBorderDashOffset,
                      },
                    )
              }
          }
          drawBorder() {
            const t = this,
              {
                chart: e,
                ctx: n,
                options: { grid: i },
              } = t,
              o = i.setContext(t.getContext()),
              r = i.drawBorder ? o.borderWidth : 0
            if (!r) return
            const a = i.setContext(t.getContext(0)).lineWidth,
              s = t._borderValue
            let l, c, h, d
            t.isHorizontal()
              ? ((l = De(e, t.left, r) - r / 2), (c = De(e, t.right, a) + a / 2), (h = d = s))
              : ((h = De(e, t.top, r) - r / 2), (d = De(e, t.bottom, a) + a / 2), (l = c = s)),
              n.save(),
              (n.lineWidth = o.borderWidth),
              (n.strokeStyle = o.borderColor),
              n.beginPath(),
              n.moveTo(l, h),
              n.lineTo(c, d),
              n.stroke(),
              n.restore()
          }
          drawLabels(t) {
            const e = this
            if (!e.options.ticks.display) return
            const n = e.ctx,
              i = e._computeLabelArea()
            i && Le(n, i)
            const o = e._labelItems || (e._labelItems = e._computeLabelItems(t))
            let r, a
            for (r = 0, a = o.length; r < a; ++r) {
              const t = o[r],
                e = t.font,
                i = t.label
              t.backdrop &&
                ((n.fillStyle = t.backdrop.color),
                n.fillRect(t.backdrop.left, t.backdrop.top, t.backdrop.width, t.backdrop.height)),
                Fe(n, i, 0, t.textOffset, e, t)
            }
            i && Re(n)
          }
          drawTitle() {
            const {
              ctx: t,
              options: { position: e, title: n, reverse: i },
            } = this
            if (!n.display) return
            const o = Ke(n.font),
              r = qe(n.padding),
              a = n.align
            let s = o.lineHeight / 2
            'bottom' === e || 'center' === e || G(e)
              ? ((s += r.bottom), K(n.text) && (s += o.lineHeight * (n.text.length - 1)))
              : (s += r.top)
            const {
              titleX: l,
              titleY: c,
              maxWidth: h,
              rotation: d,
            } = (function (t, e, n, i) {
              const { top: o, left: r, bottom: a, right: s, chart: l } = t,
                { chartArea: c, scales: h } = l
              let d,
                u,
                f,
                p = 0
              const g = a - o,
                m = s - r
              if (t.isHorizontal()) {
                if (((u = Y(i, r, s)), G(n))) {
                  const t = Object.keys(n)[0],
                    i = n[t]
                  f = h[t].getPixelForValue(i) + g - e
                } else f = 'center' === n ? (c.bottom + c.top) / 2 + g - e : Mo(t, n, e)
                d = s - r
              } else {
                if (G(n)) {
                  const t = Object.keys(n)[0],
                    i = n[t]
                  u = h[t].getPixelForValue(i) - m + e
                } else u = 'center' === n ? (c.left + c.right) / 2 - m + e : Mo(t, n, e)
                ;(f = Y(i, a, o)), (p = 'left' === n ? -vt : vt)
              }
              return { titleX: u, titleY: f, maxWidth: d, rotation: p }
            })(this, s, e, a)
            Fe(t, n.text, 0, 0, o, {
              color: n.color,
              maxWidth: h,
              rotation: d,
              textAlign: Co(a, e, i),
              textBaseline: 'middle',
              translation: [l, c],
            })
          }
          draw(t) {
            const e = this
            e._isVisible() &&
              (e.drawBackground(), e.drawGrid(t), e.drawBorder(), e.drawTitle(), e.drawLabels(t))
          }
          _layers() {
            const t = this,
              e = t.options,
              n = (e.ticks && e.ticks.z) || 0,
              i = Q(e.grid && e.grid.z, -1)
            return t._isVisible() && t.draw === Do.prototype.draw
              ? [
                  {
                    z: i,
                    draw(e) {
                      t.drawBackground(), t.drawGrid(e), t.drawTitle()
                    },
                  },
                  {
                    z: i + 1,
                    draw() {
                      t.drawBorder()
                    },
                  },
                  {
                    z: n,
                    draw(e) {
                      t.drawLabels(e)
                    },
                  },
                ]
              : [
                  {
                    z: n,
                    draw(e) {
                      t.draw(e)
                    },
                  },
                ]
          }
          getMatchingVisibleMetas(t) {
            const e = this,
              n = e.chart.getSortedVisibleDatasetMetas(),
              i = e.axis + 'AxisID',
              o = []
            let r, a
            for (r = 0, a = n.length; r < a; ++r) {
              const a = n[r]
              a[i] !== e.id || (t && a.type !== t) || o.push(a)
            }
            return o
          }
          _resolveTickFontOptions(t) {
            return Ke(this.options.ticks.setContext(this.getContext(t)).font)
          }
          _maxDigits() {
            const t = this,
              e = t._resolveTickFontOptions(0).lineHeight
            return (t.isHorizontal() ? t.width : t.height) / e
          }
        }
        class Ao {
          constructor(t, e, n) {
            ;(this.type = t),
              (this.scope = e),
              (this.override = n),
              (this.items = Object.create(null))
          }
          isForType(t) {
            return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype)
          }
          register(t) {
            const e = this,
              n = Object.getPrototypeOf(t)
            let i
            ;(function (t) {
              return 'id' in t && 'defaults' in t
            })(n) && (i = e.register(n))
            const o = e.items,
              r = t.id,
              a = e.scope + '.' + r
            if (!r) throw new Error('class does not have id: ' + t)
            return (
              r in o ||
                ((o[r] = t),
                (function (t, e, n) {
                  const i = st(Object.create(null), [n ? Oe.get(n) : {}, Oe.get(e), t.defaults])
                  Oe.set(e, i),
                    t.defaultRoutes &&
                      (function (t, e) {
                        Object.keys(e).forEach((n) => {
                          const i = n.split('.'),
                            o = i.pop(),
                            r = [t].concat(i).join('.'),
                            a = e[n].split('.'),
                            s = a.pop(),
                            l = a.join('.')
                          Oe.route(r, o, l, s)
                        })
                      })(e, t.defaultRoutes)
                  t.descriptors && Oe.describe(e, t.descriptors)
                })(t, a, i),
                e.override && Oe.override(t.id, t.overrides)),
              a
            )
          }
          get(t) {
            return this.items[t]
          }
          unregister(t) {
            const e = this.items,
              n = t.id,
              i = this.scope
            n in e && delete e[n],
              i && n in Oe[i] && (delete Oe[i][n], this.override && delete we[n])
          }
        }
        var To = new (class {
          constructor() {
            ;(this.controllers = new Ao(mi, 'datasets', !0)),
              (this.elements = new Ao(xo, 'elements')),
              (this.plugins = new Ao(Object, 'plugins')),
              (this.scales = new Ao(Do, 'scales')),
              (this._typedRegistries = [this.controllers, this.scales, this.elements])
          }
          add() {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n]
            this._each('register', e)
          }
          remove() {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n]
            this._each('unregister', e)
          }
          addControllers() {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n]
            this._each('register', e, this.controllers)
          }
          addElements() {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n]
            this._each('register', e, this.elements)
          }
          addPlugins() {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n]
            this._each('register', e, this.plugins)
          }
          addScales() {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n]
            this._each('register', e, this.scales)
          }
          getController(t) {
            return this._get(t, this.controllers, 'controller')
          }
          getElement(t) {
            return this._get(t, this.elements, 'element')
          }
          getPlugin(t) {
            return this._get(t, this.plugins, 'plugin')
          }
          getScale(t) {
            return this._get(t, this.scales, 'scale')
          }
          removeControllers() {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n]
            this._each('unregister', e, this.controllers)
          }
          removeElements() {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n]
            this._each('unregister', e, this.elements)
          }
          removePlugins() {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n]
            this._each('unregister', e, this.plugins)
          }
          removeScales() {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n]
            this._each('unregister', e, this.scales)
          }
          _each(t, e, n) {
            const i = this
            ;[...e].forEach((e) => {
              const o = n || i._getRegistryForType(e)
              n || o.isForType(e) || (o === i.plugins && e.id)
                ? i._exec(t, o, e)
                : nt(e, (e) => {
                    const o = n || i._getRegistryForType(e)
                    i._exec(t, o, e)
                  })
            })
          }
          _exec(t, e, n) {
            const i = ut(t)
            et(n['before' + i], [], n), e[t](n), et(n['after' + i], [], n)
          }
          _getRegistryForType(t) {
            for (let e = 0; e < this._typedRegistries.length; e++) {
              const n = this._typedRegistries[e]
              if (n.isForType(t)) return n
            }
            return this.plugins
          }
          _get(t, e, n) {
            const i = e.get(t)
            if (void 0 === i) throw new Error('"' + t + '" is not a registered ' + n + '.')
            return i
          }
        })()
        class Eo {
          constructor() {
            this._init = []
          }
          notify(t, e, n, i) {
            const o = this
            'beforeInit' === e &&
              ((o._init = o._createDescriptors(t, !0)), o._notify(o._init, t, 'install'))
            const r = i ? o._descriptors(t).filter(i) : o._descriptors(t),
              a = o._notify(r, t, e, n)
            return (
              'destroy' === e && (o._notify(r, t, 'stop'), o._notify(o._init, t, 'uninstall')), a
            )
          }
          _notify(t, e, n, i) {
            i = i || {}
            for (const o of t) {
              const t = o.plugin
              if (!1 === et(t[n], [e, i, o.options], t) && i.cancelable) return !1
            }
            return !0
          }
          invalidate() {
            q(this._cache) || ((this._oldCache = this._cache), (this._cache = void 0))
          }
          _descriptors(t) {
            if (this._cache) return this._cache
            const e = (this._cache = this._createDescriptors(t))
            return this._notifyStateChanges(t), e
          }
          _createDescriptors(t, e) {
            const n = t && t.config,
              i = Q(n.options && n.options.plugins, {}),
              o = (function (t) {
                const e = [],
                  n = Object.keys(To.plugins.items)
                for (let o = 0; o < n.length; o++) e.push(To.getPlugin(n[o]))
                const i = t.plugins || []
                for (let o = 0; o < i.length; o++) {
                  const t = i[o]
                  ;-1 === e.indexOf(t) && e.push(t)
                }
                return e
              })(n)
            return !1 !== i || e
              ? (function (t, e, n, i) {
                  const o = [],
                    r = t.getContext()
                  for (let a = 0; a < e.length; a++) {
                    const s = e[a],
                      l = Lo(n[s.id], i)
                    null !== l && o.push({ plugin: s, options: Ro(t.config, s, l, r) })
                  }
                  return o
                })(t, o, i, e)
              : []
          }
          _notifyStateChanges(t) {
            const e = this._oldCache || [],
              n = this._cache,
              i = (t, e) => t.filter((t) => !e.some((e) => t.plugin.id === e.plugin.id))
            this._notify(i(e, n), t, 'stop'), this._notify(i(n, e), t, 'start')
          }
        }
        function Lo(t, e) {
          return e || !1 !== t ? (!0 === t ? {} : t) : null
        }
        function Ro(t, e, n, i) {
          const o = t.pluginScopeKeys(e),
            r = t.getOptionScopes(n, o)
          return t.createResolver(r, i, [''], { scriptable: !1, indexable: !1, allKeys: !0 })
        }
        function jo(t, e) {
          const n = Oe.datasets[t] || {}
          return ((e.datasets || {})[t] || {}).indexAxis || e.indexAxis || n.indexAxis || 'x'
        }
        function zo(t, e) {
          return 'x' === t || 'y' === t
            ? t
            : e.axis ||
                ('top' === (n = e.position) || 'bottom' === n
                  ? 'x'
                  : 'left' === n || 'right' === n
                  ? 'y'
                  : void 0) ||
                t.charAt(0).toLowerCase()
          var n
        }
        function Fo(t) {
          const e = t.options || (t.options = {})
          ;(e.plugins = Q(e.plugins, {})),
            (e.scales = (function (t, e) {
              const n = we[t.type] || { scales: {} },
                i = e.scales || {},
                o = jo(t.type, e),
                r = Object.create(null),
                a = Object.create(null)
              return (
                Object.keys(i).forEach((t) => {
                  const e = i[t],
                    s = zo(t, e),
                    l = (function (t, e) {
                      return t === e ? '_index_' : '_value_'
                    })(s, o),
                    c = n.scales || {}
                  ;(r[s] = r[s] || t),
                    (a[t] = lt(Object.create(null), [{ axis: s }, e, c[s], c[l]]))
                }),
                t.data.datasets.forEach((n) => {
                  const o = n.type || t.type,
                    s = n.indexAxis || jo(o, e),
                    l = (we[o] || {}).scales || {}
                  Object.keys(l).forEach((t) => {
                    const e = (function (t, e) {
                        let n = t
                        return (
                          '_index_' === t
                            ? (n = e)
                            : '_value_' === t && (n = 'x' === e ? 'y' : 'x'),
                          n
                        )
                      })(t, s),
                      o = n[e + 'AxisID'] || r[e] || e
                    ;(a[o] = a[o] || Object.create(null)), lt(a[o], [{ axis: e }, i[o], l[t]])
                  })
                }),
                Object.keys(a).forEach((t) => {
                  const e = a[t]
                  lt(e, [Oe.scales[e.type], Oe.scale])
                }),
                a
              )
            })(t, e))
        }
        function Io(t) {
          return ((t = t || {}).datasets = t.datasets || []), (t.labels = t.labels || []), t
        }
        const Vo = new Map(),
          Bo = new Set()
        function No(t, e) {
          let n = Vo.get(t)
          return n || ((n = e()), Vo.set(t, n), Bo.add(n)), n
        }
        const Wo = (t, e, n) => {
          const i = dt(e, n)
          void 0 !== i && t.add(i)
        }
        class Ho {
          constructor(t) {
            ;(this._config = (function (t) {
              return ((t = t || {}).data = Io(t.data)), Fo(t), t
            })(t)),
              (this._scopeCache = new Map()),
              (this._resolverCache = new Map())
          }
          get platform() {
            return this._config.platform
          }
          get type() {
            return this._config.type
          }
          set type(t) {
            this._config.type = t
          }
          get data() {
            return this._config.data
          }
          set data(t) {
            this._config.data = Io(t)
          }
          get options() {
            return this._config.options
          }
          set options(t) {
            this._config.options = t
          }
          get plugins() {
            return this._config.plugins
          }
          update() {
            const t = this._config
            this.clearCache(), Fo(t)
          }
          clearCache() {
            this._scopeCache.clear(), this._resolverCache.clear()
          }
          datasetScopeKeys(t) {
            return No(t, () => [['datasets.'.concat(t), '']])
          }
          datasetAnimationScopeKeys(t, e) {
            return No(''.concat(t, '.transition.').concat(e), () => [
              ['datasets.'.concat(t, '.transitions.').concat(e), 'transitions.'.concat(e)],
              ['datasets.'.concat(t), ''],
            ])
          }
          datasetElementScopeKeys(t, e) {
            return No(''.concat(t, '-').concat(e), () => [
              [
                'datasets.'.concat(t, '.elements.').concat(e),
                'datasets.'.concat(t),
                'elements.'.concat(e),
                '',
              ],
            ])
          }
          pluginScopeKeys(t) {
            const e = t.id,
              n = this.type
            return No(''.concat(n, '-plugin-').concat(e), () => [
              ['plugins.'.concat(e), ...(t.additionalOptionScopes || [])],
            ])
          }
          _cachedScopes(t, e) {
            const n = this._scopeCache
            let i = n.get(t)
            return (i && !e) || ((i = new Map()), n.set(t, i)), i
          }
          getOptionScopes(t, e, n) {
            const { options: i, type: o } = this,
              r = this._cachedScopes(t, n),
              a = r.get(e)
            if (a) return a
            const s = new Set()
            e.forEach((e) => {
              t && (s.add(t), e.forEach((e) => Wo(s, t, e))),
                e.forEach((t) => Wo(s, i, t)),
                e.forEach((t) => Wo(s, we[o] || {}, t)),
                e.forEach((t) => Wo(s, Oe, t)),
                e.forEach((t) => Wo(s, Me, t))
            })
            const l = Array.from(s)
            return 0 === l.length && l.push(Object.create(null)), Bo.has(e) && r.set(e, l), l
          }
          chartOptionScopes() {
            const { options: t, type: e } = this
            return [t, we[e] || {}, Oe.datasets[e] || {}, { type: e }, Oe, Me]
          }
          resolveNamedOptions(t, e, n) {
            let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ['']
            const o = { $shared: !0 },
              { resolver: r, subPrefixes: a } = $o(this._resolverCache, t, i)
            let s = r
            if (
              (function (t, e) {
                const { isScriptable: n, isIndexable: i } = an(t)
                for (const o of e) if ((n(o) && pt(t[o])) || (i(o) && K(t[o]))) return !0
                return !1
              })(r, e)
            ) {
              o.$shared = !1
              s = rn(r, (n = pt(n) ? n() : n), this.createResolver(t, n, a))
            }
            for (const l of e) o[l] = s[l]
            return o
          }
          createResolver(t, e) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [''],
              i = arguments.length > 3 ? arguments[3] : void 0
            const { resolver: o } = $o(this._resolverCache, t, n)
            return G(e) ? rn(o, e, void 0, i) : o
          }
        }
        function $o(t, e, n) {
          let i = t.get(e)
          i || ((i = new Map()), t.set(e, i))
          const o = n.join()
          let r = i.get(o)
          if (!r) {
            ;(r = {
              resolver: on(e, n),
              subPrefixes: n.filter((t) => !t.toLowerCase().includes('hover')),
            }),
              i.set(o, r)
          }
          return r
        }
        const Yo = ['top', 'bottom', 'left', 'right', 'chartArea']
        function Uo(t, e) {
          return 'top' === t || 'bottom' === t || (-1 === Yo.indexOf(t) && 'x' === e)
        }
        function Xo(t, e) {
          return function (n, i) {
            return n[t] === i[t] ? n[e] - i[e] : n[t] - i[t]
          }
        }
        function qo(t) {
          const e = t.chart,
            n = e.options.animation
          e.notifyPlugins('afterRender'), et(n && n.onComplete, [t], e)
        }
        function Ko(t) {
          const e = t.chart,
            n = e.options.animation
          et(n && n.onProgress, [t], e)
        }
        function Go(t) {
          return (
            On() && 'string' === typeof t
              ? (t = document.getElementById(t))
              : t && t.length && (t = t[0]),
            t && t.canvas && (t = t.canvas),
            t
          )
        }
        const Zo = {},
          Jo = (t) => {
            const e = Go(t)
            return Object.values(Zo)
              .filter((t) => t.canvas === e)
              .pop()
          }
        class Qo {
          constructor(t, e) {
            const n = this,
              i = (this.config = new Ho(e)),
              o = Go(t),
              r = Jo(o)
            if (r)
              throw new Error(
                "Canvas is already in use. Chart with ID '" +
                  r.id +
                  "' must be destroyed before the canvas can be reused.",
              )
            const a = i.createResolver(i.chartOptionScopes(), n.getContext())
            this.platform = new (i.platform ||
              (function (t) {
                return !On() ||
                  ('undefined' !== typeof OffscreenCanvas && t instanceof OffscreenCanvas)
                  ? io
                  : bo
              })(o))()
            const s = n.platform.acquireContext(o, a.aspectRatio),
              l = s && s.canvas,
              c = l && l.height,
              h = l && l.width
            ;(this.id = X()),
              (this.ctx = s),
              (this.canvas = l),
              (this.width = h),
              (this.height = c),
              (this._options = a),
              (this._aspectRatio = this.aspectRatio),
              (this._layers = []),
              (this._metasets = []),
              (this._stacks = void 0),
              (this.boxes = []),
              (this.currentDevicePixelRatio = void 0),
              (this.chartArea = void 0),
              (this._active = []),
              (this._lastEvent = void 0),
              (this._listeners = {}),
              (this._responsiveListeners = void 0),
              (this._sortedMetasets = []),
              (this.scales = {}),
              (this._plugins = new Eo()),
              (this.$proxies = {}),
              (this._hiddenIndices = {}),
              (this.attached = !1),
              (this._animationsDisabled = void 0),
              (this.$context = void 0),
              (this._doResize = (function (t, e) {
                let n
                return function () {
                  return e ? (clearTimeout(n), (n = setTimeout(t, e))) : t(), e
                }
              })(() => this.update('resize'), a.resizeDelay || 0)),
              (Zo[n.id] = n),
              s && l
                ? (Qn.listen(n, 'complete', qo),
                  Qn.listen(n, 'progress', Ko),
                  n._initialize(),
                  n.attached && n.update())
                : console.error("Failed to create chart: can't acquire context from the given item")
          }
          get aspectRatio() {
            const {
              options: { aspectRatio: t, maintainAspectRatio: e },
              width: n,
              height: i,
              _aspectRatio: o,
            } = this
            return q(t) ? (e && o ? o : i ? n / i : null) : t
          }
          get data() {
            return this.config.data
          }
          set data(t) {
            this.config.data = t
          }
          get options() {
            return this._options
          }
          set options(t) {
            this.config.options = t
          }
          _initialize() {
            const t = this
            return (
              t.notifyPlugins('beforeInit'),
              t.options.responsive ? t.resize() : jn(t, t.options.devicePixelRatio),
              t.bindEvents(),
              t.notifyPlugins('afterInit'),
              t
            )
          }
          clear() {
            return Ae(this.canvas, this.ctx), this
          }
          stop() {
            return Qn.stop(this), this
          }
          resize(t, e) {
            Qn.running(this)
              ? (this._resizeBeforeDraw = { width: t, height: e })
              : this._resize(t, e)
          }
          _resize(t, e) {
            const n = this,
              i = n.options,
              o = n.canvas,
              r = i.maintainAspectRatio && n.aspectRatio,
              a = n.platform.getMaximumSize(o, t, e, r),
              s = i.devicePixelRatio || n.platform.getDevicePixelRatio()
            ;(n.width = a.width),
              (n.height = a.height),
              (n._aspectRatio = n.aspectRatio),
              jn(n, s, !0) &&
                (n.notifyPlugins('resize', { size: a }),
                et(i.onResize, [n, a], n),
                n.attached && n._doResize() && n.render())
          }
          ensureScalesHaveIDs() {
            nt(this.options.scales || {}, (t, e) => {
              t.id = e
            })
          }
          buildOrUpdateScales() {
            const t = this,
              e = t.options,
              n = e.scales,
              i = t.scales,
              o = Object.keys(i).reduce((t, e) => ((t[e] = !1), t), {})
            let r = []
            n &&
              (r = r.concat(
                Object.keys(n).map((t) => {
                  const e = n[t],
                    i = zo(t, e),
                    o = 'r' === i,
                    r = 'x' === i
                  return {
                    options: e,
                    dposition: o ? 'chartArea' : r ? 'bottom' : 'left',
                    dtype: o ? 'radialLinear' : r ? 'category' : 'linear',
                  }
                }),
              )),
              nt(r, (n) => {
                const r = n.options,
                  a = r.id,
                  s = zo(a, r),
                  l = Q(r.type, n.dtype)
                ;(void 0 !== r.position && Uo(r.position, s) === Uo(n.dposition)) ||
                  (r.position = n.dposition),
                  (o[a] = !0)
                let c = null
                if (a in i && i[a].type === l) c = i[a]
                else {
                  ;(c = new (To.getScale(l))({ id: a, type: l, ctx: t.ctx, chart: t })),
                    (i[c.id] = c)
                }
                c.init(r, e)
              }),
              nt(o, (t, e) => {
                t || delete i[e]
              }),
              nt(i, (e) => {
                eo.configure(t, e, e.options), eo.addBox(t, e)
              })
          }
          _updateMetasets() {
            const t = this,
              e = t._metasets,
              n = t.data.datasets.length,
              i = e.length
            if ((e.sort((t, e) => t.index - e.index), i > n)) {
              for (let e = n; e < i; ++e) t._destroyDatasetMeta(e)
              e.splice(n, i - n)
            }
            t._sortedMetasets = e.slice(0).sort(Xo('order', 'index'))
          }
          _removeUnreferencedMetasets() {
            const t = this,
              {
                _metasets: e,
                data: { datasets: n },
              } = t
            e.length > n.length && delete t._stacks,
              e.forEach((e, i) => {
                0 === n.filter((t) => t === e._dataset).length && t._destroyDatasetMeta(i)
              })
          }
          buildOrUpdateControllers() {
            const t = this,
              e = [],
              n = t.data.datasets
            let i, o
            for (t._removeUnreferencedMetasets(), i = 0, o = n.length; i < o; i++) {
              const o = n[i]
              let r = t.getDatasetMeta(i)
              const a = o.type || t.config.type
              if (
                (r.type && r.type !== a && (t._destroyDatasetMeta(i), (r = t.getDatasetMeta(i))),
                (r.type = a),
                (r.indexAxis = o.indexAxis || jo(a, t.options)),
                (r.order = o.order || 0),
                (r.index = i),
                (r.label = '' + o.label),
                (r.visible = t.isDatasetVisible(i)),
                r.controller)
              )
                r.controller.updateIndex(i), r.controller.linkScales()
              else {
                const n = To.getController(a),
                  { datasetElementType: o, dataElementType: s } = Oe.datasets[a]
                Object.assign(n.prototype, {
                  dataElementType: To.getElement(s),
                  datasetElementType: o && To.getElement(o),
                }),
                  (r.controller = new n(t, i)),
                  e.push(r.controller)
              }
            }
            return t._updateMetasets(), e
          }
          _resetElements() {
            const t = this
            nt(
              t.data.datasets,
              (e, n) => {
                t.getDatasetMeta(n).controller.reset()
              },
              t,
            )
          }
          reset() {
            this._resetElements(), this.notifyPlugins('reset')
          }
          update(t) {
            const e = this,
              n = e.config
            n.update(),
              (e._options = n.createResolver(n.chartOptionScopes(), e.getContext())),
              nt(e.scales, (t) => {
                eo.removeBox(e, t)
              })
            const i = (e._animationsDisabled = !e.options.animation)
            e.ensureScalesHaveIDs(), e.buildOrUpdateScales()
            if (
              ((((t, e) => {
                if (t.size !== e.size) return !1
                for (const n of t) if (!e.has(n)) return !1
                return !0
              })(new Set(Object.keys(e._listeners)), new Set(e.options.events)) &&
                !!this._responsiveListeners === e.options.responsive) ||
                (e.unbindEvents(), e.bindEvents()),
              e._plugins.invalidate(),
              !1 === e.notifyPlugins('beforeUpdate', { mode: t, cancelable: !0 }))
            )
              return
            const o = e.buildOrUpdateControllers()
            e.notifyPlugins('beforeElementsUpdate')
            let r = 0
            for (let a = 0, s = e.data.datasets.length; a < s; a++) {
              const { controller: t } = e.getDatasetMeta(a),
                n = !i && -1 === o.indexOf(t)
              t.buildOrUpdateElements(n), (r = Math.max(+t.getMaxOverflow(), r))
            }
            ;(e._minPadding = r),
              e._updateLayout(r),
              i ||
                nt(o, (t) => {
                  t.reset()
                }),
              e._updateDatasets(t),
              e.notifyPlugins('afterUpdate', { mode: t }),
              e._layers.sort(Xo('z', '_idx')),
              e._lastEvent && e._eventHandler(e._lastEvent, !0),
              e.render()
          }
          _updateLayout(t) {
            const e = this
            if (!1 === e.notifyPlugins('beforeLayout', { cancelable: !0 })) return
            eo.update(e, e.width, e.height, t)
            const n = e.chartArea,
              i = n.width <= 0 || n.height <= 0
            ;(e._layers = []),
              nt(
                e.boxes,
                (t) => {
                  ;(i && 'chartArea' === t.position) ||
                    (t.configure && t.configure(), e._layers.push(...t._layers()))
                },
                e,
              ),
              e._layers.forEach((t, e) => {
                t._idx = e
              }),
              e.notifyPlugins('afterLayout')
          }
          _updateDatasets(t) {
            const e = this,
              n = 'function' === typeof t
            if (!1 !== e.notifyPlugins('beforeDatasetsUpdate', { mode: t, cancelable: !0 })) {
              for (let i = 0, o = e.data.datasets.length; i < o; ++i)
                e._updateDataset(i, n ? t({ datasetIndex: i }) : t)
              e.notifyPlugins('afterDatasetsUpdate', { mode: t })
            }
          }
          _updateDataset(t, e) {
            const n = this,
              i = n.getDatasetMeta(t),
              o = { meta: i, index: t, mode: e, cancelable: !0 }
            !1 !== n.notifyPlugins('beforeDatasetUpdate', o) &&
              (i.controller._update(e),
              (o.cancelable = !1),
              n.notifyPlugins('afterDatasetUpdate', o))
          }
          render() {
            const t = this
            !1 !== t.notifyPlugins('beforeRender', { cancelable: !0 }) &&
              (Qn.has(t)
                ? t.attached && !Qn.running(t) && Qn.start(t)
                : (t.draw(), qo({ chart: t })))
          }
          draw() {
            const t = this
            let e
            if (t._resizeBeforeDraw) {
              const { width: e, height: n } = t._resizeBeforeDraw
              t._resize(e, n), (t._resizeBeforeDraw = null)
            }
            if ((t.clear(), t.width <= 0 || t.height <= 0)) return
            if (!1 === t.notifyPlugins('beforeDraw', { cancelable: !0 })) return
            const n = t._layers
            for (e = 0; e < n.length && n[e].z <= 0; ++e) n[e].draw(t.chartArea)
            for (t._drawDatasets(); e < n.length; ++e) n[e].draw(t.chartArea)
            t.notifyPlugins('afterDraw')
          }
          _getSortedDatasetMetas(t) {
            const e = this._sortedMetasets,
              n = []
            let i, o
            for (i = 0, o = e.length; i < o; ++i) {
              const o = e[i]
              ;(t && !o.visible) || n.push(o)
            }
            return n
          }
          getSortedVisibleDatasetMetas() {
            return this._getSortedDatasetMetas(!0)
          }
          _drawDatasets() {
            const t = this
            if (!1 === t.notifyPlugins('beforeDatasetsDraw', { cancelable: !0 })) return
            const e = t.getSortedVisibleDatasetMetas()
            for (let n = e.length - 1; n >= 0; --n) t._drawDataset(e[n])
            t.notifyPlugins('afterDatasetsDraw')
          }
          _drawDataset(t) {
            const e = this,
              n = e.ctx,
              i = t._clip,
              o = !i.disabled,
              r = e.chartArea,
              a = { meta: t, index: t.index, cancelable: !0 }
            !1 !== e.notifyPlugins('beforeDatasetDraw', a) &&
              (o &&
                Le(n, {
                  left: !1 === i.left ? 0 : r.left - i.left,
                  right: !1 === i.right ? e.width : r.right + i.right,
                  top: !1 === i.top ? 0 : r.top - i.top,
                  bottom: !1 === i.bottom ? e.height : r.bottom + i.bottom,
                }),
              t.controller.draw(),
              o && Re(n),
              (a.cancelable = !1),
              e.notifyPlugins('afterDatasetDraw', a))
          }
          getElementsAtEventForMode(t, e, n, i) {
            const o = Wi.modes[e]
            return 'function' === typeof o ? o(this, t, n, i) : []
          }
          getDatasetMeta(t) {
            const e = this.data.datasets[t],
              n = this._metasets
            let i = n.filter((t) => t && t._dataset === e).pop()
            return (
              i ||
                ((i = {
                  type: null,
                  data: [],
                  dataset: null,
                  controller: null,
                  hidden: null,
                  xAxisID: null,
                  yAxisID: null,
                  order: (e && e.order) || 0,
                  index: t,
                  _dataset: e,
                  _parsed: [],
                  _sorted: !1,
                }),
                n.push(i)),
              i
            )
          }
          getContext() {
            return this.$context || (this.$context = { chart: this, type: 'chart' })
          }
          getVisibleDatasetCount() {
            return this.getSortedVisibleDatasetMetas().length
          }
          isDatasetVisible(t) {
            const e = this.data.datasets[t]
            if (!e) return !1
            const n = this.getDatasetMeta(t)
            return 'boolean' === typeof n.hidden ? !n.hidden : !e.hidden
          }
          setDatasetVisibility(t, e) {
            this.getDatasetMeta(t).hidden = !e
          }
          toggleDataVisibility(t) {
            this._hiddenIndices[t] = !this._hiddenIndices[t]
          }
          getDataVisibility(t) {
            return !this._hiddenIndices[t]
          }
          _updateVisibility(t, e, n) {
            const i = this,
              o = n ? 'show' : 'hide',
              r = i.getDatasetMeta(t),
              a = r.controller._resolveAnimations(void 0, o)
            ft(e)
              ? ((r.data[e].hidden = !n), i.update())
              : (i.setDatasetVisibility(t, n),
                a.update(r, { visible: n }),
                i.update((e) => (e.datasetIndex === t ? o : void 0)))
          }
          hide(t, e) {
            this._updateVisibility(t, e, !1)
          }
          show(t, e) {
            this._updateVisibility(t, e, !0)
          }
          _destroyDatasetMeta(t) {
            const e = this,
              n = e._metasets && e._metasets[t]
            n && n.controller && (n.controller._destroy(), delete e._metasets[t])
          }
          destroy() {
            const t = this,
              { canvas: e, ctx: n } = t
            let i, o
            for (t.stop(), Qn.remove(t), i = 0, o = t.data.datasets.length; i < o; ++i)
              t._destroyDatasetMeta(i)
            t.config.clearCache(),
              e &&
                (t.unbindEvents(),
                Ae(e, n),
                t.platform.releaseContext(n),
                (t.canvas = null),
                (t.ctx = null)),
              t.notifyPlugins('destroy'),
              delete Zo[t.id]
          }
          toBase64Image() {
            return this.canvas.toDataURL(...arguments)
          }
          bindEvents() {
            this.bindUserEvents(),
              this.options.responsive ? this.bindResponsiveEvents() : (this.attached = !0)
          }
          bindUserEvents() {
            const t = this,
              e = t._listeners,
              n = t.platform,
              i = function (e, n, i) {
                ;(e.offsetX = n), (e.offsetY = i), t._eventHandler(e)
              }
            nt(t.options.events, (o) =>
              ((i, o) => {
                n.addEventListener(t, i, o), (e[i] = o)
              })(o, i),
            )
          }
          bindResponsiveEvents() {
            const t = this
            t._responsiveListeners || (t._responsiveListeners = {})
            const e = t._responsiveListeners,
              n = t.platform,
              i = (i, o) => {
                n.addEventListener(t, i, o), (e[i] = o)
              },
              o = (i, o) => {
                e[i] && (n.removeEventListener(t, i, o), delete e[i])
              },
              r = (e, n) => {
                t.canvas && t.resize(e, n)
              }
            let a
            const s = () => {
              o('attach', s), (t.attached = !0), t.resize(), i('resize', r), i('detach', a)
            }
            ;(a = () => {
              ;(t.attached = !1), o('resize', r), i('attach', s)
            }),
              n.isAttached(t.canvas) ? s() : a()
          }
          unbindEvents() {
            const t = this
            nt(t._listeners, (e, n) => {
              t.platform.removeEventListener(t, n, e)
            }),
              (t._listeners = {}),
              nt(t._responsiveListeners, (e, n) => {
                t.platform.removeEventListener(t, n, e)
              }),
              (t._responsiveListeners = void 0)
          }
          updateHoverStyle(t, e, n) {
            const i = n ? 'set' : 'remove'
            let o, r, a, s
            for (
              'dataset' === e &&
                ((o = this.getDatasetMeta(t[0].datasetIndex)),
                o.controller['_' + i + 'DatasetHoverStyle']()),
                a = 0,
                s = t.length;
              a < s;
              ++a
            ) {
              r = t[a]
              const e = r && this.getDatasetMeta(r.datasetIndex).controller
              e && e[i + 'HoverStyle'](r.element, r.datasetIndex, r.index)
            }
          }
          getActiveElements() {
            return this._active || []
          }
          setActiveElements(t) {
            const e = this,
              n = e._active || [],
              i = t.map((t) => {
                let { datasetIndex: n, index: i } = t
                const o = e.getDatasetMeta(n)
                if (!o) throw new Error('No dataset found at index ' + n)
                return { datasetIndex: n, element: o.data[i], index: i }
              })
            !it(i, n) && ((e._active = i), e._updateHoverStyles(i, n))
          }
          notifyPlugins(t, e, n) {
            return this._plugins.notify(this, t, e, n)
          }
          _updateHoverStyles(t, e, n) {
            const i = this,
              o = i.options.hover,
              r = (t, e) =>
                t.filter(
                  (t) => !e.some((e) => t.datasetIndex === e.datasetIndex && t.index === e.index),
                ),
              a = r(e, t),
              s = n ? t : r(t, e)
            a.length && i.updateHoverStyle(a, o.mode, !1),
              s.length && o.mode && i.updateHoverStyle(s, o.mode, !0)
          }
          _eventHandler(t, e) {
            const n = this,
              i = { event: t, replay: e, cancelable: !0 },
              o = (e) => (e.options.events || this.options.events).includes(t.type)
            if (!1 === n.notifyPlugins('beforeEvent', i, o)) return
            const r = n._handleEvent(t, e)
            return (
              (i.cancelable = !1),
              n.notifyPlugins('afterEvent', i, o),
              (r || i.changed) && n.render(),
              n
            )
          }
          _handleEvent(t, e) {
            const n = this,
              { _active: i = [], options: o } = n,
              r = o.hover,
              a = e
            let s = [],
              l = !1,
              c = null
            return (
              'mouseout' !== t.type &&
                ((s = n.getElementsAtEventForMode(t, r.mode, r, a)),
                (c = 'click' === t.type ? n._lastEvent : t)),
              (n._lastEvent = null),
              Ee(t, n.chartArea, n._minPadding) &&
                (et(o.onHover, [t, s, n], n),
                ('mouseup' !== t.type && 'click' !== t.type && 'contextmenu' !== t.type) ||
                  et(o.onClick, [t, s, n], n)),
              (l = !it(s, i)),
              (l || e) && ((n._active = s), n._updateHoverStyles(s, i, e)),
              (n._lastEvent = c),
              l
            )
          }
        }
        const tr = () => nt(Qo.instances, (t) => t._plugins.invalidate()),
          er = !0
        function nr(t, e, n) {
          const { startAngle: i, pixelMargin: o, x: r, y: a, outerRadius: s, innerRadius: l } = e
          let c = o / s
          t.beginPath(),
            t.arc(r, a, s, i - c, n + c),
            l > o
              ? ((c = o / l), t.arc(r, a, l, n + c, i - c, !0))
              : t.arc(r, a, o, n + vt, i - vt),
            t.closePath(),
            t.clip()
        }
        function ir(t, e, n, i) {
          const o = Ye(t.options.borderRadius, ['outerStart', 'outerEnd', 'innerStart', 'innerEnd'])
          const r = (n - e) / 2,
            a = Math.min(r, (i * e) / 2),
            s = (t) => {
              const e = ((n - Math.min(r, t)) * i) / 2
              return zt(t, 0, Math.min(r, e))
            }
          return {
            outerStart: s(o.outerStart),
            outerEnd: s(o.outerEnd),
            innerStart: zt(o.innerStart, 0, a),
            innerEnd: zt(o.innerEnd, 0, a),
          }
        }
        function or(t, e, n, i) {
          return { x: n + t * Math.cos(e), y: i + t * Math.sin(e) }
        }
        function rr(t, e, n, i, o) {
          const { x: r, y: a, startAngle: s, pixelMargin: l, innerRadius: c } = e,
            h = Math.max(e.outerRadius + i + n - l, 0),
            d = c > 0 ? c + i + n + l : 0
          let u = 0
          const f = o - s
          if (i) {
            const t = ((c > 0 ? c - i : 0) + (h > 0 ? h - i : 0)) / 2
            u = (f - (0 !== t ? (f * t) / (t + i) : f)) / 2
          }
          const p = (f - Math.max(0.001, f * h - n / gt) / h) / 2,
            g = s + p + u,
            m = o - p - u,
            { outerStart: b, outerEnd: x, innerStart: y, innerEnd: v } = ir(e, d, h, m - g),
            _ = h - b,
            w = h - x,
            M = g + b / _,
            k = m - x / w,
            S = d + y,
            O = d + v,
            P = g + y / S,
            C = m - v / O
          if ((t.beginPath(), t.arc(r, a, h, M, k), x > 0)) {
            const e = or(w, k, r, a)
            t.arc(e.x, e.y, x, k, m + vt)
          }
          const D = or(O, m, r, a)
          if ((t.lineTo(D.x, D.y), v > 0)) {
            const e = or(O, C, r, a)
            t.arc(e.x, e.y, v, m + vt, C + Math.PI)
          }
          if ((t.arc(r, a, d, m - v / d, g + y / d, !0), y > 0)) {
            const e = or(S, P, r, a)
            t.arc(e.x, e.y, y, P + Math.PI, g - vt)
          }
          const A = or(_, g, r, a)
          if ((t.lineTo(A.x, A.y), b > 0)) {
            const e = or(_, M, r, a)
            t.arc(e.x, e.y, b, g - vt, M)
          }
          t.closePath()
        }
        function ar(t, e, n, i, o) {
          const { options: r } = e,
            a = 'inner' === r.borderAlign
          r.borderWidth &&
            (a
              ? ((t.lineWidth = 2 * r.borderWidth), (t.lineJoin = 'round'))
              : ((t.lineWidth = r.borderWidth), (t.lineJoin = 'bevel')),
            e.fullCircles &&
              (function (t, e, n) {
                const { x: i, y: o, startAngle: r, pixelMargin: a, fullCircles: s } = e,
                  l = Math.max(e.outerRadius - a, 0),
                  c = e.innerRadius + a
                let h
                for (
                  n && nr(t, e, r + mt), t.beginPath(), t.arc(i, o, c, r + mt, r, !0), h = 0;
                  h < s;
                  ++h
                )
                  t.stroke()
                for (t.beginPath(), t.arc(i, o, l, r, r + mt), h = 0; h < s; ++h) t.stroke()
              })(t, e, a),
            a && nr(t, e, o),
            rr(t, e, n, i, o),
            t.stroke())
        }
        Object.defineProperties(Qo, {
          defaults: { enumerable: er, value: Oe },
          instances: { enumerable: er, value: Zo },
          overrides: { enumerable: er, value: we },
          registry: { enumerable: er, value: To },
          version: { enumerable: er, value: '3.5.1' },
          getChart: { enumerable: er, value: Jo },
          register: {
            enumerable: er,
            value: function () {
              To.add(...arguments), tr()
            },
          },
          unregister: {
            enumerable: er,
            value: function () {
              To.remove(...arguments), tr()
            },
          },
        })
        class sr extends xo {
          constructor(t) {
            super(),
              (this.options = void 0),
              (this.circumference = void 0),
              (this.startAngle = void 0),
              (this.endAngle = void 0),
              (this.innerRadius = void 0),
              (this.outerRadius = void 0),
              (this.pixelMargin = 0),
              (this.fullCircles = 0),
              t && Object.assign(this, t)
          }
          inRange(t, e, n) {
            const i = this.getProps(['x', 'y'], n),
              { angle: o, distance: r } = (function (t, e) {
                const n = e.x - t.x,
                  i = e.y - t.y,
                  o = Math.sqrt(n * n + i * i)
                let r = Math.atan2(i, n)
                return r < -0.5 * gt && (r += mt), { angle: r, distance: o }
              })(i, { x: t, y: e }),
              {
                startAngle: a,
                endAngle: s,
                innerRadius: l,
                outerRadius: c,
                circumference: h,
              } = this.getProps(
                ['startAngle', 'endAngle', 'innerRadius', 'outerRadius', 'circumference'],
                n,
              ),
              d = this.options.spacing / 2
            return (h >= mt || jt(o, a, s)) && r >= l + d && r <= c + d
          }
          getCenterPoint(t) {
            const {
                x: e,
                y: n,
                startAngle: i,
                endAngle: o,
                innerRadius: r,
                outerRadius: a,
              } = this.getProps(
                ['x', 'y', 'startAngle', 'endAngle', 'innerRadius', 'outerRadius', 'circumference'],
                t,
              ),
              { offset: s, spacing: l } = this.options,
              c = (i + o) / 2,
              h = (r + a + l + s) / 2
            return { x: e + Math.cos(c) * h, y: n + Math.sin(c) * h }
          }
          tooltipPosition(t) {
            return this.getCenterPoint(t)
          }
          draw(t) {
            const e = this,
              { options: n, circumference: i } = e,
              o = (n.offset || 0) / 2,
              r = (n.spacing || 0) / 2
            if (
              ((e.pixelMargin = 'inner' === n.borderAlign ? 0.33 : 0),
              (e.fullCircles = i > mt ? Math.floor(i / mt) : 0),
              0 === i || e.innerRadius < 0 || e.outerRadius < 0)
            )
              return
            t.save()
            let a = 0
            if (o) {
              a = o / 2
              const n = (e.startAngle + e.endAngle) / 2
              t.translate(Math.cos(n) * a, Math.sin(n) * a), e.circumference >= gt && (a = o)
            }
            ;(t.fillStyle = n.backgroundColor), (t.strokeStyle = n.borderColor)
            const s = (function (t, e, n, i) {
              const { fullCircles: o, startAngle: r, circumference: a } = e
              let s = e.endAngle
              if (o) {
                rr(t, e, n, i, r + mt)
                for (let e = 0; e < o; ++e) t.fill()
                isNaN(a) || ((s = r + (a % mt)), a % mt === 0 && (s += mt))
              }
              return rr(t, e, n, i, s), t.fill(), s
            })(t, e, a, r)
            ar(t, e, a, r, s), t.restore()
          }
        }
        function lr(t, e) {
          let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e
          ;(t.lineCap = Q(n.borderCapStyle, e.borderCapStyle)),
            t.setLineDash(Q(n.borderDash, e.borderDash)),
            (t.lineDashOffset = Q(n.borderDashOffset, e.borderDashOffset)),
            (t.lineJoin = Q(n.borderJoinStyle, e.borderJoinStyle)),
            (t.lineWidth = Q(n.borderWidth, e.borderWidth)),
            (t.strokeStyle = Q(n.borderColor, e.borderColor))
        }
        function cr(t, e, n) {
          t.lineTo(n.x, n.y)
        }
        function hr(t, e) {
          let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
          const i = t.length,
            { start: o = 0, end: r = i - 1 } = n,
            { start: a, end: s } = e,
            l = Math.max(o, a),
            c = Math.min(r, s),
            h = (o < a && r < a) || (o > s && r > s)
          return { count: i, start: l, loop: e.loop, ilen: c < l && !h ? i + c - l : c - l }
        }
        function dr(t, e, n, i) {
          const { points: o, options: r } = e,
            { count: a, start: s, loop: l, ilen: c } = hr(o, n, i),
            h = (function (t) {
              return t.stepped ? je : t.tension || 'monotone' === t.cubicInterpolationMode ? ze : cr
            })(r)
          let d,
            u,
            f,
            { move: p = !0, reverse: g } = i || {}
          for (d = 0; d <= c; ++d)
            (u = o[(s + (g ? c - d : d)) % a]),
              u.skip || (p ? (t.moveTo(u.x, u.y), (p = !1)) : h(t, f, u, g, r.stepped), (f = u))
          return l && ((u = o[(s + (g ? c : 0)) % a]), h(t, f, u, g, r.stepped)), !!l
        }
        function ur(t, e, n, i) {
          const o = e.points,
            { count: r, start: a, ilen: s } = hr(o, n, i),
            { move: l = !0, reverse: c } = i || {}
          let h,
            d,
            u,
            f,
            p,
            g,
            m = 0,
            b = 0
          const x = (t) => (a + (c ? s - t : t)) % r,
            y = () => {
              f !== p && (t.lineTo(m, p), t.lineTo(m, f), t.lineTo(m, g))
            }
          for (l && ((d = o[x(0)]), t.moveTo(d.x, d.y)), h = 0; h <= s; ++h) {
            if (((d = o[x(h)]), d.skip)) continue
            const e = d.x,
              n = d.y,
              i = 0 | e
            i === u
              ? (n < f ? (f = n) : n > p && (p = n), (m = (b * m + e) / ++b))
              : (y(), t.lineTo(e, n), (u = i), (b = 0), (f = p = n)),
              (g = n)
          }
          y()
        }
        function fr(t) {
          const e = t.options,
            n = e.borderDash && e.borderDash.length
          return !t._decimated &&
            !t._loop &&
            !e.tension &&
            'monotone' !== e.cubicInterpolationMode &&
            !e.stepped &&
            !n
            ? ur
            : dr
        }
        ;(sr.id = 'arc'),
          (sr.defaults = {
            borderAlign: 'center',
            borderColor: '#fff',
            borderRadius: 0,
            borderWidth: 2,
            offset: 0,
            spacing: 0,
            angle: void 0,
          }),
          (sr.defaultRoutes = { backgroundColor: 'backgroundColor' })
        const pr = 'function' === typeof Path2D
        function gr(t, e, n, i) {
          pr && 1 === e.segments.length
            ? (function (t, e, n, i) {
                let o = e._path
                o || ((o = e._path = new Path2D()), e.path(o, n, i) && o.closePath()),
                  lr(t, e.options),
                  t.stroke(o)
              })(t, e, n, i)
            : (function (t, e, n, i) {
                const { segments: o, options: r } = e,
                  a = fr(e)
                for (const s of o)
                  lr(t, r, s.style),
                    t.beginPath(),
                    a(t, e, s, { start: n, end: n + i - 1 }) && t.closePath(),
                    t.stroke()
              })(t, e, n, i)
        }
        class mr extends xo {
          constructor(t) {
            super(),
              (this.animated = !0),
              (this.options = void 0),
              (this._loop = void 0),
              (this._fullLoop = void 0),
              (this._path = void 0),
              (this._points = void 0),
              (this._segments = void 0),
              (this._decimated = !1),
              (this._pointsUpdated = !1),
              (this._datasetIndex = void 0),
              t && Object.assign(this, t)
          }
          updateControlPoints(t, e) {
            const n = this,
              i = n.options
            if (
              (i.tension || 'monotone' === i.cubicInterpolationMode) &&
              !i.stepped &&
              !n._pointsUpdated
            ) {
              const o = i.spanGaps ? n._loop : n._fullLoop
              Sn(n._points, i, t, o, e), (n._pointsUpdated = !0)
            }
          }
          set points(t) {
            const e = this
            ;(e._points = t), delete e._segments, delete e._path, (e._pointsUpdated = !1)
          }
          get points() {
            return this._points
          }
          get segments() {
            return (
              this._segments ||
              (this._segments = (function (t, e) {
                const n = t.points,
                  i = t.options.spanGaps,
                  o = n.length
                if (!o) return []
                const r = !!t._loop,
                  { start: a, end: s } = (function (t, e, n, i) {
                    let o = 0,
                      r = e - 1
                    if (n && !i) for (; o < e && !t[o].skip; ) o++
                    for (; o < e && t[o].skip; ) o++
                    for (o %= e, n && (r += o); r > o && t[r % e].skip; ) r--
                    return (r %= e), { start: o, end: r }
                  })(n, o, r, i)
                return Gn(
                  t,
                  !0 === i
                    ? [{ start: a, end: s, loop: r }]
                    : (function (t, e, n, i) {
                        const o = t.length,
                          r = []
                        let a,
                          s = e,
                          l = t[e]
                        for (a = e + 1; a <= n; ++a) {
                          const n = t[a % o]
                          n.skip || n.stop
                            ? l.skip ||
                              ((i = !1),
                              r.push({ start: e % o, end: (a - 1) % o, loop: i }),
                              (e = s = n.stop ? a : null))
                            : ((s = a), l.skip && (e = a)),
                            (l = n)
                        }
                        return null !== s && r.push({ start: e % o, end: s % o, loop: i }), r
                      })(n, a, s < a ? s + o : s, !!t._fullLoop && 0 === a && s === o - 1),
                  n,
                  e,
                )
              })(this, this.options.segment))
            )
          }
          first() {
            const t = this.segments,
              e = this.points
            return t.length && e[t[0].start]
          }
          last() {
            const t = this.segments,
              e = this.points,
              n = t.length
            return n && e[t[n - 1].end]
          }
          interpolate(t, e) {
            const n = this,
              i = n.options,
              o = t[e],
              r = n.points,
              a = Kn(n, { property: e, start: o, end: o })
            if (!a.length) return
            const s = [],
              l = (function (t) {
                return t.stepped
                  ? Vn
                  : t.tension || 'monotone' === t.cubicInterpolationMode
                  ? Bn
                  : In
              })(i)
            let c, h
            for (c = 0, h = a.length; c < h; ++c) {
              const { start: n, end: h } = a[c],
                d = r[n],
                u = r[h]
              if (d === u) {
                s.push(d)
                continue
              }
              const f = l(d, u, Math.abs((o - d[e]) / (u[e] - d[e])), i.stepped)
              ;(f[e] = t[e]), s.push(f)
            }
            return 1 === s.length ? s[0] : s
          }
          pathSegment(t, e, n) {
            return fr(this)(t, this, e, n)
          }
          path(t, e, n) {
            const i = this,
              o = i.segments,
              r = fr(i)
            let a = i._loop
            ;(e = e || 0), (n = n || i.points.length - e)
            for (const s of o) a &= r(t, i, s, { start: e, end: e + n - 1 })
            return !!a
          }
          draw(t, e, n, i) {
            const o = this,
              r = o.options || {}
            ;(o.points || []).length &&
              r.borderWidth &&
              (t.save(),
              gr(t, o, n, i),
              t.restore(),
              o.animated && ((o._pointsUpdated = !1), (o._path = void 0)))
          }
        }
        function br(t, e, n, i) {
          const o = t.options,
            { [n]: r } = t.getProps([n], i)
          return Math.abs(e - r) < o.radius + o.hitRadius
        }
        ;(mr.id = 'line'),
          (mr.defaults = {
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0,
            borderJoinStyle: 'miter',
            borderWidth: 3,
            capBezierPoints: !0,
            cubicInterpolationMode: 'default',
            fill: !1,
            spanGaps: !1,
            stepped: !1,
            tension: 0,
          }),
          (mr.defaultRoutes = { backgroundColor: 'backgroundColor', borderColor: 'borderColor' }),
          (mr.descriptors = {
            _scriptable: !0,
            _indexable: (t) => 'borderDash' !== t && 'fill' !== t,
          })
        class xr extends xo {
          constructor(t) {
            super(),
              (this.options = void 0),
              (this.parsed = void 0),
              (this.skip = void 0),
              (this.stop = void 0),
              t && Object.assign(this, t)
          }
          inRange(t, e, n) {
            const i = this.options,
              { x: o, y: r } = this.getProps(['x', 'y'], n)
            return Math.pow(t - o, 2) + Math.pow(e - r, 2) < Math.pow(i.hitRadius + i.radius, 2)
          }
          inXRange(t, e) {
            return br(this, t, 'x', e)
          }
          inYRange(t, e) {
            return br(this, t, 'y', e)
          }
          getCenterPoint(t) {
            const { x: e, y: n } = this.getProps(['x', 'y'], t)
            return { x: e, y: n }
          }
          size(t) {
            let e = (t = t || this.options || {}).radius || 0
            e = Math.max(e, (e && t.hoverRadius) || 0)
            return 2 * (e + ((e && t.borderWidth) || 0))
          }
          draw(t, e) {
            const n = this,
              i = n.options
            n.skip ||
              i.radius < 0.1 ||
              !Ee(n, e, n.size(i) / 2) ||
              ((t.strokeStyle = i.borderColor),
              (t.lineWidth = i.borderWidth),
              (t.fillStyle = i.backgroundColor),
              Te(t, i, n.x, n.y))
          }
          getRange() {
            const t = this.options || {}
            return t.radius + t.hitRadius
          }
        }
        function yr(t, e) {
          const {
            x: n,
            y: i,
            base: o,
            width: r,
            height: a,
          } = t.getProps(['x', 'y', 'base', 'width', 'height'], e)
          let s, l, c, h, d
          return (
            t.horizontal
              ? ((d = a / 2), (s = Math.min(n, o)), (l = Math.max(n, o)), (c = i - d), (h = i + d))
              : ((d = r / 2), (s = n - d), (l = n + d), (c = Math.min(i, o)), (h = Math.max(i, o))),
            { left: s, top: c, right: l, bottom: h }
          )
        }
        function vr(t, e, n, i) {
          return t ? 0 : zt(e, n, i)
        }
        function _r(t) {
          const e = yr(t),
            n = e.right - e.left,
            i = e.bottom - e.top,
            o = (function (t, e, n) {
              const i = t.options.borderWidth,
                o = t.borderSkipped,
                r = Ue(i)
              return {
                t: vr(o.top, r.top, 0, n),
                r: vr(o.right, r.right, 0, e),
                b: vr(o.bottom, r.bottom, 0, n),
                l: vr(o.left, r.left, 0, e),
              }
            })(t, n / 2, i / 2),
            r = (function (t, e, n) {
              const { enableBorderRadius: i } = t.getProps(['enableBorderRadius']),
                o = t.options.borderRadius,
                r = Xe(o),
                a = Math.min(e, n),
                s = t.borderSkipped,
                l = i || G(o)
              return {
                topLeft: vr(!l || s.top || s.left, r.topLeft, 0, a),
                topRight: vr(!l || s.top || s.right, r.topRight, 0, a),
                bottomLeft: vr(!l || s.bottom || s.left, r.bottomLeft, 0, a),
                bottomRight: vr(!l || s.bottom || s.right, r.bottomRight, 0, a),
              }
            })(t, n / 2, i / 2)
          return {
            outer: { x: e.left, y: e.top, w: n, h: i, radius: r },
            inner: {
              x: e.left + o.l,
              y: e.top + o.t,
              w: n - o.l - o.r,
              h: i - o.t - o.b,
              radius: {
                topLeft: Math.max(0, r.topLeft - Math.max(o.t, o.l)),
                topRight: Math.max(0, r.topRight - Math.max(o.t, o.r)),
                bottomLeft: Math.max(0, r.bottomLeft - Math.max(o.b, o.l)),
                bottomRight: Math.max(0, r.bottomRight - Math.max(o.b, o.r)),
              },
            },
          }
        }
        function wr(t, e, n, i) {
          const o = null === e,
            r = null === n,
            a = t && !(o && r) && yr(t, i)
          return a && (o || (e >= a.left && e <= a.right)) && (r || (n >= a.top && n <= a.bottom))
        }
        function Mr(t, e) {
          t.rect(e.x, e.y, e.w, e.h)
        }
        function kr(t, e) {
          let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
          const i = t.x !== n.x ? -e : 0,
            o = t.y !== n.y ? -e : 0,
            r = (t.x + t.w !== n.x + n.w ? e : 0) - i,
            a = (t.y + t.h !== n.y + n.h ? e : 0) - o
          return { x: t.x + i, y: t.y + o, w: t.w + r, h: t.h + a, radius: t.radius }
        }
        ;(xr.id = 'point'),
          (xr.defaults = {
            borderWidth: 1,
            hitRadius: 1,
            hoverBorderWidth: 1,
            hoverRadius: 4,
            pointStyle: 'circle',
            radius: 3,
            rotation: 0,
          }),
          (xr.defaultRoutes = { backgroundColor: 'backgroundColor', borderColor: 'borderColor' })
        class Sr extends xo {
          constructor(t) {
            super(),
              (this.options = void 0),
              (this.horizontal = void 0),
              (this.base = void 0),
              (this.width = void 0),
              (this.height = void 0),
              t && Object.assign(this, t)
          }
          draw(t) {
            const e = this.options,
              { inner: n, outer: i } = _r(this),
              o = (r = i.radius).topLeft || r.topRight || r.bottomLeft || r.bottomRight ? Be : Mr
            var r
            const a = 0.33
            t.save(),
              (i.w === n.w && i.h === n.h) ||
                (t.beginPath(),
                o(t, kr(i, a, n)),
                t.clip(),
                o(t, kr(n, -0.33, i)),
                (t.fillStyle = e.borderColor),
                t.fill('evenodd')),
              t.beginPath(),
              o(t, kr(n, a, i)),
              (t.fillStyle = e.backgroundColor),
              t.fill(),
              t.restore()
          }
          inRange(t, e, n) {
            return wr(this, t, e, n)
          }
          inXRange(t, e) {
            return wr(this, t, null, e)
          }
          inYRange(t, e) {
            return wr(this, null, t, e)
          }
          getCenterPoint(t) {
            const {
              x: e,
              y: n,
              base: i,
              horizontal: o,
            } = this.getProps(['x', 'y', 'base', 'horizontal'], t)
            return { x: o ? (e + i) / 2 : e, y: o ? n : (n + i) / 2 }
          }
          getRange(t) {
            return 'x' === t ? this.width / 2 : this.height / 2
          }
        }
        ;(Sr.id = 'bar'),
          (Sr.defaults = {
            borderSkipped: 'start',
            borderWidth: 0,
            borderRadius: 0,
            enableBorderRadius: !0,
            pointStyle: void 0,
          }),
          (Sr.defaultRoutes = { backgroundColor: 'backgroundColor', borderColor: 'borderColor' })
        var Or = Object.freeze({
          __proto__: null,
          ArcElement: sr,
          LineElement: mr,
          PointElement: xr,
          BarElement: Sr,
        })
        function Pr(t) {
          if (t._decimated) {
            const e = t._data
            delete t._decimated, delete t._data, Object.defineProperty(t, 'data', { value: e })
          }
        }
        function Cr(t) {
          t.data.datasets.forEach((t) => {
            Pr(t)
          })
        }
        var Dr = {
          id: 'decimation',
          defaults: { algorithm: 'min-max', enabled: !1 },
          beforeElementsUpdate: (t, e, n) => {
            if (!n.enabled) return void Cr(t)
            const i = t.width
            t.data.datasets.forEach((e, o) => {
              const { _data: r, indexAxis: a } = e,
                s = t.getDatasetMeta(o),
                l = r || e.data
              if ('y' === Ge([a, t.options.indexAxis])) return
              if ('line' !== s.type) return
              const c = t.scales[s.xAxisID]
              if ('linear' !== c.type && 'time' !== c.type) return
              if (t.options.parsing) return
              let { start: h, count: d } = (function (t, e) {
                const n = e.length
                let i,
                  o = 0
                const { iScale: r } = t,
                  { min: a, max: s, minDefined: l, maxDefined: c } = r.getUserBounds()
                return (
                  l && (o = zt(Je(e, r.axis, a).lo, 0, n - 1)),
                  (i = c ? zt(Je(e, r.axis, s).hi + 1, o, n) - o : n - o),
                  { start: o, count: i }
                )
              })(s, l)
              if (d <= (n.threshold || 4 * i)) return void Pr(e)
              let u
              switch (
                (q(r) &&
                  ((e._data = l),
                  delete e.data,
                  Object.defineProperty(e, 'data', {
                    configurable: !0,
                    enumerable: !0,
                    get: function () {
                      return this._decimated
                    },
                    set: function (t) {
                      this._data = t
                    },
                  })),
                n.algorithm)
              ) {
                case 'lttb':
                  u = (function (t, e, n, i, o) {
                    const r = o.samples || i
                    if (r >= n) return t.slice(e, e + n)
                    const a = [],
                      s = (n - 2) / (r - 2)
                    let l = 0
                    const c = e + n - 1
                    let h,
                      d,
                      u,
                      f,
                      p,
                      g = e
                    for (a[l++] = t[g], h = 0; h < r - 2; h++) {
                      let i,
                        o = 0,
                        r = 0
                      const c = Math.floor((h + 1) * s) + 1 + e,
                        m = Math.min(Math.floor((h + 2) * s) + 1, n) + e,
                        b = m - c
                      for (i = c; i < m; i++) (o += t[i].x), (r += t[i].y)
                      ;(o /= b), (r /= b)
                      const x = Math.floor(h * s) + 1 + e,
                        y = Math.min(Math.floor((h + 1) * s) + 1, n) + e,
                        { x: v, y: _ } = t[g]
                      for (u = f = -1, i = x; i < y; i++)
                        (f = 0.5 * Math.abs((v - o) * (t[i].y - _) - (v - t[i].x) * (r - _))),
                          f > u && ((u = f), (d = t[i]), (p = i))
                      ;(a[l++] = d), (g = p)
                    }
                    return (a[l++] = t[c]), a
                  })(l, h, d, i, n)
                  break
                case 'min-max':
                  u = (function (t, e, n, i) {
                    let o,
                      r,
                      a,
                      s,
                      l,
                      c,
                      h,
                      d,
                      u,
                      f,
                      p = 0,
                      g = 0
                    const m = [],
                      b = e + n - 1,
                      x = t[e].x,
                      y = t[b].x - x
                    for (o = e; o < e + n; ++o) {
                      ;(r = t[o]), (a = ((r.x - x) / y) * i), (s = r.y)
                      const e = 0 | a
                      if (e === l)
                        s < u ? ((u = s), (c = o)) : s > f && ((f = s), (h = o)),
                          (p = (g * p + r.x) / ++g)
                      else {
                        const n = o - 1
                        if (!q(c) && !q(h)) {
                          const e = Math.min(c, h),
                            i = Math.max(c, h)
                          e !== d && e !== n && m.push({ ...t[e], x: p }),
                            i !== d && i !== n && m.push({ ...t[i], x: p })
                        }
                        o > 0 && n !== d && m.push(t[n]),
                          m.push(r),
                          (l = e),
                          (g = 0),
                          (u = f = s),
                          (c = h = d = o)
                      }
                    }
                    return m
                  })(l, h, d, i)
                  break
                default:
                  throw new Error("Unsupported decimation algorithm '".concat(n.algorithm, "'"))
              }
              e._decimated = u
            })
          },
          destroy(t) {
            Cr(t)
          },
        }
        function Ar(t, e, n) {
          const i = (function (t) {
            const e = t.options,
              n = e.fill
            let i = Q(n && n.target, n)
            return (
              void 0 === i && (i = !!e.backgroundColor),
              !1 !== i && null !== i && (!0 === i ? 'origin' : i)
            )
          })(t)
          if (G(i)) return !isNaN(i.value) && i
          let o = parseFloat(i)
          return Z(o) && Math.floor(o) === o
            ? (('-' !== i[0] && '+' !== i[0]) || (o = e + o), !(o === e || o < 0 || o >= n) && o)
            : ['origin', 'start', 'end', 'stack', 'shape'].indexOf(i) >= 0 && i
        }
        class Tr {
          constructor(t) {
            ;(this.x = t.x), (this.y = t.y), (this.radius = t.radius)
          }
          pathSegment(t, e, n) {
            const { x: i, y: o, radius: r } = this
            return (e = e || { start: 0, end: mt }), t.arc(i, o, r, e.end, e.start, !0), !n.bounds
          }
          interpolate(t) {
            const { x: e, y: n, radius: i } = this,
              o = t.angle
            return { x: e + Math.cos(o) * i, y: n + Math.sin(o) * i, angle: o }
          }
        }
        function Er(t) {
          return (t.scale || {}).getPointPositionForValue
            ? (function (t) {
                const { scale: e, fill: n } = t,
                  i = e.options,
                  o = e.getLabels().length,
                  r = [],
                  a = i.reverse ? e.max : e.min,
                  s = i.reverse ? e.min : e.max
                let l, c, h
                if (
                  ((h = 'start' === n ? a : 'end' === n ? s : G(n) ? n.value : e.getBaseValue()),
                  i.grid.circular)
                )
                  return (
                    (c = e.getPointPositionForValue(0, a)),
                    new Tr({ x: c.x, y: c.y, radius: e.getDistanceFromCenterForValue(h) })
                  )
                for (l = 0; l < o; ++l) r.push(e.getPointPositionForValue(l, h))
                return r
              })(t)
            : (function (t) {
                const { scale: e = {}, fill: n } = t
                let i,
                  o = null
                return (
                  'start' === n
                    ? (o = e.bottom)
                    : 'end' === n
                    ? (o = e.top)
                    : G(n)
                    ? (o = e.getPixelForValue(n.value))
                    : e.getBasePixel && (o = e.getBasePixel()),
                  Z(o) ? ((i = e.isHorizontal()), { x: i ? o : null, y: i ? null : o }) : null
                )
              })(t)
        }
        function Lr(t, e, n) {
          for (; e > t; e--) {
            const t = n[e]
            if (!isNaN(t.x) && !isNaN(t.y)) break
          }
          return e
        }
        function Rr(t) {
          const { chart: e, scale: n, index: i, line: o } = t,
            r = [],
            a = o.segments,
            s = o.points,
            l = (function (t, e) {
              const n = [],
                i = t.getSortedVisibleDatasetMetas()
              for (let o = 0; o < i.length; o++) {
                const t = i[o]
                if (t.index === e) break
                jr(t) && n.unshift(t.dataset)
              }
              return n
            })(e, i)
          l.push(Ir({ x: null, y: n.bottom }, o))
          for (let c = 0; c < a.length; c++) {
            const t = a[c]
            for (let e = t.start; e <= t.end; e++) zr(r, s[e], l)
          }
          return new mr({ points: r, options: {} })
        }
        const jr = (t) => 'line' === t.type && !t.hidden
        function zr(t, e, n) {
          const i = []
          for (let o = 0; o < n.length; o++) {
            const r = n[o],
              { first: a, last: s, point: l } = Fr(r, e, 'x')
            if (!(!l || (a && s)))
              if (a) i.unshift(l)
              else if ((t.push(l), !s)) break
          }
          t.push(...i)
        }
        function Fr(t, e, n) {
          const i = t.interpolate(e, n)
          if (!i) return {}
          const o = i[n],
            r = t.segments,
            a = t.points
          let s = !1,
            l = !1
          for (let c = 0; c < r.length; c++) {
            const t = r[c],
              e = a[t.start][n],
              i = a[t.end][n]
            if (o >= e && o <= i) {
              ;(s = o === e), (l = o === i)
              break
            }
          }
          return { first: s, last: l, point: i }
        }
        function Ir(t, e) {
          let n = [],
            i = !1
          return (
            K(t)
              ? ((i = !0), (n = t))
              : (n = (function (t, e) {
                  const { x: n = null, y: i = null } = t || {},
                    o = e.points,
                    r = []
                  return (
                    e.segments.forEach((t) => {
                      let { start: e, end: a } = t
                      a = Lr(e, a, o)
                      const s = o[e],
                        l = o[a]
                      null !== i
                        ? (r.push({ x: s.x, y: i }), r.push({ x: l.x, y: i }))
                        : null !== n && (r.push({ x: n, y: s.y }), r.push({ x: n, y: l.y }))
                    }),
                    r
                  )
                })(t, e)),
            n.length ? new mr({ points: n, options: { tension: 0 }, _loop: i, _fullLoop: i }) : null
          )
        }
        function Vr(t, e, n) {
          let i = t[e].fill
          const o = [e]
          let r
          if (!n) return i
          for (; !1 !== i && -1 === o.indexOf(i); ) {
            if (!Z(i)) return i
            if (((r = t[i]), !r)) return !1
            if (r.visible) return i
            o.push(i), (i = r.fill)
          }
          return !1
        }
        function Br(t, e, n) {
          t.beginPath(),
            e.path(t),
            t.lineTo(e.last().x, n),
            t.lineTo(e.first().x, n),
            t.closePath(),
            t.clip()
        }
        function Nr(t, e, n, i) {
          if (i) return
          let o = e[t],
            r = n[t]
          return 'angle' === t && ((o = Rt(o)), (r = Rt(r))), { property: t, start: o, end: r }
        }
        function Wr(t, e, n, i) {
          return t && e ? i(t[n], e[n]) : t ? t[n] : e ? e[n] : 0
        }
        function Hr(t, e, n) {
          const { top: i, bottom: o } = e.chart.chartArea,
            { property: r, start: a, end: s } = n || {}
          'x' === r && (t.beginPath(), t.rect(a, i, s - a, o - i), t.clip())
        }
        function $r(t, e, n, i) {
          const o = e.interpolate(n, i)
          o && t.lineTo(o.x, o.y)
        }
        function Yr(t, e) {
          const { line: n, target: i, property: o, color: r, scale: a } = e,
            s = (function (t, e, n) {
              const i = t.segments,
                o = t.points,
                r = e.points,
                a = []
              for (const s of i) {
                let { start: t, end: i } = s
                i = Lr(t, i, o)
                const l = Nr(n, o[t], o[i], s.loop)
                if (!e.segments) {
                  a.push({ source: s, target: l, start: o[t], end: o[i] })
                  continue
                }
                const c = Kn(e, l)
                for (const e of c) {
                  const t = Nr(n, r[e.start], r[e.end], e.loop),
                    i = qn(s, o, t)
                  for (const o of i)
                    a.push({
                      source: o,
                      target: e,
                      start: { [n]: Wr(l, t, 'start', Math.max) },
                      end: { [n]: Wr(l, t, 'end', Math.min) },
                    })
                }
              }
              return a
            })(n, i, o)
          for (const { source: l, target: c, start: h, end: d } of s) {
            const { style: { backgroundColor: e = r } = {} } = l,
              s = !0 !== i
            t.save(), (t.fillStyle = e), Hr(t, a, s && Nr(o, h, d)), t.beginPath()
            const u = !!n.pathSegment(t, l)
            let f
            if (s) {
              u ? t.closePath() : $r(t, i, d, o)
              const e = !!i.pathSegment(t, c, { move: u, reverse: !0 })
              ;(f = u && e), f || $r(t, i, h, o)
            }
            t.closePath(), t.fill(f ? 'evenodd' : 'nonzero'), t.restore()
          }
        }
        function Ur(t, e, n) {
          const i = (function (t) {
              const { chart: e, fill: n, line: i } = t
              if (Z(n))
                return (function (t, e) {
                  const n = t.getDatasetMeta(e)
                  return n && t.isDatasetVisible(e) ? n.dataset : null
                })(e, n)
              if ('stack' === n) return Rr(t)
              if ('shape' === n) return !0
              const o = Er(t)
              return o instanceof Tr ? o : Ir(o, i)
            })(e),
            { line: o, scale: r, axis: a } = e,
            s = o.options,
            l = s.fill,
            c = s.backgroundColor,
            { above: h = c, below: d = c } = l || {}
          i &&
            o.points.length &&
            (Le(t, n),
            (function (t, e) {
              const { line: n, target: i, above: o, below: r, area: a, scale: s } = e,
                l = n._loop ? 'angle' : e.axis
              t.save(),
                'x' === l &&
                  r !== o &&
                  (Br(t, i, a.top),
                  Yr(t, { line: n, target: i, color: o, scale: s, property: l }),
                  t.restore(),
                  t.save(),
                  Br(t, i, a.bottom)),
                Yr(t, { line: n, target: i, color: r, scale: s, property: l }),
                t.restore()
            })(t, { line: o, target: i, above: h, below: d, area: n, scale: r, axis: a }),
            Re(t))
        }
        var Xr = {
          id: 'filler',
          afterDatasetsUpdate(t, e, n) {
            const i = (t.data.datasets || []).length,
              o = []
            let r, a, s, l
            for (a = 0; a < i; ++a)
              (r = t.getDatasetMeta(a)),
                (s = r.dataset),
                (l = null),
                s &&
                  s.options &&
                  s instanceof mr &&
                  (l = {
                    visible: t.isDatasetVisible(a),
                    index: a,
                    fill: Ar(s, a, i),
                    chart: t,
                    axis: r.controller.options.indexAxis,
                    scale: r.vScale,
                    line: s,
                  }),
                (r.$filler = l),
                o.push(l)
            for (a = 0; a < i; ++a)
              (l = o[a]), l && !1 !== l.fill && (l.fill = Vr(o, a, n.propagate))
          },
          beforeDraw(t, e, n) {
            const i = 'beforeDraw' === n.drawTime,
              o = t.getSortedVisibleDatasetMetas(),
              r = t.chartArea
            for (let a = o.length - 1; a >= 0; --a) {
              const e = o[a].$filler
              e && (e.line.updateControlPoints(r, e.axis), i && Ur(t.ctx, e, r))
            }
          },
          beforeDatasetsDraw(t, e, n) {
            if ('beforeDatasetsDraw' !== n.drawTime) return
            const i = t.getSortedVisibleDatasetMetas()
            for (let o = i.length - 1; o >= 0; --o) {
              const e = i[o].$filler
              e && Ur(t.ctx, e, t.chartArea)
            }
          },
          beforeDatasetDraw(t, e, n) {
            const i = e.meta.$filler
            i && !1 !== i.fill && 'beforeDatasetDraw' === n.drawTime && Ur(t.ctx, i, t.chartArea)
          },
          defaults: { propagate: !0, drawTime: 'beforeDatasetDraw' },
        }
        const qr = (t, e) => {
          let { boxHeight: n = e, boxWidth: i = e } = t
          return (
            t.usePointStyle && ((n = Math.min(n, e)), (i = Math.min(i, e))),
            { boxWidth: i, boxHeight: n, itemHeight: Math.max(e, n) }
          )
        }
        class Kr extends xo {
          constructor(t) {
            super(),
              (this._added = !1),
              (this.legendHitBoxes = []),
              (this._hoveredItem = null),
              (this.doughnutMode = !1),
              (this.chart = t.chart),
              (this.options = t.options),
              (this.ctx = t.ctx),
              (this.legendItems = void 0),
              (this.columnSizes = void 0),
              (this.lineWidths = void 0),
              (this.maxHeight = void 0),
              (this.maxWidth = void 0),
              (this.top = void 0),
              (this.bottom = void 0),
              (this.left = void 0),
              (this.right = void 0),
              (this.height = void 0),
              (this.width = void 0),
              (this._margins = void 0),
              (this.position = void 0),
              (this.weight = void 0),
              (this.fullSize = void 0)
          }
          update(t, e, n) {
            const i = this
            ;(i.maxWidth = t),
              (i.maxHeight = e),
              (i._margins = n),
              i.setDimensions(),
              i.buildLabels(),
              i.fit()
          }
          setDimensions() {
            const t = this
            t.isHorizontal()
              ? ((t.width = t.maxWidth), (t.left = t._margins.left), (t.right = t.width))
              : ((t.height = t.maxHeight), (t.top = t._margins.top), (t.bottom = t.height))
          }
          buildLabels() {
            const t = this,
              e = t.options.labels || {}
            let n = et(e.generateLabels, [t.chart], t) || []
            e.filter && (n = n.filter((n) => e.filter(n, t.chart.data))),
              e.sort && (n = n.sort((n, i) => e.sort(n, i, t.chart.data))),
              t.options.reverse && n.reverse(),
              (t.legendItems = n)
          }
          fit() {
            const t = this,
              { options: e, ctx: n } = t
            if (!e.display) return void (t.width = t.height = 0)
            const i = e.labels,
              o = Ke(i.font),
              r = o.size,
              a = t._computeTitleHeight(),
              { boxWidth: s, itemHeight: l } = qr(i, r)
            let c, h
            ;(n.font = o.string),
              t.isHorizontal()
                ? ((c = t.maxWidth), (h = t._fitRows(a, r, s, l) + 10))
                : ((h = t.maxHeight), (c = t._fitCols(a, r, s, l) + 10)),
              (t.width = Math.min(c, e.maxWidth || t.maxWidth)),
              (t.height = Math.min(h, e.maxHeight || t.maxHeight))
          }
          _fitRows(t, e, n, i) {
            const o = this,
              {
                ctx: r,
                maxWidth: a,
                options: {
                  labels: { padding: s },
                },
              } = o,
              l = (o.legendHitBoxes = []),
              c = (o.lineWidths = [0]),
              h = i + s
            let d = t
            ;(r.textAlign = 'left'), (r.textBaseline = 'middle')
            let u = -1,
              f = -h
            return (
              o.legendItems.forEach((t, o) => {
                const p = n + e / 2 + r.measureText(t.text).width
                ;(0 === o || c[c.length - 1] + p + 2 * s > a) &&
                  ((d += h), (c[c.length - (o > 0 ? 0 : 1)] = 0), (f += h), u++),
                  (l[o] = { left: 0, top: f, row: u, width: p, height: i }),
                  (c[c.length - 1] += p + s)
              }),
              d
            )
          }
          _fitCols(t, e, n, i) {
            const o = this,
              {
                ctx: r,
                maxHeight: a,
                options: {
                  labels: { padding: s },
                },
              } = o,
              l = (o.legendHitBoxes = []),
              c = (o.columnSizes = []),
              h = a - t
            let d = s,
              u = 0,
              f = 0,
              p = 0,
              g = 0
            return (
              o.legendItems.forEach((t, o) => {
                const a = n + e / 2 + r.measureText(t.text).width
                o > 0 &&
                  f + i + 2 * s > h &&
                  ((d += u + s), c.push({ width: u, height: f }), (p += u + s), g++, (u = f = 0)),
                  (l[o] = { left: p, top: f, col: g, width: a, height: i }),
                  (u = Math.max(u, a)),
                  (f += i + s)
              }),
              (d += u),
              c.push({ width: u, height: f }),
              d
            )
          }
          adjustHitBoxes() {
            const t = this
            if (!t.options.display) return
            const e = t._computeTitleHeight(),
              {
                legendHitBoxes: n,
                options: {
                  align: i,
                  labels: { padding: o },
                  rtl: r,
                },
              } = t,
              a = Hn(r, t.left, t.width)
            if (this.isHorizontal()) {
              let r = 0,
                s = Y(i, t.left + o, t.right - t.lineWidths[r])
              for (const l of n)
                r !== l.row && ((r = l.row), (s = Y(i, t.left + o, t.right - t.lineWidths[r]))),
                  (l.top += t.top + e + o),
                  (l.left = a.leftForLtr(a.x(s), l.width)),
                  (s += l.width + o)
            } else {
              let r = 0,
                s = Y(i, t.top + e + o, t.bottom - t.columnSizes[r].height)
              for (const l of n)
                l.col !== r &&
                  ((r = l.col), (s = Y(i, t.top + e + o, t.bottom - t.columnSizes[r].height))),
                  (l.top = s),
                  (l.left += t.left + o),
                  (l.left = a.leftForLtr(a.x(l.left), l.width)),
                  (s += l.height + o)
            }
          }
          isHorizontal() {
            return 'top' === this.options.position || 'bottom' === this.options.position
          }
          draw() {
            const t = this
            if (t.options.display) {
              const e = t.ctx
              Le(e, t), t._draw(), Re(e)
            }
          }
          _draw() {
            const t = this,
              { options: e, columnSizes: n, lineWidths: i, ctx: o } = t,
              { align: r, labels: a } = e,
              s = Oe.color,
              l = Hn(e.rtl, t.left, t.width),
              c = Ke(a.font),
              { color: h, padding: d } = a,
              u = c.size,
              f = u / 2
            let p
            t.drawTitle(),
              (o.textAlign = l.textAlign('left')),
              (o.textBaseline = 'middle'),
              (o.lineWidth = 0.5),
              (o.font = c.string)
            const { boxWidth: g, boxHeight: m, itemHeight: b } = qr(a, u),
              x = t.isHorizontal(),
              y = this._computeTitleHeight()
            ;(p = x
              ? { x: Y(r, t.left + d, t.right - i[0]), y: t.top + d + y, line: 0 }
              : { x: t.left + d, y: Y(r, t.top + y + d, t.bottom - n[0].height), line: 0 }),
              $n(t.ctx, e.textDirection)
            const v = b + d
            t.legendItems.forEach((_, w) => {
              ;(o.strokeStyle = _.fontColor || h), (o.fillStyle = _.fontColor || h)
              const M = o.measureText(_.text).width,
                k = l.textAlign(_.textAlign || (_.textAlign = a.textAlign)),
                S = g + f + M
              let O = p.x,
                P = p.y
              l.setWidth(t.width),
                x
                  ? w > 0 &&
                    O + S + d > t.right &&
                    ((P = p.y += v), p.line++, (O = p.x = Y(r, t.left + d, t.right - i[p.line])))
                  : w > 0 &&
                    P + v > t.bottom &&
                    ((O = p.x = O + n[p.line].width + d),
                    p.line++,
                    (P = p.y = Y(r, t.top + y + d, t.bottom - n[p.line].height)))
              !(function (t, e, n) {
                if (isNaN(g) || g <= 0 || isNaN(m) || m < 0) return
                o.save()
                const i = Q(n.lineWidth, 1)
                if (
                  ((o.fillStyle = Q(n.fillStyle, s)),
                  (o.lineCap = Q(n.lineCap, 'butt')),
                  (o.lineDashOffset = Q(n.lineDashOffset, 0)),
                  (o.lineJoin = Q(n.lineJoin, 'miter')),
                  (o.lineWidth = i),
                  (o.strokeStyle = Q(n.strokeStyle, s)),
                  o.setLineDash(Q(n.lineDash, [])),
                  a.usePointStyle)
                ) {
                  const r = {
                      radius: (g * Math.SQRT2) / 2,
                      pointStyle: n.pointStyle,
                      rotation: n.rotation,
                      borderWidth: i,
                    },
                    a = l.xPlus(t, g / 2)
                  Te(o, r, a, e + f)
                } else {
                  const r = e + Math.max((u - m) / 2, 0),
                    a = l.leftForLtr(t, g),
                    s = Xe(n.borderRadius)
                  o.beginPath(),
                    Object.values(s).some((t) => 0 !== t)
                      ? Be(o, { x: a, y: r, w: g, h: m, radius: s })
                      : o.rect(a, r, g, m),
                    o.fill(),
                    0 !== i && o.stroke()
                }
                o.restore()
              })(l.x(O), P, _),
                (O = ((t, e, n, i) =>
                  t === (i ? 'left' : 'right') ? n : 'center' === t ? (e + n) / 2 : e)(
                  k,
                  O + g + f,
                  x ? O + S : t.right,
                  e.rtl,
                )),
                (function (t, e, n) {
                  Fe(o, n.text, t, e + b / 2, c, {
                    strikethrough: n.hidden,
                    textAlign: l.textAlign(n.textAlign),
                  })
                })(l.x(O), P, _),
                x ? (p.x += S + d) : (p.y += v)
            }),
              Yn(t.ctx, e.textDirection)
          }
          drawTitle() {
            const t = this,
              e = t.options,
              n = e.title,
              i = Ke(n.font),
              o = qe(n.padding)
            if (!n.display) return
            const r = Hn(e.rtl, t.left, t.width),
              a = t.ctx,
              s = n.position,
              l = i.size / 2,
              c = o.top + l
            let h,
              d = t.left,
              u = t.width
            if (this.isHorizontal())
              (u = Math.max(...t.lineWidths)), (h = t.top + c), (d = Y(e.align, d, t.right - u))
            else {
              const n = t.columnSizes.reduce((t, e) => Math.max(t, e.height), 0)
              h = c + Y(e.align, t.top, t.bottom - n - e.labels.padding - t._computeTitleHeight())
            }
            const f = Y(s, d, d + u)
            ;(a.textAlign = r.textAlign($(s))),
              (a.textBaseline = 'middle'),
              (a.strokeStyle = n.color),
              (a.fillStyle = n.color),
              (a.font = i.string),
              Fe(a, n.text, f, h, i)
          }
          _computeTitleHeight() {
            const t = this.options.title,
              e = Ke(t.font),
              n = qe(t.padding)
            return t.display ? e.lineHeight + n.height : 0
          }
          _getLegendItemAt(t, e) {
            const n = this
            let i, o, r
            if (t >= n.left && t <= n.right && e >= n.top && e <= n.bottom)
              for (r = n.legendHitBoxes, i = 0; i < r.length; ++i)
                if (
                  ((o = r[i]),
                  t >= o.left && t <= o.left + o.width && e >= o.top && e <= o.top + o.height)
                )
                  return n.legendItems[i]
            return null
          }
          handleEvent(t) {
            const e = this,
              n = e.options
            if (
              !(function (t, e) {
                if ('mousemove' === t && (e.onHover || e.onLeave)) return !0
                if (e.onClick && ('click' === t || 'mouseup' === t)) return !0
                return !1
              })(t.type, n)
            )
              return
            const i = e._getLegendItemAt(t.x, t.y)
            if ('mousemove' === t.type) {
              const o = e._hoveredItem,
                r = ((t, e) =>
                  null !== t &&
                  null !== e &&
                  t.datasetIndex === e.datasetIndex &&
                  t.index === e.index)(o, i)
              o && !r && et(n.onLeave, [t, o, e], e),
                (e._hoveredItem = i),
                i && !r && et(n.onHover, [t, i, e], e)
            } else i && et(n.onClick, [t, i, e], e)
          }
        }
        var Gr = {
          id: 'legend',
          _element: Kr,
          start(t, e, n) {
            const i = (t.legend = new Kr({ ctx: t.ctx, options: n, chart: t }))
            eo.configure(t, i, n), eo.addBox(t, i)
          },
          stop(t) {
            eo.removeBox(t, t.legend), delete t.legend
          },
          beforeUpdate(t, e, n) {
            const i = t.legend
            eo.configure(t, i, n), (i.options = n)
          },
          afterUpdate(t) {
            const e = t.legend
            e.buildLabels(), e.adjustHitBoxes()
          },
          afterEvent(t, e) {
            e.replay || t.legend.handleEvent(e.event)
          },
          defaults: {
            display: !0,
            position: 'top',
            align: 'center',
            fullSize: !0,
            reverse: !1,
            weight: 1e3,
            onClick(t, e, n) {
              const i = e.datasetIndex,
                o = n.chart
              o.isDatasetVisible(i) ? (o.hide(i), (e.hidden = !0)) : (o.show(i), (e.hidden = !1))
            },
            onHover: null,
            onLeave: null,
            labels: {
              color: (t) => t.chart.options.color,
              boxWidth: 40,
              padding: 10,
              generateLabels(t) {
                const e = t.data.datasets,
                  {
                    labels: { usePointStyle: n, pointStyle: i, textAlign: o, color: r },
                  } = t.legend.options
                return t._getSortedDatasetMetas().map((t) => {
                  const a = t.controller.getStyle(n ? 0 : void 0),
                    s = qe(a.borderWidth)
                  return {
                    text: e[t.index].label,
                    fillStyle: a.backgroundColor,
                    fontColor: r,
                    hidden: !t.visible,
                    lineCap: a.borderCapStyle,
                    lineDash: a.borderDash,
                    lineDashOffset: a.borderDashOffset,
                    lineJoin: a.borderJoinStyle,
                    lineWidth: (s.width + s.height) / 4,
                    strokeStyle: a.borderColor,
                    pointStyle: i || a.pointStyle,
                    rotation: a.rotation,
                    textAlign: o || a.textAlign,
                    borderRadius: 0,
                    datasetIndex: t.index,
                  }
                }, this)
              },
            },
            title: {
              color: (t) => t.chart.options.color,
              display: !1,
              position: 'center',
              text: '',
            },
          },
          descriptors: {
            _scriptable: (t) => !t.startsWith('on'),
            labels: { _scriptable: (t) => !['generateLabels', 'filter', 'sort'].includes(t) },
          },
        }
        class Zr extends xo {
          constructor(t) {
            super(),
              (this.chart = t.chart),
              (this.options = t.options),
              (this.ctx = t.ctx),
              (this._padding = void 0),
              (this.top = void 0),
              (this.bottom = void 0),
              (this.left = void 0),
              (this.right = void 0),
              (this.width = void 0),
              (this.height = void 0),
              (this.position = void 0),
              (this.weight = void 0),
              (this.fullSize = void 0)
          }
          update(t, e) {
            const n = this,
              i = n.options
            if (((n.left = 0), (n.top = 0), !i.display))
              return void (n.width = n.height = n.right = n.bottom = 0)
            ;(n.width = n.right = t), (n.height = n.bottom = e)
            const o = K(i.text) ? i.text.length : 1
            n._padding = qe(i.padding)
            const r = o * Ke(i.font).lineHeight + n._padding.height
            n.isHorizontal() ? (n.height = r) : (n.width = r)
          }
          isHorizontal() {
            const t = this.options.position
            return 'top' === t || 'bottom' === t
          }
          _drawArgs(t) {
            const { top: e, left: n, bottom: i, right: o, options: r } = this,
              a = r.align
            let s,
              l,
              c,
              h = 0
            return (
              this.isHorizontal()
                ? ((l = Y(a, n, o)), (c = e + t), (s = o - n))
                : ('left' === r.position
                    ? ((l = n + t), (c = Y(a, i, e)), (h = -0.5 * gt))
                    : ((l = o - t), (c = Y(a, e, i)), (h = 0.5 * gt)),
                  (s = i - e)),
              { titleX: l, titleY: c, maxWidth: s, rotation: h }
            )
          }
          draw() {
            const t = this,
              e = t.ctx,
              n = t.options
            if (!n.display) return
            const i = Ke(n.font),
              o = i.lineHeight / 2 + t._padding.top,
              { titleX: r, titleY: a, maxWidth: s, rotation: l } = t._drawArgs(o)
            Fe(e, n.text, 0, 0, i, {
              color: n.color,
              maxWidth: s,
              rotation: l,
              textAlign: $(n.align),
              textBaseline: 'middle',
              translation: [r, a],
            })
          }
        }
        var Jr = {
          id: 'title',
          _element: Zr,
          start(t, e, n) {
            !(function (t, e) {
              const n = new Zr({ ctx: t.ctx, options: e, chart: t })
              eo.configure(t, n, e), eo.addBox(t, n), (t.titleBlock = n)
            })(t, n)
          },
          stop(t) {
            const e = t.titleBlock
            eo.removeBox(t, e), delete t.titleBlock
          },
          beforeUpdate(t, e, n) {
            const i = t.titleBlock
            eo.configure(t, i, n), (i.options = n)
          },
          defaults: {
            align: 'center',
            display: !1,
            font: { weight: 'bold' },
            fullSize: !0,
            padding: 10,
            position: 'top',
            text: '',
            weight: 2e3,
          },
          defaultRoutes: { color: 'color' },
          descriptors: { _scriptable: !0, _indexable: !1 },
        }
        const Qr = new WeakMap()
        var ta = {
          id: 'subtitle',
          start(t, e, n) {
            const i = new Zr({ ctx: t.ctx, options: n, chart: t })
            eo.configure(t, i, n), eo.addBox(t, i), Qr.set(t, i)
          },
          stop(t) {
            eo.removeBox(t, Qr.get(t)), Qr.delete(t)
          },
          beforeUpdate(t, e, n) {
            const i = Qr.get(t)
            eo.configure(t, i, n), (i.options = n)
          },
          defaults: {
            align: 'center',
            display: !1,
            font: { weight: 'normal' },
            fullSize: !0,
            padding: 0,
            position: 'top',
            text: '',
            weight: 1500,
          },
          defaultRoutes: { color: 'color' },
          descriptors: { _scriptable: !0, _indexable: !1 },
        }
        const ea = {
          average(t) {
            if (!t.length) return !1
            let e,
              n,
              i = 0,
              o = 0,
              r = 0
            for (e = 0, n = t.length; e < n; ++e) {
              const n = t[e].element
              if (n && n.hasValue()) {
                const t = n.tooltipPosition()
                ;(i += t.x), (o += t.y), ++r
              }
            }
            return { x: i / r, y: o / r }
          },
          nearest(t, e) {
            if (!t.length) return !1
            let n,
              i,
              o,
              r = e.x,
              a = e.y,
              s = Number.POSITIVE_INFINITY
            for (n = 0, i = t.length; n < i; ++n) {
              const i = t[n].element
              if (i && i.hasValue()) {
                const t = Et(e, i.getCenterPoint())
                t < s && ((s = t), (o = i))
              }
            }
            if (o) {
              const t = o.tooltipPosition()
              ;(r = t.x), (a = t.y)
            }
            return { x: r, y: a }
          },
        }
        function na(t, e) {
          return e && (K(e) ? Array.prototype.push.apply(t, e) : t.push(e)), t
        }
        function ia(t) {
          return ('string' === typeof t || t instanceof String) && t.indexOf('\n') > -1
            ? t.split('\n')
            : t
        }
        function oa(t, e) {
          const { element: n, datasetIndex: i, index: o } = e,
            r = t.getDatasetMeta(i).controller,
            { label: a, value: s } = r.getLabelAndValue(o)
          return {
            chart: t,
            label: a,
            parsed: r.getParsed(o),
            raw: t.data.datasets[i].data[o],
            formattedValue: s,
            dataset: r.getDataset(),
            dataIndex: o,
            datasetIndex: i,
            element: n,
          }
        }
        function ra(t, e) {
          const n = t._chart.ctx,
            { body: i, footer: o, title: r } = t,
            { boxWidth: a, boxHeight: s } = e,
            l = Ke(e.bodyFont),
            c = Ke(e.titleFont),
            h = Ke(e.footerFont),
            d = r.length,
            u = o.length,
            f = i.length,
            p = qe(e.padding)
          let g = p.height,
            m = 0,
            b = i.reduce((t, e) => t + e.before.length + e.lines.length + e.after.length, 0)
          if (
            ((b += t.beforeBody.length + t.afterBody.length),
            d && (g += d * c.lineHeight + (d - 1) * e.titleSpacing + e.titleMarginBottom),
            b)
          ) {
            g +=
              f * (e.displayColors ? Math.max(s, l.lineHeight) : l.lineHeight) +
              (b - f) * l.lineHeight +
              (b - 1) * e.bodySpacing
          }
          u && (g += e.footerMarginTop + u * h.lineHeight + (u - 1) * e.footerSpacing)
          let x = 0
          const y = function (t) {
            m = Math.max(m, n.measureText(t).width + x)
          }
          return (
            n.save(),
            (n.font = c.string),
            nt(t.title, y),
            (n.font = l.string),
            nt(t.beforeBody.concat(t.afterBody), y),
            (x = e.displayColors ? a + 2 : 0),
            nt(i, (t) => {
              nt(t.before, y), nt(t.lines, y), nt(t.after, y)
            }),
            (x = 0),
            (n.font = h.string),
            nt(t.footer, y),
            n.restore(),
            (m += p.width),
            { width: m, height: g }
          )
        }
        function aa(t, e, n, i) {
          const { x: o, width: r } = n,
            {
              width: a,
              chartArea: { left: s, right: l },
            } = t
          let c = 'center'
          return (
            'center' === i
              ? (c = o <= (s + l) / 2 ? 'left' : 'right')
              : o <= r / 2
              ? (c = 'left')
              : o >= a - r / 2 && (c = 'right'),
            (function (t, e, n, i) {
              const { x: o, width: r } = i,
                a = n.caretSize + n.caretPadding
              return (
                ('left' === t && o + r + a > e.width) || ('right' === t && o - r - a < 0) || void 0
              )
            })(c, t, e, n) && (c = 'center'),
            c
          )
        }
        function sa(t, e, n) {
          const i =
            e.yAlign ||
            (function (t, e) {
              const { y: n, height: i } = e
              return n < i / 2 ? 'top' : n > t.height - i / 2 ? 'bottom' : 'center'
            })(t, n)
          return { xAlign: e.xAlign || aa(t, e, n, i), yAlign: i }
        }
        function la(t, e, n, i) {
          const { caretSize: o, caretPadding: r, cornerRadius: a } = t,
            { xAlign: s, yAlign: l } = n,
            c = o + r,
            h = a + r
          let d = (function (t, e) {
            let { x: n, width: i } = t
            return 'right' === e ? (n -= i) : 'center' === e && (n -= i / 2), n
          })(e, s)
          const u = (function (t, e, n) {
            let { y: i, height: o } = t
            return 'top' === e ? (i += n) : (i -= 'bottom' === e ? o + n : o / 2), i
          })(e, l, c)
          return (
            'center' === l
              ? 'left' === s
                ? (d += c)
                : 'right' === s && (d -= c)
              : 'left' === s
              ? (d -= h)
              : 'right' === s && (d += h),
            { x: zt(d, 0, i.width - e.width), y: zt(u, 0, i.height - e.height) }
          )
        }
        function ca(t, e, n) {
          const i = qe(n.padding)
          return 'center' === e
            ? t.x + t.width / 2
            : 'right' === e
            ? t.x + t.width - i.right
            : t.x + i.left
        }
        function ha(t) {
          return na([], ia(t))
        }
        function da(t, e) {
          const n = e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks
          return n ? t.override(n) : t
        }
        class ua extends xo {
          constructor(t) {
            super(),
              (this.opacity = 0),
              (this._active = []),
              (this._chart = t._chart),
              (this._eventPosition = void 0),
              (this._size = void 0),
              (this._cachedAnimations = void 0),
              (this._tooltipItems = []),
              (this.$animations = void 0),
              (this.$context = void 0),
              (this.options = t.options),
              (this.dataPoints = void 0),
              (this.title = void 0),
              (this.beforeBody = void 0),
              (this.body = void 0),
              (this.afterBody = void 0),
              (this.footer = void 0),
              (this.xAlign = void 0),
              (this.yAlign = void 0),
              (this.x = void 0),
              (this.y = void 0),
              (this.height = void 0),
              (this.width = void 0),
              (this.caretX = void 0),
              (this.caretY = void 0),
              (this.labelColors = void 0),
              (this.labelPointStyles = void 0),
              (this.labelTextColors = void 0)
          }
          initialize(t) {
            ;(this.options = t), (this._cachedAnimations = void 0), (this.$context = void 0)
          }
          _resolveAnimations() {
            const t = this,
              e = t._cachedAnimations
            if (e) return e
            const n = t._chart,
              i = t.options.setContext(t.getContext()),
              o = i.enabled && n.options.animation && i.animations,
              r = new oi(t._chart, o)
            return o._cacheable && (t._cachedAnimations = Object.freeze(r)), r
          }
          getContext() {
            const t = this
            return (
              t.$context ||
              (t.$context =
                ((e = t._chart.getContext()),
                (n = t),
                (i = t._tooltipItems),
                Object.assign(Object.create(e), { tooltip: n, tooltipItems: i, type: 'tooltip' })))
            )
            var e, n, i
          }
          getTitle(t, e) {
            const n = this,
              { callbacks: i } = e,
              o = i.beforeTitle.apply(n, [t]),
              r = i.title.apply(n, [t]),
              a = i.afterTitle.apply(n, [t])
            let s = []
            return (s = na(s, ia(o))), (s = na(s, ia(r))), (s = na(s, ia(a))), s
          }
          getBeforeBody(t, e) {
            return ha(e.callbacks.beforeBody.apply(this, [t]))
          }
          getBody(t, e) {
            const n = this,
              { callbacks: i } = e,
              o = []
            return (
              nt(t, (t) => {
                const e = { before: [], lines: [], after: [] },
                  r = da(i, t)
                na(e.before, ia(r.beforeLabel.call(n, t))),
                  na(e.lines, r.label.call(n, t)),
                  na(e.after, ia(r.afterLabel.call(n, t))),
                  o.push(e)
              }),
              o
            )
          }
          getAfterBody(t, e) {
            return ha(e.callbacks.afterBody.apply(this, [t]))
          }
          getFooter(t, e) {
            const n = this,
              { callbacks: i } = e,
              o = i.beforeFooter.apply(n, [t]),
              r = i.footer.apply(n, [t]),
              a = i.afterFooter.apply(n, [t])
            let s = []
            return (s = na(s, ia(o))), (s = na(s, ia(r))), (s = na(s, ia(a))), s
          }
          _createItems(t) {
            const e = this,
              n = e._active,
              i = e._chart.data,
              o = [],
              r = [],
              a = []
            let s,
              l,
              c = []
            for (s = 0, l = n.length; s < l; ++s) c.push(oa(e._chart, n[s]))
            return (
              t.filter && (c = c.filter((e, n, o) => t.filter(e, n, o, i))),
              t.itemSort && (c = c.sort((e, n) => t.itemSort(e, n, i))),
              nt(c, (n) => {
                const i = da(t.callbacks, n)
                o.push(i.labelColor.call(e, n)),
                  r.push(i.labelPointStyle.call(e, n)),
                  a.push(i.labelTextColor.call(e, n))
              }),
              (e.labelColors = o),
              (e.labelPointStyles = r),
              (e.labelTextColors = a),
              (e.dataPoints = c),
              c
            )
          }
          update(t, e) {
            const n = this,
              i = n.options.setContext(n.getContext()),
              o = n._active
            let r,
              a = []
            if (o.length) {
              const t = ea[i.position].call(n, o, n._eventPosition)
              ;(a = n._createItems(i)),
                (n.title = n.getTitle(a, i)),
                (n.beforeBody = n.getBeforeBody(a, i)),
                (n.body = n.getBody(a, i)),
                (n.afterBody = n.getAfterBody(a, i)),
                (n.footer = n.getFooter(a, i))
              const e = (n._size = ra(n, i)),
                s = Object.assign({}, t, e),
                l = sa(n._chart, i, s),
                c = la(i, s, l, n._chart)
              ;(n.xAlign = l.xAlign),
                (n.yAlign = l.yAlign),
                (r = {
                  opacity: 1,
                  x: c.x,
                  y: c.y,
                  width: e.width,
                  height: e.height,
                  caretX: t.x,
                  caretY: t.y,
                })
            } else 0 !== n.opacity && (r = { opacity: 0 })
            ;(n._tooltipItems = a),
              (n.$context = void 0),
              r && n._resolveAnimations().update(n, r),
              t && i.external && i.external.call(n, { chart: n._chart, tooltip: n, replay: e })
          }
          drawCaret(t, e, n, i) {
            const o = this.getCaretPosition(t, n, i)
            e.lineTo(o.x1, o.y1), e.lineTo(o.x2, o.y2), e.lineTo(o.x3, o.y3)
          }
          getCaretPosition(t, e, n) {
            const { xAlign: i, yAlign: o } = this,
              { cornerRadius: r, caretSize: a } = n,
              { x: s, y: l } = t,
              { width: c, height: h } = e
            let d, u, f, p, g, m
            return (
              'center' === o
                ? ((g = l + h / 2),
                  'left' === i
                    ? ((d = s), (u = d - a), (p = g + a), (m = g - a))
                    : ((d = s + c), (u = d + a), (p = g - a), (m = g + a)),
                  (f = d))
                : ((u = 'left' === i ? s + r + a : 'right' === i ? s + c - r - a : this.caretX),
                  'top' === o
                    ? ((p = l), (g = p - a), (d = u - a), (f = u + a))
                    : ((p = l + h), (g = p + a), (d = u + a), (f = u - a)),
                  (m = p)),
              { x1: d, x2: u, x3: f, y1: p, y2: g, y3: m }
            )
          }
          drawTitle(t, e, n) {
            const i = this,
              o = i.title,
              r = o.length
            let a, s, l
            if (r) {
              const c = Hn(n.rtl, i.x, i.width)
              for (
                t.x = ca(i, n.titleAlign, n),
                  e.textAlign = c.textAlign(n.titleAlign),
                  e.textBaseline = 'middle',
                  a = Ke(n.titleFont),
                  s = n.titleSpacing,
                  e.fillStyle = n.titleColor,
                  e.font = a.string,
                  l = 0;
                l < r;
                ++l
              )
                e.fillText(o[l], c.x(t.x), t.y + a.lineHeight / 2),
                  (t.y += a.lineHeight + s),
                  l + 1 === r && (t.y += n.titleMarginBottom - s)
            }
          }
          _drawColorBox(t, e, n, i, o) {
            const r = this,
              a = r.labelColors[n],
              s = r.labelPointStyles[n],
              { boxHeight: l, boxWidth: c } = o,
              h = Ke(o.bodyFont),
              d = ca(r, 'left', o),
              u = i.x(d),
              f = l < h.lineHeight ? (h.lineHeight - l) / 2 : 0,
              p = e.y + f
            if (o.usePointStyle) {
              const e = {
                  radius: Math.min(c, l) / 2,
                  pointStyle: s.pointStyle,
                  rotation: s.rotation,
                  borderWidth: 1,
                },
                n = i.leftForLtr(u, c) + c / 2,
                r = p + l / 2
              ;(t.strokeStyle = o.multiKeyBackground),
                (t.fillStyle = o.multiKeyBackground),
                Te(t, e, n, r),
                (t.strokeStyle = a.borderColor),
                (t.fillStyle = a.backgroundColor),
                Te(t, e, n, r)
            } else {
              ;(t.lineWidth = a.borderWidth || 1),
                (t.strokeStyle = a.borderColor),
                t.setLineDash(a.borderDash || []),
                (t.lineDashOffset = a.borderDashOffset || 0)
              const e = i.leftForLtr(u, c),
                n = i.leftForLtr(i.xPlus(u, 1), c - 2),
                r = Xe(a.borderRadius)
              Object.values(r).some((t) => 0 !== t)
                ? (t.beginPath(),
                  (t.fillStyle = o.multiKeyBackground),
                  Be(t, { x: e, y: p, w: c, h: l, radius: r }),
                  t.fill(),
                  t.stroke(),
                  (t.fillStyle = a.backgroundColor),
                  t.beginPath(),
                  Be(t, { x: n, y: p + 1, w: c - 2, h: l - 2, radius: r }),
                  t.fill())
                : ((t.fillStyle = o.multiKeyBackground),
                  t.fillRect(e, p, c, l),
                  t.strokeRect(e, p, c, l),
                  (t.fillStyle = a.backgroundColor),
                  t.fillRect(n, p + 1, c - 2, l - 2))
            }
            t.fillStyle = r.labelTextColors[n]
          }
          drawBody(t, e, n) {
            const i = this,
              { body: o } = i,
              { bodySpacing: r, bodyAlign: a, displayColors: s, boxHeight: l, boxWidth: c } = n,
              h = Ke(n.bodyFont)
            let d = h.lineHeight,
              u = 0
            const f = Hn(n.rtl, i.x, i.width),
              p = function (n) {
                e.fillText(n, f.x(t.x + u), t.y + d / 2), (t.y += d + r)
              },
              g = f.textAlign(a)
            let m, b, x, y, v, _, w
            for (
              e.textAlign = a,
                e.textBaseline = 'middle',
                e.font = h.string,
                t.x = ca(i, g, n),
                e.fillStyle = n.bodyColor,
                nt(i.beforeBody, p),
                u = s && 'right' !== g ? ('center' === a ? c / 2 + 1 : c + 2) : 0,
                y = 0,
                _ = o.length;
              y < _;
              ++y
            ) {
              for (
                m = o[y],
                  b = i.labelTextColors[y],
                  e.fillStyle = b,
                  nt(m.before, p),
                  x = m.lines,
                  s &&
                    x.length &&
                    (i._drawColorBox(e, t, y, f, n), (d = Math.max(h.lineHeight, l))),
                  v = 0,
                  w = x.length;
                v < w;
                ++v
              )
                p(x[v]), (d = h.lineHeight)
              nt(m.after, p)
            }
            ;(u = 0), (d = h.lineHeight), nt(i.afterBody, p), (t.y -= r)
          }
          drawFooter(t, e, n) {
            const i = this,
              o = i.footer,
              r = o.length
            let a, s
            if (r) {
              const l = Hn(n.rtl, i.x, i.width)
              for (
                t.x = ca(i, n.footerAlign, n),
                  t.y += n.footerMarginTop,
                  e.textAlign = l.textAlign(n.footerAlign),
                  e.textBaseline = 'middle',
                  a = Ke(n.footerFont),
                  e.fillStyle = n.footerColor,
                  e.font = a.string,
                  s = 0;
                s < r;
                ++s
              )
                e.fillText(o[s], l.x(t.x), t.y + a.lineHeight / 2),
                  (t.y += a.lineHeight + n.footerSpacing)
            }
          }
          drawBackground(t, e, n, i) {
            const { xAlign: o, yAlign: r } = this,
              { x: a, y: s } = t,
              { width: l, height: c } = n,
              h = i.cornerRadius
            ;(e.fillStyle = i.backgroundColor),
              (e.strokeStyle = i.borderColor),
              (e.lineWidth = i.borderWidth),
              e.beginPath(),
              e.moveTo(a + h, s),
              'top' === r && this.drawCaret(t, e, n, i),
              e.lineTo(a + l - h, s),
              e.quadraticCurveTo(a + l, s, a + l, s + h),
              'center' === r && 'right' === o && this.drawCaret(t, e, n, i),
              e.lineTo(a + l, s + c - h),
              e.quadraticCurveTo(a + l, s + c, a + l - h, s + c),
              'bottom' === r && this.drawCaret(t, e, n, i),
              e.lineTo(a + h, s + c),
              e.quadraticCurveTo(a, s + c, a, s + c - h),
              'center' === r && 'left' === o && this.drawCaret(t, e, n, i),
              e.lineTo(a, s + h),
              e.quadraticCurveTo(a, s, a + h, s),
              e.closePath(),
              e.fill(),
              i.borderWidth > 0 && e.stroke()
          }
          _updateAnimationTarget(t) {
            const e = this,
              n = e._chart,
              i = e.$animations,
              o = i && i.x,
              r = i && i.y
            if (o || r) {
              const i = ea[t.position].call(e, e._active, e._eventPosition)
              if (!i) return
              const a = (e._size = ra(e, t)),
                s = Object.assign({}, i, e._size),
                l = sa(n, t, s),
                c = la(t, s, l, n)
              ;(o._to === c.x && r._to === c.y) ||
                ((e.xAlign = l.xAlign),
                (e.yAlign = l.yAlign),
                (e.width = a.width),
                (e.height = a.height),
                (e.caretX = i.x),
                (e.caretY = i.y),
                e._resolveAnimations().update(e, c))
            }
          }
          draw(t) {
            const e = this,
              n = e.options.setContext(e.getContext())
            let i = e.opacity
            if (!i) return
            e._updateAnimationTarget(n)
            const o = { width: e.width, height: e.height },
              r = { x: e.x, y: e.y }
            i = Math.abs(i) < 0.001 ? 0 : i
            const a = qe(n.padding),
              s =
                e.title.length ||
                e.beforeBody.length ||
                e.body.length ||
                e.afterBody.length ||
                e.footer.length
            n.enabled &&
              s &&
              (t.save(),
              (t.globalAlpha = i),
              e.drawBackground(r, t, o, n),
              $n(t, n.textDirection),
              (r.y += a.top),
              e.drawTitle(r, t, n),
              e.drawBody(r, t, n),
              e.drawFooter(r, t, n),
              Yn(t, n.textDirection),
              t.restore())
          }
          getActiveElements() {
            return this._active || []
          }
          setActiveElements(t, e) {
            const n = this,
              i = n._active,
              o = t.map((t) => {
                let { datasetIndex: e, index: i } = t
                const o = n._chart.getDatasetMeta(e)
                if (!o) throw new Error('Cannot find a dataset at index ' + e)
                return { datasetIndex: e, element: o.data[i], index: i }
              }),
              r = !it(i, o),
              a = n._positionChanged(o, e)
            ;(r || a) && ((n._active = o), (n._eventPosition = e), n.update(!0))
          }
          handleEvent(t, e) {
            const n = this,
              i = n.options,
              o = n._active || []
            let r = !1,
              a = []
            'mouseout' !== t.type &&
              ((a = n._chart.getElementsAtEventForMode(t, i.mode, i, e)), i.reverse && a.reverse())
            const s = n._positionChanged(a, t)
            return (
              (r = e || !it(a, o) || s),
              r &&
                ((n._active = a),
                (i.enabled || i.external) &&
                  ((n._eventPosition = { x: t.x, y: t.y }), n.update(!0, e))),
              r
            )
          }
          _positionChanged(t, e) {
            const { caretX: n, caretY: i, options: o } = this,
              r = ea[o.position].call(this, t, e)
            return !1 !== r && (n !== r.x || i !== r.y)
          }
        }
        ua.positioners = ea
        var fa = {
            id: 'tooltip',
            _element: ua,
            positioners: ea,
            afterInit(t, e, n) {
              n && (t.tooltip = new ua({ _chart: t, options: n }))
            },
            beforeUpdate(t, e, n) {
              t.tooltip && t.tooltip.initialize(n)
            },
            reset(t, e, n) {
              t.tooltip && t.tooltip.initialize(n)
            },
            afterDraw(t) {
              const e = t.tooltip,
                n = { tooltip: e }
              !1 !== t.notifyPlugins('beforeTooltipDraw', n) &&
                (e && e.draw(t.ctx), t.notifyPlugins('afterTooltipDraw', n))
            },
            afterEvent(t, e) {
              if (t.tooltip) {
                const n = e.replay
                t.tooltip.handleEvent(e.event, n) && (e.changed = !0)
              }
            },
            defaults: {
              enabled: !0,
              external: null,
              position: 'average',
              backgroundColor: 'rgba(0,0,0,0.8)',
              titleColor: '#fff',
              titleFont: { weight: 'bold' },
              titleSpacing: 2,
              titleMarginBottom: 6,
              titleAlign: 'left',
              bodyColor: '#fff',
              bodySpacing: 2,
              bodyFont: {},
              bodyAlign: 'left',
              footerColor: '#fff',
              footerSpacing: 2,
              footerMarginTop: 6,
              footerFont: { weight: 'bold' },
              footerAlign: 'left',
              padding: 6,
              caretPadding: 2,
              caretSize: 5,
              cornerRadius: 6,
              boxHeight: (t, e) => e.bodyFont.size,
              boxWidth: (t, e) => e.bodyFont.size,
              multiKeyBackground: '#fff',
              displayColors: !0,
              borderColor: 'rgba(0,0,0,0)',
              borderWidth: 0,
              animation: { duration: 400, easing: 'easeOutQuart' },
              animations: {
                numbers: {
                  type: 'number',
                  properties: ['x', 'y', 'width', 'height', 'caretX', 'caretY'],
                },
                opacity: { easing: 'linear', duration: 200 },
              },
              callbacks: {
                beforeTitle: U,
                title(t) {
                  if (t.length > 0) {
                    const e = t[0],
                      n = e.chart.data.labels,
                      i = n ? n.length : 0
                    if (this && this.options && 'dataset' === this.options.mode)
                      return e.dataset.label || ''
                    if (e.label) return e.label
                    if (i > 0 && e.dataIndex < i) return n[e.dataIndex]
                  }
                  return ''
                },
                afterTitle: U,
                beforeBody: U,
                beforeLabel: U,
                label(t) {
                  if (this && this.options && 'dataset' === this.options.mode)
                    return t.label + ': ' + t.formattedValue || t.formattedValue
                  let e = t.dataset.label || ''
                  e && (e += ': ')
                  const n = t.formattedValue
                  return q(n) || (e += n), e
                },
                labelColor(t) {
                  const e = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex)
                  return {
                    borderColor: e.borderColor,
                    backgroundColor: e.backgroundColor,
                    borderWidth: e.borderWidth,
                    borderDash: e.borderDash,
                    borderDashOffset: e.borderDashOffset,
                    borderRadius: 0,
                  }
                },
                labelTextColor() {
                  return this.options.bodyColor
                },
                labelPointStyle(t) {
                  const e = t.chart.getDatasetMeta(t.datasetIndex).controller.getStyle(t.dataIndex)
                  return { pointStyle: e.pointStyle, rotation: e.rotation }
                },
                afterLabel: U,
                afterBody: U,
                beforeFooter: U,
                footer: U,
                afterFooter: U,
              },
            },
            defaultRoutes: { bodyFont: 'font', footerFont: 'font', titleFont: 'font' },
            descriptors: {
              _scriptable: (t) => 'filter' !== t && 'itemSort' !== t && 'external' !== t,
              _indexable: !1,
              callbacks: { _scriptable: !1, _indexable: !1 },
              animation: { _fallback: !1 },
              animations: { _fallback: 'animation' },
            },
            additionalOptionScopes: ['interaction'],
          },
          pa = Object.freeze({
            __proto__: null,
            Decimation: Dr,
            Filler: Xr,
            Legend: Gr,
            SubTitle: ta,
            Title: Jr,
            Tooltip: fa,
          })
        function ga(t, e, n) {
          const i = t.indexOf(e)
          if (-1 === i)
            return ((t, e, n) => ('string' === typeof e ? t.push(e) - 1 : isNaN(e) ? null : n))(
              t,
              e,
              n,
            )
          return i !== t.lastIndexOf(e) ? n : i
        }
        class ma extends Do {
          constructor(t) {
            super(t), (this._startValue = void 0), (this._valueRange = 0)
          }
          parse(t, e) {
            if (q(t)) return null
            const n = this.getLabels()
            return ((t, e) => (null === t ? null : zt(Math.round(t), 0, e)))(
              (e = isFinite(e) && n[e] === t ? e : ga(n, t, Q(e, t))),
              n.length - 1,
            )
          }
          determineDataLimits() {
            const t = this,
              { minDefined: e, maxDefined: n } = t.getUserBounds()
            let { min: i, max: o } = t.getMinMax(!0)
            'ticks' === t.options.bounds && (e || (i = 0), n || (o = t.getLabels().length - 1)),
              (t.min = i),
              (t.max = o)
          }
          buildTicks() {
            const t = this,
              e = t.min,
              n = t.max,
              i = t.options.offset,
              o = []
            let r = t.getLabels()
            ;(r = 0 === e && n === r.length - 1 ? r : r.slice(e, n + 1)),
              (t._valueRange = Math.max(r.length - (i ? 0 : 1), 1)),
              (t._startValue = t.min - (i ? 0.5 : 0))
            for (let a = e; a <= n; a++) o.push({ value: a })
            return o
          }
          getLabelForValue(t) {
            const e = this.getLabels()
            return t >= 0 && t < e.length ? e[t] : t
          }
          configure() {
            const t = this
            super.configure(), t.isHorizontal() || (t._reversePixels = !t._reversePixels)
          }
          getPixelForValue(t) {
            const e = this
            return (
              'number' !== typeof t && (t = e.parse(t)),
              null === t ? NaN : e.getPixelForDecimal((t - e._startValue) / e._valueRange)
            )
          }
          getPixelForTick(t) {
            const e = this.ticks
            return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value)
          }
          getValueForPixel(t) {
            const e = this
            return Math.round(e._startValue + e.getDecimalForPixel(t) * e._valueRange)
          }
          getBasePixel() {
            return this.bottom
          }
        }
        function ba(t, e) {
          const n = [],
            {
              bounds: i,
              step: o,
              min: r,
              max: a,
              precision: s,
              count: l,
              maxTicks: c,
              maxDigits: h,
              includeBounds: d,
            } = t,
            u = o || 1,
            f = c - 1,
            { min: p, max: g } = e,
            m = !q(r),
            b = !q(a),
            x = !q(l),
            y = (g - p) / (h + 1)
          let v,
            _,
            w,
            M,
            k = St((g - p) / f / u) * u
          if (k < 1e-14 && !m && !b) return [{ value: p }, { value: g }]
          ;(M = Math.ceil(g / k) - Math.floor(p / k)),
            M > f && (k = St((M * k) / f / u) * u),
            q(s) || ((v = Math.pow(10, s)), (k = Math.ceil(k * v) / v)),
            'ticks' === i
              ? ((_ = Math.floor(p / k) * k), (w = Math.ceil(g / k) * k))
              : ((_ = p), (w = g)),
            m &&
            b &&
            o &&
            (function (t, e) {
              const n = Math.round(t)
              return n - e <= t && n + e >= t
            })((a - r) / o, k / 1e3)
              ? ((M = Math.round(Math.min((a - r) / k, c))), (k = (a - r) / M), (_ = r), (w = a))
              : x
              ? ((_ = m ? r : _), (w = b ? a : w), (M = l - 1), (k = (w - _) / M))
              : ((M = (w - _) / k),
                (M = Pt(M, Math.round(M), k / 1e3) ? Math.round(M) : Math.ceil(M)))
          const S = Math.max(Tt(k), Tt(_))
          ;(v = Math.pow(10, q(s) ? S : s)),
            (_ = Math.round(_ * v) / v),
            (w = Math.round(w * v) / v)
          let O = 0
          for (
            m &&
            (d && _ !== r
              ? (n.push({ value: r }),
                _ < r && O++,
                Pt(Math.round((_ + O * k) * v) / v, r, xa(r, y, t)) && O++)
              : _ < r && O++);
            O < M;
            ++O
          )
            n.push({ value: Math.round((_ + O * k) * v) / v })
          return (
            b && d && w !== a
              ? Pt(n[n.length - 1].value, a, xa(a, y, t))
                ? (n[n.length - 1].value = a)
                : n.push({ value: a })
              : (b && w !== a) || n.push({ value: w }),
            n
          )
        }
        function xa(t, e, n) {
          let { horizontal: i, minRotation: o } = n
          const r = Dt(o),
            a = (i ? Math.sin(r) : Math.cos(r)) || 0.001,
            s = 0.75 * e * ('' + t).length
          return Math.min(e / a, s)
        }
        ;(ma.id = 'category'),
          (ma.defaults = { ticks: { callback: ma.prototype.getLabelForValue } })
        class ya extends Do {
          constructor(t) {
            super(t),
              (this.start = void 0),
              (this.end = void 0),
              (this._startValue = void 0),
              (this._endValue = void 0),
              (this._valueRange = 0)
          }
          parse(t, e) {
            return q(t) || (('number' === typeof t || t instanceof Number) && !isFinite(+t))
              ? null
              : +t
          }
          handleTickRangeOptions() {
            const t = this,
              { beginAtZero: e } = t.options,
              { minDefined: n, maxDefined: i } = t.getUserBounds()
            let { min: o, max: r } = t
            const a = (t) => (o = n ? o : t),
              s = (t) => (r = i ? r : t)
            if (e) {
              const t = kt(o),
                e = kt(r)
              t < 0 && e < 0 ? s(0) : t > 0 && e > 0 && a(0)
            }
            if (o === r) {
              let t = 1
              ;(r >= Number.MAX_SAFE_INTEGER || o <= Number.MIN_SAFE_INTEGER) &&
                (t = Math.abs(0.05 * r)),
                s(r + t),
                e || a(o - t)
            }
            ;(t.min = o), (t.max = r)
          }
          getTickLimit() {
            const t = this,
              e = t.options.ticks
            let n,
              { maxTicksLimit: i, stepSize: o } = e
            return (
              o
                ? (n = Math.ceil(t.max / o) - Math.floor(t.min / o) + 1)
                : ((n = t.computeTickLimit()), (i = i || 11)),
              i && (n = Math.min(i, n)),
              n
            )
          }
          computeTickLimit() {
            return Number.POSITIVE_INFINITY
          }
          buildTicks() {
            const t = this,
              e = t.options,
              n = e.ticks
            let i = t.getTickLimit()
            i = Math.max(2, i)
            const o = ba(
              {
                maxTicks: i,
                bounds: e.bounds,
                min: e.min,
                max: e.max,
                precision: n.precision,
                step: n.stepSize,
                count: n.count,
                maxDigits: t._maxDigits(),
                horizontal: t.isHorizontal(),
                minRotation: n.minRotation || 0,
                includeBounds: !1 !== n.includeBounds,
              },
              t._range || t,
            )
            return (
              'ticks' === e.bounds && Ct(o, t, 'value'),
              e.reverse
                ? (o.reverse(), (t.start = t.max), (t.end = t.min))
                : ((t.start = t.min), (t.end = t.max)),
              o
            )
          }
          configure() {
            const t = this,
              e = t.ticks
            let n = t.min,
              i = t.max
            if ((super.configure(), t.options.offset && e.length)) {
              const t = (i - n) / Math.max(e.length - 1, 1) / 2
              ;(n -= t), (i += t)
            }
            ;(t._startValue = n), (t._endValue = i), (t._valueRange = i - n)
          }
          getLabelForValue(t) {
            return Wn(t, this.chart.options.locale)
          }
        }
        class va extends ya {
          determineDataLimits() {
            const t = this,
              { min: e, max: n } = t.getMinMax(!0)
            ;(t.min = Z(e) ? e : 0), (t.max = Z(n) ? n : 1), t.handleTickRangeOptions()
          }
          computeTickLimit() {
            const t = this,
              e = t.isHorizontal(),
              n = e ? t.width : t.height,
              i = Dt(t.options.ticks.minRotation),
              o = (e ? Math.sin(i) : Math.cos(i)) || 0.001,
              r = t._resolveTickFontOptions(0)
            return Math.ceil(n / Math.min(40, r.lineHeight / o))
          }
          getPixelForValue(t) {
            return null === t
              ? NaN
              : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
          }
          getValueForPixel(t) {
            return this._startValue + this.getDecimalForPixel(t) * this._valueRange
          }
        }
        function _a(t) {
          return 1 === t / Math.pow(10, Math.floor(Mt(t)))
        }
        ;(va.id = 'linear'), (va.defaults = { ticks: { callback: vo.formatters.numeric } })
        class wa extends Do {
          constructor(t) {
            super(t),
              (this.start = void 0),
              (this.end = void 0),
              (this._startValue = void 0),
              (this._valueRange = 0)
          }
          parse(t, e) {
            const n = ya.prototype.parse.apply(this, [t, e])
            if (0 !== n) return Z(n) && n > 0 ? n : null
            this._zero = !0
          }
          determineDataLimits() {
            const t = this,
              { min: e, max: n } = t.getMinMax(!0)
            ;(t.min = Z(e) ? Math.max(0, e) : null),
              (t.max = Z(n) ? Math.max(0, n) : null),
              t.options.beginAtZero && (t._zero = !0),
              t.handleTickRangeOptions()
          }
          handleTickRangeOptions() {
            const t = this,
              { minDefined: e, maxDefined: n } = t.getUserBounds()
            let i = t.min,
              o = t.max
            const r = (t) => (i = e ? i : t),
              a = (t) => (o = n ? o : t),
              s = (t, e) => Math.pow(10, Math.floor(Mt(t)) + e)
            i === o && (i <= 0 ? (r(1), a(10)) : (r(s(i, -1)), a(s(o, 1)))),
              i <= 0 && r(s(o, -1)),
              o <= 0 && a(s(i, 1)),
              t._zero && t.min !== t._suggestedMin && i === s(t.min, 0) && r(s(i, -1)),
              (t.min = i),
              (t.max = o)
          }
          buildTicks() {
            const t = this,
              e = t.options,
              n = (function (t, e) {
                const n = Math.floor(Mt(e.max)),
                  i = Math.ceil(e.max / Math.pow(10, n)),
                  o = []
                let r = J(t.min, Math.pow(10, Math.floor(Mt(e.min)))),
                  a = Math.floor(Mt(r)),
                  s = Math.floor(r / Math.pow(10, a)),
                  l = a < 0 ? Math.pow(10, Math.abs(a)) : 1
                do {
                  o.push({ value: r, major: _a(r) }),
                    ++s,
                    10 === s && ((s = 1), ++a, (l = a >= 0 ? 1 : l)),
                    (r = Math.round(s * Math.pow(10, a) * l) / l)
                } while (a < n || (a === n && s < i))
                const c = J(t.max, r)
                return o.push({ value: c, major: _a(r) }), o
              })({ min: t._userMin, max: t._userMax }, t)
            return (
              'ticks' === e.bounds && Ct(n, t, 'value'),
              e.reverse
                ? (n.reverse(), (t.start = t.max), (t.end = t.min))
                : ((t.start = t.min), (t.end = t.max)),
              n
            )
          }
          getLabelForValue(t) {
            return void 0 === t ? '0' : Wn(t, this.chart.options.locale)
          }
          configure() {
            const t = this,
              e = t.min
            super.configure(), (t._startValue = Mt(e)), (t._valueRange = Mt(t.max) - Mt(e))
          }
          getPixelForValue(t) {
            const e = this
            return (
              (void 0 !== t && 0 !== t) || (t = e.min),
              null === t || isNaN(t)
                ? NaN
                : e.getPixelForDecimal(t === e.min ? 0 : (Mt(t) - e._startValue) / e._valueRange)
            )
          }
          getValueForPixel(t) {
            const e = this,
              n = e.getDecimalForPixel(t)
            return Math.pow(10, e._startValue + n * e._valueRange)
          }
        }
        function Ma(t) {
          const e = t.ticks
          if (e.display && t.display) {
            const t = qe(e.backdropPadding)
            return Q(e.font && e.font.size, Oe.font.size) + t.height
          }
          return 0
        }
        function ka(t, e, n, i, o) {
          return t === i || t === o
            ? { start: e - n / 2, end: e + n / 2 }
            : t < i || t > o
            ? { start: e - n, end: e }
            : { start: e, end: e + n }
        }
        function Sa(t) {
          const e = { l: 0, r: t.width, t: 0, b: t.height - t.paddingTop },
            n = {},
            i = [],
            o = [],
            r = t.getLabels().length
          for (let c = 0; c < r; c++) {
            const r = t.options.pointLabels.setContext(t.getPointLabelContext(c))
            o[c] = r.padding
            const h = t.getPointPosition(c, t.drawingArea + o[c]),
              d = Ke(r.font),
              u =
                ((a = t.ctx),
                (s = d),
                (l = K((l = t._pointLabels[c])) ? l : [l]),
                { w: Ce(a, s.string, l), h: l.length * s.lineHeight })
            i[c] = u
            const f = t.getIndexAngle(c),
              p = At(f),
              g = ka(p, h.x, u.w, 0, 180),
              m = ka(p, h.y, u.h, 90, 270)
            g.start < e.l && ((e.l = g.start), (n.l = f)),
              g.end > e.r && ((e.r = g.end), (n.r = f)),
              m.start < e.t && ((e.t = m.start), (n.t = f)),
              m.end > e.b && ((e.b = m.end), (n.b = f))
          }
          var a, s, l
          t._setReductions(t.drawingArea, e, n),
            (t._pointLabelItems = (function (t, e, n) {
              const i = [],
                o = t.getLabels().length,
                r = t.options,
                a = Ma(r),
                s = t.getDistanceFromCenterForValue(r.ticks.reverse ? t.min : t.max)
              for (let l = 0; l < o; l++) {
                const o = 0 === l ? a / 2 : 0,
                  r = t.getPointPosition(l, s + o + n[l]),
                  c = At(t.getIndexAngle(l)),
                  h = e[l],
                  d = Ca(r.y, h.h, c),
                  u = Oa(c),
                  f = Pa(r.x, h.w, u)
                i.push({
                  x: r.x,
                  y: d,
                  textAlign: u,
                  left: f,
                  top: d,
                  right: f + h.w,
                  bottom: d + h.h,
                })
              }
              return i
            })(t, i, o))
        }
        function Oa(t) {
          return 0 === t || 180 === t ? 'center' : t < 180 ? 'left' : 'right'
        }
        function Pa(t, e, n) {
          return 'right' === n ? (t -= e) : 'center' === n && (t -= e / 2), t
        }
        function Ca(t, e, n) {
          return 90 === n || 270 === n ? (t -= e / 2) : (n > 270 || n < 90) && (t -= e), t
        }
        function Da(t, e, n, i) {
          const { ctx: o } = t
          if (n) o.arc(t.xCenter, t.yCenter, e, 0, mt)
          else {
            let n = t.getPointPosition(0, e)
            o.moveTo(n.x, n.y)
            for (let r = 1; r < i; r++) (n = t.getPointPosition(r, e)), o.lineTo(n.x, n.y)
          }
        }
        function Aa(t) {
          return Ot(t) ? t : 0
        }
        ;(wa.id = 'logarithmic'),
          (wa.defaults = { ticks: { callback: vo.formatters.logarithmic, major: { enabled: !0 } } })
        class Ta extends ya {
          constructor(t) {
            super(t),
              (this.xCenter = void 0),
              (this.yCenter = void 0),
              (this.drawingArea = void 0),
              (this._pointLabels = []),
              (this._pointLabelItems = [])
          }
          setDimensions() {
            const t = this
            ;(t.width = t.maxWidth),
              (t.height = t.maxHeight),
              (t.paddingTop = Ma(t.options) / 2),
              (t.xCenter = Math.floor(t.width / 2)),
              (t.yCenter = Math.floor((t.height - t.paddingTop) / 2)),
              (t.drawingArea = Math.min(t.height - t.paddingTop, t.width) / 2)
          }
          determineDataLimits() {
            const t = this,
              { min: e, max: n } = t.getMinMax(!1)
            ;(t.min = Z(e) && !isNaN(e) ? e : 0),
              (t.max = Z(n) && !isNaN(n) ? n : 0),
              t.handleTickRangeOptions()
          }
          computeTickLimit() {
            return Math.ceil(this.drawingArea / Ma(this.options))
          }
          generateTickLabels(t) {
            const e = this
            ya.prototype.generateTickLabels.call(e, t),
              (e._pointLabels = e.getLabels().map((t, n) => {
                const i = et(e.options.pointLabels.callback, [t, n], e)
                return i || 0 === i ? i : ''
              }))
          }
          fit() {
            const t = this,
              e = t.options
            e.display && e.pointLabels.display ? Sa(t) : t.setCenterPoint(0, 0, 0, 0)
          }
          _setReductions(t, e, n) {
            const i = this
            let o = e.l / Math.sin(n.l),
              r = Math.max(e.r - i.width, 0) / Math.sin(n.r),
              a = -e.t / Math.cos(n.t),
              s = -Math.max(e.b - (i.height - i.paddingTop), 0) / Math.cos(n.b)
            ;(o = Aa(o)),
              (r = Aa(r)),
              (a = Aa(a)),
              (s = Aa(s)),
              (i.drawingArea = Math.max(
                t / 2,
                Math.min(Math.floor(t - (o + r) / 2), Math.floor(t - (a + s) / 2)),
              )),
              i.setCenterPoint(o, r, a, s)
          }
          setCenterPoint(t, e, n, i) {
            const o = this,
              r = o.width - e - o.drawingArea,
              a = t + o.drawingArea,
              s = n + o.drawingArea,
              l = o.height - o.paddingTop - i - o.drawingArea
            ;(o.xCenter = Math.floor((a + r) / 2 + o.left)),
              (o.yCenter = Math.floor((s + l) / 2 + o.top + o.paddingTop))
          }
          getIndexAngle(t) {
            return Rt(t * (mt / this.getLabels().length) + Dt(this.options.startAngle || 0))
          }
          getDistanceFromCenterForValue(t) {
            const e = this
            if (q(t)) return NaN
            const n = e.drawingArea / (e.max - e.min)
            return e.options.reverse ? (e.max - t) * n : (t - e.min) * n
          }
          getValueForDistanceFromCenter(t) {
            if (q(t)) return NaN
            const e = this,
              n = t / (e.drawingArea / (e.max - e.min))
            return e.options.reverse ? e.max - n : e.min + n
          }
          getPointLabelContext(t) {
            const e = this,
              n = e._pointLabels || []
            if (t >= 0 && t < n.length) {
              const i = n[t]
              return (function (t, e, n) {
                return Object.assign(Object.create(t), { label: n, index: e, type: 'pointLabel' })
              })(e.getContext(), t, i)
            }
          }
          getPointPosition(t, e) {
            const n = this,
              i = n.getIndexAngle(t) - vt
            return { x: Math.cos(i) * e + n.xCenter, y: Math.sin(i) * e + n.yCenter, angle: i }
          }
          getPointPositionForValue(t, e) {
            return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
          }
          getBasePosition(t) {
            return this.getPointPositionForValue(t || 0, this.getBaseValue())
          }
          getPointLabelPosition(t) {
            const { left: e, top: n, right: i, bottom: o } = this._pointLabelItems[t]
            return { left: e, top: n, right: i, bottom: o }
          }
          drawBackground() {
            const t = this,
              {
                backgroundColor: e,
                grid: { circular: n },
              } = t.options
            if (e) {
              const i = t.ctx
              i.save(),
                i.beginPath(),
                Da(t, t.getDistanceFromCenterForValue(t._endValue), n, t.getLabels().length),
                i.closePath(),
                (i.fillStyle = e),
                i.fill(),
                i.restore()
            }
          }
          drawGrid() {
            const t = this,
              e = t.ctx,
              n = t.options,
              { angleLines: i, grid: o } = n,
              r = t.getLabels().length
            let a, s, l
            if (
              (n.pointLabels.display &&
                (function (t, e) {
                  const {
                    ctx: n,
                    options: { pointLabels: i },
                  } = t
                  for (let o = e - 1; o >= 0; o--) {
                    const e = i.setContext(t.getPointLabelContext(o)),
                      r = Ke(e.font),
                      {
                        x: a,
                        y: s,
                        textAlign: l,
                        left: c,
                        top: h,
                        right: d,
                        bottom: u,
                      } = t._pointLabelItems[o],
                      { backdropColor: f } = e
                    if (!q(f)) {
                      const t = qe(e.backdropPadding)
                      ;(n.fillStyle = f),
                        n.fillRect(c - t.left, h - t.top, d - c + t.width, u - h + t.height)
                    }
                    Fe(n, t._pointLabels[o], a, s + r.lineHeight / 2, r, {
                      color: e.color,
                      textAlign: l,
                      textBaseline: 'middle',
                    })
                  }
                })(t, r),
              o.display &&
                t.ticks.forEach((e, n) => {
                  if (0 !== n) {
                    s = t.getDistanceFromCenterForValue(e.value)
                    const i = o.setContext(t.getContext(n - 1))
                    !(function (t, e, n, i) {
                      const o = t.ctx,
                        r = e.circular,
                        { color: a, lineWidth: s } = e
                      ;(!r && !i) ||
                        !a ||
                        !s ||
                        n < 0 ||
                        (o.save(),
                        (o.strokeStyle = a),
                        (o.lineWidth = s),
                        o.setLineDash(e.borderDash),
                        (o.lineDashOffset = e.borderDashOffset),
                        o.beginPath(),
                        Da(t, n, r, i),
                        o.closePath(),
                        o.stroke(),
                        o.restore())
                    })(t, i, s, r)
                  }
                }),
              i.display)
            ) {
              for (e.save(), a = t.getLabels().length - 1; a >= 0; a--) {
                const o = i.setContext(t.getPointLabelContext(a)),
                  { color: r, lineWidth: c } = o
                c &&
                  r &&
                  ((e.lineWidth = c),
                  (e.strokeStyle = r),
                  e.setLineDash(o.borderDash),
                  (e.lineDashOffset = o.borderDashOffset),
                  (s = t.getDistanceFromCenterForValue(n.ticks.reverse ? t.min : t.max)),
                  (l = t.getPointPosition(a, s)),
                  e.beginPath(),
                  e.moveTo(t.xCenter, t.yCenter),
                  e.lineTo(l.x, l.y),
                  e.stroke())
              }
              e.restore()
            }
          }
          drawBorder() {}
          drawLabels() {
            const t = this,
              e = t.ctx,
              n = t.options,
              i = n.ticks
            if (!i.display) return
            const o = t.getIndexAngle(0)
            let r, a
            e.save(),
              e.translate(t.xCenter, t.yCenter),
              e.rotate(o),
              (e.textAlign = 'center'),
              (e.textBaseline = 'middle'),
              t.ticks.forEach((o, s) => {
                if (0 === s && !n.reverse) return
                const l = i.setContext(t.getContext(s)),
                  c = Ke(l.font)
                if (
                  ((r = t.getDistanceFromCenterForValue(t.ticks[s].value)), l.showLabelBackdrop)
                ) {
                  ;(e.font = c.string),
                    (a = e.measureText(o.label).width),
                    (e.fillStyle = l.backdropColor)
                  const t = qe(l.backdropPadding)
                  e.fillRect(
                    -a / 2 - t.left,
                    -r - c.size / 2 - t.top,
                    a + t.width,
                    c.size + t.height,
                  )
                }
                Fe(e, o.label, 0, -r, c, { color: l.color })
              }),
              e.restore()
          }
          drawTitle() {}
        }
        ;(Ta.id = 'radialLinear'),
          (Ta.defaults = {
            display: !0,
            animate: !0,
            position: 'chartArea',
            angleLines: { display: !0, lineWidth: 1, borderDash: [], borderDashOffset: 0 },
            grid: { circular: !1 },
            startAngle: 0,
            ticks: { showLabelBackdrop: !0, callback: vo.formatters.numeric },
            pointLabels: {
              backdropColor: void 0,
              backdropPadding: 2,
              display: !0,
              font: { size: 10 },
              callback: (t) => t,
              padding: 5,
            },
          }),
          (Ta.defaultRoutes = {
            'angleLines.color': 'borderColor',
            'pointLabels.color': 'color',
            'ticks.color': 'color',
          }),
          (Ta.descriptors = { angleLines: { _fallback: 'grid' } })
        const Ea = {
            millisecond: { common: !0, size: 1, steps: 1e3 },
            second: { common: !0, size: 1e3, steps: 60 },
            minute: { common: !0, size: 6e4, steps: 60 },
            hour: { common: !0, size: 36e5, steps: 24 },
            day: { common: !0, size: 864e5, steps: 30 },
            week: { common: !1, size: 6048e5, steps: 4 },
            month: { common: !0, size: 2628e6, steps: 12 },
            quarter: { common: !1, size: 7884e6, steps: 4 },
            year: { common: !0, size: 3154e7 },
          },
          La = Object.keys(Ea)
        function Ra(t, e) {
          return t - e
        }
        function ja(t, e) {
          if (q(e)) return null
          const n = t._adapter,
            { parser: i, round: o, isoWeekday: r } = t._parseOpts
          let a = e
          return (
            'function' === typeof i && (a = i(a)),
            Z(a) || (a = 'string' === typeof i ? n.parse(a, i) : n.parse(a)),
            null === a
              ? null
              : (o &&
                  (a =
                    'week' !== o || (!Ot(r) && !0 !== r)
                      ? n.startOf(a, o)
                      : n.startOf(a, 'isoWeek', r)),
                +a)
          )
        }
        function za(t, e, n, i) {
          const o = La.length
          for (let r = La.indexOf(t); r < o - 1; ++r) {
            const t = Ea[La[r]],
              o = t.steps ? t.steps : Number.MAX_SAFE_INTEGER
            if (t.common && Math.ceil((n - e) / (o * t.size)) <= i) return La[r]
          }
          return La[o - 1]
        }
        function Fa(t, e, n) {
          if (n) {
            if (n.length) {
              const { lo: i, hi: o } = Ze(n, e)
              t[n[i] >= e ? n[i] : n[o]] = !0
            }
          } else t[e] = !0
        }
        function Ia(t, e, n) {
          const i = [],
            o = {},
            r = e.length
          let a, s
          for (a = 0; a < r; ++a) (s = e[a]), (o[s] = a), i.push({ value: s, major: !1 })
          return 0 !== r && n
            ? (function (t, e, n, i) {
                const o = t._adapter,
                  r = +o.startOf(e[0].value, i),
                  a = e[e.length - 1].value
                let s, l
                for (s = r; s <= a; s = +o.add(s, 1, i)) (l = n[s]), l >= 0 && (e[l].major = !0)
                return e
              })(t, i, o, n)
            : i
        }
        class Va extends Do {
          constructor(t) {
            super(t),
              (this._cache = { data: [], labels: [], all: [] }),
              (this._unit = 'day'),
              (this._majorUnit = void 0),
              (this._offsets = {}),
              (this._normalized = !1),
              (this._parseOpts = void 0)
          }
          init(t, e) {
            const n = t.time || (t.time = {}),
              i = (this._adapter = new ji._date(t.adapters.date))
            lt(n.displayFormats, i.formats()),
              (this._parseOpts = { parser: n.parser, round: n.round, isoWeekday: n.isoWeekday }),
              super.init(t),
              (this._normalized = e.normalized)
          }
          parse(t, e) {
            return void 0 === t ? null : ja(this, t)
          }
          beforeLayout() {
            super.beforeLayout(), (this._cache = { data: [], labels: [], all: [] })
          }
          determineDataLimits() {
            const t = this,
              e = t.options,
              n = t._adapter,
              i = e.time.unit || 'day'
            let { min: o, max: r, minDefined: a, maxDefined: s } = t.getUserBounds()
            function l(t) {
              a || isNaN(t.min) || (o = Math.min(o, t.min)),
                s || isNaN(t.max) || (r = Math.max(r, t.max))
            }
            ;(a && s) ||
              (l(t._getLabelBounds()),
              ('ticks' === e.bounds && 'labels' === e.ticks.source) || l(t.getMinMax(!1))),
              (o = Z(o) && !isNaN(o) ? o : +n.startOf(Date.now(), i)),
              (r = Z(r) && !isNaN(r) ? r : +n.endOf(Date.now(), i) + 1),
              (t.min = Math.min(o, r - 1)),
              (t.max = Math.max(o + 1, r))
          }
          _getLabelBounds() {
            const t = this.getLabelTimestamps()
            let e = Number.POSITIVE_INFINITY,
              n = Number.NEGATIVE_INFINITY
            return t.length && ((e = t[0]), (n = t[t.length - 1])), { min: e, max: n }
          }
          buildTicks() {
            const t = this,
              e = t.options,
              n = e.time,
              i = e.ticks,
              o = 'labels' === i.source ? t.getLabelTimestamps() : t._generate()
            'ticks' === e.bounds &&
              o.length &&
              ((t.min = t._userMin || o[0]), (t.max = t._userMax || o[o.length - 1]))
            const r = t.min,
              a = (function (t, e, n) {
                let i = 0,
                  o = t.length
                for (; i < o && t[i] < e; ) i++
                for (; o > i && t[o - 1] > n; ) o--
                return i > 0 || o < t.length ? t.slice(i, o) : t
              })(o, r, t.max)
            return (
              (t._unit =
                n.unit ||
                (i.autoSkip
                  ? za(n.minUnit, t.min, t.max, t._getLabelCapacity(r))
                  : (function (t, e, n, i, o) {
                      for (let r = La.length - 1; r >= La.indexOf(n); r--) {
                        const n = La[r]
                        if (Ea[n].common && t._adapter.diff(o, i, n) >= e - 1) return n
                      }
                      return La[n ? La.indexOf(n) : 0]
                    })(t, a.length, n.minUnit, t.min, t.max))),
              (t._majorUnit =
                i.major.enabled && 'year' !== t._unit
                  ? (function (t) {
                      for (let e = La.indexOf(t) + 1, n = La.length; e < n; ++e)
                        if (Ea[La[e]].common) return La[e]
                    })(t._unit)
                  : void 0),
              t.initOffsets(o),
              e.reverse && a.reverse(),
              Ia(t, a, t._majorUnit)
            )
          }
          initOffsets(t) {
            const e = this
            let n,
              i,
              o = 0,
              r = 0
            e.options.offset &&
              t.length &&
              ((n = e.getDecimalForValue(t[0])),
              (o = 1 === t.length ? 1 - n : (e.getDecimalForValue(t[1]) - n) / 2),
              (i = e.getDecimalForValue(t[t.length - 1])),
              (r = 1 === t.length ? i : (i - e.getDecimalForValue(t[t.length - 2])) / 2))
            const a = t.length < 3 ? 0.5 : 0.25
            ;(o = zt(o, 0, a)),
              (r = zt(r, 0, a)),
              (e._offsets = { start: o, end: r, factor: 1 / (o + 1 + r) })
          }
          _generate() {
            const t = this,
              e = t._adapter,
              n = t.min,
              i = t.max,
              o = t.options,
              r = o.time,
              a = r.unit || za(r.minUnit, n, i, t._getLabelCapacity(n)),
              s = Q(r.stepSize, 1),
              l = 'week' === a && r.isoWeekday,
              c = Ot(l) || !0 === l,
              h = {}
            let d,
              u,
              f = n
            if (
              (c && (f = +e.startOf(f, 'isoWeek', l)),
              (f = +e.startOf(f, c ? 'day' : a)),
              e.diff(i, n, a) > 1e5 * s)
            )
              throw new Error(
                n + ' and ' + i + ' are too far apart with stepSize of ' + s + ' ' + a,
              )
            const p = 'data' === o.ticks.source && t.getDataTimestamps()
            for (d = f, u = 0; d < i; d = +e.add(d, s, a), u++) Fa(h, d, p)
            return (
              (d !== i && 'ticks' !== o.bounds && 1 !== u) || Fa(h, d, p),
              Object.keys(h)
                .sort((t, e) => t - e)
                .map((t) => +t)
            )
          }
          getLabelForValue(t) {
            const e = this._adapter,
              n = this.options.time
            return n.tooltipFormat
              ? e.format(t, n.tooltipFormat)
              : e.format(t, n.displayFormats.datetime)
          }
          _tickFormatFunction(t, e, n, i) {
            const o = this,
              r = o.options,
              a = r.time.displayFormats,
              s = o._unit,
              l = o._majorUnit,
              c = s && a[s],
              h = l && a[l],
              d = n[e],
              u = l && h && d && d.major,
              f = o._adapter.format(t, i || (u ? h : c)),
              p = r.ticks.callback
            return p ? et(p, [f, e, n], o) : f
          }
          generateTickLabels(t) {
            let e, n, i
            for (e = 0, n = t.length; e < n; ++e)
              (i = t[e]), (i.label = this._tickFormatFunction(i.value, e, t))
          }
          getDecimalForValue(t) {
            const e = this
            return null === t ? NaN : (t - e.min) / (e.max - e.min)
          }
          getPixelForValue(t) {
            const e = this,
              n = e._offsets,
              i = e.getDecimalForValue(t)
            return e.getPixelForDecimal((n.start + i) * n.factor)
          }
          getValueForPixel(t) {
            const e = this,
              n = e._offsets,
              i = e.getDecimalForPixel(t) / n.factor - n.end
            return e.min + i * (e.max - e.min)
          }
          _getLabelSize(t) {
            const e = this,
              n = e.options.ticks,
              i = e.ctx.measureText(t).width,
              o = Dt(e.isHorizontal() ? n.maxRotation : n.minRotation),
              r = Math.cos(o),
              a = Math.sin(o),
              s = e._resolveTickFontOptions(0).size
            return { w: i * r + s * a, h: i * a + s * r }
          }
          _getLabelCapacity(t) {
            const e = this,
              n = e.options.time,
              i = n.displayFormats,
              o = i[n.unit] || i.millisecond,
              r = e._tickFormatFunction(t, 0, Ia(e, [t], e._majorUnit), o),
              a = e._getLabelSize(r),
              s = Math.floor(e.isHorizontal() ? e.width / a.w : e.height / a.h) - 1
            return s > 0 ? s : 1
          }
          getDataTimestamps() {
            const t = this
            let e,
              n,
              i = t._cache.data || []
            if (i.length) return i
            const o = t.getMatchingVisibleMetas()
            if (t._normalized && o.length)
              return (t._cache.data = o[0].controller.getAllParsedValues(t))
            for (e = 0, n = o.length; e < n; ++e)
              i = i.concat(o[e].controller.getAllParsedValues(t))
            return (t._cache.data = t.normalize(i))
          }
          getLabelTimestamps() {
            const t = this,
              e = t._cache.labels || []
            let n, i
            if (e.length) return e
            const o = t.getLabels()
            for (n = 0, i = o.length; n < i; ++n) e.push(ja(t, o[n]))
            return (t._cache.labels = t._normalized ? e : t.normalize(e))
          }
          normalize(t) {
            return nn(t.sort(Ra))
          }
        }
        function Ba(t, e, n) {
          let i,
            o,
            r,
            a,
            s = 0,
            l = t.length - 1
          n
            ? (e >= t[s].pos && e <= t[l].pos && ({ lo: s, hi: l } = Je(t, 'pos', e)),
              ({ pos: i, time: r } = t[s]),
              ({ pos: o, time: a } = t[l]))
            : (e >= t[s].time && e <= t[l].time && ({ lo: s, hi: l } = Je(t, 'time', e)),
              ({ time: i, pos: r } = t[s]),
              ({ time: o, pos: a } = t[l]))
          const c = o - i
          return c ? r + ((a - r) * (e - i)) / c : r
        }
        ;(Va.id = 'time'),
          (Va.defaults = {
            bounds: 'data',
            adapters: {},
            time: {
              parser: !1,
              unit: !1,
              round: !1,
              isoWeekday: !1,
              minUnit: 'millisecond',
              displayFormats: {},
            },
            ticks: { source: 'auto', major: { enabled: !1 } },
          })
        class Na extends Va {
          constructor(t) {
            super(t), (this._table = []), (this._minPos = void 0), (this._tableRange = void 0)
          }
          initOffsets() {
            const t = this,
              e = t._getTimestampsForTable(),
              n = (t._table = t.buildLookupTable(e))
            ;(t._minPos = Ba(n, t.min)),
              (t._tableRange = Ba(n, t.max) - t._minPos),
              super.initOffsets(e)
          }
          buildLookupTable(t) {
            const { min: e, max: n } = this,
              i = [],
              o = []
            let r, a, s, l, c
            for (r = 0, a = t.length; r < a; ++r) (l = t[r]), l >= e && l <= n && i.push(l)
            if (i.length < 2)
              return [
                { time: e, pos: 0 },
                { time: n, pos: 1 },
              ]
            for (r = 0, a = i.length; r < a; ++r)
              (c = i[r + 1]),
                (s = i[r - 1]),
                (l = i[r]),
                Math.round((c + s) / 2) !== l && o.push({ time: l, pos: r / (a - 1) })
            return o
          }
          _getTimestampsForTable() {
            const t = this
            let e = t._cache.all || []
            if (e.length) return e
            const n = t.getDataTimestamps(),
              i = t.getLabelTimestamps()
            return (
              (e = n.length && i.length ? t.normalize(n.concat(i)) : n.length ? n : i),
              (e = t._cache.all = e),
              e
            )
          }
          getDecimalForValue(t) {
            return (Ba(this._table, t) - this._minPos) / this._tableRange
          }
          getValueForPixel(t) {
            const e = this,
              n = e._offsets,
              i = e.getDecimalForPixel(t) / n.factor - n.end
            return Ba(e._table, i * e._tableRange + e._minPos, !0)
          }
        }
        ;(Na.id = 'timeseries'), (Na.defaults = Va.defaults)
        const Wa = [
          Ei,
          Or,
          pa,
          Object.freeze({
            __proto__: null,
            CategoryScale: ma,
            LinearScale: va,
            LogarithmicScale: wa,
            RadialLinearScale: Ta,
            TimeScale: Va,
            TimeSeriesScale: Na,
          }),
        ]
        Qo.register(...Wa)
        const Ha = 'chartjs-tooltip',
          $a = 'chartjs-tooltip-body',
          Ya = 'chartjs-tooltip-body-item',
          Ua = 'chartjs-tooltip-header',
          Xa = 'chartjs-tooltip-header-item',
          qa = (t) => {
            const { chart: e, tooltip: n } = t,
              i = ((t) => {
                let e = t.canvas.parentNode.querySelector('div')
                if (!e) {
                  ;(e = document.createElement('div')), e.classList.add(Ha)
                  const n = document.createElement('table')
                  ;(n.style.margin = '0px'), e.appendChild(n), t.canvas.parentNode.appendChild(e)
                }
                return e
              })(e)
            if (0 === n.opacity) return void (i.style.opacity = 0)
            if (n.body) {
              const t = n.title || [],
                e = n.body.map((t) => t.lines),
                o = document.createElement('thead')
              o.classList.add(Ua),
                t.forEach((t) => {
                  const e = document.createElement('tr')
                  ;(e.style.borderWidth = 0), e.classList.add(Xa)
                  const n = document.createElement('th')
                  n.style.borderWidth = 0
                  const i = document.createTextNode(t)
                  n.appendChild(i), e.appendChild(n), o.appendChild(e)
                })
              const r = document.createElement('tbody')
              r.classList.add($a),
                e.forEach((t, e) => {
                  const i = n.labelColors[e],
                    o = document.createElement('span')
                  ;(o.style.background = i.backgroundColor),
                    (o.style.borderColor = i.borderColor),
                    (o.style.borderWidth = '2px'),
                    (o.style.marginRight = '10px'),
                    (o.style.height = '10px'),
                    (o.style.width = '10px'),
                    (o.style.display = 'inline-block')
                  const a = document.createElement('tr')
                  a.classList.add(Ya)
                  const s = document.createElement('td')
                  s.style.borderWidth = 0
                  const l = document.createTextNode(t)
                  s.appendChild(o), s.appendChild(l), a.appendChild(s), r.appendChild(a)
                })
              const a = i.querySelector('table')
              for (; a.firstChild; ) a.firstChild.remove()
              a.appendChild(o), a.appendChild(r)
            }
            const { offsetLeft: o, offsetTop: r } = e.canvas
            ;(i.style.opacity = 1),
              (i.style.left = o + n.caretX + 'px'),
              (i.style.top = r + n.caretY + 'px'),
              (i.style.font = n.options.bodyFont.string),
              (i.style.padding = n.padding + 'px ' + n.padding + 'px')
          }
        var Ka = 'object' == typeof s && s && s.Object === Object && s,
          Ga = Ka,
          Za = 'object' == typeof self && self && self.Object === Object && self,
          Ja = Ga || Za || Function('return this')(),
          Qa = Ja.Symbol,
          ts = Qa,
          es = Object.prototype,
          ns = es.hasOwnProperty,
          is = es.toString,
          os = ts ? ts.toStringTag : void 0
        var rs = function (t) {
            var e = ns.call(t, os),
              n = t[os]
            try {
              t[os] = void 0
              var i = !0
            } catch (p) {}
            var o = is.call(t)
            return i && (e ? (t[os] = n) : delete t[os]), o
          },
          as = Object.prototype.toString
        var ss = rs,
          ls = function (t) {
            return as.call(t)
          },
          cs = Qa ? Qa.toStringTag : void 0
        var hs = function (t) {
          return null == t
            ? void 0 === t
              ? '[object Undefined]'
              : '[object Null]'
            : cs && cs in Object(t)
            ? ss(t)
            : ls(t)
        }
        var ds = function (t) {
            var e = typeof t
            return null != t && ('object' == e || 'function' == e)
          },
          us = hs,
          fs = ds
        var ps = function (t) {
            if (!fs(t)) return !1
            var e = us(t)
            return (
              '[object Function]' == e ||
              '[object GeneratorFunction]' == e ||
              '[object AsyncFunction]' == e ||
              '[object Proxy]' == e
            )
          },
          gs = Ja['__core-js_shared__'],
          ms = (function () {
            var t = /[^.]+$/.exec((gs && gs.keys && gs.keys.IE_PROTO) || '')
            return t ? 'Symbol(src)_1.' + t : ''
          })()
        var bs = function (t) {
            return !!ms && ms in t
          },
          xs = Function.prototype.toString
        var ys = function (t) {
            if (null != t) {
              try {
                return xs.call(t)
              } catch (p) {}
              try {
                return t + ''
              } catch (p) {}
            }
            return ''
          },
          vs = ps,
          _s = bs,
          ws = ds,
          Ms = ys,
          ks = /^\[object .+?Constructor\]$/,
          Ss = Function.prototype,
          Os = Object.prototype,
          Ps = Ss.toString,
          Cs = Os.hasOwnProperty,
          Ds = RegExp(
            '^' +
              Ps.call(Cs)
                .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
                .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
              '$',
          )
        var As = function (t) {
            return !(!ws(t) || _s(t)) && (vs(t) ? Ds : ks).test(Ms(t))
          },
          Ts = function (t, e) {
            return null == t ? void 0 : t[e]
          }
        var Es = function (t, e) {
            var n = Ts(t, e)
            return As(n) ? n : void 0
          },
          Ls = Es,
          Rs = (function () {
            try {
              var t = Ls(Object, 'defineProperty')
              return t({}, '', {}), t
            } catch (p) {}
          })(),
          js = Rs
        var zs = function (t, e, n) {
          '__proto__' == e && js
            ? js(t, e, { configurable: !0, enumerable: !0, value: n, writable: !0 })
            : (t[e] = n)
        }
        var Fs = function (t, e) {
            return t === e || (t !== t && e !== e)
          },
          Is = zs,
          Vs = Fs,
          Bs = Object.prototype.hasOwnProperty
        var Ns = function (t, e, n) {
            var i = t[e]
            ;(Bs.call(t, e) && Vs(i, n) && (void 0 !== n || e in t)) || Is(t, e, n)
          },
          Ws = Ns,
          Hs = zs
        var $s = function (t, e, n, i) {
          var o = !n
          n || (n = {})
          for (var r = -1, a = e.length; ++r < a; ) {
            var s = e[r],
              l = i ? i(n[s], t[s], s, n, t) : void 0
            void 0 === l && (l = t[s]), o ? Hs(n, s, l) : Ws(n, s, l)
          }
          return n
        }
        var Ys = function (t) {
          return t
        }
        var Us = function (t, e, n) {
            switch (n.length) {
              case 0:
                return t.call(e)
              case 1:
                return t.call(e, n[0])
              case 2:
                return t.call(e, n[0], n[1])
              case 3:
                return t.call(e, n[0], n[1], n[2])
            }
            return t.apply(e, n)
          },
          Xs = Math.max
        var qs = function (t, e, n) {
          return (
            (e = Xs(void 0 === e ? t.length - 1 : e, 0)),
            function () {
              for (var i = arguments, o = -1, r = Xs(i.length - e, 0), a = Array(r); ++o < r; )
                a[o] = i[e + o]
              o = -1
              for (var s = Array(e + 1); ++o < e; ) s[o] = i[o]
              return (s[e] = n(a)), Us(t, this, s)
            }
          )
        }
        var Ks = function (t) {
            return function () {
              return t
            }
          },
          Gs = Rs,
          Zs = Gs
            ? function (t, e) {
                return Gs(t, 'toString', {
                  configurable: !0,
                  enumerable: !1,
                  value: Ks(e),
                  writable: !0,
                })
              }
            : Ys,
          Js = Date.now
        var Qs = function (t) {
            var e = 0,
              n = 0
            return function () {
              var i = Js(),
                o = 16 - (i - n)
              if (((n = i), o > 0)) {
                if (++e >= 800) return arguments[0]
              } else e = 0
              return t.apply(void 0, arguments)
            }
          },
          tl = Qs(Zs),
          el = Ys,
          nl = qs,
          il = tl
        var ol = function (t) {
            return 'number' == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
          },
          rl = ps,
          al = ol
        var sl = function (t) {
            return null != t && al(t.length) && !rl(t)
          },
          ll = /^(?:0|[1-9]\d*)$/
        var cl = function (t, e) {
            var n = typeof t
            return (
              !!(e = null == e ? 9007199254740991 : e) &&
              ('number' == n || ('symbol' != n && ll.test(t))) &&
              t > -1 &&
              t % 1 == 0 &&
              t < e
            )
          },
          hl = Fs,
          dl = sl,
          ul = cl,
          fl = ds
        var pl = function (t, e) {
            return il(nl(t, e, el), t + '')
          },
          gl = function (t, e, n) {
            if (!fl(n)) return !1
            var i = typeof e
            return (
              !!('number' == i ? dl(n) && ul(e, n.length) : 'string' == i && e in n) && hl(n[e], t)
            )
          }
        var ml = function (t) {
            return pl(function (e, n) {
              var i = -1,
                o = n.length,
                r = o > 1 ? n[o - 1] : void 0,
                a = o > 2 ? n[2] : void 0
              for (
                r = t.length > 3 && 'function' == typeof r ? (o--, r) : void 0,
                  a && gl(n[0], n[1], a) && ((r = o < 3 ? void 0 : r), (o = 1)),
                  e = Object(e);
                ++i < o;

              ) {
                var s = n[i]
                s && t(e, s, i, r)
              }
              return e
            })
          },
          bl = Object.prototype
        var xl = function (t) {
          var e = t && t.constructor
          return t === (('function' == typeof e && e.prototype) || bl)
        }
        var yl = function (t, e) {
          for (var n = -1, i = Array(t); ++n < t; ) i[n] = e(n)
          return i
        }
        var vl = function (t) {
            return null != t && 'object' == typeof t
          },
          _l = hs,
          wl = vl
        var Ml = function (t) {
            return wl(t) && '[object Arguments]' == _l(t)
          },
          kl = vl,
          Sl = Object.prototype,
          Ol = Sl.hasOwnProperty,
          Pl = Sl.propertyIsEnumerable,
          Cl = Ml(
            (function () {
              return arguments
            })(),
          )
            ? Ml
            : function (t) {
                return kl(t) && Ol.call(t, 'callee') && !Pl.call(t, 'callee')
              },
          Dl = Cl,
          Al = Array.isArray,
          Tl = { exports: {} }
        var El = function () {
          return !1
        }
        !(function (t, e) {
          var n = Ja,
            i = El,
            o = e && !e.nodeType && e,
            r = o && t && !t.nodeType && t,
            a = r && r.exports === o ? n.Buffer : void 0,
            s = (a ? a.isBuffer : void 0) || i
          t.exports = s
        })(Tl, Tl.exports)
        var Ll = hs,
          Rl = ol,
          jl = vl,
          zl = {}
        ;(zl['[object Float32Array]'] =
          zl['[object Float64Array]'] =
          zl['[object Int8Array]'] =
          zl['[object Int16Array]'] =
          zl['[object Int32Array]'] =
          zl['[object Uint8Array]'] =
          zl['[object Uint8ClampedArray]'] =
          zl['[object Uint16Array]'] =
          zl['[object Uint32Array]'] =
            !0),
          (zl['[object Arguments]'] =
            zl['[object Array]'] =
            zl['[object ArrayBuffer]'] =
            zl['[object Boolean]'] =
            zl['[object DataView]'] =
            zl['[object Date]'] =
            zl['[object Error]'] =
            zl['[object Function]'] =
            zl['[object Map]'] =
            zl['[object Number]'] =
            zl['[object Object]'] =
            zl['[object RegExp]'] =
            zl['[object Set]'] =
            zl['[object String]'] =
            zl['[object WeakMap]'] =
              !1)
        var Fl = function (t) {
          return jl(t) && Rl(t.length) && !!zl[Ll(t)]
        }
        var Il = function (t) {
            return function (e) {
              return t(e)
            }
          },
          Vl = { exports: {} }
        !(function (t, e) {
          var n = Ka,
            i = e && !e.nodeType && e,
            o = i && t && !t.nodeType && t,
            r = o && o.exports === i && n.process,
            a = (function () {
              try {
                var t = o && o.require && o.require('util').types
                return t || (r && r.binding && r.binding('util'))
              } catch (p) {}
            })()
          t.exports = a
        })(Vl, Vl.exports)
        var Bl = Fl,
          Nl = Il,
          Wl = Vl.exports,
          Hl = Wl && Wl.isTypedArray,
          $l = Hl ? Nl(Hl) : Bl,
          Yl = yl,
          Ul = Dl,
          Xl = Al,
          ql = Tl.exports,
          Kl = cl,
          Gl = $l,
          Zl = Object.prototype.hasOwnProperty
        var Jl = function (t, e) {
          var n = Xl(t),
            i = !n && Ul(t),
            o = !n && !i && ql(t),
            r = !n && !i && !o && Gl(t),
            a = n || i || o || r,
            s = a ? Yl(t.length, String) : [],
            l = s.length
          for (var c in t)
            (!e && !Zl.call(t, c)) ||
              (a &&
                ('length' == c ||
                  (o && ('offset' == c || 'parent' == c)) ||
                  (r && ('buffer' == c || 'byteLength' == c || 'byteOffset' == c)) ||
                  Kl(c, l))) ||
              s.push(c)
          return s
        }
        var Ql = function (t, e) {
            return function (n) {
              return t(e(n))
            }
          },
          tc = Ql(Object.keys, Object),
          ec = xl,
          nc = tc,
          ic = Object.prototype.hasOwnProperty
        var oc = Jl,
          rc = function (t) {
            if (!ec(t)) return nc(t)
            var e = []
            for (var n in Object(t)) ic.call(t, n) && 'constructor' != n && e.push(n)
            return e
          },
          ac = sl
        var sc = function (t) {
            return ac(t) ? oc(t) : rc(t)
          },
          lc = Ns,
          cc = $s,
          hc = ml,
          dc = sl,
          uc = xl,
          fc = sc,
          pc = Object.prototype.hasOwnProperty,
          gc = hc(function (t, e) {
            if (uc(e) || dc(e)) cc(e, fc(e), t)
            else for (var n in e) pc.call(e, n) && lc(t, n, e[n])
          })
        var mc = function () {
            ;(this.__data__ = []), (this.size = 0)
          },
          bc = Fs
        var xc = function (t, e) {
            for (var n = t.length; n--; ) if (bc(t[n][0], e)) return n
            return -1
          },
          yc = xc,
          vc = Array.prototype.splice
        var _c = xc
        var wc = xc
        var Mc = xc
        var kc = mc,
          Sc = function (t) {
            var e = this.__data__,
              n = yc(e, t)
            return !(n < 0) && (n == e.length - 1 ? e.pop() : vc.call(e, n, 1), --this.size, !0)
          },
          Oc = function (t) {
            var e = this.__data__,
              n = _c(e, t)
            return n < 0 ? void 0 : e[n][1]
          },
          Pc = function (t) {
            return wc(this.__data__, t) > -1
          },
          Cc = function (t, e) {
            var n = this.__data__,
              i = Mc(n, t)
            return i < 0 ? (++this.size, n.push([t, e])) : (n[i][1] = e), this
          }
        function Dc(t) {
          var e = -1,
            n = null == t ? 0 : t.length
          for (this.clear(); ++e < n; ) {
            var i = t[e]
            this.set(i[0], i[1])
          }
        }
        ;(Dc.prototype.clear = kc),
          (Dc.prototype.delete = Sc),
          (Dc.prototype.get = Oc),
          (Dc.prototype.has = Pc),
          (Dc.prototype.set = Cc)
        var Ac = Dc,
          Tc = Ac
        var Ec = function () {
          ;(this.__data__ = new Tc()), (this.size = 0)
        }
        var Lc = function (t) {
          var e = this.__data__,
            n = e.delete(t)
          return (this.size = e.size), n
        }
        var Rc = function (t) {
          return this.__data__.get(t)
        }
        var jc = function (t) {
            return this.__data__.has(t)
          },
          zc = Es(Ja, 'Map'),
          Fc = Es(Object, 'create'),
          Ic = Fc
        var Vc = function () {
          ;(this.__data__ = Ic ? Ic(null) : {}), (this.size = 0)
        }
        var Bc = function (t) {
            var e = this.has(t) && delete this.__data__[t]
            return (this.size -= e ? 1 : 0), e
          },
          Nc = Fc,
          Wc = Object.prototype.hasOwnProperty
        var Hc = function (t) {
            var e = this.__data__
            if (Nc) {
              var n = e[t]
              return '__lodash_hash_undefined__' === n ? void 0 : n
            }
            return Wc.call(e, t) ? e[t] : void 0
          },
          $c = Fc,
          Yc = Object.prototype.hasOwnProperty
        var Uc = Fc
        var Xc = Vc,
          qc = Bc,
          Kc = Hc,
          Gc = function (t) {
            var e = this.__data__
            return $c ? void 0 !== e[t] : Yc.call(e, t)
          },
          Zc = function (t, e) {
            var n = this.__data__
            return (
              (this.size += this.has(t) ? 0 : 1),
              (n[t] = Uc && void 0 === e ? '__lodash_hash_undefined__' : e),
              this
            )
          }
        function Jc(t) {
          var e = -1,
            n = null == t ? 0 : t.length
          for (this.clear(); ++e < n; ) {
            var i = t[e]
            this.set(i[0], i[1])
          }
        }
        ;(Jc.prototype.clear = Xc),
          (Jc.prototype.delete = qc),
          (Jc.prototype.get = Kc),
          (Jc.prototype.has = Gc),
          (Jc.prototype.set = Zc)
        var Qc = Jc,
          th = Ac,
          eh = zc
        var nh = function (t) {
          var e = typeof t
          return 'string' == e || 'number' == e || 'symbol' == e || 'boolean' == e
            ? '__proto__' !== t
            : null === t
        }
        var ih = function (t, e) {
            var n = t.__data__
            return nh(e) ? n['string' == typeof e ? 'string' : 'hash'] : n.map
          },
          oh = ih
        var rh = ih
        var ah = ih
        var sh = ih
        var lh = function () {
            ;(this.size = 0),
              (this.__data__ = { hash: new Qc(), map: new (eh || th)(), string: new Qc() })
          },
          ch = function (t) {
            var e = oh(this, t).delete(t)
            return (this.size -= e ? 1 : 0), e
          },
          hh = function (t) {
            return rh(this, t).get(t)
          },
          dh = function (t) {
            return ah(this, t).has(t)
          },
          uh = function (t, e) {
            var n = sh(this, t),
              i = n.size
            return n.set(t, e), (this.size += n.size == i ? 0 : 1), this
          }
        function fh(t) {
          var e = -1,
            n = null == t ? 0 : t.length
          for (this.clear(); ++e < n; ) {
            var i = t[e]
            this.set(i[0], i[1])
          }
        }
        ;(fh.prototype.clear = lh),
          (fh.prototype.delete = ch),
          (fh.prototype.get = hh),
          (fh.prototype.has = dh),
          (fh.prototype.set = uh)
        var ph = fh,
          gh = Ac,
          mh = zc,
          bh = ph
        var xh = Ac,
          yh = Ec,
          vh = Lc,
          _h = Rc,
          wh = jc,
          Mh = function (t, e) {
            var n = this.__data__
            if (n instanceof gh) {
              var i = n.__data__
              if (!mh || i.length < 199) return i.push([t, e]), (this.size = ++n.size), this
              n = this.__data__ = new bh(i)
            }
            return n.set(t, e), (this.size = n.size), this
          }
        function kh(t) {
          var e = (this.__data__ = new xh(t))
          this.size = e.size
        }
        ;(kh.prototype.clear = yh),
          (kh.prototype.delete = vh),
          (kh.prototype.get = _h),
          (kh.prototype.has = wh),
          (kh.prototype.set = Mh)
        var Sh = kh
        var Oh = ph,
          Ph = function (t) {
            return this.__data__.set(t, '__lodash_hash_undefined__'), this
          },
          Ch = function (t) {
            return this.__data__.has(t)
          }
        function Dh(t) {
          var e = -1,
            n = null == t ? 0 : t.length
          for (this.__data__ = new Oh(); ++e < n; ) this.add(t[e])
        }
        ;(Dh.prototype.add = Dh.prototype.push = Ph), (Dh.prototype.has = Ch)
        var Ah = Dh,
          Th = function (t, e) {
            for (var n = -1, i = null == t ? 0 : t.length; ++n < i; ) if (e(t[n], n, t)) return !0
            return !1
          },
          Eh = function (t, e) {
            return t.has(e)
          }
        var Lh = function (t, e, n, i, o, r) {
            var a = 1 & n,
              s = t.length,
              l = e.length
            if (s != l && !(a && l > s)) return !1
            var c = r.get(t),
              h = r.get(e)
            if (c && h) return c == e && h == t
            var d = -1,
              u = !0,
              f = 2 & n ? new Ah() : void 0
            for (r.set(t, e), r.set(e, t); ++d < s; ) {
              var p = t[d],
                g = e[d]
              if (i) var m = a ? i(g, p, d, e, t, r) : i(p, g, d, t, e, r)
              if (void 0 !== m) {
                if (m) continue
                u = !1
                break
              }
              if (f) {
                if (
                  !Th(e, function (t, e) {
                    if (!Eh(f, e) && (p === t || o(p, t, n, i, r))) return f.push(e)
                  })
                ) {
                  u = !1
                  break
                }
              } else if (p !== g && !o(p, g, n, i, r)) {
                u = !1
                break
              }
            }
            return r.delete(t), r.delete(e), u
          },
          Rh = Ja.Uint8Array
        var jh = function (t) {
          var e = -1,
            n = Array(t.size)
          return (
            t.forEach(function (t, i) {
              n[++e] = [i, t]
            }),
            n
          )
        }
        var zh = function (t) {
            var e = -1,
              n = Array(t.size)
            return (
              t.forEach(function (t) {
                n[++e] = t
              }),
              n
            )
          },
          Fh = Rh,
          Ih = Fs,
          Vh = Lh,
          Bh = jh,
          Nh = zh,
          Wh = Qa ? Qa.prototype : void 0,
          Hh = Wh ? Wh.valueOf : void 0
        var $h = function (t, e, n, i, o, r, a) {
          switch (n) {
            case '[object DataView]':
              if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1
              ;(t = t.buffer), (e = e.buffer)
            case '[object ArrayBuffer]':
              return !(t.byteLength != e.byteLength || !r(new Fh(t), new Fh(e)))
            case '[object Boolean]':
            case '[object Date]':
            case '[object Number]':
              return Ih(+t, +e)
            case '[object Error]':
              return t.name == e.name && t.message == e.message
            case '[object RegExp]':
            case '[object String]':
              return t == e + ''
            case '[object Map]':
              var s = Bh
            case '[object Set]':
              var l = 1 & i
              if ((s || (s = Nh), t.size != e.size && !l)) return !1
              var c = a.get(t)
              if (c) return c == e
              ;(i |= 2), a.set(t, e)
              var h = Vh(s(t), s(e), i, o, r, a)
              return a.delete(t), h
            case '[object Symbol]':
              if (Hh) return Hh.call(t) == Hh.call(e)
          }
          return !1
        }
        var Yh = function (t, e) {
            for (var n = -1, i = e.length, o = t.length; ++n < i; ) t[o + n] = e[n]
            return t
          },
          Uh = Al
        var Xh = function (t, e, n) {
          var i = e(t)
          return Uh(t) ? i : Yh(i, n(t))
        }
        var qh = function (t, e) {
            for (var n = -1, i = null == t ? 0 : t.length, o = 0, r = []; ++n < i; ) {
              var a = t[n]
              e(a, n, t) && (r[o++] = a)
            }
            return r
          },
          Kh = function () {
            return []
          },
          Gh = Object.prototype.propertyIsEnumerable,
          Zh = Object.getOwnPropertySymbols,
          Jh = Xh,
          Qh = Zh
            ? function (t) {
                return null == t
                  ? []
                  : ((t = Object(t)),
                    qh(Zh(t), function (e) {
                      return Gh.call(t, e)
                    }))
              }
            : Kh,
          td = sc
        var ed = function (t) {
            return Jh(t, td, Qh)
          },
          nd = Object.prototype.hasOwnProperty
        var id = function (t, e, n, i, o, r) {
            var a = 1 & n,
              s = ed(t),
              l = s.length
            if (l != ed(e).length && !a) return !1
            for (var c = l; c--; ) {
              var h = s[c]
              if (!(a ? h in e : nd.call(e, h))) return !1
            }
            var d = r.get(t),
              u = r.get(e)
            if (d && u) return d == e && u == t
            var f = !0
            r.set(t, e), r.set(e, t)
            for (var p = a; ++c < l; ) {
              var g = t[(h = s[c])],
                m = e[h]
              if (i) var b = a ? i(m, g, h, e, t, r) : i(g, m, h, t, e, r)
              if (!(void 0 === b ? g === m || o(g, m, n, i, r) : b)) {
                f = !1
                break
              }
              p || (p = 'constructor' == h)
            }
            if (f && !p) {
              var x = t.constructor,
                y = e.constructor
              x == y ||
                !('constructor' in t) ||
                !('constructor' in e) ||
                ('function' == typeof x &&
                  x instanceof x &&
                  'function' == typeof y &&
                  y instanceof y) ||
                (f = !1)
            }
            return r.delete(t), r.delete(e), f
          },
          od = Es(Ja, 'DataView'),
          rd = zc,
          ad = Es(Ja, 'Promise'),
          sd = Es(Ja, 'Set'),
          ld = Es(Ja, 'WeakMap'),
          cd = hs,
          hd = ys,
          dd = '[object Map]',
          ud = '[object Promise]',
          fd = '[object Set]',
          pd = '[object WeakMap]',
          gd = '[object DataView]',
          md = hd(od),
          bd = hd(rd),
          xd = hd(ad),
          yd = hd(sd),
          vd = hd(ld),
          _d = cd
        ;((od && _d(new od(new ArrayBuffer(1))) != gd) ||
          (rd && _d(new rd()) != dd) ||
          (ad && _d(ad.resolve()) != ud) ||
          (sd && _d(new sd()) != fd) ||
          (ld && _d(new ld()) != pd)) &&
          (_d = function (t) {
            var e = cd(t),
              n = '[object Object]' == e ? t.constructor : void 0,
              i = n ? hd(n) : ''
            if (i)
              switch (i) {
                case md:
                  return gd
                case bd:
                  return dd
                case xd:
                  return ud
                case yd:
                  return fd
                case vd:
                  return pd
              }
            return e
          })
        var wd = Sh,
          Md = Lh,
          kd = $h,
          Sd = id,
          Od = _d,
          Pd = Al,
          Cd = Tl.exports,
          Dd = $l,
          Ad = '[object Arguments]',
          Td = '[object Array]',
          Ed = '[object Object]',
          Ld = Object.prototype.hasOwnProperty
        var Rd = function (t, e, n, i, o, r) {
            var a = Pd(t),
              s = Pd(e),
              l = a ? Td : Od(t),
              c = s ? Td : Od(e),
              h = (l = l == Ad ? Ed : l) == Ed,
              d = (c = c == Ad ? Ed : c) == Ed,
              u = l == c
            if (u && Cd(t)) {
              if (!Cd(e)) return !1
              ;(a = !0), (h = !1)
            }
            if (u && !h)
              return (
                r || (r = new wd()), a || Dd(t) ? Md(t, e, n, i, o, r) : kd(t, e, l, n, i, o, r)
              )
            if (!(1 & n)) {
              var f = h && Ld.call(t, '__wrapped__'),
                p = d && Ld.call(e, '__wrapped__')
              if (f || p) {
                var g = f ? t.value() : t,
                  m = p ? e.value() : e
                return r || (r = new wd()), o(g, m, n, i, r)
              }
            }
            return !!u && (r || (r = new wd()), Sd(t, e, n, i, o, r))
          },
          jd = vl
        var zd = function t(e, n, i, o, r) {
            return (
              e === n ||
              (null == e || null == n || (!jd(e) && !jd(n))
                ? e !== e && n !== n
                : Rd(e, n, i, o, t, r))
            )
          },
          Fd = Sh,
          Id = zd
        var Vd = ds
        var Bd = function (t) {
            return t === t && !Vd(t)
          },
          Nd = Bd,
          Wd = sc
        var Hd = function (t, e) {
            return function (n) {
              return null != n && n[t] === e && (void 0 !== e || t in Object(n))
            }
          },
          $d = function (t, e, n, i) {
            var o = n.length,
              r = o,
              a = !i
            if (null == t) return !r
            for (t = Object(t); o--; ) {
              var s = n[o]
              if (a && s[2] ? s[1] !== t[s[0]] : !(s[0] in t)) return !1
            }
            for (; ++o < r; ) {
              var l = (s = n[o])[0],
                c = t[l],
                h = s[1]
              if (a && s[2]) {
                if (void 0 === c && !(l in t)) return !1
              } else {
                var d = new Fd()
                if (i) var u = i(c, h, l, t, e, d)
                if (!(void 0 === u ? Id(h, c, 3, i, d) : u)) return !1
              }
            }
            return !0
          },
          Yd = function (t) {
            for (var e = Wd(t), n = e.length; n--; ) {
              var i = e[n],
                o = t[i]
              e[n] = [i, o, Nd(o)]
            }
            return e
          },
          Ud = Hd
        var Xd = function (t) {
            var e = Yd(t)
            return 1 == e.length && e[0][2]
              ? Ud(e[0][0], e[0][1])
              : function (n) {
                  return n === t || $d(n, t, e)
                }
          },
          qd = hs,
          Kd = vl
        var Gd = function (t) {
            return 'symbol' == typeof t || (Kd(t) && '[object Symbol]' == qd(t))
          },
          Zd = Al,
          Jd = Gd,
          Qd = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          tu = /^\w*$/
        var eu = function (t, e) {
            if (Zd(t)) return !1
            var n = typeof t
            return (
              !('number' != n && 'symbol' != n && 'boolean' != n && null != t && !Jd(t)) ||
              tu.test(t) ||
              !Qd.test(t) ||
              (null != e && t in Object(e))
            )
          },
          nu = ph
        function iu(t, e) {
          if ('function' != typeof t || (null != e && 'function' != typeof e))
            throw new TypeError('Expected a function')
          var n = function () {
            var i = arguments,
              o = e ? e.apply(this, i) : i[0],
              r = n.cache
            if (r.has(o)) return r.get(o)
            var a = t.apply(this, i)
            return (n.cache = r.set(o, a) || r), a
          }
          return (n.cache = new (iu.Cache || nu)()), n
        }
        iu.Cache = nu
        var ou = iu
        var ru =
            /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
          au = /\\(\\)?/g,
          su = (function (t) {
            var e = ou(t, function (t) {
                return 500 === n.size && n.clear(), t
              }),
              n = e.cache
            return e
          })(function (t) {
            var e = []
            return (
              46 === t.charCodeAt(0) && e.push(''),
              t.replace(ru, function (t, n, i, o) {
                e.push(i ? o.replace(au, '$1') : n || t)
              }),
              e
            )
          })
        var lu = function (t, e) {
            for (var n = -1, i = null == t ? 0 : t.length, o = Array(i); ++n < i; )
              o[n] = e(t[n], n, t)
            return o
          },
          cu = Al,
          hu = Gd,
          du = Qa ? Qa.prototype : void 0,
          uu = du ? du.toString : void 0
        var fu = function t(e) {
            if ('string' == typeof e) return e
            if (cu(e)) return lu(e, t) + ''
            if (hu(e)) return uu ? uu.call(e) : ''
            var n = e + ''
            return '0' == n && 1 / e == -Infinity ? '-0' : n
          },
          pu = fu
        var gu = Al,
          mu = eu,
          bu = su,
          xu = function (t) {
            return null == t ? '' : pu(t)
          }
        var yu = function (t, e) {
            return gu(t) ? t : mu(t, e) ? [t] : bu(xu(t))
          },
          vu = Gd
        var _u = function (t) {
            if ('string' == typeof t || vu(t)) return t
            var e = t + ''
            return '0' == e && 1 / t == -Infinity ? '-0' : e
          },
          wu = yu,
          Mu = _u
        var ku = function (t, e) {
            for (var n = 0, i = (e = wu(e, t)).length; null != t && n < i; ) t = t[Mu(e[n++])]
            return n && n == i ? t : void 0
          },
          Su = ku
        var Ou = yu,
          Pu = Dl,
          Cu = Al,
          Du = cl,
          Au = ol,
          Tu = _u
        var Eu = function (t, e) {
            return null != t && e in Object(t)
          },
          Lu = function (t, e, n) {
            for (var i = -1, o = (e = Ou(e, t)).length, r = !1; ++i < o; ) {
              var a = Tu(e[i])
              if (!(r = null != t && n(t, a))) break
              t = t[a]
            }
            return r || ++i != o
              ? r
              : !!(o = null == t ? 0 : t.length) && Au(o) && Du(a, o) && (Cu(t) || Pu(t))
          }
        var Ru = zd,
          ju = function (t, e, n) {
            var i = null == t ? void 0 : Su(t, e)
            return void 0 === i ? n : i
          },
          zu = function (t, e) {
            return null != t && Lu(t, e, Eu)
          },
          Fu = eu,
          Iu = Bd,
          Vu = Hd,
          Bu = _u
        var Nu = ku
        var Wu = function (t) {
            return function (e) {
              return null == e ? void 0 : e[t]
            }
          },
          Hu = function (t) {
            return function (e) {
              return Nu(e, t)
            }
          },
          $u = eu,
          Yu = _u
        var Uu = Xd,
          Xu = function (t, e) {
            return Fu(t) && Iu(e)
              ? Vu(Bu(t), e)
              : function (n) {
                  var i = ju(n, t)
                  return void 0 === i && i === e ? zu(n, t) : Ru(e, i, 3)
                }
          },
          qu = Ys,
          Ku = Al,
          Gu = function (t) {
            return $u(t) ? Wu(Yu(t)) : Hu(t)
          }
        var Zu = function (t) {
            return 'function' == typeof t
              ? t
              : null == t
              ? qu
              : 'object' == typeof t
              ? Ku(t)
                ? Xu(t[0], t[1])
                : Uu(t)
              : Gu(t)
          },
          Ju = Zu,
          Qu = sl,
          tf = sc
        var ef = function (t) {
          return function (e, n, i) {
            var o = Object(e)
            if (!Qu(e)) {
              var r = Ju(n)
              ;(e = tf(e)),
                (n = function (t) {
                  return r(o[t], t, o)
                })
            }
            var a = t(e, n, i)
            return a > -1 ? o[r ? e[a] : a] : void 0
          }
        }
        var nf = /\s/
        var of = function (t) {
            for (var e = t.length; e-- && nf.test(t.charAt(e)); );
            return e
          },
          rf = /^\s+/
        var af = function (t) {
            return t ? t.slice(0, of(t) + 1).replace(rf, '') : t
          },
          sf = ds,
          lf = Gd,
          cf = /^[-+]0x[0-9a-f]+$/i,
          hf = /^0b[01]+$/i,
          df = /^0o[0-7]+$/i,
          uf = parseInt
        var ff = function (t) {
            if ('number' == typeof t) return t
            if (lf(t)) return NaN
            if (sf(t)) {
              var e = 'function' == typeof t.valueOf ? t.valueOf() : t
              t = sf(e) ? e + '' : e
            }
            if ('string' != typeof t) return 0 === t ? t : +t
            t = af(t)
            var n = hf.test(t)
            return n || df.test(t) ? uf(t.slice(2), n ? 2 : 8) : cf.test(t) ? NaN : +t
          },
          pf = 1 / 0
        var gf = function (t) {
          return t
            ? (t = ff(t)) === pf || t === -1 / 0
              ? 17976931348623157e292 * (t < 0 ? -1 : 1)
              : t === t
              ? t
              : 0
            : 0 === t
            ? t
            : 0
        }
        var mf = function (t, e, n, i) {
            for (var o = t.length, r = n + (i ? 1 : -1); i ? r-- : ++r < o; )
              if (e(t[r], r, t)) return r
            return -1
          },
          bf = Zu,
          xf = function (t) {
            var e = gf(t),
              n = e % 1
            return e === e ? (n ? e - n : e) : 0
          },
          yf = Math.max
        var vf = ef(function (t, e, n) {
            var i = null == t ? 0 : t.length
            if (!i) return -1
            var o = null == n ? 0 : xf(n)
            return o < 0 && (o = yf(i + o, 0)), mf(t, bf(e), o)
          }),
          _f = zs,
          wf = Fs
        var Mf = function (t, e, n) {
          ;((void 0 !== n && !wf(t[e], n)) || (void 0 === n && !(e in t))) && _f(t, e, n)
        }
        var kf = (function (t) {
            return function (e, n, i) {
              for (var o = -1, r = Object(e), a = i(e), s = a.length; s--; ) {
                var l = a[t ? s : ++o]
                if (!1 === n(r[l], l, r)) break
              }
              return e
            }
          })(),
          Sf = { exports: {} }
        !(function (t, e) {
          var n = Ja,
            i = e && !e.nodeType && e,
            o = i && t && !t.nodeType && t,
            r = o && o.exports === i ? n.Buffer : void 0,
            a = r ? r.allocUnsafe : void 0
          t.exports = function (t, e) {
            if (e) return t.slice()
            var n = t.length,
              i = a ? a(n) : new t.constructor(n)
            return t.copy(i), i
          }
        })(Sf, Sf.exports)
        var Of = Rh
        var Pf = function (t) {
          var e = new t.constructor(t.byteLength)
          return new Of(e).set(new Of(t)), e
        }
        var Cf = function (t, e) {
          var n = e ? Pf(t.buffer) : t.buffer
          return new t.constructor(n, t.byteOffset, t.length)
        }
        var Df = function (t, e) {
            var n = -1,
              i = t.length
            for (e || (e = Array(i)); ++n < i; ) e[n] = t[n]
            return e
          },
          Af = ds,
          Tf = Object.create,
          Ef = (function () {
            function t() {}
            return function (e) {
              if (!Af(e)) return {}
              if (Tf) return Tf(e)
              t.prototype = e
              var n = new t()
              return (t.prototype = void 0), n
            }
          })(),
          Lf = Ql(Object.getPrototypeOf, Object),
          Rf = Ef,
          jf = Lf,
          zf = xl
        var Ff = function (t) {
            return 'function' != typeof t.constructor || zf(t) ? {} : Rf(jf(t))
          },
          If = sl,
          Vf = vl
        var Bf = function (t) {
            return Vf(t) && If(t)
          },
          Nf = hs,
          Wf = Lf,
          Hf = vl,
          $f = Function.prototype,
          Yf = Object.prototype,
          Uf = $f.toString,
          Xf = Yf.hasOwnProperty,
          qf = Uf.call(Object)
        var Kf = function (t) {
          if (!Hf(t) || '[object Object]' != Nf(t)) return !1
          var e = Wf(t)
          if (null === e) return !0
          var n = Xf.call(e, 'constructor') && e.constructor
          return 'function' == typeof n && n instanceof n && Uf.call(n) == qf
        }
        var Gf = function (t, e) {
          if (('constructor' !== e || 'function' !== typeof t[e]) && '__proto__' != e) return t[e]
        }
        var Zf = ds,
          Jf = xl,
          Qf = function (t) {
            var e = []
            if (null != t) for (var n in Object(t)) e.push(n)
            return e
          },
          tp = Object.prototype.hasOwnProperty
        var ep = Jl,
          np = function (t) {
            if (!Zf(t)) return Qf(t)
            var e = Jf(t),
              n = []
            for (var i in t) ('constructor' != i || (!e && tp.call(t, i))) && n.push(i)
            return n
          },
          ip = sl
        var op = function (t) {
            return ip(t) ? ep(t, !0) : np(t)
          },
          rp = $s,
          ap = op
        var sp = Mf,
          lp = Sf.exports,
          cp = Cf,
          hp = Df,
          dp = Ff,
          up = Dl,
          fp = Al,
          pp = Bf,
          gp = Tl.exports,
          mp = ps,
          bp = ds,
          xp = Kf,
          yp = $l,
          vp = Gf,
          _p = function (t) {
            return rp(t, ap(t))
          }
        var wp = Sh,
          Mp = Mf,
          kp = kf,
          Sp = function (t, e, n, i, o, r, a) {
            var s = vp(t, n),
              l = vp(e, n),
              c = a.get(l)
            if (c) sp(t, n, c)
            else {
              var h = r ? r(s, l, n + '', t, e, a) : void 0,
                d = void 0 === h
              if (d) {
                var u = fp(l),
                  f = !u && gp(l),
                  p = !u && !f && yp(l)
                ;(h = l),
                  u || f || p
                    ? fp(s)
                      ? (h = s)
                      : pp(s)
                      ? (h = hp(s))
                      : f
                      ? ((d = !1), (h = lp(l, !0)))
                      : p
                      ? ((d = !1), (h = cp(l, !0)))
                      : (h = [])
                    : xp(l) || up(l)
                    ? ((h = s), up(s) ? (h = _p(s)) : (bp(s) && !mp(s)) || (h = dp(l)))
                    : (d = !1)
              }
              d && (a.set(l, h), o(h, l, i, r, a), a.delete(l)), sp(t, n, h)
            }
          },
          Op = ds,
          Pp = op,
          Cp = Gf
        var Dp = function t(e, n, i, o, r) {
            e !== n &&
              kp(
                n,
                function (a, s) {
                  if ((r || (r = new wp()), Op(a))) Sp(e, n, s, i, t, o, r)
                  else {
                    var l = o ? o(Cp(e, s), a, s + '', e, n, r) : void 0
                    void 0 === l && (l = a), Mp(e, s, l)
                  }
                },
                Pp,
              )
          },
          Ap = Dp,
          Tp = ml(function (t, e, n) {
            Ap(t, e, n)
          }),
          Ep = Object(i.forwardRef)(function (t, e) {
            var n = t.className,
              s = t.customTooltips,
              l = void 0 === s || s,
              c = t.data,
              h = t.id,
              d = t.fallbackContent,
              u = t.getDatasetAtEvent,
              f = t.getElementAtEvent,
              p = t.getElementsAtEvent,
              g = t.height,
              m = void 0 === g ? 150 : g,
              b = t.options,
              x = t.plugins,
              y = void 0 === x ? [] : x,
              v = t.redraw,
              _ = void 0 !== v && v,
              w = t.type,
              M = t.width,
              k = void 0 === M ? 300 : M,
              S = t.wrapper,
              O = void 0 === S || S,
              P = a(t, [
                'className',
                'customTooltips',
                'data',
                'id',
                'fallbackContent',
                'getDatasetAtEvent',
                'getElementAtEvent',
                'getElementsAtEvent',
                'height',
                'options',
                'plugins',
                'redraw',
                'type',
                'width',
                'wrapper',
              ]),
              C = Object(i.useRef)(null),
              D = Object(i.useMemo)(
                function () {
                  return 'function' === typeof c
                    ? C.current
                      ? c(C.current)
                      : { datasets: [] }
                    : Tp({}, c)
                },
                [c, C.current],
              ),
              A = Object(i.useState)(),
              T = A[0],
              E = A[1]
            Object(i.useImperativeHandle)(
              e,
              function () {
                return T
              },
              [T],
            )
            var L = function () {
                C.current &&
                  (l &&
                    ((Oe.plugins.tooltip.enabled = !1),
                    (Oe.plugins.tooltip.mode = 'index'),
                    (Oe.plugins.tooltip.position = 'nearest'),
                    (Oe.plugins.tooltip.external = qa)),
                  E(new Qo(C.current, { type: w, data: D, options: b, plugins: y })))
              },
              R = function () {
                T && T.destroy()
              }
            Object(i.useEffect)(function () {
              return (
                L(),
                function () {
                  return R()
                }
              )
            }, []),
              Object(i.useEffect)(
                function () {
                  _
                    ? (R(),
                      setTimeout(function () {
                        L()
                      }, 0))
                    : (function () {
                        if (T) {
                          if ((b && (T.options = r({}, b)), !T.config.data))
                            return (T.config.data = D), void T.update()
                          var t = D.datasets,
                            e = void 0 === t ? [] : t,
                            n = a(D, ['datasets']),
                            i = T.config.data.datasets,
                            o = void 0 === i ? [] : i
                          gc(T.config.data, n),
                            (T.config.data.datasets = e.map(function (t) {
                              var e = vf(o, function (e) {
                                return e.label === t.label && e.type === t.type
                              })
                              return e && t.data
                                ? (e.data ? (e.data.length = t.data.length) : (e.data = []),
                                  gc(e.data, t.data),
                                  r(r(r({}, e), t), { data: e.data }))
                                : t
                            })),
                            T.update()
                        }
                      })()
                },
                [t, D],
              )
            var j = function (t) {
              return o.a.createElement(
                'canvas',
                r(
                  {},
                  !O && n && { className: n },
                  {
                    'data-testid': 'canvas',
                    height: m,
                    id: h,
                    onClick: function (t) {
                      !(function (t) {
                        T &&
                          (u &&
                            u(T.getElementsAtEventForMode(t, 'dataset', { intersect: !0 }, !1), t),
                          f &&
                            f(T.getElementsAtEventForMode(t, 'nearest', { intersect: !0 }, !1), t),
                          p && p(T.getElementsAtEventForMode(t, 'index', { intersect: !0 }, !1), t))
                      })(t)
                    },
                    ref: t,
                    role: 'img',
                    width: k,
                  },
                  P,
                ),
                d,
              )
            }
            return O
              ? o.a.createElement('div', r({ className: N('chart-wrapper', n) }, P), j(C))
              : j(C)
          })
        ;(Ep.propTypes = {
          className: V.string,
          customTooltips: V.bool,
          data: V.any.isRequired,
          fallbackContent: V.node,
          getDatasetAtEvent: V.func,
          getElementAtEvent: V.func,
          getElementsAtEvent: V.func,
          height: V.number,
          id: V.string,
          options: V.object,
          plugins: V.array,
          redraw: V.bool,
          type: V.oneOf([
            'bar',
            'line',
            'scatter',
            'bubble',
            'pie',
            'doughnut',
            'polarArea',
            'radar',
          ]).isRequired,
          width: V.number,
          wrapper: V.bool,
        }),
          (Ep.displayName = 'CChart')
        var Lp = Object(i.forwardRef)(function (t, e) {
          return o.a.createElement(Ep, r({}, t, { type: 'bar', ref: e }))
        })
        ;(Lp.displayName = 'CChartBar'),
          (Object(i.forwardRef)(function (t, e) {
            return o.a.createElement(Ep, r({}, t, { type: 'bubble', ref: e }))
          }).displayName = 'CChartBubble')
        var Rp = Object(i.forwardRef)(function (t, e) {
          return o.a.createElement(Ep, r({}, t, { type: 'doughnut', ref: e }))
        })
        Rp.displayName = 'CChartDoughnut'
        var jp = Object(i.forwardRef)(function (t, e) {
          return o.a.createElement(Ep, r({}, t, { type: 'line', ref: e }))
        })
        jp.displayName = 'CChartLine'
        var zp = Object(i.forwardRef)(function (t, e) {
          return o.a.createElement(Ep, r({}, t, { type: 'pie', ref: e }))
        })
        zp.displayName = 'CChartPie'
        var Fp = Object(i.forwardRef)(function (t, e) {
          return o.a.createElement(Ep, r({}, t, { type: 'polarArea', ref: e }))
        })
        Fp.displayName = 'CChartPolarArea'
        var Ip = Object(i.forwardRef)(function (t, e) {
          return o.a.createElement(Ep, r({}, t, { type: 'radar', ref: e }))
        })
        ;(Ip.displayName = 'CChartRadar'),
          (Object(i.forwardRef)(function (t, e) {
            return o.a.createElement(Ep, r({}, t, { type: 'scatter', ref: e }))
          }).displayName = 'CChartScatter')
      }.call(this, n(119)))
    },
  },
])
//# sourceMappingURL=1.54849501.chunk.js.map
