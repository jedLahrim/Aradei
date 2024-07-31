declare module 'app-client' {
  interface AppClient {
    name: string;
    primaryColor: string;
    emailFromName: string;
    emailFrom: string;
    databaseUrl: string;
    timezone: string;
    media: {
      logo: string;
      logoLight: string;
      proposal: string;
    };
    process: Record<string, Record<string, boolean>>;
    legal: {
      name: string;
      address: string;
      city: string;
      bankName: string;
      bankIBAN: string;
      bankSWIFT: string;
      capital: number;
      hq: string;
      rc: string;
      if: string;
      patent: string;
      ice: string;
      corAddress: string;
      zip: string;
      contact: string;
    };
  }
}
