import { longestSubstringWithoutRepeatingCharacters } from "./longest-substring-without-repeating-characters";

test("longest-substring-without-repeating-characters", () => {
  expect(longestSubstringWithoutRepeatingCharacters("abcabcbb")).toBe(3);
  expect(longestSubstringWithoutRepeatingCharacters("bbbbb")).toBe(1);
  expect(longestSubstringWithoutRepeatingCharacters("acbbbbb")).toBe(3);
  expect(longestSubstringWithoutRepeatingCharacters("pwwkew")).toBe(3);
  expect(longestSubstringWithoutRepeatingCharacters("")).toBe(0);
});
