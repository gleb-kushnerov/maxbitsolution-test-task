import { COCKTAILS_LIST } from '@/constants';
import { URLS } from '@/constants/urls';
import { NavLink } from './components';
import styles from './Navigation.module.scss';

export const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.list}>
        {COCKTAILS_LIST.map((cocktail) => (
          <li key={cocktail}>
            <NavLink href={URLS.COCKTAIL_DETAILS(cocktail)}>{cocktail}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
