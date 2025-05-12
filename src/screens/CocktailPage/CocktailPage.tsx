'use client';

import { CocktailCode } from '@/types';
import { useGetCocktail } from '@/api';
import styles from './CocktailPage.module.scss';
import { CocktailCard } from './components';

interface PageProps {
  cocktail: CocktailCode;
}

export const CocktailPage = ({ cocktail }: PageProps) => {
  const { data, isLoading, isError } = useGetCocktail(cocktail);

  return (
    <section className={styles.wrapper}>
      {isLoading && <p>... Loading</p>}
      {isError && <p>Something went wrong, please try again</p>}
      {data &&
        data.drinks.map((cocktail) => (
          <CocktailCard key={cocktail.idDrink} cocktail={cocktail}></CocktailCard>
        ))}
    </section>
  );
};
