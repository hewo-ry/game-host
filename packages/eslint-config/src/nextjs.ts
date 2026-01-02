import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import reactRefresh from 'eslint-plugin-react-refresh';
import { globalIgnores } from 'eslint/config';
import { defineConfig } from 'eslint/config';

import react from './react.js';

export default defineConfig(
    react,

    nextVitals,
    nextTs,

    globalIgnores([
        // Default ignores of eslint-config-next:
        '.next/**',
        'out/**',
        'build/**',
        'next-env.d.ts',
    ]),

    reactRefresh.configs.next,
);
