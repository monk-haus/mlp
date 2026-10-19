const digitsOnly = (phone: string) => phone.replace(/\D/g, "");

const withCountryCode = (phone: string) => {
  const digits = digitsOnly(phone);
  return digits.length === 10 ? `1${digits}` : digits;
};

export const telHref = (phone: string) => `tel:+${withCountryCode(phone)}`;

export const internationalPhone = (phone: string) => {
  const digits = withCountryCode(phone);
  return `+${digits.slice(0, 1)}-${digits.slice(1, 4)}-${digits.slice(4, 7)}-${digits.slice(7)}`;
};
