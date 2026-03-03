import React from 'react'
import { Database, Building2, Users, FileText, Scale, TrendingUp, DollarSign } from 'lucide-react'

const Modules = () => {
  const modules = [
    {
      icon: Database,
      title: 'Fundamentos Bases de Datos',
      description: 'Base de datos dinámica integral con datos ABE que pueden ser usados de forma flexible en todo el sistema',
      features: [
        'Grupos ocupacionales y familia de puestos',
        'Modelos educativos y especializaciones',
        'Competencias y técnicas de valoración',
        'Documento de funciones y niveles',
        'Registro laboral y clasificación de puestos'
      ],
      color: 'purple'
    },
    {
      icon: Building2,
      title: 'Estructura y Puestos',
      description: 'Gestión completa de la estructura organizacional con organigramas dinámicos.',
      features: [
        'Gestión de departamentos',
        'Administración de puestos', 
        'Organigramas básicos y complementarios',
        'Jerarquías automáticas',
        'Visualización interactiva'
      ],
      color: 'blue'
    },
    {
      icon: Users,
      title: 'Trabajadores',
      description: 'Centralización de información personal y laboral del capital humano.',
      features: [
        'Ficha personal completa',
        'Información laboral actualizada',
        'Historial de puestos',
        'Seguimiento de movimientos',
        'Gestión de documentación'
      ],
      color: 'orange'
    },
    {
      icon: FileText,
      title: 'Descripción y Perfiles',
      description: 'Creación detallada de descripciones de puestos con flujo interactivo.',
      features: [
        'Definición de visión del puesto',
        'Descripción de funciones',
        'Perfiles de competencias',
        'Requisitos del puesto',
        'Flujo interactivo de creación'
      ],
      color: 'purple'
    },
    {
      icon: Scale,
      title: 'Valoración y Categorización',
      description: 'Sistema integral de valoración de puestos con métricas automatizadas.',
      features: [
        'Manual de valoración de puestos',
        'Valoración automatizada',
        'Categorización de puestos',
        'Matriz de valoración y categorización',
        'Análisis comparativo'
      ],
      color: 'blue'
    },
    {
      icon: TrendingUp,
      title: 'Equidad Interna y Competitividad',
      description: 'Análisis avanzado de equidad salarial y competitividad con IA.',
      features: [
        'Propuesta salarial por categoría',
        'Matriz y gráficas de equidad interna',
        'Uso de encuestas salariales (IA)',
        'Matriz y gráficas de competitividad',
        'Análisis predictivo'
      ],
      color: 'purple'
    },
    {
      icon: DollarSign,
      title: 'Estructura Salarial',
      description: 'Diseño de estructuras salariales con proyección de costos de implementación.',
      features: [
        'Diseño Breadbanding',
        'Costo de implementación',
        'Simulaciones salariales',
        'Proyecciones financieras',
        'Análisis de impacto económico'
      ],
      color: 'orange'
    }
  ]

  const getColorClasses = (color) => {
    const colors = {
      purple: {
        bg: 'bg-purple-50',
        border: 'border-purple-100',
        icon: 'text-purple-600'
      },
      blue: {
        bg: 'bg-blue-50', 
        border: 'border-blue-100',
        icon: 'text-blue-600'
      },
      orange: {
        bg: 'bg-orange-50',
        border: 'border-orange-100', 
        icon: 'text-orange-600'
      }
    }
    return colors[color] || colors.purple
  }

  return (
    <section id="modulos" className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-xs font-bold text-primary uppercase tracking-wide">
              Módulos Técnicos
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-heading mb-4">
            Potencia tu gestión con <span className="text-gradient">tecnología inteligente</span>
          </h2>
          <p className="text-lg text-paragraph max-w-3xl mx-auto">
            Sistema integral de gestión salarial con módulos diseñados para optimizar cada aspecto de tu organización
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {modules.map((module, index) => {
            const colorClasses = getColorClasses(module.color)
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-10 shadow-xl border border-gray-100 relative"
              >
                {/* Blinking gradient dot in top right corner */}
                <div className="absolute top-6 right-6 w-2 h-2 rounded-full dot-blink"></div>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 ${colorClasses.bg} ${colorClasses.border} border rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <module.icon size={32} className={colorClasses.icon} />
                  </div>
                  <h3 className="text-lg font-bold text-heading">
                    {module.title}
                  </h3>
                </div>
                
                <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-4 leading-relaxed">
                  {module.description}
                </p>

                <ul className="space-y-2">
                  {module.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-xs sm:text-xs md:text-sm text-gray-700 flex items-start">
                      <span className="w-1 h-1 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Modules
