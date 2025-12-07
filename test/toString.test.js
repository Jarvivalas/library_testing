import { expect } from "chai";
import toString from "../util_lib/src/toString.js";

describe("toString()", () => {
  it("returns an empty string for null and undefined", () => {
    expect(toString(null)).to.equal("");
    expect(toString(undefined)).to.equal(""); // bug
  });

  it("converts numbers to strings", () => {
    expect(toString(42)).to.equal("42");
    expect(toString(-3.14)).to.equal("-3.14");
  });

  it("preserves the sign of -0", () => {
    expect(toString(-0)).to.equal("-0");
  });

  it("converts arrays to strings", () => {
    expect(toString([1, 2, 3])).to.equal("1,2,3");
    expect(toString([null, undefined, 3])).to.equal(",,3");
  });

  it("converts symbols to their string representation", () => {
    expect(toString(Symbol("test"))).to.equal("Symbol(test)");
  });

  it("converts objects to strings using their default string representation", () => {
    const obj = { a: 1 };
    expect(toString(obj)).to.equal("[object Object]");
  });

  it("handles Infinity and NaN", () => {
    expect(toString(Infinity)).to.equal("Infinity");
    expect(toString(NaN)).to.equal("NaN");
  });

  it("returns the same string for string inputs", () => {
    expect(toString("hello")).to.equal("hello");
  });
});