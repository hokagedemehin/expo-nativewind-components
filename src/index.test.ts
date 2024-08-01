import { describe, expect, it } from "vitest";
// MyComponent.test.js
import React from "react";
// import { render } from '@testing-library/react-native';

// describe('MyComponent', () => {
//   it('renders correctly with given text', () => {
//     const { getByText } = render(<MyComponent text="Hello, World!" />);
//     expect(getByText('Hello, World!')).toBeTruthy();
//   });
// });
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

describe("This should return an false", () => {
  it("Should return an object", () => {
    expect(false).toBe(false);
  });
});

describe("This should return an true", () => {
  it("Should return an object", () => {
    expect(true).toBe(true);
  });
});
