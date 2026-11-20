function characterCounts(text) {
  const counts = new Map();
  for (const character of text) counts.set(character, (counts.get(character) ?? 0) + 1);
  return counts;
}

function isPalindrome(text) {
  const characters = Array.from(text.toLowerCase()).filter(ch => /[\p{L}\p{N}]/u.test(ch));
  let left = 0;
  let right = characters.length - 1;
  while (left < right) {
    if (characters[left] !== characters[right]) return false;
    left++;
    right--;
  }
  return true;
}

if (typeof module !== "undefined") module.exports = { characterCounts, isPalindrome };
if (typeof require !== "undefined" && require.main === module) {
  console.log([...characterCounts("banana")]);
  console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
}
