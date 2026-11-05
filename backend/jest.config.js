import { createDefaultEsmPreset } from "ts-jest";

const presetConfig = createDefaultEsmPreset({
  tsconfig: "<rootDir>/tsconfig.test.json"
});

export default {
  ...presetConfig,

  testEnvironment: "node",

  roots: ["<rootDir>/src"],

  testMatch: [
    "**/__tests__/**/*.test.ts",
    "**/*.test.ts"
  ],

  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1"
  },

  clearMocks: true,
  restoreMocks: true,

  collectCoverageFrom: [
    "src/**/*.ts",
    "!src/**/*.test.ts",
    "!src/server.ts"
  ],

  coverageDirectory: "coverage"
};