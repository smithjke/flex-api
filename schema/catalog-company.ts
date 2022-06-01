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
  speakingLanguages: PlaceholderType[];
  isSellingSpecialists: boolean;
  currencies: PlaceholderType[];
  taxationWithVAT: boolean;
  taxationWithoutVAT: boolean;
  jurisdictions: Jurisdiction[],
  interviewSteps: number;
  calculationByAgreement: boolean;
  billingPeriod: number;
  deferredPaymentByAgreement: boolean;
  defermentOfPayment: number;
  mainLocation: Location;
  locations: Location[];
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
  speakingLanguages: PlaceholderType[];
  isSellingSpecialists: boolean;
  currencies: PlaceholderType[];
  taxationWithVAT: boolean;
  taxationWithoutVAT: boolean;
  jurisdictions: JurisdictionRaw[],
  interviewSteps: number;
  calculationByAgreement: boolean;
  billingPeriod: number;
  deferredPaymentByAgreement: boolean;
  defermentOfPayment: number;
  mainLocation: LocationRaw;
  locations: LocationRaw[];
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
    specialization: catalogCompanyRaw.title ? String(catalogCompanyRaw.title) : null,
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
    jurisdictions: catalogCompanyRaw.jurisdictions ? catalogCompanyRaw.jurisdictions.map(mapJurisdictionRaw) : [],
    interviewSteps: catalogCompanyRaw.interviewSteps ? Number(catalogCompanyRaw.interviewSteps) : null,
    calculationByAgreement: catalogCompanyRaw.calculationByAgreement ? Boolean(catalogCompanyRaw.calculationByAgreement) : null,
    billingPeriod: catalogCompanyRaw.billingPeriod ? Number(catalogCompanyRaw.billingPeriod) : null,
    deferredPaymentByAgreement: catalogCompanyRaw.deferredPaymentByAgreement ? Boolean(catalogCompanyRaw.deferredPaymentByAgreement) : null,
    defermentOfPayment: catalogCompanyRaw.defermentOfPayment ? Number(catalogCompanyRaw.defermentOfPayment) : null,
    mainLocation: catalogCompanyRaw.mainLocation ? mapLocationRaw(catalogCompanyRaw.mainLocation) : null,
    locations: catalogCompanyRaw.locations ? catalogCompanyRaw.locations.map(mapLocationRaw) : [],
    isVerified: catalogCompanyRaw.isVerified ? Boolean(catalogCompanyRaw.isVerified) : null,
    sellingSpecialistsCount: catalogCompanyRaw.sellingSpecialistsCount ? Number(catalogCompanyRaw.sellingSpecialistsCount) : null,
    searchingSpecialistsCount: catalogCompanyRaw.searchingSpecialistsCount ? Number(catalogCompanyRaw.searchingSpecialistsCount) : null,
    url: catalogCompanyRaw.url ? String(catalogCompanyRaw.url) : null,
  };
}

export function mapCatalogCompany(catalogCompany: CatalogCompany): CatalogCompanyRaw {
  return {
    id: catalogCompany.id ? String(catalogCompany.id) : null,
    createdAt: catalogCompany.createdAt ? catalogCompany.createdAt.toISOString() : null,
    logo: catalogCompany.logo ? String(catalogCompany.logo) : null,
    title: catalogCompany.title ? String(catalogCompany.title) : null,
    specialization: catalogCompany.title ? String(catalogCompany.title) : null,
    website: catalogCompany.website ? String(catalogCompany.website) : null,
    companySize: catalogCompany.companySize ? Number(catalogCompany.companySize) : null,
    yearOfFoundation: catalogCompany.yearOfFoundation ? Number(catalogCompany.yearOfFoundation) : null,
    description: catalogCompany.description ? String(catalogCompany.description) : null,
    isSearchingSpecialists: catalogCompany.isSearchingSpecialists ? Boolean(catalogCompany.isSearchingSpecialists) : null,
    speakingLanguages: null,
    isSellingSpecialists: catalogCompany.isSellingSpecialists ? Boolean(catalogCompany.isSellingSpecialists) : null,
    currencies: null,
    taxationWithVAT: catalogCompany.taxationWithVAT ? Boolean(catalogCompany.taxationWithVAT) : null,
    taxationWithoutVAT: catalogCompany.taxationWithoutVAT ? Boolean(catalogCompany.taxationWithoutVAT) : null,
    jurisdictions: catalogCompany.jurisdictions ? catalogCompany.jurisdictions.map(mapJurisdiction) : null,
    interviewSteps: catalogCompany.interviewSteps ? Number(catalogCompany.interviewSteps) : null,
    calculationByAgreement: catalogCompany.calculationByAgreement ? Boolean(catalogCompany.calculationByAgreement) : null,
    billingPeriod: catalogCompany.billingPeriod ? Number(catalogCompany.billingPeriod) : null,
    deferredPaymentByAgreement: catalogCompany.deferredPaymentByAgreement ? Boolean(catalogCompany.deferredPaymentByAgreement) : null,
    defermentOfPayment: catalogCompany.defermentOfPayment ? Number(catalogCompany.defermentOfPayment) : null,
    mainLocation: catalogCompany.mainLocation ? mapLocation(catalogCompany.mainLocation) : null,
    locations: catalogCompany.locations ? catalogCompany.locations.map(mapLocation) : null,
    isVerified: catalogCompany.isVerified ? Boolean(catalogCompany.isVerified) : null,
    sellingSpecialistsCount: catalogCompany.sellingSpecialistsCount ? Number(catalogCompany.sellingSpecialistsCount) : null,
    searchingSpecialistsCount: catalogCompany.searchingSpecialistsCount ? Number(catalogCompany.searchingSpecialistsCount) : null,
    url: catalogCompany.url ? String(catalogCompany.url) : null,
  };
}
