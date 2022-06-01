export type Location = {
  cityId: string;
  cityTitle: string;
  address: string;
  email: string;
  phone: string;
};

export type LocationRaw = {
  cityId: string;
  cityTitle: string;
  address: string;
  email: string;
  phone: string;
};

export function mapLocationRaw(locationRaw: LocationRaw): Location {
  return {
    cityId: locationRaw.cityId ? String(locationRaw.cityId) : null,
    cityTitle: locationRaw.cityTitle ? String(locationRaw.cityTitle) : null,
    address: locationRaw.address ? String(locationRaw.address) : null,
    email: locationRaw.email ? String(locationRaw.address) : null,
    phone: locationRaw.phone ? String(locationRaw.phone) : null,
  };
}

export function mapLocation(location: Location): LocationRaw {
  return {
    cityId: location.cityId ? String(location.cityId) : null,
    cityTitle: location.cityTitle ? String(location.cityTitle) : null,
    address: location.address ? String(location.address) : null,
    email: location.email ? String(location.email) : null,
    phone: location.phone ? String(location.phone) : null,
  };
}