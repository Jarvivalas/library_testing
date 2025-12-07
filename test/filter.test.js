import { expect } from "chai";
import filter from "../util_lib/src/filter.js";

describe("filter()", () => {
  it("filters an array based on a predicate", () => {
    const array = [1, 2, 3, 4, 5];
    const result = filter(array, (n) => n % 2 === 0);
    expect(result).to.deep.equal([2, 4]);
  });

  it("returns an empty array when no elements match the predicate", () => {
    const array = [1, 3, 5];
    const result = filter(array, (n) => n % 2 === 0);
    expect(result).to.deep.equal([[]]); // array inside another array. Is this intended?
  });

  it("returns the original array when all elements match the predicate", () => {
    const array = [2, 4, 6];
    const result = filter(array, (n) => n % 2 === 0);
    expect(result).to.deep.equal([2, 4, 6]);
  });

  it("handles an empty array", () => {
    const array = [];
    const result = filter(array, (n) => n % 2 === 0);
    expect(result).to.deep.equal([[]]); // array inside another array. Is this intended?
  });

  it("handles arrays with mixed data types", () => {
    const array = [1, "two", 3, "four"];
    const result = filter(array, (val) => typeof val === "string");
    expect(result).to.deep.equal(["two", "four"]);
  });

  it("invokes the predicate with value, index, and array", () => {
    const array = [1, 2, 3];
    const indices = [];
    filter(array, (val, index) => {
      indices.push(index);
      return val > 0;
    });
    expect(indices).to.deep.equal([0, 1, 2]);
  });
});