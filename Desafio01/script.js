function isValidRoman(roman) {
  const romanPattern =
    /^(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/i
  return romanPattern.test(roman)
}

function romanToArabic(roman) {
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  let arabic = 0
  let prevValue = 0

  for (const symbol of roman.toUpperCase()) {
    const value = romanNumerals[symbol]

    if (value > prevValue) {
      arabic += value - 2 * prevValue
    } else {
      arabic += value
    }

    prevValue = value
  }

  return arabic
}

function arabicToRoman(arabic) {
  const arabicNumerals = [
    { value: 1000, symbol: 'M' },
    { value: 900, symbol: 'CM' },
    { value: 500, symbol: 'D' },
    { value: 400, symbol: 'CD' },
    { value: 100, symbol: 'C' },
    { value: 90, symbol: 'XC' },
    { value: 50, symbol: 'L' },
    { value: 40, symbol: 'XL' },
    { value: 10, symbol: 'X' },
    { value: 9, symbol: 'IX' },
    { value: 5, symbol: 'V' },
    { value: 4, symbol: 'IV' },
    { value: 1, symbol: 'I' }
  ]

  let roman = ''

  for (const numeral of arabicNumerals) {
    while (arabic >= numeral.value) {
      roman += numeral.symbol
      arabic -= numeral.value
    }
  }

  return roman
}

function convertArabicToRoman() {
  const arabicInput = document.getElementById('arabic-input').value
  const romanOutput = document.getElementById('output')

  const arabic = parseInt(arabicInput)

  if (isNaN(arabic) || arabic < 1 || arabic > 3999) {
    romanOutput.textContent = 'Digite um número válido (entre 1 e 3999).'
    return
  }

  const roman = arabicToRoman(arabic)
  romanOutput.textContent = roman
}

function convertRomanToArabic() {
  const romanInput = document.getElementById('roman-input').value
  const arabicOutput = document.getElementById('output')

  if (!isValidRoman(romanInput)) {
    arabicOutput.textContent = 'Digite um número romano válido.'
    return
  }

  const arabic = romanToArabic(romanInput)
  arabicOutput.textContent = arabic
}
