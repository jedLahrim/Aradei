export interface CreateUnitAttrs {
  unitId: string;
  class: string;
}

export interface UnitAttributes {
  unitId: string;
  class: string;
  x: number;
  y: number;
  width: number;
  height: number;
  cx: number;
  cy: number;
  r: number;
}

export interface CreateMediaUnitAttr extends CreateUnitAttrs {
  x: string;
  y: string;
  width: string;
  height: string;
}

export interface CreateTemporaryUnitAttr extends CreateUnitAttrs {
  cx: string;
  cy: string;
  r: string;
}
