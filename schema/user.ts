export type User = {
  id: string;
  firstName: string;
  picture: string;
  email: string;
  lastName: string;
  phone: string;
  company: string;
  createdAt: Date;
};

export type UserRaw = {
  id: string;
  firstName: string;
  picture: string;
  email: string;
  lastName: string;
  phone: string;
  company: string;
  createdAt: string;
};

export function mapUser(data: Partial<User>): UserRaw {
  return  {
    id: data.id,
    firstName: data.firstName,
    picture: data.picture,
    email: data.email,
    lastName: data.lastName,
    phone: data.phone,
    company: data.company,
    createdAt: data.createdAt ? data.createdAt.toISOString() : undefined,
  };
}

export function mapUserRaw(dataRaw: UserRaw): User {
  return  {
    id: dataRaw.id ? String(dataRaw.id) : null,
    firstName: dataRaw.firstName ? String(dataRaw.firstName) : null,
    picture: dataRaw.picture ? String(dataRaw.picture) : null,
    email: dataRaw.email ? String(dataRaw.email) : null,
    lastName: dataRaw.lastName ? String(dataRaw.lastName) : null,
    phone: dataRaw.phone ? String(dataRaw.phone) : null,
    company: dataRaw.company ? String(dataRaw.company) : null,
    createdAt: dataRaw.createdAt ? new Date(dataRaw.createdAt) : null,
  };
}
