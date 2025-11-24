import { expect } from "chai";
import add from "../util_lib/src/add.js";

describe("add()", () => {
  it("adds two positive numbers", () => {
    expect(add(2, 3)).to.equal(5);
  });

  it("adds negative numbers", () => {
    expect(add(-5, -2)).to.equal(-7);
  });

  it("returns 0 if inputs are undefined", () => {
    expect(add(undefined, undefined)).to.equal(0);
  });

  it("coerces strings to numbers", () => {
    expect(add("4", "6")).to.equal(10);
  });
});
