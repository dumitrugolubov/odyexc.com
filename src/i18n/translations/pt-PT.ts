import { ptBR } from './pt-BR';

// Start with BR translations as base
const translations = { ...ptBR };

// Override only what's different in PT-PT
const ptPT = {
  ...translations,
  // Add specific PT-PT variations here
  // Example:
  // hero: {
  //   ...translations.hero,
  //   subtitle: 'Versão portuguesa do subtítulo...'
  // }
} as const;

export { ptPT };