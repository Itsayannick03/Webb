import '@testing-library/jest-dom';

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/app/setupTests.ts'],
};
