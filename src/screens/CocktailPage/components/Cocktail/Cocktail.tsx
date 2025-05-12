import styles from './Cocktail.module.scss';
import Image from 'next/image';
import { Cocktail } from '@/types';

interface CocktailProps {
  cocktail: Cocktail;
}

export const CocktailCard = ({ cocktail }: CocktailProps) => {
  const measures = Object.entries(cocktail)
    .filter(([key, value]) => key.startsWith('strMeasure') && value && value.trim())
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .map(([_, value]) => value);

  return (
    <div className={styles.cocktail}>
      <div className={styles.info}>
        <h1 className={styles.heading}>{cocktail.strDrink}</h1>
        <div className={styles.description}>
          <p>{cocktail.strCategory}</p>
          <p>{cocktail.strAlcoholic}</p>
          <p>{cocktail.strGlass}</p>
        </div>
        <div>
          <h2>Instructions:</h2>
          <p className={styles.instructions}>{cocktail.strInstructions}</p>
        </div>
        <div>
          <h2>List of ingredients:</h2>
          <div className={styles.measures}>
            {measures.map((value, index) => (
              <p key={index}>{value}</p>
            ))}
          </div>
        </div>
      </div>
      {cocktail.strDrinkThumb && (
        <Image
          className={styles.image}
          src={cocktail.strDrinkThumb}
          width={100}
          height={100}
          alt="cocktail.strDrink"
          loading="lazy"
        />
      )}
    </div>
  );
};
