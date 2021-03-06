;(this['webpackJsonp@coreui/coreui-free-react-admin-template'] =
  this['webpackJsonp@coreui/coreui-free-react-admin-template'] || []).push([
  [34],
  {
    452: function (e, s, t) {
      t.r(s)
      t(1)
      var c = t(353),
        n = t(356),
        r = t(397),
        i = t(354),
        l = t(19)
      s.default = () =>
        Object(l.jsxs)(c.rb, {
          children: [
            Object(l.jsx)(c.A, {
              xs: 12,
              children: Object(l.jsx)(i.e, { name: 'Button', href: 'components/buttons' }),
            }),
            Object(l.jsx)(c.A, {
              xs: 12,
              children: Object(l.jsxs)(c.n, {
                className: 'mb-4',
                children: [
                  Object(l.jsx)(c.r, {
                    children: Object(l.jsx)('strong', { children: 'React Button' }),
                  }),
                  Object(l.jsxs)(c.o, {
                    children: [
                      Object(l.jsx)('p', {
                        className: 'text-medium-emphasis small',
                        children:
                          'CoreUI includes a bunch of predefined buttons components, each serving its own semantic purpose. Buttons show what action will happen when the user clicks or touches it. CoreUI buttons are used to initialize operations, both in the background or foreground of an experience.',
                      }),
                      Object(l.jsx)(i.f, {
                        href: 'components/buttons',
                        children: ['normal', 'active', 'disabled'].map((e, s) =>
                          Object(l.jsxs)(
                            c.rb,
                            {
                              className: 'align-items-center mb-3',
                              children: [
                                Object(l.jsx)(c.A, {
                                  xs: 12,
                                  xl: 2,
                                  className: 'mb-3 mb-xl-0',
                                  children: e.charAt(0).toUpperCase() + e.slice(1),
                                }),
                                Object(l.jsxs)(c.A, {
                                  xs: !0,
                                  children: [
                                    [
                                      'primary',
                                      'secondary',
                                      'success',
                                      'danger',
                                      'warning',
                                      'info',
                                      'light',
                                      'dark',
                                    ].map((s, t) =>
                                      Object(l.jsx)(
                                        c.j,
                                        {
                                          color: s,
                                          active: 'active' === e,
                                          disabled: 'disabled' === e,
                                          children: s.charAt(0).toUpperCase() + s.slice(1),
                                        },
                                        t,
                                      ),
                                    ),
                                    Object(l.jsx)(c.j, { color: 'link', children: 'Link' }),
                                  ],
                                }),
                              ],
                            },
                            s,
                          ),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            Object(l.jsx)(c.A, {
              xs: 12,
              children: Object(l.jsxs)(c.n, {
                className: 'mb-4',
                children: [
                  Object(l.jsxs)(c.r, {
                    children: [
                      Object(l.jsx)('strong', { children: 'React Button' }),
                      ' ',
                      Object(l.jsx)('small', { children: 'with icons' }),
                    ],
                  }),
                  Object(l.jsxs)(c.o, {
                    children: [
                      Object(l.jsxs)('p', {
                        className: 'text-medium-emphasis small',
                        children: [
                          'You can combine button with our ',
                          Object(l.jsx)('a', {
                            href: 'https://icons.coreui.io/',
                            children: 'CoreUI Icons',
                          }),
                          '.',
                        ],
                      }),
                      Object(l.jsx)(i.f, {
                        href: 'components/buttons',
                        children: ['normal', 'active', 'disabled'].map((e, s) =>
                          Object(l.jsxs)(
                            c.rb,
                            {
                              className: 'align-items-center mb-3',
                              children: [
                                Object(l.jsx)(c.A, {
                                  xs: 12,
                                  xl: 2,
                                  className: 'mb-3 mb-xl-0',
                                  children: e.charAt(0).toUpperCase() + e.slice(1),
                                }),
                                Object(l.jsxs)(c.A, {
                                  xs: !0,
                                  children: [
                                    [
                                      'primary',
                                      'secondary',
                                      'success',
                                      'danger',
                                      'warning',
                                      'info',
                                      'light',
                                      'dark',
                                    ].map((s, t) =>
                                      Object(l.jsxs)(
                                        c.j,
                                        {
                                          color: s,
                                          active: 'active' === e,
                                          disabled: 'disabled' === e,
                                          children: [
                                            Object(l.jsx)(n.a, { icon: r.a, className: 'me-2' }),
                                            s.charAt(0).toUpperCase() + s.slice(1),
                                          ],
                                        },
                                        t,
                                      ),
                                    ),
                                    Object(l.jsxs)(c.j, {
                                      color: 'link',
                                      children: [
                                        Object(l.jsx)(n.a, { icon: r.a, className: 'me-2' }),
                                        'Link',
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            },
                            s,
                          ),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            Object(l.jsx)(c.A, {
              xs: 12,
              children: Object(l.jsxs)(c.n, {
                className: 'mb-4',
                children: [
                  Object(l.jsxs)(c.r, {
                    children: [
                      Object(l.jsx)('strong', { children: 'React Button' }),
                      ' ',
                      Object(l.jsx)('small', { children: 'Button components' }),
                    ],
                  }),
                  Object(l.jsxs)(c.o, {
                    children: [
                      Object(l.jsxs)('p', {
                        className: 'text-medium-emphasis small',
                        children: [
                          'The ',
                          Object(l.jsx)('code', { children: '<CButton>' }),
                          ' component are designed for',
                          ' ',
                          Object(l.jsx)('code', { children: '<button>' }),
                          ' , ',
                          Object(l.jsx)('code', { children: '<a>' }),
                          ' or ',
                          Object(l.jsx)('code', { children: '<input>' }),
                          ' ',
                          'elements (though some browsers may apply a slightly different rendering).',
                        ],
                      }),
                      Object(l.jsxs)('p', {
                        className: 'text-medium-emphasis small',
                        children: [
                          "If you're using ",
                          Object(l.jsx)('code', { children: '<CButton>' }),
                          ' component as ',
                          Object(l.jsx)('code', { children: '<a>' }),
                          ' ',
                          'elements that are used to trigger functionality ex. collapsing content, these links should be given a ',
                          Object(l.jsx)('code', { children: 'role="button"' }),
                          ' to adequately communicate their meaning to assistive technologies such as screen readers.',
                        ],
                      }),
                      Object(l.jsxs)(i.f, {
                        href: 'components/buttons#button-components',
                        children: [
                          Object(l.jsx)(c.j, {
                            component: 'a',
                            color: 'primary',
                            href: '#',
                            role: 'button',
                            children: 'Link',
                          }),
                          Object(l.jsx)(c.j, {
                            type: 'submit',
                            color: 'primary',
                            children: 'Button',
                          }),
                          Object(l.jsx)(c.j, {
                            component: 'input',
                            type: 'button',
                            color: 'primary',
                            value: 'Input',
                          }),
                          Object(l.jsx)(c.j, {
                            component: 'input',
                            type: 'submit',
                            color: 'primary',
                            value: 'Submit',
                          }),
                          Object(l.jsx)(c.j, {
                            component: 'input',
                            type: 'reset',
                            color: 'primary',
                            value: 'Reset',
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            Object(l.jsx)(c.A, {
              xs: 12,
              children: Object(l.jsxs)(c.n, {
                className: 'mb-4',
                children: [
                  Object(l.jsxs)(c.r, {
                    children: [
                      Object(l.jsx)('strong', { children: 'React Button' }),
                      ' ',
                      Object(l.jsx)('small', { children: 'outline' }),
                    ],
                  }),
                  Object(l.jsxs)(c.o, {
                    children: [
                      Object(l.jsxs)('p', {
                        className: 'text-medium-emphasis small',
                        children: [
                          'If you need a button, but without the strong background colors. Set',
                          ' ',
                          Object(l.jsx)('code', { children: 'variant="outline"' }),
                          ' prop to remove all background colors.',
                        ],
                      }),
                      Object(l.jsx)(i.f, {
                        href: 'components/buttons#outline-buttons',
                        children: ['normal', 'active', 'disabled'].map((e, s) =>
                          Object(l.jsxs)(
                            c.rb,
                            {
                              className: 'align-items-center mb-3',
                              children: [
                                Object(l.jsx)(c.A, {
                                  xs: 12,
                                  xl: 2,
                                  className: 'mb-3 mb-xl-0',
                                  children: e.charAt(0).toUpperCase() + e.slice(1),
                                }),
                                Object(l.jsx)(c.A, {
                                  xs: !0,
                                  children: [
                                    'primary',
                                    'secondary',
                                    'success',
                                    'danger',
                                    'warning',
                                    'info',
                                    'light',
                                    'dark',
                                  ].map((s, t) =>
                                    Object(l.jsx)(
                                      c.j,
                                      {
                                        color: s,
                                        variant: 'outline',
                                        active: 'active' === e,
                                        disabled: 'disabled' === e,
                                        children: s.charAt(0).toUpperCase() + s.slice(1),
                                      },
                                      t,
                                    ),
                                  ),
                                }),
                              ],
                            },
                            s,
                          ),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            Object(l.jsx)(c.A, {
              xs: 12,
              children: Object(l.jsxs)(c.n, {
                className: 'mb-4',
                children: [
                  Object(l.jsxs)(c.r, {
                    children: [
                      Object(l.jsx)('strong', { children: 'React Button' }),
                      ' ',
                      Object(l.jsx)('small', { children: 'ghost' }),
                    ],
                  }),
                  Object(l.jsxs)(c.o, {
                    children: [
                      Object(l.jsxs)('p', {
                        className: 'text-medium-emphasis small',
                        children: [
                          'If you need a ghost variant of button, set ',
                          Object(l.jsx)('code', { children: 'variant="ghost"' }),
                          ' prop to remove all background colors.',
                        ],
                      }),
                      Object(l.jsx)(i.f, {
                        href: 'components/buttons#ghost-buttons',
                        children: ['normal', 'active', 'disabled'].map((e, s) =>
                          Object(l.jsxs)(
                            c.rb,
                            {
                              className: 'align-items-center mb-3',
                              children: [
                                Object(l.jsx)(c.A, {
                                  xs: 12,
                                  xl: 2,
                                  className: 'mb-3 mb-xl-0',
                                  children: e.charAt(0).toUpperCase() + e.slice(1),
                                }),
                                Object(l.jsx)(c.A, {
                                  xs: !0,
                                  children: [
                                    'primary',
                                    'secondary',
                                    'success',
                                    'danger',
                                    'warning',
                                    'info',
                                    'light',
                                    'dark',
                                  ].map((s, t) =>
                                    Object(l.jsx)(
                                      c.j,
                                      {
                                        color: s,
                                        variant: 'ghost',
                                        active: 'active' === e,
                                        disabled: 'disabled' === e,
                                        children: s.charAt(0).toUpperCase() + s.slice(1),
                                      },
                                      t,
                                    ),
                                  ),
                                }),
                              ],
                            },
                            s,
                          ),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            Object(l.jsx)(c.A, {
              xs: 12,
              children: Object(l.jsxs)(c.n, {
                className: 'mb-4',
                children: [
                  Object(l.jsxs)(c.r, {
                    children: [
                      Object(l.jsx)('strong', { children: 'React Button' }),
                      ' ',
                      Object(l.jsx)('small', { children: 'Sizes' }),
                    ],
                  }),
                  Object(l.jsxs)(c.o, {
                    children: [
                      Object(l.jsxs)('p', {
                        className: 'text-medium-emphasis small',
                        children: [
                          'Larger or smaller buttons? Add ',
                          Object(l.jsx)('code', { children: 'size="lg"' }),
                          ' or',
                          ' ',
                          Object(l.jsx)('code', { children: 'size="sm"' }),
                          ' for additional sizes.',
                        ],
                      }),
                      Object(l.jsxs)(i.f, {
                        href: 'components/buttons#sizes',
                        children: [
                          Object(l.jsx)(c.j, {
                            color: 'primary',
                            size: 'lg',
                            children: 'Large button',
                          }),
                          Object(l.jsx)(c.j, {
                            color: 'secondary',
                            size: 'lg',
                            children: 'Large button',
                          }),
                        ],
                      }),
                      Object(l.jsxs)(i.f, {
                        href: 'components/buttons#sizes',
                        children: [
                          Object(l.jsx)(c.j, {
                            color: 'primary',
                            size: 'sm',
                            children: 'Small button',
                          }),
                          Object(l.jsx)(c.j, {
                            color: 'secondary',
                            size: 'sm',
                            children: 'Small button',
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            Object(l.jsx)(c.A, {
              xs: 12,
              children: Object(l.jsxs)(c.n, {
                className: 'mb-4',
                children: [
                  Object(l.jsxs)(c.r, {
                    children: [
                      Object(l.jsx)('strong', { children: 'React Button' }),
                      ' ',
                      Object(l.jsx)('small', { children: 'Pill' }),
                    ],
                  }),
                  Object(l.jsx)(c.o, {
                    children: Object(l.jsx)(i.f, {
                      href: 'components/buttons#pill-buttons',
                      children: [
                        'primary',
                        'secondary',
                        'success',
                        'danger',
                        'warning',
                        'info',
                        'light',
                        'dark',
                      ].map((e, s) =>
                        Object(l.jsx)(
                          c.j,
                          {
                            color: e,
                            shape: 'rounded-pill',
                            children: e.charAt(0).toUpperCase() + e.slice(1),
                          },
                          s,
                        ),
                      ),
                    }),
                  }),
                ],
              }),
            }),
            Object(l.jsx)(c.A, {
              xs: 12,
              children: Object(l.jsxs)(c.n, {
                className: 'mb-4',
                children: [
                  Object(l.jsxs)(c.r, {
                    children: [
                      Object(l.jsx)('strong', { children: 'React Button' }),
                      ' ',
                      Object(l.jsx)('small', { children: 'Square' }),
                    ],
                  }),
                  Object(l.jsx)(c.o, {
                    children: Object(l.jsx)(i.f, {
                      href: 'components/buttons#square',
                      children: [
                        'primary',
                        'secondary',
                        'success',
                        'danger',
                        'warning',
                        'info',
                        'light',
                        'dark',
                      ].map((e, s) =>
                        Object(l.jsx)(
                          c.j,
                          {
                            color: e,
                            shape: 'rounded-0',
                            children: e.charAt(0).toUpperCase() + e.slice(1),
                          },
                          s,
                        ),
                      ),
                    }),
                  }),
                ],
              }),
            }),
            Object(l.jsx)(c.A, {
              xs: 12,
              children: Object(l.jsxs)(c.n, {
                className: 'mb-4',
                children: [
                  Object(l.jsxs)(c.r, {
                    children: [
                      Object(l.jsx)('strong', { children: 'React Button' }),
                      ' ',
                      Object(l.jsx)('small', { children: 'Disabled state' }),
                    ],
                  }),
                  Object(l.jsxs)(c.o, {
                    children: [
                      Object(l.jsxs)('p', {
                        className: 'text-medium-emphasis small',
                        children: [
                          'Add the ',
                          Object(l.jsx)('code', { children: 'disabled' }),
                          ' boolean prop to any ',
                          Object(l.jsx)('code', { children: '<CButton>' }),
                          ' ',
                          'component to make buttons look inactive. Disabled button has',
                          ' ',
                          Object(l.jsx)('code', { children: 'pointer-events: none' }),
                          ' applied to, disabling hover and active states from triggering.',
                        ],
                      }),
                      Object(l.jsxs)(i.f, {
                        href: 'components/buttons#disabled-state',
                        children: [
                          Object(l.jsx)(c.j, {
                            color: 'primary',
                            size: 'lg',
                            disabled: !0,
                            children: 'Primary button',
                          }),
                          Object(l.jsx)(c.j, {
                            color: 'secondary',
                            size: 'lg',
                            disabled: !0,
                            children: 'Button',
                          }),
                        ],
                      }),
                      Object(l.jsxs)('p', {
                        className: 'text-medium-emphasis small',
                        children: [
                          'Disabled buttons using the ',
                          Object(l.jsx)('code', { children: '<a>' }),
                          ' component act a little different:',
                        ],
                      }),
                      Object(l.jsxs)('p', {
                        className: 'text-medium-emphasis small',
                        children: [
                          Object(l.jsx)('code', { children: '<a>' }),
                          "s don'tsupport the ",
                          Object(l.jsx)('code', { children: 'disabled' }),
                          ' attribute, so CoreUI has to add ',
                          Object(l.jsx)('code', { children: '.disabled' }),
                          ' className to make buttons look inactive. CoreUI also has to add to the disabled button component',
                          ' ',
                          Object(l.jsx)('code', { children: 'aria-disabled="true"' }),
                          ' attribute to show the state of the component to assistive technologies.',
                        ],
                      }),
                      Object(l.jsxs)(i.f, {
                        href: 'components/buttons#disabled-state',
                        children: [
                          Object(l.jsx)(c.j, {
                            component: 'a',
                            href: '#',
                            color: 'primary',
                            size: 'lg',
                            disabled: !0,
                            children: 'Primary link',
                          }),
                          Object(l.jsx)(c.j, {
                            component: 'a',
                            href: '#',
                            color: 'secondary',
                            size: 'lg',
                            disabled: !0,
                            children: 'Link',
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            Object(l.jsx)(c.A, {
              xs: 12,
              children: Object(l.jsxs)(c.n, {
                className: 'mb-4',
                children: [
                  Object(l.jsxs)(c.r, {
                    children: [
                      Object(l.jsx)('strong', { children: 'React Button' }),
                      ' ',
                      Object(l.jsx)('small', { children: 'Block buttons' }),
                    ],
                  }),
                  Object(l.jsxs)(c.o, {
                    children: [
                      Object(l.jsx)('p', {
                        className: 'text-medium-emphasis small',
                        children:
                          'Create buttons that span the full width of a parent\u2014by using utilities.',
                      }),
                      Object(l.jsx)(i.f, {
                        href: 'components/buttons#block-buttons',
                        children: Object(l.jsxs)('div', {
                          className: 'd-grid gap-2',
                          children: [
                            Object(l.jsx)(c.j, { color: 'primary', children: 'Button' }),
                            Object(l.jsx)(c.j, { color: 'primary', children: 'Button' }),
                          ],
                        }),
                      }),
                      Object(l.jsxs)('p', {
                        className: 'text-medium-emphasis small',
                        children: [
                          'Here we create a responsive variation, starting with vertically stacked buttons until the ',
                          Object(l.jsx)('code', { children: 'md' }),
                          ' breakpoint, where ',
                          Object(l.jsx)('code', { children: '.d-md-block' }),
                          ' replaces the',
                          ' ',
                          Object(l.jsx)('code', { children: '.d-grid' }),
                          ' class, thus nullifying the ',
                          Object(l.jsx)('code', { children: 'gap-2' }),
                          ' utility. Resize your browser to see them change.',
                        ],
                      }),
                      Object(l.jsx)(i.f, {
                        href: 'components/buttons#block-buttons',
                        children: Object(l.jsxs)('div', {
                          className: 'd-grid gap-2 d-md-block',
                          children: [
                            Object(l.jsx)(c.j, { color: 'primary', children: 'Button' }),
                            Object(l.jsx)(c.j, { color: 'primary', children: 'Button' }),
                          ],
                        }),
                      }),
                      Object(l.jsxs)('p', {
                        className: 'text-medium-emphasis small',
                        children: [
                          'You can adjust the width of your block buttons with grid column width classes. For example, for a half-width "block button", use ',
                          Object(l.jsx)('code', { children: '.col-6' }),
                          '. Center it horizontally with ',
                          Object(l.jsx)('code', { children: '.mx-auto' }),
                          ', too.',
                        ],
                      }),
                      Object(l.jsx)(i.f, {
                        href: 'components/buttons#block-buttons',
                        children: Object(l.jsxs)('div', {
                          className: 'd-grid gap-2 col-6 mx-auto',
                          children: [
                            Object(l.jsx)(c.j, { color: 'primary', children: 'Button' }),
                            Object(l.jsx)(c.j, { color: 'primary', children: 'Button' }),
                          ],
                        }),
                      }),
                      Object(l.jsx)('p', {
                        className: 'text-medium-emphasis small',
                        children:
                          "Additional utilities can be used to adjust the alignment of buttons when horizontal. Here we've taken our previous responsive example and added some flex utilities and a margin utility on the button to right align the buttons when they're no longer stacked.",
                      }),
                      Object(l.jsx)(i.f, {
                        href: 'components/buttons#block-buttons',
                        children: Object(l.jsxs)('div', {
                          className: 'd-grid gap-2 d-md-flex justify-content-md-end',
                          children: [
                            Object(l.jsx)(c.j, {
                              color: 'primary',
                              className: 'me-md-2',
                              children: 'Button',
                            }),
                            Object(l.jsx)(c.j, { color: 'primary', children: 'Button' }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        })
    },
  },
])
//# sourceMappingURL=34.76f68b4e.chunk.js.map
