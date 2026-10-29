import React from 'react';
import { Coins, Map, BookOpen, Backpack, ChevronRight } from 'lucide-react';
import { FeatureItem } from '../types';

const FEATURES: FeatureItem[] = [
  {
    id: 'multimoedas',
    title: 'Multimoedas com Câmbio Offline',
    description:
      'Pague em Dong, Baht, Ienes ou Pesos. O app sabe a taxa de conversão congelada e desconta da sua meta em Reais na hora.',
    tag: 'Conversão em 0.01s',
    iconName: 'coins',
    colorClass: 'orange',
  },
  {
    id: 'roteiro-mapas',
    title: 'Roteiro & Mapas Vetoriais Leves',
    description:
      'Mapas em SVG leves que nunca falham por falta de internet. Nós de rota, altimetria da trilha e horários de transporte.',
    tag: 'Altimetria e Paradas',
    iconName: 'map',
    colorClass: 'sky',
  },
  {
    id: 'diario-memorias',
    title: 'Diário de Bordo & Memórias',
    description:
      'Fotos guardadas no disco local, tags de clima, altitude do mirante e estado de espírito da aventura para nunca esquecer.',
    tag: 'Fotos & Histórias',
    iconName: 'book-open',
    colorClass: 'purple',
  },
  {
    id: 'checklist-mochila',
    title: 'Checklist com Balança da Mochila',
    description:
      'Anel de progresso circular dos itens essenciais, documentos e remédios, com cálculo de peso em kg para não pagar excesso.',
    tag: 'Peso e Documentos',
    iconName: 'backpack',
    colorClass: 'emerald',
  },
];

export const Features: React.FC = () => {
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
            Desenvolvido por quem viaja para quem viaja
          </h2>
          <p className="text-slate-400 text-base">
            Chega de perder tempo abrindo 4 aplicativos diferentes ou esquecendo quanto pagou num táxi
            porque o roaming estava desligado.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((item) => {
            const styles = getColorClasses(item.colorClass);
            return (
              <article
                key={item.id}
                aria-labelledby={`feature-${item.id}`}
                className={`p-6 rounded-2xl bg-dark-800 border border-dark-600 ${styles.hover} transition-all flex flex-col justify-between`}
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 ${styles.bg}`}
                  >
                    {getIcon(item.iconName)}
                  </div>
                  <h3 id={`feature-${item.id}`} className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
                </div>
                <div
                  className={`mt-6 text-xs font-semibold flex items-center gap-1 ${styles.tagText}`}
                >
                  <span>{item.tag}</span>
                  <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

