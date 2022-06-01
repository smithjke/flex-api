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

export function mapJurisdiction(jurisdiction: Jurisdiction): JurisdictionRaw {
  return {
    id: jurisdiction.id ? String(jurisdiction.id) : null,
    title: jurisdiction.title ? String(jurisdiction.title) : null,
    emoji: jurisdiction.emoji ? String(jurisdiction.emoji) : null,
  };
}
