import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { X, Check, TrendingUp, Users, Target, Zap } from "lucide-react";

export function BeforeAfter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const beforeItems = [
    { icon: X, text: "Procesos manuales y repetitivos", color: "text-red-500" },
    { icon: X, text: "Inversión excesiva de recursos", color: "text-red-500" },
    { icon: X, text: "Falta de equidad y transparencia", color: "text-red-500" },
    { icon: X, text: "Análisis limitados y subjetivos", color: "text-red-500" },
  ];

  const afterItems = [
    { icon: Check, text: "Biblioteca de fundamentos en línea", color: "text-green-500" },
    { icon: TrendingUp, text: "Ejecución acelerada y eficiente", color: "text-green-500" },
    { icon: Users, text: "Participación por roles asignados", color: "text-green-500" },
    { icon: Target, text: "Equidad interna garantizada por IA", color: "text-green-500" },
  ];

  return (
    <section id="cambio" ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50/30 to-transparent pointer-events-none" />
      
      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-32 right-12 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6f1794]/5 to-[#ff7f27]/5 backdrop-blur-sm border border-purple-200/30"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 left-16 w-20 h-20 rounded-full bg-gradient-to-br from-[#ff7f27]/5 to-[#000080]/5 backdrop-blur-sm border border-orange-200/30"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-3xl bg-gradient-to-br from-[#000080]/3 to-[#6f1794]/3 backdrop-blur-sm border border-blue-200/20"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#6f1794]/10 to-[#000080]/10 text-[#6f1794] rounded-full font-semibold mb-4">
            El Cambio
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Antes vs <span className="bg-gradient-to-r from-[#6f1794] to-[#000080] bg-clip-text text-transparent">Después</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transforma tu gestión de talento humano con tecnología inteligente
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Before - Antes */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 border border-red-100 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <X className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Antes</h3>
              </div>
              <div className="space-y-4">
                {beforeItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-white/50 backdrop-blur-sm rounded-xl"
                  >
                    <item.icon className={`w-5 h-5 ${item.color} flex-shrink-0 mt-0.5`} />
                    <span className="text-gray-700">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* After - Después con Fairpay */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-orange-50 rounded-3xl p-8 border border-purple-200 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#6f1794] to-[#000080] rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Después</h3>
                  <p className="text-sm text-[#6f1794] font-semibold">con Fairpay</p>
                </div>
              </div>
              <div className="space-y-4">
                {afterItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-white/70 backdrop-blur-sm rounded-xl hover:shadow-md transition-shadow"
                  >
                    <item.icon className={`w-5 h-5 ${item.color} flex-shrink-0 mt-0.5`} />
                    <span className="text-gray-700 font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Decorative badge */}
            <motion.div
              initial={{ scale: 0, rotate: -45 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -top-4 -right-4 bg-gradient-to-r from-[#ff7f27] to-[#6f1794] text-white px-4 py-2 rounded-full font-bold shadow-lg"
            >
              IA Powered
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Únete a las empresas que ya están transformando su gestión de talento
          </p>
          <a
            href="#demo"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#ff7f27] text-white rounded-full font-semibold hover:bg-[#e66d1f] hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Comenzar ahora
          </a>
        </motion.div>
      </div>
    </section>
  );
}