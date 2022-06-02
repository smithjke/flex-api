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

export function mapLocationRaw(dataRaw: LocationRaw): Location {
  return {
    cityId: dataRaw.cityId ? String(dataRaw.cityId) : null,
    cityTitle: dataRaw.cityTitle ? String(dataRaw.cityTitle) : null,
    address: dataRaw.address ? String(dataRaw.address) : null,
    email: dataRaw.email ? String(dataRaw.address) : null,
    phone: dataRaw.phone ? String(dataRaw.phone) : null,
  };
}

export function mapLocation(data: Partial<Location>): LocationRaw {
  return {
    cityId: data?.cityId,
    cityTitle: data?.cityTitle,
    address: data?.address,
    email: data?.email,
    phone: data?.phone,
  };
}
