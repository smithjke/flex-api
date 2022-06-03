import { CatalogCompany, CatalogCompanyRaw, mapCatalogCompany, mapCatalogCompanyRaw } from './catalog-company';
import { Jurisdiction, JurisdictionRaw, mapJurisdictionRaw, mapJurisdiction } from './jurisdiction';
import { Location, LocationRaw, mapLocationRaw, mapLocation } from './location';
import { PlaceholderType } from './placeholder-type';

export type CatalogSpecialist = {
  innerId: number;
  name: string;
  surname: string;
  dob: Date,
  picture: string;
  hourlyRate: number;
  hourlyRateInRubles: number;
  generalGrade: string;
  speakingLanguages: Array<PlaceholderType>;
  availableFrom: Date;
  workLoad: number;
  isWFRemote: boolean;
  isWFInLocalOffice: boolean;
  isWFInAnyOffice: boolean;
  minDuration: number;
  timezone: number;
  totalWorkingMonths: number;
  specializationWorkingMonths: number;
  updatedAt: Date;
  taxationWithVAT: boolean;
  taxationWithoutVAT: boolean;
  id: string;
  years: number;
  currency: PlaceholderType;
  currencies: Array<PlaceholderType>;
  generalSpecialization: PlaceholderType;
  catalogCompany: CatalogCompany;
  generalSkills: Array<PlaceholderType>;
  availableNow: boolean;
  location: Location;
  country: PlaceholderType;
  citizenships: Array<PlaceholderType>;
  heightEducations: Array<PlaceholderType>;
  educations: Array<PlaceholderType>;
  workingExperiences: Array<PlaceholderType>;
  workingIndustries: Array<PlaceholderType>;
  jurisdictions: Array<Jurisdiction>;
  keyWords: Array<string>;
  original: PlaceholderType;
};

export type CatalogSpecialistRaw = {
  innerId: number;
  name: string;
  surname: string;
  dob: string;
  picture: string;
  hourlyRate: number;
  hourlyRateInRubles: number;
  generalGrade: string;
  speakingLanguages: Array<PlaceholderType>;
  availableFrom: string;
  workLoad: number;
  isWFRemote: boolean;
  isWFInLocalOffice: boolean;
  isWFInAnyOffice: boolean;
  minDuration: number;
  timezone: number;
  totalWorkingMonths: number;
  specializationWorkingMonths: number;
  updatedAt: string;
  taxationWithVAT: boolean;
  taxationWithoutVAT: boolean;
  id: string;
  years: number;
  currency: PlaceholderType;
  currencies: Array<PlaceholderType>;
  generalSpecialization: PlaceholderType;
  catalogCompany: CatalogCompanyRaw;
  generalSkills: Array<PlaceholderType>;
  availableNow: boolean;
  location: LocationRaw;
  country: PlaceholderType;
  citizenships: Array<PlaceholderType>;
  hightEducations: Array<PlaceholderType>;
  educations: Array<PlaceholderType>;
  workingExperiences: Array<PlaceholderType>;
  workingIndustries: Array<PlaceholderType>;
  jurisdictions: Array<JurisdictionRaw>;
  keyWords: Array<string>;
  original: PlaceholderType;
};

