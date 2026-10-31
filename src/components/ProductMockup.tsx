import React, { useState } from 'react';
import {
  Wallet,
  Check,
  Scale,
  MapPin,
  TrendingUp,
  FileSpreadsheet,
  FileCode,
  FileText,
  Share2,
  Clock,
  Compass,
  Mountain,
  AlertCircle,
  Copy,
  Download,
} from 'lucide-react';
import { useLocale } from '../context/LocaleContext';

export const ProductMockup: React.FC = () => {
  const { t } = useLocale();
  const [activeTab, setActiveTab] = useState<'itinerary' | 'dashboard' | 'export'>('itinerary');
  const [subTab, setSubTab] = useState<'altitude' | 'route'>('altitude');
  const [copiedNotification, setCopiedNotification] = useState<string | null>(null);

  const showNotification = (msg: string) => {
    setCopiedNotification(msg);
    setTimeout(() => setCopiedNotification(null), 3000);
  };

  return (
    <section aria-labelledby="mockup-title" className="py-16 bg-dark-900 border-y border-dark-600/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/15 border border-brand-orange/30 text-brand-orange text-xs font-bold mb-3">
            <Compass className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{t.mockup.title}</span>
          </div>
          <h2 id="mockup-title" className="text-2xl sm:text-3xl font-bold text-white">
            {t.mockup.itinerary.mapTitle}
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            {t.mockup.itinerary.mapSub}
          </p>
        </header>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-6">
          <div
            role="tablist"
            aria-label="Telas do aplicativo"
            className="inline-flex p-1.5 rounded-2xl bg-dark-800 border border-dark-600 gap-1"
          >
            <button
              role="tab"
              aria-selected={activeTab === 'itinerary'}
              onClick={() => setActiveTab('itinerary')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'itinerary'
                  ? 'bg-brand-orange text-white shadow-lg'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Mountain className="w-4 h-4" aria-hidden="true" />
              <span>{t.mockup.tabs.itinerary}</span>
            </button>

            <button
              role="tab"
              aria-selected={activeTab === 'dashboard'}
              onClick={() => setActiveTab('dashboard')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'dashboard'
                  ? 'bg-brand-orange text-white shadow-lg'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Wallet className="w-4 h-4" aria-hidden="true" />
              <span>{t.mockup.tabs.dashboard}</span>
            </button>

            <button
              role="tab"
              aria-selected={activeTab === 'export'}
              onClick={() => setActiveTab('export')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'export'
                  ? 'bg-brand-orange text-white shadow-lg'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <FileSpreadsheet className="w-4 h-4" aria-hidden="true" />
              <span>{t.mockup.tabs.export}</span>
            </button>
          </div>
        </div>

        {/* Notification Toast */}
        {copiedNotification && (
          <div
            role="status"
            className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-xl bg-brand-emerald text-dark-900 font-bold text-sm shadow-2xl flex items-center gap-2 animate-bounce"
          >
            <Check className="w-4 h-4" />
            <span>{copiedNotification}</span>
          </div>
        )}

        {/* Main Phone / Device Container */}
        <div className="relative max-w-4xl mx-auto rounded-3xl p-4 sm:p-7 bg-gradient-to-b from-dark-700 to-dark-800 border border-dark-600 shadow-2xl">
          {/* Mockup Window Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-dark-600">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-xs font-mono text-slate-400 ml-2 hidden sm:inline">
                {t.mockup.tripTitle}
              </span>
            </div>

            <div
              className="text-xs px-2.5 py-1 rounded-full bg-brand-amber/15 text-brand-amber border border-brand-amber/30 font-semibold flex items-center gap-1.5"
              role="status"
            >
              <span className="w-2 h-2 rounded-full bg-brand-amber animate-pulse" aria-hidden="true" />
              <span>{t.mockup.badge}</span>
            </div>
          </div>

          {/* TAB 1: ITINERARY & ALTIMETRY */}
          {activeTab === 'itinerary' && (
            <div className="pt-6 space-y-6">
              {/* Map & Altimetry Container */}
              <div className="rounded-2xl bg-dark-900 border border-dark-600 p-4 sm:p-6 relative overflow-hidden">
                {/* Header inside Map view */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Compass className="w-4 h-4 text-brand-orange" aria-hidden="true" />
                    <span className="text-sm font-bold text-white">
                      {t.mockup.itinerary.mapTitle}
                    </span>
                  </div>

                  <div className="inline-flex p-1 rounded-xl bg-dark-800 border border-dark-600 text-xs">
                    <button
                      onClick={() => setSubTab('route')}
                      className={`px-3 py-1 rounded-lg font-semibold transition-all ${
                        subTab === 'route'
                          ? 'bg-brand-orange text-white'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {t.mockup.itinerary.routeTab}
                    </button>
                    <button
                      onClick={() => setSubTab('altitude')}
                      className={`px-3 py-1 rounded-lg font-semibold transition-all ${
                        subTab === 'altitude'
                          ? 'bg-brand-orange text-white'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {t.mockup.itinerary.altTab}
                    </button>
                  </div>
                </div>

                {/* SVG Canvas (Altimetry vs Route) */}
                <div className="relative w-full h-44 sm:h-52 bg-dark-800/80 rounded-xl border border-dark-600/60 p-3 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span className="font-semibold text-brand-amber flex items-center gap-1">
                      ▲ N
                    </span>
                    <span className="text-brand-sky font-mono font-semibold">
                      {subTab === 'altitude' ? '1850m PICO' : 'GPS VETORIAL'}
                    </span>
                  </div>

                  {subTab === 'altitude' ? (
                    /* Mountain Elevation Profile Curve */
                    <svg
                      viewBox="0 0 500 120"
                      className="w-full h-28 sm:h-32 overflow-visible"
                      preserveAspectRatio="none"
                      aria-label="Perfil de elevação altimétrico da rota"
                    >
                      <defs>
                        <linearGradient id="altitudeGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>

                      {/* Grid Lines */}
                      <line x1="0" y1="30" x2="500" y2="30" stroke="#334155" strokeDasharray="3 3" />
                      <line x1="0" y1="70" x2="500" y2="70" stroke="#334155" strokeDasharray="3 3" />
                      <line x1="0" y1="110" x2="500" y2="110" stroke="#334155" />

                      {/* Mountain Fill */}
                      <path
                        d="M 20 110 L 40 102 L 90 98 L 160 85 L 220 78 L 310 18 L 380 92 L 450 108 L 480 110 Z"
                        fill="url(#altitudeGrad)"
                      />

                      {/* Elevation Line */}
                      <path
                        d="M 20 110 L 40 102 L 90 98 L 160 85 L 220 78 L 310 18 L 380 92 L 450 108 L 480 110"
                        fill="none"
                        stroke="#06b6d4"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />

                      {/* Drop Line for Peak */}
                      <line
                        x1="310"
                        y1="18"
                        x2="310"
                        y2="110"
                        stroke="#06b6d4"
                        strokeDasharray="2 2"
                        strokeWidth="1.5"
                      />

                      {/* Checkpoint Dots */}
                      <circle cx="40" cy="102" r="3.5" fill="#10b981" />
                      <text x="40" y="93" fill="#94a3b8" fontSize="9" textAnchor="middle">12m</text>

                      <circle cx="90" cy="98" r="3.5" fill="#10b981" />
                      <text x="90" y="89" fill="#94a3b8" fontSize="9" textAnchor="middle">18m</text>

                      <circle cx="160" cy="85" r="3.5" fill="#10b981" />
                      <text x="160" y="76" fill="#94a3b8" fontSize="9" textAnchor="middle">310m</text>

                      <circle cx="220" cy="78" r="3.5" fill="#10b981" />
                      <text x="220" y="69" fill="#94a3b8" fontSize="9" textAnchor="middle">320m</text>

                      {/* Peak Dot */}
                      <circle cx="310" cy="18" r="6" fill="#06b6d4" className="animate-pulse" />
                      <circle cx="310" cy="18" r="3" fill="#ffffff" />
                      <text
                        x="310"
                        y="9"
                        fill="#f59e0b"
                        fontSize="10"
                        fontWeight="bold"
                        textAnchor="middle"
                      >
                        1850m
                      </text>

                      <circle cx="450" cy="108" r="3.5" fill="#10b981" />
                      <text x="450" y="99" fill="#94a3b8" fontSize="9" textAnchor="middle">5m</text>
                    </svg>
                  ) : (
                    /* 2D Vector Route Path */
                    <svg
                      viewBox="0 0 500 120"
                      className="w-full h-28 sm:h-32"
                      preserveAspectRatio="none"
                      aria-label="Mapa vetorial 2D de nós e waypoints"
                    >
                      <path
                        d="M 50 80 C 120 20, 180 100, 260 40 S 380 90, 450 30"
                        fill="none"
                        stroke="#f97316"
                        strokeWidth="3"
                        strokeDasharray="6 4"
                      />
                      <circle cx="50" cy="80" r="5" fill="#10b981" />
                      <text x="50" y="100" fill="#cbd5e1" fontSize="9" textAnchor="middle">Bangkok</text>

                      <circle cx="160" cy="65" r="5" fill="#10b981" />
                      <text x="160" y="85" fill="#cbd5e1" fontSize="9" textAnchor="middle">Ayutthaya</text>

                      <circle cx="260" cy="40" r="7" fill="#f97316" className="animate-pulse" />
                      <text x="260" y="25" fill="#f59e0b" fontSize="10" fontWeight="bold" textAnchor="middle">
                        Doi Inthanon (#5)
                      </text>

                      <circle cx="370" cy="65" r="5" fill="#64748b" />
                      <text x="370" y="85" fill="#94a3b8" fontSize="9" textAnchor="middle">Pai</text>

                      <circle cx="450" cy="30" r="5" fill="#64748b" />
                      <text x="450" y="50" fill="#94a3b8" fontSize="9" textAnchor="middle">Chiang Rai</text>
                    </svg>
                  )}

                  {/* Altimetry Stats Footer */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-dark-700 text-[11px] text-slate-300">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-brand-orange" />
                      6 paradas
                    </span>
                    <span className="flex items-center gap-1 text-brand-sky font-semibold">
                      <Mountain className="w-3.5 h-3.5" />
                      Pico: 1850m
                    </span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <TrendingUp className="w-3.5 h-3.5" />
                      1685.1 km
                    </span>
                    <span className="flex items-center gap-1 text-brand-emerald font-semibold">
                      <Check className="w-3.5 h-3.5" />
                      5/6 concl.
                    </span>
                  </div>
                </div>

                {/* Waypoint Chips */}
                <div className="flex items-center gap-2 mt-4 overflow-x-auto pb-1 text-xs">
                  <span className="px-3 py-1.5 rounded-full bg-dark-800 border border-dark-600 text-slate-400 whitespace-nowrap">
                    #4 Portão Tha Phae
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-brand-sky/20 border border-brand-sky/40 text-brand-sky font-bold whitespace-nowrap flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-brand-sky animate-ping" />
                    #5 Parque Nacional Doi Inthanon
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-dark-800 border border-dark-600 text-slate-400 whitespace-nowrap">
                    #6 Wat Phra That Doi Suthep
                  </span>
                </div>
              </div>

              {/* Active Stop Card (Direct Cost Link & Observation Note) */}
              <article className="rounded-2xl bg-dark-700 p-5 border border-dark-600 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-brand-emerald/15 border border-brand-emerald/30 flex items-center justify-center text-brand-emerald">
                      <Mountain className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white flex items-center gap-2">
                        <span>{t.mockup.itinerary.stopName}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-brand-orange/20 text-brand-orange font-bold uppercase">
                          EM ANDAMENTO
                        </span>
                      </h3>
                      <div className="text-xs text-slate-400 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-brand-orange" />
                        <span>{t.mockup.itinerary.stopLocation}</span>
                      </div>
                    </div>
                  </div>

                  <span className="text-xs text-brand-emerald bg-brand-emerald/10 border border-brand-emerald/30 px-2.5 py-1 rounded-full font-semibold">
                    {t.mockup.itinerary.statusDone}
                  </span>
                </div>

                {/* Metrics Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-dark-800 border border-dark-600 flex items-center gap-1.5 text-slate-300">
                    <Clock className="w-3.5 h-3.5 text-brand-orange" />
                    <span>Dia 4 • 07:00</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-dark-800 border border-dark-600 flex items-center gap-1.5 text-brand-sky font-semibold">
                    <Mountain className="w-3.5 h-3.5" />
                    <span>1850m altitude</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-dark-800 border border-dark-600 flex items-center gap-1.5 text-slate-300">
                    <TrendingUp className="w-3.5 h-3.5 text-brand-emerald" />
                    <span>8.4 km trilha</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-dark-800 border border-dark-600 flex items-center gap-1.5 text-brand-amber font-semibold">
                    <Wallet className="w-3.5 h-3.5" />
                    <span>THB 1.200 gasto</span>
                  </div>
                </div>

                {/* Estimated vs Actual Cost Integration */}
                <div className="p-3 rounded-xl bg-dark-800/90 border border-dark-600 flex flex-wrap items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400">{t.mockup.itinerary.estimated}</span>
                    <span className="text-slate-500">•</span>
                    <span className="text-brand-emerald font-semibold">
                      {t.mockup.itinerary.actual}
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400">
                    ✓ Vinculado a despesas do Dia 4
                  </span>
                </div>

                {/* Field Observation Note */}
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-2 text-xs text-amber-200">
                  <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <p>
                    Sem sinal de celular por 6 horas. Ponto de encontro com o guia Karen às 07:30.
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => showNotification('Parada #5 marcada como Concluída!')}
                    className="flex-1 min-w-[200px] py-2.5 px-4 rounded-xl bg-brand-emerald hover:bg-brand-emerald/90 text-dark-900 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md"
                  >
                    <Check className="w-4 h-4" />
                    <span>Marcar Parada como Concluída</span>
                  </button>

                  <button
                    onClick={() => showNotification('Horário flexibilizado em +30m!')}
                    className="py-2.5 px-4 rounded-xl bg-dark-800 hover:bg-dark-600 border border-dark-600 text-slate-300 font-semibold text-xs flex items-center gap-2 transition-all"
                  >
                    <Clock className="w-3.5 h-3.5" />
                    <span>{t.mockup.itinerary.stopAction}</span>
                  </button>
                </div>
              </article>
            </div>
          )}

          {/* TAB 2: DASHBOARD */}
          {activeTab === 'dashboard' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              {/* Card 1: Gastos / Orçamento */}
              <article
                aria-label={t.mockup.dashboard.budgetTitle}
                className="rounded-2xl bg-dark-700 p-5 border border-dark-600 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span>{t.mockup.dashboard.budgetTitle}</span>
                    <Wallet className="w-4 h-4 text-brand-amber" aria-hidden="true" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">
                    {t.mockup.dashboard.budgetSpent}
                  </div>
                  <div className="text-xs text-brand-emerald font-medium">
                    {t.mockup.dashboard.budgetRemaining}
                  </div>
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
                  <div className="text-[11px] text-slate-400 mt-1">
                    {t.mockup.dashboard.consumed}
                  </div>
                </div>
              </article>

              {/* Card 2: Moeda em Tempo Real */}
              <article
                aria-label={t.mockup.dashboard.fxTitle}
                className="rounded-2xl bg-dark-700 p-5 border border-dark-600 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span>{t.mockup.dashboard.fxTitle}</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-brand-amber/20 text-brand-amber font-semibold">
                      {t.mockup.dashboard.fxFrozen}
                    </span>
                  </div>
                  <div className="text-xs text-slate-300">{t.mockup.dashboard.fxSource}</div>
                  <div className="text-2xl font-bold text-brand-amber mt-1">
                    {t.mockup.dashboard.fxResult}
                  </div>
                </div>

                <div className="mt-4 text-[11px] text-brand-emerald flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>{t.mockup.dashboard.fxNote}</span>
                </div>
              </article>

              {/* Card 3: Mochila & Bagagem */}
              <article
                aria-label={t.mockup.dashboard.packTitle}
                className="rounded-2xl bg-dark-700 p-5 border border-dark-600 flex items-center justify-between"
              >
                <div>
                  <div className="text-xs text-slate-400 mb-1">{t.mockup.dashboard.packTitle}</div>
                  <div className="text-xl font-bold text-white">{t.mockup.dashboard.packItems}</div>
                  <div className="text-xs text-brand-sky mt-1 flex items-center gap-1">
                    <Scale className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>{t.mockup.dashboard.packWeight}</span>
                  </div>
                </div>

                <div
                  className="w-16 h-16 rounded-full border-4 border-dark-600 border-t-brand-emerald flex items-center justify-center font-bold text-sm text-brand-emerald"
                  aria-label="75% dos itens essenciais embalados"
                >
                  {t.mockup.dashboard.packProgress}
                </div>
              </article>
            </div>
          )}

          {/* TAB 3: EXPORT CENTER */}
          {activeTab === 'export' && (
            <div className="pt-6 space-y-4">
              <div className="p-4 rounded-2xl bg-dark-900 border border-dark-600 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <Share2 className="w-4 h-4 text-brand-orange" />
                    <span>{t.mockup.export.title}</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">{t.mockup.export.subtitle}</p>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-brand-emerald/15 text-brand-emerald border border-brand-emerald/30 font-semibold">
                  {t.mockup.export.badgeShared}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Export 1: CSV */}
                <div className="p-4 rounded-2xl bg-dark-700 border border-dark-600 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="w-8 h-8 rounded-xl bg-brand-emerald/15 text-brand-emerald border border-brand-emerald/30 flex items-center justify-center mb-2">
                      <FileSpreadsheet className="w-4 h-4" />
                    </div>
                    <h4 className="text-xs font-bold text-white">{t.mockup.export.csvTitle}</h4>
                    <p className="text-[11px] text-slate-400 mt-1">{t.mockup.export.csvSub}</p>
                  </div>
                  <button
                    onClick={() => showNotification('Despesas_NomadLog_2026.csv pronto para download!')}
                    className="w-full py-2 px-3 rounded-xl bg-dark-800 hover:bg-dark-600 border border-dark-600 text-xs font-semibold text-slate-200 flex items-center justify-center gap-1.5 transition-all"
                  >
                    <Download className="w-3.5 h-3.5 text-brand-emerald" />
                    <span>Exportar CSV</span>
                  </button>
                </div>

                {/* Export 2: JSON Backup */}
                <div className="p-4 rounded-2xl bg-dark-700 border border-dark-600 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="w-8 h-8 rounded-xl bg-brand-sky/15 text-brand-sky border border-brand-sky/30 flex items-center justify-center mb-2">
                      <FileCode className="w-4 h-4" />
                    </div>
                    <h4 className="text-xs font-bold text-white">{t.mockup.export.jsonTitle}</h4>
                    <p className="text-[11px] text-slate-400 mt-1">{t.mockup.export.jsonSub}</p>
                  </div>
                  <button
                    onClick={() => showNotification('Backup_Completo_Viagem.json exportado!')}
                    className="w-full py-2 px-3 rounded-xl bg-dark-800 hover:bg-dark-600 border border-dark-600 text-xs font-semibold text-slate-200 flex items-center justify-center gap-1.5 transition-all"
                  >
                    <Download className="w-3.5 h-3.5 text-brand-sky" />
                    <span>Backup JSON</span>
                  </button>
                </div>

                {/* Export 3: Markdown */}
                <div className="p-4 rounded-2xl bg-dark-700 border border-dark-600 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="w-8 h-8 rounded-xl bg-brand-purple/15 text-brand-purple border border-brand-purple/30 flex items-center justify-center mb-2">
                      <FileText className="w-4 h-4" />
                    </div>
                    <h4 className="text-xs font-bold text-white">{t.mockup.export.reportTitle}</h4>
                    <p className="text-[11px] text-slate-400 mt-1">{t.mockup.export.reportSub}</p>
                  </div>
                  <button
                    onClick={() => showNotification('Relatório formatado copiado para a área de transferência!')}
                    className="w-full py-2 px-3 rounded-xl bg-dark-800 hover:bg-dark-600 border border-dark-600 text-xs font-semibold text-slate-200 flex items-center justify-center gap-1.5 transition-all"
                  >
                    <Copy className="w-3.5 h-3.5 text-brand-purple" />
                    <span>Copiar Markdown</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
