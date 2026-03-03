import React from 'react'
import { Rocket } from 'lucide-react'

const SuggestionBanner = () => {
  return (
    <section className="py-0 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-blue-50/50 border border-blue-200/70 rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col sm:flex-row items-center sm:justify-between gap-4 sm:gap-6">
          <div className="flex items-center gap-3 sm:gap-4 flex-1 text-center sm:text-left">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 gradient-ia-badge rounded-2xl flex items-center justify-center flex-shrink-0">
              <Rocket size={24} className="text-white sm:hidden" />
              <Rocket size={26} className="text-white hidden sm:block md:hidden" />
              <Rocket size={28} className="text-white hidden md:block" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-heading mb-1 sm:mb-2">¿Tienes una sugerencia?</h3>
              <p className="text-paragraph text-sm sm:text-base">
                Estamos constantemente innovando. Comparte tus ideas y ayúdanos a construir el futuro de la gestión salarial.
              </p>
            </div>
          </div>
          <a href="#contacto" className="bg-accent hover:bg-orange-600 text-white font-bold px-6 sm:px-8 py-2 sm:py-3 rounded-full transition-colors duration-200 flex-shrink-0 text-sm sm:text-base">
            Contactar
          </a>
        </div>
      </div>
    </section>
  )
}

export default SuggestionBanner
