import moment from 'moment';

export default {
  Assets: {
    ID: {
      prop: 'ID',
      type: String,
    },
    Alias: {
      prop: 'Alias',
      type: String,
    },
    'Asset Name': {
      prop: 'Asset Name',
      type: String,
    },
    'Opening year': {
      prop: 'Opening year',
      type: Number,
    },
    Address: {
      prop: 'Address',
      type: String,
    },
    City: {
      prop: 'City',
      type: String,
    },
    'Zip Code': {
      prop: 'Zip Code',
      type: String,
    },
    Country: {
      prop: 'Country',
      type: String,
    },
    Flagship: {
      prop: 'Flagship',
      type: String,
    },
    Description: {
      prop: 'Description',
      type: String,
    },
    'Parking slots No': {
      prop: 'Parking slots No',
      type: Number,
    },
    'Visitors/Year': {
      prop: 'Visitors/Year',
      type: Number,
    },
    'Owner entity': {
      prop: 'Owner entity',
      type: String,
    },
    Headquarter: {
      prop: 'Headquarter',
      type: String,
    },
    'Correspondance address': {
      prop: 'Correspondance address',
      type: String,
    },
    RC: {
      prop: 'RC',
      type: String,
    },
    'RC City': {
      prop: 'RC City',
      type: String,
    },
    TP: {
      prop: 'TP',
      type: String,
    },
    IF: {
      prop: 'IF',
      type: String,
    },
    'Capital Social': {
      prop: 'Capital Social',
      type: String,
    },
    ICE: {
      prop: 'ICE',
      type: String,
    },
    Bank: {
      prop: 'Bank',
      type: String,
    },
    SWIFT: {
      prop: 'SWIFT',
      type: String,
    },
    IBAN: {
      prop: 'IBAN',
      type: String,
    },
    'Asset Legal Representative': {
      prop: 'Asset Legal Representative',
      type: String,
    },
    Position: {
      prop: 'Position',
      type: String,
    },
    Logo: {
      prop: 'Logo File Path',
      type: String,
    },
    Images: {
      prop: 'Images',
      type: String,
    },
    Presentation: {
      prop: 'Presentation ID',
      type: String,
    },
    Surface: {
      prop: 'Surface',
      type: Number,
    },
  },
  Floors: {
    'Floor ID': {
      prop: 'Floor ID',
      type: String,
    },
    'Floor Name': {
      prop: 'Floor Name',
      type: String,
    },
    'Asset ID': {
      prop: 'Asset ID',
      type: String,
    },
    'Asset Name': {
      prop: 'Asset Name',
      type: String,
    },
    'Floor Order': {
      prop: 'Floor Order',
      type: Number,
    },
  },
  Units: {
    Asset: {
      prop: 'Asset',
      type: String,
    },
    'Asset ID': {
      prop: 'Asset ID',
      type: String,
    },
    Floor: {
      prop: 'Floor',
      type: String,
    },
    'Unit APP ID': {
      prop: 'Unit APP ID',
      type: String,
    },
    'Unit ID': {
      prop: 'Unit ID',
      type: String,
    },
    'Unit Alias': {
      prop: 'Unit Alias',
      type: String,
    },
    Type: {
      prop: 'Type',
      type: String,
      oneOf: ['Long term', 'Specialty', 'Media'],
    },
    Mix: {
      prop: 'Mix',
      type: String,
    },
    'Sub mix': {
      prop: 'Sub mix',
      type: String,
    },
    GLA: {
      prop: 'GLA',
      type: Number,
    },
    'Floor ID': {
      prop: 'Floor ID',
      type: String,
    },
    Facade: {
      prop: 'Facade',
      type: Number,
    },
    Width: {
      prop: 'Width',
      type: Number,
    },
    Mezzanine: {
      prop: 'Mezzanine',
      type: Number,
    },
    Terrasse: {
      prop: 'Terrasse',
      type: Number,
    },
    Storage: {
      prop: 'Storage',
      type: Number,
    },
    Depth: {
      prop: 'Depth',
      type: Number,
    },
    'Max Height': {
      prop: 'Max Height',
      type: Number,
    },
    'Price/HT': {
      prop: 'Price/HT',
      type: Number,
    },
    Description: {
      prop: 'Description',
      type: String,
    },
    Dependencies: {
      prop: 'Dependencies',
      type: String,
    },
    Services: {
      prop: 'Services',
      type: String,
    },
    Specialties: {
      prop: 'Specialties',
      type: String,
    },
    'Photos files': {
      prop: 'Photos files',
      type: String,
    },
    'Banner file': {
      prop: 'Banner file',
      type: String,
    },
    'Video URL': {
      prop: 'Video URL',
      type: String,
    },
    'Virtual visit URL': {
      prop: 'Virtual visit URL',
      type: String,
    },
    Quantity: {
      prop: 'Quantity',
      type: Number,
    },
  },
  Companies: {
    'Company ID': {
      prop: 'Company ID',
      type: String,
    },
    'Brand ID': {
      prop: 'Brand ID',
      type: String,
    },
    'Brand Name': {
      prop: 'Brand Name',
      type: String,
    },
    'Brand description': {
      prop: 'Brand description',
      type: String,
    },
    'Brand products': {
      prop: 'Brand products',
      type: String,
    },
    Mix: {
      prop: 'Mix',
      type: String,
    },
    'Sub-mix': {
      prop: 'Sub-mix',
      type: String,
    },
    Description: {
      prop: 'Description',
      type: String,
    },
    Logo: {
      prop: 'Logo',
      type: String,
    },
    Group: {
      prop: 'Group',
      type: String,
    },
    'Customer Code': {
      prop: 'Customer Code',
      type: String,
    },
    'Company Name': {
      prop: 'Company Name',
      type: String,
    },
    Type: {
      prop: 'Type',
      type: Number,
    },
    Address: {
      prop: 'Address',
      type: String,
    },
    Country: {
      prop: 'Country',
      type: String,
    },
    State: {
      prop: 'State',
      type: String,
    },
    City: {
      prop: 'City',
      type: String,
    },
    'Zip Code': {
      prop: 'Zip Code',
      type: String,
    },
    Email: {
      prop: 'Email',
      type: String,
    },
    Phone: {
      prop: 'Phone',
      type: String,
    },
    RC: {
      prop: 'RC',
      type: String,
    },
    'RC City': {
      prop: 'RC City',
      type: String,
    },
    TP: {
      prop: 'TP',
      type: String,
    },
    IF: {
      prop: 'IF',
      type: String,
    },
    'Capital Social': {
      prop: 'Capital Social',
      type: String,
    },
    ICE: {
      prop: 'ICE',
      type: String,
    },
    'Legal Representative': {
      prop: 'Legal Representative',
      type: String,
    },
    Position: {
      prop: 'Position',
      type: String,
    },
  },
  Contacts: {
    'Contact ID': {
      prop: 'Contact ID',
      type: String,
    },
    Title: {
      prop: 'Title',
      type: String,
    },
    'First Name': {
      prop: 'First Name',
      type: String,
    },
    'Last Name': {
      prop: 'Last Name',
      type: String,
    },
    Position: {
      prop: 'Position',
      type: String,
    },
    Email: {
      prop: 'Email',
      type: String,
    },
    Mobile: {
      prop: 'Mobile',
      type: String,
    },
    Phone: {
      prop: 'Phone',
      type: String,
    },
    'Brand ID': {
      prop: 'Brand ID',
      type: String,
    },
    'Brand Name': {
      prop: 'Brand Name',
      type: String,
    },
  },
  Leases: {
    ID: {
      prop: 'ID',
      type: String,
    },
    'Price/HT': {
      prop: 'Price/HT',
      type: Number,
    },
    Type: {
      prop: 'Type',
      type: String,
    },
    'Scheduled installation': {
      prop: 'Scheduled installation',
      type: String,
    },
    From: {
      prop: 'From',
      type: (value) => {
        const date = moment(value, 'DD/MM/YYYY hh:mm').toDate();
        return date;
      },
    },
    To: {
      prop: 'To',
      type: (value) => {
        const date = moment(value, 'DD/MM/YYYY hh:mm').toDate();
        return date;
      },
    },
    'Asset Name': {
      prop: 'Asset Name',
      type: String,
    },
    'Asset ID': {
      prop: 'Asset ID',
      type: String,
    },
    Floor: {
      prop: 'Floor',
      type: String,
    },
    Unit: {
      prop: 'Unit',
      type: String,
    },
    GLA: {
      prop: 'GLA',
      type: Number,
    },
    'Brand ID': {
      prop: 'Brand ID',
      type: String,
    },
    'Brand Name': {
      prop: 'Brand Name',
      type: String,
    },
    'Company ID': {
      prop: 'Company ID',
      type: String,
    },
    'Company Name': {
      prop: 'Company Name',
      type: String,
    },
    Group: {
      prop: 'Group',
      type: String,
    },
    'Contact full name': {
      prop: 'Contact full name',
      type: String,
    },
    'Contact ID': {
      prop: 'Contact ID',
      type: String,
    },
  },
  Teams: {
    ID: {
      prop: 'ID',
      type: String,
    },
    'First Name': {
      prop: 'First Name',
      type: String,
    },
    'Last Name': {
      prop: 'Last Name',
      type: String,
    },
    'Mobile Phone': {
      prop: 'Mobile Phone',
      type: String,
    },
    Phone: {
      prop: 'Phone',
      type: String,
    },
    Email: {
      prop: 'Email',
      type: String,
    },
    Function: {
      prop: 'Function',
      type: String,
    },
    Role: {
      prop: 'Role',
      type: String,
    },
    Photo: {
      prop: 'Photo',
      type: String,
    },
  },
};
