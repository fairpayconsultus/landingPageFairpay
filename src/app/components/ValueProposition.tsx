import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Shield, TrendingUp, Target, Zap, BarChart3, DollarSign } from "lucide-react";

export function ValueProposition() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    {
      icon: Zap,
      title: "Automatización Inteligente",
      description: "Reduce hasta 80% el tiempo en procesos de valoración de puestos y diseño salarial con IA.",
      color: "from-[#10182b] to-[#405687]",
      iconBg: "bg-blue-100",
      iconColor: "text-[#10182b]",
    },
    {
      icon: Target,
      title: "Equidad Garantizada",
      description: "Identifica y elimina brechas salariales con análisis predictivo y matrices de equidad.",
      color: "from-[#405687] to-[#10182b]",
      iconBg: "bg-indigo-100",
      iconColor: "text-[#405687]",
    },
    {
      icon: TrendingUp,
      title: "Competitividad de Mercado",
      description: "Benchmarks en tiempo real con data actualizada de encuestas salariales del mercado.",
      color: "from-[#10182b] to-[#a8d9fa]",
      iconBg: "bg-blue-100",
      iconColor: "text-[#10182b]",
    },
    {
      icon: DollarSign,
      title: "ROI Inmediato",
      description: "Inversión recuperada desde el primer mes con ahorro en costos de consultoría externa.",
      color: "from-[#a8d9fa] to-[#10182b]",
      iconBg: "bg-cyan-100",
      iconColor: "text-[#a8d9fa]",
    },
    {
      icon: Shield,
      title: "Cumplimiento Normativo",
      description: "Garantiza el cumplimiento de regulaciones laborales y normativas de equidad salarial.",
      color: "from-[#405687] to-[#a8d9fa]",
      iconBg: "bg-indigo-100",
      iconColor: "text-[#405687]",
    },
  ];

  return (
    <section id="beneficios" ref={ref} className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#10182b]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-[#a8d9fa]/5 rounded-full blur-3xl" />
      </div>

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
          className="absolute top-1/4 right-20 w-20 h-20 rounded-2xl bg-gradient-to-br from-[#10182b]/10 to-transparent border border-blue-200/30 backdrop-blur-sm"
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
          className="absolute bottom-1/3 left-20 w-16 h-16 rounded-full bg-gradient-to-br from-[#a8d9fa]/10 to-transparent border border-cyan-200/30 backdrop-blur-sm"
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
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#10182b]/10 to-[#405687]/10 text-[#10182b] rounded-full font-semibold mb-4">
            Beneficios
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Potencia la arquitectura del{" "}
            <span className="bg-gradient-to-r from-[#10182b] via-[#405687] to-[#a8d9fa] bg-clip-text text-transparent">
              talento en tu organización
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A través de una plataforma especializada, automatizamos el análisis y descripción de puestos, la valoración organizacional y el diseño de estructuras salariales, integrando metodologías de ingeniería salarial, analítica de datos e inteligencia artificial.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group relative"
            >
              <div className="h-full bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Icon */}
                <div className="flex items-start justify-between mb-6">
                  <div
                    className={`w-14 h-14 ${value.iconBg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <value.icon className={`w-7 h-7 ${value.iconColor}`} />
                  </div>
                  <div
                    className={`w-2 h-2 rounded-full bg-gradient-to-r ${value.color}`}
                  />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>

                {/* Glassmorphism overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500 pointer-events-none`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-gradient-to-r from-[#10182b]/5 via-[#405687]/5 to-[#a8d9fa]/5 rounded-2xl px-8 py-6 border border-blue-200/50 backdrop-blur-xl max-w-2xl">
            <p className="text-lg text-gray-700 leading-relaxed">
              FAIRPAY combina{" "}
              <span className="font-bold text-[#10182b]">ingeniería salarial</span>{" "}
              con IA para crear estructuras{" "}
              <span className="font-bold text-[#405687]">justas</span>,{" "}
              <span className="font-bold text-[#a8d9fa]">competitivas</span> y{" "}
              basadas en datos.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}