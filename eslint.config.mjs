import eslintPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import importPlugin from 'eslint-plugin-import'
import prettierPlugin from 'eslint-plugin-prettier'
import jsLint from '@eslint/js'
import tsLint from 'typescript-eslint'
import reactPlugin from 'eslint-plugin-react'
import reactRefreshPlugin from 'eslint-plugin-react-refresh'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import globals from 'globals'

export default [
  jsLint.configs.recommended,
  ...tsLint.configs.recommended,
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      'tailwind.config.ts'
    ],
    files: ['**/*.ts', '**/*.tsx'],
    linterOptions: {
      noInlineConfig: true,
      reportUnusedDisableDirectives: 'warn'
    },
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.app.json'
        }
      }
    },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node
      },
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        // eslint-disable-next-line no-undef
        tsconfigRootDir: process.cwd()
      }
    },
    plugins: {
      '@typescript-eslint': eslintPlugin,
      import: importPlugin,
      prettier: prettierPlugin,
      react: reactPlugin,
      'react-refresh': reactRefreshPlugin,
      'react-hooks': reactHooksPlugin
    },
    rules: {
      // React
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/prop-types': 0,
      'react/display-name': 0,
      // MUI
      'no-restricted-imports': [
        'error',
        {
          'patterns': ['@mui/*/*/*']
        }
      ],
      // Common
      'prettier/prettier': 'error',
      'import/no-unresolved': 'error',
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal'],
          alphabetize: { order: 'asc', caseInsensitive: true }
        }
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' }
      ],
      // '@typescript-eslint/explicit-function-return-type': 'warn',
      '@typescript-eslint/no-explicit-any': 'error',
      'no-console': 1,
      'no-lonely-if': 1,
      'no-unused-vars': 1,
      'no-trailing-spaces': 1,
      'no-multi-spaces': 1,
      'no-multiple-empty-lines': 1,
      'space-before-blocks': ['error', 'always'],
      'object-curly-spacing': [1, 'always'],
      'array-bracket-spacing': 1,
      'linebreak-style': 0,
      'no-unexpected-multiline': 'warn',
      'keyword-spacing': 1,
      'comma-spacing': 1,
      'arrow-spacing': 1,
      'eol-last': ['warn', 'always'],
      'no-extra-boolean-cast': 0
    }
  }
]