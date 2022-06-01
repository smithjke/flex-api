export type City = {
  id: string;
  title: string;
  timezone: number;
  countryEmoji: string;
};

export type CityRaw = {
  id: string;
  title: string;
  timezone: number;
  countryEmoji: string;
};

export function mapCity(data: Partial<City>): CityRaw {
  return {
    id: data.id,
    title: data.title,
    timezone: data.timezone,
    countryEmoji: data.countryEmoji,
  };
}

export function mapCityRaw(data: CityRaw): City {
  return {
    id: data.id ? String(data.id) : null,
    title: data.title ? String(data.title) : null,
    timezone: data.timezone ? Number(data.timezone) : null,
    countryEmoji: data.countryEmoji ? String(data.countryEmoji) : null,
  };
}
