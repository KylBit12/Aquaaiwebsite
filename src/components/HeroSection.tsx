import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Mic, Volume2, Cpu, Zap, Sparkles } from 'lucide-react';

export function HeroSection() {
  const [isListening, setIsListening] = useState(false);
  const [waveform, setWaveform] = useState<number[]>([]);
  const [typedText, setTypedText] = useState('');
  const fullText = 'Управляйте ПК силой голоса';

  useEffect(() => {
    const interval = setInterval(() => {
      setWaveform(Array.from({ length: 40 }, () => Math.random() * 100));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 md:px-6 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Additional floating orbs */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
              ],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Zap className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-300">Powered by AI</span>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
              </motion.div>
            </motion.div>

            <h1 className="text-5xl md:text-7xl mb-6 leading-tight">
              {typedText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              >
                |
              </motion.span>
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                с AquaAI
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              AquaAI — интеллектуальный голосовой помощник нового поколения.
              Управляйте компьютером естественным образом с помощью передовых AI технологий.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Скачать для Windows
              </motion.button>
              <motion.button
                className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Скачать для macOS
              </motion.button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div>
                <div className="text-3xl md:text-4xl bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent mb-1">
                  50+
                </div>
                <div className="text-xs md:text-sm text-gray-400">Языков</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent mb-1">
                  99.9%
                </div>
                <div className="text-xs md:text-sm text-gray-400">Точность</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent mb-1">
                  &lt;0.5s
                </div>
                <div className="text-xs md:text-sm text-gray-400">Отклик</div>
              </div>
            </div>
          </motion.div>

          {/* Interactive Demo */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 shadow-2xl shadow-cyan-500/10">
              {/* Mic Button */}
              <div className="flex justify-center mb-8">
                <motion.button
                  className={`relative w-32 h-32 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isListening
                      ? 'bg-gradient-to-br from-cyan-500 to-blue-600 shadow-2xl shadow-cyan-500/50'
                      : 'bg-gradient-to-br from-white/10 to-white/5 border-2 border-white/20'
                  }`}
                  onClick={() => setIsListening(!isListening)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  animate={
                    isListening
                      ? {
                          boxShadow: [
                            '0 0 0 0 rgba(6, 182, 212, 0.7)',
                            '0 0 0 20px rgba(6, 182, 212, 0)',
                          ],
                        }
                      : {}
                  }
                  transition={
                    isListening
                      ? {
                          boxShadow: {
                            duration: 1.5,
                            repeat: Infinity,
                          },
                        }
                      : {}
                  }
                >
                  <Mic className="w-12 h-12" />
                </motion.button>
              </div>

              {/* Waveform */}
              <div className="flex justify-center items-center gap-1 h-20 mb-6">
                {waveform.map((height, i) => (
                  <motion.div
                    key={i}
                    className="w-1 bg-gradient-to-t from-cyan-500 to-blue-500 rounded-full"
                    initial={{ height: 4 }}
                    animate={{
                      height: isListening ? height : 4,
                    }}
                    transition={{
                      duration: 0.1,
                    }}
                  />
                ))}
              </div>

              {/* Status Text */}
              <div className="text-center">
                <p className="text-lg mb-2">
                  {isListening ? 'Слушаю...' : 'Нажмите для начала'}
                </p>
                <p className="text-sm text-gray-400">
                  {isListening
                    ? '"Открой браузер Chrome"'
                    : 'Попробуйте голосовую команду'}
                </p>
              </div>

              {/* Floating Icons */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/50"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Cpu className="w-8 h-8" />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/50"
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
              >
                <Volume2 className="w-8 h-8" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}