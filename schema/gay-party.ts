export type GayParty = {
  id: number;
  title: string;
  createdAt: Date;
};

export type GayPartyRaw = {
  id: number;
  title: string;
  created_at: string;
};

export function mapGayParty(data: GayParty): GayPartyRaw {
  return {
    id: data.id,
    title: data.title,
    created_at: data.createdAt.toISOString(),
  };
}

export function mapGayPartyRaw(raw: GayPartyRaw): GayParty {
  return {
    id: raw.id ? Number(raw.id) : null,
    title: raw.id ? String(raw.id) : null,
    createdAt: raw.id ? new Date(raw.id) : null,
  };
}
