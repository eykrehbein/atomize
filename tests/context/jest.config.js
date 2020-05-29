module.exports = {
    roots: ["<rootDir>/tests"],
    testMatch: ["**/*.+(ts|tsx|js)"],
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
    },
    setupFilesAfterEnv: ["./jest.setup.ts"],
};
