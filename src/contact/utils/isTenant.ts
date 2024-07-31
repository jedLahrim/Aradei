export function isTenant(unitBookings) {
  const currentDateIso = new Date();
  const bookingDates = unitBookings
    .map((booking) => {
      if (
        booking.status === 3 &&
        currentDateIso >= booking.dateFrom &&
        currentDateIso <= booking.dateTo
      ) {
        return {
          dateFrom: booking.dateFrom,
          dateTo: booking.dateTo,
          status: booking.status,
        };
      }
    })
    .filter((date) => date !== undefined);
  return bookingDates.length > 0 ? 1 : 0;
}
