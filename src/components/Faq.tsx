import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useLocale } from '../context/LocaleContext';

export const Faq: React.FC = () => {
  const { t } = useLocale();
  const [openId, setOpenId] = useState<string | null>('offline');

  return (
    <section id="faq" aria-labelledby="faq-heading" className="py-20 bg-dark-800 border-t border-dark-600/60">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-sky/15 border border-brand-sky/30 text-brand-sky text-xs font-bold mb-3">
            <HelpCircle className="w-3.5 h-3.5" aria-hidden="true" />
            <span>TIRA-DÚVIDAS</span>
          </div>
          <h2 id="faq-heading" className="text-3xl sm:text-4xl font-bold text-white mb-3">
            {t.faq.heading}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {t.faq.subheading}
          </p>
        </header>

        <div className="space-y-4" role="region" aria-label="Perguntas Frequentes">
          {t.faq.items.map((item) => {
            const isOpen = openId === item.id;
            return (
              <details
                key={item.id}
                name="faq-group"
                open={isOpen}
                onToggle={(e) => {
                  if (e.currentTarget.open) {
                    setOpenId(item.id);
                  } else if (openId === item.id) {
                    setOpenId(null);
                  }
                }}
                className="group rounded-2xl bg-dark-700 border border-dark-600 p-5 cursor-pointer transition-colors hover:border-dark-500 [&[open]]:border-brand-orange/40"
              >
                <summary className="font-bold text-white flex items-center justify-between list-none select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange rounded-lg">
                  <span className="text-base sm:text-lg">{item.question}</span>
                  <ChevronDown
                    className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform duration-200 shrink-0 ml-2"
                    aria-hidden="true"
                  />
                </summary>
                <div className="text-sm text-slate-300 mt-3 pt-3 border-t border-dark-600/50 leading-relaxed">
                  <p>{item.answer}</p>
                </div>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
};
