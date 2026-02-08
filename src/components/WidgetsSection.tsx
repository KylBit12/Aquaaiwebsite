import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  MessageSquare,
  Folder,
  Music,
  Settings,
  Calendar,
  Mail,
  Cloud,
  Activity,
  Battery,
  Wifi,
  Volume2,
  Sun,
  Moon,
} from 'lucide-react';

export function WidgetsSection() {
  const [time, setTime] = useState(new Date());
  const [cpuUsage, setCpuUsage] = useState(45);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    const cpuTimer = setInterval(() => {
      setCpuUsage(Math.floor(Math.random() * 40) + 30);
    }, 2000);
    return () => {
      clearInterval(timer);
      clearInterval(cpuTimer);
    };
  }, []);

  const commands = [
    { text: '"Открой Chrome"', delay: 0 },
    { text: '"Включи музыку"', delay: 0.1 },
    { text: '"Создай файл"', delay: 0.2 },
    { text: '"Напиши письмо"', delay: 0.3 },
  ];

  const recentApps = [
    { icon: Folder, name: 'Проводник', color: 'from-yellow-500 to-orange-500' },
    { icon: Music, name: 'Spotify', color: 'from-green-500 to-emerald-500' },
    { icon: Mail, name: 'Почта', color: 'from-blue-500 to-cyan-500' },
    { icon: Calendar, name: 'Календарь', color: 'from-purple-500 to-pink-500' },
  ];

  return (
    <section id="widgets" className="py-20 px-4 md:px-6 relative">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl mb-6">
            Виджеты и{' '}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Возможности
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Интерактивные виджеты для управления вашим ПК голосом
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Voice Command Widget */}
          <motion.div
            className="lg:col-span-2 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-6 border border-white/10 shadow-2xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl">Голосовые команды</h3>
                <p className="text-sm text-gray-400">Примеры команд</p>
              </div>
            </div>

            <div className="space-y-3">
              {commands.map((command, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 flex items-center gap-3 hover:bg-white/10 transition-all"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: command.delay }}
                  whileHover={{ x: 5 }}
                >
                  <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                  <span className="text-gray-300">{command.text}</span>
                  <motion.div
                    className="ml-auto flex gap-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  >
                    <div className="w-1 h-4 bg-cyan-400 rounded-full" />
                    <div className="w-1 h-6 bg-cyan-400 rounded-full" />
                    <div className="w-1 h-4 bg-cyan-400 rounded-full" />
                  </motion.div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-400">
              <Activity className="w-4 h-4 text-green-400" />
              <span>AI активен и готов к работе</span>
            </div>
          </motion.div>

          {/* System Status Widget */}
          <motion.div
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-6 border border-white/10 shadow-2xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                <Settings className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl">Система</h3>
                <p className="text-sm text-gray-400">Статус</p>
              </div>
            </div>

            <div className="space-y-4">
              {/* CPU Usage */}
              <div>
                <div className="flex justify-between mb-2 text-sm">
                  <span className="text-gray-300">CPU</span>
                  <span className="text-cyan-400">{cpuUsage}%</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${cpuUsage}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              {/* Battery */}
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                <div className="flex items-center gap-2">
                  <Battery className="w-5 h-5 text-green-400" />
                  <span className="text-sm text-gray-300">Батарея</span>
                </div>
                <span className="text-sm text-green-400">85%</span>
              </div>

              {/* WiFi */}
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                <div className="flex items-center gap-2">
                  <Wifi className="w-5 h-5 text-blue-400" />
                  <span className="text-sm text-gray-300">WiFi</span>
                </div>
                <span className="text-sm text-blue-400">Подключено</span>
              </div>

              {/* Volume */}
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                <div className="flex items-center gap-2">
                  <Volume2 className="w-5 h-5 text-purple-400" />
                  <span className="text-sm text-gray-300">Звук</span>
                </div>
                <span className="text-sm text-purple-400">65%</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Apps Widget */}
          <motion.div
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-6 border border-white/10 shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                <Folder className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl">Приложения</h3>
                <p className="text-sm text-gray-400">Быстрый запуск</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {recentApps.map((app, index) => (
                <motion.button
                  key={index}
                  className="bg-white/5 hover:bg-white/10 rounded-2xl p-4 border border-white/10 transition-all group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${app.color} rounded-xl flex items-center justify-center mb-2 mx-auto shadow-lg group-hover:shadow-xl transition-shadow`}
                  >
                    <app.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-xs text-gray-300 text-center">{app.name}</p>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Clock & Weather Widget */}
          <motion.div
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-6 border border-white/10 shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                  <Cloud className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl">Погода</h3>
                  <p className="text-sm text-gray-400">Москва</p>
                </div>
              </div>
              <motion.button
                className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-xl flex items-center justify-center transition-all"
                whileHover={{ rotate: 180 }}
                onClick={() => setIsDarkMode(!isDarkMode)}
              >
                {isDarkMode ? (
                  <Moon className="w-5 h-5 text-cyan-400" />
                ) : (
                  <Sun className="w-5 h-5 text-yellow-400" />
                )}
              </motion.button>
            </div>

            <div className="text-center mb-6">
              <div className="text-5xl mb-2">
                {time.toLocaleTimeString('ru-RU', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </div>
              <div className="text-sm text-gray-400">
                {time.toLocaleDateString('ru-RU', {
                  weekday: 'long',
                  day: 'numeric',
                  month: 'long',
                })}
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl">
              <div>
                <p className="text-3xl mb-1">-2°C</p>
                <p className="text-sm text-gray-400">Облачно</p>
              </div>
              <div className="text-right text-sm text-gray-400">
                <p>Мин: -5°C</p>
                <p>Макс: 1°C</p>
              </div>
            </div>
          </motion.div>

          {/* AI Assistant Widget */}
          <motion.div
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-6 border border-white/10 shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl">AI Помощник</h3>
                <p className="text-sm text-gray-400">Активен</p>
              </div>
            </div>

            <div className="space-y-3 mb-4">
              <div className="bg-white/5 rounded-xl p-3">
                <p className="text-sm text-gray-300">
                  "Какая погода сегодня?"
                </p>
              </div>
              <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl p-3 border border-cyan-500/30">
                <p className="text-sm text-gray-200">
                  Сегодня в Москве -2°C, облачно. Рекомендую одеться теплее!
                </p>
              </div>
            </div>

            <button className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
              Задать вопрос
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
