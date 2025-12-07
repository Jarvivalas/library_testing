import { expect } from "chai";
import add from "../util_lib/src/add.js";

// don't use ai here
describe("add()", () => {
  it("handles zero and positive addition", () => {
    expect(add(0, 1)).to.equal(1);
    expect(add(1, 0)).to.equal(1);
  });

  it("handles NaN and undefined inputs", () => {
    expect(add(NaN, NaN)).to.be.NaN;
    expect(add(NaN, 1)).to.be.NaN;
    expect(add(-1, NaN)).to.be.NaN;
  });

  it("handles negative addition", () => {
    expect(add(-1, 1)).to.equal(0);
    expect(add(-4, -6)).to.equal(-10);
  });
});
