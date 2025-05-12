import { CocktailCode } from '@/types';

export const COCKTAILS = {
  margarita: 'margarita',
  mojito: 'mojito',
  a1: 'a1',
  kir: 'kir',
} as const;

export const COCKTAILS_LIST = Object.keys(COCKTAILS) as Array<CocktailCode>;
