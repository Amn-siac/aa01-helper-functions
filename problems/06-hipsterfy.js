/*
Write a function removeLastVowel(word) that takes in a word string and returns
the word without its last vowel.

Write a function hipsterfy(sentence) that takes in a sentence string and returns
the sentence where every word is missing its last vowel. Use the removeLastVowel
function as a helper function.
*/

function removeLastVowel(word) {
  let vowels = ['a', 'e', 'i', 'o', 'u']
  word = word.split('');
  for (let i = word.length - 1; i >= 0; i--) {
    if (vowels.includes(word[i])) {
      word.splice(i, 1);
      word = word.join('');
      return word;
    }
  }
  return word.join('');
}

function hipsterfy(sentence) {
  sentence = sentence.split(' ');
  let words = [];
  for (let i = 0; i < sentence.length; i++) {
    let word = removeLastVowel(sentence[i]);
    words.push(word);
  }
  return words.join(' ')
}

// console.log(hipsterfy("When should everyone wake up?")); // 'Whn shold everyon wak p?'
// console.log(hipsterfy("get ready for our bootcamp")); // 'gt redy fr or bootcmp'
// console.log(hipsterfy("panthers are great animals")); // 'panthrs ar gret animls'
// console.log(hipsterfy("go big or go home")); // 'g bg r g hom'
// console.log(hipsterfy("dont let your dreams be dreams")); // 'dnt lt yor drems b drems'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = {
  removeLastVowel,
  hipsterfy,
};
