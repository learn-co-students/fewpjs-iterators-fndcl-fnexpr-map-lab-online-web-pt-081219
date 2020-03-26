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
  // map each sentence in the tutorials array
  return tutorials.map( sentence => {
    // split each sentence into an array of words
    let words = sentence.split(' ')
    // map each word in the words array
    // select the first letter of the word via .charAt(0)
    // capitalize the lett via .toUpperCase()
    // add the rest of the characters from word via .slice(1)
    let capitalizedWords =
      words.map( word => word.charAt(0).toUpperCase() + word.slice(1) )
    // rejoin all the words to recereate the sentence
    let response = capitalizedWords.join(' ')
    // returns response to the map function
    return response
  })
}
