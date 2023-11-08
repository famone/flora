module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/typescript/recommended',
        'plugin:vue/vue3-recommended',
        'plugin:vue/vue3-strongly-recommended'
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'vue/multi-word-component-names': 'off',
        'vue/no-deprecated-router-link-tag-prop': 'off',
        "css.lint.unknownAtRules": "ignore",
        "scss.lint.unknownAtRules": "ignore"
    }
}
