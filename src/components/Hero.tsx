import React from 'react';
import { WifiOff, Sparkles, PlayCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  const stats = [
    { value: '100%', label: 'Funcional Offline', color: 'text-white' },
    { value: '150+', label: 'Moedas Suportadas', color: 'text-brand-amber' },
    { value: '0 KB', label: 'Dados de Roaming Gastos', color: 'text-brand-emerald' },
    { value: 'AES-256', label: 'Backup Criptografado', color: 'text-brand-sky' },
  ];

  return (
    <section
      aria-labelledby="hero-title"
      className="relative pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden bg-grid-pattern"
    >
      {/* Decorative gradient glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-orange/10 blur-[130px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-700 border border-dark-600 text-brand-amber text-xs font-semibold mb-6">
            <WifiOff className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Zero dependência de roaming móvel ou Wi-Fi</span>
          </div>

          {/* Single H1 for the page */}
          <h1
            id="hero-title"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-6"
          >
            Viaje para o{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-brand-amber to-brand-orange">
              fim do mundo
            </span>{' '}
            sem perder o controle dos seus gastos e histórias.
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed">
            O aplicativo indispensável para quem pega estradas remotas, trilhas nas montanhas, voos
            longos ou quer economizar no exterior:{' '}
            <strong className="font-semibold text-white">
              roteiro dia a dia, despesas multimoedas offline, mapas vetoriais leves e diário de
              memórias
            </strong>{' '}
            no seu bolso.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#conversor"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-orange hover:bg-brand-orange/90 text-white font-bold text-base transition-all transform hover:-translate-y-0.5 glow-orange flex items-center justify-center gap-2"
            >
              <Sparkles className="w-5 h-5" aria-hidden="true" />
              <span>Testar Recursos no Navegador</span>
            </a>
            <a
              href="#como-funciona"
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-dark-700 hover:bg-dark-600 text-slate-200 border border-dark-500 font-semibold text-base transition-all flex items-center justify-center gap-2"
            >
              <PlayCircle className="w-5 h-5 text-brand-sky" aria-hidden="true" />
              <span>Entenda o Modo Offline-First</span>
            </a>
          </div>

          {/* Key Stats using semantic definition list */}
          <dl
            aria-label="Principais estatísticas do NomadLog"
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 border-t border-dark-600/70 text-left"
          >
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-dark-700/60 border border-dark-600 transition-colors hover:border-dark-500"
              >
                <dd className={`text-2xl font-bold mb-0.5 ${stat.color}`}>{stat.value}</dd>
                <dt className="text-xs text-slate-400 font-medium">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

