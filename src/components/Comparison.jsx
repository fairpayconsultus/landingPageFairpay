import React from 'react'
import { X, Check, TrendingUp, Users, Target, Zap } from 'lucide-react'

const Comparison = () => {
  const beforeItems = [
    'Procesos manuales y repetitivos',
    'Inversión excesiva de recursos',
    'Falta de equidad y transparencia',
    'Análisis limitados y subjetivos',
  ]

  const afterItems = [
    { text: 'Biblioteca de fundamentos en línea', icon: Check },
    { text: 'Ejecución acelerada y eficiente', icon: TrendingUp },
    { text: 'Participación por roles asignados', icon: Users },
    { text: 'Equidad interna garantizada por IA', icon: Target },
  ]

  return (
    <section id="beneficios" className="section-pad bg-surface">
      
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-xs font-bold text-primary uppercase tracking-wide">
              El Cambio
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-heading mb-4">
            Antes vs <span className="text-gradient">Después</span>
          </h2>
          <p className="text-lg text-paragraph max-w-2xl mx-auto">
            Transforma tu gestión de talento humano con tecnología inteligente
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Before Card */}
          <div className="bg-red-50 rounded-2xl p-12 border border-red-100 shadow-lg">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                <X size={24} className="text-red-600" />
              </div>
              <span className="text-2xl font-bold text-black">Antes</span>
            </div>
            <div className="space-y-8">
              {beforeItems.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <X size={20} className="text-red-500 mt-1 flex-shrink-0" />
                  <span className="text-red-700 text-lg leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* After Card */}
          <div className="bg-white rounded-2xl p-12 border-2 border-purple-100 shadow-lg relative">
            {/* IA Badge protruding from card corner */}
            <div className="absolute -top-5 -right-5 z-10">
              <span className="gradient-ia-badge text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                IA Powered
              </span>
            </div>
            
            <div className="flex items-start gap-3 mb-10">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mt-1">
                <Zap size={24} className="text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-black">Después</span>
                <span className="text-base text-primary">con Fairpay</span>
              </div>
            </div>
            <div className="space-y-8">
              {afterItems.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <div key={index} className="flex items-start gap-4">
                    <IconComponent size={20} className="text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-heading text-lg leading-relaxed">{item.text}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-paragraph mb-6">
            Únete a las empresas que ya están transformando su gestión de talento
          </p>
          <a href="#contacto" className="btn-secondary">
            Comenzar ahora
          </a>
        </div>
      </div>
    </section>
  )
}

export default Comparison
