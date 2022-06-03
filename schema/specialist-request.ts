import { PlaceholderType } from './placeholder-type';

export type SpecialistRequest = {
  archievedAt: Date;
  billingPeriod: number;
  calculationByAgreement: boolean;
  citizenships: Array<PlaceholderType>;
  company: Array<PlaceholderType>;
  currencies: Array<PlaceholderType>;
  currency: Array<PlaceholderType>;
  defermentOfPayment: number;
  deferredPaymentByAgreement: boolean;
  description: string;
  endDate: Date;
  grade: number;
  hourlyRate: number;
  innerId: number;
  interviewSteps: number;
  isAvailableHR: boolean;
  isDeleted: boolean;
  isNeededRightNow: boolean;
  isPossibleContinue: boolean;
  isTaxesInludedHR: boolean;
  isWFOffice: boolean;
  isWFRemote: boolean;
  jurisdictions: Array<PlaceholderType>;
  locations: Array<PlaceholderType>;
  maxTZ: number;
  minSpecializationExperience: number;
  minTZ: number;
  projectDuration: number;
  published: Array<PlaceholderType>;
  publishedAt: Date;
  skills: Array<PlaceholderType>;
  speakingLanguages: Array<PlaceholderType>;
  specialistsCount: number;
  specialization: Array<PlaceholderType>;
  startDate: Date;
  status: number;
  tasks: string;
  taxationWithVAT: boolean;
  taxationWithoutVAT: boolean;
  workLoad: number;
};

export type SpecialistRequestRaw = {
  archievedAt: string;
  billingPeriod: number;
  calculationByAgreement: boolean;
  citizenships: Array<PlaceholderType>;
  company: Array<PlaceholderType>;
  currencies: Array<PlaceholderType>;
  currency: Array<PlaceholderType>;
  defermentOfPayment: number;
  deferredPaymentByAgreement: boolean;
  description: string;
  endDate: string;
  grade: number;
  hourlyRate: number;
  innerId: number;
  interviewSteps: number;
  isAvailableHR: boolean;
  isDeleted: boolean;
  isNeededRightNow: boolean;
  isPossibleContinue: boolean;
  isTaxesInludedHR: boolean;
  isWFOffice: boolean;
  isWFRemote: boolean;
  jurisdictions: Array<PlaceholderType>;
  locations: Array<PlaceholderType>;
  maxTZ: number;
  minSpecializationExperience: number;
  minTZ: number;
  projectDuration: number;
  published: Array<PlaceholderType>
  publishedAt: string;
  skills: Array<PlaceholderType>;
  speakingLanguages: Array<PlaceholderType>;
  specialistsCount: number;
  specialization: Array<PlaceholderType>;
  startDate: string;
  status: number;
  tasks: string;
  taxationWithVAT: boolean;
  taxationWithoutVAT: boolean;
  workLoad: number;
};

export function mapSpecialistRequest(data: Partial<SpecialistRequest>): SpecialistRequestRaw {
  return {
    archievedAt: data.archievedAt ? data.archievedAt.toISOString() : undefined,
    billingPeriod: data.billingPeriod,
    calculationByAgreement: data.calculationByAgreement,
    citizenships: null,
    company: null,
    currencies: null,
    currency: null,
    defermentOfPayment: data.defermentOfPayment,
    deferredPaymentByAgreement: data.deferredPaymentByAgreement,
    description: data.description,
    endDate: data.endDate ? data.endDate.toISOString() : undefined,
    grade: data.grade,
    hourlyRate: data.hourlyRate,
    innerId: data.innerId,
    interviewSteps: data.interviewSteps,
    isAvailableHR: data.isAvailableHR,
    isDeleted: data.isDeleted,
    isNeededRightNow: data.isNeededRightNow,
    isPossibleContinue: data.isPossibleContinue,
    isTaxesInludedHR: data.isTaxesInludedHR,
    isWFOffice: data.isWFOffice,
    isWFRemote: data.isWFRemote,
    jurisdictions: null,
    locations: null,
    maxTZ: data.maxTZ,
    minSpecializationExperience: data.minSpecializationExperience,
    minTZ: data.minTZ,
    projectDuration: data.projectDuration,
    published: null,
    publishedAt: data.publishedAt ? data.publishedAt.toISOString() : undefined,
    skills: null,
    speakingLanguages: null,
    specialistsCount: data.specialistsCount,
    specialization: null,
    startDate: data.startDate ? data.startDate.toISOString() : undefined,
    status: data.status,
    tasks: data.tasks,
    taxationWithVAT: data.taxationWithVAT,
    taxationWithoutVAT: data.taxationWithoutVAT,
    workLoad: data.workLoad,
  };
}

