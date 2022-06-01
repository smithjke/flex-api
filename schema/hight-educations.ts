export type HightEducations = {
  id: string;
  hei: string;
  faculty: string;
  achievements: string;
  startDate: Date;
  endDate: Date;
};

export type HightEducationsRaw = {
  id: string;
  hei: string;
  faculty: string;
  achievements: string;
  startDate: string;
  endDate: string;
};

export function mapHightEducations(data: Partial<HightEducations>): HightEducationsRaw {
  return {
    id: data.id,
    hei: data.hei,
    faculty: data.faculty,
    achievements: data.achievements,
    startDate: data.startDate ? data.startDate.toISOString() : undefined,
    endDate: data.endDate ? data.endDate.toISOString() : undefined,
  };
}

export function mapHightEducationsRaw(dataRaw: HightEducationsRaw): HightEducations {
  return {
    id: dataRaw.id ? dataRaw.id : null,
    hei: dataRaw.hei ? dataRaw.hei : null,
    faculty: dataRaw.faculty ? dataRaw.faculty : null,
    achievements: dataRaw.achievements ? dataRaw.achievements : null,
    startDate: dataRaw.startDate ? new Date(dataRaw.startDate) : null,
    endDate: dataRaw.endDate ? new Date(dataRaw.endDate) : null,
  };
}
