import React from 'react'
import { FileText, BarChart3, Rocket, Clock } from 'lucide-react'

const Innovation = () => {
  const developmentCards = [
    {
      icon: FileText,
      title: 'Exportación de Estructuras Salariales',
      description: 'Exporta tus estructuras salariales en múltiples formatos para integración con otros sistemas empresariales.',
      status: 'En desarrollo activo'
    },
    {
      icon: BarChart3,
      title: 'Presupuesto de Personal por Áreas',
      description: 'Gestión completa del presupuesto con análisis de presupuesto aprobado vs ejecutado, control de puestos asignados y vacantes.',
      features: [
        'Presupuesto aprobado vs ejecutado',
        'N° y costo de puestos asignados', 
        'N° y costo de puestos vacantes',
        'Proyecciones presupuestales'
      ],
      status: 'En desarrollo activo'
    }
  ]

  return (
    <section className="section-pad bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-4">
            <Rocket size={16} className="text-accent" />
            <span className="text-xs font-bold text-accent uppercase tracking-wide">
              Próximamente
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-heading mb-4">
            Innovación <span className="text-gradient">continua</span>
          </h2>
          <p className="text-lg text-paragraph max-w-2xl mx-auto">
            Nuevas funcionalidades en desarrollo para potenciar tu gestión de talento
          </p>
        </div>

        {/* Development Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {developmentCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border-2 border-dashed border-gray-200 relative hover:border-gray-300 transition-colors duration-300"
            >
              {/* Status Badge */}
              <div className="absolute -top-4 -right-4 z-10">
                <span className="gradient-ia-badge text-white text-sm font-bold px-5 py-2 rounded-full shadow-lg inline-flex items-center gap-2">
                  <Clock size={18} />
                  En desarrollo
                </span>
              </div>

              {/* Icon and Title */}
              <div className="flex items-center gap-3 mb-6 mt-4">
                <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <card.icon size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-heading">
                  {card.title}
                </h3>
              </div>
              
              <p className="text-paragraph text-sm leading-relaxed mb-6">
                {card.description}
              </p>

              {/* Features (if available) */}
              {card.features && (
                <ul className="space-y-3 mb-6">
                  {card.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-700 flex items-start">
                      <span className="w-1 h-1 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              )}

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full gradient-ia-badge w-3/4"></div>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600 mt-2">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span>{card.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Innovation
