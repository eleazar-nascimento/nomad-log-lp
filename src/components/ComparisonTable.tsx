import React from 'react';
import { ComparisonRow } from '../types';

const COMPARISON_DATA: ComparisonRow[] = [
  {
    scenario: 'Sem sinal no alto da trilha ou voo',
    traditional: 'Trava ou não abre ❌',
    nomadLog: 'Abre em 0.1s offline ✅',
  },
  {
    scenario: 'Converter moeda na feira de rua',
    traditional: 'Exige Wi-Fi ou dados caros ❌',
    nomadLog: 'Calcula com taxa em cache ✅',
  },
  {
    scenario: 'Risco de roaming surpresa',
    traditional: 'Alto (consome internet) ❌',
    nomadLog: 'Zero (100% offline) ✅',
  },
  {
    scenario: 'Perda de anotações e fotos',
    traditional: 'Comum em sincronizações ❌',
    nomadLog: 'Fila local resiliente ✅',
  },
];

export const ComparisonTable: React.FC = () => {
  return (
    <section
      id="comparativo"
      aria-labelledby="comparison-heading"
      className="py-20 bg-dark-800 border-t border-dark-600/60"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h2 id="comparison-heading" className="text-3xl font-bold text-white mb-3">
            Apps Tradicionais vs. NomadLog
          </h2>
          <p className="text-slate-400 text-sm">
            Entenda por que depender de aplicativos baseados em nuvem arruína viagens remotas.
          </p>
        </header>

        <div
          className="overflow-x-auto focus:outline-none focus:ring-2 focus:ring-brand-orange rounded-xl"
          tabIndex={0}
          role="region"
          aria-label="Tabela comparativa entre aplicativos tradicionais e NomadLog"
        >
          <table className="w-full text-left border-collapse">
            <caption className="sr-only">
              Tabela de comparação de funcionalidades entre apps tradicionais na nuvem e o NomadLog
              offline-first
            </caption>
            <thead>
              <tr className="border-b border-dark-600">
                <th scope="col" className="py-4 px-4 text-xs font-semibold text-slate-400 uppercase">
                  Situação Real
                </th>
                <th
                  scope="col"
                  className="py-4 px-4 text-xs font-semibold text-slate-400 uppercase text-center"
                >
                  Planilhas / Apps Nuvem
                </th>
                <th
                  scope="col"
                  className="py-4 px-4 text-xs font-semibold text-brand-orange uppercase text-center bg-brand-orange/10 rounded-t-xl"
                >
                  NomadLog
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-dark-600 text-sm">
              {COMPARISON_DATA.map((row, idx) => (
                <tr key={idx} className="hover:bg-dark-700/30 transition-colors">
                  <th scope="row" className="py-4 px-4 font-medium text-white text-left font-normal">
                    {row.scenario}
                  </th>
                  <td className="py-4 px-4 text-center text-red-400 font-medium">
                    {row.traditional}
                  </td>
                  <td className="py-4 px-4 text-center text-brand-emerald font-bold bg-brand-orange/5">
                    {row.nomadLog}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

