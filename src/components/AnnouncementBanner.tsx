import React from 'react';
import { Sparkles } from 'lucide-react';
import { useLocale } from '../context/LocaleContext';

export const AnnouncementBanner: React.FC = () => {
  const { t } = useLocale();

  return (
    <aside
      aria-label="Aviso de Lançamento"
      className="bg-gradient-to-r from-brand-orange/20 via-brand-amber/20 to-brand-orange/20 border-b border-brand-orange/30 py-2.5 px-4 text-center text-xs sm:text-sm font-medium flex items-center justify-center gap-2"
    >
      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-brand-orange/30 text-brand-orange text-xs font-bold">
        <Sparkles className="w-3 h-3" aria-hidden="true" />
        {t.announcement.badge}
      </span>
      <span>{t.announcement.text}</span>
    </aside>
  );
};
