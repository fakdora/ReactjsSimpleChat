export function findRandomNumber(minimum, maximum) {
  return Math.floor(
    Math.random() * (maximum - minimum + 1)
  ) + minimum
}