export function mapSpecialistRequestRaw(dataRaw: SpecialistRequestRaw): SpecialistRequest {
  return {
    archievedAt: dataRaw.archievedAt ? new Date(dataRaw.archievedAt) : null,
    billingPeriod: dataRaw.billingPeriod ? Number(dataRaw.billingPeriod) : null,
    calculationByAgreement: dataRaw.calculationByAgreement ? Boolean(dataRaw.calculationByAgreement) : null,
    citizenships: null,
    company: null,
    currencies: null,
    currency: null,
    defermentOfPayment: dataRaw.defermentOfPayment ? Number(dataRaw.defermentOfPayment) : null,
    deferredPaymentByAgreement: dataRaw.deferredPaymentByAgreement ? Boolean(dataRaw.deferredPaymentByAgreement) : null,
    description: dataRaw.defermentOfPayment ? String(dataRaw.defermentOfPayment) : null,
    endDate: dataRaw.endDate ? new Date(dataRaw.endDate) : null,
    grade: dataRaw.grade ? Number(dataRaw.grade) : null,
    hourlyRate: dataRaw.hourlyRate ? Number(dataRaw.hourlyRate) : null,
    innerId: dataRaw.innerId ? Number(dataRaw.innerId) : null,
    interviewSteps: dataRaw.interviewSteps ? Number(dataRaw.interviewSteps) : null,
    isAvailableHR: dataRaw.isAvailableHR ? Boolean(dataRaw.isAvailableHR) : null,
    isDeleted: dataRaw.isDeleted ? Boolean(dataRaw.isDeleted) : null,
    isNeededRightNow: dataRaw.isNeededRightNow ? Boolean(dataRaw.isNeededRightNow) : null,
    isPossibleContinue: dataRaw.isPossibleContinue ? Boolean(dataRaw.isPossibleContinue) : null,
    isTaxesInludedHR: dataRaw.isTaxesInludedHR ? Boolean(dataRaw.isTaxesInludedHR) : null,
    isWFOffice: dataRaw.isWFOffice ? Boolean(dataRaw.isWFOffice) : null,
    isWFRemote: dataRaw.isWFRemote ? Boolean(dataRaw.isWFRemote) : null,
    jurisdictions: null,
    locations: null,
    maxTZ: dataRaw.maxTZ ? Number(dataRaw.maxTZ) : null,
    minSpecializationExperience: dataRaw.minSpecializationExperience ? Number(dataRaw.minSpecializationExperience) : null,
    minTZ: dataRaw.minTZ ? Number(dataRaw.minTZ) : null,
    projectDuration: dataRaw.projectDuration ? Number(dataRaw.projectDuration) : null,
    published: null,
    publishedAt: dataRaw.publishedAt ? new Date(dataRaw.publishedAt) : null,
    skills: null,
    speakingLanguages: null,
    specialistsCount: dataRaw.specialistsCount ? Number(dataRaw.specialistsCount) : null,
    specialization: null,
    startDate: dataRaw.startDate ? new Date(dataRaw.startDate) : null,
    status: dataRaw.status ? Number(dataRaw.status) : null,
    tasks: dataRaw.tasks ? String(dataRaw.tasks) : null,
    taxationWithVAT: dataRaw.taxationWithVAT ? Boolean(dataRaw.taxationWithVAT) : null,
    taxationWithoutVAT: dataRaw.taxationWithoutVAT ? Boolean(dataRaw.taxationWithoutVAT) : null,
    workLoad: dataRaw.workLoad ? Number(dataRaw.workLoad) : null,
  };
}