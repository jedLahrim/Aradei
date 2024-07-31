export function getPipe(bookings) {
  let pipe = 0;
  bookings.forEach(booking => {
    const quoteEdit = booking.quoteEdits.find(edit => edit.quote.status === 2 && edit.quote.total);
    if (quoteEdit) {
      pipe += quoteEdit.quote.total || 0;
    } else {
      const convention = booking.documents.find(doc => doc.type === 'CONVENTION' && doc.sent);
      if (convention) {
        const convData = JSON.parse(convention?.dataObj) || {};
        const amount = parseFloat(convData?.amount) || 0;
        pipe += amount || 0;
      } else {
        const contract = booking.documents.find(doc => doc.type === 'CONTRACT' && doc.sent);
        if (contract) {
          const com = booking.documents.find(doc => (doc.type === 'FICHE_COM_LT' || doc.type === 'FICHE_COM') && doc.validation?.isComplete === true);
          if (com && com?.dataObj) {
            const comData = JSON.parse(com?.dataObj) || {};

            let amount = null;
            if (com.type === 'FICHE_COM') {
              amount = parseFloat(comData?.rent) || 0;
            } else if (com.type === 'FICHE_COM_LT') {
              amount = (parseFloat(comData?.iet?.secDepositText) || 0) + (parseFloat(comData?.iet?.rtm) * 1.2) + (parseFloat(comData?.iet?.marketing) * 1.2);
            }

            pipe += amount || 0;
          }
        }
      }
    }
  });
  return pipe;
}
