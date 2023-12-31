module.exports = {
  collectCoverageFrom: ['<rootDir>/src/**/*.js', '!<rootDir>/src/**/*.stories.js'],
  moduleDirectories: ['node_modules', 'test'],
  reporters: ['jest-standard-reporter'],
  setupFilesAfterEnv: ['./test/jest.setup.js'],
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/src/**/*.spec.js'],
}
