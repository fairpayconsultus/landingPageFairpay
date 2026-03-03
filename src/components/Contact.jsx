import React from 'react'
import { Send, Mail, Building2, ArrowRight, CheckCircle } from 'lucide-react'

const Contact = () => {
  const benefits = [
    'Automatización completa de procesos salariales',
    'Análisis de equidad con inteligencia artificial',
    'Cumplimiento normativo garantizado',
    'ROI positivo desde el primer mes',
    'Soporte técnico especializado 24/7'
  ]

  return (
    <section id="contacto" className="section-pad bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-xs font-bold text-primary uppercase tracking-wide">
              Contáctanos
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-heading mb-4">
            Transforma tu <span className="text-gradient">gestión salarial</span>
          </h2>
          <p className="text-lg text-paragraph max-w-2xl mx-auto">
            Agenda una demostración personalizada y descubre cómo Fairpay puede revolucionar tu organización
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Side - Benefits & Contact Info */}
          <div>
            {/* Benefits Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8">
              <h3 className="text-xl font-bold text-heading mb-6">¿Por qué elegir Fairpay?</h3>
              
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 gradient-benefits rounded-full flex items-center justify-center mt-0.5 flex-shrink-0 shadow-sm">
                      <CheckCircle size={12} className="text-white" strokeWidth={2} />
                    </div>
                    <span className="text-paragraph">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 flex items-center gap-4">
                <div className="w-12 h-12 gradient-management rounded-xl flex items-center justify-center shadow-sm">
                  <Mail size={20} className="text-white" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Email</p>
                  <p className="text-sm font-semibold text-heading">contacto@consultus.pe</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 flex items-center gap-4">
                <div className="w-12 h-12 gradient-management-alt rounded-xl flex items-center justify-center shadow-sm">
                  <Building2 size={20} className="text-white" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Oficinas</p>
                  <p className="text-sm font-semibold text-heading">San Isidro • Miraflores</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-heading mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  placeholder="Juan Pérez"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-heading mb-2">
                  Email corporativo
                </label>
                <input
                  type="email"
                  placeholder="juan.perez@empresa.com"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-heading mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    placeholder="Mi Empresa"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-heading mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    placeholder="+51 999 999 999"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-heading mb-2">
                  Mensaje
                </label>
                <textarea
                  placeholder="Cuéntanos sobre los necesidades..."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-secondary text-center justify-center"
              >
                Enviar mensaje
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
