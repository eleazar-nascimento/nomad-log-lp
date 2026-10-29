import React from 'react';
import { Wallet, Check, Scale } from 'lucide-react';

export const ProductMockup: React.FC = () => {
  return (
    <section aria-labelledby="mockup-title" className="py-12 bg-dark-900 border-y border-dark-600/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="mockup-title" className="sr-only">
          Demonstração do Aplicativo NomadLog
        </h2>

        <div className="relative max-w-4xl mx-auto rounded-3xl p-4 sm:p-8 bg-gradient-to-b from-dark-700 to-dark-800 border border-dark-600 shadow-2xl">
          {/* Mockup Window Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-dark-600">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-xs font-mono text-slate-400 ml-2">
                nomad-log://dashboard • Mochilão Sudeste Asiático
              </span>
            </div>

            <div
              className="text-xs px-2.5 py-1 rounded-full bg-brand-amber/15 text-brand-amber border border-brand-amber/30 font-semibold flex items-center gap-1.5"
              role="status"
            >
              <span className="w-2 h-2 rounded-full bg-brand-amber animate-pulse" aria-hidden="true" />
              <span>MODO OFFLINE ATIVO</span>
            </div>
          </div>

          {/* Inner Dashboard Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            {/* Card 1: Gastos / Orçamento */}
            <article
              aria-label="Orçamento da Viagem"
              className="rounded-2xl bg-dark-700 p-5 border border-dark-600 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span>Orçamento da Viagem</span>
                  <Wallet className="w-4 h-4 text-brand-amber" aria-hidden="true" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">R$ 633,34</div>
                <div className="text-xs text-brand-emerald font-medium">Restante: R$ 3.766,66</div>
              </div>

              <div className="mt-4 pt-3 border-t border-dark-600">
                <div
                  className="w-full h-2 rounded-full bg-dark-800 overflow-hidden"
                  role="progressbar"
                  aria-valuenow={18}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label="Porcentagem do teto consumida"
                >
                  <div className="w-[18%] h-full bg-brand-emerald rounded-full" />
                </div>
                <div className="text-[11px] text-slate-400 mt-1">18% do teto consumido</div>
              </div>
            </article>

            {/* Card 2: Moeda em Tempo Real */}
            <article
              aria-label="Conversão Offline de Moeda"
              className="rounded-2xl bg-dark-700 p-5 border border-dark-600 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span>Conversão Offline</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-brand-amber/20 text-brand-amber font-semibold">
                    TAXA CONGELADA
                  </span>
                </div>
                <div className="text-xs text-slate-300">120 Baht tailandês (THB)</div>
                <div className="text-2xl font-bold text-brand-amber mt-1">≈ R$ 20,35</div>
              </div>

              <div className="mt-4 text-[11px] text-brand-emerald flex items-center gap-1">
                <Check className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Pad Thai &amp; Suco registrados</span>
              </div>
            </article>

            {/* Card 3: Mochila & Bagagem */}
            <article
              aria-label="Status da Mochila e Bagagem"
              className="rounded-2xl bg-dark-700 p-5 border border-dark-600 flex items-center justify-between"
            >
              <div>
                <div className="text-xs text-slate-400 mb-1">Bagagem &amp; Mochila</div>
                <div className="text-xl font-bold text-white">12 de 16 itens</div>
                <div className="text-xs text-brand-sky mt-1 flex items-center gap-1">
                  <Scale className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>2.89 kg pesados</span>
                </div>
              </div>

              <div
                className="w-16 h-16 rounded-full border-4 border-dark-600 border-t-brand-emerald flex items-center justify-center font-bold text-sm text-brand-emerald"
                aria-label="75% dos itens essenciais embalados"
              >
                75%
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

