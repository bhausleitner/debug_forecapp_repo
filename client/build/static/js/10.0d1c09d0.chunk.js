;(this['webpackJsonp@coreui/coreui-free-react-admin-template'] =
  this['webpackJsonp@coreui/coreui-free-react-admin-template'] || []).push([
  [10, 55, 56],
  {
    358: function (e, t) {
      !(function (e, t) {
        for (var r in t) e[r] = t[r]
      })(
        t,
        (function (e) {
          var t = {}
          function r(s) {
            if (t[s]) return t[s].exports
            var i = (t[s] = { i: s, l: !1, exports: {} })
            return e[s].call(i.exports, i, i.exports, r), (i.l = !0), i.exports
          }
          return (
            (r.m = e),
            (r.c = t),
            (r.d = function (e, t, s) {
              r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: s })
            }),
            (r.r = function (e) {
              'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 })
            }),
            (r.t = function (e, t) {
              if ((1 & t && (e = r(e)), 8 & t)) return e
              if (4 & t && 'object' == typeof e && e && e.__esModule) return e
              var s = Object.create(null)
              if (
                (r.r(s),
                Object.defineProperty(s, 'default', { enumerable: !0, value: e }),
                2 & t && 'string' != typeof e)
              )
                for (var i in e)
                  r.d(
                    s,
                    i,
                    function (t) {
                      return e[t]
                    }.bind(null, i),
                  )
              return s
            }),
            (r.n = function (e) {
              var t =
                e && e.__esModule
                  ? function () {
                      return e.default
                    }
                  : function () {
                      return e
                    }
              return r.d(t, 'a', t), t
            }),
            (r.o = function (e, t) {
              return Object.prototype.hasOwnProperty.call(e, t)
            }),
            (r.p = ''),
            r((r.s = 0))
          )
        })([
          function (e, t, r) {
            r.r(t),
              r.d(t, 'deepObjectsMerge', function () {
                return s
              }),
              r.d(t, 'getColor', function () {
                return o
              }),
              r.d(t, 'getStyle', function () {
                return l
              }),
              r.d(t, 'hexToRgb', function () {
                return n
              }),
              r.d(t, 'hexToRgba', function () {
                return d
              }),
              r.d(t, 'makeUid', function () {
                return b
              }),
              r.d(t, 'omitByKeys', function () {
                return j
              }),
              r.d(t, 'pickByKeys', function () {
                return m
              }),
              r.d(t, 'rgbToHex', function () {
                return h
              })
            var s = function e(t, r) {
                for (var s = 0, i = Object.keys(r); s < i.length; s++) {
                  var a = i[s]
                  r[a] instanceof Object && Object.assign(r[a], e(t[a], r[a]))
                }
                return Object.assign(t || {}, r), t
              },
              i = function () {
                for (var e = {}, t = document.styleSheets, r = '', s = t.length - 1; s > -1; s--) {
                  for (var i = t[s].cssRules, a = i.length - 1; a > -1; a--)
                    if ('.ie-custom-properties' === i[a].selectorText) {
                      r = i[a].cssText
                      break
                    }
                  if (r) break
                }
                return (
                  (r = r.substring(r.lastIndexOf('{') + 1, r.lastIndexOf('}')))
                    .split(';')
                    .forEach(function (t) {
                      if (t) {
                        var r = t.split(': ')[0],
                          s = t.split(': ')[1]
                        r && s && (e['--'.concat(r.trim())] = s.trim())
                      }
                    }),
                  e
                )
              },
              a = function () {
                return Boolean(document.documentMode) && document.documentMode >= 10
              },
              c = function (e) {
                return e.match(/^--.*/i)
              },
              l = function (e) {
                var t,
                  r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document.body
                if (c(e) && a()) {
                  var s = i()
                  t = s[e]
                } else t = window.getComputedStyle(r, null).getPropertyValue(e).replace(/^\s/, '')
                return t
              },
              o = function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document.body,
                  r = '--'.concat(e),
                  s = l(r, t)
                return s || e
              },
              n = function (e) {
                if (void 0 === e) throw new TypeError('Hex color is not defined')
                var t, r, s
                if (!e.match(/^#(?:[0-9a-f]{3}){1,2}$/i))
                  throw new Error(''.concat(e, ' is not a valid hex color'))
                return (
                  7 === e.length
                    ? ((t = parseInt(e.slice(1, 3), 16)),
                      (r = parseInt(e.slice(3, 5), 16)),
                      (s = parseInt(e.slice(5, 7), 16)))
                    : ((t = parseInt(e.slice(1, 2), 16)),
                      (r = parseInt(e.slice(2, 3), 16)),
                      (s = parseInt(e.slice(3, 5), 16))),
                  'rgba('.concat(t, ', ').concat(r, ', ').concat(s, ')')
                )
              },
              d = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100
                if (void 0 === e) throw new TypeError('Hex color is not defined')
                var r,
                  s,
                  i,
                  a = e.match(/^#(?:[0-9a-f]{3}){1,2}$/i)
                if (!a) throw new Error(''.concat(e, ' is not a valid hex color'))
                return (
                  7 === e.length
                    ? ((r = parseInt(e.slice(1, 3), 16)),
                      (s = parseInt(e.slice(3, 5), 16)),
                      (i = parseInt(e.slice(5, 7), 16)))
                    : ((r = parseInt(e.slice(1, 2), 16)),
                      (s = parseInt(e.slice(2, 3), 16)),
                      (i = parseInt(e.slice(3, 5), 16))),
                  'rgba('
                    .concat(r, ', ')
                    .concat(s, ', ')
                    .concat(i, ', ')
                    .concat(t / 100, ')')
                )
              },
              b = function () {
                return 'uid-' + Math.random().toString(36).substr(2)
              },
              j = function (e, t) {
                for (var r = {}, s = Object.keys(e), i = 0; i < s.length; i++)
                  !t.includes(s[i]) && (r[s[i]] = e[s[i]])
                return r
              },
              m = function (e, t) {
                for (var r = {}, s = 0; s < t.length; s++) r[t[s]] = e[t[s]]
                return r
              },
              h = function (e) {
                if (void 0 === e) throw new TypeError('Hex color is not defined')
                if ('transparent' === e) return '#00000000'
                var t = e.match(
                  /^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i,
                )
                if (!t) throw new Error(''.concat(e, ' is not a valid rgb color'))
                var r = '0'.concat(parseInt(t[1], 10).toString(16)),
                  s = '0'.concat(parseInt(t[2], 10).toString(16)),
                  i = '0'.concat(parseInt(t[3], 10).toString(16))
                return '#'.concat(r.slice(-2)).concat(s.slice(-2)).concat(i.slice(-2))
              },
              u = {
                deepObjectsMerge: s,
                getColor: o,
                getStyle: l,
                hexToRgb: n,
                hexToRgba: d,
                makeUid: b,
                omitByKeys: j,
                pickByKeys: m,
                rgbToHex: h,
              }
            t.default = u
          },
        ]),
      )
    },
    367: function (e, t, r) {
      r.r(t)
      r(1)
      var s = r(353),
        i = r(358),
        a = r(357),
        c = r(356)
      const l = [
          '512 512',
          "<polygon fill='var(--ci-primary-color, currentColor)' points='367.997 338.75 271.999 434.747 271.999 17.503 239.999 17.503 239.999 434.745 144.003 338.75 121.376 361.377 256 496 390.624 361.377 367.997 338.75' class='ci-primary'/>",
        ],
        o = [
          '512 512',
          "<path fill='var(--ci-primary-color, currentColor)' d='M256,144a64,64,0,1,0-64-64A64.072,64.072,0,0,0,256,144Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,256,48Z' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M256,368a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,368Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,464Z' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M256,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,288Z' class='ci-primary'/>",
        ],
        n = [
          '512 512',
          "<polygon fill='var(--ci-primary-color, currentColor)' points='390.624 150.625 256 16 121.376 150.625 144.004 173.252 240.001 77.254 240.001 495.236 272.001 495.236 272.001 77.257 367.996 173.252 390.624 150.625' class='ci-primary'/>",
        ]
      var d = r(19)
      t.default = () =>
        Object(d.jsxs)(s.rb, {
          children: [
            Object(d.jsx)(s.A, {
              sm: 6,
              lg: 3,
              children: Object(d.jsx)(s.Mb, {
                className: 'mb-4',
                color: 'primary',
                value: Object(d.jsxs)(d.Fragment, {
                  children: [
                    '26K',
                    ' ',
                    Object(d.jsxs)('span', {
                      className: 'fs-6 fw-normal',
                      children: ['(-12.4% ', Object(d.jsx)(c.a, { icon: l }), ')'],
                    }),
                  ],
                }),
                title: 'Users',
                action: Object(d.jsxs)(s.D, {
                  alignment: 'end',
                  children: [
                    Object(d.jsx)(s.I, {
                      color: 'transparent',
                      caret: !1,
                      className: 'p-0',
                      children: Object(d.jsx)(c.a, {
                        icon: o,
                        className: 'text-high-emphasis-inverse',
                      }),
                    }),
                    Object(d.jsxs)(s.H, {
                      children: [
                        Object(d.jsx)(s.G, { children: 'Action' }),
                        Object(d.jsx)(s.G, { children: 'Another action' }),
                        Object(d.jsx)(s.G, { children: 'Something else here...' }),
                        Object(d.jsx)(s.G, { disabled: !0, children: 'Disabled action' }),
                      ],
                    }),
                  ],
                }),
                chart: Object(d.jsx)(a.d, {
                  className: 'mt-3 mx-3',
                  style: { height: '70px' },
                  data: {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [
                      {
                        label: 'My First dataset',
                        backgroundColor: 'transparent',
                        borderColor: 'rgba(255,255,255,.55)',
                        pointBackgroundColor: Object(i.getStyle)('--cui-primary'),
                        data: [65, 59, 84, 84, 51, 55, 40],
                      },
                    ],
                  },
                  options: {
                    plugins: { legend: { display: !1 } },
                    maintainAspectRatio: !1,
                    scales: {
                      x: { grid: { display: !1, drawBorder: !1 }, ticks: { display: !1 } },
                      y: {
                        min: 30,
                        max: 89,
                        display: !1,
                        grid: { display: !1 },
                        ticks: { display: !1 },
                      },
                    },
                    elements: {
                      line: { borderWidth: 1, tension: 0.4 },
                      point: { radius: 4, hitRadius: 10, hoverRadius: 4 },
                    },
                  },
                }),
              }),
            }),
            Object(d.jsx)(s.A, {
              sm: 6,
              lg: 3,
              children: Object(d.jsx)(s.Mb, {
                className: 'mb-4',
                color: 'info',
                value: Object(d.jsxs)(d.Fragment, {
                  children: [
                    '$6.200',
                    ' ',
                    Object(d.jsxs)('span', {
                      className: 'fs-6 fw-normal',
                      children: ['(40.9% ', Object(d.jsx)(c.a, { icon: n }), ')'],
                    }),
                  ],
                }),
                title: 'Income',
                action: Object(d.jsxs)(s.D, {
                  alignment: 'end',
                  children: [
                    Object(d.jsx)(s.I, {
                      color: 'transparent',
                      caret: !1,
                      className: 'p-0',
                      children: Object(d.jsx)(c.a, {
                        icon: o,
                        className: 'text-high-emphasis-inverse',
                      }),
                    }),
                    Object(d.jsxs)(s.H, {
                      children: [
                        Object(d.jsx)(s.G, { children: 'Action' }),
                        Object(d.jsx)(s.G, { children: 'Another action' }),
                        Object(d.jsx)(s.G, { children: 'Something else here...' }),
                        Object(d.jsx)(s.G, { disabled: !0, children: 'Disabled action' }),
                      ],
                    }),
                  ],
                }),
                chart: Object(d.jsx)(a.d, {
                  className: 'mt-3 mx-3',
                  style: { height: '70px' },
                  data: {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [
                      {
                        label: 'My First dataset',
                        backgroundColor: 'transparent',
                        borderColor: 'rgba(255,255,255,.55)',
                        pointBackgroundColor: Object(i.getStyle)('--cui-info'),
                        data: [1, 18, 9, 17, 34, 22, 11],
                      },
                    ],
                  },
                  options: {
                    plugins: { legend: { display: !1 } },
                    maintainAspectRatio: !1,
                    scales: {
                      x: { grid: { display: !1, drawBorder: !1 }, ticks: { display: !1 } },
                      y: {
                        min: -9,
                        max: 39,
                        display: !1,
                        grid: { display: !1 },
                        ticks: { display: !1 },
                      },
                    },
                    elements: {
                      line: { borderWidth: 1 },
                      point: { radius: 4, hitRadius: 10, hoverRadius: 4 },
                    },
                  },
                }),
              }),
            }),
            Object(d.jsx)(s.A, {
              sm: 6,
              lg: 3,
              children: Object(d.jsx)(s.Mb, {
                className: 'mb-4',
                color: 'warning',
                value: Object(d.jsxs)(d.Fragment, {
                  children: [
                    '2.49',
                    ' ',
                    Object(d.jsxs)('span', {
                      className: 'fs-6 fw-normal',
                      children: ['(84.7% ', Object(d.jsx)(c.a, { icon: n }), ')'],
                    }),
                  ],
                }),
                title: 'Conversion Rate',
                action: Object(d.jsxs)(s.D, {
                  alignment: 'end',
                  children: [
                    Object(d.jsx)(s.I, {
                      color: 'transparent',
                      caret: !1,
                      className: 'p-0',
                      children: Object(d.jsx)(c.a, {
                        icon: o,
                        className: 'text-high-emphasis-inverse',
                      }),
                    }),
                    Object(d.jsxs)(s.H, {
                      children: [
                        Object(d.jsx)(s.G, { children: 'Action' }),
                        Object(d.jsx)(s.G, { children: 'Another action' }),
                        Object(d.jsx)(s.G, { children: 'Something else here...' }),
                        Object(d.jsx)(s.G, { disabled: !0, children: 'Disabled action' }),
                      ],
                    }),
                  ],
                }),
                chart: Object(d.jsx)(a.d, {
                  className: 'mt-3',
                  style: { height: '70px' },
                  data: {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [
                      {
                        label: 'My First dataset',
                        backgroundColor: 'rgba(255,255,255,.2)',
                        borderColor: 'rgba(255,255,255,.55)',
                        data: [78, 81, 80, 45, 34, 12, 40],
                        fill: !0,
                      },
                    ],
                  },
                  options: {
                    plugins: { legend: { display: !1 } },
                    maintainAspectRatio: !1,
                    scales: { x: { display: !1 }, y: { display: !1 } },
                    elements: {
                      line: { borderWidth: 2, tension: 0.4 },
                      point: { radius: 0, hitRadius: 10, hoverRadius: 4 },
                    },
                  },
                }),
              }),
            }),
            Object(d.jsx)(s.A, {
              sm: 6,
              lg: 3,
              children: Object(d.jsx)(s.Mb, {
                className: 'mb-4',
                color: 'danger',
                value: Object(d.jsxs)(d.Fragment, {
                  children: [
                    '44K',
                    ' ',
                    Object(d.jsxs)('span', {
                      className: 'fs-6 fw-normal',
                      children: ['(-23.6% ', Object(d.jsx)(c.a, { icon: l }), ')'],
                    }),
                  ],
                }),
                title: 'Sessions',
                action: Object(d.jsxs)(s.D, {
                  alignment: 'end',
                  children: [
                    Object(d.jsx)(s.I, {
                      color: 'transparent',
                      caret: !1,
                      className: 'p-0',
                      children: Object(d.jsx)(c.a, {
                        icon: o,
                        className: 'text-high-emphasis-inverse',
                      }),
                    }),
                    Object(d.jsxs)(s.H, {
                      children: [
                        Object(d.jsx)(s.G, { children: 'Action' }),
                        Object(d.jsx)(s.G, { children: 'Another action' }),
                        Object(d.jsx)(s.G, { children: 'Something else here...' }),
                        Object(d.jsx)(s.G, { disabled: !0, children: 'Disabled action' }),
                      ],
                    }),
                  ],
                }),
                chart: Object(d.jsx)(a.b, {
                  className: 'mt-3 mx-3',
                  style: { height: '70px' },
                  data: {
                    labels: [
                      'January',
                      'February',
                      'March',
                      'April',
                      'May',
                      'June',
                      'July',
                      'August',
                      'September',
                      'October',
                      'November',
                      'December',
                      'January',
                      'February',
                      'March',
                      'April',
                    ],
                    datasets: [
                      {
                        label: 'My First dataset',
                        backgroundColor: 'rgba(255,255,255,.2)',
                        borderColor: 'rgba(255,255,255,.55)',
                        data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82],
                        barPercentage: 0.6,
                      },
                    ],
                  },
                  options: {
                    maintainAspectRatio: !1,
                    plugins: { legend: { display: !1 } },
                    scales: {
                      x: { grid: { display: !1, drawTicks: !1 }, ticks: { display: !1 } },
                      y: {
                        grid: { display: !1, drawBorder: !1, drawTicks: !1 },
                        ticks: { display: !1 },
                      },
                    },
                  },
                }),
              }),
            }),
          ],
        })
    },
    369: function (e, t, r) {
      r.r(t)
      r(1)
      var s = r(353),
        i = r(356),
        a = r(377),
        c = r(378),
        l = r(379)
      const o = [
        '512 512',
        "<path fill='var(--ci-primary-color, currentColor)' d='M472,96H384V40H352V96H160V40H128V96H40a24.028,24.028,0,0,0-24,24V456a24.028,24.028,0,0,0,24,24H472a24.028,24.028,0,0,0,24-24V120A24.028,24.028,0,0,0,472,96Zm-8,352H48V128h80v40h32V128H352v40h32V128h80Z' class='ci-primary'/><rect width='32' height='32' x='112' y='224' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='200' y='224' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='280' y='224' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='368' y='224' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='112' y='296' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='200' y='296' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='280' y='296' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='368' y='296' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='112' y='368' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='200' y='368' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='280' y='368' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='368' y='368' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/>",
      ]
      var n = r(357),
        d = r(19)
      t.default = (e) => {
        let { withCharts: t } = e
        const r = {
          elements: {
            line: { tension: 0.4 },
            point: { radius: 0, hitRadius: 10, hoverRadius: 4, hoverBorderWidth: 3 },
          },
          maintainAspectRatio: !1,
          plugins: { legend: { display: !1 } },
          scales: { x: { display: !1 }, y: { display: !1 } },
        }
        return Object(d.jsxs)(s.rb, {
          children: [
            Object(d.jsx)(s.A, {
              sm: 6,
              lg: 3,
              children: Object(d.jsx)(s.Pb, {
                className: 'mb-4',
                ...(t && {
                  chart: Object(d.jsx)(n.a, {
                    className: 'position-absolute w-100 h-100',
                    type: 'line',
                    data: {
                      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                      datasets: [
                        {
                          backgroundColor: 'rgba(255,255,255,.1)',
                          borderColor: 'rgba(255,255,255,.55)',
                          pointHoverBackgroundColor: '#fff',
                          borderWidth: 2,
                          data: [65, 59, 84, 84, 51, 55, 40],
                          fill: !0,
                        },
                      ],
                    },
                    options: r,
                  }),
                }),
                icon: Object(d.jsx)(i.a, { icon: a.a, height: 52, className: 'my-4 text-white' }),
                values: [
                  { title: 'friends', value: '89K' },
                  { title: 'feeds', value: '459' },
                ],
                style: { '--cui-card-cap-bg': '#3b5998' },
              }),
            }),
            Object(d.jsx)(s.A, {
              sm: 6,
              lg: 3,
              children: Object(d.jsx)(s.Pb, {
                className: 'mb-4',
                ...(t && {
                  chart: Object(d.jsx)(n.a, {
                    className: 'position-absolute w-100 h-100',
                    type: 'line',
                    data: {
                      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                      datasets: [
                        {
                          backgroundColor: 'rgba(255,255,255,.1)',
                          borderColor: 'rgba(255,255,255,.55)',
                          pointHoverBackgroundColor: '#fff',
                          borderWidth: 2,
                          data: [1, 13, 9, 17, 34, 41, 38],
                          fill: !0,
                        },
                      ],
                    },
                    options: r,
                  }),
                }),
                icon: Object(d.jsx)(i.a, { icon: c.a, height: 52, className: 'my-4 text-white' }),
                values: [
                  { title: 'followers', value: '973k' },
                  { title: 'tweets', value: '1.792' },
                ],
                style: { '--cui-card-cap-bg': '#00aced' },
              }),
            }),
            Object(d.jsx)(s.A, {
              sm: 6,
              lg: 3,
              children: Object(d.jsx)(s.Pb, {
                className: 'mb-4',
                ...(t && {
                  chart: Object(d.jsx)(n.a, {
                    className: 'position-absolute w-100 h-100',
                    type: 'line',
                    data: {
                      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                      datasets: [
                        {
                          backgroundColor: 'rgba(255,255,255,.1)',
                          borderColor: 'rgba(255,255,255,.55)',
                          pointHoverBackgroundColor: '#fff',
                          borderWidth: 2,
                          data: [78, 81, 80, 45, 34, 12, 40],
                          fill: !0,
                        },
                      ],
                    },
                    options: r,
                  }),
                }),
                icon: Object(d.jsx)(i.a, { icon: l.a, height: 52, className: 'my-4 text-white' }),
                values: [
                  { title: 'contacts', value: '500' },
                  { title: 'feeds', value: '1.292' },
                ],
                style: { '--cui-card-cap-bg': '#4875b4' },
              }),
            }),
            Object(d.jsx)(s.A, {
              sm: 6,
              lg: 3,
              children: Object(d.jsx)(s.Pb, {
                className: 'mb-4',
                color: 'warning',
                ...(t && {
                  chart: Object(d.jsx)(n.a, {
                    className: 'position-absolute w-100 h-100',
                    type: 'line',
                    data: {
                      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                      datasets: [
                        {
                          backgroundColor: 'rgba(255,255,255,.1)',
                          borderColor: 'rgba(255,255,255,.55)',
                          pointHoverBackgroundColor: '#fff',
                          borderWidth: 2,
                          data: [35, 23, 56, 22, 97, 23, 64],
                          fill: !0,
                        },
                      ],
                    },
                    options: r,
                  }),
                }),
                icon: Object(d.jsx)(i.a, { icon: o, height: 52, className: 'my-4 text-white' }),
                values: [
                  { title: 'events', value: '12+' },
                  { title: 'meetings', value: '4' },
                ],
              }),
            }),
          ],
        })
      }
    },
    377: function (e, t, r) {
      r.d(t, 'a', function () {
        return s
      })
      const s = [
        '32 32',
        "<path d='M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z'/>",
      ]
    },
    378: function (e, t, r) {
      r.d(t, 'a', function () {
        return s
      })
      const s = [
        '32 32',
        "<path d='M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z'/>",
      ]
    },
    379: function (e, t, r) {
      r.d(t, 'a', function () {
        return s
      })
      const s = [
        '32 32',
        "<path d='M27.26 27.271h-4.733v-7.427c0-1.771-0.037-4.047-2.475-4.047-2.468 0-2.844 1.921-2.844 3.916v7.557h-4.739v-15.271h4.552v2.083h0.061c0.636-1.203 2.183-2.468 4.491-2.468 4.801 0 5.692 3.161 5.692 7.271v8.385zM7.115 9.912c-1.527 0-2.751-1.235-2.751-2.756 0-1.516 1.229-2.749 2.751-2.749s2.755 1.233 2.755 2.749c0 1.521-1.233 2.756-2.755 2.756zM9.489 27.271h-4.749v-15.271h4.749zM29.636 0h-27.276c-1.303 0-2.36 1.031-2.36 2.307v27.387c0 1.276 1.057 2.307 2.36 2.307h27.271c1.301 0 2.369-1.031 2.369-2.307v-27.387c0-1.276-1.068-2.307-2.369-2.307z'/>",
      ]
    },
    380: function (e, t, r) {
      r.d(t, 'a', function () {
        return s
      })
      const s = [
        '512 512',
        "<path fill='var(--ci-primary-color, currentColor)' d='M462.541,316.3l-64.344-42.1,24.774-45.418A79.124,79.124,0,0,0,432.093,192V120A103.941,103.941,0,0,0,257.484,43.523L279.232,67a71.989,71.989,0,0,1,120.861,53v72a46.809,46.809,0,0,1-5.215,21.452L355.962,284.8l89.058,58.274a42.16,42.16,0,0,1,19.073,35.421V432h-72v32h104V378.494A74.061,74.061,0,0,0,462.541,316.3Z' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M318.541,348.3l-64.343-42.1,24.773-45.418A79.124,79.124,0,0,0,288.093,224V152A104.212,104.212,0,0,0,184.04,47.866C126.723,47.866,80.093,94.581,80.093,152v72a78,78,0,0,0,9.015,36.775l24.908,45.664L50.047,348.3A74.022,74.022,0,0,0,16.5,410.4L16,496H352.093V410.494A74.061,74.061,0,0,0,318.541,348.3ZM320.093,464H48.186l.31-53.506a42.158,42.158,0,0,1,19.073-35.421l88.682-58.029L117.2,245.452A46.838,46.838,0,0,1,112.093,224V152a72,72,0,1,1,144,0v72a46.809,46.809,0,0,1-5.215,21.452L211.962,316.8l89.058,58.274a42.16,42.16,0,0,1,19.073,35.421Z' class='ci-primary'/>",
      ]
    },
    474: function (e, t, r) {
      r.r(t)
      r(1)
      var s = r(353),
        i = r(358),
        a = r(356),
        c = r(401),
        l = r(362)
      const o = [
        '512 512',
        "<path fill='var(--ci-primary-color, currentColor)' d='M268.279,496c-67.574,0-130.978-26.191-178.534-73.745S16,311.293,16,243.718A252.252,252.252,0,0,1,154.183,18.676a24.44,24.44,0,0,1,34.46,28.958,220.12,220.12,0,0,0,54.8,220.923A218.746,218.746,0,0,0,399.085,333.2h0a220.2,220.2,0,0,0,65.277-9.846,24.439,24.439,0,0,1,28.959,34.461A252.256,252.256,0,0,1,268.279,496ZM153.31,55.781A219.3,219.3,0,0,0,48,243.718C48,365.181,146.816,464,268.279,464a219.3,219.3,0,0,0,187.938-105.31,252.912,252.912,0,0,1-57.13,6.513h0a250.539,250.539,0,0,1-178.268-74.016,252.147,252.147,0,0,1-67.509-235.4Z' class='ci-primary'/>",
      ]
      var n = r(397)
      const d = [
          '512 512',
          "<polygon fill='var(--ci-primary-color, currentColor)' points='359.873 121.377 337.246 144.004 433.243 240.001 16 240.001 16 240.002 16 272.001 16 272.002 433.24 272.002 337.246 367.996 359.873 390.623 494.498 256 359.873 121.377' class='ci-primary'/>",
        ],
        b = [
          '512 512',
          "<path fill='var(--ci-primary-color, currentColor)' d='M440,368a24.028,24.028,0,0,0,24-24V104a24.028,24.028,0,0,0-24-24H72a24.028,24.028,0,0,0-24,24V344a24.028,24.028,0,0,0,24,24ZM80,112H432V336H80Z' class='ci-primary'/><rect width='480' height='32' x='16' y='400' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/>",
        ]
      var j = r(380)
      const m = [
          '512 512',
          "<path fill='var(--ci-primary-color, currentColor)' d='M208,16A112.127,112.127,0,0,0,96,128v79.681a80.236,80.236,0,0,0,9.768,38.308l27.455,50.333L60.4,343.656A79.725,79.725,0,0,0,24,410.732V496H312V464H56V410.732a47.836,47.836,0,0,1,21.841-40.246l97.66-63.479-41.64-76.341A48.146,48.146,0,0,1,128,207.681V128a80,80,0,0,1,160,0v79.681a48.146,48.146,0,0,1-5.861,22.985L240.5,307.007,312,353.483V315.317l-29.223-19,27.455-50.334A80.23,80.23,0,0,0,320,207.681V128A112.127,112.127,0,0,0,208,16Z' class='ci-primary'/><polygon fill='var(--ci-primary-color, currentColor)' points='424 400 424 336 392 336 392 400 328 400 328 432 392 432 392 496 424 496 424 432 488 432 488 400 424 400' class='ci-primary'/>",
        ],
        h = [
          '512 512',
          "<rect width='32' height='128' x='120' y='304' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='128' x='200' y='304' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='128' x='280' y='304' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='128' x='360' y='304' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M473.681,168,394.062,16H357.938l79.619,152H74.443L154.062,16H117.938L38.319,168H16V279.468L58.856,496H453.117L496,281.584V168ZM464,278.416,426.883,464H85.144L48,276.332V272H464ZM464,240H48V200H464Z' class='ci-primary'/>",
        ]
      var u = r(411),
        p = r(405)
      const x = [
        '512 512',
        "<rect width='32' height='32' x='144' y='240' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='240' y='240' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='32' x='336' y='240' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M464,32H48A32.036,32.036,0,0,0,16,64V352a32.036,32.036,0,0,0,32,32h64V496h30.627l112-112H464a32.036,32.036,0,0,0,32-32V64A32.036,32.036,0,0,0,464,32Zm0,320H241.373L144,449.373V352H48V64H464Z' class='ci-primary'/>",
      ]
      var g = r(357),
        O = r(354),
        y = r(369),
        f = r(367),
        v = r(19)
      t.default = () => {
        const e = (e, t) => Math.floor(Math.random() * (t - e + 1) + e)
        return Object(v.jsxs)(s.n, {
          className: 'mb-4',
          children: [
            Object(v.jsx)(s.r, { children: 'Widgets' }),
            Object(v.jsxs)(s.o, {
              children: [
                Object(v.jsx)(O.f, {
                  href: '/components/widgets/#cwidgetstatsa',
                  children: Object(v.jsx)(f.default, {}),
                }),
                Object(v.jsx)(O.f, {
                  href: '/components/widgets/#cwidgetstatsb',
                  children: Object(v.jsxs)(s.rb, {
                    children: [
                      Object(v.jsx)(s.A, {
                        xs: 12,
                        sm: 6,
                        lg: 3,
                        children: Object(v.jsx)(s.Nb, {
                          className: 'mb-4',
                          progress: { color: 'success', value: 89.9 },
                          text: 'Lorem ipsum dolor sit amet enim.',
                          title: 'Widget title',
                          value: '89.9%',
                        }),
                      }),
                      Object(v.jsx)(s.A, {
                        xs: 12,
                        sm: 6,
                        lg: 3,
                        children: Object(v.jsx)(s.Nb, {
                          className: 'mb-4',
                          value: '12.124',
                          title: 'Widget title',
                          progress: { color: 'info', value: 89.9 },
                          text: 'Lorem ipsum dolor sit amet enim.',
                        }),
                      }),
                      Object(v.jsx)(s.A, {
                        xs: 12,
                        sm: 6,
                        lg: 3,
                        children: Object(v.jsx)(s.Nb, {
                          className: 'mb-4',
                          value: '$98.111,00',
                          title: 'Widget title',
                          progress: { color: 'warning', value: 89.9 },
                          text: 'Lorem ipsum dolor sit amet enim.',
                        }),
                      }),
                      Object(v.jsx)(s.A, {
                        xs: 12,
                        sm: 6,
                        lg: 3,
                        children: Object(v.jsx)(s.Nb, {
                          className: 'mb-4',
                          value: '2 TB',
                          title: 'Widget title',
                          progress: { color: 'primary', value: 89.9 },
                          text: 'Lorem ipsum dolor sit amet enim.',
                        }),
                      }),
                    ],
                  }),
                }),
                Object(v.jsx)(O.f, {
                  href: '/components/widgets/#cwidgetstatsb',
                  children: Object(v.jsxs)(s.rb, {
                    children: [
                      Object(v.jsx)(s.A, {
                        xs: 12,
                        sm: 6,
                        lg: 3,
                        children: Object(v.jsx)(s.Nb, {
                          className: 'mb-4',
                          color: 'success',
                          inverse: !0,
                          value: '89.9%',
                          title: 'Widget title',
                          progress: { value: 89.9 },
                          text: 'Lorem ipsum dolor sit amet enim.',
                        }),
                      }),
                      Object(v.jsx)(s.A, {
                        xs: 12,
                        sm: 6,
                        lg: 3,
                        children: Object(v.jsx)(s.Nb, {
                          className: 'mb-4',
                          color: 'info',
                          inverse: !0,
                          value: '12.124',
                          title: 'Widget title',
                          progress: { value: 89.9 },
                          text: 'Lorem ipsum dolor sit amet enim.',
                        }),
                      }),
                      Object(v.jsx)(s.A, {
                        xs: 12,
                        sm: 6,
                        lg: 3,
                        children: Object(v.jsx)(s.Nb, {
                          className: 'mb-4',
                          color: 'warning',
                          inverse: !0,
                          value: '$98.111,00',
                          title: 'Widget title',
                          progress: { value: 89.9 },
                          text: 'Lorem ipsum dolor sit amet enim.',
                        }),
                      }),
                      Object(v.jsx)(s.A, {
                        xs: 12,
                        sm: 6,
                        lg: 3,
                        children: Object(v.jsx)(s.Nb, {
                          className: 'mb-4',
                          color: 'primary',
                          inverse: !0,
                          value: '2 TB',
                          title: 'Widget title',
                          progress: { value: 89.9 },
                          text: 'Lorem ipsum dolor sit amet enim.',
                        }),
                      }),
                    ],
                  }),
                }),
                Object(v.jsx)(O.f, {
                  href: '/components/widgets/#cwidgetstatse',
                  children: Object(v.jsxs)(s.rb, {
                    children: [
                      Object(v.jsx)(s.A, {
                        sm: 4,
                        lg: 2,
                        children: Object(v.jsx)(s.Qb, {
                          chart: Object(v.jsx)(g.b, {
                            className: 'mx-auto',
                            style: { height: '40px', width: '80px' },
                            data: {
                              labels: [
                                'M',
                                'T',
                                'W',
                                'T',
                                'F',
                                'S',
                                'S',
                                'M',
                                'T',
                                'W',
                                'T',
                                'F',
                                'S',
                                'S',
                                'M',
                              ],
                              datasets: [
                                {
                                  backgroundColor: Object(i.getStyle)('--cui-danger'),
                                  borderColor: 'transparent',
                                  borderWidth: 1,
                                  data: [
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                  ],
                                },
                              ],
                            },
                            options: {
                              maintainAspectRatio: !1,
                              plugins: { legend: { display: !1 } },
                              scales: { x: { display: !1 }, y: { display: !1 } },
                            },
                          }),
                          className: 'mb-4',
                          title: 'title',
                          value: '1,123',
                        }),
                      }),
                      Object(v.jsx)(s.A, {
                        sm: 4,
                        lg: 2,
                        children: Object(v.jsx)(s.Qb, {
                          chart: Object(v.jsx)(g.b, {
                            className: 'mx-auto',
                            style: { height: '40px', width: '80px' },
                            data: {
                              labels: [
                                'M',
                                'T',
                                'W',
                                'T',
                                'F',
                                'S',
                                'S',
                                'M',
                                'T',
                                'W',
                                'T',
                                'F',
                                'S',
                                'S',
                                'M',
                              ],
                              datasets: [
                                {
                                  backgroundColor: Object(i.getStyle)('--cui-primary'),
                                  borderColor: 'transparent',
                                  borderWidth: 1,
                                  data: [
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                  ],
                                },
                              ],
                            },
                            options: {
                              maintainAspectRatio: !1,
                              plugins: { legend: { display: !1 } },
                              scales: { x: { display: !1 }, y: { display: !1 } },
                            },
                          }),
                          className: 'mb-4',
                          title: 'title',
                          value: '1,123',
                        }),
                      }),
                      Object(v.jsx)(s.A, {
                        sm: 4,
                        lg: 2,
                        children: Object(v.jsx)(s.Qb, {
                          chart: Object(v.jsx)(g.b, {
                            className: 'mx-auto',
                            style: { height: '40px', width: '80px' },
                            data: {
                              labels: [
                                'M',
                                'T',
                                'W',
                                'T',
                                'F',
                                'S',
                                'S',
                                'M',
                                'T',
                                'W',
                                'T',
                                'F',
                                'S',
                                'S',
                                'M',
                              ],
                              datasets: [
                                {
                                  backgroundColor: Object(i.getStyle)('--cui-success'),
                                  borderColor: 'transparent',
                                  borderWidth: 1,
                                  data: [
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                  ],
                                },
                              ],
                            },
                            options: {
                              maintainAspectRatio: !1,
                              plugins: { legend: { display: !1 } },
                              scales: { x: { display: !1 }, y: { display: !1 } },
                            },
                          }),
                          className: 'mb-4',
                          title: 'title',
                          value: '1,123',
                        }),
                      }),
                      Object(v.jsx)(s.A, {
                        sm: 4,
                        lg: 2,
                        children: Object(v.jsx)(s.Qb, {
                          chart: Object(v.jsx)(g.d, {
                            className: 'mx-auto',
                            style: { height: '40px', width: '80px' },
                            data: {
                              labels: [
                                'M',
                                'T',
                                'W',
                                'T',
                                'F',
                                'S',
                                'S',
                                'M',
                                'T',
                                'W',
                                'T',
                                'F',
                                'S',
                                'S',
                                'M',
                              ],
                              datasets: [
                                {
                                  backgroundColor: 'transparent',
                                  borderColor: Object(i.getStyle)('--cui-danger'),
                                  borderWidth: 2,
                                  data: [
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                  ],
                                },
                              ],
                            },
                            options: {
                              maintainAspectRatio: !1,
                              elements: { line: { tension: 0.4 }, point: { radius: 0 } },
                              plugins: { legend: { display: !1 } },
                              scales: { x: { display: !1 }, y: { display: !1 } },
                            },
                          }),
                          className: 'mb-4',
                          title: 'title',
                          value: '1,123',
                        }),
                      }),
                      Object(v.jsx)(s.A, {
                        sm: 4,
                        lg: 2,
                        children: Object(v.jsx)(s.Qb, {
                          chart: Object(v.jsx)(g.d, {
                            className: 'mx-auto',
                            style: { height: '40px', width: '80px' },
                            data: {
                              labels: [
                                'M',
                                'T',
                                'W',
                                'T',
                                'F',
                                'S',
                                'S',
                                'M',
                                'T',
                                'W',
                                'T',
                                'F',
                                'S',
                                'S',
                                'M',
                              ],
                              datasets: [
                                {
                                  backgroundColor: 'transparent',
                                  borderColor: Object(i.getStyle)('--cui-success'),
                                  borderWidth: 2,
                                  data: [
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                  ],
                                },
                              ],
                            },
                            options: {
                              maintainAspectRatio: !1,
                              elements: { line: { tension: 0.4 }, point: { radius: 0 } },
                              plugins: { legend: { display: !1 } },
                              scales: { x: { display: !1 }, y: { display: !1 } },
                            },
                          }),
                          className: 'mb-4',
                          title: 'title',
                          value: '1,123',
                        }),
                      }),
                      Object(v.jsx)(s.A, {
                        sm: 4,
                        lg: 2,
                        children: Object(v.jsx)(s.Qb, {
                          chart: Object(v.jsx)(g.d, {
                            className: 'mx-auto',
                            style: { height: '40px', width: '80px' },
                            data: {
                              labels: [
                                'M',
                                'T',
                                'W',
                                'T',
                                'F',
                                'S',
                                'S',
                                'M',
                                'T',
                                'W',
                                'T',
                                'F',
                                'S',
                                'S',
                                'M',
                              ],
                              datasets: [
                                {
                                  backgroundColor: 'transparent',
                                  borderColor: Object(i.getStyle)('--cui-info'),
                                  borderWidth: 2,
                                  data: [
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                    e(40, 100),
                                  ],
                                },
                              ],
                            },
                            options: {
                              maintainAspectRatio: !1,
                              elements: { line: { tension: 0.4 }, point: { radius: 0 } },
                              plugins: { legend: { display: !1 } },
                              scales: { x: { display: !1 }, y: { display: !1 } },
                            },
                          }),
                          className: 'mb-4',
                          title: 'title',
                          value: '1,123',
                        }),
                      }),
                    ],
                  }),
                }),
                Object(v.jsx)(O.f, {
                  href: '/components/widgets/#cwidgetstatsf',
                  children: Object(v.jsxs)(s.rb, {
                    children: [
                      Object(v.jsx)(s.A, {
                        xs: 12,
                        sm: 6,
                        lg: 3,
                        children: Object(v.jsx)(s.Rb, {
                          className: 'mb-3',
                          icon: Object(v.jsx)(a.a, { width: 24, icon: c.a, size: 'xl' }),
                          title: 'income',
                          value: '$1.999,50',
                          color: 'primary',
                        }),
                      }),
                      Object(v.jsx)(s.A, {
                        xs: 12,
                        sm: 6,
                        lg: 3,
                        children: Object(v.jsx)(s.Rb, {
                          className: 'mb-3',
                          icon: Object(v.jsx)(a.a, { width: 24, icon: l.a, size: 'xl' }),
                          title: 'income',
                          value: '$1.999,50',
                          color: 'info',
                        }),
                      }),
                      Object(v.jsx)(s.A, {
                        xs: 12,
                        sm: 6,
                        lg: 3,
                        children: Object(v.jsx)(s.Rb, {
                          className: 'mb-3',
                          icon: Object(v.jsx)(a.a, { width: 24, icon: o, size: 'xl' }),
                          title: 'income',
                          value: '$1.999,50',
                          color: 'warning',
                        }),
                      }),
                      Object(v.jsx)(s.A, {
                        xs: 12,
                        sm: 6,
                        lg: 3,
                        children: Object(v.jsx)(s.Rb, {
                          className: 'mb-3',
                          icon: Object(v.jsx)(a.a, { width: 24, icon: n.a, size: 'xl' }),
                          title: 'income',
                          value: '$1.999,50',
                          color: 'danger',
                        }),
                      }),
                    ],
                  }),
                }),
                Object(v.jsx)(O.f, {
                  href: '/components/widgets/#cwidgetstatsf',
                  children: Object(v.jsxs)(s.rb, {
                    children: [
                      Object(v.jsx)(s.A, {
                        xs: 12,
                        sm: 6,
                        lg: 3,
                        children: Object(v.jsx)(s.Rb, {
                          className: 'mb-3',
                          icon: Object(v.jsx)(a.a, { width: 24, icon: c.a, size: 'xl' }),
                          title: 'income',
                          value: '$1.999,50',
                          color: 'primary',
                          footer: Object(v.jsxs)(s.Y, {
                            className: 'font-weight-bold font-xs text-medium-emphasis',
                            href: 'https://coreui.io/',
                            rel: 'noopener norefferer',
                            target: '_blank',
                            children: [
                              'View more',
                              Object(v.jsx)(a.a, { icon: d, className: 'float-end', width: 16 }),
                            ],
                          }),
                        }),
                      }),
                      Object(v.jsx)(s.A, {
                        xs: 12,
                        sm: 6,
                        lg: 3,
                        children: Object(v.jsx)(s.Rb, {
                          className: 'mb-3',
                          icon: Object(v.jsx)(a.a, { width: 24, icon: b, size: 'xl' }),
                          title: 'income',
                          value: '$1.999,50',
                          color: 'info',
                          footer: Object(v.jsxs)(s.Y, {
                            className: 'font-weight-bold font-xs text-medium-emphasis',
                            href: 'https://coreui.io/',
                            rel: 'noopener norefferer',
                            target: '_blank',
                            children: [
                              'View more',
                              Object(v.jsx)(a.a, { icon: d, className: 'float-end', width: 16 }),
                            ],
                          }),
                        }),
                      }),
                      Object(v.jsx)(s.A, {
                        xs: 12,
                        sm: 6,
                        lg: 3,
                        children: Object(v.jsx)(s.Rb, {
                          className: 'mb-3',
                          icon: Object(v.jsx)(a.a, { width: 24, icon: o, size: 'xl' }),
                          title: 'income',
                          value: '$1.999,50',
                          color: 'warning',
                          footer: Object(v.jsxs)(s.Y, {
                            className: 'font-weight-bold font-xs text-medium-emphasis',
                            href: 'https://coreui.io/',
                            rel: 'noopener norefferer',
                            target: '_blank',
                            children: [
                              'View more',
                              Object(v.jsx)(a.a, { icon: d, className: 'float-end', width: 16 }),
                            ],
                          }),
                        }),
                      }),
                      Object(v.jsx)(s.A, {
                        xs: 12,
                        sm: 6,
                        lg: 3,
                        children: Object(v.jsx)(s.Rb, {
                          className: 'mb-3',
                          icon: Object(v.jsx)(a.a, { width: 24, icon: n.a, size: 'xl' }),
                          title: 'income',
                          value: '$1.999,50',
                          color: 'danger',
                          footer: Object(v.jsxs)(s.Y, {
                            className: 'font-weight-bold font-xs text-medium-emphasis',
                            href: 'https://coreui.io/',
                            rel: 'noopener norefferer',
                            target: '_blank',
                            children: [
                              'View more',
                              Object(v.jsx)(a.a, { icon: d, className: 'float-end', width: 16 }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                Object(v.jsx)(O.f, {
                  href: '/components/widgets/#cwidgetstatsf',
                  children: Object(v.jsxs)(s.rb, {
                    children: [
                      Object(v.jsx)(s.A, {
                        xs: 12,
                        sm: 6,
                        lg: 3,
                        children: Object(v.jsx)(s.Rb, {
                          className: 'mb-3',
                          icon: Object(v.jsx)(a.a, { width: 24, icon: c.a, size: 'xl' }),
                          padding: !1,
                          title: 'income',
                          value: '$1.999,50',
                          color: 'primary',
                        }),
                      }),
                      Object(v.jsx)(s.A, {
                        xs: 12,
                        sm: 6,
                        lg: 3,
                        children: Object(v.jsx)(s.Rb, {
                          className: 'mb-3',
                          icon: Object(v.jsx)(a.a, { width: 24, icon: l.a, size: 'xl' }),
                          padding: !1,
                          title: 'income',
                          value: '$1.999,50',
                          color: 'info',
                        }),
                      }),
                      Object(v.jsx)(s.A, {
                        xs: 12,
                        sm: 6,
                        lg: 3,
                        children: Object(v.jsx)(s.Rb, {
                          className: 'mb-3',
                          icon: Object(v.jsx)(a.a, { width: 24, icon: o, size: 'xl' }),
                          padding: !1,
                          title: 'income',
                          value: '$1.999,50',
                          color: 'warning',
                        }),
                      }),
                      Object(v.jsx)(s.A, {
                        xs: 12,
                        sm: 6,
                        lg: 3,
                        children: Object(v.jsx)(s.Rb, {
                          className: 'mb-3',
                          icon: Object(v.jsx)(a.a, { width: 24, icon: n.a, size: 'xl' }),
                          padding: !1,
                          title: 'income',
                          value: '$1.999,50',
                          color: 'danger',
                        }),
                      }),
                    ],
                  }),
                }),
                Object(v.jsx)(O.f, {
                  href: '/components/widgets/#cwidgetstatsd',
                  children: Object(v.jsx)(y.default, {}),
                }),
                Object(v.jsx)(O.f, {
                  href: '/components/widgets/#cwidgetstatsd',
                  children: Object(v.jsx)(y.default, { withCharts: !0 }),
                }),
                Object(v.jsx)(O.f, {
                  href: '/components/widgets/#cwidgetstatsc',
                  children: Object(v.jsxs)(s.q, {
                    className: 'mb-4',
                    children: [
                      Object(v.jsx)(s.Ob, {
                        icon: Object(v.jsx)(a.a, { icon: j.a, height: 36 }),
                        value: '87.500',
                        title: 'Visitors',
                        progress: { color: 'info', value: 75 },
                      }),
                      Object(v.jsx)(s.Ob, {
                        icon: Object(v.jsx)(a.a, { icon: m, height: 36 }),
                        value: '385',
                        title: 'New Clients',
                        progress: { color: 'success', value: 75 },
                      }),
                      Object(v.jsx)(s.Ob, {
                        icon: Object(v.jsx)(a.a, { icon: h, height: 36 }),
                        value: '1238',
                        title: 'Products sold',
                        progress: { color: 'warning', value: 75 },
                      }),
                      Object(v.jsx)(s.Ob, {
                        icon: Object(v.jsx)(a.a, { icon: u.a, height: 36 }),
                        value: '28%',
                        title: 'Returning Visitors',
                        progress: { color: 'primary', value: 75 },
                      }),
                      Object(v.jsx)(s.Ob, {
                        icon: Object(v.jsx)(a.a, { icon: p.a, height: 36 }),
                        value: '5:34:11',
                        title: 'Avg. Time',
                        progress: { color: 'danger', value: 75 },
                      }),
                    ],
                  }),
                }),
                Object(v.jsx)(O.f, {
                  href: '/components/widgets/#cwidgetstatsc',
                  children: Object(v.jsxs)(s.rb, {
                    children: [
                      Object(v.jsx)(s.A, {
                        sm: 6,
                        md: 2,
                        children: Object(v.jsx)(s.Ob, {
                          icon: Object(v.jsx)(a.a, { icon: j.a, height: 36 }),
                          value: '87.500',
                          title: 'Visitors',
                          progress: { color: 'info', value: 75 },
                          className: 'mb-4',
                        }),
                      }),
                      Object(v.jsx)(s.A, {
                        sm: 6,
                        md: 2,
                        children: Object(v.jsx)(s.Ob, {
                          icon: Object(v.jsx)(a.a, { icon: m, height: 36 }),
                          value: '385',
                          title: 'New Clients',
                          progress: { color: 'success', value: 75 },
                          className: 'mb-4',
                        }),
                      }),
                      Object(v.jsx)(s.A, {
                        sm: 6,
                        md: 2,
                        children: Object(v.jsx)(s.Ob, {
                          icon: Object(v.jsx)(a.a, { icon: h, height: 36 }),
                          value: '1238',
                          title: 'Products sold',
                          progress: { color: 'warning', value: 75 },
                          className: 'mb-4',
                        }),
                      }),
                      Object(v.jsx)(s.A, {
                        sm: 6,
                        md: 2,
                        children: Object(v.jsx)(s.Ob, {
                          icon: Object(v.jsx)(a.a, { icon: u.a, height: 36 }),
                          value: '28%',
                          title: 'Returning Visitors',
                          progress: { color: 'primary', value: 75 },
                          className: 'mb-4',
                        }),
                      }),
                      Object(v.jsx)(s.A, {
                        sm: 6,
                        md: 2,
                        children: Object(v.jsx)(s.Ob, {
                          icon: Object(v.jsx)(a.a, { icon: p.a, height: 36 }),
                          value: '5:34:11',
                          title: 'Avg. Time',
                          progress: { color: 'danger', value: 75 },
                          className: 'mb-4',
                        }),
                      }),
                      Object(v.jsx)(s.A, {
                        sm: 6,
                        md: 2,
                        children: Object(v.jsx)(s.Ob, {
                          icon: Object(v.jsx)(a.a, { icon: x, height: 36 }),
                          value: '972',
                          title: 'comments',
                          progress: { color: 'info', value: 75 },
                          className: 'mb-4',
                        }),
                      }),
                    ],
                  }),
                }),
                Object(v.jsx)(O.f, {
                  href: '/components/widgets/#cwidgetstatsc',
                  children: Object(v.jsxs)(s.rb, {
                    children: [
                      Object(v.jsx)(s.A, {
                        sm: 6,
                        md: 2,
                        children: Object(v.jsx)(s.Ob, {
                          color: 'info',
                          icon: Object(v.jsx)(a.a, { icon: j.a, height: 36 }),
                          value: '87.500',
                          title: 'Visitors',
                          inverse: !0,
                          progress: { value: 75 },
                          className: 'mb-4',
                        }),
                      }),
                      Object(v.jsx)(s.A, {
                        sm: 6,
                        md: 2,
                        children: Object(v.jsx)(s.Ob, {
                          color: 'success',
                          icon: Object(v.jsx)(a.a, { icon: m, height: 36 }),
                          value: '385',
                          title: 'New Clients',
                          inverse: !0,
                          progress: { value: 75 },
                          className: 'mb-4',
                        }),
                      }),
                      Object(v.jsx)(s.A, {
                        sm: 6,
                        md: 2,
                        children: Object(v.jsx)(s.Ob, {
                          color: 'warning',
                          icon: Object(v.jsx)(a.a, { icon: h, height: 36 }),
                          value: '1238',
                          title: 'Products sold',
                          inverse: !0,
                          progress: { value: 75 },
                          className: 'mb-4',
                        }),
                      }),
                      Object(v.jsx)(s.A, {
                        sm: 6,
                        md: 2,
                        children: Object(v.jsx)(s.Ob, {
                          color: 'primary',
                          icon: Object(v.jsx)(a.a, { icon: u.a, height: 36 }),
                          value: '28%',
                          title: 'Returning Visitors',
                          inverse: !0,
                          progress: { value: 75 },
                          className: 'mb-4',
                        }),
                      }),
                      Object(v.jsx)(s.A, {
                        sm: 6,
                        md: 2,
                        children: Object(v.jsx)(s.Ob, {
                          color: 'danger',
                          icon: Object(v.jsx)(a.a, { icon: p.a, height: 36 }),
                          value: '5:34:11',
                          title: 'Avg. Time',
                          inverse: !0,
                          progress: { value: 75 },
                          className: 'mb-4',
                        }),
                      }),
                      Object(v.jsx)(s.A, {
                        sm: 6,
                        md: 2,
                        children: Object(v.jsx)(s.Ob, {
                          color: 'info',
                          icon: Object(v.jsx)(a.a, { icon: x, height: 36 }),
                          value: '972',
                          title: 'comments',
                          inverse: !0,
                          progress: { value: 75 },
                          className: 'mb-4',
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        })
      }
    },
  },
])
//# sourceMappingURL=10.0d1c09d0.chunk.js.map
