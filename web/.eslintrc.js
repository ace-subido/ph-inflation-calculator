module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true
  },
  plugins: ["react"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    indent: [
      "error",
      2
    ],
    "no-console": "off",
    "no-debugger": "off",
    "linebreak-style": ["error", "unix"],
    quotes: ["warn", "double"],
  }
};
