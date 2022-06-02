import { JurisdictionRaw, mapJurisdictionRaw, mapJurisdiction, Jurisdiction } from './jurisdiction';
import { PlaceholderType } from './placeholder-type';

export type CatalogSpecialistRequest = {
  billingPeriod: number;
  calculationByAgreement: boolean,
  defermentOfPayment: number;
  deferredPaymentByAgreement: boolean,
  description: string,
  endDate: Date;
  grade: number;
  hourlyRate: number;
  interviewSteps: number;
  isAvailableHR: boolean;
  isNeededRightNow: boolean;
  isPossibleContinue: boolean;
  isTaxesIncludedHR: boolean;
  isWFOffice: boolean;
  isWFRemote: boolean;
  maxTZ: number;
  minSpecializationExperience: number;
  minTZ: number;
  speakingLanguages: Array<PlaceholderType>;
  specialistsCount: number;
  startDate: Date;
  tasks: string;
  taxationWithVAT: boolean;
  taxationWithoutVAT: boolean;
  workLoad: number;
  citizenships: Array<PlaceholderType>;
  currencies: Array<PlaceholderType>;
  currency: PlaceholderType;
  id: string;
  jurisdictions: Array<Jurisdiction>;
  locations: Array<PlaceholderType>;
  skills: Array<PlaceholderType>;
  specialization: Array<PlaceholderType>;
};

export type CatalogSpecialistRequestRaw = {
  billingPeriod: number;
  calculationByAgreement: boolean,
  defermentOfPayment: number;
  deferredPaymentByAgreement: boolean,
  description: string,
  endDate: string;
  grade: number;
  hourlyRate: number;
  interviewSteps: number;
  isAvailableHR: boolean;
  isNeededRightNow: boolean;
  isPossibleContinue: boolean;
  isTaxesInludedHR: boolean;
  isWFOffice: boolean;
  isWFRemote: boolean;
  maxTZ: number;
  minSpecializationExperience: number;
  minTZ: number;
  speakingLanguages: Array<PlaceholderType>;
  specialistsCount: number;
  startDate: string;
  tasks: string;
  taxationWithVAT: boolean;
  taxationWithoutVAT: boolean;
  workLoad: number;
  citizenships: Array<PlaceholderType>;
  currencies: Array<PlaceholderType>;
  currency: PlaceholderType;
  id: string;
  jurisdictions: Array<JurisdictionRaw>;
  locations: Array<PlaceholderType>;
  skills: Array<PlaceholderType>;
  specialization: Array<PlaceholderType>;
};

export function mapCatalogSpecialistRequestRaw(dataRaw: CatalogSpecialistRequestRaw): CatalogSpecialistRequest{
  return {
    billingPeriod: dataRaw.billingPeriod ? Number(dataRaw.billingPeriod) : null,
    calculationByAgreement: dataRaw.calculationByAgreement ? Boolean(dataRaw.calculationByAgreement) : null,
    defermentOfPayment: dataRaw.defermentOfPayment ? Number(dataRaw.defermentOfPayment) : null,
    deferredPaymentByAgreement: dataRaw.deferredPaymentByAgreement ? Boolean(dataRaw.deferredPaymentByAgreement) : null,
    description: dataRaw.description ? String(dataRaw.description) : null,
    endDate: dataRaw.endDate ? new Date(dataRaw.endDate) : null,
    grade: dataRaw.grade ? Number(dataRaw.grade) : null,
    hourlyRate: dataRaw.hourlyRate ? Number(dataRaw.hourlyRate) : null,
    interviewSteps: dataRaw.interviewSteps ? Number(dataRaw.interviewSteps) : null,
    isAvailableHR: dataRaw.isAvailableHR ? Boolean(dataRaw.isAvailableHR) : null,
    isNeededRightNow: dataRaw.isNeededRightNow ? Boolean(dataRaw.isNeededRightNow) : null,
    isPossibleContinue: dataRaw.isPossibleContinue ? Boolean(dataRaw.isPossibleContinue) : null,
    isTaxesIncludedHR: dataRaw.isTaxesInludedHR ? Boolean(dataRaw.isTaxesInludedHR) : null,
    isWFOffice: dataRaw.isWFOffice ? Boolean(dataRaw.isWFOffice) : null,
    isWFRemote: dataRaw.isWFRemote ? Boolean(dataRaw.isWFRemote) : null,
    maxTZ: dataRaw.maxTZ ? Number(dataRaw.maxTZ) : null,
    minSpecializationExperience: dataRaw.minSpecializationExperience ? Number(dataRaw.minSpecializationExperience) : null,
    minTZ: dataRaw.minTZ ? Number(dataRaw.minTZ) : null,
    speakingLanguages: null,
    specialistsCount: dataRaw.specialistsCount ? Number(dataRaw.specialistsCount) : null,
    startDate: dataRaw.startDate ? new Date(dataRaw.startDate) : null,
    tasks: dataRaw.tasks ? String(dataRaw.tasks) : null,
    taxationWithVAT: dataRaw.taxationWithVAT ? Boolean(dataRaw.taxationWithVAT) : null,
    taxationWithoutVAT: dataRaw.taxationWithoutVAT ? Boolean(dataRaw.taxationWithoutVAT) : null,
    workLoad: dataRaw.workLoad ? Number(dataRaw.workLoad) : null,
    citizenships: null,
    currencies: null,
    currency: null,
    id: dataRaw.id ? String(dataRaw.id) : null,
    jurisdictions: Array.isArray(dataRaw.jurisdictions) ? dataRaw.jurisdictions.map(mapJurisdictionRaw) : [],
    locations: null,
    skills: null,
    specialization: null,
  };
}

export function mapCatalogSpecialistRequest(data: Partial<CatalogSpecialistRequest>): CatalogSpecialistRequestRaw {
  return {
    billingPeriod: data?.billingPeriod,
    calculationByAgreement: data?.calculationByAgreement,
    defermentOfPayment: data?.defermentOfPayment,
    deferredPaymentByAgreement: data?.deferredPaymentByAgreement,
    description: data?.description,
    endDate: data.endDate ? data.endDate.toISOString() : undefined,
    grade: data?.grade,
    hourlyRate: data?.hourlyRate,
    interviewSteps: data?.interviewSteps,
    isAvailableHR: data?.isAvailableHR,
    isNeededRightNow: data?.isNeededRightNow,
    isPossibleContinue: data?.isPossibleContinue,
    isTaxesInludedHR: data?.isTaxesIncludedHR,
    isWFOffice: data?.isWFOffice,
    isWFRemote: data?.isWFRemote,
    maxTZ: data?.maxTZ,
    minSpecializationExperience: data?.minSpecializationExperience,
    minTZ: data?.minTZ,
    speakingLanguages: null,
    specialistsCount: data?.specialistsCount,
    startDate: data.startDate ? data.startDate.toISOString() : null,
    tasks: data?.tasks,
    taxationWithVAT: data?.taxationWithVAT,
    taxationWithoutVAT: data?.taxationWithoutVAT,
    workLoad: data?.workLoad,
    citizenships: null,
    currencies: null,
    currency: null,
    id: data?.id,
    jurisdictions: data.jurisdictions ? data.jurisdictions.map(mapJurisdiction) : undefined,
    locations: null,
    skills: null,
    specialization: null,
  };
}
