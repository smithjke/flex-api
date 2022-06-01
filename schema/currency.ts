export type Currency = {
  id: string;
  title: string;
  sign: string;
};

export type CurrencyRaw = {
  id: string;
  title: string;
  sign: string;
};

export function mapCurrency(data: Partial<Currency>): CurrencyRaw {
  return {
    id: data.id,
    title: data.title,
    sign: data.sign,
  };
}

export function mapCurrencyRaw(dataRaw: CurrencyRaw): Currency {
  return {
    id: dataRaw.id ? String(dataRaw.id) : null,
    title: dataRaw.title ? String(dataRaw.title) : null,
    sign: dataRaw.sign ? String(dataRaw.sign) : null,
  };
}
