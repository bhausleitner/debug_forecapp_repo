;(this['webpackJsonp@coreui/coreui-free-react-admin-template'] =
  this['webpackJsonp@coreui/coreui-free-react-admin-template'] || []).push([
  [40],
  {
    457: function (e, l, s) {
      s.r(l)
      s(1)
      var t = s(353),
        c = s(354),
        r = s(19)
      l.default = () =>
        Object(r.jsxs)(t.rb, {
          children: [
            Object(r.jsx)(t.A, {
              xs: 12,
              children: Object(r.jsx)(c.e, { name: 'Form Control', href: 'forms/form-control' }),
            }),
            Object(r.jsx)(t.A, {
              xs: 12,
              children: Object(r.jsxs)(t.n, {
                className: 'mb-4',
                children: [
                  Object(r.jsx)(t.r, {
                    children: Object(r.jsx)('strong', { children: 'React Form Control' }),
                  }),
                  Object(r.jsx)(t.o, {
                    children: Object(r.jsx)(c.f, {
                      href: 'forms/form-control',
                      children: Object(r.jsxs)(t.J, {
                        children: [
                          Object(r.jsxs)('div', {
                            className: 'mb-3',
                            children: [
                              Object(r.jsx)(t.O, {
                                htmlFor: 'exampleFormControlInput1',
                                children: 'Email address',
                              }),
                              Object(r.jsx)(t.N, {
                                type: 'email',
                                id: 'exampleFormControlInput1',
                                placeholder: 'name@example.com',
                              }),
                            ],
                          }),
                          Object(r.jsxs)('div', {
                            className: 'mb-3',
                            children: [
                              Object(r.jsx)(t.O, {
                                htmlFor: 'exampleFormControlTextarea1',
                                children: 'Example textarea',
                              }),
                              Object(r.jsx)(t.S, { id: 'exampleFormControlTextarea1', rows: '3' }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            }),
            Object(r.jsx)(t.A, {
              xs: 12,
              children: Object(r.jsxs)(t.n, {
                className: 'mb-4',
                children: [
                  Object(r.jsxs)(t.r, {
                    children: [
                      Object(r.jsx)('strong', { children: 'React Form Control' }),
                      ' ',
                      Object(r.jsx)('small', { children: 'Sizing' }),
                    ],
                  }),
                  Object(r.jsxs)(t.o, {
                    children: [
                      Object(r.jsxs)('p', {
                        className: 'text-medium-emphasis small',
                        children: [
                          'Set heights using ',
                          Object(r.jsx)('code', { children: 'size' }),
                          ' property like ',
                          Object(r.jsx)('code', { children: 'size="lg"' }),
                          ' and',
                          ' ',
                          Object(r.jsx)('code', { children: 'size="sm"' }),
                          '.',
                        ],
                      }),
                      Object(r.jsxs)(c.f, {
                        href: 'forms/form-control#sizing',
                        children: [
                          Object(r.jsx)(t.N, {
                            type: 'text',
                            size: 'lg',
                            placeholder: 'Large input',
                            'aria-label': 'lg input example',
                          }),
                          Object(r.jsx)('br', {}),
                          Object(r.jsx)(t.N, {
                            type: 'text',
                            placeholder: 'Default input',
                            'aria-label': 'default input example',
                          }),
                          Object(r.jsx)('br', {}),
                          Object(r.jsx)(t.N, {
                            type: 'text',
                            size: 'sm',
                            placeholder: 'Small input',
                            'aria-label': 'sm input example',
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            Object(r.jsx)(t.A, {
              xs: 12,
              children: Object(r.jsxs)(t.n, {
                className: 'mb-4',
                children: [
                  Object(r.jsxs)(t.r, {
                    children: [
                      Object(r.jsx)('strong', { children: 'React Form Control' }),
                      ' ',
                      Object(r.jsx)('small', { children: 'Disabled' }),
                    ],
                  }),
                  Object(r.jsxs)(t.o, {
                    children: [
                      Object(r.jsxs)('p', {
                        className: 'text-medium-emphasis small',
                        children: [
                          'Add the ',
                          Object(r.jsx)('code', { children: 'disabled' }),
                          ' boolean attribute on an input to give it a grayed out appearance and remove pointer events.',
                        ],
                      }),
                      Object(r.jsxs)(c.f, {
                        href: 'forms/form-control#disabled',
                        children: [
                          Object(r.jsx)(t.N, {
                            type: 'text',
                            placeholder: 'Disabled input',
                            'aria-label': 'Disabled input example',
                            disabled: !0,
                          }),
                          Object(r.jsx)('br', {}),
                          Object(r.jsx)(t.N, {
                            type: 'text',
                            placeholder: 'Disabled readonly input',
                            'aria-label': 'Disabled input example',
                            disabled: !0,
                            readOnly: !0,
                          }),
                          Object(r.jsx)('br', {}),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            Object(r.jsx)(t.A, {
              xs: 12,
              children: Object(r.jsxs)(t.n, {
                className: 'mb-4',
                children: [
                  Object(r.jsxs)(t.r, {
                    children: [
                      Object(r.jsx)('strong', { children: 'React Form Control' }),
                      ' ',
                      Object(r.jsx)('small', { children: 'Readonly' }),
                    ],
                  }),
                  Object(r.jsxs)(t.o, {
                    children: [
                      Object(r.jsxs)('p', {
                        className: 'text-medium-emphasis small',
                        children: [
                          'Add the ',
                          Object(r.jsx)('code', { children: 'readOnly' }),
                          " boolean attribute on an input to prevent modification of the input's value. Read-only inputs appear lighter (just like disabled inputs), but retain the standard cursor.",
                        ],
                      }),
                      Object(r.jsx)(c.f, {
                        href: 'forms/form-control#readonly',
                        children: Object(r.jsx)(t.N, {
                          type: 'text',
                          placeholder: 'Readonly input here...',
                          'aria-label': 'readonly input example',
                          readOnly: !0,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            Object(r.jsx)(t.A, {
              xs: 12,
              children: Object(r.jsxs)(t.n, {
                className: 'mb-4',
                children: [
                  Object(r.jsxs)(t.r, {
                    children: [
                      Object(r.jsx)('strong', { children: 'React Form Control' }),
                      ' ',
                      Object(r.jsx)('small', { children: 'Readonly plain text' }),
                    ],
                  }),
                  Object(r.jsxs)(t.o, {
                    children: [
                      Object(r.jsxs)('p', {
                        className: 'text-medium-emphasis small',
                        children: [
                          'If you want to have ',
                          Object(r.jsx)('code', { children: '<input readonly>' }),
                          ' elements in your form styled as plain text, use the ',
                          Object(r.jsx)('code', { children: 'plainText' }),
                          ' boolean property to remove the default form field styling and preserve the correct margin and padding.',
                        ],
                      }),
                      Object(r.jsxs)(c.f, {
                        href: 'components/accordion',
                        children: [
                          Object(r.jsxs)(t.rb, {
                            className: 'mb-3',
                            children: [
                              Object(r.jsx)(t.O, {
                                htmlFor: 'staticEmail',
                                className: 'col-sm-2 col-form-label',
                                children: 'Email',
                              }),
                              Object(r.jsx)('div', {
                                className: 'col-sm-10',
                                children: Object(r.jsx)(t.N, {
                                  type: 'text',
                                  id: 'staticEmail',
                                  defaultValue: 'email@example.com',
                                  readOnly: !0,
                                  plainText: !0,
                                }),
                              }),
                            ],
                          }),
                          Object(r.jsxs)(t.rb, {
                            className: 'mb-3',
                            children: [
                              Object(r.jsx)(t.O, {
                                htmlFor: 'inputPassword',
                                className: 'col-sm-2 col-form-label',
                                children: 'Password',
                              }),
                              Object(r.jsx)('div', {
                                className: 'col-sm-10',
                                children: Object(r.jsx)(t.N, {
                                  type: 'password',
                                  id: 'inputPassword',
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      Object(r.jsx)(c.f, {
                        href: 'components/accordion',
                        children: Object(r.jsxs)(t.J, {
                          className: 'row g-3',
                          children: [
                            Object(r.jsxs)('div', {
                              className: 'col-auto',
                              children: [
                                Object(r.jsx)(t.O, {
                                  htmlFor: 'staticEmail2',
                                  className: 'visually-hidden',
                                  children: 'Email',
                                }),
                                Object(r.jsx)(t.N, {
                                  type: 'text',
                                  id: 'staticEmail2',
                                  defaultValue: 'email@example.com',
                                  readOnly: !0,
                                  plainText: !0,
                                }),
                              ],
                            }),
                            Object(r.jsxs)('div', {
                              className: 'col-auto',
                              children: [
                                Object(r.jsx)(t.O, {
                                  htmlFor: 'inputPassword2',
                                  className: 'visually-hidden',
                                  children: 'Password',
                                }),
                                Object(r.jsx)(t.N, {
                                  type: 'password',
                                  id: 'inputPassword2',
                                  placeholder: 'Password',
                                }),
                              ],
                            }),
                            Object(r.jsx)('div', {
                              className: 'col-auto',
                              children: Object(r.jsx)(t.j, {
                                type: 'submit',
                                className: 'mb-3',
                                children: 'Confirm identity',
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            Object(r.jsx)(t.A, {
              xs: 12,
              children: Object(r.jsxs)(t.n, {
                className: 'mb-4',
                children: [
                  Object(r.jsxs)(t.r, {
                    children: [
                      Object(r.jsx)('strong', { children: 'React Form Control' }),
                      ' ',
                      Object(r.jsx)('small', { children: 'File input' }),
                    ],
                  }),
                  Object(r.jsx)(t.o, {
                    children: Object(r.jsxs)(c.f, {
                      href: 'forms/form-control#file-input',
                      children: [
                        Object(r.jsxs)('div', {
                          className: 'mb-3',
                          children: [
                            Object(r.jsx)(t.O, {
                              htmlFor: 'formFile',
                              children: 'Default file input example',
                            }),
                            Object(r.jsx)(t.N, { type: 'file', id: 'formFile' }),
                          ],
                        }),
                        Object(r.jsxs)('div', {
                          className: 'mb-3',
                          children: [
                            Object(r.jsx)(t.O, {
                              htmlFor: 'formFileMultiple',
                              children: 'Multiple files input example',
                            }),
                            Object(r.jsx)(t.N, {
                              type: 'file',
                              id: 'formFileMultiple',
                              multiple: !0,
                            }),
                          ],
                        }),
                        Object(r.jsxs)('div', {
                          className: 'mb-3',
                          children: [
                            Object(r.jsx)(t.O, {
                              htmlFor: 'formFileDisabled',
                              children: 'Disabled file input example',
                            }),
                            Object(r.jsx)(t.N, {
                              type: 'file',
                              id: 'formFileDisabled',
                              disabled: !0,
                            }),
                          ],
                        }),
                        Object(r.jsxs)('div', {
                          className: 'mb-3',
                          children: [
                            Object(r.jsx)(t.O, {
                              htmlFor: 'formFileSm',
                              children: 'Small file input example',
                            }),
                            Object(r.jsx)(t.N, { type: 'file', size: 'sm', id: 'formFileSm' }),
                          ],
                        }),
                        Object(r.jsxs)('div', {
                          children: [
                            Object(r.jsx)(t.O, {
                              htmlFor: 'formFileLg',
                              children: 'Large file input example',
                            }),
                            Object(r.jsx)(t.N, { type: 'file', size: 'lg', id: 'formFileLg' }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
            Object(r.jsx)(t.A, {
              xs: 12,
              children: Object(r.jsxs)(t.n, {
                className: 'mb-4',
                children: [
                  Object(r.jsxs)(t.r, {
                    children: [
                      Object(r.jsx)('strong', { children: 'React Form Control' }),
                      ' ',
                      Object(r.jsx)('small', { children: 'Color' }),
                    ],
                  }),
                  Object(r.jsx)(t.o, {
                    children: Object(r.jsxs)(c.f, {
                      href: 'forms/form-control#color',
                      children: [
                        Object(r.jsx)(t.O, {
                          htmlFor: 'exampleColorInput',
                          children: 'Color picker',
                        }),
                        Object(r.jsx)(t.N, {
                          type: 'color',
                          id: 'exampleColorInput',
                          defaultValue: '#563d7c',
                          title: 'Choose your color',
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          ],
        })
    },
  },
])
//# sourceMappingURL=40.c35c7cbe.chunk.js.map
