const chai = require("chai");
const expect = chai.expect;

const demo = require("./demo");

describe("demo", () => {
  context("addTwoSum", () => {
    it("should add two numbers", () => {
      expect(demo.addTwoSum(1, 2)).to.equal(3);
    });

    it("should add two numbers multiplications", () => {
      let mul = demo.addTwoMulti(3, 2);
      expect(mul).to.equal(6);
    });
  });

  context("single line tests", () => {
    it("should trie some other stuff", () => {
      expect({ name: "akshay" }).to.deep.equal({ name: "akshay" });
      expect({ name: "akshay" }).to.have.property("name").to.equal("akshay");
      expect(5 > 8).to.be.false;
      expect({}).to.be.a("object");
      expect("akshay").to.be.a("string");
      expect(true).to.be.a("boolean");
      expect("akshay").to.be.a("string").with.lengthOf(6);
      expect([1,2,3].length).to.equal(3);
      expect(null).to.be.null;
      expect(undefined).to.not.exist;
    });
  });
});
