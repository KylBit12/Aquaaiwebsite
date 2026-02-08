import React from 'react';
import { motion } from 'motion/react';
import { Download, Github, Twitter, Youtube, ArrowRight } from 'lucide-react';

export function CTASection() {
  const socialLinks = [
    { icon: Github, label: 'GitHub', color: 'hover:text-white' },
    { icon: Twitter, label: 'Twitter', color: 'hover:text-cyan-400' },
    { icon: Youtube, label: 'YouTube', color: 'hover:text-red-500' },
  ];

  return (
    <section id="download" className="py-20 px-4 md:px-6 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{ backgroundSize: '200% 200%' }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Main CTA Card */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-2xl shadow-cyan-500/10 mb-12">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-6xl mb-6">
                Готовы попробовать{' '}
                <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                  AquaAI?
                </span>
              </h2>

              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Присоединяйтесь к тысячам пользователей, которые уже управляют своим ПК с
                помощью голоса
              </p>

              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <motion.button
                  className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-5 h-5" />
                  <span>Скачать для Windows</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <motion.button
                  className="group flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-5 h-5" />
                  <span>Скачать для macOS</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>

              {/* Version Info */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span>Версия 2.1.0</span>
                </div>
                <div>•</div>
                <div>Windows 10/11</div>
                <div>•</div>
                <div>macOS 12+</div>
                <div>•</div>
                <div>Linux (Beta)</div>
              </div>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { number: '100K+', label: 'Активных пользователей' },
              { number: '4.9/5', label: 'Рейтинг' },
              { number: '24/7', label: 'Поддержка' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl md:text-4xl bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-center items-center gap-6">
            <span className="text-gray-400">Следите за нами:</span>
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href="#"
                className={`w-12 h-12 bg-white/5 hover:bg-white/10 rounded-xl flex items-center justify-center border border-white/10 transition-all ${social.color}`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute top-1/2 left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute top-1/2 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        />
      </div>
    </section>
  );
}
