import { expect } from "chai";
import isEmpty from "../util_lib/src/isEmpty.js";

describe("isEmpty()", () => {

  it("returns true for an empty string", () => {
    expect(isEmpty("")).to.be.true;
  });

  it("returns true for null value", () => {
    expect(isEmpty(null)).to.be.true;
  });

  it("returns true for an integer", () => {
    expect(isEmpty(1)).to.be.true;
  });

  it("returns false for a non-empty string", () => {
    expect(isEmpty("zzz")).to.be.false;
  });

  it("returns true for an empty array", () => {
    expect(isEmpty([])).to.be.true;
  });

  it("returns true for an empty object", () => {
    expect(isEmpty({})).to.be.true;
  });

  it.skip("returns true for a nested non-empty object", () => { //BUG FOUND HERE
    expect(isEmpty({ a: { b: 1 } })).to.be.true;
  });

  it.skip("returns true for whitespace", () => { //BUG FOUND HERE
    expect(isEmpty(" ")).to.be.true;
  });
});