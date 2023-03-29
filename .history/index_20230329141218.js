function calculate(str) {
  const a = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26,
  ]

  const b = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ]

  const splitted = str.split('')
  let result = 0

  for (let i = 0; i < splitted.length; i++) {
    const char = splitted[i]
    if (/[a-zA-Z]/.test(char)) {
      const index = b.indexOf(char.toLowerCase())
      result += a[index]
    } else if (!isNaN(parseInt(char))) {
      result += parseInt(char)
    }
  }

  return result
}

const c = 'Hello123'
const result = calculate(c)
console.log(result) // Output: 58
