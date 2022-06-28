const USE_BABEL = Boolean(process.env.USE_BABEL);

/** @type {import('jest').Config} */
module.exports = {
  collectCoverageFrom: ["src/**/*.ts", "!src/**/*.test.ts"],
  coverageProvider: USE_BABEL ? 'babel' : 'v8',
  coverageThreshold: {
    "src/**/*.ts": {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  ...(!USE_BABEL && {
    transform: {
      "^.+\\.(t|j)sx?$": [
        "@swc/jest",
        {
          jsc: { parser: { syntax: "typescript" } },
        },
      ],
    },
  }),
};
