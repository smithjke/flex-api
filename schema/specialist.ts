import { PlaceholderType } from './placeholder-type';

export type Specialist = {
  archievedAt: Date;
  availableFrom: Date;
  citizenships: Array<PlaceholderType>;
  company: Array<PlaceholderType>;
  currency: Array<PlaceholderType>;
  dob: Date;
  educations: Array<PlaceholderType>;
  generalGrade: number;
  generalSkills: Array<PlaceholderType>;
  generalSpecialization: Array<PlaceholderType>;
  hightEducations: Array<PlaceholderType>;
  hourlyRate: number;
  innerId: number;
  isDeleted: boolean;
  isWFInAnyOffice: boolean;
  isWFInLocalOffice: boolean;
  isWFRemote: boolean;
  location: Array<PlaceholderType>;
  minDuration: number;
  name: string;
  picture: string;
  published: Array<PlaceholderType>;
  publishedAt: Date;
  speakingLanguages: Array<PlaceholderType>;
  status: number;
  surname: string;
  workLoad: number;
  workingExperiences: Array<PlaceholderType>;
  workingIndustries: Array<PlaceholderType>;
};

export type SpecialistRaw = {
  archievedAt: string;
  availableFrom: string;
  citizenships: Array<PlaceholderType>;
  company: Array<PlaceholderType>;
  currency: Array<PlaceholderType>;
  dob: string;
  educations: Array<PlaceholderType>;
  generalGrade: number;
  generalSkills: Array<PlaceholderType>;
  generalSpecialization: Array<PlaceholderType>;
  hightEducations: Array<PlaceholderType>;
  hourlyRate: number;
  innerId: number;
  isDeleted: boolean;
  isWFInAnyOffice: boolean;
  isWFInLocalOffice: boolean;
  isWFRemote: boolean;
  location: Array<PlaceholderType>;
  minDuration: number;
  name: string;
  picture: string;
  published: Array<PlaceholderType>;
  publishedAt: string;
  speakingLanguages: Array<PlaceholderType>;
  status: number;
  surname: string;
  workLoad: number;
  workingExperiences: Array<PlaceholderType>;
  workingIndustries: Array<PlaceholderType>;
};

export function mapSpecialist(data: Partial<Specialist>): SpecialistRaw {
  return {
    archievedAt: data.archievedAt ? data.archievedAt.toISOString() : undefined,
    availableFrom: data.availableFrom ? data.availableFrom.toISOString() : undefined,
    citizenships: null,
    company: null,
    currency: null,
    dob: data.dob ? data.dob.toISOString() : undefined,
    educations: null,
    generalGrade: data.generalGrade,
    generalSkills: null,
    generalSpecialization: null,
    hightEducations: null,
    hourlyRate: data.hourlyRate,
    innerId: data.innerId,
    isDeleted: data.isDeleted,
    isWFInAnyOffice: data.isWFInAnyOffice,
    isWFInLocalOffice: data.isWFInLocalOffice,
    isWFRemote: data.isWFRemote,
    location: null,
    minDuration: data.minDuration,
    name: data.name,
    picture: data.picture,
    published: null,
    publishedAt: data.publishedAt ? data.publishedAt.toISOString() : undefined,
    speakingLanguages: null,
    status: data.status,
    surname: data.surname,
    workLoad: data.workLoad,
    workingExperiences: null,
    workingIndustries: null,
  };
}

export function mapSpecialistRaw(dataRaw: SpecialistRaw): Specialist {
  return {
    archievedAt: dataRaw.archievedAt ? new Date(dataRaw.archievedAt) : null,
    availableFrom: dataRaw.availableFrom ? new Date(dataRaw.availableFrom) : null,
    citizenships: null,
    company: null,
    currency: null,
    dob: dataRaw.dob ? new Date(dataRaw.dob) : null,
    educations: null,
    generalGrade: dataRaw.generalGrade ? Number(dataRaw.generalGrade) : null,
    generalSkills: null,
    generalSpecialization: null,
    hightEducations: null,
    hourlyRate: dataRaw.hourlyRate ? Number(dataRaw.hourlyRate) : null,
    innerId:  dataRaw.innerId ? Number(dataRaw.innerId) : null,
    isDeleted: dataRaw.isDeleted ? Boolean(dataRaw.isDeleted) : null,
    isWFInAnyOffice:dataRaw.isWFInAnyOffice ? Boolean(dataRaw.isWFInAnyOffice) : null,
    isWFInLocalOffice: dataRaw.isWFInLocalOffice ? Boolean(dataRaw.isWFInLocalOffice) : null,
    isWFRemote:dataRaw.isWFRemote ? Boolean(dataRaw.isWFRemote) : null,
    location: null,
    minDuration: dataRaw.minDuration ? Number(dataRaw.minDuration) : null,
    name: dataRaw.name ? String(dataRaw.name) : null,
    picture: dataRaw.picture ? String(dataRaw.picture) : null,
    published: null,
    publishedAt: dataRaw.publishedAt ? new Date(dataRaw.publishedAt) : null,
    speakingLanguages: null,
    status: dataRaw.status ? Number(dataRaw.status) : null,
    surname: dataRaw.surname ? String(dataRaw.surname) : null,
    workLoad: dataRaw.workLoad ? Number(dataRaw.workLoad) : null,
    workingExperiences: null,
    workingIndustries: null,
  };
}
