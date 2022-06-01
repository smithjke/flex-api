import { Jurisdiction, JurisdictionRaw, mapJurisdictionRaw, mapJurisdiction } from './jurisdiction';
import { LocationRaw, mapLocationRaw, Location, mapLocation } from './location';
import { PlaceholderType } from './placeholder-type';

export type CatalogCompany = {
  id: string;
  createdAt: Date;
  logo: string;
  title: string;
  specialization: string;
  website: string;
  companySize: number;
  yearOfFoundation: number;
  description: string;
  isSearchingSpecialists: boolean;
  speakingLanguages: Array<PlaceholderType>;
  isSellingSpecialists: boolean;
  currencies: Array<PlaceholderType>;
  taxationWithVAT: boolean;
  taxationWithoutVAT: boolean;
  jurisdictions: Array<Jurisdiction>,
  interviewSteps: number;
  calculationByAgreement: boolean;
  billingPeriod: number;
  deferredPaymentByAgreement: boolean;
  defermentOfPayment: number;
  mainLocation: Location;
  locations: Array<Location>;
  isVerified: boolean;
  sellingSpecialistsCount: number;
  searchingSpecialistsCount: number;
  url: string;
};

export type CatalogCompanyRaw = {
  id: string;
  createdAt: string;
  logo: string;
  title: string;
  specialization: string;
  website: string;
  companySize: number;
  yearOfFoundation: number;
  description: string;
  isSearchingSpecialists: boolean;
  speakingLanguages: Array<PlaceholderType>;
  isSellingSpecialists: boolean;
  currencies: Array<PlaceholderType>;
  taxationWithVAT: boolean;
  taxationWithoutVAT: boolean;
  jurisdictions: Array<JurisdictionRaw>,
  interviewSteps: number;
  calculationByAgreement: boolean;
  billingPeriod: number;
  deferredPaymentByAgreement: boolean;
  defermentOfPayment: number;
  mainLocation: LocationRaw;
  locations: Array<LocationRaw>;
  isVerified: boolean;
  sellingSpecialistsCount: number;
  searchingSpecialistsCount: number;
  url: string;
};

export function mapCatalogCompanyRaw(catalogCompanyRaw: CatalogCompanyRaw): CatalogCompany {
  return {
    id: catalogCompanyRaw.id ? String(catalogCompanyRaw.id) : null,
    createdAt: catalogCompanyRaw.createdAt ? new Date(catalogCompanyRaw.createdAt) : null,
    logo: catalogCompanyRaw.logo ? String(catalogCompanyRaw.logo) : null,
    title: catalogCompanyRaw.title ? String(catalogCompanyRaw.title) : null,
    specialization: catalogCompanyRaw.specialization ? String(catalogCompanyRaw.specialization) : null,
    website: catalogCompanyRaw.website ? String(catalogCompanyRaw.website) : null,
    companySize: catalogCompanyRaw.companySize ? Number(catalogCompanyRaw.companySize) : null,
    yearOfFoundation: catalogCompanyRaw.yearOfFoundation ? Number(catalogCompanyRaw.yearOfFoundation) : null,
    description: catalogCompanyRaw.description ? String(catalogCompanyRaw.description) : null,
    isSearchingSpecialists: catalogCompanyRaw.isSearchingSpecialists ? Boolean(catalogCompanyRaw.isSearchingSpecialists) : null,
    speakingLanguages: null,
    isSellingSpecialists: catalogCompanyRaw.isSellingSpecialists ? Boolean(catalogCompanyRaw.isSellingSpecialists) : null,
    currencies: null,
    taxationWithVAT: catalogCompanyRaw.taxationWithVAT ? Boolean(catalogCompanyRaw.taxationWithVAT) : null,
    taxationWithoutVAT: catalogCompanyRaw.taxationWithoutVAT ? Boolean(catalogCompanyRaw.taxationWithoutVAT) : null,
    jurisdictions: Array.isArray(catalogCompanyRaw.jurisdictions) ? catalogCompanyRaw.jurisdictions.map(mapJurisdictionRaw) : [],
    interviewSteps: catalogCompanyRaw.interviewSteps ? Number(catalogCompanyRaw.interviewSteps) : null,
    calculationByAgreement: catalogCompanyRaw.calculationByAgreement ? Boolean(catalogCompanyRaw.calculationByAgreement) : null,
    billingPeriod: catalogCompanyRaw.billingPeriod ? Number(catalogCompanyRaw.billingPeriod) : null,
    deferredPaymentByAgreement: catalogCompanyRaw.deferredPaymentByAgreement ? Boolean(catalogCompanyRaw.deferredPaymentByAgreement) : null,
    defermentOfPayment: catalogCompanyRaw.defermentOfPayment ? Number(catalogCompanyRaw.defermentOfPayment) : null,
    mainLocation: catalogCompanyRaw.mainLocation ? mapLocationRaw(catalogCompanyRaw.mainLocation) : null,
    locations: Array.isArray(catalogCompanyRaw.locations) ? catalogCompanyRaw.locations.map(mapLocationRaw) : [],
    isVerified: catalogCompanyRaw.isVerified ? Boolean(catalogCompanyRaw.isVerified) : null,
    sellingSpecialistsCount: catalogCompanyRaw.sellingSpecialistsCount ? Number(catalogCompanyRaw.sellingSpecialistsCount) : null,
    searchingSpecialistsCount: catalogCompanyRaw.searchingSpecialistsCount ? Number(catalogCompanyRaw.searchingSpecialistsCount) : null,
    url: catalogCompanyRaw.url ? String(catalogCompanyRaw.url) : null,
  };
}

export function mapCatalogCompany(catalogCompany: Partial<CatalogCompany>): CatalogCompanyRaw {
  return {
    id: catalogCompany?.id,
    createdAt: catalogCompany.createdAt ? catalogCompany.createdAt.toISOString() : undefined,
    logo: catalogCompany?.logo,
    title: catalogCompany?.title,
    specialization: catalogCompany?.specialization,
    website: catalogCompany?.website,
    companySize: catalogCompany?.companySize,
    yearOfFoundation: catalogCompany?.yearOfFoundation,
    description: catalogCompany?.description,
    isSearchingSpecialists: catalogCompany?.isSearchingSpecialists,
    speakingLanguages: null,
    isSellingSpecialists: catalogCompany?.isSellingSpecialists,
    currencies: null,
    taxationWithVAT: catalogCompany?.taxationWithVAT,
    taxationWithoutVAT: catalogCompany?.taxationWithoutVAT,
    jurisdictions: catalogCompany.jurisdictions ? catalogCompany.jurisdictions.map(mapJurisdiction) : undefined,
    interviewSteps: catalogCompany?.interviewSteps,
    calculationByAgreement: catalogCompany?.calculationByAgreement,
    billingPeriod: catalogCompany?.billingPeriod,
    deferredPaymentByAgreement: catalogCompany?.deferredPaymentByAgreement,
    defermentOfPayment: catalogCompany?.defermentOfPayment,
    mainLocation: catalogCompany.mainLocation ? mapLocation(catalogCompany.mainLocation) : undefined,
    locations: catalogCompany.locations ? catalogCompany.locations.map(mapLocation) : undefined,
    isVerified: catalogCompany?.isVerified,
    sellingSpecialistsCount: catalogCompany?.sellingSpecialistsCount,
    searchingSpecialistsCount: catalogCompany?.searchingSpecialistsCount,
    url: catalogCompany?.url,
  };
}
