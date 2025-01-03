export type TranslationKey = 'pt-BR' | 'pt-PT';

// Use TypeScript template literal types for nested paths
export type TranslationPath = 
  | 'hero.title'
  | 'hero.titleHighlight'
  | 'hero.subtitle'
  | 'hero.startTrading'
  | 'hero.viewMarkets'
  | `hero.stats.${string}`
  | `hero.features.${string}`
  | `header.${string}`
  // Add other paths as needed

export interface Translation {
  header: {
    exchange: string;
    markets: string;
    features: string;
    about: string;
    support: string;
    tradeNow: string;
  };
  hero: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    startTrading: string;
    viewMarkets: string;
    stats: {
      spotFees: string;
      leverage: string;
      pairs: string;
      support: string;
    };
    features: {
      security: string;
      liquidity: string;
      support: string;
      tools: string;
    };
  };
  // ... rest of the interface
}

export interface Translations {
  'pt-BR': Translation;
  'pt-PT': Translation;
}