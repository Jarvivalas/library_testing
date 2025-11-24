import { expect } from "chai";
import add from "../util_lib/src/add.js";

describe("add()", () => {
  it("adds two positive numbers", () => {
    expect(add(2, 3)).to.equal(5);
  });
});
