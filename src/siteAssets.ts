export const siteAssets = {
  logo: '',
  hero: '',
  products: {
    soap: '',
    handmadeSoap: '',
    laundrySoap: '',
    soapBase: '',
    oliveOilSoap: '',
    essentialOilSoap: '',
    transparentSoap: '',
    goatMilkSoap: '',
  },
  oem: {
    packaging: '',
    labelDesign: '',
    moldShape: '',
  },
  factory: {
    exterior: '',
    productionLine: '',
    workersMachines: '',
    warehousePacking: '',
  },
  equipment: {
    threeRollGrinder: '',
    plodder: '',
    conveyor: '',
  },
  certificates: {
    certificate01: '',
    certificate02: '',
    report01: '',
    inspectionRecord: '',
  },
  export: {
    cartons: '',
    loading: '',
    container: '',
  },
  about: {
    building: '',
    officeLab: '',
    team: '',
  },
  blog: {
    soapBrandGuide: '',
    naturalIngredients: '',
    oemProcess: '',
    laundrySoapGuide: '',
    personalCareTrends: '',
  },
} as const;

export type SiteAssets = typeof siteAssets;

/**
 * How to use:
 * 1. Put optimized images under public/assets/.
 * 2. Fill the matching path above, for example:
 *    hero: '/assets/hero/hero-soap-family.webp'
 * 3. Empty strings automatically keep the designed placeholder blocks.
 */
