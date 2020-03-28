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

const titleCased = (input) => {
  return tutorials.map( line => {
    let tokens = line.split(' ')
    let capitalizedTokens = 
      tokens.map( token => token.charAt(0).toUpperCase() + token.slice(1) )
    let response = capitalizedTokens.join(' ')
    return response
  })
}

// #how can i see this work in Browser
// how do i use debugger
// how do i use console.log
// line means entire sentence?
// token means element?

// The slice() method returns the selected elements in an array,
//  as a new array object. The slice() method selects the elements 
//  starting at the given start argument, and ends at, but does not include,
//   the given end argument. Note: The original array will not be changed