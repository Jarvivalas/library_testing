import { expect } from "chai";
import clamp from "../util_lib/src/clamp.js";

describe("clamp()", () => {
  it("returns number if already in range", () => {
    expect(clamp(5, 1, 10)).to.equal(5);
  });

  it("clamps below lower bound", () => {
    expect(clamp(-3, 0, 5)).to.equal(0);
  });

  it("clamps above upper bound", () => {
    expect(clamp(20, 1, 10)).to.equal(10);
  });

  it("handles string inputs by coercion", () => {
    expect(clamp("15", "1", "10")).to.equal(10);
  });
});
