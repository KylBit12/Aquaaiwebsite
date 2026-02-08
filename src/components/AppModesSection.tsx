import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Gamepad2, Cpu, Palette, Code2, Film, Music2, ChevronRight, Check } from 'lucide-react';

export function AppModesSection() {
  const [selectedMode, setSelectedMode] = useState(0);

  const modes = [
    {
      icon: Gamepad2,
      title: 'Игровой режим',
      subtitle: 'Для геймеров',
      gradient: 'from-red-500 to-orange-500',
      description: 'Специальные команды для популярных игр с низкой задержкой',
      apps: [
        {
          name: 'CS:GO',
          icon: '🔫',
          commands: [
            'Купить AWP',
            'Дроп оружия',
            'Показать счет',
            'Переключить команду',
          ],
          features: ['Быстрая закупка', 'Тактические команды', 'Голосовой чат'],
        },
        {
          name: 'Dota 2',
          icon: '⚔️',
          commands: [
            'Купить предметы',
            'Отступить',
            'Атаковать башню',
            'Использовать способность',
          ],
          features: ['Управление героем', 'Покупка предметов', 'Командные действия'],
        },
        {
          name: 'Valorant',
          icon: '🎯',
          commands: [
            'Купить Phantom',
            'Использовать способность',
            'Показать карту',
            'Запросить оружие',
          ],
          features: ['Закупка оружия', 'Использование способностей', 'Тактика'],
        },
      ],
    },
    {
      icon: Palette,
      title: 'Творческий режим',
      subtitle: 'Для дизайнеров',
      gradient: 'from-purple-500 to-pink-500',
      description: 'Полный контроль над графическими редакторами',
      apps: [
        {
          name: 'Photoshop',
          icon: '🎨',
          commands: [
            'Создать новый слой',
            'Применить фильтр',
            'Отменить действие',
            'Сохранить как PNG',
          ],
          features: ['Управление слоями', 'Фильтры и эффекты', 'Быстрое сохранение'],
        },
        {
          name: 'Figma',
          icon: '📐',
          commands: [
            'Создать фрейм',
            'Добавить компонент',
            'Изменить цвет',
            'Экспортировать',
          ],
          features: ['Работа с компонентами', 'Прототипирование', 'Экспорт ассетов'],
        },
        {
          name: 'Illustrator',
          icon: '✏️',
          commands: [
            'Создать путь',
            'Применить градиент',
            'Группировать объекты',
            'Векторизовать',
          ],
          features: ['Векторная графика', 'Работа с кривыми', 'Экспорт SVG'],
        },
      ],
    },
    {
      icon: Film,
      title: '3D и Видео режим',
      subtitle: 'Для создателей',
      gradient: 'from-blue-500 to-cyan-500',
      description: 'Управление 3D-редакторами и видеомонтажом',
      apps: [
        {
          name: 'Blender',
          icon: '🔷',
          commands: [
            'Добавить куб',
            'Применить модификатор',
            'Начать рендеринг',
            'Переключить режим',
          ],
          features: ['3D моделирование', 'Анимация', 'Рендеринг'],
        },
        {
          name: 'Premiere Pro',
          icon: '🎬',
          commands: [
            'Вырезать фрагмент',
            'Добавить переход',
            'Применить эффект',
            'Экспортировать видео',
          ],
          features: ['Монтаж видео', 'Эффекты', 'Цветокоррекция'],
        },
        {
          name: 'After Effects',
          icon: '✨',
          commands: [
            'Создать композицию',
            'Добавить ключевой кадр',
            'Применить анимацию',
            'Рендерить',
          ],
          features: ['Моушн-дизайн', 'VFX', 'Композитинг'],
        },
      ],
    },
    {
      icon: Code2,
      title: 'Режим разработки',
      subtitle: 'Для программистов',
      gradient: 'from-green-500 to-emerald-500',
      description: 'Продуктивная разработка с голосовым управлением',
      apps: [
        {
          name: 'VS Code',
          icon: '💻',
          commands: [
            'Открыть терминал',
            'Создать файл',
            'Найти и заменить',
            'Запустить отладку',
          ],
          features: ['Навигация по коду', 'Отладка', 'Git интеграция'],
        },
        {
          name: 'PyCharm',
          icon: '🐍',
          commands: [
            'Запустить скрипт',
            'Установить breakpoint',
            'Рефакторинг',
            'Запустить тесты',
          ],
          features: ['Python разработка', 'Отладка', 'Тестирование'],
        },
        {
          name: 'Docker',
          icon: '🐋',
          commands: [
            'Запустить контейнер',
            'Остановить сервисы',
            'Показать логи',
            'Очистить образы',
          ],
          features: ['Управление контейнерами', 'Docker Compose', 'Логи'],
        },
      ],
    },
  ];

  return (
    <section className="py-20 px-4 md:px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
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
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-300">Специальные режимы</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl mb-6">
            Режимы для{' '}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              любого приложения
            </span>
          </h2>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            AquaAI автоматически адаптируется под активное приложение
          </p>
        </motion.div>

        {/* Mode Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {modes.map((mode, index) => (
            <motion.button
              key={index}
              onClick={() => setSelectedMode(index)}
              className={`relative p-6 rounded-2xl border transition-all duration-300 ${
                selectedMode === index
                  ? `bg-gradient-to-br ${mode.gradient} border-transparent shadow-2xl`
                  : 'bg-white/5 border-white/10 hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <mode.icon className="w-8 h-8 mb-3 mx-auto" />
              <h3 className="text-lg font-medium mb-1">{mode.title}</h3>
              <p className="text-xs text-gray-400">{mode.subtitle}</p>
              
              {selectedMode === index && (
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent"
                  layoutId="activeMode"
                  transition={{ type: 'spring', duration: 0.6 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Selected Mode Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedMode}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className="max-w-7xl mx-auto"
          >
            {/* Mode Description */}
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-xl text-gray-300">
                {modes[selectedMode].description}
              </p>
            </motion.div>

            {/* Apps Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {modes[selectedMode].apps.map((app, appIndex) => (
                <motion.div
                  key={appIndex}
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + appIndex * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                >
                  {/* App Icon & Name */}
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-3">{app.icon}</div>
                    <h3 className="text-2xl mb-2">{app.name}</h3>
                  </div>

                  {/* Commands */}
                  <div className="space-y-2 mb-6">
                    <h4 className="text-sm text-gray-400 mb-3">Голосовые команды:</h4>
                    {app.commands.map((command, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center gap-2 text-sm text-gray-300 bg-white/5 rounded-lg p-2 hover:bg-white/10 transition-all"
                        whileHover={{ x: 5 }}
                      >
                        <ChevronRight className="w-4 h-4 text-cyan-400" />
                        <span>"{command}"</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="border-t border-white/10 pt-4">
                    <h4 className="text-sm text-gray-400 mb-3">Возможности:</h4>
                    <div className="space-y-2">
                      {app.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-gray-400">
                          <Check className="w-3 h-3 text-green-400" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Additional Info */}
        <motion.div
          className="mt-16 max-w-3xl mx-auto bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-lg rounded-2xl p-8 border border-cyan-500/20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-2xl mb-3">🎯 Автоматическое определение</h3>
          <p className="text-gray-300">
            AquaAI автоматически распознает активное приложение и подстраивает команды под него. Просто говорите естественным языком!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
