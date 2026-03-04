import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Check, Star, ArrowRight, Building2, Users, Building, Rocket } from "lucide-react";

export function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const plans = [
    {
      icon: Building2,
      name: "Plan 1",
      range: "De 10 a 50 Puestos",
      description: "Ideal para pequeñas empresas",
      popular: false,
      modules: [
        { name: "Descripción de Puestos", price: 550.0 },
        { name: "Valoración y Categorización", price: 880.0 },
        { name: "Equidad y Competitividad", price: 1045.0 },
        { name: "Estructuras Salariales (Completo)", price: 1292.5 },
      ],
      color: "from-[#6f1794] to-[#000080]",
      bgColor: "from-purple-50 to-blue-50",
    },
    {
      icon: Users,
      name: "Plan 2",
      range: "De 51 a 200 Puestos",
      description: "Perfecto para empresas en crecimiento",
      popular: true,
      modules: [
        { name: "Descripción de Puestos", price: 1760.0 },
        { name: "Valoración y Categorización", price: 2816.0 },
        { name: "Equidad y Competitividad", price: 3344.0 },
        { name: "Estructuras Salariales (Completo)", price: 4136.0 },
      ],
      color: "from-[#ff7f27] to-[#6f1794]",
      bgColor: "from-orange-50 to-purple-50",
    },
    {
      icon: Building,
      name: "Plan 3",
      range: "De 201 a 500 Puestos",
      description: "Para grandes organizaciones",
      popular: false,
      modules: [
        { name: "Descripción de Puestos", price: 3300.0 },
        { name: "Valoración y Categorización", price: 5280.0 },
        { name: "Equidad y Competitividad", price: 6270.0 },
        { name: "Estructuras Salariales (Completo)", price: 7755.0 },
      ],
      color: "from-[#000080] to-[#6f1794]",
      bgColor: "from-blue-50 to-purple-50",
    },
    {
      icon: Rocket,
      name: "Plan 4",
      range: "Más de 500 Puestos",
      description: "Para corporaciones enterprise",
      popular: false,
      modules: [
        { name: "Descripción de Puestos", price: 5500.0 },
        { name: "Valoración y Categorización", price: 8800.0 },
        { name: "Equidad y Competitividad", price: 10450.0 },
        { name: "Estructuras Salariales (Completo)", price: 12925.0 },
      ],
      color: "from-[#6f1794] to-[#ff7f27]",
      bgColor: "from-purple-50 to-orange-50",
    },
  ];

  return (
    <section id="precios" ref={ref} className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#6f1794]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ff7f27]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#000080]/3 rounded-full blur-3xl" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 15, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-24 left-20 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6f1794]/10 to-transparent backdrop-blur-sm border border-purple-200/30"
        />
        <motion.div
          animate={{
            y: [0, 25, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/3 right-12 w-20 h-20 rounded-full bg-gradient-to-br from-[#ff7f27]/10 to-transparent backdrop-blur-sm border border-orange-200/30"
        />
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 left-1/4 w-24 h-24 rounded-3xl bg-gradient-to-br from-[#000080]/8 to-transparent backdrop-blur-sm border border-blue-200/30"
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
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#6f1794]/10 to-[#ff7f27]/10 text-[#6f1794] rounded-full font-semibold mb-4">
            Precios Flexibles
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Planes diseñados para{" "}
            <span className="bg-gradient-to-r from-[#6f1794] via-[#000080] to-[#ff7f27] bg-clip-text text-transparent">
              tu organización
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Selecciona el módulo que necesitas según el tamaño de tu empresa
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className={`relative group ${plan.popular ? "lg:-mt-4" : ""}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#ff7f27] to-[#6f1794] text-white rounded-full shadow-xl text-sm font-bold">
                    <Star className="w-4 h-4 fill-current" />
                    Más Popular
                  </div>
                </div>
              )}

              {/* Card */}
              <div
                className={`h-full bg-gradient-to-br ${plan.bgColor} rounded-3xl p-8 border-2 ${
                  plan.popular ? "border-[#ff7f27]" : "border-gray-200"
                } shadow-lg hover:shadow-2xl transition-all duration-500 ${
                  plan.popular ? "scale-105" : "hover:-translate-y-2"
                }`}
              >
                {/* Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-14 h-14 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <plan.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${plan.color}`} />
                </div>

                {/* Plan Info */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className={`text-lg font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent mb-1`}>
                    {plan.range}
                  </p>
                  <p className="text-sm text-gray-600">{plan.description}</p>
                </div>

                {/* Modules */}
                <div className="space-y-4 mb-8">
                  {plan.modules.map((module, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.1 + idx * 0.1 }}
                      className="bg-white/70 backdrop-blur-sm rounded-xl p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex justify-between items-start gap-2 mb-2">
                        <span className="text-sm font-medium text-gray-700 flex-1">{module.name}</span>
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center flex-shrink-0`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                      </div>
                      <p className={`font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                        ${module.price.toLocaleString("en-US", { minimumFractionDigits: 2 })} USD
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <a
                  href="#contacto"
                  className={`w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r ${plan.color} text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 group`}
                >
                  Solicitar cotización
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 bg-white/70 backdrop-blur-xl rounded-3xl border border-gray-200/50 shadow-xl">
            <div className="w-16 h-16 bg-gradient-to-br from-[#6f1794] to-[#ff7f27] rounded-2xl flex items-center justify-center flex-shrink-0">
              <Star className="w-8 h-8 text-white" />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold text-gray-900 mb-2">¿Necesitas un plan personalizado?</h3>
              <p className="text-gray-600">
                Contáctanos para soluciones empresariales personalizadas con funcionalidades adicionales
              </p>
            </div>
            <a
              href="#contacto"
              className="px-8 py-3 bg-[#ff7f27] text-white rounded-full font-semibold hover:bg-[#e66d1f] hover:shadow-xl transition-all duration-300 whitespace-nowrap"
            >
              Contactar
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
