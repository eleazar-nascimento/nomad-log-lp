import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { useLocale } from '../context/LocaleContext';

export const ComparisonTable: React.FC = () => {
  const { t } = useLocale();

  return (
    <section
      id="comparativo"
      aria-labelledby="comparison-heading"
      className="py-20 bg-dark-800 border-t border-dark-600/60"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/15 border border-brand-orange/30 text-brand-orange text-xs font-bold mb-3">
            <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
            <span>BENCHMARK OFICIAL</span>
          </div>
          <h2 id="comparison-heading" className="text-3xl sm:text-4xl font-bold text-white mb-3">
            {t.comparison.heading}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            {t.comparison.subheading}
          </p>
        </header>

        {/* Desktop & Tablet Accessible Table (responsive-table pattern) */}
        <div
          tabIndex={0}
          role="region"
          aria-labelledby="comparison-heading"
          className="hidden md:block overflow-x-auto focus:outline-none focus:ring-2 focus:ring-brand-orange rounded-2xl border border-dark-600 shadow-xl"
        >
          <table className="w-full text-left border-collapse bg-dark-900/60">
            <caption className="sr-only">
              Tabela comparativa de funcionalidades entre NomadLog, Wanderlog e Polarsteps
            </caption>
            <thead>
              <tr className="border-b border-dark-600 bg-dark-900">
                <th
                  scope="col"
                  className="py-4 px-5 text-xs font-semibold text-slate-400 uppercase tracking-wider sticky top-0"
                >
                  {t.comparison.colScenario}
                </th>
                <th
                  scope="col"
                  className="py-4 px-5 text-xs font-bold text-brand-orange uppercase tracking-wider text-center bg-brand-orange/15 border-x border-brand-orange/30 sticky top-0"
                >
                  {t.comparison.colNomad}
                </th>
                <th
                  scope="col"
                  className="py-4 px-5 text-xs font-semibold text-slate-400 uppercase tracking-wider text-center sticky top-0"
                >
                  {t.comparison.colWanderlog}
                </th>
                <th
                  scope="col"
                  className="py-4 px-5 text-xs font-semibold text-slate-400 uppercase tracking-wider text-center sticky top-0"
                >
                  {t.comparison.colPolarsteps}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-dark-600/70 text-sm">
              {t.comparison.rows.map((row, idx) => (
                <tr key={idx} className="hover:bg-dark-700/40 transition-colors">
                  <th
                    scope="row"
                    className="py-4 px-5 font-medium text-slate-100 text-left"
                  >
                    {row.feature}
                  </th>
                  <td className="py-4 px-5 text-center text-brand-emerald font-bold bg-brand-orange/5 border-x border-brand-orange/20">
                    <span className="inline-flex items-center justify-center gap-1.5 px-3 py-1 rounded-full bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/20">
                      {row.nomadLog}
                    </span>
                  </td>
                  <td className="py-4 px-5 text-center text-slate-300">
                    {row.wanderlog}
                  </td>
                  <td className="py-4 px-5 text-center text-slate-300">
                    {row.polarsteps}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Stacked Card View (Ensures excellent phone UX) */}
        <div className="md:hidden space-y-4" role="region" aria-label="Comparativo móvel">
          {t.comparison.rows.map((row, idx) => (
            <article
              key={idx}
              className="p-5 rounded-2xl bg-dark-900 border border-dark-600 space-y-3"
            >
              <h3 className="text-sm font-bold text-white border-b border-dark-700 pb-2">
                {row.feature}
              </h3>

              {/* NomadLog Highlight Card */}
              <div className="p-3 rounded-xl bg-brand-orange/10 border border-brand-orange/30 flex items-center justify-between">
                <span className="text-xs font-bold text-brand-orange">
                  {t.comparison.colNomad}
                </span>
                <span className="text-xs font-bold text-brand-emerald">
                  {row.nomadLog}
                </span>
              </div>

              {/* Wanderlog */}
              <div className="p-2.5 rounded-xl bg-dark-800 border border-dark-700 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">
                  {t.comparison.colWanderlog}
                </span>
                <span className="text-slate-300">
                  {row.wanderlog}
                </span>
              </div>

              {/* Polarsteps */}
              <div className="p-2.5 rounded-xl bg-dark-800 border border-dark-700 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">
                  {t.comparison.colPolarsteps}
                </span>
                <span className="text-slate-300">
                  {row.polarsteps}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
