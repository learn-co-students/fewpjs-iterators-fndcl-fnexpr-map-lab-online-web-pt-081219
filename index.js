const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(tutorial => tutorial.split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase())
  }).join(' '))
}

//alt solution
// const titleCased = () => {
//   return tutorials.map( tutorial => {
//     let words = tutorial.split(' ')
//     let casedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1))
//     let casedTut = casedWords.join(' ')
//     return casedTut
//   }) 
// }