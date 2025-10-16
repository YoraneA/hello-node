import { defineConfig } from "eslint/config";
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';


export default defineConfig([
    {
        files: ['**/*.ts'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
        },
        plugins: {
            '@typescript-eslint': tsPlugin,
            'prettier': prettierPlugin,
        },
        rules: {
            'prettier/prettier': 'error',
            '@typescript-eslint/no-unused-vars': 'warn',
        }
    }
])

// export default defineConfig([
//     {
//         parser: '@typescript-eslint/parser',
//         extends: [
//             'eslint:recommended',
//             'plugin:@typescript-eslint/recommended',
//             'prettier',
//         ],
//         plugins: [
//             '@typescript-eslint',
//             'prettier',
//         ],
//         rules: {
//             'prettier/prettier': 'error',
//             '@typescript-eslint/no-unused-vars': 'warn',
//         }
//     }
// ]);