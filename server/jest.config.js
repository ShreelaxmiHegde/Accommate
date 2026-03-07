// automatically run DB setup before tests
module.exports = {
    testEnvironment: "node",
    setupFilesAfterEnv: ["<rootDir>/tests/testdbSetup.js"]
}