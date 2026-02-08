import React from 'react';
import { motion } from 'motion/react';
import { StatCard } from './StatCard';
import { Users, Download, Globe, Zap, Star, TrendingUp, Activity, Award } from 'lucide-react';

export function StatsSection() {
  const mainStats = [
    {
      number: 156234,
      label: 'Активных пользователей',
      icon: <Users className="w-8 h-8 text-white" />,
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      number: 2847563,
      label: 'Загрузок всего',
      icon: <Download className="w-8 h-8 text-white" />,
      gradient: 'from-blue-500 to-purple-600',
    },
    {
      number: 50,
      label: 'Поддерживаемых языков',
      suffix: '+',
      icon: <Globe className="w-8 h-8 text-white" />,
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      number: 98,
      label: 'Точность распознавания',
      suffix: '%',
      icon: <Activity className="w-8 h-8 text-white" />,
      gradient: 'from-green-500 to-emerald-600',
    },
  ];

  const additionalStats = [
    { value: '12,000+', label: 'Команд в секунду' },
    { value: '0.3s', label: 'Среднее время отклика' },
    { value: '4.9/5', label: 'Средний рейтинг' },
    { value: '24/7', label: 'Техническая поддержка' },
    { value: '99.9%', label: 'Время работы' },
    { value: '150+', label: 'Стран использования' },
  ];

  return (
    <section className="py-20 px-4 md:px-6 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', delay: 0.2 }}
          >
            <TrendingUp className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-300">Статистика в реальном времени</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl mb-6">
            AquaAI в{' '}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              цифрах
            </span>
          </h2>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Присоединяйтесь к глобальному сообществу пользователей, которые уже оценили возможности голосового управления
          </p>
        </motion.div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {mainStats.map((stat, index) => (
            <StatCard
              key={index}
              number={stat.number}
              label={stat.label}
              suffix={stat.suffix}
              icon={stat.icon}
              gradient={stat.gradient}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Additional Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          {additionalStats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center hover:bg-white/10 transition-all"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-2xl md:text-3xl bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievement Badges */}
        <motion.div
          className="mt-16 flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          {[
            { icon: Award, text: 'Лучший AI помощник 2026', color: 'from-yellow-500 to-orange-500' },
            { icon: Star, text: 'Выбор редакции', color: 'from-cyan-500 to-blue-500' },
            { icon: TrendingUp, text: 'Самый быстрорастущий', color: 'from-purple-500 to-pink-500' },
          ].map((badge, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className={`w-10 h-10 bg-gradient-to-br ${badge.color} rounded-xl flex items-center justify-center`}>
                <badge.icon className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm">{badge.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Live Activity Feed */}
        <motion.div
          className="mt-16 max-w-3xl mx-auto bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
        >
          <h3 className="text-2xl mb-6 flex items-center gap-2">
            <Activity className="w-6 h-6 text-green-400" />
            Активность в реальном времени
          </h3>
          <div className="space-y-3">
            {[
              { text: 'Пользователь из России только что скачал AquaAI', time: '2 сек назад', color: 'cyan' },
              { text: 'Выполнено 1,245 голосовых команд за последнюю минуту', time: '15 сек назад', color: 'blue' },
              { text: 'Новый рекорд: 156K активных пользователей онлайн', time: '1 мин назад', color: 'purple' },
              { text: 'Пользователь из Германии оставил 5★ отзыв', time: '2 мин назад', color: 'yellow' },
            ].map((activity, index) => (
              <motion.div
                key={index}
                className={`flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-${activity.color}-500/20 hover:bg-white/10 transition-all`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
              >
                <motion.div
                  className={`w-2 h-2 bg-${activity.color}-400 rounded-full mt-2`}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
                <div className="flex-1">
                  <p className="text-sm text-gray-300">{activity.text}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
