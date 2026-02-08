import React from 'react';
import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Александр Петров',
      role: 'Software Engineer',
      company: 'Яндекс',
      image: 'https://i.pravatar.cc/150?img=12',
      rating: 5,
      text: 'AquaAI полностью изменил мой рабочий процесс. Теперь я могу управлять IDE голосом, не отрываясь от клавиатуры. Невероятно удобно!',
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      name: 'Мария Соколова',
      role: 'Content Creator',
      company: 'YouTube',
      image: 'https://i.pravatar.cc/150?img=5',
      rating: 5,
      text: 'Как создатель контента, я постоянно работаю с несколькими приложениями. AquaAI делает переключение между ними мгновенным.',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      name: 'Дмитрий Ковалев',
      role: 'Game Developer',
      company: 'Mail.ru',
      image: 'https://i.pravatar.cc/150?img=33',
      rating: 5,
      text: 'Точность распознавания речи впечатляет! Работает даже с техническими терминами и командами. Must have для разработчиков.',
      gradient: 'from-orange-500 to-red-600',
    },
    {
      name: 'Елена Волкова',
      role: 'UI/UX Designer',
      company: 'VK',
      image: 'https://i.pravatar.cc/150?img=9',
      rating: 5,
      text: 'Управление Figma и Adobe голосом? Да! AquaAI экономит мне часы времени каждую неделю. Просто фантастика!',
      gradient: 'from-green-500 to-emerald-600',
    },
    {
      name: 'Игорь Михайлов',
      role: 'Data Scientist',
      company: 'Sber',
      image: 'https://i.pravatar.cc/150?img=15',
      rating: 5,
      text: 'Низкая задержка и высокая точность. Интеграция с Python IDE работает безупречно. Отличный продукт!',
      gradient: 'from-blue-500 to-purple-600',
    },
    {
      name: 'Анна Лебедева',
      role: 'Digital Marketer',
      company: 'Ozon',
      image: 'https://i.pravatar.cc/150?img=20',
      rating: 5,
      text: 'Многозадачность на новом уровне! Могу работать с таблицами, презентациями и почтой одновременно. Рекомендую всем!',
      gradient: 'from-pink-500 to-red-600',
    },
  ];

  return (
    <section className="py-20 px-4 md:px-6 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/3 left-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 15,
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
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-yellow-300">Более 10,000 отзывов</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl mb-6">
            Что говорят{' '}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              пользователи
            </span>
          </h2>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Тысячи профессионалов уже доверяют AquaAI
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-xl group"
              initial={{ opacity: 0, y: 50, rotateX: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              {/* Quote Icon */}
              <motion.div
                className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center border border-white/10"
                animate={{
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              >
                <Quote className="w-6 h-6 text-cyan-400" />
              </motion.div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 + i * 0.05 }}
                  >
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  </motion.div>
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <motion.div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center overflow-hidden`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div>
                  <div className="font-medium">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">
                    {testimonial.role} • {testimonial.company}
                  </div>
                </div>
              </div>

              {/* Hover effect */}
              <motion.div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />
            </motion.div>
          ))}
        </div>

        {/* Overall Rating */}
        <motion.div
          className="mt-16 max-w-4xl mx-auto bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <motion.div
                className="text-5xl md:text-6xl bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', delay: 1 }}
              >
                4.9/5
              </motion.div>
              <div className="text-gray-400">Средний рейтинг</div>
            </div>
            <div>
              <motion.div
                className="text-5xl md:text-6xl bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', delay: 1.1 }}
              >
                10K+
              </motion.div>
              <div className="text-gray-400">Отзывов</div>
            </div>
            <div>
              <motion.div
                className="text-5xl md:text-6xl bg-gradient-to-r from-green-300 to-emerald-400 bg-clip-text text-transparent mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', delay: 1.2 }}
              >
                98%
              </motion.div>
              <div className="text-gray-400">Рекомендуют</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
