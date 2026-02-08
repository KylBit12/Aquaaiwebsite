import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Smartphone, Monitor, Mic, Bell, Settings } from 'lucide-react';

export function MobileShowcase() {
  const [activeDevice, setActiveDevice] = useState<'mobile' | 'desktop'>('mobile');

  return (
    <section className="py-20 px-4 md:px-6 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl mb-6">
            Доступно на всех{' '}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              устройствах
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Используйте AquaAI на телефоне, планшете или компьютере
          </p>

          {/* Device Switcher */}
          <div className="inline-flex gap-2 p-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
            <button
              onClick={() => setActiveDevice('mobile')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all ${
                activeDevice === 'mobile'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg'
                  : 'hover:bg-white/5'
              }`}
            >
              <Smartphone className="w-5 h-5" />
              <span>Телефон</span>
            </button>
            <button
              onClick={() => setActiveDevice('desktop')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all ${
                activeDevice === 'desktop'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg'
                  : 'hover:bg-white/5'
              }`}
            >
              <Monitor className="w-5 h-5" />
              <span>ПК</span>
            </button>
          </div>
        </motion.div>

        <div className="flex justify-center items-center min-h-[600px]">
          {activeDevice === 'mobile' ? (
            <motion.div
              key="mobile"
              initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Mobile Device Frame */}
              <div className="relative w-[320px] h-[640px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-[3rem] p-3 shadow-2xl shadow-cyan-500/20 border-4 border-gray-700">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-3xl z-10" />

                {/* Screen */}
                <div className="relative h-full bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 rounded-[2.5rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center px-8 pt-8 pb-4 text-xs">
                    <span>12:34</span>
                    <div className="flex gap-1 items-center">
                      <Mic className="w-3 h-3" />
                      <Bell className="w-3 h-3" />
                    </div>
                  </div>

                  {/* App Content */}
                  <div className="px-6 py-4">
                    <motion.div
                      className="text-center mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <h3 className="text-2xl mb-2">AquaAI</h3>
                      <p className="text-xs text-gray-400">Ваш голосовой помощник</p>
                    </motion.div>

                    {/* Mic Button */}
                    <motion.div
                      className="flex justify-center mb-6"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5, type: 'spring' }}
                    >
                      <motion.button
                        className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/50"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        animate={{
                          boxShadow: [
                            '0 10px 30px rgba(6, 182, 212, 0.5)',
                            '0 10px 50px rgba(6, 182, 212, 0.8)',
                            '0 10px 30px rgba(6, 182, 212, 0.5)',
                          ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Mic className="w-10 h-10" />
                      </motion.button>
                    </motion.div>

                    {/* Suggestions */}
                    <div className="space-y-2">
                      {['Открыть камеру', 'Позвонить маме', 'Напомнить в 18:00'].map(
                        (text, i) => (
                          <motion.div
                            key={i}
                            className="bg-white/5 backdrop-blur-sm rounded-xl p-3 text-sm border border-white/10"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 + i * 0.1 }}
                          >
                            {text}
                          </motion.div>
                        )
                      )}
                    </div>
                  </div>

                  {/* Bottom Navigation */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex justify-around items-center py-3 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                      <Mic className="w-6 h-6 text-cyan-400" />
                      <Bell className="w-6 h-6 text-gray-400" />
                      <Settings className="w-6 h-6 text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/50"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Smartphone className="w-10 h-10" />
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="desktop"
              initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Desktop Monitor */}
              <div className="relative">
                {/* Screen */}
                <div className="w-[900px] h-[540px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-2 shadow-2xl shadow-cyan-500/20 border-4 border-gray-700">
                  <div className="h-full bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 rounded-xl overflow-hidden">
                    {/* Top Bar */}
                    <div className="flex items-center justify-between px-6 py-3 bg-white/5 backdrop-blur-sm border-b border-white/10">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                          <Mic className="w-5 h-5" />
                        </div>
                        <span className="text-lg">AquaAI Desktop</span>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full" />
                        <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                        <div className="w-3 h-3 bg-green-500 rounded-full" />
                      </div>
                    </div>

                    {/* Desktop Content */}
                    <div className="p-8 grid grid-cols-3 gap-6 h-full">
                      <motion.div
                        className="col-span-2 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <h3 className="text-xl mb-4">Голосовое управление</h3>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                            <span className="text-sm">
                              "Открой документ презентация.pptx"
                            </span>
                          </div>
                          <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl border border-cyan-500/30">
                            <Mic className="w-5 h-5 text-cyan-400" />
                            <span className="text-sm">Открываю презентацию...</span>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div
                        className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <h3 className="text-lg mb-4">Быстрые действия</h3>
                        <div className="space-y-2">
                          {[
                            'Открыть файл',
                            'Создать документ',
                            'Отправить письмо',
                          ].map((action, i) => (
                            <button
                              key={i}
                              className="w-full p-3 bg-white/5 hover:bg-white/10 rounded-xl text-sm text-left transition-all"
                            >
                              {action}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Monitor Stand */}
                <div className="flex justify-center">
                  <div className="w-32 h-4 bg-gray-700 rounded-b-xl" />
                </div>
                <div className="flex justify-center">
                  <div className="w-48 h-2 bg-gray-800 rounded-full" />
                </div>

                {/* Floating element */}
                <motion.div
                  className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/50"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <Monitor className="w-10 h-10" />
                </motion.div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
