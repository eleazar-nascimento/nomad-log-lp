import React, { useState } from 'react';
import { Compass, ArrowRight, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#como-funciona', label: 'Como Funciona' },
    { href: '#conversor', label: 'Conversor Offline' },
    { href: '#comparativo', label: 'Diferenciais' },
    { href: '#precos', label: 'Planos' },
    { href: '#faq', label: 'FAQ' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-dark-800/85 border-b border-dark-600/60">
      {/* Skip to main content for screen readers / keyboard navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[100] px-4 py-2 bg-brand-orange text-white rounded-lg font-bold shadow-lg"
      >
        Pular para o conteúdo principal
      </a>

      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between"
        aria-label="Navegação Principal"
      >
        {/* Logo and Brand Title */}
        <a href="#" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-orange rounded-xl p-1">
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
            <p className="text-xs text-slate-400">Diário &amp; Gastos Nômades</p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
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

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#precos"
            className="px-5 py-2.5 rounded-xl bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold text-sm transition-all transform active:scale-95 glow-orange flex items-center gap-2"
          >
            <span>Abrir App</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="#precos"
            className="px-3.5 py-2 rounded-xl bg-brand-orange text-white font-semibold text-xs flex items-center gap-1.5"
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
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
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
          <div className="pt-2">
            <a
              href="#precos"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl bg-brand-orange text-white font-bold text-center flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Abrir App Grátis</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

