/** @type {import('jest').Config} */
const config = {
  preset: "jest-expo",
  transformIgnorePatterns: [
    // Ignore the match targets from the transpile.
    // And because of the "?!" so the packages mentioned here are transpile targets.
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)",
  ],
};

module.exports = config;
