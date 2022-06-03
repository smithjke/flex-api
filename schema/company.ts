import { Jurisdiction, JurisdictionRaw, mapJurisdictionRaw, mapJurisdiction } from './jurisdiction';
import { Location, LocationRaw, mapLocationRaw, mapLocation } from './location';
import { PlaceholderType } from './placeholder-type';

export type Company = {
  id: string;
  published: string;
  logo: string;
  title: string;
  synonyms: Array<string>;
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
  jurisdictions: Array<Jurisdiction>;
  interviewSteps: number;
  calculationByAgreement: boolean;
  billingPeriod: number;
  deferredPaymentByAgreement: boolean;
  defermentOfPayment: number;
  mainLocation: Location;
  locations: Array<Location>;
  publishedAt: Date;
  isVerified: boolean;
  updatedAt: Date;
  administrator: PlaceholderType;
};

export type CompanyRaw = {
  id: string;
  published: string;
  logo: string;
  title: string;
  synonims: Array<string>;
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
  jurisdictions: Array<JurisdictionRaw>;
  interviewSteps: number;
  calculationByAgreement: boolean;
  billingPeriod: number;
  deferredPaymentByAgreement: boolean;
  defermentOfPayment: number;
  mainLocation: LocationRaw;
  locations: Array<LocationRaw>;
  publishedAt: string;
  isVerified: boolean;
  updatedAt: string;
  administrator: PlaceholderType;
};

export function mapCompanyRaw(dataRaw: CompanyRaw): Company {
  return {
    id: dataRaw.id ? String(dataRaw.id) : null,
    published: dataRaw.published ? String(dataRaw.published) : null,
    logo: dataRaw.logo ? String(dataRaw.logo) : null,
    title: dataRaw.title ? String(dataRaw.title) : null,
    synonyms: Array.isArray(dataRaw.synonims) ? dataRaw.synonims.map(el => String(el)) : null,
    specialization: dataRaw.specialization ? dataRaw.specialization : null,
    website: dataRaw.website ? String(dataRaw.website) : null,
    companySize: dataRaw.companySize ? Number(dataRaw.companySize) : null,
    yearOfFoundation: dataRaw.yearOfFoundation ? Number(dataRaw.yearOfFoundation) : null,
    description: dataRaw.description ? String(dataRaw.description) : null,
    isSearchingSpecialists: dataRaw.isSearchingSpecialists ? Boolean(dataRaw.isSearchingSpecialists) : null,
    speakingLanguages: null,
    isSellingSpecialists: dataRaw.isSellingSpecialists ? Boolean(dataRaw.isSellingSpecialists) : null,
    currencies: null,
    taxationWithVAT: dataRaw.taxationWithVAT ? Boolean(dataRaw.taxationWithVAT) : null,
    taxationWithoutVAT: dataRaw.taxationWithoutVAT ? Boolean(dataRaw.taxationWithoutVAT) : null,
    jurisdictions: Array.isArray(dataRaw.jurisdictions) ? dataRaw.jurisdictions.map(mapJurisdictionRaw) : [],
    interviewSteps: dataRaw.interviewSteps ? Number(dataRaw.interviewSteps) : null,
    calculationByAgreement: dataRaw.calculationByAgreement ? Boolean(dataRaw.calculationByAgreement) : null,
    billingPeriod: dataRaw.billingPeriod ? Number(dataRaw.billingPeriod) : null,
    deferredPaymentByAgreement: dataRaw.deferredPaymentByAgreement ? Boolean(dataRaw.deferredPaymentByAgreement) : null,
    defermentOfPayment: dataRaw.defermentOfPayment ? Number(dataRaw.defermentOfPayment) : null,
    mainLocation: dataRaw.mainLocation ? mapLocationRaw(dataRaw.mainLocation) : null,
    locations: Array.isArray(dataRaw.locations) ? dataRaw.locations.map(mapLocationRaw) : [],
    publishedAt: dataRaw.publishedAt ? new Date(dataRaw.publishedAt) : null,
    isVerified: dataRaw.isVerified ? Boolean(dataRaw.isVerified) : null,
    updatedAt: dataRaw.updatedAt ? new Date(dataRaw.updatedAt) : null,
    administrator: null,
  };
}

export function mapCompany(data: Partial<Company>): CompanyRaw {
  return {
    id: data?.id,
    published: data?.published,
    logo: data?.logo,
    title: data?.title,
    synonims: data?.synonyms,
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
    publishedAt: data.publishedAt ? data.publishedAt.toISOString() : undefined,
    isVerified: data?.isVerified,
    updatedAt: data.updatedAt ? data.updatedAt.toISOString() : undefined,
    administrator: null,
  };
}
