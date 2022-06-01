export type Citi = {
  id: string;
  title: string;
  timezone: number;
  countryEmoji: string;
}

export type CitiRaw = {
  id: string;
  title: string;
  timezone: number;
  country_emoji: string;
}

export function mapCiti (data:Citi) {
  return {
    id: data.id,
    title: data.title,
    timezone: data.timezone,
    country_emoji: data.countryEmoji,
  }
}

export function mapCitiRaw (data:CitiRaw) {
  return {
    id: data.id,
    title: data.title,
    timezone: data.timezone,
    countryEmoji: data.country_emoji,
  }
}