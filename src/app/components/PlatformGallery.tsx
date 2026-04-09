import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import img1 from "../../assets/web/1-General.jpg";
import img2 from "../../assets/web/2-Analiticas.jpg";
import img3 from "../../assets/web/3-Estructura-organizacional-y-puestos.jpg";
import img4 from "../../assets/web/4-Base-de-datos-de-trabajadores-b.jpg";
import img5 from "../../assets/web/5-Descripción-perfiles.jpg";
import img6 from "../../assets/web/6-Gerente-de-producción-b.jpg";
import img7 from "../../assets/web/7-Valoración-y-categorización-b.jpg";
import img8 from "../../assets/web/8-Equidad-interna.jpg";
import img9 from "../../assets/web/9-Equidad-externa.jpg";
import img10 from "../../assets/web/10-Estructura-Salarial-b.jpg";
import img11 from "../../assets/web/11-Analisis-b.jpg";

export function PlatformGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: img1, title: "Dashboard General", module: "FAIRPAY Suite" },
    { src: img2, title: "Analíticas", module: "Fairpay Analitycs" },
    { src: img3, title: "Estructura Organizacional y Puestos", module: "Fairpay Organization" },
    { src: img4, title: "Base de Datos de Trabajadores", module: "Fairpay Data" },
    { src: img5, title: "Descripción de Perfiles", module: "Fairpay Jobs" },
    { src: img6, title: "Detalle del Puesto", module: "Fairpay Jobs" },
    { src: img7, title: "Valoración y Categorización", module: "Fairpay Value" },
    { src: img8, title: "Equidad Interna", module: "Fairpay Salary Analysis" },
    { src: img9, title: "Equidad Externa", module: "Fairpay Salary Market" },
    { src: img10, title: "Estructura Salarial", module: "Fairpay Broadbandig" },
    { src: img11, title: "Análisis", module: "Fairpay Salary Analysis" },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section ref={ref} id="galeria" className="relative py-24 bg-gradient-to-b from-white via-slate-50/50 to-blue-50/30 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#a8d9fa]/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#10182b]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#10182b]/10 to-[#405687]/10 text-[#10182b] rounded-full font-semibold mb-4">
            Galería
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Conoce la plataforma
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explora las vistas y funcionalidades de FAIRPAY Suite
          </p>
        </motion.div>

        {/* Main Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mb-12"
        >
          {/* Main Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/50 backdrop-blur-xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                src={images[currentIndex].src}
                alt={images[currentIndex].title}
                className="w-full h-auto object-cover"
              />
            </AnimatePresence>
            {/* Overlay with title and module */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
              <span className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r from-[#10182b] to-[#a8d9fa] text-white mb-3">
                {images[currentIndex].module}
              </span>
              <h3 className="text-2xl font-bold text-white">{images[currentIndex].title}</h3>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur-xl rounded-full flex items-center justify-center hover:bg-white shadow-lg transition-all duration-300 hover:scale-110 group"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 text-[#10182b] group-hover:text-[#405687]" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur-xl rounded-full flex items-center justify-center hover:bg-white shadow-lg transition-all duration-300 hover:scale-110 group"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 text-[#10182b] group-hover:text-[#405687]" />
          </button>

          {/* Indicator - Moved below main image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center items-center gap-2 mt-6"
          >
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-gradient-to-r from-[#10182b] to-[#a8d9fa]"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Thumbnail Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
        >
          {images.map((image, index) => (
            <div key={index} className="flex flex-col gap-2">
              <motion.button
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                  index === currentIndex
                    ? "border-[#10182b] shadow-lg"
                    : "border-gray-200 hover:border-[#a8d9fa]"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-24 object-cover"
                />
                {index === currentIndex && (
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10182b]/40 to-transparent" />
                )}
              </motion.button>
              <p className="text-xs font-semibold text-gray-700 text-center line-clamp-2">
                {image.title}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
