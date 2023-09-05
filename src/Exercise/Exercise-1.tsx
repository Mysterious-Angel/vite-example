// 1. funkcję countCharacters liczącą ilość znaków w stringu
export function countCharacters(str: string): number {
  return str.length;
}

// 2. funkcję isEven mówiącą czy liczba jest parzysta czy nie (zwracająca boolean)

export function isEven(num: number): boolean {
  return num % 2 === 0;
}

// 3. funkcję getParityMessage która na podstawie boolean zwraca komunikat ta liczba jest parzysta/ta liczba nie jest parzysta

export function getParityMessage(isEven: boolean): string {
  return isEven ? "Ta liczba jest parzysta" : "Ta liczba nie jest parzysta";
}

// 4. funkcję processString która na podstawie stringa, wypisuje go, wypisuje liczbę jego znaków oraz informację czy liczba znaków jest/nie jest parzysta. Funkcja ta powinna wywoływać 3 powyższe funkcje (zwraca string)

export function processString(str: string): string {
  const charactersCount = countCharacters(str);
  const isEvenCharactersCount = isEven(charactersCount);
  const parityMessage = getParityMessage(isEvenCharactersCount);

  return `${str} | ${charactersCount} | ${parityMessage}`;
}
