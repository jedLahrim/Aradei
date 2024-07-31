import { join } from 'path';
import { templatesConfig } from './configs';

export enum TemplateType {
  PROPOSAL_COVER = 'proposal-cover',
  PROPOSAL_FLOOR = 'proposal-floor',
  PROPOSAL_ASSET_COVER = 'proposal-asset-cover',
  PROPOSAL_ASSET_DETAILS = 'proposal-asset-details',
  PROPOSAL_ASSET_INFO = 'proposal-asset-info',
  PROPOSAL_UNIT = 'proposal-unit',
  PROPOSAL_UNIT_DETAILS = 'proposal-unit-details',
  PROPOSAL_MONO_PLAN = 'proposal-mono-plan',
  PV_LIVRAISON = 'pv-livraison',
  QUOTE = 'quote',
}

export class TemplateManager {
  private templatePath: string;
  constructor(private type: TemplateType) {
    const templateCategory = type.split('-')[0];
    this.templatePath = join(
      __dirname,
      '../../../../',
      `/templates/${templateCategory}/${type}.hbs`,
    );
  }

  getTemplateConfigs() {
    return {
      path: this.templatePath,
      ...templatesConfig[this.type],
    };
  }
}
