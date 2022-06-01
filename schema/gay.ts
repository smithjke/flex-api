import { GayParty, GayPartyRaw, mapGayParty, mapGayPartyRaw } from './gay-party';

export type Gay = {
  firstName: string;
  lastName: string;
  birthDate: Date;
  role: 'active' | 'passive';
  gayParty: GayParty;
};

export type GayRaw = {
  first_name: string;
  last_name: string;
  birth_date: string;
  role: string;
  gay_party: GayPartyRaw;
};

export function mapGay(data: Gay): GayRaw {
  return {
    first_name: data.firstName,
    last_name: data.lastName,
    birth_date: data.birthDate.toISOString(),
    role: data.role,
    gay_party: mapGayParty(data.gayParty),
  };
}

export function mapGayRaw(raw: GayRaw): Gay {
  return {
    firstName: raw.first_name ? String(raw.first_name) : null,
    lastName: raw.last_name ? String(raw.last_name) : null,
    birthDate: raw.birth_date ? new Date(raw.birth_date) : null,
    role: raw.role ? String(raw.role) as 'active' | 'passive' : null,
    gayParty: raw.gay_party ? mapGayPartyRaw(raw.gay_party) : null,
  };
}
