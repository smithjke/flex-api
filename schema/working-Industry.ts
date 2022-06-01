export type WorkingIndustry = {
  id: string;
  title: string;
};

export type WorkingIndustryRaw = {
  id: string;
  title: string;
};

export function mapWorkingIndustry(data: Partial<WorkingIndustry>): WorkingIndustryRaw {
  return {
    id: data.id,
    title: data.title,
  };
}

export function mapWorkingIndustryRaw(dataRaw: WorkingIndustryRaw): WorkingIndustry {
  return {
    id: dataRaw.id ? String(dataRaw.id) : null,
    title: dataRaw.title ? String(dataRaw.title) : null,
  };
}
