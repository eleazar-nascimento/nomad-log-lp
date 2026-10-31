import React, { useState, useMemo } from 'react';
import { ShieldCheck } from 'lucide-react';
import { useLocale } from '../context/LocaleContext';
import { CurrencyOption } from '../types';

const CURRENCIES: CurrencyOption[] = [
  { code: 'THB', name: 'Baht Tailandês', flag: '🇹🇭', rateToUSD: 34.50 },
  { code: 'VND', name: 'Dong Vietnamita', flag: '🇻🇳', rateToUSD: 25400 },
  { code: 'EUR', name: 'Euro', flag: '🇪🇺', rateToUSD: 0.92 },
  { code: 'USD', name: 'Dólar Americano', flag: '🇺🇸', rateToUSD: 1.00 },
  { code: 'JPY', name: 'Iene Japonês', flag: '🇯🇵', rateToUSD: 152.4 },
  { code: 'ARS', name: 'Peso Argentino', flag: '🇦🇷', rateToUSD: 1045 },
  { code: 'CLP', name: 'Peso Chileno', flag: '🇨🇱', rateToUSD: 965 },
];

const BRL_USD_RATE = 5.85;

export const LiveConverter: React.FC = () => {
  const { t, locale } = useLocale();
  const [selectedCurrencyCode, setSelectedCurrencyCode] = useState<string>('THB');
  const [amount, setAmount] = useState<string>('150');

  const selectedCurrency = useMemo(
    () => CURRENCIES.find((c) => c.code === selectedCurrencyCode) || CURRENCIES[0],
    [selectedCurrencyCode]
  );

  const convertedBRL = useMemo(() => {
    const numericAmount = parseFloat(amount) || 0;
    const rateToUSD = selectedCurrency.rateToUSD || 1;
    const valInUSD = numericAmount / rateToUSD;
    const valInBRL = valInUSD * BRL_USD_RATE;

    const currencyCode = locale === 'pt' ? 'BRL' : 'USD';
    const targetVal = locale === 'pt' ? valInBRL : valInUSD;

    return new Intl.NumberFormat(locale === 'pt' ? 'pt-BR' : 'en-US', {
      style: 'currency',
      currency: currencyCode,
    }).format(targetVal);
  }, [amount, selectedCurrency, locale]);

  return (
    <section id="conversor" aria-labelledby="conversor-heading" className="py-20 bg-dark-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <span className="text-xs font-bold text-brand-amber uppercase tracking-widest px-3 py-1 rounded-full bg-brand-amber/10 border border-brand-amber/30">
            {t.converter.tag}
          </span>
          <h2 id="conversor-heading" className="text-3xl sm:text-4xl font-bold text-white mt-4 mb-3">
            {t.converter.heading}
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-sm sm:text-base">
            {t.converter.subheading}
          </p>
        </header>

        <div className="bg-dark-700 rounded-3xl p-6 sm:p-8 border border-dark-600 glow-amber">
          <form
            onSubmit={(e) => e.preventDefault()}
            role="search"
            aria-label="Simulador de Câmbio Offline"
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <div>
              <label
                htmlFor="currency-select"
                className="block text-xs font-semibold text-slate-300 mb-2"
              >
                {t.converter.payInLabel}
              </label>
              <div className="flex items-center gap-2 mb-3">
                <select
                  id="currency-select"
                  name="currency"
                  value={selectedCurrencyCode}
                  onChange={(e) => setSelectedCurrencyCode(e.target.value)}
                  className="bg-dark-800 border border-dark-600 rounded-xl px-3 py-2 text-sm text-white font-semibold focus:outline-none focus:border-brand-orange w-full"
                >
                  {CURRENCIES.map((currency) => (
                    <option key={currency.code} value={currency.code}>
                      {currency.flag} {currency.code} ({currency.name})
                    </option>
                  ))}
                </select>
              </div>

              <label htmlFor="amount-input" className="sr-only">
                {t.converter.placeholder}
              </label>
              <input
                id="amount-input"
                name="amount"
                type="number"
                min="0"
                step="any"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder={t.converter.placeholder}
                className="w-full bg-dark-800 border border-dark-600 rounded-xl px-4 py-3 text-2xl font-bold text-white focus:outline-none focus:border-brand-orange"
              />
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <span className="block text-xs font-semibold text-slate-300 mb-2">
                  {t.converter.equivalentLabel}
                </span>
                <div
                  className="bg-dark-800 border border-dark-600 rounded-xl px-4 py-3 min-h-[58px] flex items-center"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  <span className="text-2xl font-bold text-brand-amber">{convertedBRL}</span>
                </div>
              </div>

              <div className="mt-4 p-3 rounded-xl bg-dark-800/60 border border-dark-600 flex items-center justify-between text-xs">
                <span className="text-slate-400">{t.converter.statusLabel}</span>
                <span className="text-brand-emerald font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4" aria-hidden="true" />
                  <span>{t.converter.statusValue}</span>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
