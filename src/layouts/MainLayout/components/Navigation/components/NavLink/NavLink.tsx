'use client';

import { PropsWithChildren } from 'react';
import Link, { LinkProps } from 'next/link';
import styles from './NavLink.module.scss';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';

export const NavLink = ({ children, href, ...props }: PropsWithChildren<LinkProps>) => {
  const pathName = usePathname();
  const isActive = pathName === href;

  return (
    <Link href={href} className={classNames(styles.link, { [styles.active]: isActive })} {...props}>
      {children}
    </Link>
  );
};
