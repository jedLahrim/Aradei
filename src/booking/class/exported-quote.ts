export class ExportedQuote {
  id: number;
  customerCode: string;
  invoiceDate: string;
  postMonth: string;
  quoteId: string;
  notes: string;
  assetId: string;
  net: number;
  account: number;
  arAccount: number;
  chargeCode: string;
  recoverability: number;
  fromDate: string;
  toDate: string;
  docSequence: string;
  paymentMethod: string;
  tva: number;
  rate: number;
  exportedAt: string;

  constructor(
    id: number,
    customerCode: string,
    invoiceDate: string,
    postMonth: string,
    quoteId: string,
    notes: string,
    assetId: string,
    net: number,
    account: number,
    arAccount: number,
    chargeCode: string,
    recoverability: number,
    fromDate: string,
    toDate: string,
    docSequence: string,
    paymentMethod: string,
    tva: number,
    rate: number,
    exportedAt: string,
  ) {
    this.id = id;
    this.customerCode = customerCode;
    this.invoiceDate = invoiceDate;
    this.postMonth = postMonth;
    this.quoteId = quoteId;
    this.notes = notes;
    this.assetId = assetId;
    this.net = net;
    this.account = account;
    this.arAccount = arAccount;
    this.chargeCode = chargeCode;
    this.recoverability = recoverability;
    this.fromDate = fromDate;
    this.toDate = toDate;
    this.docSequence = docSequence;
    this.paymentMethod = paymentMethod;
    this.tva = tva;
    this.rate = rate;
    this.exportedAt = exportedAt;
  }

  create() {
    return {
      Type: 'C',
      '#': this.id,
      'Customer Code': this.customerCode,
      Vide: null,
      'Invoice Date': this.invoiceDate,
      'Post Month': this.postMonth,
      Reference: this.quoteId,
      Notes: this.notes,
      Property: this.assetId,
      Net: this.net.toFixed(2),
      Account: this.account,
      'AR Account': this.arAccount,
      'Charge Code': this.chargeCode,
      'Vide.1': null,
      'Vide.2': null,
      'Vide.3': null,
      'Vide.4': null,
      'Vide.5': null,
      'Due Date': this.invoiceDate,
      'Vide.6': null,
      Recoverability: this.recoverability,
      'Vide.7': null,
      'Vide.8': null,
      'Vide.9': null,
      'Vide.10': null,
      'Vide.11': null,
      'Vide.12': null,
      'Net.1': this.net.toFixed(2),
      Currency: 'mad',
      Rate: this.rate,
      'From Date': this.exportedAt,
      TVA: this.tva.toFixed(2),
      TVA2: 0,
      'From Date.1': this.fromDate,
      'To Date': this.toDate,
      'Vide.13': null,
      'Tran Type': 'sales',
      'Tax Rate': 'ma20',
      'Doc Seq #': this.docSequence,
      'Vide.14': null,
      'Payment Method': this.paymentMethod,
      'Vide.15': null,
      'Vide.16': null,
      'Vide.17': null,
      'Vide.18': null,
      'Vide.19': null,
      'Vide.20': null,
      'Vide.21': null,
      'Vide.22': null,
      'Vide.23': null,
      'Vide.24': null,
      'Vide.25': null,
      'Vide.26': null,
      'Vide.27': null,
      'Vide.28': null,
      'Vide.29': null,
      'Vide.30': null,
      'Vide.31': null,
      'Vide.32': null,
      'Vide.33': null,
      'Vide.34': null,
      'Vide.35': null,
      'Vide.36': null,
      'Vide.37': null,
      'Vide.38': null,
      'Vide.39': null,
      'Vide.40': null,
      'Vide.41': null,
      'Vide.42': null,
      'Vide.43': null,
      'Vide.44': null,
      'Vide.45': null,
      'Vide.46': null,
      'Vide.47': null,
      'Vide.48': null,
      'Vide.49': null,
      'Vide.50': null,
      'Vide.51': null,
      'Display Type': 'Standard Charge Display Type',
      'Vide.52': null,
      'Vide.53': null,
      'Vide.54': null,
      'Vide.55': null,
      'Vide.56': null,
      'Vide.57': null,
      'Vide.58': null,
      'Vide.59': null,
      'Vide.60': null,
      'Vide.61': null,
      'Vide.62': null,
      'Vide.63': null,
      'Vide.64': null,
      'Vide.65': null,
      'Vide.66': null,
      'Vide.67': null,
      'Vide.68': null,
      'Vide.69': null,
      'Vide.70': null,
      'Vide.71': null,
      'Vide.72': null,
      'Vide.73': null,
      'Vide.74': null,
      'Vide.75': null,
      'Vide.76': null,
      'Vide.77': null,
      'Vide.78': null,
      'Vide.79': null,
      'Vide.80': null,
      'Vide.81': null,
      'Vide.82': null,
      'Vide.83': null,
      'Vide.84': null,
    };
  }
}
