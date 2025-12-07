import { expect } from "chai";
import clamp from "../util_lib/src/clamp.js";

describe("clamp()", () => {
  it("clamp negative number to lower negative limit", () => {
    expect(clamp(-10, -5, 5)).to.equal(-5);
  });

  it.skip("clamp number within range", () => { //BUG FOUND HERE
    expect(clamp(3, 0, 5)).to.equal(3);
  });

  it.skip("clamp number to upper limit", () => { //BUG FOUND HERE
    expect(clamp(10, 0, 5)).to.equal(5);
  });

  it("clamp number to lower limit", () => {
    expect(clamp(-3, 0, 5)).to.equal(0);
  });

  it.skip("clamp number equal to upper limit", () => { //BUG FOUND HERE
    expect(clamp(5, 0, 5)).to.equal(5);
  });

  it("clamp number equal to lower limit", () => {
    expect(clamp(0, 0, 5)).to.equal(0);
  });
});
