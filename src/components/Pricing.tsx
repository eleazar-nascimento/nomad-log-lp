import React from 'react';
import { Check, Sparkles } from 'lucide-react';
import { useLocale } from '../context/LocaleContext';

export const Pricing: React.FC = () => {
  const { t } = useLocale();

  return (
    <section
      id="precos"
      aria-labelledby="pricing-heading"
      className="py-20 bg-dark-900 border-t border-dark-600/60"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <header className="mb-12">
          <h2 id="pricing-heading" className="text-3xl sm:text-4xl font-bold text-white mb-3">
            {t.pricing.heading}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            {t.pricing.subheading}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {t.pricing.plans.map((plan) => {
            const isPro = plan.highlighted;

            return (
              <article
                key={plan.id}
                aria-labelledby={`plan-title-${plan.id}`}
                className={
                  isPro
                    ? 'p-8 rounded-3xl bg-gradient-to-b from-dark-700 to-dark-800 border-2 border-brand-orange relative flex flex-col justify-between glow-orange'
                    : 'p-8 rounded-3xl bg-dark-800 border border-dark-600 flex flex-col justify-between'
                }
              >
                {plan.badge && (
                  <div
                    className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-brand-orange text-white text-xs font-bold tracking-wide uppercase"
                    aria-label={`Destaque: ${plan.badge}`}
                  >
                    {plan.badge}
                  </div>
                )}

                <div>
                  <span
                    className={`text-xs font-bold uppercase tracking-widest ${
                      isPro ? 'text-brand-amber' : 'text-slate-400'
                    }`}
                  >
                    {plan.name}
                  </span>

                  <div className="flex items-baseline gap-2 mt-2 mb-2">
                    <h3 id={`plan-title-${plan.id}`} className="text-3xl sm:text-4xl font-bold text-white">
                      {plan.price}
                    </h3>
                    {plan.billingPeriod && (
                      <span className="text-xs text-slate-400 font-medium">
                        {plan.billingPeriod}
                      </span>
                    )}
                  </div>

                  <p className="text-slate-400 text-sm mb-6">{plan.description}</p>

                  <ul className="space-y-3 mb-8" aria-label={`Vantagens do plano ${plan.name}`}>
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                        <Check
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            isPro ? 'text-brand-amber' : 'text-brand-emerald'
                          }`}
                          aria-hidden="true"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#conversor"
                  className={
                    isPro
                      ? 'w-full py-4 rounded-2xl bg-brand-orange hover:bg-brand-orange/90 text-white font-bold text-center block transition-all shadow-lg glow-orange focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2 focus:ring-offset-dark-900'
                      : 'w-full py-4 rounded-2xl bg-dark-700 hover:bg-dark-600 text-white font-bold text-center block border border-dark-500 transition-all focus:outline-none focus:ring-2 focus:ring-slate-400'
                  }
                >
                  <span className="flex items-center justify-center gap-2">
                    {isPro && <Sparkles className="w-4 h-4" aria-hidden="true" />}
                    <span>{plan.ctaLabel}</span>
                  </span>
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
