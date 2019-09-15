module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    'max-len': ['error', 120],
    'arrow-parens': ['error', 'as-needed'],
    'func-names': ['error', 'as-needed'],
    import/extensions': [
    'error',
    'always',
    {
    js: 'never',
    },
    ],
    'no-param-reassign': ['error', { props: false }],
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
