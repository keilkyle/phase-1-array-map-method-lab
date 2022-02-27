const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function wordCap(word) {
  return word[0].toUpperCase() +   
  word.substring(1)
}

function divideString(string) {
  const array = string.split(" ")
  return array
}

function stringToCaps(string) {
  return divideString(string).map(wordCap).join(" ")
} 

const theFunction = function(array) {
  return array.map(stringToCaps)
}

const titleCased = () => {
  return theFunction(tutorials)
}