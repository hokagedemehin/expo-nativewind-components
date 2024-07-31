import { describe, expect, it } from "vitest";

describe("This should return two strings", () => {
  it("Should return 'Test' and 'Passed'", () => {
    expect("Test").toBe("Test");
    expect("Passed").toBe("Passed");
  });
});

describe("This should return a number", () => {
  it("Should return 1", () => {
    expect(1).toBe(1);
  });
});

describe("This should return an object", () => {
  it("Should return an object", () => {
    expect({}).toBe({});
  });
});
