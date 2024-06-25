/*
Write a function called removeVowels(word) that removes all the vowels in a
word.

Write a function abbreviateWords(sentence) that takes in a sentence string. The
function should return a new sentence where words that are longer than 4
characters have their vowels removed. Use the removeVowels helper function
to remove the vowels of the words.
*/

function removeVowels(word) {
  let vowels = ['a', 'e', 'i', 'o', 'u']
  word = word.split('');
  for (let i = word.length - 1; i >= 0; i--) {
    if (vowels.includes(word[i])) {
      word.splice(i, 1);
    }
  }
  return word.join('');
}

function abbreviateWords(sentence) {
  let words = [];
  sentence = sentence.split(' ');

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i].length <= 4) {
      words.push(sentence[i]);
    } else {
      words.push(removeVowels(sentence[i]))
    }
  }
  return words.join(' ')
}

// console.log(removeVowels("hello")); // hll
// console.log(removeVowels("what"));  // wht
// console.log(removeVowels("stop"));  // stp

// console.log(abbreviateWords("what a wonderful place to live")); // what a wndrfl plc to live
// console.log(abbreviateWords("she sends an excellent message")); // she snds an xcllnt mssg
// console.log(abbreviateWords("keep going youre doing great"));   // keep gng yr dng grt
// console.log(abbreviateWords("dont stop wont stop"));            // dont stop wont stop
// console.log(abbreviateWords("youre getting good at this"));     // yr gttng good at this

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = {
  removeVowels,
  abbreviateWords
};
