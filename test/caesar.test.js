const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar", () => {
    it("letters shift right", () => {
        const actual = caesar("thinkful", 3);
        const expected = "wklqnixo";
        expect(actual).to.equal(expected);
    });

    it("letters shift left", () => {
        const actual = caesar("thinkful", -3);
        const expected = "qefkhcri";
        expect(actual).to.equal(expected);
    });

    it("should maintain spaces", () => {
        const actual = caesar("This is a secret message!", 8);
        const expected = "bpqa qa i amkzmb umaaiom!";
        expect(actual).to.eql(expected);
    });

    it("should decode if 'false'", () => {
        const actual = caesar("wklqnixo", 3, false);
        const expected = "thinkful";
        expect(actual).to.equal(expected);
    });

    it("should return 'false' if 0", () => {
        const actual = caesar("thinkful");
        const expected = false;
        expect(actual).to.equal(expected);
    });

    it("should return 'false' if greater than 25", () => {
        const actual = caesar("thinkful", 99);
        const expected = false;
        expect(actual).to.equal(expected);
    });

    it("should return 'false' if less than -25", () => {
        const actual = caesar("thinkful", -26);
        const expected = false;
        expect(actual).to.equal(expected);
    });

    it("should wrap around to the front of the alphabet, if shifted so that it goes 'off' the alphabet and should ignore capital letters", () => {
        const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
        const expected = "this is a secret message!";
        expect(actual).to.eql(expected);
    });
})
