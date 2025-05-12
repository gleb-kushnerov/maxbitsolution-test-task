import { COCKTAILS_LIST } from '@/constants/cocktails';

export const URLS = {
  HOME: `cocktails/${COCKTAILS_LIST[0]}`,
  COCKTAIL_DETAILS: (cocktailCode: string) => `/cocktails/${cocktailCode}`,
};
