import React from 'react';
import { motion } from 'motion/react';
import { Mic, Globe, Brain, User, Shield, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Mic,
    title: 'Голосовая Обработка',
    description: 'Моментальное распознавание и обработка речи любой сложности.',
    gradient: 'from-cyan-500 to-blue-600',
    shadowColor: 'shadow-cyan-500/20',
  },
  {
    icon: Globe,
    title: 'Многоязычность',
    description: 'Поддержка широкого спектра языков для глобального использования.',
    gradient: 'from-blue-500 to-purple-600',
    shadowColor: 'shadow-blue-500/20',
  },
  {
    icon: Brain,
    title: 'Интеллектуальный AI',
    description: 'Самообучающиеся алгоритмы для максимально точных ответов.',
    gradient: 'from-purple-500 to-pink-600',
    shadowColor: 'shadow-purple-500/20',
  },
  {
    icon: User,
    title: 'Персонализация',
    description: 'Aqua AI адаптируется под ваши предпочтения и привычки.',
    gradient: 'from-pink-500 to-red-600',
    shadowColor: 'shadow-pink-500/20',
  },
  {
    icon: Shield,
    title: 'Безопасность',
    description: 'Ваши данные надежно защищены современными протоколами шифрования.',
    gradient: 'from-green-500 to-emerald-600',
    shadowColor: 'shadow-green-500/20',
  },
  {
    icon: TrendingUp,
    title: 'Постоянное Развитие',
    description: 'Регулярные обновления с новыми функциями и улучшениями.',
    gradient: 'from-orange-500 to-yellow-600',
    shadowColor: 'shadow-orange-500/20',
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4 md:px-6 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/30 to-transparent" />

      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-sm text-cyan-300">Почему AquaAI?</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl mb-6">
            Наши{' '}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Преимущества
            </span>
          </h2>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Передовые технологии искусственного интеллекта для вашего удобства
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div
                className={`relative h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-xl ${feature.shadowColor} hover:shadow-2xl transition-all duration-300 group`}
              >
                {/* Icon */}
                <div className="relative mb-6">
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center shadow-lg ${feature.shadowColor}`}
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Glow effect on hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
                  <div
                    className={`absolute top-2 right-2 w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-full blur-xl`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
