module.exports = {
  root: true,
  env: {
    browser: true,
    amd: true, // protocolos internos
    node: true,
    es6: true, // para que esté activo
  },
  extends: [
    // "eslint:recommended",
    // "plugin:jsx-a11y/recommended",
    // "pluin:prettier/recommended",
    "next",
    "next/core-web-vitals",
  ],
  rules: {
    semi: ["error", "always"],
  },
};
