import { expect } from "chai";
import isEmpty from "../util_lib/src/isEmpty.js";

describe("isEmpty() - AI generated test cases", () => {
  it("returns true for a function", () => {
    expect(isEmpty(function () {})).to.be.true;
  });

  it("returns true for a symbol", () => {
    expect(isEmpty(Symbol("test"))).to.be.true;
  });

  it("returns true for a date object", () => {
    expect(isEmpty(new Date())).to.be.true;
  });

  it("returns false for a non-empty Map", () => {
    const map = new Map();
    map.set("key", "value");
    expect(isEmpty(map)).to.be.false;
  });

  it("returns false for a non-empty Set", () => {
    const set = new Set();
    set.add(1);
    expect(isEmpty(set)).to.be.false;
  });

  it("returns true for an empty WeakMap", () => {
    const weakMap = new WeakMap();
    expect(isEmpty(weakMap)).to.be.true;
  });

  it("returns true for an empty WeakSet", () => {
    const weakSet = new WeakSet();
    expect(isEmpty(weakSet)).to.be.true;
  });

  it("returns true for a generator function", () => {
    function* generator() {}
    expect(isEmpty(generator())).to.be.true;
  });

  it("returns true for an empty class instance", () => {
    class MyClass {}
    expect(isEmpty(new MyClass())).to.be.true;
  });
});