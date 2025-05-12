import { MainLayout } from '@/layouts';
import { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
  return <MainLayout>{children}</MainLayout>;
}
