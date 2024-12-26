import { FlatCompat } from '@eslint/eslintrc'
import perfectionist from 'eslint-plugin-perfectionist'

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
})

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript', 'prettier'],
  }),
  // https://perfectionist.dev/
  {
    plugins: {
      perfectionist,
    },
    settings: {
      perfectionist: {
        type: 'natural',
        // partitionByComment: true,
        // partitionByNewLine: true,
      },
    },
    rules: {
      'perfectionist/sort-exports': 'error',
      'perfectionist/sort-imports': 'error',
      'perfectionist/sort-named-exports': 'error',
      'perfectionist/sort-named-imports': 'error',
      'perfectionist/sort-jsx-props': [
        'error',
        {
          // https://codeguide.co/#attribute-order
          groups: [
            'top',
            'class',
            'data',
            'unique',
            'a11y',
            'unknown',
            'multiline',
            'shorthand',
            'callback',
          ],
          customGroups: {
            top: ['^class$', '^id$', '^name$'],
            class: ['^className$'],
            data: ['^data-.+'],
            unique: ['^src$', '^for$', '^type$', '^href$', '^value$', '^key$'],
            a11y: ['^title$', '^alt$', '^role$', '^aria-.+'],
            callback: '^on.+',
          },
        },
      ],
    },
  },
]

export default eslintConfig
