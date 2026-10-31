import React, { useState } from 'react';
import { Compass, ArrowRight, Menu, X, Globe } from 'lucide-react';
import { useLocale } from '../context/LocaleContext';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, locale, setLocale, isPt } = useLocale();

  const navLinks = [
    { href: '#como-funciona', label: t.nav.howItWorks },
    { href: '#preview-app', label: t.nav.mockup },
    { href: '#conversor', label: t.nav.converter },
    { href: '#comparativo', label: t.nav.comparison },
    { href: '#precos', label: t.nav.pricing },
    { href: '#faq', label: t.nav.faq },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-dark-800/90 border-b border-dark-600/60">
      {/* Skip to main content for screen readers / keyboard navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[100] px-4 py-2 bg-brand-orange text-white rounded-lg font-bold shadow-lg"
      >
        {t.nav.skipLink}
      </a>

      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between"
        aria-label="Navegação Principal"
      >
        {/* Logo and Brand Title */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-orange rounded-xl p-1"
        >
          <div className="w-10 h-10 rounded-xl bg-brand-orange/15 border border-brand-orange/30 flex items-center justify-center text-brand-orange transition-transform group-hover:scale-105">
            <Compass className="w-6 h-6" aria-hidden="true" />
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
              NomadLog{' '}
              <span className="text-[10px] uppercase tracking-widest px-1.5 py-0.5 rounded bg-brand-emerald/15 border border-brand-emerald/30 text-brand-emerald font-semibold">
                Offline-First
              </span>
            </span>
            <p className="text-xs text-slate-400">{t.nav.tagline}</p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-brand-orange transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Controls (Language Switcher + CTA) */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Selector */}
          <div className="flex items-center bg-dark-700 p-1 rounded-xl border border-dark-600">
            <button
              type="button"
              onClick={() => setLocale('pt')}
              aria-label="Mudar para Português"
              className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all ${
                isPt
                  ? 'bg-brand-orange text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              🇧🇷 PT
            </button>
            <button
              type="button"
              onClick={() => setLocale('en')}
              aria-label="Switch to English"
              className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all ${
                !isPt
                  ? 'bg-brand-orange text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              🇺🇸 EN
            </button>
          </div>

          <a
            href="#precos"
            className="px-5 py-2.5 rounded-xl bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold text-sm transition-all transform active:scale-95 glow-orange flex items-center gap-2"
          >
            <span>{t.nav.openApp}</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>

        {/* Mobile Header Buttons */}
        <div className="flex md:hidden items-center gap-2">
          {/* Quick Language Toggle on Mobile */}
          <button
            type="button"
            onClick={() => setLocale(locale === 'pt' ? 'en' : 'pt')}
            className="px-2 py-1.5 rounded-lg bg-dark-700 text-slate-200 border border-dark-600 text-xs font-bold flex items-center gap-1"
          >
            <Globe className="w-3.5 h-3.5 text-brand-amber" />
            <span>{locale.toUpperCase()}</span>
          </button>

          <a
            href="#precos"
            className="px-3.5 py-2 rounded-xl bg-brand-orange text-white font-semibold text-xs flex items-center gap-1"
          >
            <span>App</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden bg-dark-800 border-b border-dark-600 px-4 pt-2 pb-6 space-y-3"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-200 hover:text-brand-orange border-b border-dark-700"
            >
              {link.label}
            </a>
          ))}

          <div className="pt-2 flex items-center justify-between">
            <span className="text-xs text-slate-400">Idioma / Language:</span>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setLocale('pt')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold ${
                  isPt ? 'bg-brand-orange text-white' : 'bg-dark-700 text-slate-300'
                }`}
              >
                🇧🇷 Português
              </button>
              <button
                type="button"
                onClick={() => setLocale('en')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold ${
                  !isPt ? 'bg-brand-orange text-white' : 'bg-dark-700 text-slate-300'
                }`}
              >
                🇺🇸 English
              </button>
            </div>
          </div>

          <div className="pt-2">
            <a
              href="#precos"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl bg-brand-orange text-white font-bold text-center flex items-center justify-center gap-2 shadow-lg"
            >
              <span>{t.nav.openAppFree}</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
