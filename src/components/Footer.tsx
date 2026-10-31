import React from 'react';
import { Compass } from 'lucide-react';
import { useLocale } from '../context/LocaleContext';

export const Footer: React.FC = () => {
  const { t } = useLocale();

  return (
    <footer
      aria-label="Rodapé do site"
      className="py-12 bg-dark-900 border-t border-dark-600/60 text-center text-xs text-slate-400"
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-brand-orange/15 border border-brand-orange/30 flex items-center justify-center text-brand-orange">
            <Compass className="w-4 h-4" aria-hidden="true" />
          </div>
          <span className="text-white font-bold text-sm">NomadLog</span>
          <span className="text-slate-500">•</span>
          <span>{t.footer.madeFor}</span>
        </div>

        <div>
          <p>© {new Date().getFullYear()} NomadLog. {t.footer.rights}</p>
        </div>

        <nav aria-label="Links rápidos do rodapé" className="flex items-center gap-5">
          <a href="#como-funciona" className="hover:text-white transition-colors">
            {t.nav.howItWorks}
          </a>
          <a href="#comparativo" className="hover:text-white transition-colors">
            {t.nav.comparison}
          </a>
          <a href="#precos" className="hover:text-white transition-colors">
            {t.nav.pricing}
          </a>
          <a href="#faq" className="hover:text-white transition-colors">
            {t.nav.faq}
          </a>
        </nav>
      </div>
    </footer>
  );
};
