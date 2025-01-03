export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
};

export const formatChange = (change: number): string => {
  return `${change >= 0 ? '+' : ''}${change.toFixed(2)}%`;
};

export const formatVolume = (volume: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(volume);
};

export const formatAmount = (amount: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 8,
    maximumFractionDigits: 8,
  }).format(amount);
};