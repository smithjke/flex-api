export type Country = {
  id: string;
  title: string;
  emoji: string;
};

export type CountryRaw = {
  id: string;
  title: string;
  emoji: string;
};

export function mapCountry(data: Country): CountryRaw {
  return {
    id: data.id,
    title: data.title,
    emoji: data.emoji,
  };
}

export function mapCountryRaw(data: CountryRaw): Country {
  return {
    id: data.id ? String(data.id) : null,
    title: data.title ? String(data.title) : null,
    emoji: data.emoji ? String(data.emoji): null,
  };
}
