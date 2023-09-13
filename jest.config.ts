module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1"
  },
  transform: {
    "^.+\\.js$": "babel-jest",
    ".+\\.(css|scss|png|jpg|svg|ttf|woff|woff2)$":
      "jest-transform-stub"
  }
};
