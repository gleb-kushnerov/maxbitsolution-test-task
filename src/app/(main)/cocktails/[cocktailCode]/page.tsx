import { isCocktail } from '@/utils';
import { COCKTAILS_LIST } from '@/constants';
import { CocktailCode } from '@/types';
import { CocktailPage } from '@/screens';

interface CocktailPageProps {
  params: { cocktailCode: string };
}

export default function Page({ params: { cocktailCode } }: CocktailPageProps) {
  const cocktail: CocktailCode = isCocktail(cocktailCode) ? cocktailCode : COCKTAILS_LIST[0];

  return <CocktailPage cocktail={cocktail} />;
}
