import React from 'react'
import { ArrowRight, Star, Sparkles, Mouse } from 'lucide-react'

const Hero = () => {
  const stats = [
    {
      value: '80%',
      label: 'Reducción de tiempo',
      type: 'regular'
    },
    {
      value: '100%',
      label: 'Equidad garantizada',
      type: 'regular'
    },
    {
      value: 'IA',
      label: 'Análisis inteligente',
      type: 'special'
    },
  ]

  return (
    <section id="inicio" className="hero-bg pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-orange-200 rounded-full mb-8 shadow-sm">
            <Sparkles size={16} className="text-accent" />
            <span className="text-xs font-medium text-primary tracking-wide">
              Inteligencia Artificial aplicada a RRHH
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-heading leading-tight mb-8">
            La ingeniería salarial,
            <br />
            <span className="text-gradient">ahora es inteligente</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-paragraph max-w-4xl mx-auto leading-relaxed mb-12">
            Automatiza la valoración de puestos y el diseño de estructuras salariales con{' '}
            <span className="text-primary font-semibold">Fairpay</span>, la solución SaaS que transforma el talento en estrategia.
          </p>

          {/* CTA Button */}
          <div className="mb-20">
            <a href="#contacto" className="inline-flex items-center gap-3 btn-custom-gradient text-white px-12 py-5 rounded-full font-semibold text-xl transition-all duration-200 shadow-lg hover:shadow-xl">
              Solicitar Demo
              <ArrowRight size={24} />
            </a>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`rounded-xl p-6 shadow-md border ${
                  stat.type === 'special' 
                    ? 'bg-white border-gray-100' 
                    : 'bg-gray-50 border-gray-200'
                }`}
              >
                
                <div className={`text-3xl font-bold mb-2 ${
                  stat.type === 'special' ? 'text-primary' : 'text-primary'
                }`}>
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-paragraph">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 flex items-center justify-center animate-bounce-scroll">
                <Mouse size={70} className="text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
