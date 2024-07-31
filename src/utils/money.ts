export function moneyAmount(amount) {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'MAD',
  }).format(amount);
}
export function formatLocalNumber(value: number, fraction = false) {
  const currentLocale = 'en';

  let fractionOption = {};
  if (fraction)
    fractionOption = { minimumFractionDigits: 2, maximumFractionDigits: 2 };
  return new Intl.NumberFormat(currentLocale == 'en' ? 'en-UK' : 'fr-FR', {
    ...fractionOption,
  }).format(value ?? 0);
}
export function moneyAmountInWords(amount) {
  const unites = [
    '',
    'un',
    'deux',
    'trois',
    'quatre',
    'cinq',
    'six',
    'sept',
    'huit',
    'neuf',
  ];
  const dixAneuf = [
    'dix',
    'onze',
    'douze',
    'treize',
    'quatorze',
    'quinze',
    'seize',
    'dix-sept',
    'dix-huit',
    'dix-neuf',
  ];
  const dizaines = [
    '',
    '',
    'vingt',
    'trente',
    'quarante',
    'cinquante',
    'soixante',
    'soixante-dix',
    'quatre-vingt',
    'quatre-vingt-dix',
  ];
  const mille = 'mille';
  const millions = 'millions';

  function convertToWords(number) {
    if (number === 0) return 'zéro';

    let words = '';

    if (number >= 1000000) {
      words += `${convertToWords(Math.floor(number / 1000000))} ${millions} `;
      number %= 1000000;
    }

    if (number >= 1000) {
      const thousands = Math.floor(number / 1000);
      if (thousands === 1) words += `${mille} `;
      else words += `${convertToWords(thousands)} ${mille} `;
      number %= 1000;
    }

    if (number >= 100) {
      const hundreds = Math.floor(number / 100);
      if (hundreds > 1) words += `${unites[hundreds]} cent `;
      else words += 'cent ';
      number %= 100;
    }

    if (number >= 20) {
      if (number < 70) {
        const tens = Math.floor(number / 10);
        const units = number % 10;

        words += dizaines[tens];
        if (units === 1) words += ' et un';
        else if (units > 0) words += `-${unites[units]}`;
      } else if (number < 80) {
        const units = number % 10;

        words += `soixante-${dixAneuf[units]}`;
      } else if (number < 90) {
        const units = number % 10;

        words += 'quatre-vingt';
        if (units > 0) words += `-${unites[units]}`;
      } else {
        const units = number % 10;

        words += `quatre-vingt-${dixAneuf[units]}`;
      }
    } else if (number >= 10) {
      words += dixAneuf[number - 10];
    } else if (number > 0) {
      words += unites[number];
    }

    return words.trim();
  }

  let amountInWords = convertToWords(amount);

  if (amount === 0) amountInWords = 'zéro';

  return amountInWords;
}
