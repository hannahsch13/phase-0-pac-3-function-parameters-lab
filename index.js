function introduction (name) {
    return `Hi, my name is ${name}.`;
}
function logIntroduction (name) {
    console.log(`Hi, my name is ${name}.`)
}
const name = `Aki`

function introductionWithLanguage(name,language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
function logIntroductionWithLanguage(name,language) {
    console.log(`Hi, my name is ${name} and I am learning to program in ${language}.`)
}

function introductionWithLanguageOptional(name,language = `JavaScript`) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}
function logIntroductionWithLanguageOptional(name,language) {
    console.log(`Hi, my name is ${name} and I am learning to program in ${language}.`)
}
