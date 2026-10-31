import React from 'react';
import {
  Coins,
  Map,
  BookOpen,
  Backpack,
  Activity,
  FileSpreadsheet,
} from 'lucide-react';
import { useLocale } from '../context/LocaleContext';
import { FeatureItem } from '../types';

export const Features: React.FC = () => {
  const { t } = useLocale();

  const getIcon = (name: FeatureItem['iconName']) => {
    switch (name) {
      case 'coins':
        return <Coins className="w-6 h-6" aria-hidden="true" />;
      case 'map':
        return <Map className="w-6 h-6" aria-hidden="true" />;
      case 'book-open':
        return <BookOpen className="w-6 h-6" aria-hidden="true" />;
      case 'backpack':
        return <Backpack className="w-6 h-6" aria-hidden="true" />;
      case 'activity':
        return <Activity className="w-6 h-6" aria-hidden="true" />;
      case 'file-spreadsheet':
        return <FileSpreadsheet className="w-6 h-6" aria-hidden="true" />;
      default:
        return <Map className="w-6 h-6" aria-hidden="true" />;
    }
  };

  const getColorClasses = (color: FeatureItem['colorClass']) => {
    switch (color) {
      case 'orange':
        return {
          bg: 'bg-brand-orange/15 border-brand-orange/30 text-brand-orange',
          hover: 'hover:border-brand-orange/50',
          tagText: 'text-brand-orange',
        };
      case 'sky':
        return {
          bg: 'bg-brand-sky/15 border-brand-sky/30 text-brand-sky',
          hover: 'hover:border-brand-sky/50',
          tagText: 'text-brand-sky',
        };
      case 'purple':
        return {
          bg: 'bg-brand-purple/15 border-brand-purple/30 text-brand-purple',
          hover: 'hover:border-brand-purple/50',
          tagText: 'text-brand-purple',
        };
      case 'emerald':
        return {
          bg: 'bg-brand-emerald/15 border-brand-emerald/30 text-brand-emerald',
          hover: 'hover:border-brand-emerald/50',
          tagText: 'text-brand-emerald',
        };
      default:
        return {
          bg: 'bg-brand-orange/15 border-brand-orange/30 text-brand-orange',
          hover: 'hover:border-brand-orange/50',
          tagText: 'text-brand-orange',
        };
    }
  };

  return (
    <section
      id="como-funciona"
      aria-labelledby="features-heading"
      className="py-20 bg-dark-900 border-t border-dark-600/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center max-w-3xl mx-auto mb-16">
          <h2 id="features-heading" className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t.features.heading}
          </h2>
          <p className="text-slate-400 text-base">
            {t.features.subheading}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.features.items.map((feature) => {
            const colors = getColorClasses(feature.colorClass);

            return (
              <article
                key={feature.id}
                aria-labelledby={`feature-title-${feature.id}`}
                className={`p-6 rounded-3xl bg-dark-800 border border-dark-600 ${colors.hover} transition-all duration-200 flex flex-col justify-between group`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-2xl border flex items-center justify-center ${colors.bg}`}
                    >
                      {getIcon(feature.iconName)}
                    </div>
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider ${colors.tagText}`}
                    >
                      {feature.tag}
                    </span>
                  </div>

                  <h3
                    id={`feature-title-${feature.id}`}
                    className="text-lg font-bold text-white mb-2 group-hover:text-brand-orange transition-colors"
                  >
                    {feature.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {feature.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
