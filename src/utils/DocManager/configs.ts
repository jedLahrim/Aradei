import { PaperFormat, PDFMargin } from 'puppeteer';

export interface DocOptions {
  landscape: boolean;
  pageFormat: PaperFormat;
  pageMargin: PDFMargin;
  scale: number;
}

export type TemplateConfig = Record<string, DocOptions>;

export const templatesConfig: TemplateConfig = {
  'proposal-cover': {
    landscape: true,
    pageFormat: 'A4',
    scale: 1,
    pageMargin: {
      top: '0px',
      bottom: '0px',
      left: '0px',
      right: '0px',
    },
  },
  'proposal-asset-cover': {
    landscape: true,
    pageFormat: 'A4',
    scale: 1,
    pageMargin: {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
  },
  'proposal-asset-details': {
    landscape: true,
    pageFormat: 'A4',
    scale: 1,
    pageMargin: {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
  },
  'proposal-asset-info': {
    landscape: true,
    pageFormat: 'A4',
    scale: 1,
    pageMargin: {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
  },
  'proposal-mono-plan': {
    landscape: true,
    pageFormat: 'A4',
    scale: 1,
    pageMargin: {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
  },
  'proposal-floor': {
    landscape: true,
    pageFormat: 'A4',
    scale: 1,
    pageMargin: {
      top: 5,
      bottom: 5,
      left: 5,
      right: 5,
    },
  },
  'proposal-unit': {
    landscape: true,
    pageFormat: 'A4',
    scale: 1,
    pageMargin: {
      top: 5,
      bottom: 5,
      left: 5,
      right: 5,
    },
  },
  'proposal-unit-details': {
    landscape: true,
    pageFormat: 'A4',
    scale: 1,
    pageMargin: {
      top: 5,
      bottom: 5,
      left: 5,
      right: 5,
    },
  },
  'proposal-hot': {
    landscape: false,
    pageFormat: 'A4',
    scale: 0.8,
    pageMargin: {
      top: 0,
      bottom: 0,
      left: 5,
      right: 5,
    },
  },
  'pv-livraison': {
    landscape: false,
    pageFormat: 'A4',
    scale: 1,
    pageMargin: {
      top: 20,
      bottom: 20,
      left: 20,
      right: 20,
    },
  },
  quote: {
    landscape: false,
    pageFormat: 'A4',
    scale: 1,
    pageMargin: {
      top: 20,
      bottom: 20,
      left: 20,
      right: 20,
    },
  },
};
