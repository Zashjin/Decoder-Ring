// Write your tests here!
const { expect } = require("chai");
const {polybius} = require("../src/polybius");
describe("polybius", () =>{
    it(("Encode a single word"), ()=> {
        const input = "thinkful";
        const expected = "4432423352125413";
        const actual = polybius(input);
        expect(actual).to.equal(expected);
    });
    it(("Encode multiple words"), ()=> {
        const input = "Hello world";
        const expected = "3251131343 2543241341";
        const actual = polybius(input);
        expect(actual).to.equal(expected);
    });
    it(("Decode a single word"), ()=> {
        const input = "3251131343 2543241341";
        const expected = "hello world";
        const encode = false;
        const actual = polybius(input, encode);
        expect(actual).to.equal(expected);
    });
    it(("Decode using the (i/j)"), ()=> {
        const input = "4432423352125413";
        const encode = false;
        const expected = "th(i/j)nkful";
        const actual = polybius(input, encode);
        expect(actual).to.equal(expected);
    });
    it(("Return false if uneven"), ()=> {
        const input = "44324233521254134";
        const expected = false;
        const encode = false;
        const actual = polybius(input, encode);
        expect(actual).to.equal(expected);
    });
});