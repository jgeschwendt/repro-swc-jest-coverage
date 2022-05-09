const USE_BABEL = Boolean(process.env.USE_BABEL);

module.exports = {
  collectCoverageFrom: ["src/**/*.ts", "!src/**/*.test.ts"],
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
