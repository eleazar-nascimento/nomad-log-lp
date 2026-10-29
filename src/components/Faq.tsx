import React from 'react';
import { ChevronDown } from 'lucide-react';
import { FaqItem } from '../types';

const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'internet',
    question: 'O app realmente não consome nada de internet?',
    answer:
      'Sim! O banco de dados, o conversor de moedas, os mapas vetoriais e as fotos ficam armazenados localmente na memória do seu smartphone. Você pode colocar em modo avião ou desligar os dados móveis sem medo.',
  },
  {
    id: 'cambio',
    question: 'Como o câmbio se mantém atualizado se não há conexão?',
    answer:
      'Sempre que você estiver conectado no Wi-Fi de um café ou hostel, o app busca as cotações oficiais e congela o snapshot no celular. Quando você vai para a rua ou para a trilha, ele usa essa taxa congelada.',
  },
  {
    id: 'backup',
    question: 'E se eu trocar de celular durante a viagem?',
    answer:
      'No plano Mochileiro Pro, todas as alterações pendentes entram em uma fila e são enviadas para um backup criptografado sempre que houver sinal de internet.',
  },
];

export const Faq: React.FC = () => {
  const [openId, setOpenId] = React.useState<string | null>('internet');

  return (
    <section id="faq" aria-labelledby="faq-heading" className="py-20 bg-dark-800 border-t border-dark-600/60">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h2 id="faq-heading" className="text-3xl font-bold text-white mb-3">
            Dúvidas Frequentes
          </h2>
          <p className="text-slate-400 text-sm">
            Tudo o que você precisa saber sobre o funcionamento offline do NomadLog
          </p>
        </header>

        <div className="space-y-4" role="region" aria-label="Perguntas Frequentes">
          {FAQ_ITEMS.map((item) => {
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
