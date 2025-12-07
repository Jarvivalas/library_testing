import { expect } from "chai";
import toNumber from "../util_lib/src/toNumber.js";

describe("toNumber()", () => {
  it("returns the same number when given a number", () => {
    expect(toNumber(42)).to.equal(42);
    expect(toNumber(-3.14)).to.equal(-3.14);
  });

  it("converts a string representation of a number to a number", () => {
    expect(toNumber("42")).to.equal(42);
    expect(toNumber("-3.14")).to.equal(-3.14);
  });

  it("trims whitespace from strings before converting", () => {
    expect(toNumber("  42  ")).to.equal(42);
  });

  it("converts binary strings to numbers", () => {
    expect(toNumber("0b1010")).to.equal(10);
  });

  it("converts octal strings to numbers", () => {
    expect(toNumber("0o52")).to.equal(42);
  });

  it("returns NaN for invalid hexadecimal strings", () => {
    expect(toNumber("0xGHI")).to.be.NaN;
  });

  it("returns NaN for symbols", () => {
    expect(toNumber(Symbol("test"))).to.be.NaN;
  });

  it("handles objects with a valueOf method", () => {
    const obj = { valueOf: () => 42 };
    expect(toNumber(obj)).to.equal(42);
  });

  it("handles objects without a valueOf method", () => {
    const obj = { toString: () => "42" };
    expect(toNumber(obj)).to.equal(42);
  });

  it("returns NaN for objects that cannot be converted", () => {
    const obj = {};
    expect(toNumber(obj)).to.be.NaN;
  });

  it("returns NaN for undefined and null", () => {
    expect(toNumber(undefined)).to.be.NaN;
    expect(toNumber(null)).to.equal(0);
  });

  it("returns Infinity for Infinity", () => {
    expect(toNumber(Infinity)).to.equal(Infinity);
  });
});