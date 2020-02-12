const findWordFrequencies = str => {
  let sentenceArray = str.toLowerCase().split(" ");
  let obj = {};
  for (word of sentenceArray) {
    if (obj[word] == null) {
      obj[word] = 1;
    } else {
      obj[word] = obj[word] + 1;
    }
  }
  return obj;
};
const freqs = findWordFrequencies("That that is is that that is not is not");

console.log(freqs);
