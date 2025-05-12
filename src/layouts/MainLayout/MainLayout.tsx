import { PropsWithChildren } from 'react';
import { Navigation } from './components';
import styles from './MainLayout.module.scss';

export const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.nav}>
        <Navigation />
      </div>
      <main className={styles.main}>{children}</main>
    </div>
  );
};
