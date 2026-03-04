import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Database, Users, FileText, Scale, TrendingUp, DollarSign, ArrowRight, FileSpreadsheet, Briefcase, Clock, Rocket } from "lucide-react";

export function TechModules() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const roadmapRef = useRef(null);
  const isRoadmapInView = useInView(roadmapRef, { once: true, margin: "-100px" });

  const modules = [
    {
      icon: Database,
      title: "Fundamentos Bases de Datos",
      description: "Base de datos dinámica integral con datos que pueden ser usados de forma flexible en todo el sistema.",
      features: [
        "Grupos ocupacionales y familia de puestos",
        "Niveles educativos y especializaciones",
        "Competencias y factores de valoración",
        "Diccionario de funciones y verbos",
        "Régimen laboral y clasificación de puestos",
      ],
      color: "from-[#6f1794] to-[#000080]",
      iconBg: "bg-purple-100",
      iconColor: "text-[#6f1794]",
      available: true,
    },
    {
      icon: Briefcase,
      title: "Estructura y Puestos",
      description: "Gestión completa de la estructura organizacional con organigramas dinámicos.",
      features: [
        "Gestión de departamentos",
        "Administración de puestos",
        "Organigramas básicos y complementarios",
        "Jerarquías automáticas",
        "Visualización interactiva",
      ],
      color: "from-[#000080] to-[#6f1794]",
      iconBg: "bg-blue-100",
      iconColor: "text-[#000080]",
      available: true,
    },
    {
      icon: Users,
      title: "Trabajadores",
      description: "Centralización de información personal y laboral del capital humano.",
      features: [
        "Data personal completa",
        "Información laboral actualizada",
        "Historial de puestos",
        "Seguimiento de movimientos",
        "Gestión de documentación",
      ],
      color: "from-[#ff7f27] to-[#6f1794]",
      iconBg: "bg-orange-100",
      iconColor: "text-[#ff7f27]",
      available: true,
    },
    {
      icon: FileText,
      title: "Descripción y Perfiles",
      description: "Creación detallada de descripciones de puestos con flujo interactivo.",
      features: [
        "Definición de misión del puesto",
        "Descripción de funciones",
        "Perfiles de competencias",
        "Requisitos del puesto",
        "Flujo interactivo de creación",
      ],
      color: "from-[#6f1794] to-[#ff7f27]",
      iconBg: "bg-purple-100",
      iconColor: "text-[#6f1794]",
      available: true,
    },
    {
      icon: Scale,
      title: "Valoración y Categorización",
      description: "Sistema integral de valoración de puestos con matrices automáticas.",
      features: [
        "Manual de valoración de puestos",
        "Valoración automatizada",
        "Categorización de puestos",
        "Matriz de valoración y categorización",
        "Análisis comparativo",
      ],
      color: "from-[#000080] to-[#ff7f27]",
      iconBg: "bg-indigo-100",
      iconColor: "text-[#000080]",
      available: true,
    },
    {
      icon: TrendingUp,
      title: "Equidad Interna y Competitividad",
      description: "Análisis avanzado de equidad salarial y competitividad con IA.",
      features: [
        "Promedios salariales por categoría",
        "Matriz y gráficos de equidad interna",
        "Data de encuestas salariales (IA)",
        "Matriz y gráficos de competitividad",
        "Análisis predictivo",
      ],
      color: "from-[#6f1794] to-[#000080]",
      iconBg: "bg-purple-100",
      iconColor: "text-[#6f1794]",
      available: true,
    },
    {
      icon: DollarSign,
      title: "Estructura Salarial",
      description: "Diseño de estructuras salariales con proyección de costos de implementación.",
      features: [
        "Diseño Broadbanding",
        "Costo de implementación",
        "Simulaciones salariales",
        "Proyecciones financieras",
        "Análisis de impacto presupuestal",
      ],
      color: "from-[#ff7f27] to-[#6f1794]",
      iconBg: "bg-orange-100",
      iconColor: "text-[#ff7f27]",
      available: true,
    },
  ];

  const upcomingFeatures = [
    {
      icon: FileSpreadsheet,
      title: "Exportación de Estructuras Salariales",
      description: "Exporta tus estructuras salariales en múltiples formatos para integración con otros sistemas empresariales.",
      status: "En desarrollo",
    },
    {
      icon: Briefcase,
      title: "Presupuesto de Personal por Áreas",
      description: "Gestión completa del presupuesto con análisis de presupuesto aprobado vs ejecutado, control de puestos asignados y vacantes.",
      status: "En desarrollo",
      features: [
        "Presupuesto aprobado vs ejecutado",
        "N° y costo de puestos asignados",
        "N° y costo de puestos vacantes",
        "Proyecciones presupuestales",
      ],
    },
  ];

  return (
    <section id="modulos" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#6f1794]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#ff7f27]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#6f1794]/10 to-[#000080]/10 text-[#6f1794] rounded-full font-semibold mb-4">
            Módulos Técnicos
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Potencia tu gestión con{" "}
            <span className="bg-gradient-to-r from-[#6f1794] via-[#000080] to-[#ff7f27] bg-clip-text text-transparent">
              tecnología inteligente
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sistema integral de gestión salarial con módulos diseñados para optimizar cada aspecto de tu organización
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

                {/* Hover Effect - Learn More */}
                <div className="flex items-center gap-2 text-transparent bg-gradient-to-r from-[#6f1794] to-[#000080] bg-clip-text font-semibold group-hover:gap-4 transition-all duration-300 text-sm">
                  Conocer más
                  <ArrowRight className="w-4 h-4 text-[#6f1794] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Glassmorphism overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#6f1794]/5 to-[#000080]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#ff7f27]/10 to-[#6f1794]/10 text-[#ff7f27] rounded-full font-semibold mb-4">
              <Rocket className="w-4 h-4" />
              <span>Próximamente</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Innovación{" "}
              <span className="bg-gradient-to-r from-[#6f1794] to-[#ff7f27] bg-clip-text text-transparent">
                continua
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nuevas funcionalidades en desarrollo para potenciar tu gestión de talento
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
                <div className="h-full bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-dashed border-gray-300 hover:border-[#6f1794] transition-all duration-500 shadow-lg hover:shadow-xl">
                  {/* Status Badge */}
                  <div className="absolute -top-4 right-8">
                    <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#ff7f27] to-[#6f1794] text-white rounded-full shadow-lg text-sm font-semibold">
                      <Clock className="w-4 h-4" />
                      {feature.status}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 bg-gradient-to-br from-[#6f1794]/10 to-[#ff7f27]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-7 h-7 text-[#6f1794]" />
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
                          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#ff7f27] to-[#6f1794] flex-shrink-0 mt-1.5" />
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
                        className="h-full bg-gradient-to-r from-[#6f1794] to-[#ff7f27] rounded-full"
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
            <div className="bg-gradient-to-r from-[#6f1794]/5 via-[#000080]/5 to-[#ff7f27]/5 rounded-3xl p-8 border border-purple-200/50 backdrop-blur-xl">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#6f1794] to-[#ff7f27] rounded-2xl flex items-center justify-center">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    ¿Tienes una sugerencia?
                  </h3>
                  <p className="text-gray-600">
                    Estamos constantemente innovando. Comparte tus ideas y ayúdanos a construir el futuro de la gestión salarial.
                  </p>
                </div>
                <a
                  href="mailto:contacto@consultus.pe"
                  className="px-6 py-3 bg-[#ff7f27] text-white rounded-full font-semibold hover:bg-[#e66d1f] hover:shadow-lg transition-all duration-300 whitespace-nowrap"
                >
                  Contactar
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
