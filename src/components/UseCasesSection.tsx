import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code, Paintbrush, Video, BarChart, BookOpen, Gamepad2 } from 'lucide-react';

export function UseCasesSection() {
  const [selectedCase, setSelectedCase] = useState(0);

  const useCases = [
    {
      icon: Code,
      title: 'Разработчики',
      subtitle: 'Ускорьте разработку',
      gradient: 'from-blue-500 to-cyan-500',
      description: 'Управляйте IDE голосом, создавайте файлы и запускайте команды без отрыва от клавиатуры',
      features: [
        '🔧 Открытие проектов и файлов',
        '▶️ Запуск и остановка серверов',
        '🐛 Отладка и логирование',
        '📦 Установка пакетов',
        '🔄 Git команды',
        '🔍 Поиск по коду',
      ],
      commands: [
        '"Открой VS Code"',
        '"Создай новый файл React компонент"',
        '"Запусти npm install"',
        '"Открой терминал"',
      ],
    },
    {
      icon: Paintbrush,
      title: 'Дизайнеры',
      subtitle: 'Творите эффективнее',
      gradient: 'from-purple-500 to-pink-500',
      description: 'Работайте с графическими редакторами, управляйте слоями и эффектами голосом',
      features: [
        '🎨 Открытие Figma, Photoshop, Illustrator',
        '📐 Создание и управление слоями',
        '🔄 Отмена и повтор действий',
        '💾 Быстрое сохранение проектов',
        '📱 Экспорт в разные форматы',
        '🖌️ Применение фильтров',
      ],
      commands: [
        '"Открой Figma"',
        '"Создай новый слой"',
        '"Сохрани проект"',
        '"Экспортируй в PNG"',
      ],
    },
    {
      icon: Video,
      title: 'Видеомейкеры',
      subtitle: 'Монтируйте быстрее',
      gradient: 'from-red-500 to-orange-500',
      description: 'Управляйте видеоредакторами, таймлайном и эффектами без мыши',
      features: [
        '🎬 Управление Premier Pro, DaVinci',
        '✂️ Нарезка и склейка клипов',
        '🎵 Добавление аудио дорожек',
        '🎨 Цветокоррекция',
        '📊 Рендеринг ��роектов',
        '⏯️ Пауза и воспроизведение',
      ],
      commands: [
        '"Открой Premier Pro"',
        '"Вырежи этот фрагмент"',
        '"Добавь переход"',
        '"Начать рендеринг"',
      ],
    },
    {
      icon: BarChart,
      title: 'Аналитики',
      subtitle: 'Анализируйте данные',
      gradient: 'from-green-500 to-emerald-500',
      description: 'Работайте с таблицами, создавайте отчеты и визуализации голосом',
      features: [
        '📊 Работа с Excel, Google Sheets',
        '📈 Создание графиков и диаграмм',
        '🔢 Вычисления и формулы',
        '📑 Форматирование таблиц',
        '💾 Экспорт данных',
        '🔍 Фильтрация и сортировка',
      ],
      commands: [
        '"Открой Excel"',
        '"Создай сводную таблицу"',
        '"Построй график"',
        '"Экспортируй в PDF"',
      ],
    },
    {
      icon: BookOpen,
      title: 'Писатели',
      subtitle: 'Пишите продуктивнее',
      gradient: 'from-indigo-500 to-blue-500',
      description: 'Диктуйте тексты, управляйте документами и форматированием',
      features: [
        '📝 Диктовка текста',
        '📄 Работа с Word, Google Docs',
        '🔤 Форматирование текста',
        '📑 Создание разделов',
        '💾 Автосохранение',
        '🔍 Поиск и замена',
      ],
      commands: [
        '"Открой Word"',
        '"Создай новый документ"',
        '"Сделай текст жирным"',
        '"Сохрани документ"',
      ],
    },
    {
      icon: Gamepad2,
      title: 'Геймеры',
      subtitle: 'Играйте удобнее',
      gradient: 'from-yellow-500 to-red-500',
      description: 'Запускайте игры, управляйте настройками и коммуникацией',
      features: [
        '🎮 Запуск игр и лаунчеров',
        '🔊 Управление звуком',
        '📹 Запись и стриминг',
        '💬 Discord команды',
        '⚙️ Настройки графики',
        '📊 Мониторинг FPS',
      ],
      commands: [
        '"Запусти Steam"',
        '"Открой Discord"',
        '"Начать запись"',
        '"Увеличь громкость на 20%"',
      ],
    },
  ];

  return (
    <section className="py-20 px-4 md:px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [-50, 50, -50],
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
          <h2 className="text-4xl md:text-6xl mb-6">
            Для всех{' '}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              профессий
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            AquaAI адаптируется под вашу сферу деятельности
          </p>
        </motion.div>

        {/* Use Cases Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {useCases.map((useCase, index) => (
            <motion.button
              key={index}
              onClick={() => setSelectedCase(index)}
              className={`flex items-center gap-2 px-6 py-3 rounded-2xl border transition-all duration-300 ${
                selectedCase === index
                  ? `bg-gradient-to-r ${useCase.gradient} border-transparent shadow-lg`
                  : 'bg-white/5 border-white/10 hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <useCase.icon className="w-5 h-5" />
              <span className="hidden sm:inline">{useCase.title}</span>
            </motion.button>
          ))}
        </div>

        {/* Selected Use Case Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCase}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className="max-w-6xl mx-auto"
          >
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left: Info */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${useCases[selectedCase].gradient} rounded-2xl flex items-center justify-center shadow-lg`}
                    >
                      {React.createElement(useCases[selectedCase].icon, { className: 'w-8 h-8' })}
                    </div>
                    <div>
                      <h3 className="text-3xl">{useCases[selectedCase].title}</h3>
                      <p className="text-cyan-400">{useCases[selectedCase].subtitle}</p>
                    </div>
                  </div>

                  <p className="text-lg text-gray-300 mb-8">
                    {useCases[selectedCase].description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="text-xl mb-4">Возможности:</h4>
                    {useCases[selectedCase].features.map((feature, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center gap-3 text-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * i }}
                      >
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Right: Commands */}
                <div>
                  <h4 className="text-xl mb-6">Примеры команд:</h4>
                  <div className="space-y-4">
                    {useCases[selectedCase].commands.map((command, i) => (
                      <motion.div
                        key={i}
                        className={`bg-gradient-to-r ${useCases[selectedCase].gradient} bg-opacity-10 border border-white/10 rounded-2xl p-4`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                        whileHover={{ scale: 1.02, x: 5 }}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                            🎤
                          </div>
                          <span className="text-gray-200">{command}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Stats */}
                  <motion.div
                    className="mt-8 grid grid-cols-2 gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="bg-white/5 rounded-xl p-4 text-center">
                      <div className="text-2xl mb-1 bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                        30%
                      </div>
                      <div className="text-xs text-gray-400">Экономия времени</div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 text-center">
                      <div className="text-2xl mb-1 bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                        2x
                      </div>
                      <div className="text-xs text-gray-400">Скорость работы</div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-gray-400 mb-6">
            Независимо от вашей профессии, AquaAI поможет работать эффективнее
          </p>
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl shadow-lg hover:shadow-cyan-500/50 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Попробовать бесплатно
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}