export function mapCatalogSpecialistRaw(dataRaw: CatalogSpecialistRaw): CatalogSpecialist {
  return {
    innerId: dataRaw.innerId ? Number(dataRaw.innerId) : null,
    name: dataRaw.name ? String(dataRaw.name) : null,
    surname: dataRaw.surname ? String(dataRaw.surname) : null,
    dob: dataRaw.dob ? new Date(dataRaw.dob) : null,
    picture: dataRaw.picture ? String(dataRaw.picture) : null,
    hourlyRate: dataRaw.hourlyRate ? Number(dataRaw.hourlyRate) : null,
    hourlyRateInRubles: dataRaw.hourlyRateInRubles ? Number(dataRaw.hourlyRateInRubles) : null,
    generalGrade: dataRaw.generalGrade ? String(dataRaw.generalGrade) : null,
    speakingLanguages: null,
    availableFrom: dataRaw.availableFrom ? new Date(dataRaw.availableFrom) : null,
    workLoad: dataRaw.workLoad ? Number(dataRaw.workLoad) : null,
    isWFRemote: dataRaw.isWFRemote ? Boolean(dataRaw.isWFRemote) : null,
    isWFInLocalOffice: dataRaw.isWFInLocalOffice ? Boolean(dataRaw.isWFInLocalOffice) : null,
    isWFInAnyOffice: dataRaw.isWFInAnyOffice ? Boolean(dataRaw.isWFInAnyOffice) : null,
    minDuration: dataRaw.minDuration ? Number(dataRaw.minDuration) : null,
    timezone: dataRaw.timezone ? Number(dataRaw.timezone) : null,
    totalWorkingMonths: dataRaw.totalWorkingMonths ? Number(dataRaw.totalWorkingMonths) : null,
    specializationWorkingMonths: dataRaw.specializationWorkingMonths ? Number(dataRaw.specializationWorkingMonths) : null,
    updatedAt: dataRaw.updatedAt ? new Date(dataRaw.updatedAt) : null,
    taxationWithVAT: dataRaw.taxationWithVAT ? Boolean(dataRaw.taxationWithVAT) : null,
    taxationWithoutVAT: dataRaw.taxationWithoutVAT ? Boolean(dataRaw.taxationWithoutVAT) : null,
    id: dataRaw.id ? String(dataRaw.id) : null,
    years: dataRaw.years ? Number(dataRaw.years) : null,
    currency: null,
    currencies: null,
    generalSpecialization: null,
    catalogCompany: dataRaw.catalogCompany ? mapCatalogCompanyRaw(dataRaw.catalogCompany) : null,
    generalSkills: null,
    availableNow: dataRaw.availableNow ? Boolean(dataRaw.availableNow) : null,
    location: dataRaw.location ? mapLocationRaw(dataRaw.location) : null,
    country: null,
    citizenships: null,
    heightEducations: null,
    educations: null,
    workingExperiences: null,
    workingIndustries: null,
    jurisdictions: Array.isArray(dataRaw.jurisdictions) ? dataRaw.jurisdictions.map(mapJurisdictionRaw) : [],
    keyWords: Array.isArray(dataRaw.keyWords) ? dataRaw.keyWords.map((el) => String(el)) : null,
    original: null,
  };
}

export function mapCatalogSpecialist(data: Partial<CatalogSpecialist>): CatalogSpecialistRaw {
  return {
    innerId: data?.innerId,
    name: data?.name,
    surname: data?.surname,
    dob: data.dob ? data.dob.toISOString() : undefined,
    picture: data?.picture,
    hourlyRate: data?.hourlyRate,
    hourlyRateInRubles: data?.hourlyRateInRubles,
    generalGrade: data?.generalGrade,
    speakingLanguages: null,
    availableFrom: data.availableFrom ? data.availableFrom.toISOString() : undefined,
    workLoad: data?.workLoad,
    isWFRemote: data?.isWFRemote,
    isWFInLocalOffice: data?.isWFInLocalOffice,
    isWFInAnyOffice: data?.isWFInAnyOffice,
    minDuration: data?.minDuration,
    timezone: data?.timezone,
    totalWorkingMonths: data?.totalWorkingMonths,
    specializationWorkingMonths: data?.specializationWorkingMonths,
    updatedAt: data.updatedAt ? data.updatedAt.toISOString() : undefined,
    taxationWithVAT: data?.taxationWithVAT,
    taxationWithoutVAT: data?.taxationWithoutVAT,
    id: data?.id,
    years: data?.years,
    currency: null,
    currencies: null,
    generalSpecialization: null,
    catalogCompany: data.catalogCompany ? mapCatalogCompany(data.catalogCompany) : undefined,
    generalSkills: null,
    availableNow: data?.availableNow,
    location: data.location ? mapLocation(data.location) : null,
    country: null,
    citizenships: null,
    hightEducations: null,
    educations: null,
    workingExperiences: null,
    workingIndustries: null,
    jurisdictions: data.jurisdictions ? data.jurisdictions.map(mapJurisdiction) : undefined,
    keyWords: data?.keyWords,
    original: null,
  };
}
