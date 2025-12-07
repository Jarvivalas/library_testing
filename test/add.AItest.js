import { expect } from "chai";
import add from "../util_lib/src/add.js";

describe("add() - AI generated test cases", () => {
  it("adds two large numbers", () => {
    expect(add(1000000, 2000000)).to.equal(3000000);
  });

  it("adds a positive number and a floating-point number", () => {
    expect(add(5, 2.5)).to.equal(7.5);
  });

  it("adds two floating-point numbers", () => {
    expect(add(0.1, 0.2)).to.be.closeTo(0.3, 0.0001);
  });

  it("adds a negative floating-point number and a positive integer", () => {
    expect(add(-2.5, 5)).to.equal(2.5);
  });

  it("adds a very small number to a very large number", () => {
    expect(add(1e-10, 1e10)).to.equal(1e10 + 1e-10);
  });

  it("adds a number and null", () => {
    expect(add(5, null)).to.equal(5);
  });

  it("adds Infinity and a finite number", () => {
    expect(add(Infinity, 1)).to.equal(Infinity);
  });
});

