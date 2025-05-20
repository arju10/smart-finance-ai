import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals'),

  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    // plugins: {
    //   prettier: require('eslint-plugin-prettier'),
    // },
    rules: {
      // 'prettier/prettier': 'error',
      '@typescript-eslint/no-unused-vars': 'off', // disable TS unused vars rule
      'no-unused-vars': ['warn'], // unused variables warning
      'no-undef': 'error', // error on usage of undefined vars (missing imports)
      'react/react-in-jsx-scope': 'off', // React import not required with React 17+ JSX transform
      'import/no-unresolved': 'error', // error if import target cannot be resolved
      'import/no-duplicates': 'error', // error for duplicate imports
      '@typescript-eslint/no-unused-vars': ['warn'],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];

export default eslintConfig;
