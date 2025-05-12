import { useQuery } from '@tanstack/react-query';
import { CocktailCode, CocktailResponse } from '@/types';

const getCocktail = async (cocktail: CocktailCode): Promise<CocktailResponse> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}search.php?s=${cocktail}`);
  return await response.json();
};

export const useGetCocktail = (cocktail: CocktailCode) => {
  return useQuery({
    queryKey: [cocktail],
    queryFn: () => getCocktail(cocktail),
  });
};
