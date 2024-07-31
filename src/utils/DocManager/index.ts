import { dirname, resolve } from 'path';
import puppeteer, { PDFOptions } from 'puppeteer';
import handlebars from 'handlebars';
// import { mkdir, readFile, writeFile } from 'fs/promises';
import InlineCss from 'inline-css';
import { JSDOM } from 'jsdom';
import { TemplateManager, TemplateType } from './TemplateManager';
import * as fs from 'fs';
// import { existsSync } from 'fs';
import { DocOptions } from './configs';

export class DocManager {
  // We will use template path stored in configs later
  private templatePath: string;
  private pageOptions: DocOptions = {
    landscape: false,
    pageFormat: 'A4',
    scale: 1,
    pageMargin: {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
  };
  private htmlContent: string | undefined;

  constructor(templateType?: TemplateType | undefined, options?: DocOptions) {
    handlebars.registerHelper('ifEmptyOrWhitespace', function (value, options) {
      if (!value) {
        return options.fn(this);
      }
      return value.replace(/\s*/g, '').length === 0
        ? options.fn(this)
        : options.inverse(this);
    });
    if (templateType !== undefined) {
      const templateManager = new TemplateManager(templateType);
      const { path, ...options } = templateManager.getTemplateConfigs();
      this.pageOptions = options;
      this.templatePath = path;
    } else {
      if (options) {
        if (options.landscape) this.pageOptions.landscape = options.landscape;
        if (options.pageFormat)
          this.pageOptions.pageFormat = options.pageFormat;
        if (options.pageMargin)
          this.pageOptions.pageMargin = options.pageMargin;
      }
    }
  }

  static async getImageBase64Data(imagePath: string): Promise<string> {
    const imageBuffer = fs.readFileSync(imagePath);
    return imageBuffer.toString('base64');
  }

  async compile(data: object, noEscape = false) {
    const htmlTemplate = fs.readFileSync(this.templatePath, 'utf-8');
    const compiledTemplate = handlebars.compile(htmlTemplate, {
      noEscape,
    });

    const htmlContent = compiledTemplate(data);

    const cssInlined = await InlineCss(htmlContent, {
      url: 'file://' + dirname(this.templatePath),
      removeHtmlSelectors: true,
      removeLinkTags: false,
      removeStyleTags: true,
    });

    this.htmlContent = await this.resolveImagePaths(cssInlined);
    return this;
  }

  async saveHTML(outputPath: string) {
    if (this.htmlContent) {
      fs.writeFileSync(outputPath, this.htmlContent, {
        encoding: 'utf8',
      });
    }
  }

  async printHTMLContent(content: string, outputPath: string) {
    const htmlContent = await this.resolveImagePaths(content);
    if (!fs.existsSync(dirname(outputPath))) {
      fs.mkdirSync(dirname(outputPath), {
        recursive: true,
      });
    }
    await this.printDocument(htmlContent, outputPath, 0.8);
  }

  async print(outputPath: string, headerOverlay?: string) {
    if (this.htmlContent) {
      if (!fs.existsSync(dirname(outputPath))) {
        fs.mkdirSync(dirname(outputPath), {
          recursive: true,
        });
      }
      await this.printDocument(this.htmlContent, outputPath, 1, headerOverlay);
    }
  }

  async parseImage(logoImagePath: string, style?: string) {
    const logoBase64 = await this.getImageBase64Data(logoImagePath);
    const logoDataUrl = `data:image/png;base64,${logoBase64}`;
    if (!style) {
      style = 'position: absolute;left: 12mm;top: 5mm;height: 15mm;';
    }
    return `
        <img style="${style}" src="${logoDataUrl}" />
    `;
  }

  private marginCSS() {
    const marginTop = String(this.pageOptions.pageMargin.top ?? 0).replaceAll(
      'px',
      '',
    );
    const marginBottom = String(
      this.pageOptions.pageMargin.bottom ?? 0,
    ).replaceAll('px', '');
    const marginLeft = String(this.pageOptions.pageMargin.left ?? 0).replaceAll(
      'px',
      '',
    );
    const marginRight = String(
      this.pageOptions.pageMargin.right ?? 0,
    ).replaceAll('px', '');
    return `
        @page {
          margin-top: ${marginTop}${marginTop !== '0' ? 'px' : ''};
          margin-bottom: ${marginBottom}${marginBottom !== '0' ? 'px' : ''};
          margin-left: ${marginLeft}${marginLeft !== '0' ? 'px' : ''};
          margin-right: ${marginRight}${marginRight !== '0' ? 'px' : ''};
        }
      `;
  }

  private async printDocument(
    htmlContent: string,
    outputPath: string,
    scale?: number,
    headerOverlay?: string,
  ) {
    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();

    await page.setContent(htmlContent, { waitUntil: 'domcontentloaded' });
    await page.waitForNetworkIdle();
    const pageOptions: PDFOptions = {
      format: this.pageOptions.pageFormat,
      landscape: this.pageOptions.landscape,
      printBackground: true,
      displayHeaderFooter: false,
      footerTemplate: '<div />',
      headerTemplate: headerOverlay,
      margin: this.pageOptions.pageMargin,
      scale: scale,
    };

    await page.emulateMediaType('screen');
    await page.pdf({ path: outputPath, ...pageOptions });

    await browser.close();
  }

  private async resolveImagePaths(htmlContent: string) {
    const dom = new JSDOM(htmlContent);
    const document = dom.window.document;

    const imgElements = document.querySelectorAll('img');

    for (const imgElement of imgElements) {
      const relativeSrc = imgElement.getAttribute('src');
      if (
        relativeSrc &&
        !relativeSrc.includes('http') &&
        !relativeSrc.includes('base64')
      ) {
        const absolutePath = resolve(
          'file://',
          dirname(this.templatePath),
          relativeSrc,
        );
        const base64Data = await this.getImageBase64Data(absolutePath);
        imgElement.setAttribute('src', `data:image/png;base64,${base64Data}`);
      }
    }

    return dom.serialize();
  }

  private async getImageBase64Data(imagePath: string): Promise<string> {
    const imageBuffer = fs.readFileSync(imagePath);
    return imageBuffer.toString('base64');
  }
}
