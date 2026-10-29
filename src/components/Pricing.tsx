import React from 'react';
import { Check, Sparkles } from 'lucide-react';
import { PricingPlan } from '../types';

const PLANS: PricingPlan[] = [
  {
    id: 'free',
    name: 'O Mochileiro Base',
    price: 'Gratuito',
    description: 'Tudo o que você precisa para a sua próxima expedição.',
    ctaLabel: 'Começar Grátis',
    features: [
      '1 Viagem ativa por vez',
      'Lançamento de despesas offline ilimitadas',
      'Conversor multimoedas congelado',
      'Checklist com peso de bagagem',
      'Diário de histórias com fotos locais',
    ],
  },
  {
    id: 'pro',
    name: 'Mochileiro Pro (Vitalício)',
    badge: 'MELHOR VALOR',
    price: 'R$ 59,90',
    billingPeriod: 'pagamento único',
    description: 'Pague uma vez e use em todas as suas viagens pelo resto da vida.',
    ctaLabel: 'Garantir Acesso Vitalício',
    highlighted: true,
    features: [
      'Viagens simultâneas ilimitadas',
      'Backup criptografado na nuvem',
      'Exportação de relatórios em PDF e CSV',
      'Histórico completo de taxas de 150+ moedas',
      'Suporte prioritário de aventureiros',
    ],
  },
];

export const Pricing: React.FC = () => {
  return (
    <section
      id="precos"
      aria-labelledby="pricing-heading"
      className="py-20 bg-dark-900 border-t border-dark-600/60"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <header className="mb-12">
          <h2 id="pricing-heading" className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Preços Justos. Sem Mensalidades Abusivas.
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Você não precisa de outra assinatura recorrente cara para uma viagem que dura algumas
            semanas.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {PLANS.map((plan) => {
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

                  <ul className={`space-y-3 text-sm ${isPro ? 'text-slate-200' : 'text-slate-300'}`}>
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        {isPro ? (
                          <Sparkles className="w-4 h-4 text-brand-amber shrink-0" aria-hidden="true" />
                        ) : (
                          <Check className="w-4 h-4 text-brand-emerald shrink-0" aria-hidden="true" />
                        )}
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <a
                    href="#download"
                    className={
                      isPro
                        ? 'block w-full py-3.5 rounded-xl bg-brand-orange hover:bg-brand-orange/90 text-center font-bold text-sm text-white transition-all transform active:scale-95'
                        : 'block w-full py-3 rounded-xl bg-dark-700 hover:bg-dark-600 border border-dark-500 text-center font-bold text-sm text-white transition-all transform active:scale-95'
                    }
                    aria-label={`Escolher plano ${plan.name}`}
                  >
                    {plan.ctaLabel}
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

