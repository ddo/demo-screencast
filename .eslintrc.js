module.exports = {
    env: {
        es6: true,
        browser: true,
        node: true,
    },
    extends: ['eslint:recommended'],
    plugins: ['svelte3'],
    globals: {
        chrome: 'readonly',
        browser: 'readonly',
    },
    overrides: [
        {
            files: ['**/*.svelte'],
            processor: 'svelte3/svelte3',
        },
    ],
    parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module',
    },
    rules: {
        'no-console': 0,
    },
}
