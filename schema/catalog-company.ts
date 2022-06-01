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

export function mapCatalogCompanyRaw(dataRow: CatalogCompanyRaw): CatalogCompany {
  return {
    id: dataRow.id ? String(dataRow.id) : null,
    createdAt: dataRow.createdAt ? new Date(dataRow.createdAt) : null,
    logo: dataRow.logo ? String(dataRow.logo) : null,
    title: dataRow.title ? String(dataRow.title) : null,
    specialization: dataRow.specialization ? String(dataRow.specialization) : null,
    website: dataRow.website ? String(dataRow.website) : null,
    companySize: dataRow.companySize ? Number(dataRow.companySize) : null,
    yearOfFoundation: dataRow.yearOfFoundation ? Number(dataRow.yearOfFoundation) : null,
    description: dataRow.description ? String(dataRow.description) : null,
    isSearchingSpecialists: dataRow.isSearchingSpecialists ? Boolean(dataRow.isSearchingSpecialists) : null,
    speakingLanguages: null,
    isSellingSpecialists: dataRow.isSellingSpecialists ? Boolean(dataRow.isSellingSpecialists) : null,
    currencies: null,
    taxationWithVAT: dataRow.taxationWithVAT ? Boolean(dataRow.taxationWithVAT) : null,
    taxationWithoutVAT: dataRow.taxationWithoutVAT ? Boolean(dataRow.taxationWithoutVAT) : null,
    jurisdictions: Array.isArray(dataRow.jurisdictions) ? dataRow.jurisdictions.map(mapJurisdictionRaw) : [],
    interviewSteps: dataRow.interviewSteps ? Number(dataRow.interviewSteps) : null,
    calculationByAgreement: dataRow.calculationByAgreement ? Boolean(dataRow.calculationByAgreement) : null,
    billingPeriod: dataRow.billingPeriod ? Number(dataRow.billingPeriod) : null,
    deferredPaymentByAgreement: dataRow.deferredPaymentByAgreement ? Boolean(dataRow.deferredPaymentByAgreement) : null,
    defermentOfPayment: dataRow.defermentOfPayment ? Number(dataRow.defermentOfPayment) : null,
    mainLocation: dataRow.mainLocation ? mapLocationRaw(dataRow.mainLocation) : null,
    locations: Array.isArray(dataRow.locations) ? dataRow.locations.map(mapLocationRaw) : [],
    isVerified: dataRow.isVerified ? Boolean(dataRow.isVerified) : null,
    sellingSpecialistsCount: dataRow.sellingSpecialistsCount ? Number(dataRow.sellingSpecialistsCount) : null,
    searchingSpecialistsCount: dataRow.searchingSpecialistsCount ? Number(dataRow.searchingSpecialistsCount) : null,
    url: dataRow.url ? String(dataRow.url) : null,
  };
}

export function mapCatalogCompany(data: Partial<CatalogCompany>): CatalogCompanyRaw {
  return {
    id: data?.id,
    createdAt: data.createdAt ? data.createdAt.toISOString() : undefined,
    logo: data?.logo,
    title: data?.title,
    specialization: data?.specialization,
    website: data?.website,
    companySize: data?.companySize,
    yearOfFoundation: data?.yearOfFoundation,
    description: data?.description,
    isSearchingSpecialists: data?.isSearchingSpecialists,
    speakingLanguages: null,
    isSellingSpecialists: data?.isSellingSpecialists,
    currencies: null,
    taxationWithVAT: data?.taxationWithVAT,
    taxationWithoutVAT: data?.taxationWithoutVAT,
    jurisdictions: data.jurisdictions ? data.jurisdictions.map(mapJurisdiction) : undefined,
    interviewSteps: data?.interviewSteps,
    calculationByAgreement: data?.calculationByAgreement,
    billingPeriod: data?.billingPeriod,
    deferredPaymentByAgreement: data?.deferredPaymentByAgreement,
    defermentOfPayment: data?.defermentOfPayment,
    mainLocation: data.mainLocation ? mapLocation(data.mainLocation) : undefined,
    locations: data.locations ? data.locations.map(mapLocation) : undefined,
    isVerified: data?.isVerified,
    sellingSpecialistsCount: data?.sellingSpecialistsCount,
    searchingSpecialistsCount: data?.searchingSpecialistsCount,
    url: data?.url,
  };
}
