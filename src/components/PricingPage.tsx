import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Sparkles, Zap, Crown, Star, ArrowRight, Shield, Clock, Users } from 'lucide-react';

export function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Месячная подписка',
      price: 15,
      period: 'месяц',
      billingCycle: 'monthly',
      icon: Zap,
      gradient: 'from-cyan-500 to-blue-600',
      popular: false,
      savings: null,
      features: [
        'Безлимитные голосовые команды',
        'Поддержка 50+ языков',
        'Все режимы и приложения',
        'Приоритетная поддержка',
        'Регулярные обновления',
        'Синхронизация между устройствами',
        'Персональный ассистент AI',
        'Без рекламы',
      ],
    },
    {
      name: '3 месяца',
      price: 25,
      period: '3 месяца',
      billingCycle: 'quarterly',
      icon: Star,
      gradient: 'from-purple-500 to-pink-600',
      popular: true,
      savings: '44%',
      pricePerMonth: 8.33,
      features: [
        'Все из месячной подписки',
        'Экономия $20 за 3 месяца',
        'Расширенная аналитика',
        'Кастомные команды',
        'Экспорт настроек',
        'Приоритетный доступ к новинкам',
        'Бесплатное обучение',
        'VIP поддержка 24/7',
      ],
    },
    {
      name: 'Годовая подписка',
      price: 50,
      period: 'год',
      billingCycle: 'yearly',
      icon: Crown,
      gradient: 'from-orange-500 to-red-600',
      popular: false,
      savings: '72%',
      pricePerMonth: 4.17,
      features: [
        'Все из квартальной подписки',
        'Экономия $130 в год',
        'Пожизненная лицензия на версию',
        'Эксклюзивные режимы',
        'Личный менеджер',
        'Ранний доступ к бета-версиям',
        'Безлимитные устройства',
        'Корпоративная интеграция',
      ],
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Безопасная оплата',
      description: 'Защищенные транзакции через Stripe',
    },
    {
      icon: Clock,
      title: 'Отмена в любой момент',
      description: 'Без скрытых комиссий и штрафов',
    },
    {
      icon: Users,
      title: '14 дней возврата',
      description: 'Гарантия возврата средств',
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 md:px-6">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/20 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-300">Специальное предложение</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl mb-6">
            Выберите{' '}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              свой план
            </span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Начните с бесплатной пробной версии на 7 дней. Отменить можно в любой момент.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border ${
                plan.popular
                  ? 'border-purple-500/50 shadow-2xl shadow-purple-500/20'
                  : 'border-white/10'
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full shadow-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', delay: 0.5 }}
                >
                  <span className="text-sm font-medium">🔥 Самый популярный</span>
                </motion.div>
              )}

              {/* Icon */}
              <div
                className={`w-16 h-16 bg-gradient-to-br ${plan.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
              >
                <plan.icon className="w-8 h-8 text-white" />
              </div>

              {/* Plan Name */}
              <h3 className="text-2xl mb-2">{plan.name}</h3>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                    ${plan.price}
                  </span>
                  <span className="text-gray-400">/ {plan.period}</span>
                </div>
                {plan.pricePerMonth && (
                  <div className="text-sm text-gray-400 mt-2">
                    ${plan.pricePerMonth.toFixed(2)} в месяц
                  </div>
                )}
                {plan.savings && (
                  <motion.div
                    className="inline-block mt-2 px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-sm text-green-400"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', delay: 0.3 }}
                  >
                    Экономия {plan.savings}
                  </motion.div>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3 text-gray-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.05 }}
                  >
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                className={`group w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r ${plan.gradient} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-lg font-medium">Выбрать план</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              {/* Hover Glow Effect */}
              <motion.div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}
              />
            </motion.div>
          ))}
        </div>

        {/* Benefits */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg mb-2">{benefit.title}</h3>
              <p className="text-sm text-gray-400">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-3xl text-center mb-8">
            Часто задаваемые{' '}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              вопросы
            </span>
          </h2>

          <div className="space-y-4">
            {[
              {
                q: 'Можно ли отменить подписку?',
                a: 'Да, вы можете отменить подписку в любой момент без штрафов и скрытых комиссий.',
              },
              {
                q: 'Есть ли бесплатный период?',
                a: 'Да! Все новые пользователи получают 7 дней бесплатного доступа ко всем функциям.',
              },
              {
                q: 'На скольких устройствах можно использовать?',
                a: 'Месячная и квартальная подписка - до 3 устройств. Годовая - без ограничений.',
              },
              {
                q: 'Какие способы оплаты принимаете?',
                a: 'Мы принимаем все основные кредитные карты, PayPal, Apple Pay и Google Pay.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-lg mb-2 flex items-center gap-2">
                  <span className="text-cyan-400">Q:</span> {faq.q}
                </h3>
                <p className="text-gray-400 pl-6">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Money Back Guarantee */}
        <motion.div
          className="mt-16 max-w-2xl mx-auto text-center bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-lg rounded-3xl p-12 border border-green-500/20"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 }}
        >
          <div className="text-6xl mb-4">💰</div>
          <h3 className="text-3xl mb-4">100% гарантия возврата средств</h3>
          <p className="text-lg text-gray-300">
            Если AquaAI вам не подойдет в течение первых 14 дней, мы вернем вам полную стоимость. Без вопросов.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
