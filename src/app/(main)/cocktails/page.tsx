import { redirect } from 'next/navigation';
import { URLS } from '@/constants/urls';

export default function CocktailPage() {
  redirect(URLS.HOME);

  return null;
}
