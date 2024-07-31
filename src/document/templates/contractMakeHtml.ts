import { Booking } from 'src/booking/entities/booking.entity';
import { formatDateShort } from '../../utils/date';
import { ClientManager } from 'src/prisma/ClientManager';

export const contractMakeSpecialtyHtml = (booking: Booking) => {
  const docTitle = `Contrat de Location ${booking.company.name} | ${
    booking.brand.name
  } - ${formatDateShort(booking.dateFrom)} au ${formatDateShort(
    booking.dateTo,
  )}`;
  const html = `<div style="border:none;background-color:#e7e2d1;display: table;width:100%;height:100%;text-align:center">
  <div style="vertical-align: middle;display: table-cell;"><img src="http://127.0.0.1:${
    process.env.PORT
  }${ClientManager.getClient().media.logo}" /><br/><br />
  <h2 style="font-size:50px;font-family:sans-serif">${docTitle}</h2>
  </div>
  </div>`;
  return html;
};
