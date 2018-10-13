// Your code here.
const countBs = (word) => countChar(word, "B")

const countChar = (word, char) => {
  let count = 0;
  for (let i = 0; i <word.length;i++) {
    if (word[i] === char) {
      count++
    }
  }
  return count;
}
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4