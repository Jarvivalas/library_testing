import { expect } from "chai";
import map from "../util_lib/src/map.js";

describe("map()", () => {
  it("applies a function to each element in an array", () => {
    const array = [1, 2, 3];
    const result = map(array, (n) => n * 2);
    expect(result).to.deep.equal([2, 4, 6]);
  });

  it("handles an empty array", () => {
    const array = [];
    const result = map(array, (n) => n * 2);
    expect(result).to.deep.equal([]);
  });

  it("passes the value, index, and array to the iteratee", () => {
    const array = [1, 2, 3];
    const indices = [];
    const arrays = [];
    map(array, (value, index, arr) => {
      indices.push(index);
      arrays.push(arr);
      return value;
    });
    expect(indices).to.deep.equal([0, 1, 2]);
    expect(arrays).to.deep.equal([array, array, array]);
  });

  it("handles arrays with mixed data types", () => {
    const array = [1, "two", true];
    const result = map(array, (val) => typeof val);
    expect(result).to.deep.equal(["number", "string", "boolean"]);
  });

  it("returns a new array and does not modify the original array", () => {
    const array = [1, 2, 3];
    const result = map(array, (n) => n * 2);
    expect(result).to.not.equal(array);
    expect(array).to.deep.equal([1, 2, 3]);
  });
});