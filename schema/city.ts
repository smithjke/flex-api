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

export function mapCity(data: City) {
  return {
    id: data.id,
    title: data.title,
    timezone: data.timezone,
    countryEmoji: data.countryEmoji,
  };
}

export function mapCityRaw(data: CityRaw) {
  return {
    id: data.id ? data.id : null,
    title: data.title ? data.title : null,
    timezone: data.timezone ? data.timezone : null,
    countryEmoji: data.countryEmoji ? data.countryEmoji : null,
  };
}
