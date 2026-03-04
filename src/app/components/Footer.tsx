import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import logoFairpay from "../../assets/logo-fairpay.svg";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const locations = [
    {
      name: "San Isidro",
      address: "Av. República de Panamá 3535, San Isidro",
      city: "Lima, Perú",
    },
    {
      name: "Miraflores",
      address: "Av. José Pardo 620, Miraflores",
      city: "Lima, Perú",
    },
  ];

  const contactInfo = [
    { icon: Mail, text: "contacto@consultus.pe", href: "mailto:contacto@consultus.pe" },
    { icon: Mail, text: "info@consultus.pe", href: "mailto:info@consultus.pe" },
    { icon: Phone, text: "+51 1 234 5678", href: "tel:+5112345678" },
  ];

  const quickLinks = [
    { label: "Inicio", href: "#hero" },
    { label: "Beneficios", href: "#cambio" },
    { label: "Módulos", href: "#modulos" },
    { label: "Roadmap", href: "#roadmap" },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <footer id="footer" className="bg-gradient-to-b from-gray-900 to-black text-white pt-20 pb-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#6f1794]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#ff7f27]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img 
                src={logoFairpay} 
                alt="Fairpay Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              La ingeniería salarial, ahora es inteligente. Transformamos el talento en estrategia.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 bg-white/5 backdrop-blur-xl rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-[#6f1794] hover:to-[#000080] transition-all duration-300 group"
              >
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 bg-white/5 backdrop-blur-xl rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-[#6f1794] hover:to-[#000080] transition-all duration-300 group"
              >
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 bg-white/5 backdrop-blur-xl rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-[#6f1794] hover:to-[#000080] transition-all duration-300 group"
              >
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#ff7f27] transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-[#6f1794] rounded-full group-hover:w-2 transition-all" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Nuestras Sedes</h3>
            <div className="space-y-6">
              {locations.map((location) => (
                <div key={location.name} className="text-gray-400">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#ff7f27] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">{location.name}</h4>
                      <p className="text-sm">{location.address}</p>
                      <p className="text-sm">{location.city}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contacto</h3>
            <ul className="space-y-4">
              {contactInfo.map((contact, index) => (
                <li key={index}>
                  <a
                    href={contact.href}
                    className="flex items-start gap-3 text-gray-400 hover:text-[#ff7f27] transition-colors duration-300 group"
                  >
                    <contact.icon className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{contact.text}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="#demo"
                className="inline-block px-6 py-3 bg-[#ff7f27] text-white rounded-full font-semibold hover:bg-[#e66d1f] hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm"
              >
                Solicitar Demo
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>
            © {currentYear} Fairpay by Consultus. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#ff7f27] transition-colors">
              Términos y Condiciones
            </a>
            <a href="#" className="hover:text-[#ff7f27] transition-colors">
              Política de Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}