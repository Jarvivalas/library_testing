import { expect } from "chai";
import get from "../util_lib/src/get.js";

describe("get()", () => {
  it("retrieves a value at a given path in an object", () => {
    const object = { a: [{ b: { c: 3 } }] };
    expect(get(object, "a[0].b.c")).to.equal(3);
  });

  it("retrieves a value using an array path", () => {
    const object = { a: [{ b: { c: 3 } }] };
    expect(get(object, ["a", "0", "b", "c"])).to.equal(3);
  });

  it("returns the default value if the resolved value is undefined", () => {
    const object = { a: [{ b: { c: 3 } }] };
    expect(get(object, "a.b.c", "default")).to.equal("default");
  });

  it("returns undefined if the path does not exist and no default value is provided", () => {
    const object = { a: [{ b: { c: 3 } }] };
    expect(get(object, "a.b.c")).to.be.undefined;
  });

  it("handles null or undefined objects gracefully", () => {
    expect(get(null, "a.b.c", "default")).to.equal("default");
    expect(get(undefined, "a.b.c", "default")).to.equal("default");
  });

  it("handles non-string and non-array paths gracefully", () => {
    const object = { a: { b: 2 } };
    expect(get(object, 123, "default")).to.equal("default");
  });
});