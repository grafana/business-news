const grafanaConfig = require("@grafana/eslint-config/flat");

module.exports = [
  ...grafanaConfig,
  {
    rules: {
      "react/prop-types": "off",
    },
  },
  {
    files: ["**/*.test.tsx", "**/*.test.ts", "src/__testUtils__/**/*", "**/__mocks__/**/*"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
  {
    ignores: [
      "jest-setup.js",
      "jest.config.js",
      "webpack.config.ts",
      "coverage/",
      "dist/",
      "playwright-report/",
      "xml-server/",
      "playwright.config.ts",
      "test/",
      ".config/",
    ],
  },
];
