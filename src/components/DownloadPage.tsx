import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Download, 
  CheckCircle, 
  Monitor, 
  Smartphone, 
  Tablet,
  Package,
  Shield,
  Zap,
  Users,
  TrendingUp,
  Star,
  ArrowRight,
  ChevronRight,
  Clock,
  HardDrive,
  Cpu
} from 'lucide-react';

export function DownloadPage() {
  const [selectedPlatform, setSelectedPlatform] = useState<'windows' | 'macos' | 'linux' | 'android' | 'ios'>('windows');
  const [downloadCount, setDownloadCount] = useState(156234);
  const [activeUsers, setActiveUsers] = useState(98456);

  useEffect(() => {
    const interval = setInterval(() => {
      setDownloadCount(prev => prev + Math.floor(Math.random() * 3));
      setActiveUsers(prev => prev + Math.floor(Math.random() * 2));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const platforms = [
    {
      id: 'windows',
      name: 'Windows',
      icon: Monitor,
      versions: ['Windows 11', 'Windows 10'],
      size: '142 MB',
      version: '2.1.0',
      requirements: 'Windows 10 (64-bit) или новее',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      id: 'macos',
      name: 'macOS',
      icon: Monitor,
      versions: ['macOS Ventura', 'macOS Monterey', 'macOS Big Sur'],
      size: '128 MB',
      version: '2.1.0',
      requirements: 'macOS 12.0 или новее',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      id: 'linux',
      name: 'Linux',
      icon: Monitor,
      versions: ['Ubuntu 20.04+', 'Fedora 35+', 'Debian 11+'],
      size: '135 MB',
      version: '2.1.0 Beta',
      requirements: 'Linux Kernel 5.10+',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      id: 'android',
      name: 'Android',
      icon: Smartphone,
      versions: ['Android 10+', 'Android 11+', 'Android 12+'],
      size: '85 MB',
      version: '2.1.0',
      requirements: 'Android 10.0 или новее',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      id: 'ios',
      name: 'iOS',
      icon: Tablet,
      versions: ['iOS 15+', 'iOS 16+', 'iPadOS 15+'],
      size: '92 MB',
      version: '2.1.0',
      requirements: 'iOS 15.0 или новее',
      gradient: 'from-indigo-500 to-blue-500',
    },
  ];

  const features = [
    'Пожизненные бесплатные обновления',
    'Без рекламы и подписок',
    'Локальная обработка данных',
    'Поддержка 50+ языков',
    'Низкое потребление ресурсов',
    'Техническая поддержка 24/7',
  ];

  const stats = [
    { label: 'Общее количество загрузок', value: downloadCount, icon: Download, color: 'cyan' },
    { label: 'Активных пользователей', value: activeUsers, icon: Users, color: 'blue' },
    { label: 'Средний рейтинг', value: '4.9', icon: Star, color: 'yellow', suffix: '/5' },
    { label: 'Команд в секунду', value: '12K+', icon: Zap, color: 'green' },
  ];

  return (
    <div className="min-h-screen py-20 px-4 md:px-6">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/20 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            }}
            animate={{
              y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000)],
              x: [null, Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000)],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', delay: 0.2 }}
          >
            <Download className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-300">Последняя версия 2.1.0</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl mb-6">
            Скачать{' '}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              AquaAI
            </span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Выберите версию для вашей операционной системы и начните управлять ПК голосом уже сегодня
          </p>
        </motion.div>

        {/* Live Stats */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 bg-gradient-to-br from-${stat.color}-500 to-${stat.color}-600 rounded-xl flex items-center justify-center`}>
                  <stat.icon className="w-5 h-5" />
                </div>
                <TrendingUp className={`w-4 h-4 text-${stat.color}-400`} />
              </div>
              <motion.div 
                className="text-3xl mb-1"
                key={typeof stat.value === 'number' ? stat.value : stat.value}
              >
                {typeof stat.value === 'number' ? stat.value.toLocaleString() : stat.value}
                {stat.suffix}
              </motion.div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Platform Selection */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {platforms.map((platform) => (
            <motion.button
              key={platform.id}
              onClick={() => setSelectedPlatform(platform.id as any)}
              className={`flex items-center gap-3 px-6 py-4 rounded-2xl border transition-all duration-300 ${
                selectedPlatform === platform.id
                  ? `bg-gradient-to-r ${platform.gradient} border-transparent shadow-lg`
                  : 'bg-white/5 border-white/10 hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <platform.icon className="w-6 h-6" />
              <span className="font-medium">{platform.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Download Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedPlatform}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Side - Download Info */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${platforms.find(p => p.id === selectedPlatform)?.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <Package className="w-8 h-8" />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl">
                        AquaAI для {platforms.find(p => p.id === selectedPlatform)?.name}
                      </h2>
                      <p className="text-gray-400">
                        Версия {platforms.find(p => p.id === selectedPlatform)?.version}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 text-gray-300">
                      <HardDrive className="w-5 h-5 text-cyan-400" />
                      <span>Размер: {platforms.find(p => p.id === selectedPlatform)?.size}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <Cpu className="w-5 h-5 text-blue-400" />
                      <span>{platforms.find(p => p.id === selectedPlatform)?.requirements}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <Clock className="w-5 h-5 text-purple-400" />
                      <span>Обновлено: 2 февраля 2026</span>
                    </div>
                  </div>

                  <motion.button
                    className={`group w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r ${platforms.find(p => p.id === selectedPlatform)?.gradient} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Download className="w-6 h-6" />
                    <span className="text-lg">Скачать сейчас</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>

                  <p className="text-xs text-gray-400 text-center mt-4">
                    Бесплатно • Без регистрации • Безопасно
                  </p>
                </div>

                {/* Right Side - Features */}
                <div>
                  <h3 className="text-xl mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-green-400" />
                    Что входит в комплект
                  </h3>
                  <div className="space-y-3">
                    {features.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3 text-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index }}
                      >
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10">
                    <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                      <Smartphone className="w-4 h-4 text-cyan-400" />
                      Поддерживаемые версии:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {platforms.find(p => p.id === selectedPlatform)?.versions.map((version, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 bg-white/5 rounded-full border border-white/10"
                        >
                          {version}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Installation Guide */}
        <motion.div
          className="max-w-4xl mx-auto mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl text-center mb-8">
            Быстрая{' '}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              установка
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'Скачайте',
                description: 'Нажмите кнопку загрузки и сохраните установщик',
                icon: Download,
              },
              {
                step: '02',
                title: 'Установите',
                description: 'Запустите установщик и следуйте инструкциям',
                icon: Package,
              },
              {
                step: '03',
                title: 'Наслаждайтесь',
                description: 'Запустите AquaAI и начните голосовое управление',
                icon: Zap,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg text-xl">
                  {item.step}
                </div>
                <item.icon className="w-12 h-12 text-cyan-400 mb-4 ml-auto" />
                <h3 className="text-xl mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Preview */}
        <motion.div
          className="max-w-4xl mx-auto mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <h3 className="text-2xl mb-4">Нужна помощь?</h3>
          <p className="text-gray-400 mb-6">
            Ознакомьтесь с документацией или свяжитесь с нашей службой поддержки
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              className="px-6 py-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-all"
              whileHover={{ scale: 1.05 }}
            >
              Документация
            </motion.button>
            <motion.button
              className="px-6 py-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-all"
              whileHover={{ scale: 1.05 }}
            >
              Связаться с поддержкой
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}