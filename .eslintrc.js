module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:tailwindcss/recommended", "prettier"],
  plugins: ["prettier","html", "tailwindcss"],
  parserOptions: {
    ecmaVersion: "latest",
    "sourceType": "module"
  },
  "settings": {
        "html/xml-extensions": [".html"],  // consider .html files as XML
    },
  rules: {},
};
