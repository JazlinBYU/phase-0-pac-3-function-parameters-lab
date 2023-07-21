// 1) takes in an argument of a name and returns a phrase with that name using string interpolation
function introduction(name) {
    return `Hi, my name is ${name}.`
  }
  function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  function introductionWithLanguageOptional(name, language) {
    return `Hi, my name is Gracie and I am learning to program in JavaScript.`
  }
  function introductionWithLanguageOptional(name, language = 'JavaScript') {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  