// Your tests here
import { pointsForWord } from "../utils";

describe("pointsForWord", () => {
  it("calculates the total points for a word (1 point per vowel, 2 per consonant)", () => {
    const word = "test";

    const points = pointsForWord(word);

    expect(points).toBe(7);
  });

  it("handles uppercase and lowercase input", () => {
    const word = "tEsT";

    const points = pointsForWord(word);

    expect(points).toBe(7);
  });

  it("handles an empty string", () => {
    const word = "";

    const points = pointsForWord(word);

    expect(points).toBe(0);
  });

  it("calculates points for words with only vowels", () => {
    const word = "aeiou";

    const points = pointsForWord(word);

    expect(points).toBe(5);
  });

  it("calculates points for words with only consonants", () => {
    const word = "bcdfg";

    const points = pointsForWord(word);

    expect(points).toBe(10);
  });
});
