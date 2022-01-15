const Algo = require("../algo");

describe("Algo", () => {
  describe("reverse", () => {
    it('should reverse a string', () => {
      const word = 'hello';
      const reversedWord = 'olleh';
      const algo = new Algo();
      const reverseTest = algo.reverse(word);
      expect(reverseTest).toEqual(reversedWord);
    });
  });

  describe("isPalindrome", () => {
    it('should return true given word/phrase that is a palindrome', () => {
      const word = 'racecar';
      const result = new Algo().isPalindrome(word);
      expect(result).toEqual(true);
    });
  });

  describe("isPalindrome", () => {
    it('should return false given word/phrase that is a palindrome', () => {
      const word = 'i am awesome';
      const result = new Algo().isPalindrome(word);
      expect(result).toEqual(false);
    });
  });

  describe("capitalize", () => {
    it('Every letter of sentence should be capitalized', () => {
      const word = 'i love ice cream cake';
      const capsWord = 'I Love Ice Cream Cake';
      const result = new Algo().capitalize(word);
      expect(result).toEqual(capsWord);
    });
  });
});
