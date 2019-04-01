module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  extends: ["standard", "plugin:react/recommended"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ["react"],
  rules: {
    'space-before-function-paren': ["error", "never"],
  },
  "settings": {
    "react": {
      "version": "detect",
    }
  },
}
