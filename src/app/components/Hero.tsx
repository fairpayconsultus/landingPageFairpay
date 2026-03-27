import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section ref={ref} id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-100/40 to-cyan-100/50 pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[#10182b]/30 to-[#405687]/40 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-[#a8d9fa]/40 to-[#405687]/30 rounded-full blur-3xl"
        />
        
        {/* Additional floating shapes */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-2xl bg-gradient-to-br from-[#a8d9fa]/30 to-[#405687]/20 border border-[#a8d9fa]/40 backdrop-blur-sm"
        />
        <motion.div
          animate={{
            y: [0, 40, 0],
            x: [0, -25, 0],
            rotate: [0, -180, -360],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full bg-gradient-to-br from-[#405687]/30 to-[#10182b]/20 border border-[#405687]/40 backdrop-blur-sm"
        />
        <motion.div
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 right-1/3 w-16 h-16 rounded-xl bg-gradient-to-br from-[#10182b]/35 to-[#a8d9fa]/20 border border-[#10182b]/45 backdrop-blur-sm"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-xl border border-[#a8d9fa]/50 rounded-full shadow-xl shadow-[#a8d9fa]/20"
          >
            <Sparkles className="w-4 h-4 text-[#405687]" />
            <span className="text-sm font-semibold text-[#10182b]">
              Arquitectura Salarial Inteligente
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
          >
            <span className="block text-gray-900">Transformamos la gestión del</span>
            <span className="block text-gray-900">talento en</span>
            <span className="block mt-2 bg-gradient-to-r from-[#10182b] via-[#405687] to-[#a8d9fa] bg-clip-text text-transparent">
              inteligencia salarial
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            FAIRPAY convierte los procesos clave de gestión del talento en información estratégica para diseñar y gestionar estructuras salariales justas, competitivas y alineadas con los objetivos de la organización.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="pt-2"
          >
            <a
              href="#contacto"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#10182b] to-[#405687] text-white rounded-full text-md font-semibold hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105"
            >
              Solicitar Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto pt-8"
          >
            {[
              { value: "80%", label: "Reducción de tiempo" },
              { value: "100%", label: "Equidad garantizada" },
              { value: "IA", label: "Análisis inteligente" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="p-6 bg-white/60 backdrop-blur-xl rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-[#10182b] to-[#405687] bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-gray-600 mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, y: { repeat: Infinity, duration: 2 } }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-[#10182b] rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-[#10182b] rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}