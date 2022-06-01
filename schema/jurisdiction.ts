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

export function mapJurisdictionRaw(jurisdictionRaw: JurisdictionRaw): Jurisdiction {
  return {
    id: jurisdictionRaw.id ? String(jurisdictionRaw.id) : null,
    title: jurisdictionRaw.title ? String(jurisdictionRaw.title) : null,
    emoji: jurisdictionRaw.emoji ? String(jurisdictionRaw.emoji) : null,
  };
}

export function mapJurisdiction(jurisdiction: Partial<Jurisdiction>): JurisdictionRaw {
  return {
    id: jurisdiction?.id,
    title: jurisdiction?.title,
    emoji: jurisdiction?.emoji,
  };
}
