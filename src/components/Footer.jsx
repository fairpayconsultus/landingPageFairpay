import React from 'react'
import { Linkedin, Facebook, Instagram, MapPin, Mail, Phone } from 'lucide-react'
import LogoMenuSB from '../assets/images/LogoMenuSB.png';

const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ]

  return (
    <footer className="footer-gradient-bg text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-20 footer-glow-effect">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img 
                src={LogoMenuSB}
                alt="Fairpay Logo" 
                className="h-14 mb-6"
              />
            </div>
            
            <p className="text-base leading-relaxed mb-8" style={{ color: '#B0B0B0' }}>
              La ingeniería salarial, ahora es inteligente. Transformamos el talento en estrategia.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
                  style={{ color: '#B0B0B0' }}
                >
                  <social.icon size={20} className="hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h3 className="text-base font-semibold mb-6" style={{ color: '#FFFFFF' }}>
              Enlaces Rápidos
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full" style={{ backgroundColor: '#4B0082' }}></span>
                <a href="#inicio" className="hover:text-white text-base transition-colors" style={{ color: '#B0B0B0' }}>Inicio</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full" style={{ backgroundColor: '#4B0082' }}></span>
                <a href="#beneficios" className="hover:text-white text-base transition-colors" style={{ color: '#B0B0B0' }}>Beneficios</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full" style={{ backgroundColor: '#4B0082' }}></span>
                <a href="#modulos" className="hover:text-white text-base transition-colors" style={{ color: '#B0B0B0' }}>Módulos</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full" style={{ backgroundColor: '#4B0082' }}></span>
                <a href="#roadmap" className="hover:text-white text-base transition-colors" style={{ color: '#B0B0B0' }}>Roadmap</a>
              </li>
            </ul>
          </div>

          {/* Nuestras Sedes */}
          <div>
            <h3 className="text-base font-semibold mb-6" style={{ color: '#FFFFFF' }}>
              Nuestras Sedes
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-2">
                <MapPin size={18} className="text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-base font-medium" style={{ color: '#FFFFFF' }}>San Isidro</p>
                  <p className="text-sm leading-relaxed" style={{ color: '#B0B0B0' }}>
                    Av. República de Panamá 3535,<br />San Isidro<br />Lima, Perú
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <MapPin size={18} className="text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-base font-medium" style={{ color: '#FFFFFF' }}>Miraflores</p>
                  <p className="text-sm leading-relaxed" style={{ color: '#B0B0B0' }}>
                    Av. José Pardo 620, Miraflores<br />Lima, Perú
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-base font-semibold mb-6" style={{ color: '#FFFFFF' }}>
              Contacto
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Mail size={18} style={{ color: '#B0B0B0' }} />
                <a href="mailto:contacto@consultus.pe" className="hover:text-white text-base transition-colors" style={{ color: '#B0B0B0' }}>
                  contacto@consultus.pe
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} style={{ color: '#B0B0B0' }} />
                <a href="mailto:info@consultus.pe" className="hover:text-white text-base transition-colors" style={{ color: '#B0B0B0' }}>
                  info@consultus.pe
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} style={{ color: '#B0B0B0' }} />
                <a href="tel:+51734548786" className="hover:text-white text-base transition-colors" style={{ color: '#B0B0B0' }}>
                  +51 734 54 87 86
                </a>
              </div>
              
              {/* CTA Button */}
              <div className="mt-6">
                <a href="#contacto" className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded text-base font-medium transition-colors">
                  Solicitar Demo
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t footer-divider pt-6 lg:pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-6">
            <div className="text-sm" style={{ color: '#B0B0B0' }}>
              <span>© 2026 Fairpay by Consultus. Todos los derechos reservados.</span>
            </div>
            
            <div className="flex items-center gap-8 text-sm">
              <a href="#" className="hover:text-white transition-colors" style={{ color: '#B0B0B0' }}>
                Términos y Condiciones
              </a>
              <a href="#" className="hover:text-white transition-colors" style={{ color: '#B0B0B0' }}>
                Política de Privacidad
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
