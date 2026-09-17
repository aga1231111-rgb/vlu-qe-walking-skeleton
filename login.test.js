const login = require("./login");

describe("Login Function", () => {
    test("returns true when username and password are correct", () => {
        expect(login("admin", "123")).toBe(true);
    });

    test("returns false when password is incorrect", () => {
        expect(login("admin", "1234")).toBe(false);
    });

    test("returns false when username is incorrect", () => {
        expect(login("user", "123")).toBe(false);
    });
});
