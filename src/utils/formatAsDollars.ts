export const formatAsDollars = (price: string | number): string => {
  const dollarsAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(Number(price) / 100);
  return dollarsAmount;
};

export const formatAsTurkishLira = (price: string | number): string => {
  const liraAmount = new Intl.NumberFormat('tr-Tr', {
    style: 'currency',
    currency: 'Lira',
  }).format(Number(price) / 100);
  return liraAmount;
};
