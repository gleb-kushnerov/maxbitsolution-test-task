import { CocktailCode } from '@/types';
import { COCKTAILS } from '@/constants';

export const isCocktail = (cocktail: string): cocktail is CocktailCode => {
  return Object.keys(COCKTAILS).includes(cocktail);
};
