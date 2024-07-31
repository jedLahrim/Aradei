export function toUtc(date: Date) {
  const localDate = new Date(date.toString());
  const timezoneOffset = localDate.getTimezoneOffset() * 60000;
  const utcDate = new Date(localDate.getTime() - timezoneOffset);
  const frenchTimezoneOffset = 2 * 60 * 60 * 1000;
  const frenchDate = new Date(utcDate.getTime() + frenchTimezoneOffset);
  frenchDate.setUTCHours(0, 0, 0, 0);
  return frenchDate;
}
