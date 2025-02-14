/* Pig Latin
Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase. */

function translatePigLatin(str) {
    return str
        .replace(/^[aeiou]\w*/, '$&way')
        .replace(/(^[^aeiou]+)(\w*)/, '$2$1ay');
}

translatePigLatin("consonant");