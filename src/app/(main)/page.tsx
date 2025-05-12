import { redirect } from 'next/navigation';
import { URLS } from '@/constants/urls';

export default function HomePage() {
  redirect(URLS.HOME);

  return null;
}
