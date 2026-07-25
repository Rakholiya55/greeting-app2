const { greet } = require("./app");

test("greets a given name", () => {
  expect(greet("World")).toBe("Hello, World!");
});

test("throws an error if name is empty", () => {
  expect(() => greet("")).toThrow("name cannot be empty");
});
