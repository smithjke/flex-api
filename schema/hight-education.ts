export type HightEducation = {
  id: string;
  hei: string;
  faculty: string;
  achievements: string;
  startDate: Date;
  endDate: Date;
};

export type HightEducationRaw = {
  id: string;
  hei: string;
  faculty: string;
  achievements: string;
  startDate: string;
  endDate: string;
};

export function mapHightEducation(data: Partial<HightEducation>): HightEducationRaw {
  return {
    id: data.id,
    hei: data.hei,
    faculty: data.faculty,
    achievements: data.achievements,
    startDate: data.startDate ? data.startDate.toISOString() : undefined,
    endDate: data.endDate ? data.endDate.toISOString() : undefined,
  };
}

export function mapHightEducationRaw(dataRaw: HightEducationRaw): HightEducation {
  return {
    id: dataRaw.id ? String(dataRaw.id) : null,
    hei: dataRaw.hei ? String(dataRaw.hei) : null,
    faculty: dataRaw.faculty ? String(dataRaw.faculty) : null,
    achievements: dataRaw.achievements ? String(dataRaw.achievements) : null,
    startDate: dataRaw.startDate ? new Date(dataRaw.startDate) : null,
    endDate: dataRaw.endDate ? new Date(dataRaw.endDate) : null,
  };
}
