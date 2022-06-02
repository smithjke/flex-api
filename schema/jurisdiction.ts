export type Jurisdiction = {
  id: string;
  title: string;
  emoji: string;
};

export type JurisdictionRaw = {
  id: string;
  title: string;
  emoji: string;
};

export function mapJurisdictionRaw(dataRaw: JurisdictionRaw): Jurisdiction {
  return {
    id: dataRaw.id ? String(dataRaw.id) : null,
    title: dataRaw.title ? String(dataRaw.title) : null,
    emoji: dataRaw.emoji ? String(dataRaw.emoji) : null,
  };
}

export function mapJurisdiction(data: Partial<Jurisdiction>): JurisdictionRaw {
  return {
    id: data?.id,
    title: data?.title,
    emoji: data?.emoji,
  };
}
