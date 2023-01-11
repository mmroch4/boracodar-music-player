export function formatSeconds(seconds: number): string {
  seconds = Math.floor(seconds);

  const minutes = Math.floor(seconds / 60);

  return `${minutes}:${concatBelowZero(Math.floor(seconds - minutes * 60))}`;
}

function concatBelowZero(number: number): string {
  return number < 10 && number >= 0 ? `0${number.toString()}` : number.toString();
}
