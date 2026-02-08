import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Video, MessageCircle, Code, FileText, HelpCircle } from 'lucide-react';

export function DocumentationPage() {
  const sections = [
    {
      icon: BookOpen,
      title: 'Руководство пользователя',
      description: 'Полное руководство по использованию всех функций AquaAI',
      gradient: 'from-cyan-500 to-blue-600',
      items: ['Быстрый старт', 'Настройка голоса', 'Список команд', 'Персонализация'],
    },
    {
      icon: Code,
      title: 'API Документация',
      description: 'Интеграция AquaAI в ваши приложения',
      gradient: 'from-purple-500 to-pink-600',
      items: ['REST API', 'SDK', 'Webhooks', 'Примеры кода'],
    },
    {
      icon: Video,
      title: 'Видео уроки',
      description: 'Обучающие видео для быстрого освоения',
      gradient: 'from-orange-500 to-red-600',
      items: ['Введение', 'Продвинутые функции', 'Советы и трюки', 'Частые вопросы'],
    },
    {
      icon: MessageCircle,
      title: 'Сообщество',
      description: 'Общайтесь с другими пользователями AquaAI',
      gradient: 'from-green-500 to-emerald-600',
      items: ['Форум', 'Discord сервер', 'Telegram группа', 'Reddit'],
    },
  ];

  const faqs = [
    {
      question: 'Какие языки поддерживает AquaAI?',
      answer: 'AquaAI поддерживает более 50 языков, включая русский, английский, китайский, испанский и многие другие.',
    },
    {
      question: 'Нужно ли подключение к интернету?',
      answer: 'Базовые функции работают офлайн. Для продвинутых возможностей AI требуется интернет.',
    },
    {
      question: 'Какие системные требования?',
      answer: '4 ГБ RAM, 500 МБ свободного места, микрофон. Windows 10+, macOS 12+, или Linux.',
    },
    {
      question: 'Безопасны ли мои данные?',
      answer: 'Все данные обрабатываются локально. Мы не передаем вашу информацию третьим лицам.',
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 md:px-6">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl md:text-7xl mb-6">
            Документация и{' '}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              поддержка
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Все что нужно знать для эффективной работы с AquaAI
          </p>
        </motion.div>

        {/* Documentation Sections */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 shadow-xl hover:shadow-2xl transition-all group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${section.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                  <section.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl mb-2">{section.title}</h3>
                  <p className="text-gray-400 text-sm">{section.description}</p>
                </div>
              </div>

              <div className="space-y-2">
                {section.items.map((item, i) => (
                  <motion.button
                    key={i}
                    className="w-full text-left px-4 py-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-all flex items-center justify-between group/item"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-gray-300">{item}</span>
                    <motion.div
                      className="opacity-0 group-hover/item:opacity-100 transition-opacity"
                      whileHover={{ x: 3 }}
                    >
                      →
                    </motion.div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl mb-4">
              Часто задаваемые{' '}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                вопросы
              </span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg mb-2">{faq.question}</h3>
                    <p className="text-gray-400">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Support */}
        <motion.div
          className="mt-20 max-w-2xl mx-auto text-center bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl mb-4">Не нашли ответ?</h3>
          <p className="text-gray-300 mb-8">
            Наша команда поддержки всегда готова помочь вам 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl shadow-lg hover:shadow-cyan-500/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Связаться с поддержкой
            </motion.button>
            <motion.button
              className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Открыть тикет
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
