module.exports = {
  clearMocks: true,
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "^@common/(.*)$": "<rootDir>/src/common/$1",
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "^@utilities/(.*)$": "<rootDir>/src/utilities/$1",
  },
};
