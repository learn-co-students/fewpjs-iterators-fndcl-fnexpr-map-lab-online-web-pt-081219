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
  //captialize each title in the tutorials array
  return tutorials.map(title => {
    // split each title into an array of its words
    let words = title.split(" ")
    // map each word and capitalize the first letter of each word with .charAt(0) and concat with rest of the word via .slice(1)
    let capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1))
    // return capitalized words back into the title string
    return capitalizedWords.join(' ');
  })
}
