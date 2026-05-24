"use client";

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '../i18n/routing';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const nextLocale = locale === 'th' ? 'en' : 'th';
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <button
      onClick={toggleLocale}
      className="px-3 py-1.5 rounded-full bg-blue-100 dark:bg-indigo-900/50 text-blue-700 dark:text-blue-300 text-sm font-semibold hover:scale-105 active:scale-95 transition-all shadow-sm"
    >
      {locale === 'th' ? 'EN' : 'TH'}
    </button>
  );
}
