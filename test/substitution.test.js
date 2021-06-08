const { expect } = require("chai");
const {substitution} = require("../src/substitution");
describe(("substitution()"), () =>{
    it(("Encode a single word"), ()=> {
        const input = "thinkful";
        const alphabet = "xoyqmcgrukswaflnthdjpzibev";
        const expected = "jrufscpw";
        const actual = substitution(input, alphabet);
        expect(actual).to.equal(expected);
    });
    it(("Encode multiple words"), ()=> {
        const input = "You are an excellent spy";
        const alphabet = "xoyqmcgrukswaflnthdjpzibev";
        const expected = "elp xhm xf mbymwwmfj dne";
        const actual = substitution(input, alphabet);
        expect(actual).to.equal(expected);
    });
    it(("Decode a single word"), ()=> {
        const input = "jrufscpw";
        const alphabet = "xoyqmcgrukswaflnthdjpzibev";
        const expected = "thinkful";
        const encode = false;
        const actual = substitution(input, alphabet, encode);
        expect(actual).to.equal(expected);
    });
    it(("Encode w/ symbols"), ()=> {
        const input = "message";
        const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
        const expected = "y&ii$r&";
        const actual = substitution(input, alphabet);
        expect(actual).to.equal(expected);
    });
    it(("Return false if too short"), ()=> {
        const input = "thinkful";
        const alphabet = "short";
        const expected = false;
        const actual = substitution(input, alphabet);
        expect(actual).to.equal(expected);
    });
    it(("Return false if alphabet repeats"), ()=> {
        const input = "thinkful";
        const alphabet = "abcabcabcabcabcabcabcabcyz";
        const expected = false;
        const actual = substitution(input, alphabet);
        expect(actual).to.equal(expected);
    });
    it(("Return false if no alphabet"), ()=> {
        const input = "thinkful";
        const expected = false;
        const actual = substitution(input);
        expect(actual).to.equal(expected);
    });
});
