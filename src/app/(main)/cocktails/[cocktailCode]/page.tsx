import { isCocktail } from '@/utils';
import { COCKTAILS_LIST } from '@/constants';
import { CocktailCode } from '@/types';
import { CocktailPage } from '@/screens';

interface CocktailPageProps {
  params: Promise<{ cocktailCode: string }>;
}

export default async function Page({ params }: CocktailPageProps) {
  const { cocktailCode } = await params;

  const cocktail: CocktailCode = isCocktail(cocktailCode) ? cocktailCode : COCKTAILS_LIST[0];

  return <CocktailPage cocktail={cocktail} />;
}
