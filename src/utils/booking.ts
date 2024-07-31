export function bookingDuration(from: any, to: any) {
  const fromDate = new Date(from);
  const toDate = new Date(to);

  const duration = toDate.getTime() - fromDate.getTime();

  return Math.ceil(duration / (1000 * 3600 * 24));
}
