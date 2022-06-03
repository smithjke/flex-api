import { PlaceholderType } from './placeholder-type';

export type WorkingExperience = {
  projectName: string;
  companyName: string;
  responsibilities: string;
  dateFrom: Date;
  dateTo: Date;
  skills: Array<PlaceholderType>;
  specialist: Array<PlaceholderType>;
  workingIndustries: Array<PlaceholderType>;
  specialization: Array<PlaceholderType>;
};

export type WorkingExperienceRaw = {
  projectName: string;
  companyName: string;
  responsibilities: string;
  dateFrom: string;
  dateTo: string;
  skills: Array<PlaceholderType>;
  specialist: Array<PlaceholderType>;
  workingIndustries: Array<PlaceholderType>;
  specialization: Array<PlaceholderType>;
};

export function mapWorkingExperience(data: Partial<WorkingExperience>): WorkingExperienceRaw {
  return {
    projectName: data.projectName,
    companyName: data.companyName,
    responsibilities: data.responsibilities,
    dateFrom: data.dateFrom ? data.dateFrom.toISOString() : undefined,
    dateTo: data.dateTo ? data.dateTo.toISOString() : undefined,
    skills: null,
    specialist: null,
    workingIndustries: null,
    specialization: null,
  };
}

export function mapWorkingExperienceRaw(dataRaw: WorkingExperienceRaw): WorkingExperience {
  return {
    projectName: dataRaw.projectName ? String(dataRaw.projectName) : null,
    companyName: dataRaw.companyName ? String(dataRaw.companyName) : null,
    responsibilities: dataRaw.responsibilities ? String(dataRaw.responsibilities): null,
    dateFrom: dataRaw.dateFrom ? new Date(dataRaw.dateFrom) : null,
    dateTo: dataRaw.dateTo ? new Date(dataRaw.dateTo) : null,
    skills: null,
    specialist: null,
    workingIndustries: null,
    specialization:  null,
  };
}
