import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Terminal,
  Chrome,
  Folder,
  Music,
  FileText,
  Calculator,
  Mail,
  Calendar,
  Volume2,
  Coffee,
  Code,
  Image as ImageIcon,
  Play,
  Check,
} from 'lucide-react';

export function InteractiveDemo() {
  const [activeCommand, setActiveCommand] = useState<number | null>(null);
  const [executedCommands, setExecutedCommands] = useState<number[]>([]);

  const commands = [
    {
      icon: Chrome,
      command: '"Открой браузер Chrome"',
      description: 'Запуск приложений',
      response: 'Запускаю Google Chrome...',
      color: 'from-blue-500 to-cyan-500',
      app: 'Chrome',
    },
    {
      icon: Folder,
      command: '"Открой папку Документы"',
      description: 'Навигация по файлам',
      response: 'Открываю папку Документы...',
      color: 'from-yellow-500 to-orange-500',
      app: 'Проводник',
    },
    {
      icon: Music,
      command: '"Включи музыку"',
      description: 'Управление медиа',
      response: 'Запускаю Spotify и включаю музыку...',
      color: 'from-green-500 to-emerald-500',
      app: 'Spotify',
    },
    {
      icon: FileText,
      command: '"Создай новый документ"',
      description: 'Работа с файлами',
      response: 'Создаю новый документ в Microsoft Word...',
      color: 'from-blue-500 to-indigo-500',
      app: 'Word',
    },
    {
      icon: Calculator,
      command: '"Посчитай 156 умножить на 24"',
      description: 'Вычисления',
      response: 'Результат: 3,744',
      color: 'from-purple-500 to-pink-500',
      app: 'Калькулятор',
    },
    {
      icon: Mail,
      command: '"Отправь письмо Ивану"',
      description: 'Работа с почтой',
      response: 'Открываю новое письмо для Ивана...',
      color: 'from-red-500 to-orange-500',
      app: 'Почта',
    },
    {
      icon: Calendar,
      command: '"Создай встречу на завтра в 15:00"',
      description: 'Управление календарем',
      response: 'Создаю встречу на 9 февраля в 15:00...',
      color: 'from-indigo-500 to-purple-500',
      app: 'Календарь',
    },
    {
      icon: Volume2,
      command: '"Увеличь громкость на 50%"',
      description: 'Системные настройки',
      response: 'Устанавливаю громкость на 75%...',
      color: 'from-cyan-500 to-blue-500',
      app: 'Система',
    },
    {
      icon: Coffee,
      command: '"Поставь таймер на 5 минут"',
      description: 'Таймеры и напоминания',
      response: 'Таймер на 5 минут запущен...',
      color: 'from-orange-500 to-red-500',
      app: 'Таймер',
    },
    {
      icon: Code,
      command: '"Открой VS Code"',
      description: 'Инструменты разработки',
      response: 'Запускаю Visual Studio Code...',
      color: 'from-blue-500 to-cyan-500',
      app: 'VS Code',
    },
    {
      icon: ImageIcon,
      command: '"Открой Photoshop"',
      description: 'Графические редакторы',
      response: 'Запускаю Adobe Photoshop...',
      color: 'from-blue-600 to-indigo-600',
      app: 'Photoshop',
    },
    {
      icon: Terminal,
      command: '"Открой терминал"',
      description: 'Командная строка',
      response: 'Открываю Windows Terminal...',
      color: 'from-gray-600 to-gray-800',
      app: 'Terminal',
    },
  ];

  const handleCommandClick = (index: number) => {
    setActiveCommand(index);
    setTimeout(() => {
      setExecutedCommands([...executedCommands, index]);
      setTimeout(() => {
        setActiveCommand(null);
      }, 2000);
    }, 1500);
  };

  return (
    <section className="py-20 px-4 md:px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 12,
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
            <Play className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-300">Попробуйте прямо сейчас</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl mb-6">
            Примеры голосовых{' '}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              команд
            </span>
          </h2>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-4">
            Нажмите на любую команду, чтобы увидеть как AquaAI её выполняет
          </p>
          <p className="text-sm text-gray-400">
            ✨ Выполнено команд: {executedCommands.length} / {commands.length}
          </p>
        </motion.div>

        {/* Commands Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
          {commands.map((cmd, index) => (
            <motion.button
              key={index}
              className={`relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-left hover:scale-105 transition-all duration-300 group ${
                activeCommand === index ? 'ring-2 ring-cyan-500' : ''
              } ${
                executedCommands.includes(index) ? 'border-green-500/30' : ''
              }`}
              onClick={() => handleCommandClick(index)}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              disabled={activeCommand !== null}
            >
              {/* Check mark for executed */}
              {executedCommands.includes(index) && (
                <motion.div
                  className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring' }}
                >
                  <Check className="w-5 h-5 text-white" />
                </motion.div>
              )}

              {/* Icon */}
              <div
                className={`w-12 h-12 bg-gradient-to-br ${cmd.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}
              >
                <cmd.icon className="w-6 h-6 text-white" />
              </div>

              {/* Command */}
              <div className="text-sm text-gray-300 mb-2">{cmd.command}</div>

              {/* Description */}
              <div className="text-xs text-gray-500">{cmd.description}</div>

              {/* Pulse effect when active */}
              {activeCommand === index && (
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${cmd.color} opacity-20`}
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                  }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Response Area */}
        <AnimatePresence mode="wait">
          {activeCommand !== null && (
            <motion.div
              key={activeCommand}
              className="max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="flex items-start gap-4">
                  {/* User Command */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                        👤
                      </div>
                      <span className="text-sm text-gray-400">Вы</span>
                    </div>
                    <div className="bg-purple-500/10 border border-purple-500/30 rounded-2xl p-4 mb-6">
                      <p className="text-gray-200">{commands[activeCommand].command}</p>
                    </div>

                    {/* AI Response */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                        🤖
                      </div>
                      <span className="text-sm text-gray-400">AquaAI</span>
                      <motion.div
                        className="flex gap-1 ml-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            className="w-2 h-2 bg-cyan-400 rounded-full"
                            animate={{
                              scale: [1, 1.5, 1],
                              opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              delay: i * 0.2,
                            }}
                          />
                        ))}
                      </motion.div>
                    </div>
                    <motion.div
                      className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <p className="text-gray-200">{commands[activeCommand].response}</p>
                      
                      {/* Simulated app launch */}
                      <motion.div
                        className="mt-4 flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 }}
                      >
                        <div
                          className={`w-10 h-10 bg-gradient-to-br ${commands[activeCommand].color} rounded-xl flex items-center justify-center`}
                        >
                          {React.createElement(commands[activeCommand].icon, { className: 'w-5 h-5 text-white' })}
                        </div>
                        <div>
                          <div className="text-sm text-gray-300">
                            {commands[activeCommand].app}
                          </div>
                          <div className="text-xs text-green-400">● Запущено</div>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Info Card */}
        {activeCommand === null && (
          <motion.div
            className="max-w-3xl mx-auto bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-lg rounded-2xl p-8 border border-cyan-500/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="text-center">
              <div className="text-6xl mb-4">🎤</div>
              <h3 className="text-2xl mb-3">Готовы попробовать?</h3>
              <p className="text-gray-300">
                Выберите любую команду выше, чтобы увидеть как AquaAI её обрабатывает
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}