import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import { defineConfig } from 'eslint/config';

import baseConfig from './base.js';

export default defineConfig(
    baseConfig,

    react.configs.flat.recommended!,
    react.configs.flat['jsx-runtime']!,
    reactHooks.configs.flat.recommended,
);
