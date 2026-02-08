import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { WidgetsSection } from './components/WidgetsSection';
import { MobileShowcase } from './components/MobileShowcase';
import { CTASection } from './components/CTASection';
import { DownloadPage } from './components/DownloadPage';
import { StatsSection } from './components/StatsSection';
import { DocumentationPage } from './components/DocumentationPage';
import { TestimonialsSection } from './components/TestimonialsSection';
import { InteractiveDemo } from './components/InteractiveDemo';
import { UseCasesSection } from './components/UseCasesSection';
import { AppModesSection } from './components/AppModesSection';
import { PricingPage } from './components/PricingPage';
import { ParticleBackground, FloatingIcons } from './components/AnimatedBackground';
import { Mic, Sparkles, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logo from 'figma:asset/393229985c105cd8bd4b8135ea7db02838fecea4.png';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'download' | 'docs' | 'pricing'>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white overflow-x-hidden">
      {/* Animated Backgrounds */}
      <ParticleBackground />
      <FloatingIcons />

      {/* Header */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/5 border-b border-white/10">
        <div className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
          <motion.button
            onClick={() => setCurrentPage('home')}
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src={logo} 
                alt="AquaAI Logo" 
                className="w-10 h-10 object-contain drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]" 
                style={{ filter: 'brightness(1.1) contrast(1.1)' }}
              />
            </motion.div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              AquaAI
            </span>
          </motion.button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 text-sm">
            <button 
              onClick={() => setCurrentPage('home')}
              className={`hover:text-cyan-300 transition-colors ${currentPage === 'home' ? 'text-cyan-300' : ''}`}
            >
              Главная
            </button>
            <a href="#features" className="hover:text-cyan-300 transition-colors">
              Преимущества
            </a>
            <button 
              onClick={() => setCurrentPage('pricing')}
              className={`hover:text-cyan-300 transition-colors ${currentPage === 'pricing' ? 'text-cyan-300' : ''}`}
            >
              Цены
            </button>
            <button 
              onClick={() => setCurrentPage('docs')}
              className={`hover:text-cyan-300 transition-colors ${currentPage === 'docs' ? 'text-cyan-300' : ''}`}
            >
              Документация
            </button>
            <button 
              onClick={() => setCurrentPage('download')}
              className={`hover:text-cyan-300 transition-colors ${currentPage === 'download' ? 'text-cyan-300' : ''}`}
            >
              Скачать
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <motion.button 
            className="hidden md:block px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentPage('pricing')}
          >
            Начать
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-white/10"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
                <button 
                  onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }}
                  className={`text-left py-2 hover:text-cyan-300 transition-colors ${currentPage === 'home' ? 'text-cyan-300' : ''}`}
                >
                  Главная
                </button>
                <a 
                  href="#features" 
                  className="py-2 hover:text-cyan-300 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Преимущества
                </a>
                <button 
                  onClick={() => { setCurrentPage('pricing'); setMobileMenuOpen(false); }}
                  className={`text-left py-2 hover:text-cyan-300 transition-colors ${currentPage === 'pricing' ? 'text-cyan-300' : ''}`}
                >
                  Цены
                </button>
                <button 
                  onClick={() => { setCurrentPage('docs'); setMobileMenuOpen(false); }}
                  className={`text-left py-2 hover:text-cyan-300 transition-colors ${currentPage === 'docs' ? 'text-cyan-300' : ''}`}
                >
                  Документация
                </button>
                <button 
                  onClick={() => { setCurrentPage('download'); setMobileMenuOpen(false); }}
                  className={`text-left py-2 hover:text-cyan-300 transition-colors ${currentPage === 'download' ? 'text-cyan-300' : ''}`}
                >
                  Скачать
                </button>
                <button 
                  className="mt-4 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-center"
                  onClick={() => { setCurrentPage('pricing'); setMobileMenuOpen(false); }}
                >
                  Начать
                </button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <HeroSection />
              <FeaturesSection />
              <InteractiveDemo />
              <AppModesSection />
              <UseCasesSection />
              <StatsSection />
              <TestimonialsSection />
              <WidgetsSection />
              <MobileShowcase />
              <CTASection />
            </motion.div>
          )}
          {currentPage === 'download' && (
            <motion.div
              key="download"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
            >
              <DownloadPage />
            </motion.div>
          )}
          {currentPage === 'docs' && (
            <motion.div
              key="docs"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
            >
              <DocumentationPage />
            </motion.div>
          )}
          {currentPage === 'pricing' && (
            <motion.div
              key="pricing"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
            >
              <PricingPage />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 mt-20">
        <div className="container mx-auto px-4 md:px-6 text-center text-sm text-gray-400">
          <p>© 2026 AquaAI. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}