const isMarked = string => {
  return string.split('').reduce(({ isValid, currentString }, char) => {
    if (Number.isInteger(parseInt(char, 10))) {
      if (currentString) {
        isValid = currentString.replace(/\w+/g, '') === '???'
        currentString = ''
      } else {
        currentString += char
      }
    } else if (currentString) {
      currentString += char
    }
    return {
      isValid,
      currentString,
    }
  }, { isValid: false, currentString: '' }).isValid
}

console.log({ 'arrb6???4xxbl5???eee5': isMarked('arrb6???4xxbl5???eee5') === true })
console.log({ 'acc?7??sss?3rr1??????5': isMarked('acc?7??sss?3rr1??????5') === true })
console.log({ '5??aaaaaaaaaaaaaaaaaaa?5?5': isMarked('5??aaaaaaaaaaaaaaaaaaa?5?5') === false })
console.log({ '9???1???9???1???9': isMarked('9???1???9???1???9') === true })
console.log({ 'aa6?9': isMarked('aa6?9') === false })
