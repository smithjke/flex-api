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

export function mapCurrencyRaw(data: Currency): CurrencyRaw {
  return {
    id: data.id ? String(data.id) : null,
    title: data.title ? String(data.title) : null,
    sign: data.sign ? String(data.sign) : null,
  };
}
