import { expect } from "chai";
import every from "../util_lib/src/every.js";

describe("every()", () => {
  it("returns true for an empty array", () => {
    expect(every([], Boolean)).to.be.true;
  });

  it("returns true when all elements satisfy the predicate", () => {
    expect(every([2, 4, 6], (n) => n % 2 === 0)).to.be.true;
  });

  it("returns false when at least one element does not satisfy the predicate", () => {
    expect(every([2, 3, 6], (n) => n % 2 === 0)).to.be.false;
  });

  it("works with a predicate that checks for truthy values", () => {
    expect(every([true, 1, "yes"], Boolean)).to.be.true;
  });

  it("returns false for an array with at least one falsy value", () => {
    expect(every([true, 0, "yes"], Boolean)).to.be.false;
  });

  it("handles arrays with mixed data types", () => {
    expect(every(["hello", 42, true], (val) => typeof val !== "undefined")).to.be.true;
  });

  it("stops iteration once a falsy value is found", () => {
    let iterations = 0;
    every([1, 2, 0, 4], (n) => {
      iterations++;
      return n !== 0;
    });
    expect(iterations).to.equal(3);
  });
});