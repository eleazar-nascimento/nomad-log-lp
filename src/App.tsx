import React from 'react';
import { AnnouncementBanner } from './components/AnnouncementBanner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductMockup } from './components/ProductMockup';
import { LiveConverter } from './components/LiveConverter';
import { Features } from './components/Features';
import { ComparisonTable } from './components/ComparisonTable';
import { Pricing } from './components/Pricing';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-800 text-slate-100 flex flex-col">
      <AnnouncementBanner />
      <Navbar />
      <main id="main-content" className="flex-1">
        <Hero />
        <ProductMockup />
        <LiveConverter />
        <Features />
        <ComparisonTable />
        <Pricing />
        <Faq />
      </main>
      <Footer />
    </div>
  );
};

export default App;

