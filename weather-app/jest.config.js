/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: './tsconfig.jest.json' }],
  },
  setupFiles: ["<rootDir>/.jest/testWeatherData.ts"],
  setupFilesAfterEnv: ['./src/jest.setup.ts'],
  moduleNameMapper:{
    "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
    "\\.(gif|ttf|eot|svg|tsx)$": "<rootDir>/__mocks__/fileMock.js",
  }
};