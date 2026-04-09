import { motion } from "motion/react";
import { useInView, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { FileText, Scale, TrendingUp, DollarSign, ArrowRight, FileSpreadsheet, Briefcase, Clock, Rocket, BarChart3 } from "lucide-react";

export function TechModules() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const roadmapRef = useRef(null);
  const isRoadmapInView = useInView(roadmapRef, { once: true, margin: "-100px" });

  // Parallax effect
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  const modules = [
    {
      icon: FileText,
      name: "Fairpay Analitycs",
      title: "Analíticas",
      description: "Visualización de datos y análisis gráficos para la toma de decisiones estratégicas.",
      features: [
        "Definición de misión del puesto",
        "Descripción de funciones",
        "Perfiles de competencias",
        "Requisitos del puesto",
        "Flujo interactivo de creación",
      ],
      color: "from-[#10182b] to-[#405687]",
      iconBg: "bg-blue-100",
      iconColor: "text-[#10182b]",
      available: true,
    },
    {
      icon: FileText,
      name: "Fairpay Organization",
      title: "Estructura Organizacional y Puestos",
      description: "Gestión de la estructura organizacional y definición de puestos jerárquicos.",
      features: [
        "Manual de valoración de puestos",
        "Valoración automatizada",
        "Categorización de puestos",
        "Matriz de valoración y categorización",
        "Análisis comparativo",
      ],
      color: "from-[#405687] to-[#10182b]",
      iconBg: "bg-indigo-100",
      iconColor: "text-[#405687]",
      available: true,
    },
    {
      icon: FileText,
      name: "Fairpay Data",
      title: "Base de Datos de Trabajadores",
      description: "Gestión centralizada de información de empleados y datos laborales.",
      features: [
        "Promedios salariales por categoría",
        "Matriz y gráficos de equidad interna",
        "Análisis de brechas salariales",
        "Identificación de inequidades",
        "Reportes de equidad",
      ],
      color: "from-[#10182b] to-[#a8d9fa]",
      iconBg: "bg-blue-100",
      iconColor: "text-[#10182b]",
      available: true,
    },
    {
      icon: FileText,
      name: "Fairpay Jobs",
      title: "Descripción de Perfiles",
      description: "Definición detallada de perfiles de competencias y requisitos por puesto.",
      features: [
        "Data de encuestas salariales (IA)",
        "Matriz y gráficos de competitividad",
        "Comparación con el mercado",
        "Análisis de posicionamiento",
        "Benchmarking salarial",
      ],
      color: "from-[#405687] to-[#a8d9fa]",
      iconBg: "bg-cyan-100",
      iconColor: "text-[#405687]",
      available: true,
    },
    {
      icon: FileText,
      name: "Fairpay Salary",
      title: "Estructuras salariales",
      description: "Herramientas especializadas para la gestión de producción y operaciones.",
      features: [
        "Diseño Broadbanding",
        "Costo de implementación",
        "Simulaciones salariales",
        "Proyecciones financieras",
        "Análisis de impacto presupuestal",
      ],
      color: "from-[#a8d9fa] to-[#10182b]",
      iconBg: "bg-cyan-100",
      iconColor: "text-[#a8d9fa]",
      available: true,
    },
  ];

  const upcomingFeatures = [
    {
      icon: FileSpreadsheet,
      title: "Incorporación de estructuras salariales",
      description: "Permite cargar estructuras salariales existentes para integrarlas a FAIRPAY y aprovechar plenamente los módulos de análisis, equidad interna, presupuesto de personal y planificación organizacional.\n\nEsta funcionalidad facilita la migración de estructuras salariales previamente diseñadas y su gestión dentro de la plataforma.",
      status: "En desarrollo",
    },
    {
      icon: Briefcase,
      title: "Presupuesto de Personal por Áreas",
      description: "Gestiona de forma integral el presupuesto de personal y monitorea la ejecución presupuestal de tu organización con herramientas de análisis y control en tiempo real.",
      status: "En desarrollo",
      features: [
        "Presupuesto aprobado vs. ejecutado - Seguimiento de la ejecución del presupuesto de personal por áreas.",
        "Número y costo de puestos asignados - Control de los puestos ocupados y su impacto presupuestal.",
        "Número y costo de puestos vacantes - Identificación del presupuesto disponible asociado a vacantes.",
        "Proyecciones presupuestales - Estimaciones del gasto futuro en personal para apoyar la planificación organizacional.",
      ],
    },
  ];

  return (
    <section ref={ref} id="modulos" className="relative py-24 bg-gradient-to-b from-slate-50 via-blue-50/30 to-cyan-50/40 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#10182b]/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#a8d9fa]/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#405687]/10 rounded-full blur-3xl" />
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
            FAIRPAY Suite
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Plataforma integral de arquitectura del talento y estructuras salariales
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Todo en una única plataforma SaaS diseñada para estructurar la organización, gestionar puestos y construir sistemas salariales justos, equitativos y competitivos.
          </p>
        </motion.div>

        {/* Modules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {modules.map((module, index) => (
            <motion.div
              key={module.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group relative"
            >
              {/* Card */}
              <div className="h-full bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Icon */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 ${module.iconBg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <module.icon className={`w-8 h-8 ${module.iconColor}`} />
                  </div>
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${module.color}`} />
                </div>

                {/* Module Name Badge */}
                <div className="mb-3">
                  <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${module.color} text-white`}>
                    {module.name}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {module.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  {module.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {module.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.1 + idx * 0.1 }}
                      className="flex items-start gap-2"
                    >
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${module.color} flex-shrink-0 mt-1.5`} />
                      <span className="text-gray-700 text-xs leading-relaxed">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Glassmorphism overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#10182b]/5 to-[#405687]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-20"
        />

        {/* Upcoming Features Section */}
        <div ref={roadmapRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isRoadmapInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#a8d9fa]/10 to-[#10182b]/10 text-[#a8d9fa] rounded-full font-semibold mb-4">
              <Rocket className="w-4 h-4 text-gray-900" />
              <span className="text-[#85b2d0] text-[#87b0cc] text-[#829cae] text-[#444545] text-[#000000] text-[#000000] text-[#000000] text-[#000000] text-[#000000] text-[#000000] text-[#000000]">Próximamente</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Innovación{" "}
              <span className="bg-gradient-to-r from-[#10182b] to-[#a8d9fa] bg-clip-text text-transparent">
                continua
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nuevas funcionalidades para fortalecer la gestión estratégica del talento
            </p>
          </motion.div>

          {/* Upcoming Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {upcomingFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isRoadmapInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                className="relative group"
              >
                <div className="h-full bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-dashed border-gray-300 hover:border-[#10182b] transition-all duration-500 shadow-lg hover:shadow-xl">
                  {/* Status Badge */}
                  <div className="absolute -top-4 right-8">
                    <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#a8d9fa] to-[#10182b] text-white rounded-full shadow-lg text-sm font-semibold">
                      <Clock className="w-4 h-4" />
                      {feature.status}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 bg-gradient-to-br from-[#10182b]/10 to-[#a8d9fa]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-7 h-7 text-[#10182b]" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {feature.description}
                  </p>

                  {/* Features if available */}
                  {feature.features && (
                    <ul className="space-y-2 mb-6">
                      {feature.features.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#a8d9fa] to-[#10182b] flex-shrink-0 mt-1.5" />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Progress bar */}
                  <div className="mt-6">
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isRoadmapInView ? { width: "60%" } : {}}
                        transition={{ duration: 1.5, delay: 0.5 + index * 0.2 }}
                        className="h-full bg-gradient-to-r from-[#10182b] to-[#a8d9fa] rounded-full"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-2">En desarrollo activo</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Info Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isRoadmapInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 max-w-3xl mx-auto"
          >
            <div className="bg-gradient-to-r from-[#10182b]/5 via-[#405687]/5 to-[#a8d9fa]/5 rounded-3xl p-8 border border-blue-200/50 backdrop-blur-xl">
              <div className="flex items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#10182b] to-[#a8d9fa] rounded-2xl flex items-center justify-center">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-900 leading-relaxed">
                    <span className="font-bold">FAIRPAY</span> evoluciona constantemente incorporando nuevas herramientas que amplían las capacidades de la plataforma y permiten a las organizaciones gestionar su arquitectura organizacional y salarial con mayor eficiencia, control y visión estratégica.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}