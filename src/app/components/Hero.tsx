import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30 pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[#6f1794]/20 to-[#000080]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-[#ff7f27]/20 to-[#6f1794]/20 rounded-full blur-3xl"
        />
        
        {/* Additional floating shapes */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-2xl bg-gradient-to-br from-[#ff7f27]/10 to-transparent border border-[#ff7f27]/20 backdrop-blur-sm"
        />
        <motion.div
          animate={{
            y: [0, 40, 0],
            x: [0, -25, 0],
            rotate: [0, -180, -360],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full bg-gradient-to-br from-[#000080]/10 to-transparent border border-[#000080]/20 backdrop-blur-sm"
        />
        <motion.div
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 right-1/3 w-16 h-16 rounded-xl bg-gradient-to-br from-[#6f1794]/15 to-transparent border border-[#6f1794]/25 backdrop-blur-sm"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-xl border border-[#ff7f27]/30 rounded-full shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-[#ff7f27]" />
            <span className="text-sm font-medium text-[#6f1794]">
              Inteligencia Artificial aplicada a RRHH
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight"
          >
            <span className="block text-gray-900">La ingeniería salarial,</span>
            <span className="block mt-2 bg-gradient-to-r from-[#6f1794] via-[#000080] to-[#ff7f27] bg-clip-text text-transparent">
              ahora es inteligente
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Automatiza la valoración de puestos y el diseño de estructuras salariales con{" "}
            <span className="font-semibold text-[#6f1794]">Fairpay</span>, la solución SaaS que
            transforma el talento en estrategia.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="pt-4"
          >
            <a
              href="#demo"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#6f1794] to-[#000080] text-white rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105"
            >
              Solicitar Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto pt-16"
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
                <div className="text-4xl font-bold bg-gradient-to-r from-[#6f1794] to-[#000080] bg-clip-text text-transparent">
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
        <div className="w-6 h-10 border-2 border-[#6f1794] rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-[#6f1794] rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
}