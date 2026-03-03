import React, { useState } from 'react'
import { Check, Star, Building2, Users, Package, Rocket, ArrowRight } from 'lucide-react'

const Pricing = () => {
  const [activeTab, setActiveTab] = useState('anual')

  const tabs = [
    { id: 'anual', label: 'Anual', subtitle: 'Licencia por año' },
    { id: 'modular', label: 'Modular', subtitle: 'Elige tus módulos' },
    { id: 'soporte', label: 'Soporte', subtitle: 'Incluido en todos' }
  ]

  const plans = [
    {
      id: 'plan1',
      name: 'Plan 1',
      range: 'De 10 a 50 Puestos',
      subtitle: 'Ideal para pequeñas empresas',
      icon: Building2,
      features: [
        { name: 'Descripción de Puestos', price: 'USD 550.00' },
        { name: 'Valoración y Categorización', price: 'USD 880.00' },
        { name: 'Equidad y Competitividad', price: 'USD 1,045.00' },
        { name: 'Estructura Salarial (Completo)', price: 'USD 1,202.50' }
      ],
      cta: 'Solicitar Demo',
      popular: false
    },
    {
      id: 'plan2',
      name: 'Plan 2',
      range: 'De 51 a 200 Puestos', 
      subtitle: 'Perfecto para empresas en crecimiento',
      icon: Users,
      features: [
        { name: 'Descripción de Puestos', price: 'USD 1,760.00' },
        { name: 'Valoración y Categorización', price: 'USD 2,816.00' },
        { name: 'Equidad y Competitividad', price: 'USD 3,344.00' },
        { name: 'Estructura Salarial (Completo)', price: 'USD 4,136.00' }
      ],
      cta: 'Solicitar Demo',
      popular: true
    },
    {
      id: 'plan3',
      name: 'Plan 3',
      range: 'De 201 a 500 Puestos',
      subtitle: 'Para grandes organizaciones',
      icon: Package,
      features: [
        { name: 'Descripción de Puestos', price: 'USD 3,300.00' },
        { name: 'Valoración y Categorización', price: 'USD 5,280.00' },
        { name: 'Equidad y Competitividad', price: 'USD 6,270.00' },
        { name: 'Estructura Salarial (Completo)', price: 'USD 7,755.00' }
      ],
      cta: 'Solicitar Demo',
      popular: false
    },
    {
      id: 'plan4',
      name: 'Plan 4',
      range: 'Más de 500 Puestos',
      subtitle: 'Solución empresarial personalizada',
      icon: Rocket,
      features: [
        { name: 'Todos los módulos', price: '' },
        { name: 'Soporte prioritario', price: '' },
        { name: 'Implementación asistida', price: '' },
        { name: 'Consultorías personalizadas', price: '' }
      ],
      cta: 'Consultar',
      popular: false
    }
  ]

  return (
    <section id="precios" className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-xs font-bold text-primary uppercase tracking-wide">
              Precios
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-heading mb-4">
            Planes diseñados para <span className="text-gradient">cada empresa</span>
          </h2>
          <p className="text-lg text-paragraph max-w-2xl mx-auto">
            Elige el plan que mejor se adapte al tamaño de tu organización. Licencias anuales con todos los beneficios.
          </p>
        </div>

        {/* Pricing Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-purple-100/60 rounded-2xl px-12 py-5 border border-purple-200/60 max-w-4xl w-full">
            <div className="flex justify-around items-center">
              {tabs.map((tab) => {
                let textColor = 'text-gray-600'
                if (tab.id === 'anual') textColor = 'text-primary'
                else if (tab.id === 'modular') textColor = 'text-gray-800'
                else if (tab.id === 'soporte') textColor = 'text-red-500'
                
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className="text-center hover:opacity-80 transition-opacity"
                  >
                    <div className={`text-2xl font-bold mb-1 ${textColor}`}>{tab.label}</div>
                    <div className="text-sm text-gray-600">{tab.subtitle}</div>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-2xl p-6 transition-all duration-300 ${
                plan.popular
                  ? 'border-2 border-accent shadow-lg scale-105'
                  : 'border border-gray-200 shadow-sm hover:shadow-md'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="gradient-ia-badge text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg inline-flex items-center gap-2 whitespace-nowrap">
                    <Star size={16} fill="currentColor" />
                    Más Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 gradient-ia-badge rounded-lg flex items-center justify-center">
                    <plan.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-heading">{plan.name}</h3>
                </div>
                <p className="text-sm font-semibold text-primary mb-1">{plan.range}</p>
                <p className="text-xs text-muted">{plan.subtitle}</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start justify-between">
                    <div className="flex items-start gap-2">
                      <Check size={14} className="text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-paragraph">{feature.name}</span>
                    </div>
                    {feature.price && (
                      <span className="text-xs font-semibold text-primary whitespace-nowrap ml-2">
                        {feature.price}
                      </span>
                    )}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full py-3 px-4 rounded-full font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
                  plan.popular
                    ? 'bg-accent text-white hover:bg-orange-600'
                    : plan.id === 'plan4'
                    ? 'bg-primary text-white hover:bg-primary-hover'
                    : 'bg-accent text-white hover:bg-orange-600'
                }`}
              >
                {plan.cta}
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 shadow-md">
            <div className="w-2 h-2 bg-accent rounded-full"></div>
            <p className="text-sm text-gray-700">
              <strong>Nota:</strong> Los costos no incluyen IGV
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
