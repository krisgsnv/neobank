module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
    "swiper/css": "swiper/swiper.min.css"
  },
  transform: {
    "^.+\\.(ts|tsx|js|mjs)$": "babel-jest",
    ".+\\.(css|scss|png|jpg|svg|ttf|woff|woff2|pdf)$": "jest-transform-stub"
  },
  transformIgnorePatterns: ["node_modules/(?!swiper|ttl-localstorage)/"],
  resetMocks: true
};
