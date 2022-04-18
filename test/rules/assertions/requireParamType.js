export default {
  invalid: [
    {
      code: `
          /**
           * @param foo
           */
          function quux (foo) {

          }
      `,
      errors: [
        {
          column: 1,
          line: 3,
          message: 'Missing JSDoc @param "foo" type.',
        },
      ],
    },
    {
      code: `
      /**
       * @param {a xxx
       */
      function quux () {
      }
      `,
      errors: [
        {
          column: 1,
          line: 3,
          message: 'Missing JSDoc @param "" type.',
        },
      ],
    },
    {
      code: `
          /**
           * @param foo
           */
          function quux (foo) {

          }
      `,
      errors: [
        {
          column: 1,
          line: 3,
          message: 'Missing JSDoc @param "foo" type.',
        },
      ],
      options: [
        {
          contexts: [
            'any',
          ],
        },
      ],
    },
    {
      code: `
          /**
           * @function
           * @param foo
           */
      `,
      errors: [
        {
          column: 1,
          line: 4,
          message: 'Missing JSDoc @param "foo" type.',
        },
      ],
      options: [
        {
          contexts: [
            'any',
          ],
        },
      ],
    },
    {
      code: `
          /**
           * @callback
           * @param foo
           */
      `,
      errors: [
        {
          column: 1,
          line: 4,
          message: 'Missing JSDoc @param "foo" type.',
        },
      ],
      options: [
        {
          contexts: [
            'any',
          ],
        },
      ],
    },
    {
      code: `
          /**
           * @arg foo
           */
          function quux (foo) {

          }
      `,
      errors: [
        {
          column: 1,
          line: 3,
          message: 'Missing JSDoc @arg "foo" type.',
        },
      ],
      settings: {
        jsdoc: {
          tagNamePreference: {
            param: 'arg',
          },
        },
      },
    },
    {
      code: `
          /**
           * @param foo
           */
          function quux (foo) {

          }
      `,
      errors: [
        {
          column: 1,
          line: 3,
          message: 'Unexpected tag `@param`',
        },
      ],
      settings: {
        jsdoc: {
          tagNamePreference: {
            param: false,
          },
        },
      },
    },
  ],
  valid: [
    {
      code: `
          /**
           *
           */
          function quux (foo) {

          }
      `,
    },
    {
      code: `
          /**
           * @param {number} foo
           */
          function quux (foo) {

          }
      `,
    },
    {
      code: `
          /**
           * @param {number} foo
           */
          function quux (foo) {

          }
      `,
      options: [
        {
          contexts: [
            'any',
          ],
        },
      ],
    },
    {
      code: `
          /**
           * @function
           * @param foo
           */
      `,
    },
    {
      code: `
          /**
           * @callback
           * @param foo
           */
      `,
    },
  ],
};
