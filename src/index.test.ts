import { describe, expect, it } from "vitest";

describe("This should return two strings", () => {
  it("Should return 'Test' and 'Passed'", () => {
    expect("Test").toBe("Test");
    expect("Passed").toBe("Passed");
  });
});
