module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb-typescript",
    "prettier"
  ],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    },
    project: ["./tsconfig.json"]
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "react/jsx-filename-extension": "off",
    "no-use-before-define": [
      "error",
      { functions: false, classes: true, variables: true }
    ],
    "@typescript-eslint/explicit-function-return-type": "off",
    "func-names": "off",
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
    "@typescript-eslint/no-empty-interface": "off"
  },
  plugins: ["@typescript-eslint"]
};
