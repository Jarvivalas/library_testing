import { expect } from "chai";
import reduce from "../util_lib/src/reduce.js";

describe("reduce()", () => {
  it("reduces an array to a single value using a sum function", () => {
    const array = [1, 2, 3, 4];
    const result = reduce(array, (sum, n) => sum + n, 0);
    expect(result).to.equal(10);
  });

  it("reduces an array without an initial accumulator", () => {
    const array = [1, 2, 3, 4];
    const result = reduce(array, (sum, n) => sum + n);
    expect(result).to.equal(10);
  });

  it("reduces an object to a grouped result", () => {
    const object = { a: 1, b: 2, c: 1 };
    const result = reduce(
      object,
      (acc, value, key) => {
        (acc[value] || (acc[value] = [])).push(key);
        return acc;
      },
      {}
    );
    expect(result).to.deep.equal({ 1: ["a", "c"], 2: ["b"] });
  });

  it("handles an empty array with an initial accumulator", () => {
    const array = [];
    const result = reduce(array, (sum, n) => sum + n, 0);
    expect(result).to.equal(0);
  });

  it("handles an empty array without an initial accumulator", () => {
    const array = [];
    const result = reduce(array, (sum, n) => sum + n);
    expect(result).to.be.undefined;
  });

  it("handles an empty object with an initial accumulator", () => {
    const object = {};
    const result = reduce(object, (acc, value) => acc + value, 0);
    expect(result).to.equal(0);
  });

  it("handles an empty object without an initial accumulator", () => {
    const object = {};
    const result = reduce(object, (acc, value) => acc + value);
    expect(result).to.be.undefined;
  });
});